(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3609:(e,t,n)=>{Promise.resolve().then(n.bind(n,3466))},3466:(e,t,n)=>{"use strict";n.d(t,{default:()=>b});var r,o,i=n(5155),s=n(2115),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=(0,s.createContext)(void 0),u="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",c="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js";let d=function(e){var t=e.config,n=e.version,n=void 0===n?3:n,i=e.src,i=void 0===i?2===n?u:c:i,d=e.onStartup,h=e.onLoad,f=e.asyncLoad,p=void 0!==f&&f,m=e.onError,f=e.typesettingOptions,v=e.renderMode,v=void 0===v?"post":v,y=e.hideUntilTypeset,e=e.children,x=(0,s.useContext)(l);if(void 0!==(null==x?void 0:x.version)&&(null==x?void 0:x.version)!==n)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(2===n&&void 0!==o||3===n&&void 0!==r)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var b=(0,s.useRef)(x),x=(0,s.useRef)((null==x?void 0:x.version)||null);if(null===x.current)x.current=n;else if(x.current!==n)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var w=i||(2===n?u:c);function g(e,n){t&&(window.MathJax=t);var r=document.createElement("script");r.type="text/javascript",r.src=w,r.async=p,r.addEventListener("load",function(){var t=window.MathJax;d&&d(t),e(t),h&&h()}),r.addEventListener("error",function(e){return n(e)}),document.getElementsByTagName("head")[0].appendChild(r)}return void 0===b.current&&(x={typesettingOptions:f,renderMode:v,hideUntilTypeset:y},2===n?void 0===r&&("undefined"!=typeof window?(r=new Promise(g)).catch(function(e){if(!m)throw Error("Failed to download MathJax version 2 from '".concat(w,"' due to: ").concat(JSON.stringify(e)));m(e)}):(r=Promise.reject()).catch(function(e){})):void 0===o&&("undefined"!=typeof window?(o=new Promise(g)).catch(function(e){if(!m)throw Error("Failed to download MathJax version 3 from '".concat(w,"' due to: ").concat(e));m(e)}):(o=Promise.reject()).catch(function(e){})),b.current=a(a({},x),2===n?{version:2,promise:r}:{version:3,promise:o})),s.createElement(l.Provider,{value:b.current},e)};var h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},p=function(e){return"Typesetting failed: ".concat(void 0!==e.message?e.message:JSON.stringify(e))};let m=function(e){function t(){var e;"every"===w&&j&&"post"===g&&null!==x.current&&(x.current.style.visibility=null!=(e=null==(e=v.style)?void 0:e.visibility)?e:"visible"),E.current||("first"===w&&null!==x.current&&(x.current.style.visibility="visible"),o&&o(),E.current=!0),i&&i(),C.current=!1}var n=e.inline,r=void 0!==n&&n,n=e.hideUntilTypeset,o=e.onInitTypeset,i=e.onTypeset,a=e.text,u=e.dynamic,c=e.typesettingOptions,d=e.renderMode,m=e.children,v=f(e,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),y=(0,s.useRef)(""),x=(0,s.useRef)(null),b=(0,s.useContext)(l),w=null!=n?n:null==b?void 0:b.hideUntilTypeset,g=null!=d?d:null==b?void 0:b.renderMode,M=null!=c?c:null==b?void 0:b.typesettingOptions,j=!1!==u&&(u||!1),E=(0,s.useRef)(!1),C=(0,s.useRef)(!1);return!C.current&&null!==x.current&&j&&"every"===w&&"post"===g&&(x.current.style.visibility="hidden"),("undefined"!=typeof window?s.useLayoutEffect:s.useEffect)(function(){if((j||!E.current)&&null!==x.current){if(!b)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if("pre"===g){if(!("string"==typeof a&&0<a.length))throw Error("Render mode 'pre' requires text prop to be set and non-empty, which was currently \"".concat(a,'"'));if(!c||!c.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(2===b.version)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}"post"!==g&&a===y.current||C.current||(C.current=!0,3===b.version?b.promise.then(function(e){var n;"pre"===g?(n=function(n){y.current=a,e.startup.document.clear(),e.startup.document.updateDocument(),null!==x.current&&(x.current.innerHTML=n.outerHTML),t()},c.fn.endsWith("Promise")?e.startup.promise.then(function(){return e[M.fn](a,h(h({},(null==M?void 0:M.options)||{}),{display:!r}))}).then(n).catch(function(e){throw t(),Error(p(e))}):e.startup.promise.then(function(){n(e[M.fn](a,h(h({},(null==M?void 0:M.options)||{}),{display:!r})))}).catch(function(e){throw t(),Error(p(e))})):e.startup.promise.then(function(){return e.typesetClear([x.current]),e.typesetPromise([x.current])}).then(t).catch(function(e){throw t(),Error(p(e))})}).catch(function(e){throw t(),Error(p(e))}):b.promise.then(function(e){e.Hub.Queue(["Typeset",e.Hub,x.current]),e.Hub.Queue(t)}).catch(function(e){throw t(),Error(p(e))}))}}),s.createElement("span",h({},v,{style:h(h({display:r?"inline":"block"},v.style),{visibility:w?"hidden":null==(e=v.style)?void 0:e.visibility}),ref:x}),m)};function v(e){let{pair:t,mode:n}=e,r=!1;t.imagePath&&("answer"===n&&(r=!0),"question"!==n||t.imageAnswer||(r=!0));let o={question:t.questionTex,answer:t.answerTex}[n];return(0,i.jsxs)("div",{className:"h-full flex flex-col justify-center overflow-y-auto py-8 px-32",children:[(0,i.jsx)(m,{children:o}),r&&(0,i.jsx)("img",{className:"h-96 mx-auto mt-4",src:t.imagePath})]})}let y=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r},x={options:{enableMenu:!1},tex:{inlineMath:[["$","$"],["\\(","\\)"]]}};function b(e){let{data:t}=e,[n,r]=(0,s.useState)([]),[o,a]=(0,s.useState)(null),[l,u]=(0,s.useState)("question"),[c,h]=(0,s.useState)(!1),[f,p]=(0,s.useState)(0),m=(0,s.useMemo)(()=>null!==o?(0,i.jsx)(v,{pair:t[o],mode:l}):c?(0,i.jsx)("div",{children:"You have completed all the problems in the deck! Congratulations! Refresh the page to restart."}):(0,i.jsxs)("div",{children:['Press the "Start" button to get started. Clicking the "Skip Question" button will make a question appear later in the deck, and clicking the "Complete Question" button will remove the question from the deck completely. You can restart by refreshing the page.',(0,i.jsx)("br",{})," There is a timer in the upper-right corner with an estimate of how long you should be spending on each question."]}),[t,o,l,c]);function b(e){if(e.length===t.length)a(null),h(!0);else{let n=t.map((e,t)=>t).filter(t=>!e.includes(t)),r=Math.floor(Math.random()*n.length);a(n[r])}}return(0,s.useEffect)(()=>{console.log("INITIATING INTERVAL");let e=setInterval(()=>{console.log("INTERVAL TRIGGERED"),p(e=>e+1)},1e3);return()=>{console.log("CLEARING INTERVAL",e),clearInterval(e)}},[o]),(0,i.jsx)(d,{version:3,config:x,children:(0,i.jsxs)("div",{className:"w-full min-h-screen flex flex-col p-4",children:[(0,i.jsxs)("div",{className:y("grow flex items-center justify-center border rounded-sm transition-colors",{"border-amber-600":"question"===l,"border-emerald-600":"answer"===l}),children:[(0,i.jsxs)("div",{className:"absolute right-8 top-6 text-xl",children:[(0,i.jsx)("button",{className:"text-emerald-600",onClick:function(){p(e=>null!==o?(e=Math.min(e,t[o].timeLimit))-30:0)},children:"+"}),function(){if(null===o)return"";{let e=Math.max(t[o].timeLimit-f,0),n=Math.floor(e/60),r=e-60*n;return"".concat(n.toString().padStart(1,"0"),":").concat(r.toString().padStart(2,"0"))}}()]}),m]}),(0,i.jsxs)("div",{className:"flex flex-row gap-2 mt-4",children:[null!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:y("grow text-gray-950 p-1 rounded-sm transition-colors",{"bg-amber-600 hover:bg-amber-500 border border-amber-500":"question"===l,"bg-emerald-600 hover:bg-emerald-500 border border-emerald-500":"answer"===l}),onClick:function(){u(e=>{switch(e){case"question":return"answer";case"answer":return"question"}})},children:"question"===l?"Show Answer":"Show Question"}),(0,i.jsx)("button",{className:"grow bg-zinc-400 border border-zinc-300 hover:bg-zinc-300 text-gray-950 p-1 rounded-sm",onClick:()=>b(n),children:"Skip Question"})]}),(0,i.jsx)("button",{className:"grow bg-blue-600 border border-blue-500 hover:bg-blue-500 text-gray-950 p-1 rounded-sm",onClick:function(){u("question"),p(0),null!==o?r(e=>(b(e=[...e,o]),e)):b(n)},children:null!==o?"Complete Question":"Start"})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(3609)),_N_E=e.O()}]);