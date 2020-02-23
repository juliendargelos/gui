import { LitElement } from 'lit-element'
import { joinCamelCased } from '~/utils/string'

export const define = (name: string) => (component: Function) => {
  customElements.define(`gui-${name}`, component)
}
