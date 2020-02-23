import { LitElement, css } from 'lit-element'

export abstract class Component<
  Events extends { [type: string]: Event } = { [type: string]: Event }
> extends LitElement {
  /**
   * @ignore
   */
  public static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
      font-size: 13px;
      line-height: 1.3em;
    }
  `

  public on<T extends keyof Events>(
    event: T,
    callback: (event: Events[T]) => void,
    ...args: [Parameters<LitElement['addEventListener']>[2]] | []
  ): this {
    this.addEventListener(
      event as string,
      callback as (event: Event) => void,
      ...args
    )

    return this
  }

  public off<T extends keyof Events>(
    event: T,
    callback: (event: Events[T]) => void,
    ...args: [Parameters<LitElement['removeEventListener']>[2]] | []
  ): this {
    this.removeEventListener(
      event as string,
      callback as (event: Event) => void,
      ...args
    )

    return this
  }
}
