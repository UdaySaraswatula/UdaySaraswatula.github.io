define(["require","preact/jsx-runtime","@testing-library/preact","chai","../../ReadonlyTextFieldInput-35c69ee9","../../hooks/UNSAFE_useTabbableMode","../../utils/UNSAFE_matchTranslationBundle","../../UNSAFE_Environment","../../tslib.es6-24bf3861","../../hooks/UNSAFE_useFormContext","preact","preact/hooks","css!./../../UNSAFE_TextField.css","../../utils/UNSAFE_classNames","../../classNames-f11010a7","../../utils/UNSAFE_interpolations/text","../../keys-6231193b","../../_curry1-f9717f1c","../../_has-6f4fa2af","../../utils/UNSAFE_mergeInterpolations","../../_curry3-01167a7d","../../_curry2-c4648b65","../../hooks/UNSAFE_useFormFieldContext","../../FormControlUtils-9994f9d8","../../hooks/UNSAFE_useTranslationBundle","../../UNSAFE_Layer","preact/compat"],function(e,n,s,t,r,u,o,l,a,i,c,b,d,x,m,f,p,v,P,w,y,T,j,h,g,C,F){"use strict";describe("ReadonlyTextFieldInput - TabbableModeContext",()=>{let a;beforeEach(async function(){a=null!=a?a:await async function(){const n=o.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:s}=await function(n){switch(n){case"../../resources/nls/ar/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/ar/bundle"],n,s)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/ar-XB/bundle"],n,s)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/bg/bundle"],n,s)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/bs/bundle"],n,s)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/bs-Cyrl/bundle"],n,s)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/cs/bundle"],n,s)});case"../../resources/nls/da/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/da/bundle"],n,s)});case"../../resources/nls/de/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/de/bundle"],n,s)});case"../../resources/nls/el/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/el/bundle"],n,s)});case"../../resources/nls/en/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/en/bundle"],n,s)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/en-XA/bundle"],n,s)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/en-XC/bundle"],n,s)});case"../../resources/nls/es/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/es/bundle"],n,s)});case"../../resources/nls/et/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/et/bundle"],n,s)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/fi/bundle"],n,s)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/fr/bundle"],n,s)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/fr-CA/bundle"],n,s)});case"../../resources/nls/he/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/he/bundle"],n,s)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/hr/bundle"],n,s)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/hu/bundle"],n,s)});case"../../resources/nls/is/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/is/bundle"],n,s)});case"../../resources/nls/it/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/it/bundle"],n,s)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/ja/bundle"],n,s)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/ko/bundle"],n,s)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/lt/bundle"],n,s)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/lv/bundle"],n,s)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/ms/bundle"],n,s)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/nl/bundle"],n,s)});case"../../resources/nls/no/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/no/bundle"],n,s)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/pl/bundle"],n,s)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/pt/bundle"],n,s)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/pt-PT/bundle"],n,s)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/ro/bundle"],n,s)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/ru/bundle"],n,s)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/sk/bundle"],n,s)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/sl/bundle"],n,s)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/sr/bundle"],n,s)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/sr-Latn/bundle"],n,s)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/sv/bundle"],n,s)});case"../../resources/nls/th/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/th/bundle"],n,s)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/tr/bundle"],n,s)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/uk/bundle"],n,s)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/vi/bundle"],n,s)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/zh-Hans/bundle"],n,s)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(n,s){e(["../../resources/nls/zh-Hant/bundle"],n,s)});default:return new Promise(function(e,s){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}(`../../resources/nls/${n}/bundle.ts`);return{translations:{"@oracle/oraclejet-preact":s}}}()}),it("as div, TabbableModeContext not provided",async()=>{const e="sample text",u=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"div",value:e})}))),o=await u.findByText(e);t.expect(o).not.to.be.null;const i=null==o?void 0:o.getAttribute("tabindex");t.expect(i).to.equal("0")}),it("as div, TabbableModeContext isTabbable=true",async()=>{const e="sample text",o=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(u.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!0}},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"div",value:e})}))}))),i=await o.findByText(e);t.expect(i).not.to.be.null;const c=null==i?void 0:i.getAttribute("tabindex");t.expect(c).to.equal("0")}),it("as div, TabbableModeContext isTabbable=false",async()=>{const e="sample text",o=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(u.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!1}},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"div",value:e})}))}))),i=await o.findByText(e);t.expect(i).not.to.be.null;const c=null==i?void 0:i.getAttribute("tabindex");t.expect(c).to.equal("-1")}),it("as input, TabbableModeContext not provided",async()=>{const e="sample text",u=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"input",type:"text",value:e})}))),o=await u.findByDisplayValue(e);t.expect(o).not.to.be.null;const i=null==o?void 0:o.getAttribute("tabindex");t.expect(i).to.be.null}),it("as input, TabbableModeContext isTabbable=true",async()=>{const e="sample text",o=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(u.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!0}},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"input",type:"text",value:e})}))}))),i=await o.findByDisplayValue(e);t.expect(i).not.to.be.null;const c=null==i?void 0:i.getAttribute("tabindex");t.expect(c).to.be.null}),it("as input, TabbableModeContext isTabbable=false",async()=>{const e="sample text",o=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(u.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!1}},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"input",type:"text",value:e})}))}))),i=await o.findByDisplayValue(e);t.expect(i).not.to.be.null;const c=null==i?void 0:i.getAttribute("tabindex");t.expect(c).to.equal("-1")}),it("as textarea, TabbableModeContext not provided",async()=>{const e="sample text",u=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"textarea",value:e})}))),o=await u.findByDisplayValue(e);t.expect(o).not.to.be.null;const i=null==o?void 0:o.getAttribute("tabindex");t.expect(i).to.be.null}),it("as textarea, TabbableModeContext isTabbable=true",async()=>{const e="sample text",o=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(u.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!0}},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"textarea",value:e})}))}))),i=await o.findByDisplayValue(e);t.expect(i).not.to.be.null;const c=null==i?void 0:i.getAttribute("tabindex");t.expect(c).to.be.null}),it("as textarea, TabbableModeContext isTabbable=false",async()=>{const e="sample text",o=s.render(n.jsx(l.RootEnvironmentProvider,Object.assign({environment:a},{children:n.jsx(u.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!1}},{children:n.jsx(r.ReadonlyTextFieldInput,{as:"textarea",value:e})}))}))),i=await o.findByDisplayValue(e);t.expect(i).not.to.be.null;const c=null==i?void 0:i.getAttribute("tabindex");t.expect(c).to.equal("-1")}),afterEach(s.cleanup)})});
//# sourceMappingURL=ReadonlyTextFieldInput.spec.js.map