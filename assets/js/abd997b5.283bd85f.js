"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=p,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),p=(r(67294),r(3905));const o={sidebar_label:"Puppeteer.networkConditions"},i="Puppeteer.networkConditions property",a={unversionedId:"api/puppeteer.puppeteer.networkconditions",id:"version-17.0.0/api/puppeteer.puppeteer.networkconditions",title:"Puppeteer.networkConditions property",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-17.0.0/api/puppeteer.puppeteer.networkconditions.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer.networkconditions",permalink:"/api/puppeteer.puppeteer.networkconditions",draft:!1,tags:[],version:"17.0.0",frontMatter:{sidebar_label:"Puppeteer.networkConditions"},sidebar:"sidebar",previous:{title:"Puppeteer",permalink:"/api/puppeteer.puppeteer"},next:{title:"Puppeteer.registerCustomQueryHandler",permalink:"/api/puppeteer.puppeteer.registercustomqueryhandler"}},u={},l=[{value:"Example",id:"example",level:2}],c={toc:l};function s(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"puppeteernetworkconditions-property"},"Puppeteer.networkConditions property"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,p.kt)("p",{parentName:"blockquote"},"Import directly puppeteer.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class Puppeteer {\n  get networkConditions(): typeof networkConditions;\n}\n")),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import {networkConditions} from 'puppeteer';\n")))}s.isMDXComponent=!0}}]);