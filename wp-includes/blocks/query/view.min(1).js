import*as e from"@wordpress/interactivity";var t={438:e=>{e.exports=import("@wordpress/interactivity-router")}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const t=(e=>{var t={};return o.d(t,e),t})({getContext:()=>e.getContext,getElement:()=>e.getElement,store:()=>e.store}),r=e=>e&&e instanceof window.HTMLAnchorElement&&e.href&&(!e.target||"_self"===e.target)&&e.origin===window.location.origin;(0,t.store)("core/query",{actions:{*navigate(e){const n=(0,t.getContext)(),{ref:i}=(0,t.getElement)(),s=i.closest(".wp-block-query[data-wp-router-region]");if(r(i)&&(e=>!(0!==e.button||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented))(e)){e.preventDefault();const{actions:t}=yield Promise.resolve().then(o.bind(o,438));yield t.navigate(i.href),n.url=i.href;const r=".wp-block-post-template a[href]";s.querySelector(r)?.focus()}},*prefetch(){const{ref:e}=(0,t.getElement)();if(r(e)){const{actions:t}=yield Promise.resolve().then(o.bind(o,438));yield t.prefetch(e.href)}}},callbacks:{*prefetch(){const{url:e}=(0,t.getContext)(),{ref:n}=(0,t.getElement)();if(e&&r(n)){const{actions:e}=yield Promise.resolve().then(o.bind(o,438));yield e.prefetch(n.href)}}}},{lock:!0})})();