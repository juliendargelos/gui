/**
 * ```
 * new GUI()
 *   .add({ value: () => console.log('foo') }) // Auto detect
 *   .add({ field: 'method' }) // Specify field name
 *   .add({ field: new MethodField() }) // Provide field instance
 * ```
 *
 * You can specify additional subfields controlling method arguments:
 *
 * ```
 * new GUI()
 *   .add({
 *     label: 'Add',
 *     value: (a, b) => alert(a + b) ,
 *     args: [{ value: 1 }, { value: 2 }]
 *     // Array of the same parameters you would give to add a field
 *     // Here we take advantage of auto-detection of number values
 *     // so we'll get the right field types
 *   })
 * ```
 *
 * <br>
 *
 * <center>
 *   <img alt="preview" src="../../media/fields/method.png" width="300">
 * </center
 *
 * @packageDocumentation
 */

import { html, css, property, TemplateResult } from 'lit-element'
import { Field, FieldParameters } from '~/field'
import { GroupController } from '~/controllers/group-controller'
import { define } from '~/utils/decorators'

import {
  ValueController,
  ValueControllerFieldParameters
} from '~/controllers/value-controller'

export interface MethodFieldParameters extends FieldParameters<
  (...args: unknown[]) => void
> {
  args?: ValueControllerFieldParameters[]
}

@define('method-field') export class MethodField extends Field<
  (...args: unknown[]) => void
> {
  protected parametersController?: GroupController

  /**
   * @ignore
   */
  public static styles = css`
    ${Field.styles}

    button {
      width: calc(100% - 2 * var(--padding));
      border: 1px solid var(--primary-background);
      border-radius: 4px;
      height: 25px;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: var(--padding);
      padding-right: var(--padding);
      margin-right: var(--padding);
      margin-left: var(--padding);
      cursor: pointer;
      transition: .2s;
    }

    button:active {
      background-color: var(--tint);
      border-color: var(--tint);
      transition: 0;
      color: var(--primary-foreground);
    }

    gui-group-controller {
      border-bottom: none;
    }

    gui-group-controller + button {
      margin-bottom: var(--padding);
    }
  `

  public constructor(parameters?: MethodFieldParameters)

  constructor({
    args = undefined,
    ...parameters
  }: MethodFieldParameters = {}) {
    super(parameters)

    if (args) {
      this.parametersController = new GroupController({
        label: 'Parameters',
        flat: true,
        transparent: true
      })

      const parametersPadding = ~~(Math.log(args.length - 1) / Math.log(10)) + 2

      args.forEach((parameters, index) => {
        const controller = new ValueController({
          fluid: true,
          label: `${index}`.padStart(parametersPadding, ' '),
          ...parameters
        })

        controller.on('update', (event) => event.stopPropagation())

        this.parametersController!.add(controller)
      })
    }
  }

  protected trigger(): void {
    if (this.parametersController) {
      this.value(...this.parametersController.childControllers
        .map(controller => (controller as ValueController).value)
      )
    } else {
      this.value()
    }
  }

  /**
   * @ignore
   */
  public render(): TemplateResult {
    return html`
      ${this.parametersController ? this.parametersController : ''}
      <button .disabled=${this.disabled} @click=${this.trigger}>Trigger</button>
    `
  }

  /**
   * @ignore
   */
  public static match({ value = undefined }: Record<string, any>): boolean {
    return typeof value === 'function'
  }
}
