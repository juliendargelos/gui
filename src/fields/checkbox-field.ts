import { html, css, query, TemplateResult } from 'lit-element'
import { Field, FieldParameters } from '~/field'
import { define } from '~/utils/decorators'

export interface CheckboxFieldParameters extends FieldParameters<boolean> {

}

@define export class CheckboxField extends Field<boolean, boolean, boolean> {
  protected toggle = (event: Event) => this.$input.click()
  @query('input') protected $input!: HTMLInputElement

  public static styles = css`
    ${Field.styles}

    :host {
      padding-top: var(--padding);
      padding-bottom: var(--padding);
    }

    input {
      width: 16px;
      height: 16px;
      padding: 0;
      margin-right: var(--padding);
      margin-left: var(--padding);
      border: 2px solid var(--primary-background);
      border-radius: 4px;
      transition: .2s;
    }

    input:checked {
      background-color: var(--secondary-foreground);
      border-color: var(--secondary-foreground);
      transition: .2s;
    }

    :host(:active) input {
      background-color: var(--tint);
      border-color: var(--tint);
      transition: 0;
    }

    :host(:active) input:checked {
      background-color: transparent;
    }
  `

  protected extract(event: InputEvent): boolean {
    return (event.target as HTMLInputElement).checked
  }

  public connectedCallback(): void {
    super.connectedCallback()
    this.addEventListener('click', this.toggle)
  }
  public disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('click', this.toggle)
  }

  public render(): TemplateResult {
    return html`
      <input
        type="checkbox"
        .checked=${this.value}
        .disabled=${this.disabled}
        @input=${this.input}
        @click=${(event: Event) => event.stopPropagation()}
      >
    `
  }

  public static match({ value = undefined }: Record<string, any>): boolean {
    return typeof value === 'boolean'
  }
}
