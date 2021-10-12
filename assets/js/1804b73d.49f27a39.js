(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[8555],{6921:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a={},c="TokenRatioSortOrder",p={unversionedId:"reference/periphery/libraries/TokenRatioSortOrder",id:"version-V3/reference/periphery/libraries/TokenRatioSortOrder",isDocsHomePage:!1,title:"TokenRatioSortOrder",description:"`solidity",source:"@site/versioned_docs/version-V3/reference/periphery/libraries/TokenRatioSortOrder.md",sourceDirName:"reference/periphery/libraries",slug:"/reference/periphery/libraries/TokenRatioSortOrder",permalink:"/protocol/reference/periphery/libraries/TokenRatioSortOrder",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/periphery/libraries/TokenRatioSortOrder.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"PositionKey",permalink:"/protocol/reference/periphery/libraries/PositionKey"},next:{title:"TransferHelper",permalink:"/protocol/reference/periphery/libraries/TransferHelper"}},s=[],l={toc:s};function u(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tokenratiosortorder"},"TokenRatioSortOrder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"library TokenRatioSortOrder {\n    int256 constant NUMERATOR_MOST = 300;\n    int256 constant NUMERATOR_MORE = 200;\n    int256 constant NUMERATOR = 100;\n    int256 constant DENOMINATOR_MOST = -300;\n    int256 constant DENOMINATOR_MORE = -200;\n    int256 constant DENOMINATOR = -100;\n}\n")))}u.isMDXComponent=!0},3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return y}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),y=o,d=f["".concat(p,".").concat(y)]||f[y]||u[y]||i;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);