define(["require","preact/jsx-runtime","@testing-library/preact","chai","../../UNSAFE_InputPassword","../../UNSAFE_Environment","../../utils/UNSAFE_matchTranslationBundle","preact/compat","preact/hooks","../../hooks/UNSAFE_useFocusableTextField","../../tslib.es6-24bf3861","../../hooks/UNSAFE_useFocusWithin","../../useFocusWithin-35862d6c","../../hooks/UNSAFE_useFormContext","preact","../../hooks/UNSAFE_useFormFieldContext","../../hooks/UNSAFE_useTextField","../../hooks/UNSAFE_useId","../../hooks/UNSAFE_useHover","../../hooks/UNSAFE_useToggle","../../UNSAFE_Label","../../utils/UNSAFE_classNames","../../classNames-f11010a7","css!./../../UNSAFE_InputPassword.css","../../UNSAFE_TextField","../../ReadonlyTextFieldInput-35c69ee9","../../hooks/UNSAFE_useTabbableMode","../../utils/UNSAFE_interpolations/text","../../keys-6231193b","../../_curry1-f9717f1c","../../_has-6f4fa2af","../../utils/UNSAFE_mergeInterpolations","../../_curry3-01167a7d","../../_curry2-c4648b65","../../FormControlUtils-9994f9d8","../../hooks/UNSAFE_useTranslationBundle","../../UNSAFE_Layer","../../UNSAFE_LabelValueLayout","../../UNSAFE_Flex","../../Flex-e3a46a36","../../utils/UNSAFE_interpolations/dimensions","../../utils/UNSAFE_arrayUtils","../../utils/UNSAFE_size","../../utils/UNSAFE_interpolations/boxalignment","../../utils/UNSAFE_interpolations/flexbox","../../flexbox-b6c222f9","../../utils/UNSAFE_interpolations/flexitem","../../flexitem-1405ebe5","../../TextFieldInput-9e3759b7","../../hooks/UNSAFE_useTextFieldInputHandlers","../../utils/PRIVATE_clientHints","../../clientHints-33be1380","../../hooks/UNSAFE_useDebounce","../../UNSAFE_LiveRegion","../../UNSAFE_UserAssistance","../../InlineHelpSource-64823c0a","../../UNSAFE_ComponentMessage","../../ComponentMessage-998dad2a","../../PRIVATE_Message","../../utils/PRIVATE_timer","../../MessageCloseButton-80019999","../../UNSAFE_Button","../../Button-6236e6b9","../../UNSAFE_BaseButton","../../BaseButton-6b15cf96","../../hooks/UNSAFE_usePress","../../hooks/UNSAFE_useActive","../../utils/UNSAFE_mergeProps","../../index-c7f647a1","../../index-72f6069b","../../UNSAFE_Icon","../../Icon-7291b5d0","../../hooks/UNSAFE_useTooltip","../../UNSAFE_Floating","../../Floating-1e70bca1","../../index-66b69d43","../../hooks/UNSAFE_useUser","../../utils/PRIVATE_floatingUtils","../../utils/PRIVATE_refUtils","../../hooks/UNSAFE_useOutsideClick","../../hooks/UNSAFE_useFocus","../../hooks/UNSAFE_useTouch","../../hooks/UNSAFE_useAnimation","../../useAnimation-19a01c68","../../hooks/UNSAFE_useTheme","../../MessageDetail-520bf217","../../MessageFormattingUtils-522eafdf","../../utils/UNSAFE_getLocale","../../utils/UNSAFE_stringUtils","../../stringUtils-b9c2724c","../../Message.types-7cf67e6b","../../MessageStartIcon-f0caac42","../../MessageSummary-1fe58d25","../../MessageTimestamp-0324ebac","../../MessageUtils-83d741c6","../../utils/UNSAFE_logger","../../utils/UNSAFE_soundUtils","../../MessagesManager-92a31926","../../PRIVATE_TransitionGroup","../../hooks/UNSAFE_useMessagesContext","../../UNSAFE_HiddenAccessible","../../HiddenAccessible-cc2e72c9","../../ComponentMessageContainer-329000c3","../../hooks/UNSAFE_useClearIcon","../../utils/UNSAFE_componentUtils","../../ClearIcon-af60dbf1","../../hooks/UNSAFE_useCurrentValueReducer"],function(e,s,n,r,u,o,t,l,c,i,a,d,b,f,m,F,A,U,_,E,P,S,w,N,h,p,k,g,T,x,I,C,y,M,v,B,H,R,L,V,j,X,q,z,D,O,W,G,$,J,K,Q,Y,Z,ee,se,ne,re,ue,oe,te,le,ce,ie,ae,de,be,fe,me,Fe,Ae,Ue,_e,Ee,Pe,Se,we,Ne,he,pe,ke,ge,Te,xe,Ie,Ce,ye,Me,ve,Be,He,Re,Le,Ve,je,Xe,qe,ze,De,Oe,We,Ge,$e,Je,Ke,Qe,Ye){"use strict";async function Ze(){const s=t.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:n}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar/bundle"],s,n)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar-XB/bundle"],s,n)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bg/bundle"],s,n)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs/bundle"],s,n)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs-Cyrl/bundle"],s,n)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/cs/bundle"],s,n)});case"../../resources/nls/da/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/da/bundle"],s,n)});case"../../resources/nls/de/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/de/bundle"],s,n)});case"../../resources/nls/el/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/el/bundle"],s,n)});case"../../resources/nls/en/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en/bundle"],s,n)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XA/bundle"],s,n)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XC/bundle"],s,n)});case"../../resources/nls/es/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/es/bundle"],s,n)});case"../../resources/nls/et/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/et/bundle"],s,n)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fi/bundle"],s,n)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr/bundle"],s,n)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr-CA/bundle"],s,n)});case"../../resources/nls/he/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/he/bundle"],s,n)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hr/bundle"],s,n)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hu/bundle"],s,n)});case"../../resources/nls/is/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/is/bundle"],s,n)});case"../../resources/nls/it/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/it/bundle"],s,n)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ja/bundle"],s,n)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ko/bundle"],s,n)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lt/bundle"],s,n)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lv/bundle"],s,n)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ms/bundle"],s,n)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/nl/bundle"],s,n)});case"../../resources/nls/no/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/no/bundle"],s,n)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pl/bundle"],s,n)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt/bundle"],s,n)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt-PT/bundle"],s,n)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ro/bundle"],s,n)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ru/bundle"],s,n)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sk/bundle"],s,n)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sl/bundle"],s,n)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr/bundle"],s,n)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr-Latn/bundle"],s,n)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sv/bundle"],s,n)});case"../../resources/nls/th/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/th/bundle"],s,n)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/tr/bundle"],s,n)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/uk/bundle"],s,n)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/vi/bundle"],s,n)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hans/bundle"],s,n)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hant/bundle"],s,n)});default:return new Promise(function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}(`../../resources/nls/${s}/bundle.ts`);return{translations:{"@oracle/oraclejet-preact":n}}}const es=()=>{};describe("Test InputPassword component",()=>{describe("Test InputPassword translation bundle",()=>{it("render",async()=>{const e=await Ze(),t=n.render(s.jsx(o.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(u.InputPassword,{label:"Test Label",onInput:es})}))).container.querySelector("button");r.expect(t.getAttribute("aria-label")).equals("Password Hidden")})})})});
//# sourceMappingURL=InputPassword.spec.js.map