define(["exports","preact/jsx-runtime","preact","preact/hooks","./UNSAFE_Flex",'module',"./utils/UNSAFE_mergeProps","./useSingleSelection-f1f97662","./hooks/PRIVATE_useCurrentKey","./hooks/PRIVATE_useCollectionFocusRing","./utils/PRIVATE_collectionUtils","./utils/PRIVATE_clientHints","./hooks/UNSAFE_useId","./hooks/UNSAFE_useTranslationBundle","./UNSAFE_HiddenAccessible","./PRIVATE_Collection","./tslib.es6-24bf3861","./utils/UNSAFE_classNames","preact/compat","./classNames-f11010a7","./Flex-e3a46a36","./Collection-0700cc46","./HiddenAccessible-cc2e72c9","./clientHints-33be1380"],function(e,t,s,n,r,a,c,i,l,o,u,d,y,f,k,x,b,j,v,g,h,O,_,N){"use strict";const R=Object.freeze({key:"__others__",label:"#"}),p="p10p88",E="dz15kc",T="_106hsj7",m="_1pe7icj",A="."+p,w="_1wmkf5g",S=v.forwardRef((e,s)=>{const n=f.useTranslationBundle("@oracle/oraclejet-preact"),{context:r,selectedKey:a}=e,c=r.data.key===a,i=F(e,s),l=g.classNames([i.class,r.data.isDisabled&&E,c&&m]),o=r.data.label||r.data.key,u=r.data.isDisabled?n.indexer_disabledLabel({SECTION:`${o}`}):`${o}`;return t.jsx("li",Object.assign({},i,{class:l,"data-oj-valuetext":u,"data-oj-disabled":r.data.isDisabled},{children:r.data.label||r.data.key}))});function F({context:e,currentKey:t,valueNow:s,isFocusRingVisible:n},r){const a=e.data.key===t,c=g.classNames([p,a&&n&&T]);return Object.assign(Object.assign({},a&&{ref:r}),{key:e.data.key,class:c,"data-oj-key":e.data.key,"data-oj-key-type":typeof e.data.key,"data-oj-valuenow":s,isFocusRingVisible:!!n})}const I=v.forwardRef((e,n)=>{var{lastValueNow:r}=e,a=b.__rest(e,["lastValueNow"]);const c=Object.assign(Object.assign({},a),{ref:n});return t.jsxs(s.Fragment,{children:[t.jsx(S,Object.assign({},c)),t.jsx(C,Object.assign({},c,{ref:n,context:{index:-1,data:R},valueNow:r}))]})}),C=v.forwardRef((e,s)=>{const{context:n,selectedKey:r}=e,a=F(e,s),c=n.data.key===r,i=g.classNames([a.class,c&&m]),l=R.label;return t.jsx("li",Object.assign({},a,{class:i,"data-oj-valuetext":l},{children:n.data.label}))}),P=v.forwardRef((e,s)=>{const n=f.useTranslationBundle("@oracle/oraclejet-preact"),{context:r,sections:a}=e,c=F(e,s),{from:i,to:l}=V(e);if(!K(r.index,i,l))return null;const o=a[i].label||a[i].key,u=a[l].label||a[l].key,d=g.classNames([w]),y=n.indexer_separatorLabel({FROM_SECTION:`${o}`,TO_SECTION:`${u}`});return t.jsx("li",Object.assign({},c,{"data-oj-valuetext":y},{children:t.jsx(h.Flex,Object.assign({align:"center",justify:"center"},{children:t.jsx("div",{class:d})}))}))});function V({context:e,sectionsPerTruncation:t,last:s}){const n=e.index-e.index%t+1;let r=n+t-2;return r=r>=s?s-1:r,{from:n,to:r}}function K(e,t,s){return e===Math.floor((t+s)/2)}const H="xj1uve",U="ntkahl",B=[{key:"A"},{key:"B"},{key:"C"},{key:"D"},{key:"E"},{key:"F"},{key:"G"},{key:"H"},{key:"I"},{key:"J"},{key:"K"},{key:"L"},{key:"M"},{key:"N"},{key:"O"},{key:"P"},{key:"Q"},{key:"R"},{key:"S"},{key:"T"},{key:"U"},{key:"V"},{key:"W"},{key:"X"},{key:"Y"},{key:"Z"}];const D=(e,t,s)=>e===t.current?void 0===s?null:s:u.keyExtractor(e,A),M=(e,t,s)=>{if(e.value===R.key)t({value:R.key});else{t({value:s.find(t=>t.key===e.value).key})}},$=(e,t,s,n,r,a,c)=>{if(0===e||0===t)return;const i=e/t,l=s-1;if(i<2)r!==l&&(a(l),c(n));else if(i>s||s-i<.01)r>1&&(a(1),c(n));else{const e=z(i,l);e!==r&&e<s&&(a(e),c(n))}},z=(e,t)=>{e-=2,e/=2;const s=Math.round(t/e)+1,n=t%s,r=Math.floor(t/s)+(n>1?1:0);let a=t-(r-1)*s,c=s;for(;c>a;)c-=1,a=t-(r-1)*c;return c!=s&&(c+=1),c};function L(e){const t=N.getClientHints().deviceType;return"phone"===t||"tablet"===t?e.indexer_touchInstructionText():e.indexer_keyboardInstructionText()}e.Indexer=function({sections:e=B,value:r,onCommit:a=(()=>{})}){var d;const k=n.useRef(null),x=n.useRef(null),b=s.createRef(),[j,v]=n.useState(null===(d=e[0])||void 0===d?void 0:d.key),[g,N]=n.useState(-1),R=n.useRef(-1),p=n.useRef(0),E=y.useId(),[T,m]=o.useCollectionFocusRing(e=>{var t;return!!(null===(t=k.current)||void 0===t?void 0:t.contains(e))},["ArrowUp","ArrowDown"]),{currentKeyProps:w}=l.useCurrentKey(e=>u.keyExtractor(e,A),u.getPrevNextKey(k.current,j,!0,A),u.getPrevNextKey(k.current,j,!1,A),j,e=>v(e.value)),{selectionProps:F}=i.useSingleSelection(e=>D(e,x,j),void 0,t=>M(t,a,e)),C=n.useCallback(t=>{var s;for(const n of t)$(n.contentRect.height,p.current,e.length,null===(s=e[0])||void 0===s?void 0:s.key,g,N,v)},[e,g]);n.useEffect(()=>{var e,t,s,n;x.current&&(x.current.setAttribute("aria-valuemax",R.current+1+""),x.current.setAttribute("aria-valuetext",(null===(t=null===(e=b.current)||void 0===e?void 0:e.dataset)||void 0===t?void 0:t.ojValuetext)||""),x.current.setAttribute("aria-valuenow",(null===(n=null===(s=b.current)||void 0===s?void 0:s.dataset)||void 0===n?void 0:n.ojValuenow)||"")),R.current=-1}),n.useEffect(()=>{var t,s;const n=k.current;n&&(p.current=(null===(t=n.querySelector("li"))||void 0===t?void 0:t.offsetHeight)||0,$(n.offsetHeight,p.current,e.length,null===(s=e[0])||void 0===s?void 0:s.key,g,N,v))},[e,g]),n.useEffect(()=>{const e=k.current;if(e){const t=new ResizeObserver(e=>{C(e)});return t.observe(e),()=>{t.unobserve(e)}}},[g,C]);const z=f.useTranslationBundle("@oracle/oraclejet-preact");return t.jsxs("div",Object.assign({ref:k,class:H},{children:[t.jsx(h.Flex,Object.assign({align:"center",width:"6x",height:"100%"},{children:t.jsx("ul",Object.assign({},c.mergeProps(w,m,F),{ref:x,tabIndex:0,"aria-label":"Indexer","aria-orientation":"vertical","aria-valuemin":"0","aria-describedby":E,role:"slider",class:U},{children:t.jsx(O.Collection,Object.assign({items:e},{children:s=>{const n=e.length-1;R.current+=1;const a={context:s,ref:b,currentKey:j,selectedKey:r,valueNow:R.current,isFocusRingVisible:!!T};if(s.index===n)return t.jsx(I,Object.assign({},a,{lastValueNow:R.current+1}));if(g<=1||s.index%g==0)return t.jsx(S,Object.assign({},a));const c=Object.assign(Object.assign({},a),{sectionsPerTruncation:g,last:n,sections:e});return function(e){const{from:t,to:s}=V(e);return K(e.context.index,t,s)}(c)?t.jsx(P,Object.assign({},c)):(R.current-=1,null)}}))}))})),t.jsx(_.HiddenAccessible,{children:t.jsx("span",Object.assign({id:E},{children:L(z)}))})]}))},e.SECTION_OTHERS=R});
//# sourceMappingURL=Indexer-48f2ffaf.js.map