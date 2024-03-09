define(["exports","./tslib.es6-24bf3861","preact/jsx-runtime","./hooks/UNSAFE_useUser",'module',"preact/hooks","./utils/UNSAFE_mergeProps","./utils/UNSAFE_classNames","./PRIVATE_Meter","./utils/PRIVATE_meterUtils","./utils/UNSAFE_dvtCommonUtils","./hooks/PRIVATE_useDvtMeterEvents","./hooks/UNSAFE_useTabbableMode","./classNames-f11010a7"],function(t,e,n,s,r,i,a,o,l,c,u,d,h,f){"use strict";function m({color:t,angle:e,radius:s,length:r,section:i="full"}){const a=c.getCenterCoord(i),o=`calc(${100*a.y}% - ((${Math.sin(2*e*Math.PI/360)} * ${s})))`,l=`calc(${100*a.x}%  + ((${Math.cos(2*e*Math.PI/360)} * ${s})))`;return n.jsx("div",{class:g.base,style:{left:l,top:o,width:`calc(${r})`,transform:`translate(0, -1px) rotate(${360-e}deg)`,backgroundColor:t?u.getDvtThresholdColor(t):"var(--oj-c-PRIVATE-DO-NOT-USE-dvt-reference-object-line-color)",borderBottom:"1px solid var(--oj-c-PRIVATE-DO-NOT-USE-dvt-contrast-line-color)"}})}const g={base:"_1u67w"};function p(t,e){if(!t)return{width:0,height:0,innerRadius:0,outerRadius:0};const n=t.children[0],s=n.getBoundingClientRect();return Object.assign({width:Math.round(s.width),height:Math.round(s.height)},function(t,e,n){const s=t.clientWidth,r=t.clientHeight;if("bottom"===n||"top"===n)return{outerRadius:e.width/2,innerRadius:r};if("left"===n||"right"===n)return{outerRadius:e.height/2,innerRadius:s};return{innerRadius:s/2,outerRadius:e.width/2}}(n,s,e))}function b(t,e,n,s){return t*s/(n-e)}function x(t,e,n,s,r,i){return s+(i?1:-1)*b(t-e,e,n,r)}function R(t){return`var(--oj-c-PRIVATE-DO-NOT-USE-meter-circle-${t}-size)`}function v(t){return`var(--oj-c-PRIVATE-DO-NOT-USE-meter-circle-${t}-track-size)`}function _(t,e){return null!=e?`(${R(t)} * ${e/2})`:`(${R(t)} * 0.5 - ${v(t)})`}function $(t,e){return null!=e?`(${R(t)} * ${1-e} / 2)`:v(t)}function j(t,e){return`${$(t,e)} + ${{sm:"1rem",md:"0.75rem",lg:"0.5rem"}[t]}`}function C(t,e,n,s,r){const{min:i,max:a,startAngle:o,angleExtent:l,size:d,section:h,isRtl:f,innerRadius:m}=t,g=`calc(${$(d,r)})`,p=[],R=e.filter(t=>t.max>i&&t.max<=a).sort((t,e)=>t.max-e.max),v=R.length;for(let t=0;t<v;t++){const e=R[t],r=0===t?i:R[t-1].max,d=0===t?e.max:e.max-R[t-1].max;let _=x(r,i,a,o,l,f),$=b(d,i,a,l);const{startOffset:j,extentOffset:C}=P(m,l,0===t,e.max===a,f),E=c.getClipPath(_+j,$+C,f,h);if(p.push({clipPath:E,color:u.getDvtThresholdColor(e.color),size:g,section:h}),t===v-1&&e.max<a&&n){_+=(f?1:-1)*$,$=b(a-e.max,i,a,l);const{startOffset:t,extentOffset:n}=P(m,l,!1,!0,f);p.push({clipPath:c.getClipPath(_+t,$+n,f,h),color:s,size:g,section:h})}}return p}function E(t,e,n,s,r,i){const{startAngle:a,angleExtent:o,size:l,section:u,isRtl:d}=t;return{section:u,color:e?"all"===n&&i?"var(--oj-c-PRIVATE-DO-NOT-USE-dvt-contrast-line-color)":s:"transparent",clipPath:c.getClipPath(a,o,d,u),size:`calc(${$(l,r)})`}}function z(t,e,n){const{value:s,min:r,max:i,startAngle:a,angleExtent:o,size:l,section:u,isRtl:d}=t,h=(s-r)*o/(i-r),f=Math.min(Math.max(0,e),1),m="left"===u||"right"===u,g="top"===u||"bottom"===u,p=`calc(${$(l,n)} * ${f})`,b=`${R(l)} - ((1 - ${f}) * ${$(l,n)})`,x=`(${b}) / 2`;return{section:u,width:m?`calc(${x})`:`calc(${b})`,height:g?`calc(${x})`:`calc(${b})`,size:p,clipPath:c.getClipPath(a,h,d,u)}}function P(t,e,n,s,r){if(!t)return{startOffset:0,extentOffset:0};const i=360/(2*Math.PI*t);let a=i/2*(r?1:-1),o=-1*i;return n&&e<360&&(a=0,o=-.5*i),s&&e<360&&(o=-.5*i),{startOffset:a,extentOffset:o}}const O={base:"_1afh7ys",interactive:"_1nduqz6"},A={full:"_15ztyth",top:"ynuzjl",bottom:"_1vvb31q",right:"ji24kl",left:"_12drcwd",smtop:"_5wh48s",mdtop:"_1lwjiih",lgtop:"_18fdc1b",smbottom:"abzbpy",mdbottom:"_1oo308p",lgbottom:"_15j4p6k",smleft:"_19nx13d",mdleft:"es3f5t",lgleft:"zcjlo7",smright:"_1vpxnrc",mdright:"ojbn9f",lgright:"_1pf0fqu",smfull:"_1tclyk4",mdfull:"_19gzjck",lgfull:"dh3yiv",lgHorizontal:"_6ybbu1",lgVertical:"l0urw5",smHorizontal:"g6huxz",smVertical:"_1vkkfpq",mdHorizontal:"_1npirfd",mdVertical:"_1bapoji",smFull:"_19ayynl",mdFull:"_1csvp0u",lgFull:"_9latcf",centerContent:"pk01l5",thresholds:"a37caq"},M="_1s0q2k0",y={base:"gtujyg"},T={base:"_1j32dpu",sm:"fpy9zw",md:"r5eya1",lg:"mguuo8"},I={base:"_17121ek",full:"bpcu11",top:"_1rhlhu2",right:"_33au49",left:"ovc67o",bottom:"_1hwfzq2"};t.MeterCircle=function(t){var r,{max:o=100,min:u=0,value:g=0,step:b=1,size:R="lg",startAngle:v=90,angleExtent:$=360,isTrackRendered:P=!0,thresholdDisplay:k="all",indicatorSize:w=1}=t,N=e.__rest(t,["max","min","value","step","size","startAngle","angleExtent","isTrackRendered","thresholdDisplay","indicatorSize"]);c.validateRange(u,o,g,b);const{direction:q}=s.useUser(),S="rtl"===q,U=c.getCircleSection(v,$,S),D=i.useRef(p(null,U)),V=i.useRef(null),[F,B]=i.useState(!1);i.useEffect(()=>{(N.onCommit||N.onInput||N.children)&&(D.current=p(V.current,U),B(!0))},[R,N.onCommit,N.onInput,N.children]);const H=d.usePointerEvents(g,t=>{const e=V.current;if(t.target==e)return function(t,e,n,s,r,i,a,o,l){const u=r.current;if(!u)return;const d=c.getCenterCoord(o),{angle:h}=c.convertToPolar(u.width*d.x,u.height*d.y,t.offsetX,t.offsetY),f=c.getPositiveAngle(h);let m;if(l&&i+a>f&&(m=c.getPositiveAngle(h-i)/a*(n-e)),!l){const t=c.getPositiveAngle(i-f);t<=a&&(m=t*(n-e)/a)}return null!=m&&(m=Math.round(m/s)*s),m}(t,u,o,b,D,v,$,U,S)},V,N.onCommit,N.onInput),L=d.useKeyboardEvents(g,u,o,b,N.onCommit,N.onInput),{datatipContent:W,datatipProps:K}=d.useMeterDatatip(g,N.datatip,N.ariaDescribedBy),X=c.getMeterAriaProps(g,u,o,`${g}`,N.accessibleLabel,N.ariaLabelledBy,N.thresholds),Y=a.mergeProps(H,L,K,X),{trackColor:G,indicatorColor:J}=c.getTrackAndIndicatorColor(g,k,N.trackColor,N.indicatorColor,N.thresholds),Q="bottom"===U||"top"===U?"Horizontal":"left"===U||"right"===U?"Vertical":"Full",Z={min:u,max:o,value:g,startAngle:v,angleExtent:$,size:R,section:U,isRtl:S,innerRadius:D.current.innerRadius},tt=N.onCommit||N.onInput,{isTabbable:et}=h.useTabbableMode(),nt=function(t,e){const n=t.current;if(!n)return;const s=c.getCenterCoord(e),r=s.x*n.width,i=s.y*n.height;let a,o,l,u,d,h,f,m;return"top"===e||"bottom"===e||"full"===e?(f=2*n.innerRadius,m="full"===e?2*n.innerRadius:n.innerRadius,d=r-n.innerRadius,h="bottom"===e?0:i-n.innerRadius,l=Math.sqrt(2)*n.innerRadius,u="full"===e?l:n.innerRadius/Math.sqrt(2),a=r-n.innerRadius/Math.sqrt(2),o="bottom"===e?0:i-n.innerRadius/Math.sqrt(2)):(m=2*n.innerRadius,f=n.innerRadius,d="left"===e?r-n.innerRadius:0,h=i-n.innerRadius,u=Math.sqrt(2)*n.innerRadius,l=n.innerRadius/Math.sqrt(2),a="left"===e?r-n.innerRadius/Math.sqrt(2):0,o=i-n.innerRadius/Math.sqrt(2)),{outerBounds:{x:d,y:h,width:f,height:m},innerBounds:{x:a,y:o,width:l,height:u}}}(D,U);return n.jsxs(n.Fragment,{children:[n.jsx("div",Object.assign({class:f.classNames([O.base,tt?O.interactive:""]),tabIndex:et?0:-1,role:"slider"},Y,{children:n.jsxs(l.CircleWrapper,Object.assign({ref:V,class:f.classNames([y.base,N.referenceLines&&N.referenceLines.length>0?A[`${R}${U}`]:"",A[`${R}${Q}`]])},{children:[n.jsx(l.CircleInner,Object.assign({class:f.classNames([T.base,A[U]])},E(Z,P,k,G,N.innerRadius,N.thresholds))),"all"===k&&N.thresholds&&C(Z,N.thresholds,P,G,N.innerRadius).map(t=>n.jsx(l.CircleInner,Object.assign({class:f.classNames([T.base,A[U],A.thresholds])},t))),n.jsx(l.CircleInner,Object.assign({color:J,class:f.classNames([I.base,I[U],A[U]])},z(Z,w,N.innerRadius))),null===(r=N.referenceLines)||void 0===r?void 0:r.map(t=>n.jsx(m,Object.assign({},function(t,e,n){const{min:s,max:r,startAngle:i,angleExtent:a,size:o,isRtl:l}=t;return{radius:_(o,n),length:j(o,n),angle:x(e.value,s,r,i,a,l),color:e.color}}(Z,t,N.innerRadius),{section:U}))),F&&N.children&&nt&&n.jsx("div",Object.assign({class:f.classNames([A.centerContent,M])},{children:N.children(nt)}))]}))})),W]})}});
//# sourceMappingURL=MeterCircle-5b84fd3d.js.map
