import { LitElement } from 'lit-element'
import { joinCamelCased } from '~/utils/string'

export function define(component: Function): void {
  customElements.define(
    `gui-${joinCamelCased(component.name, '-').replace(/^gui$/, 'panel')}`,
    component
  )
}
