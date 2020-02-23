import { html, css, property, query, TemplateResult } from 'lit-element'
import { Field } from '~/field'
import { define } from '~/utils/decorators'
import { humanize } from '~/utils/string'

import {
  ValueController,
  ValueControllerFieldParameters
} from '~/controllers/value-controller'

import {
  Controller,
  ControllerParameters,
  ControllerTarget
} from '~/controller'

export interface GroupControllerParameters<
  Target extends ControllerTarget = ControllerTarget
> extends ControllerParameters<Target> {
  open?: boolean
  transparent?: boolean
  flat?: boolean
}

@define export class GroupController<
  Target extends ControllerTarget = ControllerTarget
> extends Controller<Target> {
  @query('div') protected content!: HTMLElement

  @property({
    type: Boolean,
    reflect: true
  }) protected transparent: boolean = false

  @property({
    type: Boolean,
    reflect: true
  }) protected flat: boolean = false

  @property({
    type: Boolean,
    reflect: true,
    attribute: 'open'
  }) protected _open: boolean = false

  protected openTimeout?: number
  public childControllers: Controller[] = []

  protected get contentHeight(): number {
    return [...(this.content.children as unknown as HTMLElement[])]
      .reduce((height, element) => height + element.offsetHeight, 0)
  }

  public get open(): boolean {
    return this._open
  }

  public set open(open: boolean) {
    if (open === this._open) return

    clearTimeout(this.openTimeout)
    this._open = open

    if (open) {
      this.content.style.height = `${this.contentHeight}px`
      this.openTimeout = window.setTimeout(() => {
        this.content.style.height = ''
      }, 500)
    } else {
      if (!this.content.style.height) {
        this.content.style.height = `${this.contentHeight}px`
      }

      requestAnimationFrame(() => { this.content.style.height = '0' })
    }
  }

  public static styles = css`
    ${Controller.styles}

    :host {
      border-bottom: 1px solid var(--primary-background);
      display: flex;
      flex-direction: column;
      position: relative;
    }

    span {
      padding-right: var(--padding, 0);
      padding-left: var(--padding, 0);
      width: 100%;
      cursor: pointer;
      color: var(--secondary-foreground);
      text-transform: uppercase;
      font-size: .8em;
      font-weight: bold;
      letter-spacing: .1em;
      flex-shrink: 0;
      flex-grow: 0;
    }

    :host(:not([transparent])) span {
      background: var(--primary-background);
    }

    span::before {
      content: '';
      width: 5px;
      height: 5px;
      margin-right: var(--padding);
      border-right: 1.5px solid var(--secondary-foreground);
      border-bottom: 1.5px solid var(--secondary-foreground);
      transform: rotate(-45deg);
    }

    div {
      width: 100%;
      opacity: 0;
      overflow: auto;
      transform: translateX(-10px);
      box-sizing: border-box;
    }

    :host(:not([flat])) div {
      width: calc(100% - 6px);
      margin-left: 6px;
    }

    :host(:not([flat])) div::before {
      content: '';
      background-color: var(--primary-background);
      width: 1px;
      height: 100%;
      position: absolute;
      z-index: -1;
    }

    div, span::before {
      transition:
        height .3s cubic-bezier(0.190, 1.000, 0.220, 1.000),
        transform .3s cubic-bezier(0.190, 1.000, 0.220, 1.000),
        opacity .3s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    }

    :host([open]) div {
      opacity: 1;
      transform: translateX(0);
      transition-duration: .4s;
    }

    :host([open]) span::before {
      transform: rotate(45deg) translateY(-50%);
    }

    gui-value-controller:not(:last-child) {
      border-bottom: 1px solid var(--primary-background);
    }
  `

  public constructor({
    open = false,
    transparent = false,
    flat = false,
    ...parameters
  }: GroupControllerParameters<Target> = {}) {
    super(parameters)
    this._open = open
    this.transparent = transparent
    this.flat = flat
  }

  protected resolve<
    ChildTarget extends ControllerTarget = Target,
    Property extends string | number | Symbol = string | number | Symbol
  >(property: Property, target?: ControllerTarget): {
    property: Property
    target?: ChildTarget
  } {
    if (typeof property !== 'string') {
      return {
        target: (target || this.target) as unknown as ChildTarget,
        property
      }
    }

    let path = property.split('.')

    return {
      property: path.pop()! as Property,
      target: path.reduce((target, property) => (
        target &&
        typeof target === 'object' &&
        target[property]
        || undefined
      ), target || this.target) as ChildTarget | undefined
    }
  }

  protected firstUpdated(): void {
    if (!this.open) this.content.style.height = '0'
  }

  public attach(): this {
    super.attach()
    this.childControllers.forEach(controller => controller.attach())
    return this
  }

  public dettach(): this {
    super.dettach()
    this.childControllers.forEach(controller => controller.dettach())
    return this
  }

  public add<ChildController extends Controller>(
    controller: Controller,
    callback?: (controller: Controller) => void
  ): this

  public add<
    ChildTarget extends ControllerTarget = Target,
    Property extends keyof ChildTarget = keyof ChildTarget
  >(
    parameters: ValueControllerFieldParameters<ChildTarget, Property>,
    callback?: (controller: ValueController<ChildTarget, Property>) => void
  ): this

  public add<
    ChildTarget extends ControllerTarget = Target,
    Property extends keyof ChildTarget = keyof ChildTarget
  >(
    property: Property,
    parameters?: ValueControllerFieldParameters<ChildTarget, Property>,
    callback?: (controller: ValueController<ChildTarget, Property>) => void
  ): this

  public add<Property extends keyof Target = keyof Target>(
    property: Property,
    callback?: (controller: ValueController<Target, Property>) => void
  ): this

  public add<
    ChildTarget extends ControllerTarget = Target,
    Property extends keyof ChildTarget = keyof ChildTarget,
    ChildController extends Controller = ValueController<ChildTarget, Property>
  >(
    propertyOrParametersOrController: (
      keyof ChildTarget |
      ValueControllerFieldParameters<ChildTarget, Property> |
      ChildController
    ),
    parametersOrCallback?: (
      ((controller: ChildController) => void) |
      ValueControllerFieldParameters<ChildTarget, Property>
    ),
    callback?: (controller: ChildController) => void
  ): this {
    let controller: ChildController

    if (propertyOrParametersOrController instanceof Controller) {
      controller = propertyOrParametersOrController
    } else {
      let parameters: ValueControllerFieldParameters<ChildTarget, Property>

      if (typeof propertyOrParametersOrController === 'string') {
        parameters = typeof parametersOrCallback === 'object'
          ? { ...parametersOrCallback }
          : {}

        const { target, property } = this.resolve(
          propertyOrParametersOrController,
          parameters.target
        )

        parameters = {
          ...parameters,
          target: target,
          property: property as Property,
        }
      } else {
        parameters = {
          target: this.target as unknown as ChildTarget,
          ...propertyOrParametersOrController as {}
        }
      }

      controller = new ValueController(parameters) as unknown as ChildController
    }

    if (typeof parametersOrCallback === 'function') {
      callback = parametersOrCallback
    }

    callback && callback(controller)
    this.childControllers.push(controller)

    return this
  }

  public group<ChildTarget extends ControllerTarget = Target[keyof Target]>(
    property: keyof Target,
    callback?: (controller: GroupController<ChildTarget>) => void
  ): this

  public group<ChildTarget extends ControllerTarget = Target[keyof Target]>(
    parameters: GroupControllerParameters<ChildTarget>,
    callback?: (controller: GroupController<ChildTarget>) => void
  ): this

  public group<ChildTarget extends ControllerTarget = Target[keyof Target]>(
    property: keyof Target,
    parameters?: GroupControllerParameters<ChildTarget>,
    callback?: (controller: GroupController<ChildTarget>) => void
  ): this

  public group<ChildTarget extends ControllerTarget = Target[keyof Target]>(
    propertyOrParameters: (
      keyof Target |
      GroupControllerParameters<ChildTarget>
    ),
    parametersOrCallback?: (
      ((controller: GroupController<ChildTarget>) => void) |
      GroupControllerParameters<ChildTarget>
    ),
    callback?: (controller: GroupController<ChildTarget>) => void
  ): this {
    let parameters: GroupControllerParameters<ChildTarget>

    if (typeof propertyOrParameters === 'object') {
      parameters = propertyOrParameters
    } else {
      const { target, property } = this.resolve(propertyOrParameters)

      parameters = {
        target: target ? target[property] : undefined,
        label: humanize(`${property}`),
        ...(typeof parametersOrCallback === 'object'
          ? parametersOrCallback
          : null
        )
      }
    }

    const controller = new GroupController(parameters)

    this.add(controller)

    if (typeof parametersOrCallback === 'function') {
      parametersOrCallback && parametersOrCallback(controller)
    } else {
      callback && callback(controller)
    }

    return this
  }

  public remove(controller?: Controller): this {
    if (controller) {
      let index = this.childControllers.indexOf(controller)
      index !== -1 && this.childControllers.splice(index, 1)
    }

    return this
  }

  public toggle(): this {
    this.open = !this.open
    return this
  }

  public render(): TemplateResult {
    return html`
      <span
        @mousedown=${(event: Event) => event.preventDefault()}
        @click=${this.toggle}
      >
        ${this.label || 'Group'}
      </span>
      <div>
        ${this.childControllers}
      </div>
    `
  }
}
