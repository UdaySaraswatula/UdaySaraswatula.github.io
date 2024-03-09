define(["preact/jsx-runtime","preact","preact/hooks","@testing-library/preact","@testing-library/user-event","chai","../../FocusTrap-5a3a8c7d","preact/compat","../../utils/UNSAFE_classNames","../../classNames-f11010a7","css!./../../UNSAFE_FocusTrap.css","../../utils/PRIVATE_tabbableUtils","../../_curry1-f9717f1c","../../_curry2-c4648b65","../../_curry3-01167a7d"],function(e,t,s,n,a,i,o,r,c,u,d,l,b,f,x){"use strict";function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var j=m(a);const g=({submitButtonRef:s})=>e.jsxs(t.Fragment,{children:[e.jsx("input",{id:"inside_input"}),e.jsx("button",Object.assign({id:"inside_cancel"},{children:"Cancel"})),e.jsx("button",Object.assign({id:"inside_submit",ref:s},{children:"Submit"}))]}),p=({autoFocusTest:n=!1,isDisabled:a=!1,restoreFocusTest:i})=>{const r=s.useRef(null),c=s.useRef(null);let u,d;return n&&(u=r),!0===i&&(d=c),!1===i&&(d=!1),e.jsxs(t.Fragment,{children:[e.jsx("button",{children:"Preceding Button"}),a?e.jsx(g,{submitButtonRef:r}):e.jsx(o.FocusTrap,Object.assign({autoFocusRef:u,restoreFocusRef:d},{children:e.jsx(g,{submitButtonRef:r})})),e.jsx("button",Object.assign({ref:c},{children:"Following Button"}))]})},y=async e=>{"undefined"!=typeof jest?setTimeout(()=>{i.expect(document.activeElement).equals(e)},0):await n.waitFor(()=>{i.expect(document.activeElement).equals(e)})};describe("Test FocusTrap component",()=>{beforeEach(()=>{Object.defineProperty(HTMLElement.prototype,"offsetParent",{get(){return this.parentNode}})}),it("renders and sets default focus on first tabbable item",function(){const{getByRole:t}=n.render(e.jsx(p,{})),s=t("textbox");i.expect(document.activeElement).equals(s)}),it("renders and sets initial focus to specified element",function(){const{getByText:t}=n.render(e.jsx(p,{autoFocusTest:!0})),s=t("Submit");i.expect(document.activeElement).equals(s)}),it("constrains tab behavior",async()=>{const{getByRole:t,getByText:s}=n.render(e.jsx(p,{})),a=s("Cancel"),i=s("Submit"),o=t("textbox");j.default.tab(),await y(a),j.default.tab(),await y(i),j.default.tab(),await y(o),j.default.tab(),await y(a),j.default.tab({shift:!0}),await y(o),j.default.tab({shift:!0}),await y(i)}),it("unmounts and resets focus to original element",async()=>{const{getByRole:t,getByText:s,rerender:a}=n.render(e.jsx(p,{isDisabled:!0})),i=s("Preceding Button");i.focus(),await y(i),a(e.jsx(p,{isDisabled:!1}));const o=t("textbox");await y(o),a(e.jsx(p,{isDisabled:!0})),await y(i)}),it("unmounts and resets focus to specified element",async()=>{const{getByRole:t,getByText:s,rerender:a}=n.render(e.jsx(p,{isDisabled:!0,restoreFocusTest:!0})),i=s("Preceding Button"),o=s("Following Button");i.focus(),await y(i),a(e.jsx(p,{isDisabled:!1,restoreFocusTest:!0}));const r=t("textbox");await y(r),a(e.jsx(p,{isDisabled:!0,restoreFocusTest:!0})),await y(o)}),it("unmounts and does no focus restore behavior when toggled off",async()=>{const{getByRole:t,getByText:s,rerender:a}=n.render(e.jsx(p,{isDisabled:!0,restoreFocusTest:!1})),i=document.activeElement,o=s("Preceding Button");o.focus(),await y(o),a(e.jsx(p,{isDisabled:!1,restoreFocusTest:!1}));const r=t("textbox");await y(r),a(e.jsx(p,{isDisabled:!0,restoreFocusTest:!1})),await y(i)})})});
//# sourceMappingURL=FocusTrap.spec.js.map
