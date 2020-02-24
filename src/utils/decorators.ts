export const define = (name: string) => (component: Function) => {
  customElements.define(`gui-${name}`, component)
}
