/**
 * ```
 * new GUI()
 *   .add({ options: 'foo' }) // Auto detect
 *   .add({ field: 'text' }) // Specify field name
 *   .add({ field: new TextField() }) // Provide field instance
 * ```
 *
 * <br>
 *
 * <center>
 *   <img alt="preview" src="/media/fields/text.png" width="300">
 * </center
 *
 * @packageDocumentation
 */

import { html, css, property, TemplateResult } from 'lit-element'
import { Field, FieldParameters } from '~/field'
import { define } from '~/utils/decorators'
import { optionalString } from '~/utils/string'

export interface TextFieldParameters extends FieldParameters<string> {
  maximumLength?: number
  multiline?: boolean
}

@define('text-field') export class TextField extends Field<string> {
  @property({ type: Number }) public maximumLength: number
  @property({ type: Boolean }) public multiline: boolean

  /**
   * @ignore
   */
  public static styles = css`
    ${Field.styles}

    input {
      height: 30px;
    }

    textarea {
      resize: vertical;
    }
  `

  public constructor(parameters?: TextFieldParameters)

  constructor({
    maximumLength = -1,
    multiline = false,
    ...parameters
  }: TextFieldParameters = {}) {
    super(parameters)
    this.maximumLength = maximumLength
    this.multiline = multiline
  }

  /**
   * @ignore
   */
  public render(): TemplateResult {
    if (this.multiline) {
      return html`
        <textarea
          .value=${optionalString(this.value)}
          .disabled=${this.disabled}
          maxLength=${this.maximumLength}
          @input=${this.input}
        ></textarea>
      `
    } else {
      return html`
        <input
          type="text"
          .value=${optionalString(this.value)}
          .disabled=${this.disabled}
          maxLength=${this.maximumLength}
          @input=${this.input}
        >
      `
    }
  }

  /**
   * @ignore
   */
  public static match({ value = undefined }: Record<string, any>): boolean {
    return typeof value === 'string'
  }
}
