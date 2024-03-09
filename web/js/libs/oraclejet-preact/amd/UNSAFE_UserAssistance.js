define(["exports","preact/jsx-runtime","css!./UNSAFE_UserAssistance.css","./InlineHelpSource-64823c0a","./utils/UNSAFE_classNames","./hooks/UNSAFE_useTranslationBundle","./classNames-f11010a7","./UNSAFE_ComponentMessage","./hooks/UNSAFE_useFormContext","./hooks/UNSAFE_useFormFieldContext","./ComponentMessageContainer-329000c3","./hooks/UNSAFE_useTabbableMode","preact","preact/hooks","./UNSAFE_Environment","./UNSAFE_Layer","preact/compat","./ComponentMessage-998dad2a","./PRIVATE_Message","./UNSAFE_Flex","./Flex-e3a46a36","./tslib.es6-24bf3861","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./_curry1-f9717f1c","./utils/UNSAFE_mergeInterpolations","./_curry3-01167a7d","./_curry2-c4648b65","./_has-6f4fa2af","./utils/UNSAFE_interpolations/boxalignment","./keys-6231193b","./utils/UNSAFE_interpolations/flexbox","./flexbox-b6c222f9","./utils/UNSAFE_interpolations/flexitem","./flexitem-1405ebe5","./utils/PRIVATE_timer","./MessageCloseButton-80019999","./UNSAFE_Button","./Button-6236e6b9","./UNSAFE_BaseButton","./BaseButton-6b15cf96","./hooks/UNSAFE_usePress","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useActive","./utils/PRIVATE_clientHints","./clientHints-33be1380","./utils/UNSAFE_mergeProps","./index-c7f647a1","./index-72f6069b","./UNSAFE_Icon","./Icon-7291b5d0","./hooks/UNSAFE_useTooltip","./hooks/UNSAFE_useId","./UNSAFE_Floating","./Floating-1e70bca1","./index-66b69d43","./hooks/UNSAFE_useUser","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useAnimation","./useAnimation-19a01c68","./hooks/UNSAFE_useTheme","./MessageDetail-520bf217","./MessageFormattingUtils-522eafdf","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-b9c2724c","./Message.types-7cf67e6b","./MessageStartIcon-f0caac42","./MessageSummary-1fe58d25","./MessageTimestamp-0324ebac","./MessageUtils-83d741c6","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./MessagesManager-92a31926","./PRIVATE_TransitionGroup","./hooks/UNSAFE_useMessagesContext","./UNSAFE_HiddenAccessible","./HiddenAccessible-cc2e72c9"],function(e,s,n,t,i,o,a,l,r,c,u,A,_,F,d,U,S,E,N,g,f,h,x,m,b,p,k,T,j,I,M,C,v,y,H,B,P,R,L,O,V,q,w,D,z,G,J,K,Q,W,X,Y,Z,$,ee,se,ne,te,ie,oe,ae,le,re,ce,ue,Ae,_e,Fe,de,Ue,Se,Ee,Ne,ge,fe,he,xe,me,be,pe,ke,Te,je,Ie){"use strict";function Me({assistiveText:e,sourceLink:n,sourceText:i}){return s.jsxs("div",{children:[e&&n?s.jsx("span",Object.assign({class:"t9g4qh"},{children:e})):e,n&&s.jsx(t.InlineHelpSource,Object.assign({source:n},{children:i}))]})}const Ce={start:"_1ng7495",end:"_1nnl4lr"};function ve({align:e="end",hasHelp:n=!1,hasMessages:t=!1}){const i=a.classNames([Ce[e],(n||t)&&"jixuht"]),l=o.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_required();return s.jsx("div",Object.assign({class:i},{children:l}))}const ye={reflow:"mpjrhm",efficient:"e0xnke"};function He({variant:e="reflow",children:n,id:t}){const i=a.classNames(["s03slk",ye[e]]);return s.jsx("div",Object.assign({class:i,id:t},{children:n}))}e.InlineHelpSource=t.InlineHelpSource,e.InlineHelp=Me,e.InlineRequired=ve,e.InlineUserAssistance=function({assistiveText:e,fieldLabel:n,helpSourceLink:t,helpSourceText:i,id:o,isRequiredShown:a,messages:l=[],userAssistanceDensity:A}){const{isReadonly:_}=r.useFormContext(),F="efficient"===A&&!1===_,{isFocused:d}=c.useFormFieldContext(),U=l.length>0?s.jsx(u.ComponentMessageContainer,{fieldLabel:n,messages:l}):(e||t)&&d?s.jsx(Me,{assistiveText:e,sourceLink:t,sourceText:i}):a?s.jsx(ve,{}):null;return U||F?s.jsx(He,Object.assign({id:o,variant:A},{children:U})):null},e.InlineUserAssistanceContainer=He,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_UserAssistance.js.map