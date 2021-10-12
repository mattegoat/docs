(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[9404],{500:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={},o=void 0,p={unversionedId:"reference/periphery/NonfungiblePositionManager",id:"version-V3/reference/periphery/NonfungiblePositionManager",isDocsHomePage:!1,title:"NonfungiblePositionManager",description:"Wraps Uniswap V3 positions in the ERC721 non-fungible token interface",source:"@site/versioned_docs/version-V3/reference/periphery/NonfungiblePositionManager.md",sourceDirName:"reference/periphery",slug:"/reference/periphery/NonfungiblePositionManager",permalink:"/protocol/reference/periphery/NonfungiblePositionManager",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/periphery/NonfungiblePositionManager.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"TickLensTest",permalink:"/protocol/reference/periphery/test/TickLensTest"},next:{title:"NonfungibleTokenPositionDescriptor",permalink:"/protocol/reference/periphery/NonfungibleTokenPositionDescriptor"}},d=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"positions",id:"positions",children:[]},{value:"mint",id:"mint",children:[]},{value:"tokenURI",id:"tokenuri",children:[]},{value:"baseURI",id:"baseuri",children:[]},{value:"increaseLiquidity",id:"increaseliquidity",children:[]},{value:"decreaseLiquidity",id:"decreaseliquidity",children:[]},{value:"collect",id:"collect",children:[]},{value:"burn",id:"burn",children:[]},{value:"_getAndIncrementNonce",id:"_getandincrementnonce",children:[]},{value:"getApproved",id:"getapproved",children:[]},{value:"_approve",id:"_approve",children:[]}]}],m={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wraps Uniswap V3 positions in the ERC721 non-fungible token interface"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,i.kt)("h3",{id:"positions"},"positions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function positions(\n    uint256 tokenId\n  ) external view returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)\n")),(0,i.kt)("p",null,"Returns the position information associated with a given token ID."),(0,i.kt)("p",null,"Throws if the token ID is not valid."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ID of the token that represents the position")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nonce")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint96"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The nonce for permits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"operator")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address that is approved for spending")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"token0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address of the token0 for a specific pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"token1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address of the token1 for a specific pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fee")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fee associated with the pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The lower end of the tick range for the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The higher end of the tick range for the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The liquidity of the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feeGrowthInside0LastX128")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fee growth of token0 as of the last action on the individual position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feeGrowthInside1LastX128")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fee growth of token1 as of the last action on the individual position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokensOwed0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The uncollected amount of token0 owed to the position as of the last computation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokensOwed1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The uncollected amount of token1 owed to the position as of the last computation")))),(0,i.kt)("h3",{id:"mint"},"mint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function mint(\n    struct INonfungiblePositionManager.MintParams params\n  ) external returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)\n")),(0,i.kt)("p",null,"Creates a new position wrapped in a NFT"),(0,i.kt)("p",null,"Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized\na method does not exist, i.e. the pool is assumed to be initialized."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct INonfungiblePositionManager.MintParams"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The params necessary to mint a position, encoded as ",(0,i.kt)("inlineCode",{parentName:"td"},"MintParams")," in calldata")))),(0,i.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ID of the token that represents the minted position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of liquidity for this position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1")))),(0,i.kt)("h3",{id:"tokenuri"},"tokenURI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tokenURI(\n  ) public view returns (string)\n")),(0,i.kt)("h3",{id:"baseuri"},"baseURI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function baseURI(\n  ) public returns (string)\n")),(0,i.kt)("h3",{id:"increaseliquidity"},"increaseLiquidity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function increaseLiquidity(\n    struct INonfungiblePositionManager.IncreaseLiquidityParams params\n  ) external returns (uint128 liquidity, uint256 amount0, uint256 amount1)\n")),(0,i.kt)("p",null,"Increases the amount of liquidity in a position, with tokens paid by the ",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct INonfungiblePositionManager.IncreaseLiquidityParams"),(0,i.kt)("td",{parentName:"tr",align:"left"},"tokenId The ID of the token for which liquidity is being increased,")))),(0,i.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The new liquidity amount as a result of the increase")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 to acheive resulting liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 to acheive resulting liquidity")))),(0,i.kt)("h3",{id:"decreaseliquidity"},"decreaseLiquidity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decreaseLiquidity(\n    struct INonfungiblePositionManager.DecreaseLiquidityParams params\n  ) external returns (uint256 amount0, uint256 amount1)\n")),(0,i.kt)("p",null,"Decreases the amount of liquidity in a position and accounts it to the position"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct INonfungiblePositionManager.DecreaseLiquidityParams"),(0,i.kt)("td",{parentName:"tr",align:"left"},"tokenId The ID of the token for which liquidity is being decreased,")))),(0,i.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 accounted to the position's tokens owed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 accounted to the position's tokens owed")))),(0,i.kt)("h3",{id:"collect"},"collect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function collect(\n    struct INonfungiblePositionManager.CollectParams params\n  ) external returns (uint256 amount0, uint256 amount1)\n")),(0,i.kt)("p",null,"Collects up to a maximum amount of fees owed to a specific position to the recipient"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct INonfungiblePositionManager.CollectParams"),(0,i.kt)("td",{parentName:"tr",align:"left"},"tokenId The ID of the NFT for which tokens are being collected,")))),(0,i.kt)("p",null,"recipient The account that should receive the tokens,\namount0Max The maximum amount of token0 to collect,\namount1Max The maximum amount of token1 to collect"),(0,i.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of fees collected in token0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of fees collected in token1")))),(0,i.kt)("h3",{id:"burn"},"burn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function burn(\n    uint256 tokenId\n  ) external\n")),(0,i.kt)("p",null,"Burns a token ID, which deletes it from the NFT contract. The token must have 0 liquidity and all tokens\nmust be collected first."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ID of the token that is being burned")))),(0,i.kt)("h3",{id:"_getandincrementnonce"},"_getAndIncrementNonce"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _getAndIncrementNonce(\n  ) internal returns (uint256)\n")),(0,i.kt)("h3",{id:"getapproved"},"getApproved"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getApproved(\n  ) public view returns (address)\n")),(0,i.kt)("p",null,"Returns the account approved for ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," token.\nRequirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokenId")," must exist.")),(0,i.kt)("h3",{id:"_approve"},"_approve"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _approve(\n  ) internal\n")),(0,i.kt)("p",null,"Overrides _approve to use the operator in the position, which is packed with the position permit nonce"))}s.isMDXComponent=!0},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(n),u=r,c=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return n?a.createElement(c,l(l({ref:e},m),{},{components:n})):a.createElement(c,l({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"}}]);