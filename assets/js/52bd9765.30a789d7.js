"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>w});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),w=o,m=d["".concat(s,".").concat(w)]||d[w]||u[w]||p;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const p={sidebar_label:"Browser.wsEndpoint"},a="Browser.wsEndpoint() method",i={unversionedId:"api/puppeteer.browser.wsendpoint",id:"version-17.1.3/api/puppeteer.browser.wsendpoint",title:"Browser.wsEndpoint() method",description:"The browser websocket endpoint which can be used as an argument to Puppeteer.connect().",source:"@site/versioned_docs/version-17.1.3/api/puppeteer.browser.wsendpoint.md",sourceDirName:"api",slug:"/api/puppeteer.browser.wsendpoint",permalink:"/api/puppeteer.browser.wsendpoint",draft:!1,tags:[],version:"17.1.3",frontMatter:{sidebar_label:"Browser.wsEndpoint"},sidebar:"sidebar",previous:{title:"Browser.waitForTarget",permalink:"/api/puppeteer.browser.waitfortarget"},next:{title:"BrowserConnectOptions.defaultViewport",permalink:"/api/puppeteer.browserconnectoptions.defaultviewport"}},s={},l=[{value:"Remarks",id:"remarks",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserwsendpoint-method"},"Browser.wsEndpoint() method"),(0,o.kt)("p",null,"The browser websocket endpoint which can be used as an argument to ",(0,o.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  wsEndpoint(): string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"string"),(0,o.kt)("p",null,"The Browser websocket url."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The format is ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://${host}:${port}/devtools/browser/<id>"),"."),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"webSocketDebuggerUrl")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"http://${host}:${port}/json/version"),". Learn more about the ",(0,o.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol"},"devtools protocol")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target"},"browser endpoint"),"."))}u.isMDXComponent=!0}}]);