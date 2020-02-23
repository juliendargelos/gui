!function(){"use strict";
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
    ***************************************************************************** */function t(t,e,r,i){var s,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(n<3?s(o):n>3?s(e,r,o):s(e,r))||o);return n>3&&o&&Object.defineProperty(e,r,o),o
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
     */}const e=new WeakMap,r=t=>"function"==typeof t&&e.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},n={},o={},a=`{{lit-${String(Math.random()).slice(2)}}}`,p=`\x3c!--${a}--\x3e`,l=new RegExp(`${a}|${p}`);class d{constructor(t,e){this.parts=[],this.element=e;const r=[],i=[],s=document.createTreeWalker(e.content,133,null,!1);let n=0,o=-1,p=0;const{strings:d,values:{length:c}}=t;for(;p<c;){const t=s.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let i=0;for(let t=0;t<r;t++)h(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=d[p],r=m.exec(e)[2],i=r.toLowerCase()+"$lit$",s=t.getAttribute(i);t.removeAttribute(i);const n=s.split(l);this.parts.push({type:"attribute",index:o,name:r,strings:n}),p+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const i=t.parentNode,s=e.split(l),n=s.length-1;for(let e=0;e<n;e++){let r,n=s[e];if(""===n)r=u();else{const t=m.exec(n);null!==t&&h(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),r=document.createTextNode(n)}i.insertBefore(r,t),this.parts.push({type:"node",index:++o})}""===s[n]?(i.insertBefore(u(),t),r.push(t)):t.data=s[n],p+=n}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&o!==n||(o++,e.insertBefore(u(),t)),n=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(r.push(t),o--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),p++}}else s.currentNode=i.pop()}for(const t of r)t.parentNode.removeChild(t)}}const h=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},c=t=>-1!==t.index,u=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class g{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],r=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,p=s.nextNode();for(;o<r.length;)if(n=r[o],c(n)){for(;a<n.index;)a++,"TEMPLATE"===p.nodeName&&(e.push(p),s.currentNode=p.content),null===(p=s.nextNode())&&(s.currentNode=e.pop(),p=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(p.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(p,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
     */const f=` ${a} `;class y{constructor(t,e,r,i){this.strings=t,this.values=e,this.type=r,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let i=0;i<t;i++){const t=this.strings[i],s=t.lastIndexOf("\x3c!--");r=(s>-1||r)&&-1===t.indexOf("--\x3e",s+1);const n=m.exec(t);e+=null===n?t+(r?f:p):t.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
     */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,e=t.length-1;let r="";for(let i=0;i<e;i++){r+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(b(t)||!v(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===n||b(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=n,t(this)}this.value!==n&&this.committer.commit()}}class w{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u())}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}const t=this.__pendingValue;t!==n&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===o?(this.value=o,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const r=new g(e,t.processor,this.options),i=r._clone();r.update(t.values),this.__commitNode(i),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,i=0;for(const s of t)r=e[i],void 0===r&&(r=new w(this.options),e.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(e[i-1])),r.setValue(s),r.commit(),i++;i<e.length&&(e.length=i,this.clear(r&&r.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}if(this.__pendingValue===n)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=n}}class $ extends x{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends _{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class P{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}if(this.__pendingValue===n)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=n}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;const A=new class{handleAttributeExpressions(t,e,r,i){const s=e[0];if("."===s){return new $(t,e.slice(1),r).parts}return"@"===s?[new P(t,e.slice(1),i.eventContext)]:"?"===s?[new S(t,e.slice(1),r)]:new x(t,e,r).parts}handleTextExpression(t){return new w(t)}};
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
     */function E(t){let e=z.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},z.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const i=t.strings.join(a);return r=e.keyString.get(i),void 0===r&&(r=new d(t,t.getTemplateElement()),e.keyString.set(i,r)),e.stringsArray.set(t.strings,r),r}const z=new Map,T=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const V=(t,...e)=>new y(t,e,"html",A)
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
     */;function j(t,e){const{element:{content:r},parts:i}=t,s=document.createTreeWalker(r,133,null,!1);let n=U(i),o=i[n],a=-1,p=0;const l=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&p++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-p,n=U(i,n),o=i[n]}l.forEach(t=>t.parentNode.removeChild(t))}const O=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},U=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(c(e))return r}return-1};
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
const M=(t,e)=>`${t}--${e}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const L=t=>e=>{const r=M(e.type,t);let i=z.get(r);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},z.set(r,i));let s=i.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(a);if(s=i.keyString.get(n),void 0===s){const r=e.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(r,t),s=new d(e,r),i.keyString.set(n,s)}return i.stringsArray.set(e.strings,s),s},B=["html","svg"],F=new Set,q=(t,e,r)=>{F.add(t);const i=r?r.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{B.forEach(e=>{const r=z.get(M(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),j(t,r)})})})(t);const a=i.content;r?function(t,e,r=null){const{element:{content:i},parts:s}=t;if(null==r)return void i.appendChild(e);const n=document.createTreeWalker(i,133,null,!1);let o=U(s),a=0,p=-1;for(;n.nextNode();){for(p++,n.currentNode===r&&(a=O(e),r.parentNode.insertBefore(e,r));-1!==o&&s[o].index===p;){if(a>0){for(;-1!==o;)s[o].index+=a,o=U(s,o);return}o=U(s,o)}}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const p=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)e.insertBefore(p.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),j(r,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const I={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:H},D=Promise.resolve(!0);class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const i=this._attributeNameForProperty(r,e);void 0!==i&&(this._attributeToPropertyMap.set(i,r),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[r]},set(e){const i=this[t];this[r]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=H){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,i=e.converter||I,s="function"==typeof i?i:i.fromAttribute;return s?s(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,i=e.converter;return(i&&i.toAttribute||I.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=W){const i=this.constructor,s=i._attributeNameForProperty(t,r);if(void 0!==s){const t=i._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,i=r._attributeToPropertyMap.get(t);if(void 0!==i){const t=r._classProperties.get(i)||W;this._updateState=16|this._updateState,this[i]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const i=this.constructor,s=i._classProperties.get(t)||W;i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const r=this._updatePromise;this._updatePromise=new Promise((r,i)=>{t=r,e=i});try{await r}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}J.finalized=!0;
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
const X=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}}:Object.assign({},e,{finisher(r){r.createProperty(e.key,t)}});function G(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):X(t,e)}function Y(t){return(e,r)=>{const i={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==r?Z(i,e,r):K(i,e)}}const Z=(t,e,r)=>{Object.defineProperty(e,r,t)},K=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */,Q="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol();class et{constructor(t,e){if(e!==tt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const rt=(t,...e)=>{const r=e.reduce((e,r,i)=>e+(t=>{if(t instanceof et)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[i+1],t[0]);return new et(r,tt)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const it=t=>t.flat?t.flat(1/0):function t(e,r=[]){for(let i=0,s=e.length;i<s;i++){const s=e[i];Array.isArray(s)?t(s,r):r.push(s)}return r}(t);class st extends J{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){it(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}function nt(t){return function(t){return`${t[0].toUpperCase()}${t.slice(1)}`}(at(`${t}`," ")).replace(/[-_\s]+/g," ")}function ot(t){return void 0===t?"":`${t}`}function at(t,e){return t.replace(/([^A-Z\d])([A-Z\d]+)/g,`$1${e}$2`).toLowerCase()}function pt(t){customElements.define(`gui-${at(t.name,"-").replace(/^gui$/,"panel")}`,t)}st.finalized=!0,st.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,n=T.has(e),o=R&&11===e.nodeType&&!!e.host,a=o&&!F.has(i),p=a?document.createDocumentFragment():e;if(((t,e,r)=>{let i=T.get(e);void 0===i&&(s(e,e.firstChild),T.set(e,i=new w(Object.assign({templateFactory:E},r))),i.appendInto(e)),i.setValue(t),i.commit()})(t,p,Object.assign({templateFactory:L(i)},r)),a){const t=T.get(p);T.delete(p);const r=t.value instanceof g?t.value.template:void 0;q(i,p,r),s(e,e.firstChild),e.appendChild(p),T.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)};class lt extends st{on(t,e,...r){return this.addEventListener(t,e,...r),this}off(t,e,...r){return this.removeEventListener(t,e,...r),this}}lt.styles=rt`
    :host {
      display: block;
      font-family: sans-serif;
      font-size: 13px;
      line-height: 1.3em;
    }
  `;class dt extends Event{constructor(t,e){super("update",{composed:!0}),this.value=t,this.previous=e}}class ht extends lt{constructor({value:t,disabled:e=!1}={}){super(),this.set(t),this.disabled=e}input(t){t.stopPropagation();const e=this.value;Promise.resolve(this.parse(this.extract(t))).then(t=>this.set(t).dispatchEvent(new dt(this.value,e)))}extract(t){return t.target.value}parse(t){return t}set(t){return this.value=t,this}static match(t){return this.types.some(e=>e.match(t))}static register(t){return this.types.unshift(t),this}static from(t){return new(this.types.find(e=>e.match(t))||this.types[this.types.length-1])(t)}}ht.types=[],ht.styles=rt`
    ${lt.styles}

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
  `,t([G()],ht.prototype,"value"),t([G({type:Boolean})],ht.prototype,"disabled");class ct extends lt{constructor({target:t,listen:e=!1,label:r}={}){super(),this.target=t,this.listen=e,this.label=r}attach(){return this.dettach()}dettach(){return this}}ct.styles=rt`
    ${lt.styles}

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
  `,t([G({type:String})],ct.prototype,"label");let ut=class extends ct{constructor({field:t,property:e,inline:r=!0,fluid:i=!1,target:s,listen:n=!1,immediate:o=!0,label:a=(e?nt(`${e}`):void 0),value:p=(s&&e?s[e]:void 0),...l}){super({target:s,listen:n,label:a}),this.committing=!1,this.focused=!1,this.commit=this.commit.bind(this),this.property=e,this.inline=r,this.fluid=i,this.field=t||ht.from({value:p,...l}),this.field.on("focus",()=>{this.focused=!0}),this.field.on("blur",()=>{this.focused=!1}),this.attach(),o&&this.commit(new dt(this.value,void 0))}get value(){return this.field.value}set value(t){this.field.set(t)}commit(t){this.target&&this.property&&(this.committing=!0,this.target[this.property]=t.value,this.committing=!1)}attach(){if(super.attach(),this.target&&this.property&&(this.field.on("update",this.commit),this.listen)){let t;this.descriptor=Object.getOwnPropertyDescriptor(this.target,this.property)||{value:void 0};const{get:e=(()=>t),set:r=(e=>{t=e})}=this.descriptor;try{Object.defineProperty(this.target,this.property,{get:e,set:t=>{const i=e();this.committing||this.field.set(t),r.call(this.target,t),this.dispatchEvent(new dt(t,i))}})}catch(t){throw this.descriptor=void 0,new Error(`Unable to initialize property setter: ${t}`)}}return this}dettach(){if(super.dettach(),this.field.off("update",this.commit),this.target&&this.property&&this.descriptor){"value"in this.descriptor&&(this.descriptor.value=this.value);try{Object.defineProperty(this.target,this.property,this.descriptor),this.descriptor=void 0}catch(t){throw new Error(`Unable to dispose property setter: ${t}`)}}return this}render(){return V`${this.label?V`<span @mousedown=${t=>t.preventDefault()}>
          ${this.label}
        </span>`:""}<div>${this.field}</div>`}};var mt;ut.styles=rt`
    ${ct.styles}

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
  `,t([G({type:Boolean,reflect:!0})],ut.prototype,"focused"),t([G({type:Boolean,reflect:!0})],ut.prototype,"inline"),t([G({type:Boolean,reflect:!0})],ut.prototype,"fluid"),ut=t([pt],ut);let gt=mt=class extends ct{constructor({open:t=!1,transparent:e=!1,flat:r=!1,...i}={}){super(i),this.transparent=!1,this.flat=!1,this._open=!1,this.childControllers=[],this._open=t,this.transparent=e,this.flat=r}get contentHeight(){return[...this.content.children].reduce((t,e)=>t+e.offsetHeight,0)}get open(){return this._open}set open(t){t!==this._open&&(clearTimeout(this.openTimeout),this._open=t,t?(this.content.style.height=`${this.contentHeight}px`,this.openTimeout=window.setTimeout(()=>{this.content.style.height=""},500)):(this.content.style.height||(this.content.style.height=`${this.contentHeight}px`),requestAnimationFrame(()=>{this.content.style.height="0"})))}resolve(t,e){if("string"!=typeof t)return{target:e||this.target,property:t};let r=t.split(".");return{property:r.pop(),target:r.reduce((t,e)=>t&&"object"==typeof t&&t[e]||void 0,e||this.target)}}firstUpdated(){this.open||(this.content.style.height="0")}attach(){return super.attach(),this.childControllers.forEach(t=>t.attach()),this}dettach(){return super.dettach(),this.childControllers.forEach(t=>t.dettach()),this}add(t,e,r){let i;if(t instanceof ct)i=t;else{let r;if("string"==typeof t){r="object"==typeof e?{...e}:{};const{target:i,property:s}=this.resolve(t,r.target);r={...r,target:i,property:s}}else r={target:this.target,...t};i=new ut(r)}return"function"==typeof e&&(r=e),r&&r(i),this.childControllers.push(i),this}group(t,e,r){let i;if("object"==typeof t)i=t;else{const{target:r,property:s}=this.resolve(t);i={target:r?r[s]:void 0,label:nt(`${s}`),..."object"==typeof e?e:null}}const s=new mt(i);return this.add(s),"function"==typeof e?e&&e(s):r&&r(s),this}remove(t){if(t){let e=this.childControllers.indexOf(t);-1!==e&&this.childControllers.splice(e,1)}return this}toggle(){return this.open=!this.open,this}render(){return V`
      <span
        @mousedown=${t=>t.preventDefault()}
        @click=${this.toggle}
      >
        ${this.label||"Group"}
      </span>
      <div>
        ${this.childControllers}
      </div>
    `}};gt.styles=rt`
    ${ct.styles}

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
  `,t([Y("div")],gt.prototype,"content"),t([G({type:Boolean,reflect:!0})],gt.prototype,"transparent"),t([G({type:Boolean,reflect:!0})],gt.prototype,"flat"),t([G({type:Boolean,reflect:!0,attribute:"open"})],gt.prototype,"_open"),gt=mt=t([pt],gt);let ft=class extends gt{constructor({scheme:t,fixed:e=!1,position:r,label:i="Parameters",open:s=!0,...n}={}){super({label:i,open:s,...n,flat:!0}),this.scheme=t,this.fixed=e,this.position=r}get width(){return this.offsetWidth}set width(t){this.style.width=`${Math.max(200,t)}px`}resize(t){t.preventDefault();const e=t.clientX,r=this.offsetWidth,i=t=>{t.preventDefault();const i=this.position&&this.position.includes("left")?1:-1;this.width=r+i*(t.clientX-e)};addEventListener("mousemove",i),addEventListener("mouseup",()=>{removeEventListener("mousemove",i)},{once:!0})}render(){return V`
      <hr @mousedown=${this.resize}>
      ${super.render()}
    `}};ft.styles=rt`
    ${gt.styles}

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
  `,t([G({type:String,reflect:!0})],ft.prototype,"scheme"),t([G({type:Boolean,reflect:!0})],ft.prototype,"fixed"),t([G({type:String,reflect:!0})],ft.prototype,"position"),t([G({type:Number})],ft.prototype,"width"),ft=t([pt],ft);let yt=class extends ht{constructor({maximumLength:t=-1,multiline:e=!1,...r}={}){super(r),this.maximumLength=t,this.multiline=e}render(){return this.multiline?V`
        <textarea
          .value=${ot(this.value)}
          .disabled=${this.disabled}
          maxLength=${this.maximumLength}
          @input=${this.input}
        ></textarea>
      `:V`
        <input
          type="text"
          .value=${ot(this.value)}
          .disabled=${this.disabled}
          maxLength=${this.maximumLength}
          @input=${this.input}
        >
      `}static match({value:t}){return"string"==typeof t}};yt.styles=rt`
    ${ht.styles}

    input {
      height: 30px;
    }

    textarea {
      resize: vertical;
    }
  `,t([G({type:Number})],yt.prototype,"maximumLength"),t([G({type:Boolean})],yt.prototype,"multiline"),yt=t([pt],yt);const bt=rt`
  appearance: none;
  background-color: var(--secondary-foreground);
  width: 10px;
  height: 10px;
  border-radius: 10px;
  transition: .15s;
  transform: translateY(calc(1px - 50%));
`,vt=rt`
  background-color: var(--tint);
`,xt=rt`
  background-color: var(--primary-background);
  height: 2px;
  border-radius: 2px;
`;let _t=class extends ht{constructor({minimum:t=-1/0,maximum:e=1/0,step:r,range:i=!0,...s}={}){super(s),this.minimum=t,this.maximum=e,this.step=r,this.range=i,this.displayValue=this.value}get inferedMinimum(){return this.range&&this.minimum===-1/0?0:this.minimum}get inferedMaximum(){return this.range&&this.maximum===1/0?100:this.maximum}parse(t){return Math.max(this.minimum,Math.min(this.maximum,parseFloat(t)||0))}render(){return V`
      ${this.range?V`
        <input
          type="range"
          .value=${this.value}
          .disabled=${this.disabled}
          .min=${this.inferedMinimum}
          .max=${this.inferedMaximum}
          .step=${this.step}
          @input=${t=>{this.input(t),this.displayValue=this.value}}
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
    `}static match({value:t}){return"number"==typeof t}};_t.styles=rt`
    ${ht.styles}

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
      ${bt}
    }

    input[type="range"]:active::-webkit-slider-thumb {
      ${vt}
    }

    input[type="range"]::-moz-slider-thumb {
      -moz-appearance: none;
      appearance: none;
      ${bt}
    }

    input[type="range"]:active::-moz-slider-thumb {
      ${vt}
    }

    input[type="range"]::-ms-slider-thumb {
      -ms-appearance: none;
      appearance: none;
      ${bt}
    }

    input[type="range"]:active::-ms-slider-thumb {
      ${vt}
    }

    input[type=range]::-webkit-slider-runnable-track {
      ${xt}
    }

    input[type=range]::-moz-range-track {
      ${xt}
    }

    input[type=range]::-ms-track {
      ${xt}
    }

    :host(:not([range])) div, :host(:not([range])) input[type=number] {
      width: 100%;
    }
  `,t([Y('input[type="number"]')],_t.prototype,"$input"),t([G({type:Number,attribute:!1})],_t.prototype,"displayValue"),t([G({type:Number})],_t.prototype,"minimum"),t([G({type:Number})],_t.prototype,"maximum"),t([G({type:Number})],_t.prototype,"step"),t([G({type:Boolean,reflect:!0})],_t.prototype,"range"),_t=t([pt],_t);const wt=["number","hex","rgb","array","object"],St=/^\s*#?([a-f\d]{6}|[a-f\d]{3})\s*$/i,$t=/^\s*rgb(?:a)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)\s*$/i;function kt(t){return"number"==typeof t?t:parseFloat(t)}function Ct(t){if(t)switch(typeof t){case"string":const e=t.match($t);return!(!e||!e[4]);case"object":return"number"==typeof t[3]||"number"==typeof t.a}return!1}function Pt(t){if(t)switch(typeof t){case"string":const e=t.match($t);if(e&&e[4])return parseFloat(e[4]);break;case"object":let r=NaN;if("number"==typeof t[3]&&(r=kt(t[3])),"number"==typeof t.a&&(r=kt(t.a)),!isNaN(r))return r}return 1}function Nt(t,e){switch(typeof t){case"number":if(~~t===t&&t>=0&&t<=16777215)return"number";break;case"string":if(St.test(t))return"hex";if($t.test(t))return"rgb";break;case"object":if(t){if("number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b)return"object";if("number"==typeof t[0]&&"number"==typeof t[1]&&"number"==typeof t[2])return"array"}}return e}function At(t,e,r=!1){let i=0,s=0,n=0,o=1;switch(typeof t){case"string":let e=t.match(St);if(!e){let e=t.match($t);e&&(i=parseInt(e[1],10),s=parseInt(e[2],10),n=parseInt(e[3],10),e[4]&&(o=parseFloat(e[4])));break}{let r=e[1];t=parseInt(6===r.length?r:`${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`,16)}case"number":i=t>>16&255,s=t>>8&255,n=255&t;break;case"object":t&&("r"in t||"g"in t||"b"in t||"a"in t?(i=kt(t.r)||0,s=kt(t.g)||0,n=kt(t.b)||0,o=kt(t.a)):(i=kt(t[0])||0,s=kt(t[1])||0,n=kt(t[2])||0,o=kt(t[3])),isNaN(o)&&(o=1))}switch(e){case"number":return i<<16|s<<8|n;case"hex":return`#${(i<<16|s<<8|n).toString(16).padStart(6,"0")}`;case"rgb":return r?`rgba(${i}, ${s}, ${n}, ${o})`:`rgb(${i}, ${s}, ${n})`;case"array":return r?[i,s,n,o]:[i,s,n];case"object":default:return r?{r:i,g:s,b:n,a:o}:{r:i,g:s,b:n}}}let Et=class extends ht{constructor({value:t,format:e=Nt(t,"rgb"),alpha:r=Ct(t),...i}={}){super(i),this.format=e,this.alpha=r,this.set(t),this.displayValue=At(this.value,"hex"),this.displayAlpha=Pt(this.value)}get includeAlpha(){return this.alpha&&"hex"!==this.format&&"number"!==this.format}parse(t){if(this.includeAlpha){let e=At(t,"object",!0);return e.a=Math.max(0,Math.min(1,parseFloat(this.$alpha.value)||0)),e}return t}extract(t){return t.target===this.$alpha?At(this.value,"hex"):t.target.value}set(t){return super.set(At(t,this.format,this.alpha)),this}render(){const t=At(this.value,"hex"),e=`rgba(255, 255, 255, ${1-Pt(this.value)})`;return V`
      <input
        type="text"
        .value=${this.displayValue}
        .disabled=${this.disabled}
        @input=${this.input}
        @blur=${()=>{this.displayValue="",requestAnimationFrame(()=>{this.displayValue=At(this.value,"hex")})}}
      >

      <input
        type="color"
        .value=${t}
        .disabled=${this.disabled}
        style=${`\n          background-color: ${At(this.value,"rgb",!0)};\n          background-image: linear-gradient(-45deg, ${e} 50%, transparent 50%, transparent 100%, ${e} 100%, ${e});\n        `}
        @input=${t=>{this.input(t),this.displayValue=At(this.value,"hex")}}
      >

      ${this.includeAlpha?V`
        <div>
          <input
            type="number"
            .value=${this.displayAlpha}
            .disabled=${this.disabled}
            .min=${0}
            .max=${1}
            .step=${.01}
            @input=${this.input}
            @blur=${()=>{this.displayAlpha=Pt(this.value)}}
          >
        </div>
      `:""}
    `}static match({value:t,format:e=Nt(t)}){return function(t){return wt.includes(t)}(e)}};Et.styles=rt`
    ${ht.styles}

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
  `,t([Y('input[type="number"]')],Et.prototype,"$alpha"),t([G({type:String,attribute:!1})],Et.prototype,"displayValue"),t([G({type:Number,attribute:!1})],Et.prototype,"displayAlpha"),t([G({type:String})],Et.prototype,"format"),t([G({type:Boolean})],Et.prototype,"alpha"),Et=t([pt],Et);let zt=class extends ht{constructor({options:t,humanize:e=!0,...r}={}){super(r),this.options=t,this.humanize=e}get labels(){if(!this.options)return[];let t=Array.isArray(this.options)?this.options.map(t=>`${t}`):Object.keys(this.options);return this.humanize&&t.forEach((e,r)=>{t[r]=nt(e)}),t}get values(){return this.options?Array.isArray(this.options)?this.options:Object.values(this.options):[]}parse(t){return this.values[t]}render(){return V`
      <select
        .disabled=${this.disabled}
        @input=${this.input}
      >
        ${this.labels.map((t,e)=>V`
          <option
            value=${e}
            .selected=${this.parse(e)===this.value}
          >${t}</option>
        `)}
      </selectc>
    `}static match({options:t}){return t&&"object"==typeof t}};zt.styles=rt`
    ${ht.styles}

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
  `,t([G({type:Object})],zt.prototype,"options"),t([G({type:Boolean})],zt.prototype,"humanize"),zt=t([pt],zt);let Tt=class extends ht{constructor(){super(...arguments),this.toggle=t=>this.$input.click()}extract(t){return t.target.checked}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.toggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.toggle)}render(){return V`
      <input
        type="checkbox"
        .checked=${this.value}
        .disabled=${this.disabled}
        @input=${this.input}
        @click=${t=>t.stopPropagation()}
      >
    `}static match({value:t}){return"boolean"==typeof t}};Tt.styles=rt`
    ${ht.styles}

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
  `,t([Y("input")],Tt.prototype,"$input"),Tt=t([pt],Tt);let Vt=class extends ht{constructor({format:t="url",value:e,accept:r=(e instanceof File||e instanceof Blob?e.type:void 0),...i}={}){super(i),this.name="",this.format=t,this.accept=r,this.set(e)}extract(t){const e=t.target.files;return e?e[0]:null}parse(t){if(!t)return;switch(this.format){case"file":return t;case"url":return URL.createObjectURL(t)}const e=new Blob([t],{type:t.type});switch(this.format){case"text":return e.text();case"buffer":return e.arrayBuffer();case"stream":return e.stream()}return e}set(t){return!t&&this.$input&&(this.$input.value=""),t instanceof File||t instanceof Blob?this.name=t.name:"string"==typeof t&&(this.name=t),this.name||(this.name="Unknown file"),super.set(t)}clear(){const t=this.value;this.set(void 0),this.dispatchEvent(new dt(this.value,t))}render(){return V`
      <input
        type="file"
        .accept=${this.accept||""}
        .disabled=${this.disabled}
        @change=${this.input}
      >

      <p>${this.value?this.name:"Choose a file"}</p>

      ${this.value?V`<span
        @click=${this.clear}
      ></span>`:""}
    `}static match({value:t}){return t instanceof File||t instanceof Blob}};Vt.styles=rt`
    ${ht.styles}

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
  `,t([Y("input")],Vt.prototype,"$input"),t([G({type:String})],Vt.prototype,"format"),t([G({type:String})],Vt.prototype,"accept"),Vt=t([pt],Vt);let jt=class extends Vt{constructor(t={}){super({...t,accept:"image/*"})}set(t){return this.thumbnail&&(URL.revokeObjectURL(this.thumbnail),this.thumbnail=void 0),"string"==typeof t?this.thumbnail=t:(t instanceof Blob||t instanceof File)&&(this.thumbnail=URL.createObjectURL(t)),super.set(t)}render(){return V`
      <figure>
        ${this.thumbnail?V`<img .src=${this.thumbnail}>`:""}
      </figure>
      <div>
        ${super.render()}
      </div>
    `}static match(t){const e=t.value;return e&&"string"==typeof e&&/\.(png|jpe?g|gif|svg)$/i.test(e)||super.match(t)&&"image/"===e.type.slice(0,6)}};jt.styles=rt`
    ${Vt.styles}

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
  `,t([G({type:String,attribute:!1})],jt.prototype,"thumbnail"),jt=t([pt],jt);let Ot=class extends ht{constructor({args:t,...e}={}){if(super(e),t){this.parametersController=new gt({label:"Parameters",flat:!0,transparent:!0});const e=2+~~(Math.log(t.length-1)/Math.log(10));t.forEach((t,r)=>{const i=new ut({fluid:!0,label:`${r}`.padStart(e," "),...t});i.on("update",t=>t.stopPropagation()),this.parametersController.add(i)})}}trigger(){this.parametersController?this.value(...this.parametersController.childControllers.map(t=>t.value)):this.value()}render(){return V`
      ${this.parametersController?this.parametersController:""}
      <button .disabled=${this.disabled} @click=${this.trigger}>Trigger</button>
    `}static match({value:t}){return"function"==typeof t}};Ot.styles=rt`
    ${ht.styles}

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
  `,Ot=t([pt],Ot),ht.register(yt).register(Et).register(_t).register(zt).register(Tt).register(Vt).register(jt).register(Ot);const Ut={lorem:1,ipsum:"foo",dolor:new File([],"foo.txt"),sit:(t,e)=>alert(`${t} + ${e} = ${t+e}`),amet:{consectetur:!1,adipisicing:"rgba(35, 50, 75, 0.5)",elit:"https://picsum.photos/400/200.jpg"}},Mt=document.createElement("pre"),Rt=new ft({target:Ut,position:"top right",fixed:!0}).add("lorem").add("ipsum").add("dolor").add("sit",{label:"Add",args:[{value:1},{value:2}]}).group("amet",t=>t.add("consectetur").add("adipisicing").add("elit"));Rt.group({target:Rt,label:"GUI"},t=>t.add("scheme",{options:["auto","light","dark"]}).add("position",{options:["none","top left","top right","bottom left","bottom right"]}).add("fixed"));const Lt=()=>{Mt.textContent=JSON.stringify(Ut,null,2)};Rt.on("update",Lt),Lt();const Bt=document.createElement("style");Bt.textContent="\n  body {\n    background-color: #111;\n    margin: 0;\n    color: #eee;\n  }\n\n  pre {\n    padding: 20px;\n    margin: 0;\n    font-size: 20px;\n  }\n",document.head.appendChild(Bt),document.body.appendChild(Rt),document.body.appendChild(Mt)}();
//# sourceMappingURL=index.js.map
