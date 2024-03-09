define(["exports","preact/jsx-runtime","preact/hooks","./hooks/PRIVATE_useMessagesFocusManager","./PRIVATE_Message","./UNSAFE_Flex","./UNSAFE_LiveRegion","./Flex-e3a46a36","./MessagesManager-92a31926","./MessageUtils-83d741c6",'module',"./utils/PRIVATE_timer","./utils/UNSAFE_classNames","./classNames-f11010a7","./MessageCloseButton-80019999","./UNSAFE_Button","./Button-6236e6b9","./UNSAFE_BaseButton","./BaseButton-6b15cf96","./tslib.es6-24bf3861","./hooks/UNSAFE_usePress","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useActive","preact/compat","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./_curry1-f9717f1c","./utils/UNSAFE_mergeInterpolations","./_curry3-01167a7d","./_curry2-c4648b65","./_has-6f4fa2af","./utils/PRIVATE_clientHints","./clientHints-33be1380","./hooks/UNSAFE_useTabbableMode","preact","./utils/UNSAFE_mergeProps","./index-c7f647a1","./index-72f6069b","./UNSAFE_Icon","./Icon-7291b5d0","./hooks/UNSAFE_useTooltip","./hooks/UNSAFE_useId","./UNSAFE_Floating","./Floating-1e70bca1","./index-66b69d43","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useAnimation","./useAnimation-19a01c68","./hooks/UNSAFE_useTheme","./MessageDetail-520bf217","./MessageFormattingUtils-522eafdf","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-b9c2724c","./Message.types-7cf67e6b","./MessageStartIcon-f0caac42","./MessageSummary-1fe58d25","./MessageTimestamp-0324ebac","./utils/UNSAFE_interpolations/boxalignment","./keys-6231193b","./utils/UNSAFE_interpolations/flexbox","./flexbox-b6c222f9","./utils/UNSAFE_interpolations/flexitem","./flexitem-1405ebe5","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./PRIVATE_TransitionGroup","./hooks/UNSAFE_useMessagesContext"],function(e,s,t,n,o,i,a,l,r,u,c,g,d,f,h,_,F,A,E,U,S,m,N,b,x,v,p,k,M,R,y,T,I,j,H,B,P,C,w,O,V,L,z,$,D,G,K,W,q,J,Q,X,Y,Z,ee,se,te,ne,oe,ie,ae,le,re,ue,ce,ge,de,fe,he,_e,Fe,Ae,Ee,Ue,Se,me,Ne){"use strict";const be={entering:e=>({to:{maxHeight:`${e.scrollHeight}px`,overflow:"hidden"},options:{duration:250},end:{maxHeight:"none",overflow:"initial"}}),exiting:e=>Object.assign(Object.assign({},"none"===e.style.maxHeight&&{from:{maxHeight:`${e.scrollHeight}px`,overflow:"hidden"}}),{to:{maxHeight:0,overflow:"hidden"},end:{maxHeight:0,overflow:"hidden"},options:{duration:250}})},xe={maxHeight:0,overflow:"hidden"};e.MessageBanner=function({closeButtonRenderer:e,detailRendererKey:i,data:c,onClose:g,renderers:d,translations:f,type:h="section"}){const _=t.useRef(new Map),F=t.useRef(null),A=t.useRef(null),[E,U]=t.useState(),[S,m]=t.useState(c.length>0),N=t.useRef(c.length),b=t.useRef(0);N.current=c.length;const x=t.useCallback(e=>s=>_.current.set(e,s),[]);t.useImperativeHandle(A,()=>({focus:()=>{var e;if(c.length){const s=c[0].key;return null===(e=_.current.get(s))||void 0===e||e.focus(),!0}return!1},contains:e=>{var s,t;return!(!c.length||!e)&&(null!==(t=null===(s=F.current)||void 0===s?void 0:s.contains(e))&&void 0!==t&&t)}}),[c]);const{controller:v,handlers:p}=n.useMessageFocusManager(A,{onFocus:t.useCallback(()=>{U(null==f?void 0:f.navigationFromMessagesRegion)},[U,f])}),k=t.useCallback(e=>{null==g||g(e)},[g]),M=t.useCallback((e,s,t)=>{var n;const o=null==t?void 0:t.contains(document.activeElement);if(0===N.current)return m(!1),void(o&&v.restorePriorFocus());const i=s+1<c.length?s+1:s-1;if(i>-1&&o){const e=c[i].key;null===(n=_.current.get(e))||void 0===n||n.focus()}},[v,c]);return t.useEffect(()=>{c.length?(m(!0),c.length>b.current&&U(null==f?void 0:f.navigationToMessagesRegion),v.prioritize()):U(""),b.current=c.length},[v,c,f]),S||0!==c.length?s.jsx("div",Object.assign({ref:F,class:"oj-c-messagebanner",tabIndex:-1},p,{children:s.jsxs(l.Flex,Object.assign({direction:"column",gap:"section"===h?"1x":void 0},{children:[s.jsx(r.MessagesManager,Object.assign({animationStates:be,initialAnimationStyles:xe,data:c,onMessageWillRemove:M},{children:({index:t,item:n})=>s.jsx(o.Message,{messageRef:x(n.key),item:n,closeButtonRenderer:e,detailRenderer:u.getRenderer(n,i,d),index:t,variant:"page"===h?"pageBanner":"sectionBanner",onClose:k,translations:f},n.key)})),s.jsx(a.LiveRegion,{children:E})]}))})):null},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_MessageBanner.js.map
