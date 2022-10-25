"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50551:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const i="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(i,n)},{hidden:t}),e)}},53787:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(86010),i=n(30358),o=n(83928),l=n(24055),p=n(6379);const u="tabList__CuJ",s="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:f,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var k;const y=null===m?m:null!==(k=null!=m?m:null===(t=v.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==k?k:v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.U)(),[O,C]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=f){const e=N[f];null!=e&&e!==O&&b.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,n=j.indexOf(t),r=b[n].value;r!==O&&(x(t),C(r),null!=f&&w(f,String(r)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=j.indexOf(e.currentTarget)+1;var n;t=null!==(n=j[r])&&void 0!==n?n:j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;var r;t=null!==(r=j[n])&&void 0!==r?r:j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},g)},b.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:T,onFocus:P,onClick:P},n,{className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,c({key:String(t)},e))}},96583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>m});n(67294);var r=n(3905),a=n(53787),i=n(50551);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={},u="Configuring Puppeteer",s={unversionedId:"guides/configuring-puppeteer",id:"version-19.1.2/guides/configuring-puppeteer",title:"Configuring Puppeteer",description:"All defaults in Puppeteer can be customized in two ways:",source:"@site/versioned_docs/version-19.1.2/guides/configuring-puppeteer.mdx",sourceDirName:"guides",slug:"/guides/configuring-puppeteer",permalink:"/guides/configuring-puppeteer",draft:!1,tags:[],version:"19.1.2",frontMatter:{},sidebar:"sidebar",previous:{title:"Chrome Extensions",permalink:"/guides/chrome-extensions"},next:{title:"Debugging",permalink:"/guides/debugging"}},c={},m=[{value:"Configuration files",id:"configuration-files",level:2},{value:"Examples",id:"examples",level:3},{value:"Changing the default cache directory",id:"changing-the-default-cache-directory",level:4},{value:"Enabling experiments",id:"enabling-experiments",level:4},{value:"Environment variables",id:"environment-variables",level:2}],d={toc:m};function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"configuring-puppeteer"}),"Configuring Puppeteer"),(0,r.kt)("p",null,"All defaults in Puppeteer can be customized in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",o({parentName:"li"},{href:"#configuration-files"}),"Configuration files")," (",(0,r.kt)("strong",{parentName:"li"},"recommended"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",o({parentName:"li"},{href:"#environment-variables"}),"Environment variables"))),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Note that some options are only customizable through environment variables (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),").")),(0,r.kt)("h2",o({},{id:"configuration-files"}),"Configuration files"),(0,r.kt)("p",null,"Configuration files are the ",(0,r.kt)("strong",{parentName:"p"},"recommended")," choice for configuring Puppeteer.\nPuppeteer will look up the file tree for any of the following formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc.cjs"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc.js"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc")," (YAML/JSON),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc.json"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc.yaml"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"puppeteer.config.js"),", and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"puppeteer.config.cjs"))),(0,r.kt)("p",null,"Puppeteer will also read a ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," key from your application's\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",o({parentName:"p"},{href:"../api/puppeteer.configuration"}),(0,r.kt)("inlineCode",{parentName:"a"},"Configuration")),"\ninterface for possible options."),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"After adding a configuration file, you may need to remove and reinstall\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," for it to take effect if the changes affect installation.")),(0,r.kt)("h3",o({},{id:"examples"}),"Examples"),(0,r.kt)("h4",o({},{id:"changing-the-default-cache-directory"}),"Changing the default cache directory"),(0,r.kt)("p",null,"Starting in v19.0.0, Puppeteer stores browsers in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.cache/puppeteer")," to\nglobally cache browsers between installation. This can cause problems if\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," is packed during some build step and moved to a fresh location. The\nfollowing configuration can solve this issue (reinstall ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," to take\neffect):"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="project-directory/.puppeteerrc.cjs"',title:'"project-directory/.puppeteerrc.cjs"'}),"const {join} = require('path');\n\n/**\n * @type {import(\"puppeteer\").Configuration}\n */\nmodule.exports = {\n  // Changes the cache location for Puppeteer.\n  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),\n};\n")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Notice this is only possible with CommonJS configuration files as information\nabout the ambient environment is needed (in this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"__dirname"),").")),(0,r.kt)("h4",o({},{id:"enabling-experiments"}),"Enabling experiments"),(0,r.kt)("p",null,"By default, experiments are turned off, but they can be individually turned on\nusing the ",(0,r.kt)("a",o({parentName:"p"},{href:"../api/puppeteer.configuration.experiments"}),(0,r.kt)("inlineCode",{parentName:"a"},"experiments"))," key."),(0,r.kt)("p",null,"For example, if you want to enable ARM-native macOS chromium, you can use"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"CommonJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title=".puppeteerrc.cjs"',title:'".puppeteerrc.cjs"'}),'/**\n * @type {import("puppeteer").Configuration}\n */\nmodule.exports = {\n  experiments: {\n    macArmChromiumEnabled: true,\n  },\n};\n'))),(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-json",metastring:'title=".puppeteerrc.json"',title:'".puppeteerrc.json"'}),'{\n  "experiments": {\n    "macArmChromiumEnabled": true\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yaml",metastring:'title=".puppeteerrc.yaml"',title:'".puppeteerrc.yaml"'}),"experiments:\n  macArmChromiumEnabled: true\n")))),(0,r.kt)("h2",o({},{id:"environment-variables"}),"Environment variables"),(0,r.kt)("p",null,"Along with configuration files, Puppeteer looks for certain ",(0,r.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Environment_variable"}),"environment\nvariables")," for customizing\nbehavior. Environment variables will always override configuration file\noptions when applicable."),(0,r.kt)("p",null,"The following options are ",(0,r.kt)("em",{parentName:"p"},"environment-only")," options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NO_PROXY")," - defines HTTP proxy settings that are\nused to download and run the browser.")),(0,r.kt)("p",null,"All other options can be found in the documentation for the\n",(0,r.kt)("a",o({parentName:"p"},{href:"../api/puppeteer.configuration"}),(0,r.kt)("inlineCode",{parentName:"a"},"Configuration"))," interface."))}f.isMDXComponent=!0}}]);