/*! This file is auto-generated */
(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{privateApis:()=>S});const n=window.React,r=window.wp.element;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var a;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));var u=function(e){return e};var i="beforeunload",c="popstate";function s(e){e.preventDefault(),e.returnValue=""}function l(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function f(){return Math.random().toString(36).substr(2,8)}function h(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,o=void 0===r?"":r,a=e.hash,u=void 0===a?"":a;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),u&&"#"!==u&&(n+="#"===u.charAt(0)?u:"#"+u),n}function d(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}const p=window.wp.url,v=function(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,r=n.history;function p(){var e=n.location,t=e.pathname,o=e.search,a=e.hash,i=r.state||{};return[i.idx,u({pathname:t,search:o,hash:a,state:i.usr||null,key:i.key||"default"})]}var v=null;n.addEventListener(c,(function(){if(v)P.call(v),v=null;else{var e=a.Pop,t=p(),n=t[0],r=t[1];if(P.length){if(null!=n){var o=g-n;o&&(v={action:e,location:r,retry:function(){x(-1*o)}},x(o))}}else j(e)}}));var w=a.Pop,y=p(),g=y[0],b=y[1],m=l(),P=l();function O(e){return"string"==typeof e?e:h(e)}function k(e,t){return void 0===t&&(t=null),u(o({pathname:b.pathname,hash:"",search:""},"string"==typeof e?d(e):e,{state:t,key:f()}))}function A(e,t){return[{usr:e.state,key:e.key,idx:t},O(e)]}function S(e,t,n){return!P.length||(P.call({action:e,location:t,retry:n}),!1)}function j(e){w=e;var t=p();g=t[0],b=t[1],m.call({action:w,location:b})}function x(e){r.go(e)}null==g&&(g=0,r.replaceState(o({},r.state,{idx:g}),""));var E={get action(){return w},get location(){return b},createHref:O,push:function e(t,o){var u=a.Push,i=k(t,o);if(S(u,i,(function(){e(t,o)}))){var c=A(i,g+1),s=c[0],l=c[1];try{r.pushState(s,"",l)}catch(e){n.location.assign(l)}j(u)}},replace:function e(t,n){var o=a.Replace,u=k(t,n);if(S(o,u,(function(){e(t,n)}))){var i=A(u,g),c=i[0],s=i[1];r.replaceState(c,"",s),j(o)}},go:x,back:function(){x(-1)},forward:function(){x(1)},listen:function(e){return m.push(e)},block:function(e){var t=P.push(e);return 1===P.length&&n.addEventListener(i,s),function(){t(),P.length||n.removeEventListener(i,s)}}};return E}(),w=v.push,y=v.replace;v.push=function(e,t){const n=(0,p.getQueryArgs)(window.location.href),r=(0,p.removeQueryArgs)(window.location.href,...Object.keys(n)),o=(0,p.addQueryArgs)(r,e);return w.call(v,o,t)},v.replace=function(e,t){const n=(0,p.getQueryArgs)(window.location.href),r=(0,p.removeQueryArgs)(window.location.href,...Object.keys(n)),o=(0,p.addQueryArgs)(r,e);return y.call(v,o,t)};const g=v,b=(0,r.createContext)(),m=(0,r.createContext)();function P(e){const t=new URLSearchParams(e.search);return{...e,params:Object.fromEntries(t.entries())}}const O=window.wp.privateApis,{lock:k,unlock:A}=(0,O.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.","@wordpress/router"),S={};k(S,{useHistory:function(){return(0,r.useContext)(m)},useLocation:function(){return(0,r.useContext)(b)},RouterProvider:function({children:e}){const[t,o]=(0,r.useState)((()=>P(g.location)));return(0,r.useEffect)((()=>g.listen((({location:e})=>{o(P(e))}))),[]),(0,n.createElement)(m.Provider,{value:g},(0,n.createElement)(b.Provider,{value:t},e))}}),(window.wp=window.wp||{}).router=t})();