(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[9738],{849:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={id:"integration-issues",title:"Token Integration Issues"},s=void 0,c={unversionedId:"concepts/advanced/integration-issues",id:"version-V3/concepts/advanced/integration-issues",isDocsHomePage:!1,title:"Token Integration Issues",description:"Fee-on-transfer and rebasing tokens will not function correctly on v3.",source:"@site/versioned_docs/version-V3/concepts/advanced/integration-issues.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/integration-issues",permalink:"/protocol/concepts/advanced/integration-issues",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/concepts/advanced/integration-issues.md",version:"V3",frontMatter:{id:"integration-issues",title:"Token Integration Issues"},sidebar:"version-V3/mySidebar",previous:{title:"Swaps",permalink:"/protocol/concepts/V3-overview/swaps"},next:{title:"Research",permalink:"/protocol/concepts/advanced/research"}},u=[{value:"Fee-on-transfer Tokens",id:"fee-on-transfer-tokens",children:[]},{value:"Rebasing Tokens",id:"rebasing-tokens",children:[]}],l={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fee-on-transfer and rebasing tokens will not function correctly on v3."),(0,i.kt)("h2",{id:"fee-on-transfer-tokens"},"Fee-on-transfer Tokens"),(0,i.kt)("p",null,"Fee-on-transfer tokens will not function with our router contracts. As a workaround, the token creators may create a token wrapper or a customized router. We will not be making a router that supports fee-on-transfer tokens in the future. "),(0,i.kt)("h2",{id:"rebasing-tokens"},"Rebasing Tokens"),(0,i.kt)("p",null,"Rebasing tokens will succeed in pool creation and swapping, but liquidity providers will bear the loss of a negative rebase when their position becomes active, with no way to recover the loss."))}p.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,v=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(v,a(a({ref:n},l),{},{components:t})):r.createElement(v,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);