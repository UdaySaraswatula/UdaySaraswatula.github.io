define(["exports","./UNSAFE_dvtCommonUtils"],function(t,n){"use strict";function e(t,n){if(!n)return;if(t<=n[0].max)return n[0];let e=n[0].max;for(let r=1;r<n.length;r++){if(e<t&&t<=n[r].max)return n[r];e=n[r].max}}function r(t,e,r){return"track"===t&&(null==e?void 0:e.color)?n.getDvtThresholdColor(null==e?void 0:e.color):r}function o(t,e,r){return(null==e?void 0:e.color)&&"indicator"===t?n.getDvtThresholdColor(e.color):r}function a(t){return t*Math.PI/180}function l(t){return(t+360)%360}function i(t,n,e){switch(e){case"top":n*=2;break;case"bottom":n=2*n-1;break;case"left":t*=2;break;case"right":t=2*t-1}return{x:t,y:n}}function u(t,n){let e,r;return(t=l(t))<45?(r=.5-.5*Math.tan(a(t)),e=1):t<135?(e=t<90?.5+.5*Math.tan(a(90-t)):.5-.5*Math.tan(a(t-90)),r=0):t<225?(r=t<180?.5-.5*Math.tan(a(180-t)):.5+.5*Math.tan(a(t-180)),e=0):t<315?(e=t<270?.5-.5*Math.tan(a(270-t)):.5+.5*Math.tan(a(t-270)),r=1):(e=1,r=.5+.5*Math.tan(a(360-t))),i(e,r,n)}function c(t){return i(.5,.5,t)}function f(t){return t<=180}function h(t){return t<=90||t>=270}function s(t){return t>=90&&t<=270}function d(t){return t>=180||0===t}t.convertToPolar=function(t,n,e,r){return{radius:Math.sqrt((e-t)**2+(r-n)**2),angle:180*Math.atan2(n-r,e-t)/Math.PI}},t.findThreshold=e,t.getCenterCoord=c,t.getCircleSection=function(t,n,e){if(n>180)return"full";const r=l(t+(e?.5:-.5)*n),o=l(t+(e?1:-1)*n);return f(t)&&f(r)&&f(o)?"top":h(t)&&h(r)&&h(o)?"right":s(t)&&s(r)&&s(o)?"left":d(t)&&d(r)&&d(o)?"bottom":"full"},t.getClipPath=function(t,n,e,r){let o=e?t+n:t;const a=u(o,r);let l,i,f=`${100*a.x}% ${100*a.y}%`;do{l=Math.max(o-n,45*(Math.ceil(o/45)-1)),i=u(l,r),f+=`, ${100*i.x}% ${100*i.y}%`,n-=o-l,o=l}while(l>o-n);const h=c(r);return`polygon(${f}, ${100*h.x}% ${100*h.y}%)`},t.getMeterAriaProps=function(t,n,r,o,a,l,i){const u=e(t,i);return{"aria-label":a,"aria-valuenow":`${t}`,"aria-valuemin":`${n}`,"aria-valuetext":`${o} ${(null==u?void 0:u.accessibleLabel)||""}`,"aria-valuemax":`${r}`,"aria-labelledby":l}},t.getPositiveAngle=l,t.getThresholdColorFromValue=function(t,n,r){const o=e(t,r);return(null==o?void 0:o.color)?null==o?void 0:o.color:n},t.getTrackAndIndicatorColor=function(t,n,a,l,i){const u=e(t,i);return{trackColor:r(n,u,a),indicatorColor:o(n,u,l)}},t.validateRange=function(t,n,e,r){if(t>n)throw new RangeError("The min must be lower or equal to max.");if(e<t||e>n)throw new RangeError("The value must be between min and max.");if(r>n-t)throw new RangeError("The step value must be less than the difference of max and min")},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_meterUtils.js.map
