import { TemplateResult, html, property, css } from 'lit-element'
import { Field, FieldParameters } from '~/field'
import { UpdateEvent } from '~/update-event'
import { define } from '~/utils/decorators'
import { humanize } from '~/utils/string'

import {
  Controller,
  ControllerTarget,
  ControllerParameters
} from '~/controller'

export interface ValueControllerParameters<
  Target extends ControllerTarget = ControllerTarget,
  Property extends keyof Target = keyof Target,
  Value extends Target[Property] = Target[Property]
> extends ControllerParameters<Target> {
  field?: Field<Value> | string
  property?: Property
  inline?: boolean
  fluid?: boolean
}

export type ValueControllerFieldParameters<
  Target extends ControllerTarget = ControllerTarget,
  Property extends keyof Target = keyof Target,
  Value extends Target[Property] = Target[Property]
> = (
  Omit<ValueControllerParameters<Target, Property, Value>, 'field'> &
  FieldParameters<Value> &
  { [parameter: string]: any }
)

@define('value-controller') export class ValueController<
  Target extends ControllerTarget = ControllerTarget,
  Property extends keyof Target = keyof Target,
  Value extends Target[Property] = Target[Property]
> extends Controller<Target> {
  protected descriptor?: PropertyDescriptor
  public readonly field: Field<Value>
  public readonly property?: keyof Target
  @property({ type: Boolean, reflect: true }) protected focused: boolean = false
  @property({ type: Boolean, reflect: true }) public inline: boolean
  @property({ type: Boolean, reflect: true }) public fluid: boolean

  /**
   * @ignore
   */
  public static styles = css`
    ${Controller.styles}

    :host {
      display: flex;
      align-items: center;
      box-shadow: inset 0 0 0 var(--tint);
      transition: box-shadow .1s ease-out;
    }

    span {
      width: 30%;
      flex-shrink: 0;
      text-align: right;
      cursor: default;
      display: inline-block;
      align-self: flex-start;
    }

    div {
      width: 70%;
      flex-grow: 1;
    }

    :host([fluid]) span {
      width: auto;
      max-width: 30%;
      text-align: left;
    }

    :host([fluid]) div {
      width: auto;
    }

    :host(:not([inline])) {
      flex-direction: row;
    }

    :host(:not([inline])) span, :host(:not([inline])) div {
      width: 100%;
    }

    :host([focused]), :host(:active) {
      box-shadow: inset 3px 0 0 var(--tint);
      transition: box-shadow .1s ease-out;
    }
  `

  public get value(): Value | undefined {
    return this.field.value
  }

  public set value(value: Value | undefined) {
    this.field.set(value)
    this.commit(new UpdateEvent(value, undefined))
  }

  public constructor(parameters: ValueControllerParameters<
    Target,
    Property,
    Value
  >)

  public constructor(parameters: ValueControllerFieldParameters<
    Target,
    Property,
    Value
  >)

  public constructor({
    field = undefined,
    property = undefined,
    inline = true,
    fluid = false,
    target = undefined,
    listen = false,
    label = property ? humanize(`${property}`) : undefined,
    value = target && property ? target[property] as Value : undefined,
    ...parameters
  }: (
    ValueControllerParameters<Target, Property, Value> &
    ValueControllerFieldParameters<Target, Property, Value>
  )) {
    super({ target, listen, label })
    this.commit = this.commit.bind(this)

    this.property = property
    this.inline = inline
    this.fluid = fluid
    this.field = field instanceof Field ? field : Field.from({
      field,
      value,
      ...parameters
    }) as Field<Value>

    this.field.on('focus', () => { this.focused = true })
    this.field.on('blur', () => { this.focused = false })

    this.attach()

    this.value = value
  }

  protected commit(event: UpdateEvent): void {
    if (this.target && this.property) {
      this.target[this.property] = event.value as Target[keyof Target]
    }
  }

  public attach(target: Target | undefined = this.target): this {
    super.attach(target)

    if (this.target && this.property) {
      this.field.on('update', this.commit)
      this.value = this.target[this.property]

      if (this.listen) {
        this.descriptor = Object.getOwnPropertyDescriptor(
          this.target,
          this.property
        )! || { value: undefined }

        let value: Target[keyof Target]

        const {
          get = () => value,
          set = (v: Target[keyof Target]) => { value = v }
        } = this.descriptor

        try {
          Object.defineProperty(this.target, this.property, {
            get,
            set: (v: Target[keyof Target]) => {
              const previous = get()
              this.field.set(v as unknown as Value)
              set.call(this.target, v)
              this.dispatchEvent(new UpdateEvent(v, previous))
            }
          })
        } catch (error) {
          this.descriptor = undefined
          throw new Error(`Unable to initialize property setter: ${error}`)
        }
      }
    }

    return this
  }

  public dettach(): this {
    super.dettach()

    this.field.off('update', this.commit)

    if (this.target && this.property && this.descriptor) {
      if ('value' in this.descriptor) this.descriptor.value = this.value

      try {
        Object.defineProperty(this.target, this.property, this.descriptor)
        this.descriptor = undefined
      } catch (error) {
        throw new Error(`Unable to dispose property setter: ${error}`)
      }
    }

    return this
  }

  /**
   * @ignore
   */
  public render(): TemplateResult {
    return html`${this.label
      ? html`<span @mousedown=${(event: Event) => event.preventDefault()}>
          ${this.label}
        </span>`
      : ''
    }<div>${this.field}</div>`
  }
}
