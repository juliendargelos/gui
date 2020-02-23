import { html, property, css, TemplateResult } from 'lit-element'
import { ControllerTarget } from '~/controller'
import { define } from '~/utils/decorators'

import {
  GroupController,
  GroupControllerParameters
} from '~/controllers/group-controller'

export interface GUIParameters<
  Target extends ControllerTarget = ControllerTarget
> extends GroupControllerParameters<Target> {
  scheme?: 'light' | 'dark'
  fixed?: boolean
  position?: string
}

@define('panel') export class GUI<
  Target extends ControllerTarget = ControllerTarget
> extends GroupController<Target> {
  @property({ type: String, reflect: true }) public scheme?: string
  @property({ type: Boolean, reflect: true }) public fixed: boolean
  @property({ type: String, reflect: true }) public position?: string

  @property({ type: Number }) public get width(): number {
    return this.offsetWidth
  }

  public set width(width: number) {
    this.style.width = `${Math.max(200, width)}px`
  }

  /**
   * @ignore
   */
  public static styles = css`
    ${GroupController.styles}

    :host(:not([scheme="light"])), :host([scheme="dark"]) {
      --primary-background: var(--dark-primary-background);
      --secondary-background: var(--dark-secondary-background);
      --primary-foreground: var(--dark-primary-foreground);
      --secondary-foreground: var(--dark-secondary-foreground);
      --tint: var(--dark-tint);
    }

    @media (prefers-color-scheme: dark) {
      :host(:not([scheme="light"])) {
        --primary-background: var(--dark-primary-background);
        --secondary-background: var(--dark-secondary-background);
        --primary-foreground: var(--dark-primary-foreground);
        --secondary-foreground: var(--dark-secondary-foreground);
        --tint: var(--dark-tint);
      }
    }

    :host([scheme="light"]) {
      --primary-background: var(--light-primary-background);
      --secondary-background: var(--light-secondary-background);
      --primary-foreground: var(--light-primary-foreground);
      --secondary-foreground: var(--light-secondary-foreground);
      --tint: var(--light-tint);
    }

    @media (prefers-color-scheme: light) {
      :host(:not([dark])) {
        --primary-background: var(--light-primary-background);
        --secondary-background: var(--light-secondary-background);
        --primary-foreground: var(--light-primary-foreground);
        --secondary-foreground: var(--light-secondary-foreground);
        --tint: var(--light-tint);
      }
    }

    :host {
      --light-primary-background: #eaeaea;
      --dark-primary-background: #292929;

      --light-secondary-background: #fbfbfb;
      --dark-secondary-background: #1b1b1b;

      --light-primary-foreground: #000;
      --dark-primary-foreground: #fff;

      --light-secondary-foreground: #888;
      --dark-secondary-foreground: #999;

      --light-tint: #00f7a7;
      --dark-tint: #00f7a7;

      --margin: 15px;
      --padding: 10px;

      background: var(--secondary-background);
      margin: var(--margin);
      border: none;
      border-radius: 4px;
      color: var(--primary-foreground);
      overflow: hidden;
    }

    hr {
      width: 5px;
      height: 100%;
      margin: 0;
      border: none;
      position: absolute;
      z-index: 2;
      cursor: ew-resize;
    }

    hr:active {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10000;
      position: fixed;
    }

    :host::before {
      content: '';
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-radius: 4px;
      z-index: -1;
      border: 1px solid var(--primary-background);
      position: absolute;
    }

    :host([position~="top"]) { top: 0 }
    :host([position~="right"]) { right: 0 }
    :host([position~="bottom"]) { bottom: 0 }
    :host([position~="left"]) { left: 0 }

    :host([position~="top"]),
    :host([position~="right"]),
    :host([position~="bottom"]),
    :host([position~="left"]) {
      max-height: calc(100% - var(--margin) * 2);
      width: 300px;
      position: absolute;
    }

    :host([position~="left"]) hr {
      right: 0;
    }

    :host(:not([position~="right"]):not([position~="left"])) hr {
      display: none;
    }

    :host([fixed]) {
      max-height: calc(100vh - var(--margin) * 2);
      position: fixed;
    }
  `

  public constructor(parameters?: GUIParameters<Target>)

  constructor({
    scheme = undefined,
    fixed = false,
    position = undefined,
    label = 'Parameters',
    open = true,
    ...parameters
  }: GUIParameters<Target>  = {}) {
    super({ label, open, ...parameters, flat: true })
    this.scheme = scheme
    this.fixed = fixed
    this.position = position
  }

  protected resize(event: MouseEvent): void {
    event.preventDefault()
    const origin = event.clientX
    const width = this.offsetWidth

    const mousemove = (event: MouseEvent) => {
      event.preventDefault()
      const direction = this.position && this.position.includes('left') ? 1 : -1
      this.width = width + direction * (event.clientX - origin)
    }

    addEventListener('mousemove', mousemove)
    addEventListener('mouseup', () => {
      removeEventListener('mousemove', mousemove)
    }, { once: true })
  }

  /**
   * @ignore
   */
  public render(): TemplateResult {
    return html`
      <hr @mousedown=${this.resize}>
      ${super.render()}
    `
  }
}
