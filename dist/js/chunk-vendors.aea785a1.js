(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=n("40d5"),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},"04d1":function(e,t,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,o(t)&&(t===u||i(t.prototype))?t=void 0:s(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return k})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return I}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function l(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){const e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h="FirebaseError";class p extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=h,Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?m(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new p(r,s,n);return a}}function m(e,t){return e.replace(g,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const g=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(b(n)&&b(o)){if(!_(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function b(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function I(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function O(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){const n=new T(e,t);return n.subscribe.bind(n)}class T{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=S(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=E),void 0===r.error&&(r.error=E),void 0===r.complete&&(r.complete=E);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function E(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),d=n("9a1f"),f=n("35a1"),h=n("2a62"),p=r.TypeError,v=function(e,t){this.stopped=e,this.result=t},m=v.prototype;e.exports=function(e,t,n){var r,g,y,_,b,w,I,O=n&&n.that,k=!(!n||!n.AS_ENTRIES),T=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),E=i(t,O),A=function(e){return r&&h(r,"normal",e),new v(!0,e)},C=function(e){return k?(s(e),S?E(e[0],e[1],A):E(e[0],e[1])):S?E(e,A):E(e)};if(T)r=e;else{if(g=f(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(y=0,_=u(e);_>y;y++)if(b=C(e[y]),b&&l(m,b))return b;return new v(!1)}r=d(e,g)}w=r.next;while(!(I=o(w,r)).done){try{b=C(I.value)}catch(x){h(r,"throw",x)}if("object"==typeof b&&b&&l(m,b))return b}return new v(!1)}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,d,f,h,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(d in t){if(h=t[d],e.noTargetGet?(p=i(l,d),f=p&&p.value):f=l[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&o(h,"sham",!0),s(l,d,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2877:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"2b0e":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function o(e){return!0===e}function s(e){return!1===e}function a(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function c(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function d(e){return"[object RegExp]"===u.call(e)}function f(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function h(e){return i(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function v(e){var t=parseFloat(e);return isNaN(t)?e:t}function m(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}m("slot,component",!0);var g=m("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(e,t){return _.call(e,t)}function w(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var I=/-(\w)/g,O=w((function(e){return e.replace(I,(function(e,t){return t?t.toUpperCase():""}))})),k=w((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),T=/\B([A-Z])/g,S=w((function(e){return e.replace(T,"-$1").toLowerCase()}));function E(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function A(e,t){return e.bind(t)}var C=Function.prototype.bind?A:E;function x(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function R(e,t){for(var n in t)e[n]=t[n];return e}function P(e){for(var t={},n=0;n<e.length;n++)e[n]&&R(t,e[n]);return t}function N(e,t,n){}var j=function(e,t,n){return!1},L=function(e){return e};function D(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return D(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return D(e[n],t[n])}))}catch(u){return!1}}function M(e,t){for(var n=0;n<e.length;n++)if(D(e[n],t))return n;return-1}function $(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var U="data-server-rendered",F=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:N,parsePlatformTagName:L,mustUseProp:j,async:!0,_lifecycleHooks:V},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function B(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+W.source+".$_\\d]");function q(e){if(!G.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var K,J="__proto__"in{},X="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=Y&&WXEnvironment.platform.toLowerCase(),Q=X&&window.navigator.userAgent.toLowerCase(),ee=Q&&/msie|trident/.test(Q),te=Q&&Q.indexOf("msie 9.0")>0,ne=Q&&Q.indexOf("edge/")>0,re=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Z),ie=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/)),oe={}.watch,se=!1;if(X)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){se=!0}}),window.addEventListener("test-passive",null,ae)}catch(ks){}var ce=function(){return void 0===K&&(K=!X&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),K},ue=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var de,fe="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);de="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var he=N,pe=0,ve=function(){this.id=pe++,this.subs=[]};ve.prototype.addSub=function(e){this.subs.push(e)},ve.prototype.removeSub=function(e){y(this.subs,e)},ve.prototype.depend=function(){ve.target&&ve.target.addDep(this)},ve.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},ve.target=null;var me=[];function ge(e){me.push(e),ve.target=e}function ye(){me.pop(),ve.target=me[me.length-1]}var _e=function(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},be={child:{configurable:!0}};be.child.get=function(){return this.componentInstance},Object.defineProperties(_e.prototype,be);var we=function(e){void 0===e&&(e="");var t=new _e;return t.text=e,t.isComment=!0,t};function Ie(e){return new _e(void 0,void 0,void 0,String(e))}function Oe(e){var t=new _e(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ke=Array.prototype,Te=Object.create(ke),Se=["push","pop","shift","unshift","splice","sort","reverse"];Se.forEach((function(e){var t=ke[e];B(Te,e,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Ee=Object.getOwnPropertyNames(Te),Ae=!0;function Ce(e){Ae=e}var xe=function(e){this.value=e,this.dep=new ve,this.vmCount=0,B(e,"__ob__",this),Array.isArray(e)?(J?Re(e,Te):Pe(e,Te,Ee),this.observeArray(e)):this.walk(e)};function Re(e,t){e.__proto__=t}function Pe(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];B(e,o,t[o])}}function Ne(e,t){var n;if(c(e)&&!(e instanceof _e))return b(e,"__ob__")&&e.__ob__ instanceof xe?n=e.__ob__:Ae&&!ce()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new xe(e)),t&&n&&n.vmCount++,n}function je(e,t,n,r,i){var o=new ve,s=Object.getOwnPropertyDescriptor(e,t);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ne(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return ve.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Me(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||a&&!c||(c?c.call(e,t):n=t,u=!i&&Ne(t),o.notify())}})}}function Le(e,t,n){if(Array.isArray(e)&&f(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(je(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function De(e,t){if(Array.isArray(e)&&f(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,t)&&(delete e[t],n&&n.dep.notify())}}function Me(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Me(t)}xe.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)je(e,t[n])},xe.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ne(e[t])};var $e=H.optionMergeStrategies;function Ue(e,t){if(!t)return e;for(var n,r,i,o=fe?Reflect.ownKeys(t):Object.keys(t),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=e[n],i=t[n],b(e,n)?r!==i&&l(r)&&l(i)&&Ue(r,i):Le(e,n,i));return e}function Fe(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,i="function"===typeof e?e.call(n,n):e;return r?Ue(r,i):i}:t?e?function(){return Ue("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Ve(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?He(n):n}function He(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function We(e,t,n,r){var i=Object.create(e||null);return t?R(i,t):i}$e.data=function(e,t,n){return n?Fe(e,t,n):t&&"function"!==typeof t?e:Fe(e,t)},V.forEach((function(e){$e[e]=Ve})),F.forEach((function(e){$e[e+"s"]=We})),$e.watch=function(e,t,n,r){if(e===oe&&(e=void 0),t===oe&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in R(i,e),t){var s=i[o],a=t[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},$e.props=$e.methods=$e.inject=$e.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return R(i,e),t&&R(i,t),i},$e.provide=Fe;var ze=function(e,t){return void 0===t?e:t};function Be(e,t){var n=e.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=O(i),s[o]={type:null})}else if(l(n))for(var a in n)i=n[a],o=O(a),s[o]=l(i)?i:{type:i};else 0;e.props=s}}function Ge(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var s=n[o];r[o]=l(s)?R({from:o},s):{from:s}}else 0}}function qe(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Ke(e,t,n){if("function"===typeof t&&(t=t.options),Be(t,n),Ge(t,n),qe(t),!t._base&&(t.extends&&(e=Ke(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ke(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)b(e,o)||a(o);function a(r){var i=$e[r]||ze;s[r]=i(e[r],t[r],n,r)}return s}function Je(e,t,n,r){if("string"===typeof n){var i=e[t];if(b(i,n))return i[n];var o=O(n);if(b(i,o))return i[o];var s=k(o);if(b(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Xe(e,t,n,r){var i=t[e],o=!b(n,e),s=n[e],a=tt(Boolean,i.type);if(a>-1)if(o&&!b(i,"default"))s=!1;else if(""===s||s===S(e)){var c=tt(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Ye(r,i,e);var u=Ae;Ce(!0),Ne(s),Ce(u)}return s}function Ye(e,t,n){if(b(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==Qe(t.type)?r.call(e):r}}var Ze=/^\s*function (\w+)/;function Qe(e){var t=e&&e.toString().match(Ze);return t?t[1]:""}function et(e,t){return Qe(e)===Qe(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(et(t[n],e))return n;return-1}function nt(e,t,n){ge();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(ks){it(ks,r,"errorCaptured hook")}}}it(e,t,n)}finally{ye()}}function rt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&h(o)&&!o._handled&&(o.catch((function(e){return nt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(ks){nt(ks,r,i)}return o}function it(e,t,n){if(H.errorHandler)try{return H.errorHandler.call(null,e,t,n)}catch(ks){ks!==e&&ot(ks,null,"config.errorHandler")}ot(e,t,n)}function ot(e,t,n){if(!X&&!Y||"undefined"===typeof console)throw e;console.error(e)}var st,at=!1,ct=[],ut=!1;function lt(){ut=!1;var e=ct.slice(0);ct.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&le(Promise)){var dt=Promise.resolve();st=function(){dt.then(lt),re&&setTimeout(N)},at=!0}else if(ee||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())st="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(lt)}:function(){setTimeout(lt,0)};else{var ft=1,ht=new MutationObserver(lt),pt=document.createTextNode(String(ft));ht.observe(pt,{characterData:!0}),st=function(){ft=(ft+1)%2,pt.data=String(ft)},at=!0}function vt(e,t){var n;if(ct.push((function(){if(e)try{e.call(t)}catch(ks){nt(ks,t,"nextTick")}else n&&n(t)})),ut||(ut=!0,st()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var mt=new de;function gt(e){yt(e,mt),mt.clear()}function yt(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!c(e)||Object.isFrozen(e)||e instanceof _e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i){n=e.length;while(n--)yt(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)yt(e[r[n]],t)}}}var _t=w((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function bt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return rt(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)rt(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function wt(e,t,n,i,s,a){var c,u,l,d;for(c in e)u=e[c],l=t[c],d=_t(c),r(u)||(r(l)?(r(u.fns)&&(u=e[c]=bt(u,a)),o(d.once)&&(u=e[c]=s(d.name,u,d.capture)),n(d.name,u,d.capture,d.passive,d.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)r(e[c])&&(d=_t(c),i(d.name,t[c],d.capture))}function It(e,t,n){var s;e instanceof _e&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),y(s.fns,c)}r(a)?s=bt([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=bt([a,c]),s.merged=!0,e[t]=s}function Ot(e,t,n){var o=t.options.props;if(!r(o)){var s={},a=e.attrs,c=e.props;if(i(a)||i(c))for(var u in o){var l=S(u);kt(s,c,u,l,!0)||kt(s,a,u,l,!1)}return s}}function kt(e,t,n,r,o){if(i(t)){if(b(t,n))return e[n]=t[n],o||delete t[n],!0;if(b(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function Tt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function St(e){return a(e)?[Ie(e)]:Array.isArray(e)?At(e):void 0}function Et(e){return i(e)&&i(e.text)&&s(e.isComment)}function At(e,t){var n,s,c,u,l=[];for(n=0;n<e.length;n++)s=e[n],r(s)||"boolean"===typeof s||(c=l.length-1,u=l[c],Array.isArray(s)?s.length>0&&(s=At(s,(t||"")+"_"+n),Et(s[0])&&Et(u)&&(l[c]=Ie(u.text+s[0].text),s.shift()),l.push.apply(l,s)):a(s)?Et(u)?l[c]=Ie(u.text+s):""!==s&&l.push(Ie(s)):Et(s)&&Et(u)?l[c]=Ie(u.text+s.text):(o(e._isVList)&&i(s.tag)&&r(s.key)&&i(t)&&(s.key="__vlist"+t+"_"+n+"__"),l.push(s)));return l}function Ct(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function xt(e){var t=Rt(e.$options.inject,e);t&&(Ce(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),Ce(!0))}function Rt(e,t){if(e){for(var n=Object.create(null),r=fe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from,a=t;while(a){if(a._provided&&b(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in e[o]){var c=e[o].default;n[o]="function"===typeof c?c.call(t):c}else 0}}return n}}function Pt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Nt)&&delete n[u];return n}function Nt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function jt(e){return e.isComment&&e.asyncFactory}function Lt(e,t,r){var i,o=Object.keys(t).length>0,s=e?!!e.$stable:!o,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=Dt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=Mt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),B(i,"$stable",s),B(i,"$key",a),B(i,"$hasNormal",o),i}function Dt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:St(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!jt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Mt(e,t){return function(){return e[t]}}function $t(e,t){var n,r,o,s,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(fe&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)n.push(t(l.value,n.length)),l=u.next()}else for(s=Object.keys(e),n=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],n[r]=t(e[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Ut(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=R(R({},r),n)),i=o(n)||("function"===typeof t?t():t)):i=this.$slots[e]||("function"===typeof t?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Ft(e){return Je(this.$options,"filters",e,!0)||L}function Vt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Ht(e,t,n,r,i){var o=H.keyCodes[t]||n;return i&&r&&!H.keyCodes[t]?Vt(i,r):o?Vt(o,e):r?S(r)!==t:void 0===e}function Wt(e,t,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=P(n));var s=function(s){if("class"===s||"style"===s||g(s))o=e;else{var a=e.attrs&&e.attrs.type;o=r||H.mustUseProp(t,a,s)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=O(s),u=S(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var l=e.on||(e.on={});l["update:"+s]=function(e){n[s]=e}}};for(var a in n)s(a)}else;return e}function zt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Gt(r,"__static__"+e,!1)),r}function Bt(e,t,n){return Gt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Gt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&qt(e[r],t+"_"+r,n);else qt(e,t,n)}function qt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Kt(e,t){if(t)if(l(t)){var n=e.on=e.on?R({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Jt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Jt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Xt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Yt(e,t){return"string"===typeof e?t+e:e}function Zt(e){e._o=Bt,e._n=v,e._s=p,e._l=$t,e._t=Ut,e._q=D,e._i=M,e._m=zt,e._f=Ft,e._k=Ht,e._b=Wt,e._v=Ie,e._e=we,e._u=Jt,e._g=Kt,e._d=Xt,e._p=Yt}function Qt(e,t,r,i,s){var a,c=this,u=s.options;b(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),d=!l;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||n,this.injections=Rt(u.inject,i),this.slots=function(){return c.$slots||Lt(e.scopedSlots,c.$slots=Pt(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Lt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Lt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var o=hn(a,e,t,n,r,d);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return hn(a,e,t,n,r,d)}}function en(e,t,r,o,s){var a=e.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Xe(l,u,t||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var d=new Qt(r,c,s,o,e),f=a.render.call(null,d._c,d);if(f instanceof _e)return tn(f,r,d.parent,a,d);if(Array.isArray(f)){for(var h=St(f)||[],p=new Array(h.length),v=0;v<h.length;v++)p[v]=tn(h[v],r,d.parent,a,d);return p}}function tn(e,t,n,r,i){var o=Oe(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nn(e,t){for(var n in t)e[O(n)]=t[n]}Zt(Qt.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{var r=e.componentInstance=an(e,Rn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Dn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Fn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Qn(n):$n(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Un(t,!0):t.$destroy())}},on=Object.keys(rn);function sn(e,t,n,s,a){if(!r(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"===typeof e){var l;if(r(e.cid)&&(l=e,e=On(l,u),void 0===e))return In(l,t,n,s,a);t=t||{},Ir(e),i(t.model)&&ln(e.options,t);var d=Ot(t,e,a);if(o(e.options.functional))return en(e,d,t,n,s);var f=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}cn(t);var p=e.options.name||a,v=new _e("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:f,tag:a,children:s},l);return v}}}function an(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cn(e){for(var t=e.hook||(e.hook={}),n=0;n<on.length;n++){var r=on[n],i=t[r],o=rn[r];i===o||i&&i._merged||(t[r]=i?un(o,i):o)}}function un(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function ln(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),s=o[r],a=t.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}var dn=1,fn=2;function hn(e,t,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=fn),pn(e,t,n,r,i)}function pn(e,t,n,r,o){if(i(n)&&i(n.__ob__))return we();if(i(n)&&i(n.is)&&(t=n.is),!t)return we();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===fn?r=St(r):o===dn&&(r=Tt(r)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||H.getTagNamespace(t),s=H.isReservedTag(t)?new _e(H.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!i(c=Je(e.$options,"components",t))?new _e(t,n,r,void 0,void 0,e):sn(c,n,e,r,t)):s=sn(t,n,e,r);return Array.isArray(s)?s:i(s)?(i(a)&&vn(s,a),i(n)&&mn(n),s):we()}function vn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),i(e.children))for(var s=0,a=e.children.length;s<a;s++){var c=e.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&vn(c,t,n)}}function mn(e){c(e.style)&&gt(e.style),c(e.class)&&gt(e.class)}function gn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,i=r&&r.context;e.$slots=Pt(t._renderChildren,i),e.$scopedSlots=n,e._c=function(t,n,r,i){return hn(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return hn(e,t,n,r,i,!0)};var o=r&&r.data;je(e,"$attrs",o&&o.attrs||n,null,!0),je(e,"$listeners",t._parentListeners||n,null,!0)}var yn,_n=null;function bn(e){Zt(e.prototype),e.prototype.$nextTick=function(e){return vt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Lt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{_n=t,e=r.call(t._renderProxy,t.$createElement)}catch(ks){nt(ks,t,"render"),e=t._vnode}finally{_n=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof _e||(e=we()),e.parent=i,e}}function wn(e,t){return(e.__esModule||fe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function In(e,t,n,r,i){var o=we();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function On(e,t){if(o(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;var n=_n;if(n&&i(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),o(e.loading)&&i(e.loadingComp))return e.loadingComp;if(n&&!i(e.owners)){var s=e.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(s,n)}));var d=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},f=$((function(n){e.resolved=wn(n,t),a?s.length=0:d(!0)})),p=$((function(t){i(e.errorComp)&&(e.error=!0,d(!0))})),v=e(f,p);return c(v)&&(h(v)?r(e.resolved)&&v.then(f,p):h(v.component)&&(v.component.then(f,p),i(v.error)&&(e.errorComp=wn(v.error,t)),i(v.loading)&&(e.loadingComp=wn(v.loading,t),0===v.delay?e.loading=!0:u=setTimeout((function(){u=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,d(!1))}),v.delay||200)),i(v.timeout)&&(l=setTimeout((function(){l=null,r(e.resolved)&&p(null)}),v.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function kn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(i(n)&&(i(n.componentOptions)||jt(n)))return n}}function Tn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Cn(e,t)}function Sn(e,t){yn.$on(e,t)}function En(e,t){yn.$off(e,t)}function An(e,t){var n=yn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Cn(e,t,n){yn=e,wt(t,n||{},Sn,En,An,e),yn=void 0}function xn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,s=n._events[e];if(!s)return n;if(!t)return n._events[e]=null,n;var a=s.length;while(a--)if(o=s[a],o===t||o.fn===t){s.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?x(n):n;for(var r=x(arguments,1),i='event handler for "'+e+'"',o=0,s=n.length;o<s;o++)rt(n[o],t,r,t,i)}return t}}var Rn=null;function Pn(e){var t=Rn;return Rn=e,function(){Rn=t}}function Nn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function jn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Pn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Fn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Fn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Ln(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=we),Fn(e,"beforeMount"),r=function(){e._update(e._render(),n)},new rr(e,r,N,{before:function(){e._isMounted&&!e._isDestroyed&&Fn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Fn(e,"mounted")),e}function Dn(e,t,r,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o,e.$attrs=i.data.attrs||n,e.$listeners=r||n,t&&e.$options.props){Ce(!1);for(var l=e._props,d=e.$options._propKeys||[],f=0;f<d.length;f++){var h=d[f],p=e.$options.props;l[h]=Xe(h,p,t,e)}Ce(!0),e.$options.propsData=t}r=r||n;var v=e.$options._parentListeners;e.$options._parentListeners=r,Cn(e,r,v),u&&(e.$slots=Pt(o,i.context),e.$forceUpdate())}function Mn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function $n(e,t){if(t){if(e._directInactive=!1,Mn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)$n(e.$children[n]);Fn(e,"activated")}}function Un(e,t){if((!t||(e._directInactive=!0,!Mn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Un(e.$children[n]);Fn(e,"deactivated")}}function Fn(e,t){ge();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)rt(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var Vn=[],Hn=[],Wn={},zn=!1,Bn=!1,Gn=0;function qn(){Gn=Vn.length=Hn.length=0,Wn={},zn=Bn=!1}var Kn=0,Jn=Date.now;if(X&&!ee){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Jn()>document.createEvent("Event").timeStamp&&(Jn=function(){return Xn.now()})}function Yn(){var e,t;for(Kn=Jn(),Bn=!0,Vn.sort((function(e,t){return e.id-t.id})),Gn=0;Gn<Vn.length;Gn++)e=Vn[Gn],e.before&&e.before(),t=e.id,Wn[t]=null,e.run();var n=Hn.slice(),r=Vn.slice();qn(),er(n),Zn(r),ue&&H.devtools&&ue.emit("flush")}function Zn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Fn(r,"updated")}}function Qn(e){e._inactive=!1,Hn.push(e)}function er(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,$n(e[t],!0)}function tr(e){var t=e.id;if(null==Wn[t]){if(Wn[t]=!0,Bn){var n=Vn.length-1;while(n>Gn&&Vn[n].id>e.id)n--;Vn.splice(n+1,0,e)}else Vn.push(e);zn||(zn=!0,vt(Yn))}}var nr=0,rr=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new de,this.newDepIds=new de,this.expression="","function"===typeof t?this.getter=t:(this.getter=q(t),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var e;ge(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(ks){if(!this.user)throw ks;nt(ks,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&gt(e),ye(),this.cleanupDeps()}return e},rr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},rr.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():tr(this)},rr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';rt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:N,set:N};function or(e,t,n){ir.get=function(){return this[t][n]},ir.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ir)}function sr(e){e._watchers=[];var t=e.$options;t.props&&ar(e,t.props),t.methods&&vr(e,t.methods),t.data?cr(e):Ne(e._data={},!0),t.computed&&dr(e,t.computed),t.watch&&t.watch!==oe&&mr(e,t.watch)}function ar(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;o||Ce(!1);var s=function(o){i.push(o);var s=Xe(o,t,n,e);je(r,o,s),o in e||or(e,"_props",o)};for(var a in t)s(a);Ce(!0)}function cr(e){var t=e.$options.data;t=e._data="function"===typeof t?ur(t,e):t||{},l(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||z(o)||or(e,"_data",o)}Ne(t,!0)}function ur(e,t){ge();try{return e.call(t,t)}catch(ks){return nt(ks,t,"data()"),{}}finally{ye()}}var lr={lazy:!0};function dr(e,t){var n=e._computedWatchers=Object.create(null),r=ce();for(var i in t){var o=t[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new rr(e,s||N,N,lr)),i in e||fr(e,i,o)}}function fr(e,t,n){var r=!ce();"function"===typeof n?(ir.get=r?hr(t):pr(n),ir.set=N):(ir.get=n.get?r&&!1!==n.cache?hr(t):pr(n.get):N,ir.set=n.set||N),Object.defineProperty(e,t,ir)}function hr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ve.target&&t.depend(),t.value}}function pr(e){return function(){return e.call(this,this)}}function vr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?N:C(t[n],e)}function mr(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)gr(e,n,r[i]);else gr(e,n,r)}}function gr(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function yr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Le,e.prototype.$delete=De,e.prototype.$watch=function(e,t,n){var r=this;if(l(t))return gr(r,e,t,n);n=n||{},n.user=!0;var i=new rr(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';ge(),rt(t,r,[i.value],r,o),ye()}return function(){i.teardown()}}}var _r=0;function br(e){e.prototype._init=function(e){var t=this;t._uid=_r++,t._isVue=!0,e&&e._isComponent?wr(t,e):t.$options=Ke(Ir(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Nn(t),Tn(t),gn(t),Fn(t,"beforeCreate"),xt(t),sr(t),Ct(t),Fn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function wr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ir(e){var t=e.options;if(e.super){var n=Ir(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Or(e);i&&R(e.extendOptions,i),t=e.options=Ke(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Or(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function kr(e){this._init(e)}function Tr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Sr(e){e.mixin=function(e){return this.options=Ke(this.options,e),this}}function Er(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name;var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Ke(n.options,e),s["super"]=n,s.options.props&&Ar(s),s.options.computed&&Cr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,F.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=R({},s.options),i[r]=s,s}}function Ar(e){var t=e.options.props;for(var n in t)or(e.prototype,"_props",n)}function Cr(e){var t=e.options.computed;for(var n in t)fr(e.prototype,n,t[n])}function xr(e){F.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Rr(e){return e&&(e.Ctor.options.name||e.tag)}function Pr(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)}function Nr(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&jr(n,o,r,i)}}}function jr(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,y(n,t)}br(kr),yr(kr),xn(kr),jn(kr),bn(kr);var Lr=[String,RegExp,Array],Dr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:Rr(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&jr(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)jr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Nr(e,(function(e){return Pr(t,e)}))})),this.$watch("exclude",(function(t){Nr(e,(function(e){return!Pr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=kn(e),n=t&&t.componentOptions;if(n){var r=Rr(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Pr(o,r))||s&&r&&Pr(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},Mr={KeepAlive:Dr};function $r(e){var t={get:function(){return H}};Object.defineProperty(e,"config",t),e.util={warn:he,extend:R,mergeOptions:Ke,defineReactive:je},e.set=Le,e.delete=De,e.nextTick=vt,e.observable=function(e){return Ne(e),e},e.options=Object.create(null),F.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,R(e.options.components,Mr),Tr(e),Sr(e),Er(e),xr(e)}$r(kr),Object.defineProperty(kr.prototype,"$isServer",{get:ce}),Object.defineProperty(kr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(kr,"FunctionalRenderContext",{value:Qt}),kr.version="2.6.14";var Ur=m("style,class"),Fr=m("input,textarea,option,select,progress"),Vr=function(e,t,n){return"value"===n&&Fr(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Hr=m("contenteditable,draggable,spellcheck"),Wr=m("events,caret,typing,plaintext-only"),zr=function(e,t){return Jr(t)||"false"===t?"false":"contenteditable"===e&&Wr(t)?t:"true"},Br=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Gr="http://www.w3.org/1999/xlink",qr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Kr=function(e){return qr(e)?e.slice(6,e.length):""},Jr=function(e){return null==e||!1===e};function Xr(e){var t=e.data,n=e,r=e;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Yr(r.data,t));while(i(n=n.parent))n&&n.data&&(t=Yr(t,n.data));return Zr(t.staticClass,t.class)}function Yr(e,t){return{staticClass:Qr(e.staticClass,t.staticClass),class:i(e.class)?[e.class,t.class]:t.class}}function Zr(e,t){return i(e)||i(t)?Qr(e,ei(t)):""}function Qr(e,t){return e?t?e+" "+t:e:t||""}function ei(e){return Array.isArray(e)?ti(e):c(e)?ni(e):"string"===typeof e?e:""}function ti(e){for(var t,n="",r=0,o=e.length;r<o;r++)i(t=ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ni(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(e){return ii(e)||oi(e)};function ai(e){return oi(e)?"svg":"math"===e?"math":void 0}var ci=Object.create(null);function ui(e){if(!X)return!0;if(si(e))return!1;if(e=e.toLowerCase(),null!=ci[e])return ci[e];var t=document.createElement(e);return e.indexOf("-")>-1?ci[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ci[e]=/HTMLUnknownElement/.test(t.toString())}var li=m("text,number,password,search,email,tel,url");function di(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function fi(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function hi(e,t){return document.createElementNS(ri[e],t)}function pi(e){return document.createTextNode(e)}function vi(e){return document.createComment(e)}function mi(e,t,n){e.insertBefore(t,n)}function gi(e,t){e.removeChild(t)}function yi(e,t){e.appendChild(t)}function _i(e){return e.parentNode}function bi(e){return e.nextSibling}function wi(e){return e.tagName}function Ii(e,t){e.textContent=t}function Oi(e,t){e.setAttribute(t,"")}var ki=Object.freeze({createElement:fi,createElementNS:hi,createTextNode:pi,createComment:vi,insertBefore:mi,removeChild:gi,appendChild:yi,parentNode:_i,nextSibling:bi,tagName:wi,setTextContent:Ii,setStyleScope:Oi}),Ti={create:function(e,t){Si(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Si(e,!0),Si(t))},destroy:function(e){Si(e,!0)}};function Si(e,t){var n=e.data.ref;if(i(n)){var r=e.context,o=e.componentInstance||e.elm,s=r.$refs;t?Array.isArray(s[n])?y(s[n],o):s[n]===o&&(s[n]=void 0):e.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var Ei=new _e("",{},[]),Ai=["create","activate","update","remove","destroy"];function Ci(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&i(e.data)===i(t.data)&&xi(e,t)||o(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function xi(e,t){if("input"!==e.tag)return!0;var n,r=i(n=e.data)&&i(n=n.attrs)&&n.type,o=i(n=t.data)&&i(n=n.attrs)&&n.type;return r===o||li(r)&&li(o)}function Ri(e,t,n){var r,o,s={};for(r=t;r<=n;++r)o=e[r].key,i(o)&&(s[o]=r);return s}function Pi(e){var t,n,s={},c=e.modules,u=e.nodeOps;for(t=0;t<Ai.length;++t)for(s[Ai[t]]=[],n=0;n<c.length;++n)i(c[n][Ai[t]])&&s[Ai[t]].push(c[n][Ai[t]]);function l(e){return new _e(u.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=u.parentNode(e);i(t)&&u.removeChild(t,e)}function h(e,t,n,r,s,a,c){if(i(e.elm)&&i(a)&&(e=a[c]=Oe(e)),e.isRootInsert=!s,!p(e,t,n,r)){var l=e.data,d=e.children,f=e.tag;i(f)?(e.elm=e.ns?u.createElementNS(e.ns,f):u.createElement(f,e),I(e),_(e,d,t),i(l)&&w(e,t),y(n,e.elm,r)):o(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,r)):(e.elm=u.createTextNode(e.text),y(n,e.elm,r))}}function p(e,t,n,r){var s=e.data;if(i(s)){var a=i(e.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(e,!1),i(e.componentInstance))return v(e,t),y(n,e.elm,r),o(a)&&g(e,t,n,r),!0}}function v(e,t){i(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,b(e)?(w(e,t),I(e)):(Si(e),t.push(e))}function g(e,t,n,r){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](Ei,a);t.push(a);break}y(n,e.elm,r)}function y(e,t,n){i(e)&&(i(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function _(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)h(t[r],n,e.elm,null,!0,t,r)}else a(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function b(e){while(e.componentInstance)e=e.componentInstance._vnode;return i(e.tag)}function w(e,n){for(var r=0;r<s.create.length;++r)s.create[r](Ei,e);t=e.data.hook,i(t)&&(i(t.create)&&t.create(Ei,e),i(t.insert)&&n.push(e))}function I(e){var t;if(i(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)i(t=n.context)&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}i(t=Rn)&&t!==e.context&&t!==e.fnContext&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function O(e,t,n,r,i,o){for(;r<=i;++r)h(n[r],o,e,t,!1,n,r)}function k(e){var t,n,r=e.data;if(i(r))for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)k(e.children[n])}function T(e,t,n){for(;t<=n;++t){var r=e[t];i(r)&&(i(r.tag)?(S(r),k(r)):f(r.elm))}}function S(e,t){if(i(t)||i(e.data)){var n,r=s.remove.length+1;for(i(t)?t.listeners+=r:t=d(e.elm,r),i(n=e.componentInstance)&&i(n=n._vnode)&&i(n.data)&&S(n,t),n=0;n<s.remove.length;++n)s.remove[n](e,t);i(n=e.data.hook)&&i(n=n.remove)?n(e,t):t()}else f(e.elm)}function E(e,t,n,o,s){var a,c,l,d,f=0,p=0,v=t.length-1,m=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],w=!s;while(f<=v&&p<=y)r(m)?m=t[++f]:r(g)?g=t[--v]:Ci(m,_)?(C(m,_,o,n,p),m=t[++f],_=n[++p]):Ci(g,b)?(C(g,b,o,n,y),g=t[--v],b=n[--y]):Ci(m,b)?(C(m,b,o,n,y),w&&u.insertBefore(e,m.elm,u.nextSibling(g.elm)),m=t[++f],b=n[--y]):Ci(g,_)?(C(g,_,o,n,p),w&&u.insertBefore(e,g.elm,m.elm),g=t[--v],_=n[++p]):(r(a)&&(a=Ri(t,f,v)),c=i(_.key)?a[_.key]:A(_,t,f,v),r(c)?h(_,o,e,m.elm,!1,n,p):(l=t[c],Ci(l,_)?(C(l,_,o,n,p),t[c]=void 0,w&&u.insertBefore(e,l.elm,m.elm)):h(_,o,e,m.elm,!1,n,p)),_=n[++p]);f>v?(d=r(n[y+1])?null:n[y+1].elm,O(e,d,n,p,y,o)):p>y&&T(t,f,v)}function A(e,t,n,r){for(var o=n;o<r;o++){var s=t[o];if(i(s)&&Ci(e,s))return o}}function C(e,t,n,a,c,l){if(e!==t){i(t.elm)&&i(a)&&(t=a[c]=Oe(t));var d=t.elm=e.elm;if(o(e.isAsyncPlaceholder))i(t.asyncFactory.resolved)?P(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))t.componentInstance=e.componentInstance;else{var f,h=t.data;i(h)&&i(f=h.hook)&&i(f=f.prepatch)&&f(e,t);var p=e.children,v=t.children;if(i(h)&&b(t)){for(f=0;f<s.update.length;++f)s.update[f](e,t);i(f=h.hook)&&i(f=f.update)&&f(e,t)}r(t.text)?i(p)&&i(v)?p!==v&&E(d,p,v,n,l):i(v)?(i(e.text)&&u.setTextContent(d,""),O(d,null,v,0,v.length-1,n)):i(p)?T(p,0,p.length-1):i(e.text)&&u.setTextContent(d,""):e.text!==t.text&&u.setTextContent(d,t.text),i(h)&&i(f=h.hook)&&i(f=f.postpatch)&&f(e,t)}}}function x(e,t,n){if(o(n)&&i(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var R=m("attrs,class,staticClass,staticStyle,key");function P(e,t,n,r){var s,a=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,o(t.isComment)&&i(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(t,!0),i(s=t.componentInstance)))return v(t,n),!0;if(i(a)){if(i(u))if(e.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==e.innerHTML)return!1}else{for(var l=!0,d=e.firstChild,f=0;f<u.length;f++){if(!d||!P(d,u[f],n,r)){l=!1;break}d=d.nextSibling}if(!l||d)return!1}else _(t,u,n);if(i(c)){var h=!1;for(var p in c)if(!R(p)){h=!0,w(t,n);break}!h&&c["class"]&&gt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!r(t)){var c=!1,d=[];if(r(e))c=!0,h(t,d);else{var f=i(e.nodeType);if(!f&&Ci(e,t))C(e,t,d,null,null,a);else{if(f){if(1===e.nodeType&&e.hasAttribute(U)&&(e.removeAttribute(U),n=!0),o(n)&&P(e,t,d))return x(t,d,!0),e;e=l(e)}var p=e.elm,v=u.parentNode(p);if(h(t,d,p._leaveCb?null:v,u.nextSibling(p)),i(t.parent)){var m=t.parent,g=b(t);while(m){for(var y=0;y<s.destroy.length;++y)s.destroy[y](m);if(m.elm=t.elm,g){for(var _=0;_<s.create.length;++_)s.create[_](Ei,m);var w=m.data.hook.insert;if(w.merged)for(var I=1;I<w.fns.length;I++)w.fns[I]()}else Si(m);m=m.parent}}i(v)?T([e],0,0):i(e.tag)&&k(e)}}return x(t,d,c),t.elm}i(e)&&k(e)}}var Ni={create:ji,update:ji,destroy:function(e){ji(e,Ei)}};function ji(e,t){(e.data.directives||t.data.directives)&&Li(e,t)}function Li(e,t){var n,r,i,o=e===Ei,s=t===Ei,a=Mi(e.data.directives,e.context),c=Mi(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Ui(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Ui(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var d=function(){for(var n=0;n<u.length;n++)Ui(u[n],"inserted",t,e)};o?It(t,"insert",d):d()}if(l.length&&It(t,"postpatch",(function(){for(var n=0;n<l.length;n++)Ui(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||Ui(a[n],"unbind",e,e,s)}var Di=Object.create(null);function Mi(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)r=e[n],r.modifiers||(r.modifiers=Di),i[$i(r)]=r,r.def=Je(t.$options,"directives",r.name,!0);return i}function $i(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Ui(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(ks){nt(ks,n.context,"directive "+e.name+" "+t+" hook")}}var Fi=[Ti,Ni];function Vi(e,t){var n=t.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(e.data.attrs)||!r(t.data.attrs))){var o,s,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(o in i(l.__ob__)&&(l=t.data.attrs=R({},l)),l)s=l[o],a=u[o],a!==s&&Hi(c,o,s,t.data.pre);for(o in(ee||ne)&&l.value!==u.value&&Hi(c,"value",l.value),u)r(l[o])&&(qr(o)?c.removeAttributeNS(Gr,Kr(o)):Hr(o)||c.removeAttribute(o))}}function Hi(e,t,n,r){r||e.tagName.indexOf("-")>-1?Wi(e,t,n):Br(t)?Jr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Hr(t)?e.setAttribute(t,zr(t,n)):qr(t)?Jr(n)?e.removeAttributeNS(Gr,Kr(t)):e.setAttributeNS(Gr,t,n):Wi(e,t,n)}function Wi(e,t,n){if(Jr(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var zi={create:Vi,update:Vi};function Bi(e,t){var n=t.elm,o=t.data,s=e.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Xr(t),c=n._transitionClasses;i(c)&&(a=Qr(a,ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Gi,qi={create:Bi,update:Bi},Ki="__r",Ji="__c";function Xi(e){if(i(e[Ki])){var t=ee?"change":"input";e[t]=[].concat(e[Ki],e[t]||[]),delete e[Ki]}i(e[Ji])&&(e.change=[].concat(e[Ji],e.change||[]),delete e[Ji])}function Yi(e,t,n){var r=Gi;return function i(){var o=t.apply(null,arguments);null!==o&&eo(e,i,n,r)}}var Zi=at&&!(ie&&Number(ie[1])<=53);function Qi(e,t,n,r){if(Zi){var i=Kn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Gi.addEventListener(e,t,se?{capture:n,passive:r}:n)}function eo(e,t,n,r){(r||Gi).removeEventListener(e,t._wrapper||t,n)}function to(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};Gi=t.elm,Xi(n),wt(n,i,Qi,eo,Yi,t.context),Gi=void 0}}var no,ro={create:to,update:to};function io(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,o,s=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in i(c.__ob__)&&(c=t.data.domProps=R({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var u=r(o)?"":String(o);oo(s,u)&&(s.value=u)}else if("innerHTML"===n&&oi(s.tagName)&&r(s.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var l=no.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(l.firstChild)s.appendChild(l.firstChild)}else if(o!==a[n])try{s[n]=o}catch(ks){}}}}function oo(e,t){return!e.composing&&("OPTION"===e.tagName||so(e,t)||ao(e,t))}function so(e,t){var n=!0;try{n=document.activeElement!==e}catch(ks){}return n&&e.value!==t}function ao(e,t){var n=e.value,r=e._vModifiers;if(i(r)){if(r.number)return v(n)!==v(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var co={create:io,update:io},uo=w((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function lo(e){var t=fo(e.style);return e.staticStyle?R(e.staticStyle,t):t}function fo(e){return Array.isArray(e)?P(e):"string"===typeof e?uo(e):e}function ho(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=lo(i.data))&&R(r,n)}(n=lo(e.data))&&R(r,n);var o=e;while(o=o.parent)o.data&&(n=lo(o.data))&&R(r,n);return r}var po,vo=/^--/,mo=/\s*!important$/,go=function(e,t,n){if(vo.test(t))e.style.setProperty(t,n);else if(mo.test(n))e.style.setProperty(S(t),n.replace(mo,""),"important");else{var r=_o(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},yo=["Webkit","Moz","ms"],_o=w((function(e){if(po=po||document.createElement("div").style,e=O(e),"filter"!==e&&e in po)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<yo.length;n++){var r=yo[n]+t;if(r in po)return r}}));function bo(e,t){var n=t.data,o=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=t.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},d=u||l,f=fo(t.data.style)||{};t.data.normalizedStyle=i(f.__ob__)?R({},f):f;var h=ho(t,!0);for(a in d)r(h[a])&&go(c,a,"");for(a in h)s=h[a],s!==d[a]&&go(c,a,null==s?"":s)}}var wo={create:bo,update:bo},Io=/\s+/;function Oo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Io).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function ko(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Io).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function To(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&R(t,So(e.name||"v")),R(t,e),t}return"string"===typeof e?So(e):void 0}}var So=w((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Eo=X&&!te,Ao="transition",Co="animation",xo="transition",Ro="transitionend",Po="animation",No="animationend";Eo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(xo="WebkitTransition",Ro="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Po="WebkitAnimation",No="webkitAnimationEnd"));var jo=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Lo(e){jo((function(){jo(e)}))}function Do(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Oo(e,t))}function Mo(e,t){e._transitionClasses&&y(e._transitionClasses,t),ko(e,t)}function $o(e,t,n){var r=Fo(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Ao?Ro:No,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var Uo=/\b(transform|all)(,|$)/;function Fo(e,t){var n,r=window.getComputedStyle(e),i=(r[xo+"Delay"]||"").split(", "),o=(r[xo+"Duration"]||"").split(", "),s=Vo(i,o),a=(r[Po+"Delay"]||"").split(", "),c=(r[Po+"Duration"]||"").split(", "),u=Vo(a,c),l=0,d=0;t===Ao?s>0&&(n=Ao,l=s,d=o.length):t===Co?u>0&&(n=Co,l=u,d=c.length):(l=Math.max(s,u),n=l>0?s>u?Ao:Co:null,d=n?n===Ao?o.length:c.length:0);var f=n===Ao&&Uo.test(r[xo+"Property"]);return{type:n,timeout:l,propCount:d,hasTransform:f}}function Vo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Ho(t)+Ho(e[n])})))}function Ho(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Wo(e,t){var n=e.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=To(e.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,u=o.enterClass,l=o.enterToClass,d=o.enterActiveClass,f=o.appearClass,h=o.appearToClass,p=o.appearActiveClass,m=o.beforeEnter,g=o.enter,y=o.afterEnter,_=o.enterCancelled,b=o.beforeAppear,w=o.appear,I=o.afterAppear,O=o.appearCancelled,k=o.duration,T=Rn,S=Rn.$vnode;while(S&&S.parent)T=S.context,S=S.parent;var E=!T._isMounted||!e.isRootInsert;if(!E||w||""===w){var A=E&&f?f:u,C=E&&p?p:d,x=E&&h?h:l,R=E&&b||m,P=E&&"function"===typeof w?w:g,N=E&&I||y,j=E&&O||_,L=v(c(k)?k.enter:k);0;var D=!1!==s&&!te,M=Go(P),U=n._enterCb=$((function(){D&&(Mo(n,x),Mo(n,C)),U.cancelled?(D&&Mo(n,A),j&&j(n)):N&&N(n),n._enterCb=null}));e.data.show||It(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),P&&P(n,U)})),R&&R(n),D&&(Do(n,A),Do(n,C),Lo((function(){Mo(n,A),U.cancelled||(Do(n,x),M||(Bo(L)?setTimeout(U,L):$o(n,a,U)))}))),e.data.show&&(t&&t(),P&&P(n,U)),D||M||U()}}}function zo(e,t){var n=e.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=To(e.data.transition);if(r(o)||1!==n.nodeType)return t();if(!i(n._leaveCb)){var s=o.css,a=o.type,u=o.leaveClass,l=o.leaveToClass,d=o.leaveActiveClass,f=o.beforeLeave,h=o.leave,p=o.afterLeave,m=o.leaveCancelled,g=o.delayLeave,y=o.duration,_=!1!==s&&!te,b=Go(h),w=v(c(y)?y.leave:y);0;var I=n._leaveCb=$((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),_&&(Mo(n,l),Mo(n,d)),I.cancelled?(_&&Mo(n,u),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(O):O()}function O(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),f&&f(n),_&&(Do(n,u),Do(n,d),Lo((function(){Mo(n,u),I.cancelled||(Do(n,l),b||(Bo(w)?setTimeout(I,w):$o(n,a,I)))}))),h&&h(n,I),_||b||I())}}function Bo(e){return"number"===typeof e&&!isNaN(e)}function Go(e){if(r(e))return!1;var t=e.fns;return i(t)?Go(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function qo(e,t){!0!==t.data.show&&Wo(t)}var Ko=X?{create:qo,activate:qo,remove:function(e,t){!0!==e.data.show?zo(e,t):t()}}:{},Jo=[zi,qi,ro,co,wo,Ko],Xo=Jo.concat(Fi),Yo=Pi({nodeOps:ki,modules:Xo});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&os(e,"input")}));var Zo={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?It(n,"postpatch",(function(){Zo.componentUpdated(e,t,n)})):Qo(e,t,n.context),e._vOptions=[].map.call(e.options,ns)):("textarea"===n.tag||li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",rs),e.addEventListener("compositionend",is),e.addEventListener("change",is),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Qo(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,ns);if(i.some((function(e,t){return!D(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return ts(e,i)})):t.value!==t.oldValue&&ts(t.value,i);o&&os(e,"change")}}}};function Qo(e,t,n){es(e,t,n),(ee||ne)&&setTimeout((function(){es(e,t,n)}),0)}function es(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=M(r,ns(s))>-1,s.selected!==o&&(s.selected=o);else if(D(ns(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function ts(e,t){return t.every((function(t){return!D(t,e)}))}function ns(e){return"_value"in e?e._value:e.value}function rs(e){e.target.composing=!0}function is(e){e.target.composing&&(e.target.composing=!1,os(e.target,"input"))}function os(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ss(e){return!e.componentInstance||e.data&&e.data.transition?e:ss(e.componentInstance._vnode)}var as={bind:function(e,t,n){var r=t.value;n=ss(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Wo(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=ss(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Wo(n,(function(){e.style.display=e.__vOriginalDisplay})):zo(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},cs={model:Zo,show:as},us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ls(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?ls(kn(t.children)):e}function ds(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[O(o)]=i[o];return t}function fs(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function hs(e){while(e=e.parent)if(e.data.transition)return!0}function ps(e,t){return t.key===e.key&&t.tag===e.tag}var vs=function(e){return e.tag||jt(e)},ms=function(e){return"show"===e.name},gs={name:"transition",props:us,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(vs),n.length)){0;var r=this.mode;0;var i=n[0];if(hs(this.$vnode))return i;var o=ls(i);if(!o)return i;if(this._leaving)return fs(e,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=ds(this),u=this._vnode,l=ls(u);if(o.data.directives&&o.data.directives.some(ms)&&(o.data.show=!0),l&&l.data&&!ps(o,l)&&!jt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var d=l.data.transition=R({},c);if("out-in"===r)return this._leaving=!0,It(d,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),fs(e,i);if("in-out"===r){if(jt(o))return u;var f,h=function(){f()};It(c,"afterEnter",h),It(c,"enterCancelled",h),It(d,"delayLeave",(function(e){f=e}))}}return i}}},ys=R({tag:String,moveClass:String},us);delete ys.mode;var _s={props:ys,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Pn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=ds(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],d=0;d<r.length;d++){var f=r[d];f.data.transition=s,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):l.push(f)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(bs),e.forEach(ws),e.forEach(Is),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Do(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ro,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ro,e),n._moveCb=null,Mo(n,t))})}})))},methods:{hasMove:function(e,t){if(!Eo)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){ko(n,e)})),Oo(n,t),n.style.display="none",this.$el.appendChild(n);var r=Fo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function bs(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function ws(e){e.data.newPos=e.elm.getBoundingClientRect()}function Is(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Os={Transition:gs,TransitionGroup:_s};kr.config.mustUseProp=Vr,kr.config.isReservedTag=si,kr.config.isReservedAttr=Ur,kr.config.getTagNamespace=ai,kr.config.isUnknownElement=ui,R(kr.options.directives,cs),R(kr.options.components,Os),kr.prototype.__patch__=X?Yo:N,kr.prototype.$mount=function(e,t){return e=e&&X?di(e):void 0,Ln(this,e,t)},X&&setTimeout((function(){H.devtools&&ue&&ue.emit("init",kr)}),0),t["a"]=kr}).call(this,n("c8ba"))},"2ba4":function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),d=n("1a2d"),f=n("d039"),h=n("1be4"),p=n("f36a"),v=n("cc12"),m=n("1cdc"),g=n("605d"),y=a.setImmediate,_=a.clearImmediate,b=a.process,w=a.Dispatch,I=a.Function,O=a.MessageChannel,k=a.String,T=0,S={},E="onreadystatechange";try{r=a.location}catch(P){}var A=function(e){if(d(S,e)){var t=S[e];delete S[e],t()}},C=function(e){return function(){A(e)}},x=function(e){A(e.data)},R=function(e){a.postMessage(k(e),r.protocol+"//"+r.host)};y&&_||(y=function(e){var t=p(arguments,1);return S[++T]=function(){c(l(e)?e:I(e),void 0,t)},i(T),T},_=function(e){delete S[e]},g?i=function(e){b.nextTick(C(e))}:w&&w.now?i=function(e){w.now(C(e))}:O&&!m?(o=new O,s=o.port2,o.port1.onmessage=x,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(R)?(i=R,a.addEventListener("message",x,!1)):i=E in v("script")?function(e){h.appendChild(v("script"))[E]=function(){h.removeChild(this),A(e)}}:function(e){setTimeout(C(e),0)}),e.exports={set:y,clear:_}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4dae":function(e,t,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),s=n("8418"),a=r.Array,c=Math.max;e.exports=function(e,t,n){for(var r=o(e),u=i(t,r),l=i(void 0===n?r:n,r),d=a(c(l-u,0)),f=0;u<l;u++,f++)s(d,f,e[u]);return d.length=f,d}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("59ed"),s=n("7b0b"),a=n("07fa"),c=n("577e"),u=n("d039"),l=n("addb"),d=n("a640"),f=n("04d1"),h=n("d998"),p=n("2d00"),v=n("512c"),m=[],g=i(m.sort),y=i(m.push),_=u((function(){m.sort(void 0)})),b=u((function(){m.sort(null)})),w=d("sort"),I=!u((function(){if(p)return p<70;if(!(f&&f>3)){if(h)return!0;if(v)return v<603;var e,t,n,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)m.push({k:t+r,v:n})}for(m.sort((function(e,t){return t.v-e.v})),r=0;r<m.length;r++)t=m[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),O=_||!b||!w||!I,k=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:c(t)>c(n)?1:-1}};r({target:"Array",proto:!0,forced:O},{sort:function(e){void 0!==e&&o(e);var t=s(this);if(I)return void 0===e?g(t):g(t,e);var n,r,i=[],c=a(t);for(r=0;r<c;r++)r in t&&y(i,t[r]);l(i,k(e)),n=i.length,r=0;while(r<n)t[r]=i[r++];while(r<c)delete t[r++];return t}})},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"512c":function(e,t,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),d=n("44ad"),f=Object.assign,h=Object.defineProperty,p=i([].concat);e.exports=!f||s((function(){if(r&&1!==f({b:1},f(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||a(f({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,f=c.f,h=u.f;while(i>s){var v,m=d(arguments[s++]),g=f?p(a(m),f(m)):a(m),y=g.length,_=0;while(y>_)v=g[_++],r&&!o(h,m,v)||(n[v]=m[v])}return n}:f},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],d=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,h=r(f.exec),p=!f.exec(u),v=function(e){if(!o(e))return!1;try{return d(u,l,e),!0}catch(t){return!1}},m=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!h(f,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!d||i((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?m:v},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),d=n("1a2d"),f=n("c6cd"),h=n("f772"),p=n("d012"),v="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return o(e)?i(e):r(e,{})},_=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||f.state){var b=f.state||(f.state=new g),w=c(b.get),I=c(b.has),O=c(b.set);r=function(e,t){if(I(b,e))throw new m(v);return t.facade=e,O(b,e,t),t},i=function(e){return w(b,e)||{}},o=function(e){return I(b,e)}}else{var k=h("state");p[k]=!0,r=function(e,t){if(d(e,k))throw new m(v);return t.facade=e,l(e,k,t),t},i=function(e){return d(e,k)?e[k]:{}},o=function(e){return d(e,k)}}e.exports={set:r,get:i,has:o,enforce:y,getterFor:_}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,d=u.get,f=u.enforce,h=String(String).split("String");(e.exports=function(e,t,n,c){var u,d=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=f(n),u.source||(u.source=h.join("string"==typeof m?m:""))),e!==r?(d?!v&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&d(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",f="<",h="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return f+p+d+e+f+"/"+p+d},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var e=s.length;while(e--)delete b[h][s[e]];return b()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=i(e),n=new m,m[h]=null,n[v]=e):n=b(),void 0===t?n:o.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),d=n("d44e"),f=n("9112"),h=n("6eeb"),p=n("b622"),v=n("3f8c"),m=n("ae93"),g=s.PROPER,y=s.CONFIGURABLE,_=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),I="keys",O="values",k="entries",T=function(){return this};e.exports=function(e,t,n,s,p,m,S){c(n,t,s);var E,A,C,x=function(e){if(e===p&&L)return L;if(!b&&e in N)return N[e];switch(e){case I:return function(){return new n(this,e)};case O:return function(){return new n(this,e)};case k:return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",P=!1,N=e.prototype,j=N[w]||N["@@iterator"]||p&&N[p],L=!b&&j||x(p),D="Array"==t&&N.entries||j;if(D&&(E=u(D.call(new e)),E!==Object.prototype&&E.next&&(o||u(E)===_||(l?l(E,_):a(E[w])||h(E,w,T)),d(E,R,!0,!0),o&&(v[R]=T))),g&&p==O&&j&&j.name!==O&&(!o&&y?f(N,"name",O):(P=!0,L=function(){return i(j,this)})),p)if(A={values:x(O),keys:m?L:x(I),entries:x(k)},S)for(C in A)(b||P||!(C in N))&&h(N,C,A[C]);else r({target:t,proto:!0,forced:b||P},A);return o&&!S||N[w]===L||h(N,w,L,{name:p}),v[t]=L,A}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",p="writable";t.f=i?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=d(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:f in n?n[f]:r[f],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("23cb"),s=n("5926"),a=n("07fa"),c=n("7b0b"),u=n("65f0"),l=n("8418"),d=n("1dde"),f=d("splice"),h=i.TypeError,p=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,r,i,d,f,y,_=c(this),b=a(_),w=o(e,b),I=arguments.length;if(0===I?n=r=0:1===I?(n=0,r=b-w):(n=I-2,r=v(p(s(t),0),b-w)),b+n-r>m)throw h(g);for(i=u(_,r),d=0;d<r;d++)f=w+d,f in _&&l(i,d,_[f]);if(i.length=r,n<r){for(d=w;d<b-r;d++)f=d+r,y=d+n,f in _?_[y]=_[f]:delete _[y];for(d=b;d>b-r+n;d--)delete _[d-1]}else if(n>r)for(d=b-r;d>w;d--)f=d+r-1,y=d+n-1,f in _?_[y]=_[f]:delete _[y];for(d=0;d<n;d++)_[d+w]=arguments[d+2];return _.length=b-r+n,i}})},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),d=n("6eeb"),f=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var h=a("Promise").prototype["finally"];o.prototype["finally"]!==h&&d(o.prototype,"finally",h,{unsafe:!0})}},addb:function(e,t,n){var r=n("4dae"),i=Math.floor,o=function(e,t){var n=e.length,c=i(n/2);return n<8?s(e,t):a(e,o(r(e,0,c),t),o(r(e,c),t),t)},s=function(e,t){var n,r,i=e.length,o=1;while(o<i){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,o=n.length,s=0,a=0;while(s<i||a<o)e[s+a]=s<i&&a<o?r(t[s],n[a])<=0?t[s++]:n[a++]:s<i?t[s++]:n[a++];return e};e.exports=o},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),d=n("b622"),f=n("c430"),h=d("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var v=void 0==r||s((function(){var e={};return r[h].call(e)!==e}));v?r={}:f&&(r=c(r)),a(r[h])||l(r,h,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(e,t,n){var r,i,o,s,a,c,u,l,d=n("da84"),f=n("0366"),h=n("06cf").f,p=n("2cf4").set,v=n("1cdc"),m=n("d4c3"),g=n("a4b4"),y=n("605d"),_=d.MutationObserver||d.WebKitMutationObserver,b=d.document,w=d.process,I=d.Promise,O=h(d,"queueMicrotask"),k=O&&O.value;k||(r=function(){var e,t;y&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},v||y||g||!_||!b?!m&&I&&I.resolve?(u=I.resolve(void 0),u.constructor=I,l=f(u.then,u),s=function(){l(r)}):y?s=function(){w.nextTick(r)}:(p=f(p,d),s=function(){p(r)}):(a=!0,c=b.createTextNode(""),new _(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=k||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,d=l&&l["for"],f=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&d?d(t):f(t)}return u[e]}},b727:function(e,t,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,d=6==e,f=7==e,h=5==e||d;return function(p,v,m,g){for(var y,_,b=s(p),w=o(b),I=r(v,m),O=a(w),k=0,T=g||c,S=t?T(p,O):n||f?T(p,0):void 0;O>k;k++)if((h||k in w)&&(y=w[k],_=I(y,k,b),e))if(t)S[k]=_;else if(_)switch(e){case 3:return!0;case 5:return y;case 6:return k;case 2:u(S,y)}else switch(e){case 4:return!1;case 7:u(S,y)}return d?-1:i||l?l:S}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,d=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,d);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,d=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?d:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),d="Array Iterator",f=s.set,h=s.getterFor(d);e.exports=c(Array,"Array",(function(e,t){f(this,{type:d,target:r(e),index:0,kind:t})}),(function(){var e=h(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(v){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),d=n("c65b"),f=n("fea9"),h=n("6eeb"),p=n("e2cc"),v=n("d2bb"),m=n("d44e"),g=n("2626"),y=n("59ed"),_=n("1626"),b=n("861d"),w=n("19aa"),I=n("8925"),O=n("2266"),k=n("1c7e"),T=n("4840"),S=n("2cf4").set,E=n("b575"),A=n("cdf9"),C=n("44de"),x=n("f069"),R=n("e667"),P=n("01b4"),N=n("69f3"),j=n("94ca"),L=n("b622"),D=n("6069"),M=n("605d"),$=n("2d00"),U=L("species"),F="Promise",V=N.getterFor(F),H=N.set,W=N.getterFor(F),z=f&&f.prototype,B=f,G=z,q=u.TypeError,K=u.document,J=u.process,X=x.f,Y=X,Z=!!(K&&K.createEvent&&u.dispatchEvent),Q=_(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,ie=2,oe=1,se=2,ae=!1,ce=j(F,(function(){var e=I(B),t=e!==String(B);if(!t&&66===$)return!0;if(c&&!G["finally"])return!0;if($>=51&&/native code/.test(e))return!1;var n=new B((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[U]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&D&&!Q})),ue=ce||!k((function(e){B.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!b(e)||!_(t=e.then))&&t},de=function(e,t){var n,r,i,o=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&me(t),t.rejection=oe),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(q("Promise-chain cycle")):(r=le(n))?d(r,n,c,u):c(n)):u(o)}catch(f){l&&!i&&l.exit(),u(f)}},fe=function(e,t){e.notified||(e.notified=!0,E((function(){var n,r=e.reactions;while(n=r.get())de(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},he=function(e,t,n){var r,i;Z?(r=K.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Q&&(i=u["on"+e])?i(r):e===ee&&C("Unhandled promise rejection",n)},pe=function(e){d(S,u,(function(){var t,n=e.facade,r=e.value,i=ve(e);if(i&&(t=R((function(){M?J.emit("unhandledRejection",r,n):he(ee,n,r)})),e.rejection=M||ve(e)?se:oe,t.error))throw t.value}))},ve=function(e){return e.rejection!==oe&&!e.parent},me=function(e){d(S,u,(function(){var t=e.facade;M?J.emit("rejectionHandled",t):he(te,t,e.value)}))},ge=function(e,t,n){return function(r){e(t,r,n)}},ye=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,fe(e,!0))},_e=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw q("Promise can't be resolved itself");var r=le(t);r?E((function(){var n={done:!1};try{d(r,t,ge(_e,n,e),ge(ye,n,e))}catch(i){ye(n,i,e)}})):(e.value=t,e.state=re,fe(e,!1))}catch(i){ye({done:!1},i,e)}}};if(ce&&(B=function(e){w(this,G),y(e),d(r,this);var t=V(this);try{e(ge(_e,t),ge(ye,t))}catch(n){ye(t,n)}},G=B.prototype,r=function(e){H(this,{type:F,done:!1,notified:!1,parent:!1,reactions:new P,rejection:!1,state:ne,value:void 0})},r.prototype=p(G,{then:function(e,t){var n=W(this),r=X(T(this,B));return n.parent=!0,r.ok=!_(e)||e,r.fail=_(t)&&t,r.domain=M?J.domain:void 0,n.state==ne?n.reactions.add(r):E((function(){de(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=V(e);this.promise=e,this.resolve=ge(_e,t),this.reject=ge(ye,t)},x.f=X=function(e){return e===B||e===o?new i(e):Y(e)},!c&&_(f)&&z!==Object.prototype)){s=z.then,ae||(h(z,"then",(function(e,t){var n=this;return new B((function(e,t){d(s,n,e,t)})).then(e,t)}),{unsafe:!0}),h(z,"catch",G["catch"],{unsafe:!0}));try{delete z.constructor}catch(be){}v&&v(z,G)}a({global:!0,wrap:!0,forced:ce},{Promise:B}),m(B,F,!1,!0),g(F),o=l(F),a({target:F,stat:!0,forced:ce},{reject:function(e){var t=X(this);return d(t.reject,void 0,e),t.promise}}),a({target:F,stat:!0,forced:c||ce},{resolve:function(e){return A(c&&this===o?B:this,e)}}),a({target:F,stat:!0,forced:ue},{all:function(e){var t=this,n=X(t),r=n.resolve,i=n.reject,o=R((function(){var n=y(t.resolve),o=[],s=0,a=1;O(e,(function(e){var c=s++,u=!1;a++,d(n,t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=X(t),r=n.reject,i=R((function(){var i=y(t.resolve);O(e,(function(e){d(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},e9c4:function(e,t,n){var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),a=n("e330"),c=n("d039"),u=i.Array,l=o("JSON","stringify"),d=a(/./.exec),f=a("".charAt),h=a("".charCodeAt),p=a("".replace),v=a(1..toString),m=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,_=function(e,t,n){var r=f(n,t-1),i=f(n,t+1);return d(g,e)&&!d(y,i)||d(y,e)&&!d(g,r)?"\\u"+v(h(e,0),16):e},b=c((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&r({target:"JSON",stat:!0,forced:b},{stringify:function(e,t,n){for(var r=0,i=arguments.length,o=u(i);r<i;r++)o[r]=arguments[r];var a=s(l,null,o);return"string"==typeof a?p(a,m,_):a}})},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return zt})),n.d(t,"b",(function(){return Zr})),n.d(t,"c",(function(){return Zn}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const a={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},c=s.INFO,u={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=u[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class d{constructor(e){this.name=e,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(h(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function h(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const p="@firebase/app",v="0.7.15",m=new d("@firebase/app"),g="@firebase/app-compat",y="@firebase/analytics-compat",_="@firebase/analytics",b="@firebase/app-check-compat",w="@firebase/app-check",I="@firebase/auth",O="@firebase/auth-compat",k="@firebase/database",T="@firebase/database-compat",S="@firebase/functions",E="@firebase/functions-compat",A="@firebase/installations",C="@firebase/installations-compat",x="@firebase/messaging",R="@firebase/messaging-compat",P="@firebase/performance",N="@firebase/performance-compat",j="@firebase/remote-config",L="@firebase/remote-config-compat",D="@firebase/storage",M="@firebase/storage-compat",$="@firebase/firestore",U="@firebase/firestore-compat",F="firebase",V="9.6.5",H="[DEFAULT]",W={[p]:"fire-core",[g]:"fire-core-compat",[_]:"fire-analytics",[y]:"fire-analytics-compat",[w]:"fire-app-check",[b]:"fire-app-check-compat",[I]:"fire-auth",[O]:"fire-auth-compat",[k]:"fire-rtdb",[T]:"fire-rtdb-compat",[S]:"fire-fn",[E]:"fire-fn-compat",[A]:"fire-iid",[C]:"fire-iid-compat",[x]:"fire-fcm",[R]:"fire-fcm-compat",[P]:"fire-perf",[N]:"fire-perf-compat",[j]:"fire-rc",[L]:"fire-rc-compat",[D]:"fire-gcs",[M]:"fire-gcs-compat",[$]:"fire-fst",[U]:"fire-fst-compat","fire-js":"fire-js",[F]:"fire-js-all"},z=new Map,B=new Map;function G(e,t){try{e.container.addComponent(t)}catch(n){m.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e){const t=e.name;if(B.has(t))return m.debug(`There were multiple attempts to register component ${t}.`),!1;B.set(t,e);for(const n of z.values())G(n,e);return!0}function K(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},X=new r["b"]("app","Firebase",J);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y=V;function Z(e=H){const t=z.get(e);if(!t)throw X.create("no-app",{appName:e});return t}function Q(e,t,n){var r;let o=null!==(r=W[e])&&void 0!==r?r:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void m.warn(e.join(" "))}q(new i(o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ee(e){q(new i("platform-logger",e=>new f(e),"PRIVATE")),Q(p,v,e),Q(p,v,"esm2017"),Q("fire-js","")}ee("");function te(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ne(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const re=ne,ie=new r["b"]("auth","Firebase",ne()),oe=new d("@firebase/auth");function se(e,...t){oe.logLevel<=s.ERROR&&oe.error(`Auth (${Y}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,...t){throw de(e,...t)}function ce(e,...t){return de(e,...t)}function ue(e,t,n){const i=Object.assign(Object.assign({},re()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function le(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ae(e,"argument-error"),ue(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function de(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ie.create(e,...t)}function fe(e,t,...n){if(!e)throw de(t,...n)}function he(e){const t="INTERNAL ASSERTION FAILED: "+e;throw se(t),new Error(t)}function pe(e,t){e||he(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new Map;function me(e){pe(e instanceof Function,"Expected a class definition");let t=ve.get(e);return t?(pe(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ve.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t){const n=K(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["f"])(i,null!==t&&void 0!==t?t:{}))return e;ae(e,"already-initialized")}const i=n.initialize({options:t});return i}function ye(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(me);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function be(){return"http:"===we()||"https:"===we()}function we(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(be()||Object(r["j"])()||"connection"in navigator))||navigator.onLine}function Oe(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){this.shortDelay=e,this.longDelay=t,pe(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["m"])()||Object(r["n"])()}get(){return Ie()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t){pe(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},Ae=new ke(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function xe(e,t,n,i,o={}){return Re(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["o"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Se.fetch()(Ne(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function Re(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ee),t);try{const t=new je(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Le(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Le(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Le(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ue(e,a,s);ae(e,a)}}catch(o){if(o instanceof r["c"])throw o;ae(e,"network-request-failed")}}async function Pe(e,t,n,r,i={}){const o=await xe(e,t,n,r,i);return"mfaPendingCredential"in o&&ae(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Ne(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Te(e.config,i):`${e.config.apiScheme}://${i}`}class je{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ce(this.auth,"network-request-failed")),Ae.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Le(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return xe(e,"POST","/v1/accounts:delete",t)}async function Me(e,t){return xe(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,t=!1){const n=Object(r["h"])(e),i=await n.getIdToken(t),o=Ve(i);fe(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:$e(Fe(o.auth_time)),issuedAtTime:$e(Fe(o.iat)),expirationTime:$e(Fe(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Fe(e){return 1e3*Number(e)}function Ve(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return se("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(se("Failed to decode base64 JWT payload"),null)}catch(o){return se("Caught error parsing JWT payload as JSON",o),null}}function He(e){const t=Ve(e);return fe(t,"internal-error"),fe("undefined"!==typeof t.exp,"internal-error"),fe("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&ze(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ze({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$e(this.lastLoginAt),this.creationTime=$e(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e){var t;const n=e.auth,r=await e.getIdToken(),i=await We(e,Me(n,{idToken:r}));fe(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?Xe(o.providerUserInfo):[],a=Je(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Ge(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Ke(e){const t=Object(r["h"])(e);await qe(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Je(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function Xe(e){return e.map(e=>{var{providerId:t}=e,n=te(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){const n=await Re(e,{},async()=>{const n=Object(r["o"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Ne(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Se.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe("undefined"!==typeof e.idToken,"internal-error"),fe("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):He(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return fe(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Ye(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Ze;return n&&(fe("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(fe("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(fe("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ze,this.toJSON())}_performRefresh(){return he("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,t){fe("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class et{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=te(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Be(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Ge(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await We(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ue(this,e)}reload(){return Ke(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await qe(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await We(this,De(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:I}=t;fe(y&&I,e,"internal-error");const O=Ze.fromJSON(this.name,I);fe("string"===typeof y,e,"internal-error"),Qe(l,e.name),Qe(d,e.name),fe("boolean"===typeof _,e,"internal-error"),fe("boolean"===typeof b,e,"internal-error"),Qe(f,e.name),Qe(h,e.name),Qe(p,e.name),Qe(v,e.name),Qe(m,e.name),Qe(g,e.name);const k=new et({uid:y,auth:e,email:d,emailVerified:_,displayName:l,isAnonymous:b,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:O,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(k.providerData=w.map(e=>Object.assign({},e))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ze;r.updateFromServerResponse(t);const i=new et({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await qe(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tt.type="NONE";const nt=tt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t,n){return`firebase:${e}:${t}:${n}`}class it{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=rt(this.userKey,r.apiKey,i),this.fullPersistenceKey=rt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new it(me(nt),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||me(nt);const o=rt(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=et._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new it(i,e,n)):new it(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ut(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(st(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dt(t))return"Blackberry";if(ft(t))return"Webos";if(at(t))return"Safari";if((t.includes("chrome/")||ct(t))&&!t.includes("edge/"))return"Chrome";if(lt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function st(e=Object(r["i"])()){return/firefox\//i.test(e)}function at(e=Object(r["i"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ct(e=Object(r["i"])()){return/crios\//i.test(e)}function ut(e=Object(r["i"])()){return/iemobile/i.test(e)}function lt(e=Object(r["i"])()){return/android/i.test(e)}function dt(e=Object(r["i"])()){return/blackberry/i.test(e)}function ft(e=Object(r["i"])()){return/webos/i.test(e)}function ht(e=Object(r["i"])()){return/iphone|ipad|ipod/i.test(e)}function pt(e=Object(r["i"])()){var t;return ht(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function vt(){return Object(r["l"])()&&10===document.documentMode}function mt(e=Object(r["i"])()){return ht(e)||lt(e)||ft(e)||dt(e)||/windows phone/i.test(e)||ut(e)}function gt(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t=[]){let n;switch(e){case"Browser":n=ot(Object(r["i"])());break;case"Worker":n=`${ot(Object(r["i"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Y}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wt(this),this.idTokenSubscription=new wt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ie,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=me(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await it.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qe(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oe()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["h"])(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(me(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&me(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await it.create(this,[me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return fe(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function bt(e){return Object(r["h"])(e)}class wt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["e"])(e=>this.observer=e)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,t){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t){return xe(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(e,t){return Pe(e,"POST","/v1/accounts:signInWithPassword",Ce(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tt(e,t){return Pe(e,"POST","/v1/accounts:signInWithEmailLink",Ce(e,t))}async function St(e,t){return Pe(e,"POST","/v1/accounts:signInWithEmailLink",Ce(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends It{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Et(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Et(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return kt(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tt(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ot(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return St(e,{idToken:t,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e,t){return Pe(e,"POST","/v1/accounts:signInWithIdp",Ce(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="http://localhost";class xt extends It{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=te(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new xt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return At(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,At(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,At(e,t)}buildRequest(){const e={requestUri:Ct,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["o"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t){return xe(e,"POST","/v1/accounts:sendVerificationCode",Ce(e,t))}async function Pt(e,t){return Pe(e,"POST","/v1/accounts:signInWithPhoneNumber",Ce(e,t))}async function Nt(e,t){const n=await Pe(e,"POST","/v1/accounts:signInWithPhoneNumber",Ce(e,t));if(n.temporaryProof)throw Le(e,"account-exists-with-different-credential",n);return n}const jt={["USER_NOT_FOUND"]:"user-not-found"};async function Lt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Pe(e,"POST","/v1/accounts:signInWithPhoneNumber",Ce(e,n),jt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends It{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Dt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Dt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Pt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Lt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Dt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $t(e){const t=Object(r["p"])(Object(r["g"])(e))["link"],n=t?Object(r["p"])(Object(r["g"])(t))["deep_link_id"]:null,i=Object(r["p"])(Object(r["g"])(e))["deep_link_id"],o=i?Object(r["p"])(Object(r["g"])(i))["link"]:null;return o||i||n||t||e}class Ut{constructor(e){var t,n,i,o,s,a;const c=Object(r["p"])(Object(r["g"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Mt(null!==(i=c["mode"])&&void 0!==i?i:null);fe(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=$t(e);try{return new Ut(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(){this.providerId=Ft.PROVIDER_ID}static credential(e,t){return Et._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ut.parseLink(t);return fe(n,"argument-error"),Et._fromEmailAndCode(e,n.code,n.tenantId)}}Ft.PROVIDER_ID="password",Ft.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ft.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Vt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Ht{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch(t){return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt extends Ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return zt.credential(t,n)}catch(r){return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com",zt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt extends Ht{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch(t){return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com",Bt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends Ht{constructor(){super("twitter.com")}static credential(e,t){return xt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Gt.credential(t,n)}catch(r){return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com",Gt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await et._fromIdTokenResponse(e,n,r),o=Kt(n),s=new qt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Kt(n);return new qt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Kt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Jt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Jt(e,t,n,r)}}function Xt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Jt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t,n=!1){const r=await We(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await We(e,Xt(r,i,t,e),n);fe(o.idToken,r,"internal-error");const s=Ve(o.idToken);fe(s,r,"internal-error");const{sub:a}=s;return fe(e.uid===a,r,"user-mismatch"),qt._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&ae(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t,n=!1){const r="signIn",i=await Xt(e,r,t),o=await qt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(e,t){return xe(e,"POST","/v2/accounts/mfaEnrollment:start",Ce(e,t))}function tn(e,t){return xe(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(e,t))}new WeakMap;const nn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nn,"1"),this.storage.removeItem(nn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){const e=Object(r["i"])();return at(e)||ht(e)}const sn=1e3,an=10;class cn extends rn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=on()&&gt(),this.fallbackToPolling=mt(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);vt()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,an):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cn.type="LOCAL";const un=cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends rn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ln.type="SESSION";const dn=ln;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new hn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await fn(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn.receivers=[];class vn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=pn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function gn(e){mn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return"undefined"!==typeof mn()["WorkerGlobalScope"]&&"function"===typeof mn()["importScripts"]}async function _n(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function bn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function wn(){return yn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="firebaseLocalStorageDb",On=1,kn="firebaseLocalStorage",Tn="fbase_key";class Sn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function En(e,t){return e.transaction([kn],t?"readwrite":"readonly").objectStore(kn)}function An(){const e=indexedDB.deleteDatabase(In);return new Sn(e).toPromise()}function Cn(){const e=indexedDB.open(In,On);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(kn,{keyPath:Tn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(kn)?t(n):(n.close(),await An(),t(await Cn()))})})}async function xn(e,t,n){const r=En(e,!0).put({[Tn]:t,value:n});return new Sn(r).toPromise()}async function Rn(e,t){const n=En(e,!1).get(t),r=await new Sn(n).toPromise();return void 0===r?null:r.value}function Pn(e,t){const n=En(e,!0).delete(t);return new Sn(n).toPromise()}const Nn=800,jn=3;class Ln{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Cn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>jn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hn._getInstance(wn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _n(),!this.activeServiceWorker)return;this.sender=new vn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&bn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cn();return await xn(e,nn,"1"),await Pn(e,nn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Rn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=En(e,!1).getAll();return new Sn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ln.type="LOCAL";const Dn=Ln;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e,t){return xe(e,"POST","/v2/accounts/mfaSignIn:start",Ce(e,t))}function $n(e,t){return xe(e,"POST","/v2/accounts/mfaSignIn:finalize",Ce(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Un(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Fn(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ce("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Un().appendChild(r)})}function Vn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Vn("rcb"),new ke(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn="recaptcha";async function Wn(e,t,n){var r;const i=await n.verify();try{let o;if(fe("string"===typeof i,e,"argument-error"),fe(n.type===Hn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){fe("enroll"===t.type,e,"internal-error");const n=await en(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{fe("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;fe(n,e,"missing-multi-factor-info");const s=await Mn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Rt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{constructor(e){this.providerId=zn.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Wn(this.auth,e,Object(r["h"])(t))}static credential(e,t){return Dt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return zn.credentialFromTaggedObject(t)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Dt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bn(e,t){return t?me(t):(fe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn.PROVIDER_ID="phone",zn.PHONE_SIGN_IN_METHOD="phone";class Gn extends It{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return At(e,this._buildIdpRequest())}_linkToIdToken(e,t){return At(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return At(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qn(e){return Qt(e.auth,new Gn(e),e.bypassAuthState)}function Kn(e){const{auth:t,user:n}=e;return fe(n,t,"internal-error"),Zt(n,new Gn(e),e.bypassAuthState)}async function Jn(e){const{auth:t,user:n}=e;return fe(n,t,"internal-error"),Yt(n,new Gn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qn;case"linkViaPopup":case"linkViaRedirect":return Jn;case"reauthViaPopup":case"reauthViaRedirect":return Kn;default:ae(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new ke(2e3,1e4);async function Zn(e,t,n){const r=bt(e);le(e,t,Vt);const i=Bn(r,n),o=new Qn(r,"signInViaPopup",t,i);return o.executeNotNull()}class Qn extends Xn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){pe(1===this.filter.length,"Popup operations only handle one event");const e=pn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Yn.get())};e()}}Qn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const er="pendingRedirect",tr=new Map;class nr extends Xn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=tr.get(this.auth._key());if(!e){try{const t=await rr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}tr.set(this.auth._key(),e)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function rr(e,t){const n=or(t),r=ir(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function ir(e){return me(e._redirectPersistence)}function or(e){return rt(er,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t,n=!1){const r=bt(e),i=Bn(r,t),o=new nr(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ar=6e5;class cr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!lr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ce(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ar&&this.cachedEventUids.clear(),this.cachedEventUids.has(ur(e))}saveEventToCache(e){this.cachedEventUids.add(ur(e)),this.lastProcessedEventTime=Date.now()}}function ur(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function lr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function dr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(e,t={}){return xe(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pr=/^https?/;async function vr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await fr(e);for(const r of t)try{if(mr(r))return}catch(n){}ae(e,"unauthorized-domain")}function mr(e){const t=_e(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pr.test(n))return!1;if(hr.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new ke(3e4,6e4);function yr(){const e=mn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function _r(e){return new Promise((t,n)=>{var r,i,o;function s(){yr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yr(),n(ce(e,"network-request-failed"))},timeout:gr.get()})}if(null===(i=null===(r=mn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=mn().gapi)||void 0===o?void 0:o.load)){const t=Vn("iframefcb");return mn()[t]=()=>{gapi.load?s():n(ce(e,"network-request-failed"))},Fn("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw br=null,e})}let br=null;function wr(e){return br=br||_r(e),br}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new ke(5e3,15e3),Or="__/auth/iframe",kr="emulator/auth/iframe",Tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Er(e){const t=e.config;fe(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Te(t,kr):`https://${e.config.authDomain}/${Or}`,i={apiKey:t.apiKey,appName:e.name,v:Y},o=Sr.get(e.config.apiHost);o&&(i.eid=o);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Object(r["o"])(i).slice(1)}`}async function Ar(e){const t=await wr(e),n=mn().gapi;return fe(n,e,"internal-error"),t.open({where:document.body,url:Er(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tr,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ce(e,"network-request-failed"),o=mn().setTimeout(()=>{r(i)},Ir.get());function s(){mn().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xr=500,Rr=600,Pr="_blank",Nr="http://localhost";class jr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Lr(e,t,n,i=xr,o=Rr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Cr),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["i"])().toLowerCase();n&&(c=ct(l)?Pr:n),st(l)&&(t=t||Nr,u.scrollbars="yes");const d=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(pt(l)&&"_self"!==c)return Dr(t||"",c),new jr(null);const f=window.open(t||"",c,d);fe(f,e,"popup-blocked");try{f.focus()}catch(h){}return new jr(f)}function Dr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="__/auth/handler",$r="emulator/auth/handler";function Ur(e,t,n,i,o,s){fe(e.config.authDomain,e,"auth-domain-config-required"),fe(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Y,eventId:o};if(t instanceof Vt){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Object(r["k"])(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof Ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${Fr(e)}?${Object(r["o"])(c).slice(1)}`}function Fr({config:e}){return e.emulator?Te(e,$r):`https://${e.authDomain}/${Mr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="webStorageSupport";class Hr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dn,this._completeRedirectFn=sr}async _openPopup(e,t,n,r){var i;pe(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ur(e,t,n,_e(),r);return Lr(e,o,pn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),gn(Ur(e,t,n,_e(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(pe(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ar(e),n=new cr(e);return t.register("authEvent",t=>{fe(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Vr,{type:Vr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Vr];void 0!==i&&t(!!i),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mt()||at()||ht()}}const Wr=Hr;class zr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return he("unexpected MultiFactorSessionType")}}}class Br extends zr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Br(e)}_finalizeEnroll(e,t,n){return tn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return $n(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Gr{constructor(){}static assertion(e){return Br._fromCredential(e)}}Gr.FACTOR_ID="phone";var qr="@firebase/auth",Kr="0.19.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yr(e){q(new i("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{fe(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),fe(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yt(e)},s=new _t(t,r);return ye(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),q(new i("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(e=>new Jr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Q(qr,Kr,Xr(e)),Q(qr,Kr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e=Z()){const t=K(e,"auth");return t.isInitialized()?t.getImmediate():ge(e,{popupRedirectResolver:Wr,persistence:[Dn,un,dn]})}Yr("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=d(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.aea785a1.js.map