define(["exports","preact/jsx-runtime","../UNSAFE_PrefixSuffix","./UNSAFE_useUser",'module',"../utils/UNSAFE_classNames","../classNames-f11010a7","preact/hooks","../UNSAFE_Environment","preact","../UNSAFE_Layer","preact/compat"],function(e,i,s,t,n,a,r,d,o,f,u,l){"use strict";e.usePrefixSuffix=({baseId:e,hasEndContent:n,hasInsideLabel:a,hasStartContent:r,hasValue:d,isDisabled:o,isFocused:f,labelId:u,prefix:l,suffix:x,value:c})=>{const{direction:v}=t.useUser(),$=`${e}-prefix`,h=`${e}-suffix`,S=void 0!==l&&""!==l,b=void 0!==x&&""!==x,p=S&&!o&&(d||f)?i.jsx(s.PrefixSuffix,{id:$,hasEndContent:n,hasInsideLabel:a,hasStartContent:r,isDisabled:o,isFocused:f,text:l,variant:"prefix"}):void 0,E=b&&!o&&(d||f)?i.jsx(s.PrefixSuffix,{id:h,hasInsideLabel:a,isDisabled:o,isFocused:f,text:x,variant:"suffix"}):void 0,F=S||b?function(e,i,s,t,n){if(!i)return n;const a="ltr"===e,r=void 0===s?"":a?`${s} `:` ${s}`,d=void 0===t?"":a?` ${t}`:`${t} `,o=`${r}${n}${d}`,f=`${d}${n}${r}`;return a?o:f}(v,d,l,x,c):c,N=S||b?function(e,i,s){const t=null!=e?e:"",n=void 0===i?"":0===t.length?i:` ${i}`,a=void 0===s?"":0===t.length&&0===n.length?s:` ${s}`,r=`${t}${n}${a}`;return 0===r.length?void 0:r}(u,S?$:void 0,b?h:void 0):void 0;return{renderedPrefix:p,renderedSuffix:E,text:F,ariaLabelledBy:N}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_usePrefixSuffix.js.map