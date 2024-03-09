define(["preact/jsx-runtime","preact/hooks","@testing-library/preact","chai","sinon","../../UNSAFE_Button","../../Menu-34c29ef1","../../SelectMenuItem-127bc6db","../../UNSAFE_Environment","../../menuTestsUtils-83c9272c","../../Button-6236e6b9","../../UNSAFE_BaseButton","../../BaseButton-6b15cf96","../../tslib.es6-24bf3861","../../hooks/UNSAFE_usePress","../../hooks/UNSAFE_useHover","../../hooks/UNSAFE_useToggle","../../hooks/UNSAFE_useActive","../../utils/UNSAFE_classNames","../../classNames-f11010a7","preact/compat","css!./../../UNSAFE_Menu.css","../../utils/UNSAFE_interpolations/dimensions","../../utils/UNSAFE_arrayUtils","../../utils/UNSAFE_size","../../_curry1-f9717f1c","../../utils/UNSAFE_mergeInterpolations","../../_curry3-01167a7d","../../_curry2-c4648b65","../../_has-6f4fa2af","../../utils/PRIVATE_clientHints","../../clientHints-33be1380","../../hooks/UNSAFE_useTabbableMode","preact","../../utils/UNSAFE_mergeProps","../../UNSAFE_Layer","../../UNSAFE_Floating","../../Floating-1e70bca1","../../index-66b69d43","../../hooks/UNSAFE_useUser","../../utils/PRIVATE_floatingUtils","../../utils/PRIVATE_refUtils","../../hooks/UNSAFE_useOutsideClick","../../hooks/PRIVATE_useCollectionFocusRing","../../MenuItem-792282d6","../../UNSAFE_Text","../../Text-6ee93c22","../../hooks/UNSAFE_useId","../../useModal-b9882031","../../index-c7f647a1","../../index-72f6069b","../../UNSAFE_Icon","../../Icon-7291b5d0","../../hooks/UNSAFE_useTooltip","../../hooks/UNSAFE_useFocus","../../hooks/UNSAFE_useTouch","../../hooks/UNSAFE_useAnimation","../../useAnimation-19a01c68","../../hooks/UNSAFE_useTheme"],function(e,t,n,l,s,c,i,o,u,a,r,g,p,x,m,d,A,h,f,b,S,v,E,I,_,k,F,U,N,M,y,j,R,B,T,q,C,w,O,P,V,G,H,W,z,L,D,J,K,Q,X,Y,Z,$,ee,te,ne,le,se){"use strict";function ce({value:t,onCommit:n,children:l}){return e.jsx(o.SelectMenuGroupContext.Provider,Object.assign({value:{isMultiple:!1,value:t,onCommit:n}},{children:l}))}const ie=({initialValue:n,onCommit:l})=>{const[s,c]=t.useState(n),a=t.useRef(null);return e.jsx(e.Fragment,{children:e.jsxs(u.RootEnvironmentProvider,{children:[e.jsx(r.Button,{ref:a,label:"Text Wrapping"}),e.jsx(i.Menu,Object.assign({isOpen:!0,anchorRef:a},{children:e.jsxs(ce,Object.assign({value:s,onCommit:l||(({value:e})=>{c(e)})},{children:[e.jsx(o.SelectMenuItem,{value:"overflow",label:"Overflow"}),e.jsx(o.SelectMenuItem,{value:"wrap",label:"Wrap"}),e.jsx(o.SelectMenuItem,{value:"clip",label:"Clip"})]}))}))]})})};describe("Test Menu Component",()=>{beforeEach(()=>{a.setObserverConfig()}),it("onCommit called when selecting item",async function(){const t=s.spy(),c=n.render(e.jsx(ie,{onCommit:t})),i=a.getAllMenuItemsByRole(c,"menuitemradio");n.fireEvent.click(i[0]),l.expect(t.calledOnce).to.be.true}),it("Initial SelectSingleMenuGroup render without value",async function(){const t=n.render(e.jsx(ie,{})),s=a.getAllMenuItemsByRole(t,"menuitemradio"),c=s[0],i=s[1],o=s[2];l.expect(c).not.null,l.expect(c.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(c,"svg")).null,l.expect(i).not.null,l.expect(i.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(i,"svg")).null,l.expect(o).not.null,l.expect(o.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(o,"svg")).null}),it("Initial SelectSingleMenuGroup render with value",async function(){const t=n.render(e.jsx(ie,{initialValue:"overflow"})),s=a.getAllMenuItemsByRole(t,"menuitemradio"),c=s[0],i=s[1],o=s[2];l.expect(c).not.null,l.expect(c.getAttribute("aria-checked")).equals("true"),l.expect(a.getIcon(c,"svg")).not.null,l.expect(i).not.null,l.expect(i.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(i,"svg")).null,l.expect(o).not.null,l.expect(o.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(o,"svg")).null}),it("SelectSingleMenuGroup remains the same if selected item is selected again",async function(){const t=n.render(e.jsx(ie,{initialValue:"overflow"})),s=a.getAllMenuItemsByRole(t,"menuitemradio");n.fireEvent.click(s[0]);const c=a.getAllMenuItemsByRole(t,"menuitemradio"),i=c[0],o=c[1],u=c[2];l.expect(i).not.null,l.expect(i.getAttribute("aria-checked")).equals("true"),l.expect(a.getIcon(i,"svg")).not.null,l.expect(o).not.null,l.expect(o.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(o,"svg")).null,l.expect(u).not.null,l.expect(u.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(u,"svg")).null}),it("SelectSingleMenuGroup selected item changes when selecting it",async function(){const t=n.render(e.jsx(ie,{initialValue:"overflow"})),s=a.getAllMenuItemsByRole(t,"menuitemradio");n.fireEvent.click(s[1]);const c=a.getAllMenuItemsByRole(t,"menuitemradio"),i=c[0],o=c[1],u=c[2];l.expect(i).not.null,l.expect(i.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(i,"svg")).null,l.expect(o).not.null,l.expect(o.getAttribute("aria-checked")).equals("true"),l.expect(a.getIcon(o,"svg")).not.null,l.expect(u).not.null,l.expect(u.getAttribute("aria-checked")).equals("false"),l.expect(a.getIcon(u,"svg")).null})})});
//# sourceMappingURL=SelectSingleMenuGroup.spec.js.map