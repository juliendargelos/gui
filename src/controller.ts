import { property, css } from 'lit-element'
import { Component } from '~/component'
import { UpdateEvent } from '~/update-event'

export type ControllerTarget = { [property: string]: any }

export interface ControllerParameters<
  Target extends ControllerTarget = ControllerTarget
> {
  target?: Target
  listen?: boolean
  label?: string
}

export class Controller<
  Target extends ControllerTarget = ControllerTarget
> extends Component<{ update: UpdateEvent }> {
  public target?: Target
  public listen: boolean
  @property({ type: String }) public label?: string

  /**
   * @ignore
   */
  public static styles = css`
    ${Component.styles}

    :host {
      min-height: 35px;
    }

    span {
      padding: var(--padding, 0);
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
  `

  public constructor(parameters?: ControllerParameters<Target>)

  public constructor({
    target = undefined,
    listen = false,
    label = undefined,
  }: ControllerParameters<Target> = {}) {
    super()

    this.target = target
    this.listen = listen
    this.label = label
  }

  public attach(target: Target | undefined = this.target): this {
    this.dettach()
    this.target = target
    return this
  }

  public dettach(): this {
    return this
  }
}
