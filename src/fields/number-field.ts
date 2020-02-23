import { html, css, property, query, TemplateResult } from 'lit-element'
import { Field, FieldParameters } from '~/field'
import { define } from '~/utils/decorators'

export interface NumberFieldParameters extends FieldParameters<number> {
  minimum?: number
  maximum?: number
  step?: number
  range?: boolean
}

const thumbStyles = css`
  appearance: none;
  background-color: var(--secondary-foreground);
  width: 10px;
  height: 10px;
  border-radius: 10px;
  transition: .15s;
  transform: translateY(calc(1px - 50%));
`

const thumbActiveStyles = css`
  background-color: var(--tint);
`

const trackStyles = css`
  background-color: var(--primary-background);
  height: 2px;
  border-radius: 2px;
`

@define('number-field') export class NumberField extends Field<number> {
  @query('input[type="number"]') protected $input?: HTMLInputElement
  @property({ type: Number, attribute: false }) protected displayValue: number
  @property({ type: Number }) public minimum: number
  @property({ type: Number }) public maximum: number
  @property({ type: Number }) public step?: number
  @property({ type: Boolean, reflect: true }) public range: boolean

  protected get inferedMinimum(): number {
    return this.range && this.minimum === -Infinity ? 0 : this.minimum
  }

  protected get inferedMaximum(): number {
    return this.range && this.maximum === Infinity ? 100 : this.maximum
  }

  public static styles = css`
    ${Field.styles}

    :host {
      display: flex;
    }

    div {
      flex-grow: 0;
      flex-shrink: 0;
    }

    input[type="number"] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }

    :host([range]) input[type="number"] {
      text-align: right;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
    }

    input[type=number]::-moz-inner-spin-button,
    input[type=number]::-moz-outer-spin-button {
      -moz-appearance: none;
      appearance: none;
    }

    input[type=number]::-ms-inner-spin-button,
    input[type=number]::-ms-outer-spin-button {
      -ms-appearance: none;
      appearance: none;
    }

    input[type="range"] {
      padding-right: 0;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${thumbStyles}
    }

    input[type="range"]:active::-webkit-slider-thumb {
      ${thumbActiveStyles}
    }

    input[type="range"]::-moz-slider-thumb {
      -moz-appearance: none;
      appearance: none;
      ${thumbStyles}
    }

    input[type="range"]:active::-moz-slider-thumb {
      ${thumbActiveStyles}
    }

    input[type="range"]::-ms-slider-thumb {
      -ms-appearance: none;
      appearance: none;
      ${thumbStyles}
    }

    input[type="range"]:active::-ms-slider-thumb {
      ${thumbActiveStyles}
    }

    input[type=range]::-webkit-slider-runnable-track {
      ${trackStyles}
    }

    input[type=range]::-moz-range-track {
      ${trackStyles}
    }

    input[type=range]::-ms-track {
      ${trackStyles}
    }

    :host(:not([range])) div, :host(:not([range])) input[type=number] {
      width: 100%;
    }
  `

  constructor({
    minimum = -Infinity,
    maximum = Infinity,
    step = undefined,
    range = true,
    ...parameters
  }: NumberFieldParameters = {}) {
    super(parameters)
    this.minimum = minimum
    this.maximum = maximum
    this.step = step
    this.range = range
    this.displayValue = this.value
  }

  protected parse(value: string): number {
    return Math.max(this.minimum, Math.min(this.maximum,
      parseFloat(value) || 0
    ))
  }

  public render(): TemplateResult {
    return html`
      ${this.range ? html`
        <input
          type="range"
          .value=${this.value}
          .disabled=${this.disabled}
          .min=${this.inferedMinimum}
          .max=${this.inferedMaximum}
          .step=${this.step}
          @input=${(event: InputEvent) => {
            this.input(event)
            this.displayValue = this.value
          }}
        >
      ` : ''}
      <div>
        <input
          type="number"
          .value=${this.displayValue}
          .disabled=${this.disabled}
          .min=${this.inferedMinimum}
          .max=${this.inferedMaximum}
          .step=${this.step}
          @input=${this.input}
          @blur=${() => {
            this.displayValue = (this.value || 0) + 1
            requestAnimationFrame(() => { this.displayValue = this.value })
          }}
        >
      </div>
    `
  }

  public static match({ value = undefined }: Record<string, any>): boolean {
    return typeof value === 'number'
  }
}
