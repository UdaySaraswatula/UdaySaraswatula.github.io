define(["exports","preact/jsx-runtime","preact/compat","preact/hooks","./hooks/UNSAFE_useFocusableTextField","./hooks/UNSAFE_useFormContext","./hooks/UNSAFE_useFormFieldContext","./hooks/UNSAFE_useTextField","./hooks/UNSAFE_useHover","./UNSAFE_Label","./UNSAFE_TextField","./UNSAFE_UserAssistance","css!./UNSAFE_InputPassword.css","./hooks/UNSAFE_useTranslationBundle","./hooks/UNSAFE_usePress","./index-c7f647a1","./index-72f6069b","./hooks/UNSAFE_useClearIcon","./utils/UNSAFE_componentUtils","./ClearIcon-af60dbf1","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useCurrentValueReducer","./ReadonlyTextFieldInput-35c69ee9","./TextFieldInput-9e3759b7","./tslib.es6-24bf3861","./hooks/UNSAFE_useFocusWithin","./useFocusWithin-35862d6c","preact","./hooks/UNSAFE_useId","./utils/UNSAFE_classNames","./classNames-f11010a7","./UNSAFE_LabelValueLayout","./UNSAFE_Flex","./Flex-e3a46a36","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./_curry1-f9717f1c","./utils/UNSAFE_mergeInterpolations","./_curry3-01167a7d","./_curry2-c4648b65","./_has-6f4fa2af","./utils/UNSAFE_interpolations/boxalignment","./keys-6231193b","./utils/UNSAFE_interpolations/flexbox","./flexbox-b6c222f9","./utils/UNSAFE_interpolations/flexitem","./flexitem-1405ebe5","./FormControlUtils-9994f9d8","./hooks/UNSAFE_useDebounce","./UNSAFE_LiveRegion","./InlineHelpSource-64823c0a","./hooks/UNSAFE_useTabbableMode","./UNSAFE_ComponentMessage","./ComponentMessage-998dad2a","./PRIVATE_Message","./utils/PRIVATE_timer","./MessageCloseButton-80019999","./UNSAFE_Button","./Button-6236e6b9","./UNSAFE_BaseButton","./BaseButton-6b15cf96","./hooks/UNSAFE_useActive","./utils/PRIVATE_clientHints","./clientHints-33be1380","./utils/UNSAFE_mergeProps","./MessageDetail-520bf217","./MessageFormattingUtils-522eafdf","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-b9c2724c","./Message.types-7cf67e6b","./MessageStartIcon-f0caac42","./MessageSummary-1fe58d25","./MessageTimestamp-0324ebac","./MessageUtils-83d741c6","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./MessagesManager-92a31926","./PRIVATE_TransitionGroup","./hooks/UNSAFE_useAnimation","./useAnimation-19a01c68","./hooks/UNSAFE_useMessagesContext","./UNSAFE_Icon","./Icon-7291b5d0","./hooks/UNSAFE_useTooltip","./UNSAFE_Floating","./Floating-1e70bca1","./index-66b69d43","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useTheme","./UNSAFE_HiddenAccessible","./HiddenAccessible-cc2e72c9","./ComponentMessageContainer-329000c3","./utils/UNSAFE_interpolations/text","./hooks/UNSAFE_useTextFieldInputHandlers"],function(e,s,o,t,i,l,a,n,u,r,c,d,F,A,b,U,E,S,_,p,x,h,g,N,m,f,v,y,k,C,T,I,R,j,P,V,M,B,D,L,w,H,O,W,q,z,G,J,K,Q,X,Y,Z,$,ee,se,oe,te,ie,le,ae,ne,ue,re,ce,de,Fe,Ae,be,Ue,Ee,Se,_e,pe,xe,he,ge,Ne,me,fe,ve,ye,ke,Ce,Te,Ie,Re,je,Pe,Ve,Me,Be,De,Le,we,He,Oe,We,qe,ze,Ge,Je,Ke){"use strict";const Qe="_15ngxw8";function Xe({isRevealed:e,onPress:o}){const{pressProps:t}=b.usePress(o),i=A.useTranslationBundle("@oracle/oraclejet-preact").inputPassword_hidden();return s.jsx("button",Object.assign({"aria-label":i,role:"switch","aria-checked":!e,class:Qe,tabIndex:0},t,{children:e?s.jsx(E.SvgIcoViewHide,{}):s.jsx(E.SvgIcoView,{})}))}const Ye=o.forwardRef(({ariaDescribedBy:e,assistiveText:o,autoComplete:F="off",autoFocus:A=!1,hasClearIcon:b,hasRevealToggle:U="always",helpSourceLink:E,helpSourceText:m,isDisabled:f,isReadonly:v,isRequired:y=!1,isRequiredShown:k,label:C,labelEdge:T,labelStartWidth:I,messages:R,placeholder:j,textAlign:P,userAssistanceDensity:V,value:M,variant:B="default",onInput:D,onCommit:L},w)=>{const{currentCommitValue:H,dispatch:O}=h.useCurrentValueReducer({value:M}),W=t.useCallback(e=>{O({type:"input",payload:e.value}),null==D||D(e)},[D,O]),q=t.useCallback(e=>{O({type:"commit",payload:e.value}),null==L||L(e)},[L,O]),{isDisabled:z,isReadonly:G,labelEdge:J,labelStartWidth:K,textAlign:Q,userAssistanceDensity:X}=l.useFormContext(),Y=null!=f?f:z,Z=null!=v?v:G,$=null!=T?T:J,ee=null!=I?I:K,se=null!=P?P:Q,oe=null!=V?V:X,{bool:te,setFalse:ie,setTrue:le}=x.useToggle(!1),{enabledElementRef:ae,focusProps:ne,isFocused:ue,readonlyElementRef:re}=i.useFocusableTextField({isDisabled:Y,isReadonly:Z,ref:w,onBlurWithin:ie}),{hoverProps:ce,isHover:de}=u.useHover({isDisabled:Z||Y||!1}),{formFieldContext:Fe,inputProps:Ae,labelProps:be,textFieldProps:Ue,userAssistanceProps:Ee}=n.useTextField({ariaDescribedBy:e,isDisabled:Y,isFocused:ue,isReadonly:Z,labelEdge:$,messages:R,styleVariant:B,value:M}),Se=t.useCallback(()=>{te?ie():le()},[te]),_e=Y||"always"!==U?null:s.jsx(Xe,{onPress:Se,isRevealed:te}),pe=t.useCallback(()=>{var e;null===(e=ae.current)||void 0===e||e.focus(),null==W||W({previousValue:M,value:""})},[D,M]),xe=S.useClearIcon({clearIcon:s.jsx(p.ClearIcon,{onClick:pe}),display:b,hasValue:Fe.hasValue,isFocused:ue,isEnabled:!Z&&!Y,isHover:de}),he=_.beforeVNode(_e,xe),ge="none"!==$?s.jsx(r.Label,Object.assign({},be,{children:C})):void 0,Ne={label:"none"!==$?ge:void 0,labelEdge:"none"!==$?$:void 0,labelStartWidth:"none"!==$?ee:void 0},me="none"===$?C:void 0,fe=Y||Z?"efficient"!==oe?void 0:s.jsx(d.InlineUserAssistance,Object.assign({userAssistanceDensity:oe},Ee)):s.jsx(d.InlineUserAssistance,Object.assign({assistiveText:o,helpSourceLink:E,helpSourceText:m,messages:R,isRequiredShown:k,userAssistanceDensity:oe},Ee));if(Z)return s.jsx(a.FormFieldContext.Provider,Object.assign({value:Fe},{children:s.jsx(c.ReadonlyTextField,Object.assign({role:"presentation",inlineUserAssistance:fe},Ne,{children:s.jsx(g.ReadonlyTextFieldInput,{ariaDescribedBy:e,ariaLabel:me,ariaLabelledBy:be.id,as:"input",autoFocus:A,elementRef:re,textAlign:se,type:"password",value:M,hasInsideLabel:void 0!==C&&"inside"===$})}))}));const ve=s.jsx(N.TextFieldInput,Object.assign({ariaLabel:me,autoComplete:F,autoFocus:A,currentCommitValue:H,hasInsideLabel:void 0!==ge&&"inside"===$,inputRef:ae,isRequired:y,onInput:W,onCommit:q,placeholder:j,textAlign:se,value:M,type:te?"text":"password"},Ae));return s.jsx(a.FormFieldContext.Provider,Object.assign({value:Fe},{children:s.jsx(c.TextField,Object.assign({endContent:he,inlineUserAssistance:fe,mainContent:ve,onBlur:ne.onfocusout,onFocus:ne.onfocusin},Ue,Ne,ce))}))});e.InputPassword=Ye,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_InputPassword.js.map
