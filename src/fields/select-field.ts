/**
 * ```
 * new GUI()
 *   .add({ options: ['foo', 'bar'] }) // Auto detect
 *   .add({ options: { 'simple value': 'foo', 'complex value': new Blob([]) ] })
 *   .add({ field: 'select' }) // Specify field name
 *   .add({ field: new SelectField() }) // Provide field instance
 * ```
 *
 * <br>
 *
 * <center>
 *   <img alt="preview" src="../../media/fields/select.png" width="300">
 * </center
 *
 * @packageDocumentation
 */

import { html, css, property, TemplateResult } from 'lit-element'
import { Field, FieldParameters } from '~/field'
import { define } from '~/utils/decorators'
import { humanize } from '~/utils/string'

type SelectFieldOptions<Value = unknown> = { [label: string]: Value } | Value[]

export interface SelectFieldParameters<
  Value = unknown
> extends FieldParameters<Value> {
  options?: SelectFieldOptions<Value>
  humanize?: boolean
}

@define('select-field') export class SelectField<
  Value = unknown
> extends Field<Value> {
  @property({ type: Object }) public options?: SelectFieldOptions<Value>
  @property({ type: Boolean }) public humanize: boolean

  /**
   * @ignore
   */
  public static styles = css`
    ${Field.styles}

    :host {
      position: relative;
    }

    :host::after {
      content: '';
      width: 5px;
      height: 5px;
      top: 50%;
      right: var(--padding, 0);
      border-right: 1.5px solid var(--secondary-foreground);
      border-bottom: 1.5px solid var(--secondary-foreground);
      transform: translate(-50%, -50%) rotate(45deg) ;
      position: absolute;
      pointer-events: none;
    }
  `

  public constructor(parameters?: SelectFieldParameters<Value>)

  constructor({
    options = undefined,
    humanize = true,
    ...parameters
  }: SelectFieldParameters<Value> = {}) {
    super(parameters)
    this.options = options
    this.humanize = humanize
  }

  public get labels(): string[] {
    if (!this.options) return []

    let labels = Array.isArray(this.options)
      ? this.options.map((option: Value) => `${option}`)
      : Object.keys(this.options)

    this.humanize && labels.forEach((label: string, index: number) => {
      labels[index] = humanize(label)
    })

    return labels
  }

  public get values(): Value[] {
    if (!this.options) return []

    return Array.isArray(this.options)
      ? this.options
      : Object.values(this.options)
  }

  protected parse(value: string | number): Value {
    return this.values[value as number]
  }

  /**
   * @ignore
   */
  public render(): TemplateResult {
    return html`
      <select
        .disabled=${this.disabled}
        @input=${this.input}
      >
        ${this.labels.map((label, value) => html`
          <option
            value=${value}
            .selected=${this.parse(value) === this.value}
          >${label}</option>
        `)}
      </selectc>
    `
  }

  /**
   * @ignore
   */
  public static match({ options = undefined }: Record<string, any>): boolean {
    return options && typeof options === 'object'
  }
}
