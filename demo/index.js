!function(){"use strict";function e(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}e("/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag .hljs-attr {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-doctag {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-selector-id {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-type,\n.hljs-class .hljs-title {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-name,\n.hljs-attribute {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #009926;\n}\n\n.hljs-symbol,\n.hljs-bullet {\n  color: #990073;\n}\n\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #0086b3;\n}\n\n.hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n");
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
function t(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */}e("body {\n  background-color: #111;\n  min-height: 100vh;\n  margin: 0;\n  color: #eee;\n  display: flex;\n  flex-direction: column;\n}\n\npre {\n  padding: 20px;\n  margin: auto;\n  font-size: 20px;\n}\n");const n=new WeakMap,r=e=>"function"==typeof e&&n.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},a={},o={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,u=new RegExp(`${l}|${c}`);class d{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let s=0,a=-1,o=0;const{strings:c,values:{length:d}}=e;for(;o<d;){const e=i.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)p(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=c[o],n=f.exec(t)[2],r=n.toLowerCase()+"$lit$",i=e.getAttribute(r);e.removeAttribute(r);const s=i.split(u);this.parts.push({type:"attribute",index:a,name:n,strings:s}),o+=s.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const r=e.parentNode,i=t.split(u),s=i.length-1;for(let t=0;t<s;t++){let n,s=i[t];if(""===s)n=g();else{const e=f.exec(s);null!==e&&p(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(s)}r.insertBefore(n,e),this.parts.push({type:"node",index:++a})}""===i[s]?(r.insertBefore(g(),e),n.push(e)):e.data=i[s],o+=s}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&a!==s||(a++,t.insertBefore(g(),e)),s=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(n.push(e),a--),o++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),o++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const p=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},h=e=>-1!==e.index,g=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
class m{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let s,a=0,o=0,l=r.nextNode();for(;a<n.length;)if(s=n[a],h(s)){for(;o<s.index;)o++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const b=` ${l} `;class y{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const s=f.exec(e);t+=null===s?e+(n?b:c):e.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+l}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const v=e=>null===e||!("object"==typeof e||"function"==typeof e),_=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(v(e)||!_(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,r(e)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class E{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):_(e)?this.__commitIterable(e):e===o?(this.value=o,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof m&&this.value.template===t)this.value.update(e.values);else{const n=new m(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new E(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class S{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class N extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends w{}let $=!1;try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class C{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */;const O=new class{handleAttributeExpressions(e,t,n,r){const i=t[0];if("."===i){return new N(e,t.slice(1),n).parts}return"@"===i?[new C(e,t.slice(1),r.eventContext)]:"?"===i?[new S(e,t.slice(1),n)]:new x(e,t,n).parts}handleTextExpression(e){return new E(e)}};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */function R(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(l);return n=t.keyString.get(r),void 0===n&&(n=new d(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const M=new Map,P=new WeakMap;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const T=(e,...t)=>new y(e,t,"html",O)
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */;function j(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,133,null,!1);let s=B(r),a=r[s],o=-1,l=0;const c=[];let u=null;for(;i.nextNode();){o++;const e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(c.push(e),null===u&&(u=e)),null!==u&&l++;void 0!==a&&a.index===o;)a.index=null!==u?-1:a.index-l,s=B(r,s),a=r[s]}c.forEach(e=>e.parentNode.removeChild(e))}const L=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},B=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(h(t))return n}return-1};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
const D=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const z=e=>t=>{const n=D(t.type,e);let r=M.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},M.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(l);if(i=r.keyString.get(s),void 0===i){const n=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(n,e),i=new d(t,n),r.keyString.set(s,i)}return r.stringsArray.set(t.strings,i),i},I=["html","svg"],V=new Set,H=(e,t,n)=>{V.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:s}=i;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,e);const a=document.createElement("style");for(let e=0;e<s;e++){const t=i[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{I.forEach(t=>{const n=M.get(D(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),j(e,n)})})})(e);const o=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const s=document.createTreeWalker(r,133,null,!1);let a=B(i),o=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===n&&(o=L(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===l;){if(o>0){for(;-1!==a;)i[a].index+=o,a=B(i,a);return}a=B(i,a)}}}(n,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){o.insertBefore(a,o.firstChild);const e=new Set;e.add(a),j(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},q=(e,t)=>t!==e&&(t==t||e==e),K={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:q},W=Promise.resolve(!0);class G extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=K){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=q){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||F,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||F.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=K){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||K;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,i=r._classProperties.get(e)||K;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}G.finalized=!0;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
const X=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}});function J(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):X(e,t)}function Z(e){return(t,n)=>{const r={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==n?Y(r,t,n):Q(r,t)}}const Y=(e,t,n)=>{Object.defineProperty(t,n,e)},Q=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e})
/**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */,ee="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol();class ne{constructor(e,t){if(t!==te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ee?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new ne(n,te)};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ie=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,i=t.length;r<i;r++){const i=t[r];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class se extends G{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ee?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}se.finalized=!0,se.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=P.has(t),a=U&&11===t.nodeType&&!!t.host,o=a&&!V.has(r),l=o?document.createDocumentFragment():t;if(((e,t,n)=>{let r=P.get(t);void 0===r&&(s(t,t.firstChild),P.set(t,r=new E(Object.assign({templateFactory:R},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:z(r)},n)),o){const e=P.get(l);P.delete(l);const n=e.value instanceof m?e.value.template:void 0;H(r,l,n),s(t,t.firstChild),t.appendChild(l),P.set(t,e)}!i&&a&&window.ShadyCSS.styleElement(t.host)};class ae extends se{on(e,t,...n){return this.addEventListener(e,t,...n),this}off(e,t,...n){return this.removeEventListener(e,t,...n),this}}ae.styles=re`
    :host {
      display: block;
      font-family: sans-serif;
      font-size: 13px;
      line-height: 1.3em;
    }
  `;class oe extends Event{constructor(e,t){super("update",{composed:!0}),this.value=e,this.previous=t}}class le extends ae{constructor({value:e,disabled:t=!1}={}){super(),this.set(e),this.disabled=t}input(e){e.stopPropagation();const t=this.value;Promise.resolve(this.parse(this.extract(e))).then(e=>this.set(e).dispatchEvent(new oe(this.value,t)))}extract(e){return e.target.value}parse(e){return e}set(e){return this.value=e,this}static match(e){return!1}static register(e,t){if(this.types.find(t=>e===t.name))throw new Error(`Field type ${e} has already been registered`);return this.types.unshift({type:t,name:e}),this}static use(e){return Object.entries(e).forEach(({0:e,1:t})=>this.register(e,t)),this}static from(e){return new((this.types.find(({type:t,name:n})=>n===e.field||t.match(e))||this.types[this.types.length-1]).type)(e)}}le.types=[],le.styles=re`
    ${ae.styles}

    input, select, textarea, button {
      background-color: transparent;
      width: 100%;
      margin: 0;
      padding: var(--padding, 0);
      display: block;
      border: none;
      outline: none;
      border-radius: 0;
      color: var(--secondary-foreground);
      font-size: 13px;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    input:focus,
    select:focus,
    textarea:focus {
      color: var(--tint)
    }
  `,t([J()],le.prototype,"value"),t([J({type:Boolean})],le.prototype,"disabled");const ce=e=>t=>{customElements.define(`gui-${e}`,t)};function ue(e){return function(e){return`${e[0].toUpperCase()}${e.slice(1)}`}(function(e,t){return e.replace(/([^A-Z\d])([A-Z\d]+)/g,`$1${t}$2`).toLowerCase()}(`${e}`," ")).replace(/[-_\s]+/g," ")}function de(e){return void 0===e?"":`${e}`}class pe extends ae{constructor({target:e,listen:t=!1,label:n}={}){super(),this.target=e,this.listen=t,this.label=n}attach(e=this.target){return this.dettach(),this.target=e,this}dettach(){return this}}pe.styles=re`
    ${ae.styles}

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
  `,t([J({type:String})],pe.prototype,"label");let he=class extends pe{constructor({field:e,property:t,inline:n=!0,fluid:r=!1,target:i,listen:s=!1,label:a=(t?ue(`${t}`):void 0),value:o=(i&&t?i[t]:void 0),...l}){super({target:i,listen:s,label:a}),this.committing=!1,this.focused=!1,this.commit=this.commit.bind(this),this.property=t,this.inline=n,this.fluid=r,this.field=e instanceof le?e:le.from({field:e,value:o,...l}),this.field.on("focus",()=>{this.focused=!0}),this.field.on("blur",()=>{this.focused=!1}),this.attach(),this.value=o}get value(){return this.field.value}set value(e){this.field.set(e),this.commit(new oe(e,void 0))}commit(e){this.target&&this.property&&(this.committing=!0,this.target[this.property]=e.value,this.committing=!1)}attach(e=this.target){if(super.attach(e),this.target&&this.property&&(this.field.on("update",this.commit),this.value=this.target[this.property],this.listen)){let e;this.descriptor=Object.getOwnPropertyDescriptor(this.target,this.property)||{value:void 0};const{get:t=(()=>e),set:n=(t=>{e=t})}=this.descriptor;try{Object.defineProperty(this.target,this.property,{get:t,set:e=>{const r=t();this.committing||this.field.set(e),n.call(this.target,e),this.dispatchEvent(new oe(e,r))}})}catch(e){throw this.descriptor=void 0,new Error(`Unable to initialize property setter: ${e}`)}}return this}dettach(){if(super.dettach(),this.field.off("update",this.commit),this.target&&this.property&&this.descriptor){"value"in this.descriptor&&(this.descriptor.value=this.value);try{Object.defineProperty(this.target,this.property,this.descriptor),this.descriptor=void 0}catch(e){throw new Error(`Unable to dispose property setter: ${e}`)}}return this}render(){return T`${this.label?T`<span @mousedown=${e=>e.preventDefault()}>
          ${this.label}
        </span>`:""}<div>${this.field}</div>`}};var ge;he.styles=re`
    ${pe.styles}

    :host {
      display: flex;
      align-items: center;
      box-shadow: inset 0 0 0 var(--tint);
      transition: box-shadow .1s ease-out;
    }

    span {
      width: 30%;
      flex-shrink: 0;
      text-align: right;
      cursor: default;
      display: inline-block;
      align-self: flex-start;
    }

    div {
      width: 70%;
      flex-grow: 1;
    }

    :host([fluid]) span {
      width: auto;
      max-width: 30%;
      text-align: left;
    }

    :host([fluid]) div {
      width: auto;
    }

    :host(:not([inline])) {
      flex-direction: row;
    }

    :host(:not([inline])) span, :host(:not([inline])) div {
      width: 100%;
    }

    :host([focused]), :host(:active) {
      box-shadow: inset 3px 0 0 var(--tint);
      transition: box-shadow .1s ease-out;
    }
  `,t([J({type:Boolean,reflect:!0})],he.prototype,"focused"),t([J({type:Boolean,reflect:!0})],he.prototype,"inline"),t([J({type:Boolean,reflect:!0})],he.prototype,"fluid"),he=t([ce("value-controller")],he);let fe=ge=class extends pe{constructor({open:e=!1,transparent:t=!1,flat:n=!1,...r}={}){super(r),this.transparent=!1,this._open=!1,this.flat=!1,this.childControllers=[],this._open=e,this.transparent=t,this.flat=n}get contentHeight(){return[...this.content.children].reduce((e,t)=>e+t.offsetHeight,0)}get open(){return this._open}set open(e){e!==this._open&&(clearTimeout(this.openTimeout),this._open=e,e?(this.content.style.height=`${this.contentHeight}px`,this.openTimeout=window.setTimeout(()=>{this.content.style.height=""},500)):(this.content.style.height||(this.content.style.height=`${this.contentHeight}px`),requestAnimationFrame(()=>{this.content.style.height="0"})))}resolve(e,t){if("string"!=typeof e)return{target:t||this.target,property:e};const n=e.split(".");return{property:n.pop(),target:n.reduce((e,t)=>e&&"object"==typeof e&&e[t]||void 0,t||this.target)}}firstUpdated(){this.open||(this.content.style.height="0")}attach(e){return super.attach(e),this.childControllers.forEach(t=>{t.attach(e||t.target)}),this}dettach(){return super.dettach(),this.childControllers.forEach(e=>e.dettach()),this}add(e,t,n){let r;if(e instanceof pe)r=e;else{let n;if("string"==typeof e){n="object"==typeof t?{...t}:{};const{target:r,property:i}=this.resolve(e,n.target);n={...n,target:r,property:i}}else n={target:this.target,...e};r=new he(n)}return"function"==typeof t&&(n=t),n&&n(r),this.childControllers.push(r),this.requestUpdate("childControllers",void 0),this}group(e,t,n){let r;if("object"==typeof e)r=e;else{const{target:n,property:i}=this.resolve(e);r={target:n?n[i]:void 0,label:ue(`${i}`),..."object"==typeof t?t:null}}const i=new ge(r);return"function"==typeof t?t&&t(i):n&&n(i),this.add(i),this}remove(e){if(e){const t=this.childControllers.indexOf(e);-1!==t&&this.childControllers.splice(t,1)}return this}toggle(){return this.open=!this.open,this}render(){return T`
      <span
        @mousedown=${e=>e.preventDefault()}
        @click=${this.toggle}
      >
        ${this.label||"Group"}
      </span>
      <div>
        ${this.childControllers}
      </div>
    `}};fe.styles=re`
    ${pe.styles}

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
  `,t([Z("div")],fe.prototype,"content"),t([J({type:Boolean,reflect:!0})],fe.prototype,"transparent"),t([J({type:Boolean,reflect:!0,attribute:"open"})],fe.prototype,"_open"),t([J({type:Boolean,reflect:!0})],fe.prototype,"flat"),t([J({attribute:!1})],fe.prototype,"childControllers"),fe=ge=t([ce("group-controller")],fe);let me=class extends fe{constructor({scheme:e,fixed:t=!1,position:n,label:r="Parameters",open:i=!0,...s}={}){super({label:r,open:i,...s,flat:!0}),this.scheme=e,this.fixed=t,this.position=n}get width(){return this.offsetWidth}set width(e){this.style.width=`${Math.max(200,e)}px`}resize(e){e.preventDefault();const t=e.clientX,n=this.offsetWidth,r=e=>{e.preventDefault();const r=this.position&&this.position.includes("left")?1:-1;this.width=n+r*(e.clientX-t)};addEventListener("mousemove",r),addEventListener("mouseup",()=>{removeEventListener("mousemove",r)},{once:!0})}render(){return T`
      <hr @mousedown=${this.resize}>
      ${super.render()}
    `}static register(e,t){return le.register(e,t),this}static use(e){return le.use(e),this}};me.styles=re`
    ${fe.styles}

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

    span {
      z-index: 2;
      position: relative;
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
      z-index: 0;
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
  `,t([J({type:String,reflect:!0})],me.prototype,"scheme"),t([J({type:Boolean,reflect:!0})],me.prototype,"fixed"),t([J({type:String,reflect:!0})],me.prototype,"position"),t([J({type:Number})],me.prototype,"width"),me=t([ce("panel")],me);let be=class extends le{constructor({maximumLength:e=-1,multiline:t=!1,...n}={}){super(n),this.maximumLength=e,this.multiline=t}render(){return this.multiline?T`
        <textarea
          .value=${de(this.value)}
          .disabled=${this.disabled}
          maxLength=${this.maximumLength}
          @input=${this.input}
        ></textarea>
      `:T`
        <input
          type="text"
          .value=${de(this.value)}
          .disabled=${this.disabled}
          maxLength=${this.maximumLength}
          @input=${this.input}
        >
      `}static match({value:e}){return"string"==typeof e}};be.styles=re`
    ${le.styles}

    input {
      height: 30px;
    }

    textarea {
      resize: vertical;
    }
  `,t([J({type:Number})],be.prototype,"maximumLength"),t([J({type:Boolean})],be.prototype,"multiline"),be=t([ce("text-field")],be);const ye=re`
  appearance: none;
  background-color: var(--secondary-foreground);
  width: 10px;
  height: 10px;
  border-radius: 10px;
  transition: .15s;
  transform: translateY(calc(1px - 50%));
`,ve=re`
  background-color: var(--tint);
`,_e=re`
  background-color: var(--primary-background);
  height: 2px;
  border-radius: 2px;
`;let xe=class extends le{constructor({minimum:e=-1/0,maximum:t=1/0,step:n,range:r=!0,...i}={}){super(i),this.minimum=e,this.maximum=t,this.step=n,this.range=r,this.displayValue=this.value}get inferedMinimum(){return this.range&&this.minimum===-1/0?0:this.minimum}get inferedMaximum(){return this.range&&this.maximum===1/0?100:this.maximum}parse(e){return Math.max(this.minimum,Math.min(this.maximum,parseFloat(e)||0))}render(){return T`
      ${this.range?T`
        <input
          type="range"
          .value=${this.value}
          .disabled=${this.disabled}
          .min=${this.inferedMinimum}
          .max=${this.inferedMaximum}
          .step=${this.step}
          @input=${e=>{this.input(e),requestAnimationFrame(()=>{this.displayValue=this.value})}}
        >
      `:""}
      <div>
        <input
          type="number"
          .value=${this.displayValue}
          .disabled=${this.disabled}
          .min=${this.inferedMinimum}
          .max=${this.inferedMaximum}
          .step=${this.step}
          @input=${this.input}
          @blur=${()=>{this.displayValue=(this.value||0)+1,requestAnimationFrame(()=>{this.displayValue=this.value})}}
        >
      </div>
    `}static match({value:e}){return"number"==typeof e}};xe.styles=re`
    ${le.styles}

    :host {
      display: flex;
    }

    div {
      flex-grow: 0;
      flex-shrink: 0;
    }

    input[type="number"] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }

    :host([range]) input[type="number"] {
      text-align: right;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
    }

    input[type=number]::-moz-inner-spin-button,
    input[type=number]::-moz-outer-spin-button {
      -moz-appearance: none;
      appearance: none;
    }

    input[type=number]::-ms-inner-spin-button,
    input[type=number]::-ms-outer-spin-button {
      -ms-appearance: none;
      appearance: none;
    }

    input[type="range"] {
      padding-right: 0;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${ye}
    }

    input[type="range"]:active::-webkit-slider-thumb {
      ${ve}
    }

    input[type="range"]::-moz-slider-thumb {
      -moz-appearance: none;
      appearance: none;
      ${ye}
    }

    input[type="range"]:active::-moz-slider-thumb {
      ${ve}
    }

    input[type="range"]::-ms-slider-thumb {
      -ms-appearance: none;
      appearance: none;
      ${ye}
    }

    input[type="range"]:active::-ms-slider-thumb {
      ${ve}
    }

    input[type=range]::-webkit-slider-runnable-track {
      ${_e}
    }

    input[type=range]::-moz-range-track {
      ${_e}
    }

    input[type=range]::-ms-track {
      ${_e}
    }

    :host(:not([range])) div, :host(:not([range])) input[type=number] {
      width: 100%;
    }
  `,t([Z('input[type="number"]')],xe.prototype,"$input"),t([J({type:Number,attribute:!1})],xe.prototype,"displayValue"),t([J({type:Number})],xe.prototype,"minimum"),t([J({type:Number})],xe.prototype,"maximum"),t([J({type:Number})],xe.prototype,"step"),t([J({type:Boolean,reflect:!0})],xe.prototype,"range"),xe=t([ce("number-field")],xe);const we=["number","hex","rgb","array","object"],Ee=/^\s*#?([a-f\d]{6}|[a-f\d]{3})\s*$/i,Se=/^\s*rgb(?:a)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)\s*$/i;function Ne(e){return"number"==typeof e?e:parseFloat(e)}function ke(e){if(e)switch(typeof e){case"string":const t=e.match(Se);return!(!t||!t[4]);case"object":return"number"==typeof e[3]||"number"==typeof e.a}return!1}function $e(e){if(e)switch(typeof e){case"string":const t=e.match(Se);if(t&&t[4])return parseFloat(t[4]);break;case"object":let n=NaN;if("number"==typeof e[3]&&(n=Ne(e[3])),"number"==typeof e.a&&(n=Ne(e.a)),!isNaN(n))return n}return 1}function Ce(e,t){switch(typeof e){case"number":if(~~e===e&&e>=0&&e<=16777215)return"number";break;case"string":if(Ee.test(e))return"hex";if(Se.test(e))return"rgb";break;case"object":if(e){if("number"==typeof e.r&&"number"==typeof e.g&&"number"==typeof e.b)return"object";if("number"==typeof e[0]&&"number"==typeof e[1]&&"number"==typeof e[2])return"array"}}return t}function Ae(e,t,n=!1){let r=0,i=0,s=0,a=1;switch(typeof e){case"string":const t=e.match(Ee);if(!t){const t=e.match(Se);t&&(r=parseInt(t[1],10),i=parseInt(t[2],10),s=parseInt(t[3],10),t[4]&&(a=parseFloat(t[4])));break}{const n=t[1];e=parseInt(6===n.length?n:`${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`,16)}case"number":r=e>>16&255,i=e>>8&255,s=255&e;break;case"object":e&&("r"in e||"g"in e||"b"in e||"a"in e?(r=Ne(e.r)||0,i=Ne(e.g)||0,s=Ne(e.b)||0,a=Ne(e.a)):(r=Ne(e[0])||0,i=Ne(e[1])||0,s=Ne(e[2])||0,a=Ne(e[3])),isNaN(a)&&(a=1))}switch(t){case"number":return r<<16|i<<8|s;case"hex":return`#${(r<<16|i<<8|s).toString(16).padStart(6,"0")}`;case"rgb":return n?`rgba(${r}, ${i}, ${s}, ${a})`:`rgb(${r}, ${i}, ${s})`;case"array":return n?[r,i,s,a]:[r,i,s];case"object":default:return n?{r:r,g:i,b:s,a:a}:{r:r,g:i,b:s}}}let Oe=class extends le{constructor({value:e,format:t=Ce(e,"rgb"),alpha:n=ke(e),...r}={}){super(r),this.format=t,this.alpha=n,this.set(e),this.displayValue=Ae(this.value,"hex"),this.displayAlpha=$e(this.value)}get includeAlpha(){return this.alpha&&"hex"!==this.format&&"number"!==this.format}parse(e){if(this.includeAlpha){const t=Ae(e,"object",!0);return t.a=Math.max(0,Math.min(1,parseFloat(this.$alpha.value)||0)),t}return e}extract(e){return e.target===this.$alpha?Ae(this.value,"hex"):e.target.value}set(e){return super.set(Ae(e,this.format,this.alpha)),this}render(){const e=Ae(this.value,"hex"),t=`rgba(255, 255, 255, ${1-$e(this.value)})`;return T`
      <input
        type="text"
        .value=${this.displayValue}
        .disabled=${this.disabled}
        @input=${this.input}
        @blur=${()=>{this.displayValue="",requestAnimationFrame(()=>{this.displayValue=Ae(this.value,"hex")})}}
      >

      <input
        type="color"
        .value=${e}
        .disabled=${this.disabled}
        style=${`\n          background-color: ${Ae(this.value,"rgb",!0)};\n          background-image: linear-gradient(-45deg, ${t} 50%, transparent 50%, transparent 100%, ${t} 100%, ${t});\n        `}
        @input=${e=>{this.input(e),requestAnimationFrame(()=>{this.displayValue=Ae(this.value,"hex")})}}
      >

      ${this.includeAlpha?T`
        <div>
          <input
            type="number"
            .value=${this.displayAlpha}
            .disabled=${this.disabled}
            .min=${0}
            .max=${1}
            .step=${.01}
            @input=${this.input}
            @blur=${()=>{requestAnimationFrame(()=>{this.displayAlpha=$e(this.value)})}}
          >
        </div>
      `:""}
    `}static match({value:e,format:t=Ce(e)}){return function(e){return we.includes(e)}(t)}};Oe.styles=re`
    ${le.styles}

    :host {
      display: flex;
      align-items: center;
    }

    input[type="color"] {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border: 5px solid var(--secondary-background);
      margin-right: var(--padding);
      box-sizing: border-box;
    }

    div, input[type="number"] {
      height: 20px;
    }

    div {
      width: 47px;
      margin-right: var(--padding);
      border: 1px solid var(--primary-background);
      border-radius: 4px;
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      align-items: center;
      padding-right: 5px;
      padding-left: 5px;
    }

    div::before {
      content: 'α';
      color: var(--secondary-foreground);
      flex-grow: 0;
      flex-shrink: 0;
    }

    input[type="number"] {
      text-align: right;
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
      flex-grow: 1;
      flex-shrink: 0;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
    }

    input[type=number]::-moz-inner-spin-button,
    input[type=number]::-moz-outer-spin-button {
      -moz-appearance: none;
      appearance: none;
    }

    input[type=number]::-ms-inner-spin-button,
    input[type=number]::-ms-outer-spin-button {
      -ms-appearance: none;
      appearance: none;
    }
  `,t([Z('input[type="number"]')],Oe.prototype,"$alpha"),t([J({type:String,attribute:!1})],Oe.prototype,"displayValue"),t([J({type:Number,attribute:!1})],Oe.prototype,"displayAlpha"),t([J({type:String})],Oe.prototype,"format"),t([J({type:Boolean})],Oe.prototype,"alpha"),Oe=t([ce("color-field")],Oe);let Re=class extends le{constructor({options:e,humanize:t=!0,...n}={}){super(n),this.options=e,this.humanize=t}get labels(){if(!this.options)return[];const e=Array.isArray(this.options)?this.options.map(e=>`${e}`):Object.keys(this.options);return this.humanize&&e.forEach((t,n)=>{e[n]=ue(t)}),e}get values(){return this.options?Array.isArray(this.options)?this.options:Object.values(this.options):[]}parse(e){return this.values[e]}render(){return T`
      <select
        .disabled=${this.disabled}
        @input=${this.input}
      >
        ${this.labels.map((e,t)=>T`
          <option
            value=${t}
            .selected=${this.parse(t)===this.value}
          >${e}</option>
        `)}
      </selectc>
    `}static match({options:e}){return e&&"object"==typeof e}};Re.styles=re`
    ${le.styles}

    :host {
      position: relative;
    }

    :host::after {
      content: '';
      width: 5px;
      height: 5px;
      top: 50%;
      right: var(--padding, 0);
      border-right: 1.5px solid var(--secondary-foreground);
      border-bottom: 1.5px solid var(--secondary-foreground);
      transform: translate(-50%, -50%) rotate(45deg) ;
      position: absolute;
      pointer-events: none;
    }
  `,t([J({type:Object})],Re.prototype,"options"),t([J({type:Boolean})],Re.prototype,"humanize"),Re=t([ce("select-field")],Re);let Me=class extends le{constructor(){super(...arguments),this.toggle=()=>this.$input.click()}extract(e){return e.target.checked}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.toggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.toggle)}render(){return T`
      <input
        type="checkbox"
        .checked=${this.value}
        .disabled=${this.disabled}
        @input=${this.input}
        @click=${e=>e.stopPropagation()}
      >
    `}static match({value:e}){return"boolean"==typeof e}};Me.styles=re`
    ${le.styles}

    :host {
      padding-top: var(--padding);
      padding-bottom: var(--padding);
    }

    input {
      width: 16px;
      height: 16px;
      padding: 0;
      margin-right: var(--padding);
      margin-left: var(--padding);
      border: 2px solid var(--primary-background);
      border-radius: 4px;
      transition: .2s;
    }

    input:checked {
      background-color: var(--secondary-foreground);
      border-color: var(--secondary-foreground);
      transition: .2s;
    }

    :host(:active) input {
      background-color: var(--tint);
      border-color: var(--tint);
      transition: 0;
    }

    :host(:active) input:checked {
      background-color: transparent;
    }
  `,t([Z("input")],Me.prototype,"$input"),Me=t([ce("checkbox-field")],Me);let Pe=class extends le{constructor({value:e,format:t=(e instanceof File?"file":e instanceof Blob?"blob":e instanceof ArrayBuffer?"buffer":e instanceof ReadableStream?"stream":"url"),accept:n=(e instanceof File||e instanceof Blob?e.type:void 0),...r}={}){super(r),this.name="",this.format=t,this.accept=n,this.set(e)}extract(e){const t=e.target.files;return t?t[0]:null}parse(e){if(!e)return;switch(this.format){case"file":return e;case"url":return URL.createObjectURL(e)}const t=new Blob([e],{type:e.type});switch(this.format){case"text":return t.text();case"buffer":return t.arrayBuffer();case"stream":return t.stream()}return t}set(e){return!e&&this.$input&&(this.$input.value=""),e instanceof File||e instanceof Blob?this.name=e.name:"string"==typeof e&&(this.name=e),this.name||(this.name=`Arbitrary ${this.format}`),super.set(e)}clear(){const e=this.value;this.set(void 0),this.dispatchEvent(new oe(this.value,e))}render(){return T`
      <input
        type="file"
        .accept=${this.accept||""}
        .disabled=${this.disabled}
        @change=${this.input}
      >

      <p>${this.value?this.name:"Choose a file"}</p>

      ${this.value?T`<span
        @click=${this.clear}
      ></span>`:""}
    `}static match({value:e}){return e instanceof File||e instanceof Blob||e instanceof ArrayBuffer||e instanceof ReadableStream}};Pe.styles=re`
    ${le.styles}

    :host {
      display: flex;
      align-items: center;
      position: relative;
    }

    span {
      width: 20px;
      height: 20px;
      margin-right: calc(var(--padding) - 3px);
      margin-left: auto;
      display: block;
      z-index: 3;
      position: relative;
      flex-grow: 0;
      flex-shrink: 0;
      cursor: pointer;
    }

    span::before, span::after {
      content: '';
      background-color: var(--secondary-foreground);
      width: 65%;
      height: 1px;
      top: 50%;
      left: 50%;
      position: absolute;
      transition: .2s;
    }

    span::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    span::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    span:active::before, span:active::after {
      background-color: var(--tint);
      transition: 0;
    }

    p {
      padding: var(--padding);
      margin: 0;
      color: var(--secondary-foreground);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    :host(:active) p {
      color: var(--tint);
      transition: 0;
    }

    input[type="file"] {
      width: 100%;
      height: 100%;
      padding: 0;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 2;
      cursor: pointer;
      position: absolute;
    }

    input[type="file"]::-webkit-file-upload-button {
      opacity: 0;
      width: 50%;
      height: 100%;
      top: 0;
      left: 0;
      border: none;
      border-radius: 0;
      margin: 0;
      padding: 0;
      z-index: 2;
      position: absolute;
      -webkit-appearance: none;
      appearance: none;
    }
  `,t([Z("input")],Pe.prototype,"$input"),t([J({type:String})],Pe.prototype,"format"),t([J({type:String})],Pe.prototype,"accept"),Pe=t([ce("file-field")],Pe);let Te=class extends Pe{constructor(e={}){super({...e,accept:"image/*"})}set(e){return this.thumbnail&&(URL.revokeObjectURL(this.thumbnail),this.thumbnail=void 0),"string"==typeof e?this.thumbnail=e:(e instanceof Blob||e instanceof File)&&(this.thumbnail=URL.createObjectURL(e)),super.set(e)}render(){return T`
      <figure>
        ${this.thumbnail?T`<img .src=${this.thumbnail}>`:""}
      </figure>
      <div>
        ${super.render()}
      </div>
    `}static match(e){const t=e.value;return t&&"string"==typeof t&&/\.(png|jpe?g|gif|svg)$/i.test(t)||super.match(e)&&"image/"===t.type.slice(0,6)}};Te.styles=re`
    ${Pe.styles}

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
  `,t([J({type:String,attribute:!1})],Te.prototype,"thumbnail"),Te=t([ce("image-field")],Te);let je=class extends le{constructor({args:e,...t}={}){if(super(t),e){this.parametersController=new fe({label:"Parameters",flat:!0,transparent:!0});const t=2+~~(Math.log(e.length-1)/Math.log(10));e.forEach((e,n)=>{const r=new he({fluid:!0,label:`${n}`.padStart(t," "),...e});r.on("update",e=>e.stopPropagation()),this.parametersController.add(r)})}}trigger(){this.parametersController?this.value(...this.parametersController.childControllers.map(e=>e.value)):this.value()}render(){return T`
      ${this.parametersController?this.parametersController:""}
      <button .disabled=${this.disabled} @click=${this.trigger}>Trigger</button>
    `}static match({value:e}){return"function"==typeof e}};je.styles=re`
    ${le.styles}

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
  `,je=t([ce("method-field")],je);const Le={text:be,color:Oe,number:xe,select:Re,checkbox:Me,file:Pe,image:Te,method:je};me.use(Le);var Be,De=(function(e,t){var n,r;n=function(e){var t=[],n=Object.keys,r={},i={},s=!0,a=/^(no-?highlight|plain|text)$/i,o=/\blang(?:uage)?-([\w-]+)\b/i,l=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,c="Could not find the language '{}', did you forget to load/include a language module?",u={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},d="of and for in not or if then".split(" ");function p(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(e){return e.nodeName.toLowerCase()}function g(e){return a.test(e)}function f(e){var t,n={},r=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return r.forEach((function(e){for(t in e)n[t]=e[t]})),n}function m(e){var t=[];return function e(n,r){for(var i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:r,node:i}),r=e(i,r),h(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:i}));return r}(e,0),t}function b(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(t){return f(e,{variants:null},t)}))),e.cached_variants?e.cached_variants:function e(t){return!!t&&(t.endsWithParent||e(t.starts))}(e)?[f(e,{starts:e.starts?f(e.starts):null})]:Object.isFrozen(e)?[f(e)]:[e]}function y(e,t){return t?Number(t):(n=e,-1!=d.indexOf(n.toLowerCase())?0:1);var n}function v(e){function t(e){return e&&e.source||e}function r(n,r){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function i(e){var n,i,s={},a=[],o={},l=1;function c(e,t){s[l]=e,a.push([e,t]),l+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(t)+1}for(var u=0;u<e.contains.length;u++)c(i=e.contains[u],i.beginKeywords?"\\.?(?:"+i.begin+")\\.?":i.begin);e.terminator_end&&c("end",e.terminator_end),e.illegal&&c("illegal",e.illegal);var d=a.map((function(e){return e[1]}));return n=r(function(e,n){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,i=0,s="",a=0;a<e.length;a++){var o=i+=1,l=t(e[a]);for(a>0&&(s+=n),s+="(";l.length>0;){var c=r.exec(l);if(null==c){s+=l;break}s+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?s+="\\"+String(Number(c[1])+o):(s+=c[0],"("==c[0]&&i++)}s+=")"}return s}(d,"|"),!0),o.lastIndex=0,o.exec=function(t){var r;if(0===a.length)return null;n.lastIndex=o.lastIndex;var i=n.exec(t);if(!i)return null;for(var l=0;l<i.length;l++)if(null!=i[l]&&null!=s[""+l]){r=s[""+l];break}return"string"==typeof r?(i.type=r,i.extra=[e.illegal,e.terminator_end]):(i.type="begin",i.rule=r),i},o}if(e.contains&&-1!=e.contains.indexOf("self")){if(!s)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");e.contains=e.contains.filter((function(e){return"self"!=e}))}!function s(a,o){a.compiled||(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords&&(a.keywords=function(e,t){var r={};return"string"==typeof e?i("keyword",e):n(e).forEach((function(t){i(t,e[t])})),r;function i(e,n){t&&(n=n.toLowerCase()),n.split(" ").forEach((function(t){var n=t.split("|");r[n[0]]=[e,y(n[0],n[1])]}))}}(a.keywords,e.case_insensitive)),a.lexemesRe=r(a.lexemes||/\w+/,!0),o&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=r(a.begin),a.endSameAsBegin&&(a.end=a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=r(a.end)),a.terminator_end=t(a.end)||"",a.endsWithParent&&o.terminator_end&&(a.terminator_end+=(a.end?"|":"")+o.terminator_end)),a.illegal&&(a.illegalRe=r(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=Array.prototype.concat.apply([],a.contains.map((function(e){return b("self"===e?a:e)}))),a.contains.forEach((function(e){s(e,a)})),a.starts&&s(a.starts,o),a.terminators=i(a))}(e)}function _(e,t,n,i){var a=t;function o(e,t){var n=y.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function l(e,t,n,r){if(!n&&""===t)return"";if(!e)return t;var i='<span class="'+(r?"":u.classPrefix);return(i+=e+'">')+t+(n?"":"</span>")}function d(){N+=null!=E.subLanguage?function(){var e="string"==typeof E.subLanguage;if(e&&!r[E.subLanguage])return p($);var t=e?_(E.subLanguage,$,!0,S[E.subLanguage]):x($,E.subLanguage.length?E.subLanguage:void 0);return E.relevance>0&&(C+=t.relevance),e&&(S[E.subLanguage]=t.top),l(t.language,t.value,!1,!0)}():function(){var e,t,n,r;if(!E.keywords)return p($);for(r="",t=0,E.lexemesRe.lastIndex=0,n=E.lexemesRe.exec($);n;)r+=p($.substring(t,n.index)),(e=o(E,n))?(C+=e[1],r+=l(e[0],p(n[0]))):r+=p(n[0]),t=E.lexemesRe.lastIndex,n=E.lexemesRe.exec($);return r+p($.substr(t))}(),$=""}function h(e){N+=e.className?l(e.className,"",!0):"",E=Object.create(e,{parent:{value:E}})}function g(e){var t=e[0],n=e.rule;return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?$+=t:(n.excludeBegin&&($+=t),d(),n.returnBegin||n.excludeBegin||($=t)),h(n),n.returnBegin?0:t.length}function f(e){var t=e[0],n=a.substr(e.index),r=function e(t,n){if(function(e,t){var n=e&&e.exec(t);return n&&0===n.index}(t.endRe,n)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,n)}(E,n);if(r){var i=E;i.skip?$+=t:(i.returnEnd||i.excludeEnd||($+=t),d(),i.excludeEnd&&($=t));do{E.className&&(N+="</span>"),E.skip||E.subLanguage||(C+=E.relevance),E=E.parent}while(E!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),h(r.starts)),i.returnEnd?0:t.length}}var m={};function b(e,t){var r=t&&t[0];if($+=e,null==r)return d(),0;if("begin"==m.type&&"end"==t.type&&m.index==t.index&&""===r)return $+=a.slice(t.index,t.index+1),1;if(m=t,"begin"===t.type)return g(t);if("illegal"===t.type&&!n)throw new Error('Illegal lexeme "'+r+'" for mode "'+(E.className||"<unnamed>")+'"');if("end"===t.type){var i=f(t);if(null!=i)return i}return $+=r,r.length}var y=k(e);if(!y)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');v(y);var w,E=i||y,S={},N="";for(w=E;w!==y;w=w.parent)w.className&&(N=l(w.className,"",!0)+N);var $="",C=0;try{for(var A,O,R=0;E.terminators.lastIndex=R,A=E.terminators.exec(a);)O=b(a.substring(R,A.index),A),R=A.index+O;for(b(a.substr(R)),w=E;w.parent;w=w.parent)w.className&&(N+="</span>");return{relevance:C,value:N,illegal:!1,language:e,top:E}}catch(t){if(t.message&&-1!==t.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:p(a)};if(s)return{relevance:0,value:p(a),language:e,top:E,errorRaised:t};throw t}}function x(e,t){t=t||u.languages||n(r);var i={relevance:0,value:p(e)},s=i;return t.filter(k).filter($).forEach((function(t){var n=_(t,e,!1);n.language=t,n.relevance>s.relevance&&(s=n),n.relevance>i.relevance&&(s=i,i=n)})),s.language&&(i.second_best=s),i}function w(e){return u.tabReplace||u.useBR?e.replace(l,(function(e,t){return u.useBR&&"\n"===e?"<br>":u.tabReplace?t.replace(/\t/g,u.tabReplace):""})):e}function E(e){var n,r,s,a,l,d=function(e){var t,n,r,i,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",n=o.exec(s)){var a=k(n[1]);return a||(console.warn(c.replace("{}",n[1])),console.warn("Falling back to no-highlight mode for this block.",e)),a?n[1]:"no-highlight"}for(t=0,r=(s=s.split(/\s+/)).length;t<r;t++)if(g(i=s[t])||k(i))return i}(e);g(d)||(u.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,l=n.textContent,s=d?_(d,l,!0):x(l),(r=m(n)).length&&((a=document.createElement("div")).innerHTML=s.value,s.value=function(e,n,r){var i=0,s="",a=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){s+="<"+h(e)+t.map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+p(e.value).replace(/"/g,"&quot;")+'"'})).join("")+">"}function c(e){s+="</"+h(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){var d=o();if(s+=p(r.substring(i,d[0].offset)),i=d[0].offset,d===e){a.reverse().forEach(c);do{u(d.splice(0,1)[0]),d=o()}while(d===e&&d.length&&d[0].offset===i);a.reverse().forEach(l)}else"start"===d[0].event?a.push(d[0].node):a.pop(),u(d.splice(0,1)[0])}return s+p(r.substr(i))}(r,m(a),l)),s.value=w(s.value),e.innerHTML=s.value,e.className=function(e,t,n){var r=t?i[t]:n,s=[e.trim()];return e.match(/\bhljs\b/)||s.push("hljs"),-1===e.indexOf(r)&&s.push(r),s.join(" ").trim()}(e.className,d,s.language),e.result={language:s.language,re:s.relevance},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.relevance}))}function S(){if(!S.called){S.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,E)}}var N={disableAutodetect:!0};function k(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}function $(e){var t=k(e);return t&&!t.disableAutodetect}return e.highlight=_,e.highlightAuto=x,e.fixMarkup=w,e.highlightBlock=E,e.configure=function(e){u=f(u,e)},e.initHighlighting=S,e.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",S,!1),window.addEventListener("load",S,!1)},e.registerLanguage=function(t,n){var a;try{a=n(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw e;console.error(e),a=N}r[t]=a,a.rawDefinition=n.bind(null,e),a.aliases&&a.aliases.forEach((function(e){i[e]=t}))},e.listLanguages=function(){return n(r)},e.getLanguage=k,e.requireLanguage=function(e){var t=k(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},e.autoDetection=$,e.inherit=f,e.debugMode=function(){s=!1},e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,r){var i=e.inherit({className:"comment",begin:t,end:n,contains:[]},r||{});return i.contains.push(e.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},[e.BACKSLASH_ESCAPE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.PHRASAL_WORDS_MODE,e.COMMENT,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE,e.C_NUMBER_MODE,e.BINARY_NUMBER_MODE,e.CSS_NUMBER_MODE,e.REGEXP_MODE,e.TITLE_MODE,e.UNDERSCORE_TITLE_MODE,e.METHOD_GUARD].forEach((function(e){!function e(t){Object.freeze(t);var n="function"==typeof t;return Object.getOwnPropertyNames(t).forEach((function(r){!t.hasOwnProperty(r)||null===t[r]||"object"!=typeof t[r]&&"function"!=typeof t[r]||n&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(t[r])||e(t[r])})),t}(e)})),e},r="object"==typeof window&&window||"object"==typeof self&&self,t.nodeType?r&&(r.hljs=n({})):n(t)}(Be={exports:{}},Be.exports),Be.exports);const Ue=new RegExp("^(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with)$");var ze,Ie="  ",Ve=[];function He(e,t){void 0===e.toSource&&Object.defineProperty(e,"toSource",{value:t})}function Fe(e,t,n){n=n||e;var r="";return e.length&&(Ve.push(n),r=function(e){if(e.length<2)return e;var t=Array(Ve.length).join(Ie),n=(Ie&&"\n")+t+Ie;return n+e.join(","+n)+(Ie&&"\n")+t}(e.map(t,n)),Ve.pop()),r}function qe(e){if(null===(e=ze?ze(e):e))return"null";if(void 0===e)return"undefined";var t=Ve.indexOf(e);return t>=0?"{$circularReference:"+t+"}":e.toSource()}[Boolean,Function,Number,RegExp].forEach((function(e){var t=e.prototype;He(t,t.toString)})),He(Date.prototype,(function(){return"new Date("+this.getTime()+")"})),He(String.prototype,(function(){return JSON.stringify(this)})),He(Math,(function(){return"Math"})),He(Array.prototype,(function(){return"["+Fe(this,qe)+"]"})),He(Object.prototype,(function(){return"{"+Fe(Object.keys(this),(function(e){var t;return(/^[a-z_$][0-9a-z_$]*$/gi.test(t=e)&&!Ue.test(t)?e:JSON.stringify(e))+": "+qe(this[e])}),this)+"}"}));var Ke=function(e,t,n){ze=t,Ie=function(e){switch(typeof e){case"boolean":return e?"  ":"";case"number":return Array(e+1).join(" ");case"string":return e;case"undefined":return"  "}if(null===e)return"";throw SyntaxError("Invalid indent: "+e)}(n);var r=qe(e);return ze=void 0,Ie="  ",r};De.registerLanguage("js",(function(e){var t="<>",n="</>",r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},i="[A-Za-z$_][0-9A-Za-z$_]*",s={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},l={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"xml"}},c={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"css"}},u={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]};o.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,l,c,u,a,e.REGEXP_MODE];var d=o.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx","mjs","cjs"],keywords:s,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,l,c,u,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,\n]\s*/,relevance:0,contains:[{begin:i+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:i,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+i+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:i},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:d}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:t,end:n},{begin:r.begin,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:i}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:d}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}));const We=document.createElement("pre");function Ge(e){We.innerHTML=De.highlight("js",Ke(e)).value}document.body.appendChild(We);const Xe={lorem:1,ipsum:"foo",dolor:new File([],"foo.txt"),sit:(e,t)=>alert(`${e} + ${t} = ${e+t}`),amet:{consectetur:!1,adipisicing:"rgba(35, 50, 75, 0.5)",elit:"https://picsum.photos/400/200.jpg"}},Je=new me({target:Xe,position:"top right",fixed:!0}).add("lorem").add("ipsum").add("dolor").add("sit",{label:"Add",args:[{value:1},{value:2}]}).group("amet",e=>e.add("consectetur").add("adipisicing").add("elit"));Je.group({target:Je,label:"GUI"},e=>e.add("scheme",{options:["auto","light","dark"]}).add("position",{options:["none","top left","top right","bottom left","bottom right"]}).add("fixed")),Je.on("update",()=>Ge(Xe)),Ge(Xe),document.body.appendChild(Je)}();
//# sourceMappingURL=index.js.map