define(["exports","./UNSAFE_classNames","../_curry1-f9717f1c","../_curry3-01167a7d","../_has-6f4fa2af","../classNames-f11010a7","../_curry2-c4648b65"],function(r,e,c,t,n,s,a){"use strict";var u=function(r){return"[object Object]"===Object.prototype.toString.call(r)},o=t._curry3_1,f=n._has_1,_=o(function(r,e,c){var t,n={};for(t in e)f(t,e)&&(n[t]=f(t,c)?r(t,e[t],c[t]):e[t]);for(t in c)f(t,c)&&!f(t,n)&&(n[t]=c[t]);return n}),i=t._curry3_1,l=u,y=_,b=i(function r(e,c,t){return y(function(c,t,n){return l(t)&&l(n)?r(e,t,n):e(c,t,n)},c,t)});const d=(r,e,c)=>"class"===r?s.classNames([e,c]):c;r.mergeInterpolations=r=>e=>r.reduce((r,c)=>b(d,r,c(e)),{}),Object.defineProperty(r,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_mergeInterpolations.js.map