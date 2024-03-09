define(["preact/jsx-runtime","@testing-library/preact","chai","../../Skeleton-65cc3876","../../tslib.es6-24bf3861","css!./../../UNSAFE_Skeleton.css","../../utils/UNSAFE_classNames","../../classNames-f11010a7","../../utils/UNSAFE_interpolations/dimensions","../../utils/UNSAFE_arrayUtils","../../utils/UNSAFE_size","../../_curry1-f9717f1c","../../utils/UNSAFE_mergeInterpolations","../../_curry3-01167a7d","../../_curry2-c4648b65","../../_has-6f4fa2af","../../utils/UNSAFE_interpolations/borders"],function(e,t,s,i,r,n,l,a,o,c,d,u,p,f,h,x,y){"use strict";describe("Test Skeleton component",()=>{it("Check for skeleton presentation div elements",async()=>{const r=t.render(e.jsx("div",Object.assign({role:"presentation"},{children:e.jsx(i.Skeleton,{height:"6x",width:"100%",borderRadius:"4px"})}))).container.querySelectorAll("[role=presentation]")[0].children[0];s.expect(r.style.borderRadius).equals("4px")}),it("Check for default properties of skeleton",async()=>{const r=t.render(e.jsx(i.Skeleton,{height:"4x"})).container.firstElementChild;s.expect(r.style.width).equals("100%"),s.expect(r.style.borderRadius).equals("0px")})})});
//# sourceMappingURL=Skeleton.spec.js.map