import { html, css, property, TemplateResult, query } from 'lit-element'
import { Field, FieldParameters } from '~/field'
import { define } from '~/utils/decorators'

import {
  Color,
  ColorFormat,
  color,
  colorFormat,
  colorAlpha,
  isColorFormat,
  isColorAlpha
} from '~/utils/color'

export interface ColorFieldParameters<
  Format extends ColorFormat = 'rgb',
  Alpha extends boolean = boolean
> extends FieldParameters<Color<Format, Alpha>> {
  format?: Format
  alpha?: Alpha
}

@define('color-field') export class ColorField<
  Format extends ColorFormat = 'rgb',
  Alpha extends boolean = boolean
> extends Field<Color<Format, Alpha>, Color> {
  @query('input[type="number"]') protected $alpha!: HTMLInputElement
  @property({ type: String, attribute: false }) protected displayValue: string
  @property({ type: Number, attribute: false }) protected displayAlpha: number
  @property({ type: String }) public format: Format
  @property({ type: Boolean }) public alpha: Alpha

  public static styles = css`
    ${Field.styles}

    :host {
      display: flex;
      align-items: center;
    }

    input[type="color"] {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border: 5px solid var(--secondary-background);
      margin-right: var(--padding);
      box-sizing: border-box;
    }

    div, input[type="number"] {
      height: 20px;
    }

    div {
      width: 47px;
      margin-right: var(--padding);
      border: 1px solid var(--primary-background);
      border-radius: 4px;
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      align-items: center;
      padding-right: 5px;
      padding-left: 5px;
    }

    div::before {
      content: 'α';
      color: var(--secondary-foreground);
      flex-grow: 0;
      flex-shrink: 0;
    }

    input[type="number"] {
      text-align: right;
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
      flex-grow: 1;
      flex-shrink: 0;
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
  `

  constructor({
    value = undefined,
    format = colorFormat(value, 'rgb') as Format,
    alpha = isColorAlpha(value) as Alpha,
    ...parameters
  }: ColorFieldParameters<Format, Alpha> = {}) {
    super(parameters)
    this.format = format
    this.alpha = alpha
    this.set(value as Color)
    this.displayValue = color(this.value, 'hex')
    this.displayAlpha = colorAlpha(this.value)
  }

  protected get includeAlpha(): boolean {
    return this.alpha && this.format !== 'hex' && this.format !== 'number'
  }

  protected parse(value: string): Color {
    if (this.includeAlpha) {
      let colorObject = color(value, 'object', true)
      colorObject.a = Math.max(0, Math.min(1,
        parseFloat(this.$alpha.value) || 0
      ))
      return colorObject
    }

    return value
  }

  protected extract(event: InputEvent): string {
    return event.target === this.$alpha
      ? color(this.value, 'hex')
      : (event.target as HTMLInputElement).value
  }

  public set(value: Color): this {
    super.set(color(value, this.format, this.alpha))
    return this
  }

  public render(): TemplateResult {
    const hex = color(this.value, 'hex')
    const alphaColor = `rgba(255, 255, 255, ${1 - colorAlpha(this.value)})`

    return html`
      <input
        type="text"
        .value=${this.displayValue}
        .disabled=${this.disabled}
        @input=${this.input}
        @blur=${() => {
          this.displayValue = ''
          requestAnimationFrame(() => {
            this.displayValue = color(this.value, 'hex')
          })
        }}
      >

      <input
        type="color"
        .value=${hex}
        .disabled=${this.disabled}
        style=${`
          background-color: ${color(this.value, 'rgb', true)};
          background-image: linear-gradient(-45deg, ${alphaColor} 50%, transparent 50%, transparent 100%, ${alphaColor} 100%, ${alphaColor});
        `}
        @input=${(event: InputEvent) => {
          this.input(event)
          this.displayValue = color(this.value, 'hex')
        }}
      >

      ${!this.includeAlpha ? '' : html`
        <div>
          <input
            type="number"
            .value=${this.displayAlpha}
            .disabled=${this.disabled}
            .min=${0}
            .max=${1}
            .step=${0.01}
            @input=${this.input}
            @blur=${() => {
              this.displayAlpha = colorAlpha(this.value)
            }}
          >
        </div>
      `}
    `
  }

  public static match({
    value = undefined,
    format = colorFormat(value)
  }: Record<string, any>): boolean {
    return isColorFormat(format)
  }
}
