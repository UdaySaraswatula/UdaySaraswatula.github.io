define(["preact/jsx-runtime","chai","@testing-library/preact","../../Divider-b379301f","css!./../../UNSAFE_Divider.css","../../utils/UNSAFE_mergeInterpolations","../../utils/UNSAFE_classNames","../../classNames-f11010a7","../../_curry1-f9717f1c","../../_curry3-01167a7d","../../_curry2-c4648b65","../../_has-6f4fa2af"],function(e,i,r,s,t,a,c,n,l,d,f,u){"use strict";describe("Test Divider component",()=>{it("divider render",async function(){const t=r.render(e.jsx(s.Divider,{})),a=await t.findByRole("separator"),c=a.classList;i.expect(a).not.null,i.expect(c.length).equals(1)})})});
//# sourceMappingURL=Divider.spec.js.map
