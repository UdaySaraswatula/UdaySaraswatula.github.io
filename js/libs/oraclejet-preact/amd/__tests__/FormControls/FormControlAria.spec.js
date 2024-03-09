define(["require","preact/jsx-runtime","@testing-library/preact","preact/hooks","chai","../../UNSAFE_InputPassword","../../UNSAFE_Environment","../../utils/UNSAFE_matchTranslationBundle","../../UNSAFE_InputText","../../UNSAFE_NumberInputText","../../UNSAFE_TextArea","../../UNSAFE_TextAreaAutosize","../../UNSAFE_SelectMultiple","../../UNSAFE_SelectSingle","../../TextArea-34a5b07c","../../TextAreaAutosize-db3c4619","../../SelectMultiple-dbf78e8a","../../SelectSingle-23b59c0d","../../NumberInputText-05cc2405","preact/compat","../../hooks/UNSAFE_useFocusableTextField","../../tslib.es6-24bf3861","../../hooks/UNSAFE_useFocusWithin","../../useFocusWithin-35862d6c","../../hooks/UNSAFE_useFormContext","preact","../../hooks/UNSAFE_useFormFieldContext","../../hooks/UNSAFE_useTextField","../../hooks/UNSAFE_useId","../../hooks/UNSAFE_useHover","../../hooks/UNSAFE_useToggle","../../UNSAFE_Label","../../utils/UNSAFE_classNames","../../classNames-f11010a7",'module',"../../UNSAFE_TextField","../../ReadonlyTextFieldInput-35c69ee9","../../hooks/UNSAFE_useTabbableMode","../../utils/UNSAFE_interpolations/text","../../keys-6231193b","../../_curry1-f9717f1c","../../_has-6f4fa2af","../../utils/UNSAFE_mergeInterpolations","../../_curry3-01167a7d","../../_curry2-c4648b65","../../FormControlUtils-9994f9d8","../../hooks/UNSAFE_useTranslationBundle","../../UNSAFE_Layer","../../UNSAFE_LabelValueLayout","../../UNSAFE_Flex","../../Flex-e3a46a36","../../utils/UNSAFE_interpolations/dimensions","../../utils/UNSAFE_arrayUtils","../../utils/UNSAFE_size","../../utils/UNSAFE_interpolations/boxalignment","../../utils/UNSAFE_interpolations/flexbox","../../flexbox-b6c222f9","../../utils/UNSAFE_interpolations/flexitem","../../flexitem-1405ebe5","../../TextFieldInput-9e3759b7","../../hooks/UNSAFE_useTextFieldInputHandlers","../../utils/PRIVATE_clientHints","../../clientHints-33be1380","../../hooks/UNSAFE_useDebounce","../../UNSAFE_LiveRegion","../../UNSAFE_UserAssistance","../../InlineHelpSource-64823c0a","../../UNSAFE_ComponentMessage","../../ComponentMessage-998dad2a","../../PRIVATE_Message","../../utils/PRIVATE_timer","../../MessageCloseButton-80019999","../../UNSAFE_Button","../../Button-6236e6b9","../../UNSAFE_BaseButton","../../BaseButton-6b15cf96","../../hooks/UNSAFE_usePress","../../hooks/UNSAFE_useActive","../../utils/UNSAFE_mergeProps","../../index-c7f647a1","../../index-72f6069b","../../UNSAFE_Icon","../../Icon-7291b5d0","../../hooks/UNSAFE_useTooltip","../../UNSAFE_Floating","../../Floating-1e70bca1","../../index-66b69d43","../../hooks/UNSAFE_useUser","../../utils/PRIVATE_floatingUtils","../../utils/PRIVATE_refUtils","../../hooks/UNSAFE_useOutsideClick","../../hooks/UNSAFE_useFocus","../../hooks/UNSAFE_useTouch","../../hooks/UNSAFE_useAnimation","../../useAnimation-19a01c68","../../hooks/UNSAFE_useTheme","../../MessageDetail-520bf217","../../MessageFormattingUtils-522eafdf","../../utils/UNSAFE_getLocale","../../utils/UNSAFE_stringUtils","../../stringUtils-b9c2724c","../../Message.types-7cf67e6b","../../MessageStartIcon-f0caac42","../../MessageSummary-1fe58d25","../../MessageTimestamp-0324ebac","../../MessageUtils-83d741c6","../../utils/UNSAFE_logger","../../utils/UNSAFE_soundUtils","../../MessagesManager-92a31926","../../PRIVATE_TransitionGroup","../../hooks/UNSAFE_useMessagesContext","../../UNSAFE_HiddenAccessible","../../HiddenAccessible-cc2e72c9","../../ComponentMessageContainer-329000c3","../../hooks/UNSAFE_useClearIcon","../../utils/UNSAFE_componentUtils","../../ClearIcon-af60dbf1","../../hooks/UNSAFE_useCurrentValueReducer","../../hooks/UNSAFE_useLengthFilter","../../utils/UNSAFE_lengthFilter","../../hooks/UNSAFE_usePrefixSuffix","../../UNSAFE_PrefixSuffix","../../UNSAFE_Grid","../../utils/UNSAFE_interpolations/grid","../../hooks/UNSAFE_useLoadingIndicatorTimer","../../hooks/UNSAFE_useTimer","../../PRIVATE_SelectCommon","../../UNSAFE_HighlightText","../../HighlightText-f5e447be","../../PRIVATE_List","../../List-24031444","../../utils/UNSAFE_keys","../../LoadMoreCollection-d53c66bf","../../PRIVATE_Collection","../../Collection-0700cc46","../../hooks/UNSAFE_useViewportIntersect","../../PRIVATE_VirtualizedCollection","../../VirtualizedCollection-8523118a","../../UNSAFE_FocusTrap","../../FocusTrap-5a3a8c7d","../../utils/PRIVATE_tabbableUtils","../../hooks/PRIVATE_useSelection","../../hooks/PRIVATE_useCurrentKey","../../hooks/PRIVATE_useCollectionFocusRing","../../hooks/PRIVATE_useTabbableModeSet","../../hooks/PRIVATE_useItemAction","../../utils/PRIVATE_collectionUtils","../../UNSAFE_Skeleton","../../Skeleton-65cc3876","../../utils/UNSAFE_interpolations/borders","../../UNSAFE_Selector","../../UNSAFE_Chip","../../Chip-affe03d5","../../hooks/UNSAFE_useActionable"],function(e,s,n,t,r,o,i,l,a,u,c,d,b,m,x,p,A,y,f,h,v,S,g,E,T,F,_,U,N,P,w,I,j,k,R,D,B,C,q,M,V,$,L,W,O,z,H,X,G,K,J,Q,Y,Z,ee,se,ne,te,re,oe,ie,le,ae,ue,ce,de,be,me,xe,pe,Ae,ye,fe,he,ve,Se,ge,Ee,Te,Fe,_e,Ue,Ne,Pe,we,Ie,je,ke,Re,De,Be,Ce,qe,Me,Ve,$e,Le,We,Oe,ze,He,Xe,Ge,Ke,Je,Qe,Ye,Ze,es,ss,ns,ts,rs,os,is,ls,as,us,cs,ds,bs,ms,xs,ps,As,ys,fs,hs,vs,Ss,gs,Es,Ts,Fs,_s,Us,Ns,Ps,ws,Is,js,ks,Rs,Ds,Bs,Cs,qs,Ms,Vs,$s,Ls,Ws,Os,zs){"use strict";function Hs({ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:o,label:i="Test Label",messages:l,userAssistanceDensity:u}){const[c,d]=t.useState("hello"),b=t.useCallback(e=>{var s;d(null!==(s=e.value)&&void 0!==s?s:"")},[]);return s.jsx(s.Fragment,{children:s.jsx(a.InputText,{ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:o,label:i,messages:l,onInput:b,userAssistanceDensity:u,value:c})})}function Xs({ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:o,label:i="Test Label",messages:l,userAssistanceDensity:a}){const[u,c]=t.useState("hello"),d=t.useCallback(e=>{var s;c(null!==(s=e.value)&&void 0!==s?s:"")},[]);return s.jsx(s.Fragment,{children:s.jsx(x.TextArea,{ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:o,label:i,messages:l,onInput:d,userAssistanceDensity:a,value:u})})}function Gs({ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:o,label:i="Test Label",messages:l,userAssistanceDensity:a}){const[u,c]=t.useState("hello"),d=t.useCallback(e=>{var s;c(null!==(s=e.value)&&void 0!==s?s:"")},[]);return s.jsx(s.Fragment,{children:s.jsx(p.TextAreaAutosize,{ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:o,label:i,messages:l,onInput:d,userAssistanceDensity:a,value:u})})}function Ks({ariaDescribedBy:e,assistiveText:n,itemText:t="label",isDisabled:r,isReadonly:o,label:i="Test Label",messages:l,userAssistanceDensity:a}){return s.jsx(s.Fragment,{children:s.jsx(A.SelectMultiple,{ariaDescribedBy:e,assistiveText:n,itemText:t,isDisabled:r,isReadonly:o,label:i,messages:l,onCommit:()=>{},userAssistanceDensity:a})})}function Js({ariaDescribedBy:e,assistiveText:n,itemText:t="label",isDisabled:r,isReadonly:o,label:i="Test Label",messages:l,userAssistanceDensity:a}){return s.jsx(s.Fragment,{children:s.jsx(y.SelectSingle,{ariaDescribedBy:e,assistiveText:n,itemText:t,isDisabled:r,isReadonly:o,label:i,messages:l,onCommit:()=>{},userAssistanceDensity:a})})}function Qs({ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:o,label:i="Test Label",messages:l,userAssistanceDensity:a}){const[u,c]=t.useState("123"),d=t.useCallback(e=>{var s;c(null!==(s=e.value)&&void 0!==s?s:"")},[]);return s.jsx(s.Fragment,{children:s.jsx(f.NumberInputText,{ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:o,label:i,messages:l,onInput:d,userAssistanceDensity:a,value:u})})}async function Ys(){const s=l.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:n}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar/bundle"],s,n)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar-XB/bundle"],s,n)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bg/bundle"],s,n)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs/bundle"],s,n)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs-Cyrl/bundle"],s,n)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/cs/bundle"],s,n)});case"../../resources/nls/da/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/da/bundle"],s,n)});case"../../resources/nls/de/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/de/bundle"],s,n)});case"../../resources/nls/el/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/el/bundle"],s,n)});case"../../resources/nls/en/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en/bundle"],s,n)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XA/bundle"],s,n)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XC/bundle"],s,n)});case"../../resources/nls/es/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/es/bundle"],s,n)});case"../../resources/nls/et/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/et/bundle"],s,n)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fi/bundle"],s,n)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr/bundle"],s,n)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr-CA/bundle"],s,n)});case"../../resources/nls/he/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/he/bundle"],s,n)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hr/bundle"],s,n)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hu/bundle"],s,n)});case"../../resources/nls/is/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/is/bundle"],s,n)});case"../../resources/nls/it/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/it/bundle"],s,n)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ja/bundle"],s,n)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ko/bundle"],s,n)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lt/bundle"],s,n)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lv/bundle"],s,n)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ms/bundle"],s,n)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/nl/bundle"],s,n)});case"../../resources/nls/no/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/no/bundle"],s,n)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pl/bundle"],s,n)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt/bundle"],s,n)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt-PT/bundle"],s,n)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ro/bundle"],s,n)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ru/bundle"],s,n)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sk/bundle"],s,n)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sl/bundle"],s,n)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr/bundle"],s,n)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr-Latn/bundle"],s,n)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sv/bundle"],s,n)});case"../../resources/nls/th/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/th/bundle"],s,n)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/tr/bundle"],s,n)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/uk/bundle"],s,n)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/vi/bundle"],s,n)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hans/bundle"],s,n)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hant/bundle"],s,n)});default:return new Promise(function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}(`../../resources/nls/${s}/bundle.ts`);return{translations:{"@oracle/oraclejet-preact":n}}}const Zs=[{name:"InputPassword",component:function({ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:i,label:l="Test Label",messages:a,userAssistanceDensity:u}){const[c,d]=t.useState("hello"),b=t.useCallback(e=>{var s;d(null!==(s=e.value)&&void 0!==s?s:"")},[]);return s.jsx(s.Fragment,{children:s.jsx(o.InputPassword,{ariaDescribedBy:e,assistiveText:n,isDisabled:r,isReadonly:i,label:l,messages:a,onInput:b,userAssistanceDensity:u,value:c})})}},{name:"InputText",component:Hs},{name:"NumberInputText",component:Qs},{name:"TextArea",component:Xs},{name:"TextAreaAutosize",component:Gs},{name:"SelectMultiple",component:Ks},{name:"SelectSingle",component:Js}],en=[{name:"InputText",component:Hs},{name:"NumberInputText",component:Qs},{name:"TextArea",component:Xs},{name:"TextAreaAutosize",component:Gs},{name:"SelectMultiple",component:Ks},{name:"SelectSingle",component:Js}];describe("Form Controls - WAI-Aria",()=>{let e;beforeEach(async function(){e=null!=e?e:await Ys()}),Zs.forEach(t=>it(`${t.name}: adds aria-describedby correctly for ua container when enabled`,async()=>{const o="test ua content",{container:l,getByText:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{assistiveText:o})}))),u=t.name.startsWith("Text")?"textarea":"input",c=l.querySelector(u);r.expect(c).not.to.be.null,n.act(()=>{null==c||c.focus()});const d=null==c?void 0:c.getAttribute("aria-describedby"),b=l.querySelector(`#${d}`),m=a(o);r.expect(b).not.to.be.null,r.expect(null==b?void 0:b.contains(m)).to.be.true})),Zs.forEach(t=>it(`${t.name}: removes aria-describedby correctly for ua container when disabled`,async()=>{const o="test ua content",{container:l,queryByText:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{assistiveText:o,isDisabled:!0})}))),u=t.name.startsWith("Text")?"textarea":"input",c=l.querySelector(u);r.expect(c).not.to.be.null,r.expect(null==c?void 0:c.disabled).to.be.true;const d=null==c?void 0:c.getAttribute("aria-describedby"),b=a(o);r.expect(d).to.be.null,r.expect(b).to.be.null})),Zs.forEach(t=>it(`${t.name}: removes aria-describedby correctly for ua container when readonly`,async()=>{const o="test ua content",{container:l,queryByText:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{assistiveText:o,isReadonly:!0})}))),u=t.name.startsWith("Text")?"textarea":"input",c=l.querySelector(u),d=a(o),b=null==c?void 0:c.getAttribute("aria-describedby");"InputText"===t.name||"SelectMultiple"===t.name||"SelectSingle"===t.name||"NumberInputText"===t.name||"TextAreaAutosize"===t.name?(r.expect(c).to.be.null,r.expect(d).to.be.null):(r.expect(c).to.not.be.null,r.expect(null==c?void 0:c.readOnly).to.be.true,r.expect(b).to.be.null,r.expect(d).to.be.null)})),Zs.forEach(t=>it(`${t.name}: adds aria-describedby correctly for ua container for efficient density and with help text`,async()=>{const o="test ua content",{container:l,getByText:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{assistiveText:o,userAssistanceDensity:"efficient"})}))),u=t.name.startsWith("Text")?"textarea":"input",c=l.querySelector(u);r.expect(c).not.to.be.null,n.act(()=>{null==c||c.focus()});const d=null==c?void 0:c.getAttribute("aria-describedby"),b=l.querySelector(`#${d}`),m=a(o);r.expect(b).not.to.be.null,r.expect(null==b?void 0:b.contains(m)).to.be.true})),Zs.forEach(t=>it(`${t.name}: adds aria-invalid when showing error message`,async()=>{const o="message description",{container:l,getByText:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{messages:[{detail:o,severity:"error",summary:o}]})}))),u=t.name.startsWith("Text")?"textarea":"input",c=l.querySelector(u);r.expect(c).not.to.be.null;const d=null==c?void 0:c.getAttribute("aria-describedby"),b=null==c?void 0:c.getAttribute("aria-invalid"),m=l.querySelector(`#${d}`),x=a(o);r.expect(b).to.equal("true"),r.expect(null==m?void 0:m.contains(x)).to.be.true})),en.forEach(t=>it(`${t.name}: adds field label to the error message`,async()=>{const o="message description",l="field label",{container:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{label:l,messages:[{detail:o,severity:"error",summary:o}]})}))),u=t.name.startsWith("Text")?"textarea":"input",c=a.querySelector(u);r.expect(c).not.to.be.null;const d=null==c?void 0:c.getAttribute("aria-describedby"),b=a.querySelector(`#${d}`);r.expect(b).not.to.be.null;const m=n.getByRole(b,"alert"),x=n.getByText(m,l);r.expect(x).to.not.be.null})),Zs.forEach(t=>it(`${t.name}: does not add aria-invalid when showing warning message`,async()=>{const o="message description",{container:l,getByText:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{messages:[{detail:o,severity:"warning",summary:o}]})}))),u=t.name.startsWith("Text")?"textarea":"input",c=l.querySelector(u);r.expect(c).not.to.be.null;const d=null==c?void 0:c.getAttribute("aria-describedby"),b=null==c?void 0:c.getAttribute("aria-invalid"),m=l.querySelector(`#${d}`),x=a(o);r.expect(b).to.be.null,r.expect(null==m?void 0:m.contains(x)).to.be.true})),Zs.forEach(t=>it(`${t.name}: does not add aria-invalid when showing confirmation message`,async()=>{const o="message description",{container:l,getByText:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{messages:[{detail:o,severity:"confirmation",summary:o}]})}))),u=t.name.startsWith("Text")?"textarea":"input",c=l.querySelector(u);r.expect(c).not.to.be.null;const d=null==c?void 0:c.getAttribute("aria-describedby"),b=null==c?void 0:c.getAttribute("aria-invalid"),m=l.querySelector(`#${d}`),x=a(o);r.expect(b).to.be.null,r.expect(null==m?void 0:m.contains(x)).to.be.true})),Zs.forEach(t=>it(`${t.name}: does not add aria-invalid when showing info message`,async()=>{const o="message description",{container:l,getByText:a}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{messages:[{detail:o,severity:"info",summary:o}]})}))),u=t.name.startsWith("Text")?"textarea":"input",c=l.querySelector(u);r.expect(c).not.to.be.null;const d=null==c?void 0:c.getAttribute("aria-describedby"),b=null==c?void 0:c.getAttribute("aria-invalid"),m=l.querySelector(`#${d}`),x=a(o);r.expect(b).to.be.null,r.expect(null==m?void 0:m.contains(x)).to.be.true})),Zs.forEach(t=>it(`${t.name}: does not add aria-invalid when showing no message`,async()=>{const{container:o}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{messages:[]})}))),l=t.name.startsWith("Text")?"textarea":"input",a=o.querySelector(l);r.expect(a).not.to.be.null;const u=null==a?void 0:a.getAttribute("aria-invalid");r.expect(u).to.be.null})),Zs.forEach(t=>it(`${t.name}: adds aria-describedby from ariaDescribedBy prop along with the UA id when enabled`,async()=>{var o;const l="test ua content",{container:a,getByText:u}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{ariaDescribedBy:"testId",assistiveText:l})}))),c=t.name.startsWith("Text")?"textarea":"input",d=a.querySelector(c);r.expect(d).not.to.be.null,n.act(()=>{null==d||d.focus()});const b=null==d?void 0:d.getAttribute("aria-describedby"),[m,x]=null!==(o=null==b?void 0:b.split(" "))&&void 0!==o?o:[],p=a.querySelector(`#${m}`),A=u(l);r.expect(p).not.to.be.null,r.expect(null==p?void 0:p.contains(A)).to.be.true,r.expect(x).equals("testId")})),Zs.forEach(t=>it(`${t.name}: adds aria-describedby from only prop when disabled`,async()=>{const{container:o}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{ariaDescribedBy:"testId",assistiveText:"test ua content",isDisabled:!0})}))),l=t.name.startsWith("Text")?"textarea":"input",a=o.querySelector(l);r.expect(a).not.to.be.null,r.expect(null==a?void 0:a.disabled).to.be.true;const u=null==a?void 0:a.getAttribute("aria-describedby");r.expect(u).equals("testId")})),Zs.forEach(t=>it(`${t.name}: adds aria-describedby from only prop when readonly`,async()=>{const{container:o,queryByRole:l}=n.render(s.jsx(i.RootEnvironmentProvider,Object.assign({environment:e},{children:s.jsx(t.component,{ariaDescribedBy:"testId",assistiveText:"test ua content",isReadonly:!0})}))),a=t.name.startsWith("Text")?"textarea":"input",u="InputText"===t.name||"SelectMultiple"===t.name||"SelectSingle"===t.name||"NumberInputText"===t.name||"TextAreaAutosize"===t.name?l("textbox"):o.querySelector(a),c=null==u?void 0:u.getAttribute("aria-describedby");r.expect(c).equals("testId")})),afterEach(n.cleanup)})});
//# sourceMappingURL=FormControlAria.spec.js.map
