define(["preact/jsx-runtime","@testing-library/preact","chai","../../MessageDetail-520bf217","css!./../../PRIVATE_Message.css","preact","../../utils/UNSAFE_classNames","../../classNames-f11010a7","../../MessageFormattingUtils-522eafdf","../../utils/UNSAFE_getLocale","../../utils/UNSAFE_stringUtils","../../stringUtils-b9c2724c","../../Message.types-7cf67e6b","../../utils/UNSAFE_arrayUtils"],function(e,t,i,s,n,a,d,r,l,o,c,y,m,u){"use strict";const p={data:{detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},index:0,key:"ConfirmationMessage",metadata:{key:"ConfirmationMessage"}};describe("Test MessageDetail component",()=>{it("default renderer",async function(){const n=t.render(e.jsx(s.MessageDetail,{item:p})),a=await n.findByText("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");i.expect(a).not.null}),it("custom renderer",async function(){const n=t.render(e.jsx(s.MessageDetail,{item:p,renderer:({data:t,index:i,key:s,metadata:n})=>e.jsxs("div",Object.assign({style:"border: 1px solid gray; padding: 5px; background-color: orange;","data-testid":"customWrapper"},{children:[e.jsxs("div",{children:["index: ",i]}),e.jsxs("div",{children:["key: ",s]}),e.jsxs("div",{children:["detail: ",t.detail]}),e.jsxs("div",{children:["metadata key: ",null==n?void 0:n.key]})]}))})),a=await n.findByTestId("customWrapper");i.expect(a).not.null,i.expect(null==a?void 0:a.style.backgroundColor).to.equal("orange");const d=await n.findByText("index: 0");i.expect(d).not.null;const r=await n.findByText("key: ConfirmationMessage");i.expect(r).not.null;const l=await n.findByText("detail: Lorem Ipsum is simply dummy text of the printing and typesetting industry.");i.expect(l).not.null;const o=await n.findByText("metadata key: ConfirmationMessage");i.expect(o).not.null})})});
//# sourceMappingURL=MessageDetail.spec.js.map