/**
 * ## Image field
 *
 * ```
 * new GUI()
 *   .add({ value: File([], 'foo.png', { type: 'image/png' }) }) // Auto detect
 *   .add({ value: Blob([] { type: 'image/png' }) })
 *   .add({ value: '/foo.png' })
 *   .add({ field: 'image' }) // Specify field name
 *   .add({ field: new ImageField() }) // Provide field instance
 * ```
 *
 * <br>
 *
 * #### Preview
 *
 * <br>
 *
 * <img alt="preview" src="../media/fields/image.png" width="300">
 *
 * @packageDocumentation
 */

import { html, css, property, TemplateResult } from 'lit-element'
import { define } from '~/utils/decorators'

import {
  FileField,
  FileFieldParameters,
  FileFieldFormats
} from '~/fields/file-field'

export interface ImageFieldParameters<
  Format extends keyof FileFieldFormats = 'url'
> extends FileFieldParameters<Format> {

}

@define('image-field') export class ImageField<
  Format extends keyof FileFieldFormats = 'url'
> extends FileField<Format> {
  @property({ type: String, attribute: false }) protected thumbnail?: string

  /**
   * @ignore
   */
  public static styles = css`
    ${FileField.styles}

    :host {
      display: block;
    }

    figure {
      width: calc(100% - calc(2 * var(--padding)));
      height: 60px;
      margin-top: var(--padding);
      margin-left: var(--padding);
      margin-right: var(--padding);
      margin-bottom: 0;
      border: 1px solid var(--primary-background);
      border-radius: 4px;
      box-sizing: border-box;
      display: block;
      flex-grow: 0;
      flex-shrink: 0;
      position: relative;
      transition: .2s;
    }

    figure::before {
      content: 'Image';
      background-color: var(--primary-background);
      width: 100%;
      height: 100%;
      opacity: 0.4;
      z-index: -1;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-foreground);
      transition: .2s;
    }

    :host(:active) figure {
      border-color: var(--tint);
      transition: 0;
    }

    :host(:active) figure::before {
      color: var(--tint);
      transition: 0;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }

    div {
      display: flex;
      align-items: center;
    }
  `

  public constructor(parameters: ImageFieldParameters<Format> = {}) {
    super({ ...parameters, accept: 'image/*' })
  }

  public set(value: FileFieldFormats[Format] | undefined): this {
    if (this.thumbnail) {
      URL.revokeObjectURL(this.thumbnail)
      this.thumbnail = undefined
    }

    if (typeof value === 'string') {
      this.thumbnail = value
    } else if (value instanceof Blob || value instanceof File) {
      this.thumbnail = URL.createObjectURL(value)
    }

    return super.set(value)
  }

  /**
   * @ignore
   */
  public render(): TemplateResult {
    return html`
      <figure>
        ${this.thumbnail ? html`<img .src=${this.thumbnail}>` : ''}
      </figure>
      <div>
        ${super.render()}
      </div>
    `
  }

  /**
   * @ignore
   */
  public static match(parameters: Record<string, any>): boolean {
    const value = parameters.value as Blob | string

    return (value &&
      (typeof value === 'string' && /\.(png|jpe?g|gif|svg)$/i.test(value)) ||
      (value instanceof Blob && value.type.slice(0, 6) === 'image/')
    )
  }
}
