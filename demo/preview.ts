// @ts-ignore
import hljs from 'highlight.js/lib/highlight.js'
// @ts-ignore
import hljsJavaScript from 'highlight.js/lib/languages/javascript'
import toSource from 'tosource-polyfill'

hljs.registerLanguage('js', hljsJavaScript)

const element = document.createElement('pre')

document.body.appendChild(element)

export function preview(subject: any): void {
  element.innerHTML = hljs.highlight('js', toSource(subject)).value
}
