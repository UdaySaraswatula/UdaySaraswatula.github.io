define(["preact/jsx-runtime","preact/hooks","../../hooks/UNSAFE_useTabbableMode","../../UNSAFE_Flex","../../VirtualizedListView-90d5d505","../../listViewTestFixtures-b0f629d1","../../listViewTabbableModeTests-b0269dd8","../../Flex-e3a46a36","preact","../../tslib.es6-24bf3861","../../utils/UNSAFE_interpolations/dimensions","../../utils/UNSAFE_arrayUtils","../../utils/UNSAFE_size","../../_curry1-f9717f1c","../../utils/UNSAFE_mergeInterpolations","../../utils/UNSAFE_classNames","../../classNames-f11010a7","../../_curry3-01167a7d","../../_curry2-c4648b65","../../_has-6f4fa2af",'module',"../../utils/UNSAFE_interpolations/boxalignment","../../keys-6231193b","../../utils/UNSAFE_interpolations/flexbox","../../flexbox-b6c222f9","../../utils/UNSAFE_interpolations/flexitem","../../flexitem-1405ebe5","../../PRIVATE_List","../../List-24031444","../../utils/UNSAFE_mergeProps","../../utils/UNSAFE_keys","../../LoadMoreCollection-d53c66bf","../../PRIVATE_Collection","../../Collection-0700cc46","../../hooks/UNSAFE_useViewportIntersect","../../PRIVATE_VirtualizedCollection","../../VirtualizedCollection-8523118a","../../UNSAFE_FocusTrap","../../FocusTrap-5a3a8c7d","preact/compat","../../utils/PRIVATE_tabbableUtils","../../hooks/UNSAFE_useId","../../hooks/PRIVATE_useSelection","../../hooks/PRIVATE_useCurrentKey","../../hooks/PRIVATE_useCollectionFocusRing","../../hooks/PRIVATE_useTabbableModeSet","../../hooks/PRIVATE_useItemAction","../../utils/PRIVATE_collectionUtils","../../UNSAFE_Skeleton","../../Skeleton-65cc3876","../../utils/UNSAFE_interpolations/borders","../../UNSAFE_Selector","../../index-c7f647a1","../../index-72f6069b","../../UNSAFE_Icon","../../Icon-7291b5d0","../../hooks/UNSAFE_useTooltip","../../UNSAFE_Floating","../../Floating-1e70bca1","../../index-66b69d43","../../hooks/UNSAFE_useUser","../../UNSAFE_Environment","../../UNSAFE_Layer","../../utils/PRIVATE_floatingUtils","../../utils/PRIVATE_refUtils","../../hooks/UNSAFE_useOutsideClick","../../hooks/UNSAFE_useHover","../../hooks/UNSAFE_useToggle","../../hooks/UNSAFE_useFocus","../../hooks/UNSAFE_useTouch","../../hooks/UNSAFE_useAnimation","../../useAnimation-19a01c68","../../hooks/UNSAFE_useTheme","../../hooks/UNSAFE_useTranslationBundle","@testing-library/preact","chai","@testing-library/user-event","../../testHelpers-d5c11a32"],function(e,t,s,o,i,n,a,l,r,c,u,d,b,_,A,E,F,S,h,U,N,x,f,p,g,T,k,I,V,m,j,P,y,R,v,w,C,O,M,z,L,B,K,H,q,D,G,J,Q,W,X,Y,Z,$,ee,te,se,oe,ie,ne,ae,le,re,ce,ue,de,be,_e,Ae,Ee,Fe,Se,he,Ue,Ne,xe,fe,pe){"use strict";const ge=t=>{const{tabbableModeProps:o}=s.useTabbableMode();return e.jsx("button",Object.assign({tabIndex:o.tabIndex},t))},Te=t=>{const{tabbableModeProps:o}=s.useTabbableMode();return e.jsx("input",Object.assign({tabIndex:o.tabIndex},t))};function ke({data:s}){const o=t.useRef(null),[n,a]=t.useState(void 0),[r,c]=t.useState({offset:0,data:s.slice(0,25),totalSize:s.length,sizePrecision:"exact"});return e.jsxs("div",Object.assign({style:"height: 200px;overflow: auto",ref:o},{children:[e.jsx("button",{children:"Preceding Button"}),e.jsx(i.VirtualizedListView,Object.assign({accessibleSummary:"Basic list",data:r,currentKey:n,viewportConfig:{scroller:()=>o.current},onCurrentKeyChange:e=>a(e.value),onLoadRange:e=>{const t=e.offset,o=t+e.count,i=Object.assign(Object.assign({},r),{offset:t,data:s.slice(t,o)});c(i)}},{children:t=>e.jsxs(l.Flex,{children:[t.selector&&t.selector(),e.jsxs("div",Object.assign({className:"item",style:{height:"20px",padding:"0.75rem"}},{children:[e.jsx(Te,{"data-testid":"input-"+t.data.id}),e.jsx("span",{children:t.data.name}),e.jsx(ge,Object.assign({"data-testid":"button-"+t.data.id},{children:"Inside Button"}))]}))]})})),e.jsx("button",{children:"Following Button"})]}))}describe("Test VirtualizedListView component Selection",()=>{beforeEach(()=>{window.IntersectionObserver||n.setupIntersectionObserverMock()}),a.testTabbableMode.bind(void 0)(ke)})});
//# sourceMappingURL=VirtualizedListViewTabbableMode.spec.js.map
