define(["exports","./tslib.es6-24bf3861","preact/jsx-runtime","preact","preact/hooks","css!./UNSAFE_RatingGauge.css","./utils/UNSAFE_classNames","./utils/PRIVATE_meterUtils","./classNames-f11010a7","./hooks/UNSAFE_useUser","./hooks/UNSAFE_useTooltip","./utils/UNSAFE_mergeProps","./hooks/UNSAFE_useTabbableMode","./utils/UNSAFE_dvtCommonUtils","./UNSAFE_Environment","./UNSAFE_Layer","preact/compat","./hooks/UNSAFE_useId","./UNSAFE_Floating","./Floating-1e70bca1","./index-66b69d43","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./utils/UNSAFE_arrayUtils","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useAnimation","./useAnimation-19a01c68"],function(e,s,t,o,a,l,i,r,n,c,d,u,b,h,p,m,v,g,x,_,y,f,A,E,U,w,R,j,k,N,D){"use strict";function S(e,s,t,o,a){const l=o.current;if(!l||0===l.width)return-1;const i=e-l.x,r=s*(a?l.width-i:i)/l.width/t;return r<.5?0:Math.ceil(r)*t}function C(e){if(!e)return{width:0,x:0};const s=e.getBoundingClientRect();return{width:Math.round(s.width),x:Math.round(s.x+window.scrollX)}}const F=({isSelected:e,isDisabled:s,isReadOnly:o,color:a})=>{const l=`${e?"selected":"unselected"}${s&&"Disabled"||o&&"Readonly"||""}`,i=T[`${l}Color`],r=T[`${l}BorderColor`],c=function(e){return"neutral"===e||"gold"===e||"danger"===e||"warning"===e||"success"===e}(a),d=c?void 0:{"--oj-c-PRIVATE-DO-NOT-USE-rating-gauge-color-selected":a,"--oj-c-PRIVATE-DO-NOT-USE-rating-gauge-border-color-selected":a,"--oj-c-PRIVATE-DO-NOT-USE-rating-gauge-color-selected-readonly":a};return t.jsx("svg",Object.assign({viewBox:"0 0 36 36",height:"100%",width:"100%",style:d,class:n.classNames([T.base,c?`oj-c-rating-gauge-${a}`:""])},{children:t.jsxs("g",{children:[t.jsx("path",{class:i,d:"m18 1 5.0061 11.9524 12.9939 1.0344-9.9 8.4215 3.0246 12.5917-11.1246-6.7476-11.12461 6.7476 3.02461-12.5917-9.9-8.4215 12.9939-1.0344z"}),t.jsx("path",{class:r,d:"m23.0061 12.9524-5.0061-11.9524-5.0061 11.9524-12.9939 1.0344 9.9 8.4215-3.02461 12.5917 11.12461-6.7476 11.1246 6.7476-3.0246-12.5917 9.9-8.4215zm10.5043 1.8394-8.5262 7.2528 2.6077 10.8562-9.5919-5.818-9.59192 5.818 2.60772-10.8562-8.52615-7.2528 11.19115-.891 4.3192-10.31227 4.3192 10.31227z"})]})}))},T={base:"_17h6y8w",selectedColor:"_7rdrrr",selectedBorderColor:"_1j9g7lx",unselectedColor:"_1f8sr3k",unselectedBorderColor:"_2itn52",selectedReadonlyColor:"_110k282",selectedReadonlyBorderColor:"_19wwlqd",unselectedReadonlyColor:"_6xd6bl",unselectedReadonlyBorderColor:"_81k7av",selectedDisabledColor:"_1egwk90",unselectedDisabledColor:"_1k2zvvd",selectedDisabledBorderColor:"_1prywxc",unselectedDisabledBorderColor:"lp1eqj"},P=({fillRatio:e,isDisabled:s,isReadonly:a,color:l})=>{const{direction:i}=c.useUser(),r="rtl"===i;return 1===e||0===e?t.jsx(F,{isSelected:1===e,isDisabled:s,isReadOnly:a,color:l}):t.jsxs(o.Fragment,{children:[t.jsx("div",Object.assign({class:M.base,style:{clipPath:`inset(0% ${r?100*(1-e):0}% 0% ${r?0:100*e}%)`}},{children:t.jsx(F,{isSelected:!1,isDisabled:s,isReadOnly:a,color:l})})),t.jsx("div",Object.assign({class:M.base,style:{clipPath:`inset(0% ${r?0:100*(1-e)}% 0% ${r?100*(1-e):0}%)`}},{children:t.jsx(F,{isSelected:!0,isDisabled:s,isReadOnly:a,color:l})}))]})},M={base:"_1ltw9v5"};const O={base:"_19ti6yc",interactive:"f2xld3",lg:"_1kkf6ql",md:"_11eh75u",sm:"_1ve1ucv",item:"vqcar6"};e.RatingGauge=function(e){var{max:l=5,value:i=0,size:h="md",color:p="neutral",step:m=1,isReadonly:v,isDisabled:g}=e,x=s.__rest(e,["max","value","size","color","step","isReadonly","isDisabled"]);const _=a.useRef(null),y=a.useRef(C(null)),f=!v&&!g;a.useEffect(()=>{y.current=C(_.current)},[h,l]);const A=((e,s,t,o,l,i,r,n)=>{const d=a.useRef(),{direction:u}=c.useUser();if(!i)return{};const b="rtl"===u,h=e=>{null==n||n({value:e}),d.current=e},p=e=>{e.preventDefault(),e.stopPropagation()};return{onPointerUp:t=>{const o=S(t.pageX,e,s,l,b);-1!==o&&(null==r||r({value:o}))},onBlur:()=>{null==r||r({value:t})},onPointerMove:t=>{const o=S(t.pageX,e,s,l,b);-1!==o&&o!=d.current&&h(o)},onKeyUp:s=>{switch(s.key){case"Enter":null==r||r({value:t});break;case"Tab":h(t);break;case"Home":h(0);break;case"End":h(e)}p(s)},onKeyDown:o=>{switch(o.key){case"Tab":return;case"ArrowDown":h(Math.max(0,t-s));break;case"ArrowUp":h(Math.min(e,t+s));break;case"ArrowLeft":{const o=b?Math.min(e,t+s):Math.max(0,t-s);h(o);break}case"ArrowRight":{const o=b?Math.max(0,t-s):Math.min(e,t+s);h(o);break}}p(o)},onPointerLeave:()=>{h(void 0)},onPointerEnter:()=>{l.current=C(o.current)}}})(l,m,i,_,y,f,x.onCommit,x.onInput),{tooltipContent:E,tooltipProps:U}=function({max:e,value:s,isReadonly:t,isDisabled:o,tooltip:l,datatip:i,thresholds:n,ariaDescribedBy:c,width:u}){var b;const[h,p]=a.useState(!1),m=t&&!o?"tooltip":"datatip";let v=o||!("tooltip"===m&&l||"datatip"===m&&i);const g=Math.max(1,Math.ceil(s)),x="tooltip"===m?0:(g-Math.ceil(e/2))*u/e;let _="tooltip"===m?l:i;_||!n||o||(_=null===(b=r.findThreshold(s,n))||void 0===b?void 0:b.accessibleLabel,v=!1);const{tooltipContent:y,tooltipProps:f}=d.useTooltipControlled({text:_,isOpen:h,anchor:{x:"element",y:"element"},position:"bottom",offset:{mainAxis:8,crossAxis:x},isDisabled:v,onToggle:({value:e})=>p(e),variant:m});return f["aria-describedby"]=[c,f["aria-describedby"]].filter(Boolean).join(" "),{tooltipContent:y,tooltipProps:f}}({max:l,value:i,isReadonly:v,isDisabled:g,tooltip:x.tooltip,datatip:x.datatip,thresholds:x.thresholds,width:y.current.width,ariaDescribedBy:x.ariaDescribedBy}),w=function(e,s,t,o,a,l,i,n){const c=r.findThreshold(e,i);return{"aria-label":t||(n&&l&&!a?n:void 0),"aria-valuenow":`${e}`,"aria-valuetext":(null==c?void 0:c.accessibleLabel)?`${e} ${c.accessibleLabel}`:`${e}`,"aria-valuemax":`${s}`,"aria-labelledby":o,"aria-disabled":!!a||void 0,"aria-readonly":!(!l||a)||void 0,"aria-valuemin":"0",role:"slider"}}(i,l,x.accessibleLabel,x.ariaLabelledBy,g,v,x.thresholds,x.tooltip),R=u.mergeProps(A,U);p=r.getThresholdColorFromValue(i,p,x.thresholds);const{isTabbable:j}=b.useTabbableMode();return t.jsxs(o.Fragment,{children:[t.jsx("div",Object.assign({},w,{ref:_,class:n.classNames([O.base,f?O.interactive:void 0]),tabIndex:j&&!g?0:-1},R,{children:[...Array(l)].map((e,s)=>{const o=Math.min(Math.max(0,i-s),1);return t.jsx("div",Object.assign({className:n.classNames([O[h],O.item])},{children:t.jsx(P,{fillRatio:o,isDisabled:g,isReadonly:v,color:p})}))})})),E]})},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_RatingGauge.js.map