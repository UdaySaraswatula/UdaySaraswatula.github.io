define(["exports"],function(e){"use strict";e.normalizePosition=(e,t)=>{const r={start:"left",end:"right"},n={start:"right",end:"left"};return"rtl"===t?e.replace(/start|end/g,e=>n[e]):e.replace(/start|end/g,e=>r[e])},e.reverseNormalizePosition=(e,t)=>{const r={left:"start",right:"end"},n={right:"start",left:"end"};return"rtl"===t?e.replace(/left|right/g,e=>n[e]):e.replace(/left|right/g,e=>r[e])},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_floatingUtils.js.map
