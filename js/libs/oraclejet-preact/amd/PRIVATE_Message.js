define(["exports","preact/jsx-runtime","css!./PRIVATE_Message.css","preact/hooks","./UNSAFE_Flex","./utils/PRIVATE_timer","./utils/UNSAFE_classNames","./MessageCloseButton-80019999","./classNames-f11010a7","./MessageDetail-520bf217","./MessageFormattingUtils-522eafdf","./MessageStartIcon-f0caac42","./MessageSummary-1fe58d25","./MessageTimestamp-0324ebac","./MessageUtils-83d741c6","./Flex-e3a46a36","./MessagesManager-92a31926","./Message.types-7cf67e6b","./tslib.es6-24bf3861","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./_curry1-f9717f1c","./utils/UNSAFE_mergeInterpolations","./_curry3-01167a7d","./_curry2-c4648b65","./_has-6f4fa2af","./utils/UNSAFE_interpolations/boxalignment","./keys-6231193b","./utils/UNSAFE_interpolations/flexbox","./flexbox-b6c222f9","./utils/UNSAFE_interpolations/flexitem","./flexitem-1405ebe5","./UNSAFE_Button","./Button-6236e6b9","./UNSAFE_BaseButton","./BaseButton-6b15cf96","./hooks/UNSAFE_usePress","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useActive","preact/compat","./utils/PRIVATE_clientHints","./clientHints-33be1380","./hooks/UNSAFE_useTabbableMode","preact","./utils/UNSAFE_mergeProps","./index-c7f647a1","./index-72f6069b","./UNSAFE_Icon","./Icon-7291b5d0","./hooks/UNSAFE_useTooltip","./hooks/UNSAFE_useId","./UNSAFE_Floating","./Floating-1e70bca1","./index-66b69d43","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useAnimation","./useAnimation-19a01c68","./hooks/UNSAFE_useTheme","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-b9c2724c","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./PRIVATE_TransitionGroup","./hooks/UNSAFE_useMessagesContext"],function(e,s,t,a,n,o,r,i,l,c,u,d,g,m,b,_,S,f,E,F,A,U,p,N,x,v,y,M,h,j,k,T,I,B,C,R,V,O,P,w,D,H,L,W,q,z,G,K,J,Q,X,Y,Z,$,ee,se,te,ae,ne,oe,re,ie,le,ce,ue,de,ge,me,be,_e,Se,fe,Ee,Fe){"use strict";const Ae="_5ateob",Ue="_1cxrra7";function pe({item:e,renderer:t}){const a=l.classNames([Ae,Ue]);return s.jsx("div",Object.assign({class:a,role:"presentation"},{children:t(e)}))}const Ne={base:"_1lb6mre",banner:"_1y24vcj",inline:void 0,toast:"_8bdys"};function xe({children:e,variant:t="banner"}){const a=l.classNames([Ne.base,Ne[t]]);return s.jsx("div",Object.assign({role:"presentation",class:a},{children:e}))}function ve(e){return u.isValidValueForProp(e,"severity")&&"none"!==e}const ye={base:{banner:"_1wyk4po",toast:"jd72w2"},section:"xrwqjs",content:{base:"_1h83m38",banner:"_1uf8ds4",toast:"a67b90"}};e.MessageCloseButton=i.MessageCloseButton,e.MessageDetail=c.MessageDetail,e.formatTimestamp=u.formatTimestamp,e.isValidValueForProp=u.isValidValueForProp,e.MessageStartIcon=d.MessageStartIcon,e.MessageSummary=g.MessageSummary,e.MessageTimestamp=m.MessageTimestamp,e.getRenderer=b.getRenderer,e.getRendererWithoutIndex=b.getRendererWithoutIndex,e.isSeverityIconNeeded=b.isSeverityIconNeeded,e.playSound=b.playSound,e.severityBasedStyleClass=b.severityBasedStyleClass,e.throwError=b.throwError,e.MessagesManager=S.MessagesManager,e.severities=f.severities,e.Message=function({closeButtonRenderer:e,detailRenderer:t,iconRenderer:n,index:r=-1,item:S,onClose:f,messageRef:E=(()=>{}),variant:F="pageBanner",translations:A}){const{closeAffordance:U="on",severity:p="error",sound:N,summary:x,timestamp:v}=S.data,{autoTimeout:y="off"}=S.data,M=function(e){return"pageBanner"===e||"sectionBanner"===e?"banner":"toast"}(F),h=a.useCallback(()=>{null==f||f(S)},[S,f]),j=a.useCallback(e=>{"Escape"===e.key&&"on"===U&&(null==f||f(S))},[U,S,f]),k="toast"===M&&"off"!==y,T=a.useRef(),I="on"===y?5e3:"number"==typeof y?y:5e3,B=a.useCallback(()=>{T.current||(T.current=new o.Timer(h,I))},[h,I]),C=a.useCallback(()=>{T.current&&(T.current.clear(),T.current=void 0)},[]),R=a.useCallback(()=>{var e;null===(e=T.current)||void 0===e||e.pause()},[]),V=a.useCallback(()=>{var e;null===(e=T.current)||void 0===e||e.resume()},[]);a.useEffect(()=>(u.isValidValueForProp(N)&&b.playSound(N),k&&B(),()=>{C()}),[]);const O=l.classNames([ye.base[M],"toast"!==F&&b.severityBasedStyleClass(p,M),"sectionBanner"===F&&ye.section]),P=l.classNames([ye.content.base,ye.content[M]]);return s.jsx("div",Object.assign({ref:E,class:O,role:"alert","aria-atomic":"true",tabIndex:0,onKeyUp:j,onfocusin:R,onfocusout:V},{children:s.jsxs("div",Object.assign({class:P},{children:[n?s.jsx(pe,{item:Object.assign(Object.assign({},S),{index:r}),renderer:n}):ve(p)?s.jsx(d.MessageStartIcon,{severity:p,variant:M,translations:A}):null,s.jsxs(_.Flex,Object.assign({direction:"column",flex:"1",gap:"--oj-c-PRIVATE-DO-NOT-USE-core-spacing-2x"},{children:[s.jsxs(xe,Object.assign({variant:M},{children:[s.jsx(g.MessageSummary,{variant:M,text:x}),u.isValidValueForProp(v,"timestamp")&&"toast"!==F&&s.jsx(m.MessageTimestamp,{variant:M,value:v})]})),s.jsx(c.MessageDetail,{variant:M,item:Object.assign(Object.assign({},S),{index:r}),renderer:t})]})),"on"===U&&s.jsx(i.MessageCloseButton,{buttonRenderer:e,title:null==A?void 0:A.close,variant:M,onAction:h})]}))}))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_Message.js.map