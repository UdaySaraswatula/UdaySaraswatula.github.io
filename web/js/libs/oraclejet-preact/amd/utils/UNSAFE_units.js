define(["exports","./UNSAFE_arrayUtils","./UNSAFE_stringUtils","../stringUtils-b9c2724c"],function(t,e,r,s){"use strict";const i=(n=Number,t=>null!=t&&t.constructor===n||t instanceof n);var n;const a=t=>0===t||"0"===t,o=e.stringLiteralArray(["px","%","em","rem","vh","vw"]),c=new RegExp(`(${o.join("|")})$`),l=t=>s.isString(t)&&c.test(t),u=(N="px",t=>a(t)||l(t)||!(t=>!isNaN(parseFloat(t))&&!isNaN(t-0))(t)?t:t+N);var N;t.hasUnit=l,t.isNumber=i,t.isZero=a,t.px=u,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_units.js.map
