import { html, css, property, TemplateResult } from 'lit-element'
import { Field, FieldParameters } from '~/field'
import { define } from '~/utils/decorators'
import { optionalString } from '~/utils/string'

export interface TextFieldParameters extends FieldParameters<string> {
  maximumLength?: number
  multiline?: boolean
}

@define export class TextField extends Field<string> {
  @property({ type: Number }) public maximumLength: number
  @property({ type: Boolean }) public multiline: boolean

  public static styles = css`
    ${Field.styles}

    input {
      height: 30px;
    }

    textarea {
      resize: vertical;
    }
  `

  constructor({
    maximumLength = -1,
    multiline = false,
    ...parameters
  }: TextFieldParameters = {}) {
    super(parameters)
    this.maximumLength = maximumLength
    this.multiline = multiline
  }

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

  public static match({ value = undefined }: Record<string, any>): boolean {
    return typeof value === 'string'
  }
}
