import { TemplateResult, property, css } from 'lit-element'
import { Component } from '~/component'
import { UpdateEvent } from '~/update-event'

interface FieldType {
  new(parameters?: FieldParameters): Field<any, any, any>
  match(parameters: Record<string, any>): boolean
}

export interface FieldParameters<Input = any> {
  value?: Input
  disabled?: boolean
}

export class Field<
  Value = any,
  Input = Value,
  Raw = string
> extends Component<{
  update: UpdateEvent
  focus: Event
  blur: Event
}> {
  @property() public value!: Value
  @property({ type: Boolean }) public disabled: boolean

  protected static types: FieldType[] = []

  public static styles = css`
    ${Component.styles}

    input, select, textarea, button {
      background-color: transparent;
      width: 100%;
      margin: 0;
      padding: var(--padding, 0);
      display: block;
      border: none;
      outline: none;
      border-radius: 0;
      color: var(--secondary-foreground);
      font-size: 13px;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    input:focus,
    select:focus,
    textarea:focus {
      color: var(--tint)
    }
  `

  public constructor({
    value = undefined,
    disabled = false
  }: FieldParameters<Input> = {}) {
    super()
    this.set(value)
    this.disabled = disabled
  }

  protected input(event: InputEvent): void {
    event.stopPropagation()
    const previous = this.value
    Promise.resolve(this.parse(this.extract(event))).then((input) => this
      .set(input)
      .dispatchEvent(new UpdateEvent(this.value, previous))
    )
  }

  protected extract(event: InputEvent): Raw {
    return (event.target as HTMLInputElement).value as unknown as Raw
  }

  protected parse(value: Raw): Input | Promise<Input> {
    return value as unknown as Input
  }

  public set(value: Input | undefined): this {
    this.value = value as unknown as Value
    return this
  }

  public static match(parameters: Record<string, any>): boolean {
    return this.types.some(type => type.match(parameters))
  }

  public static register(type: FieldType): typeof Field {
    this.types.unshift(type)
    return this
  }

  public static from<T extends Field = Field>(
    parameters: Record<string, any>
  ): T {
    return new (
      this.types.find(type => type.match(parameters)) ||
      this.types[this.types.length - 1]
    )(parameters) as T
  }
}
