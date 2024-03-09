define(["require","preact/jsx-runtime","@testing-library/preact","chai","../../TextFieldInput-9e3759b7","../../hooks/UNSAFE_useFormFieldContext","../../hooks/UNSAFE_useTabbableMode","../../utils/UNSAFE_matchTranslationBundle","../../UNSAFE_Environment","../../tslib.es6-24bf3861","css!./../../UNSAFE_TextField.css","../../hooks/UNSAFE_useTextFieldInputHandlers","preact/hooks","../../utils/PRIVATE_clientHints","../../clientHints-33be1380","../../utils/UNSAFE_classNames","../../classNames-f11010a7","../../utils/UNSAFE_interpolations/text","../../keys-6231193b","../../_curry1-f9717f1c","../../_has-6f4fa2af","../../utils/UNSAFE_mergeInterpolations","../../_curry3-01167a7d","../../_curry2-c4648b65","../../FormControlUtils-9994f9d8","../../hooks/UNSAFE_useTranslationBundle","preact","../../UNSAFE_Layer","preact/compat"],function(e,s,n,r,u,t,l,o,c,i,a,b,d,m,f,P,w,p,x,v,h,T,j,y,g,C,k,A,F){"use strict";describe("TextFieldInput - translations",()=>{it("aria-label is populated with translated loading string",async()=>{const l=o.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:i}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar/bundle"],s,n)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar-XB/bundle"],s,n)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bg/bundle"],s,n)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs/bundle"],s,n)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs-Cyrl/bundle"],s,n)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/cs/bundle"],s,n)});case"../../resources/nls/da/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/da/bundle"],s,n)});case"../../resources/nls/de/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/de/bundle"],s,n)});case"../../resources/nls/el/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/el/bundle"],s,n)});case"../../resources/nls/en/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en/bundle"],s,n)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XA/bundle"],s,n)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XC/bundle"],s,n)});case"../../resources/nls/es/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/es/bundle"],s,n)});case"../../resources/nls/et/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/et/bundle"],s,n)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fi/bundle"],s,n)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr/bundle"],s,n)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr-CA/bundle"],s,n)});case"../../resources/nls/he/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/he/bundle"],s,n)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hr/bundle"],s,n)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hu/bundle"],s,n)});case"../../resources/nls/is/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/is/bundle"],s,n)});case"../../resources/nls/it/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/it/bundle"],s,n)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ja/bundle"],s,n)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ko/bundle"],s,n)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lt/bundle"],s,n)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lv/bundle"],s,n)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ms/bundle"],s,n)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/nl/bundle"],s,n)});case"../../resources/nls/no/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/no/bundle"],s,n)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pl/bundle"],s,n)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt/bundle"],s,n)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt-PT/bundle"],s,n)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ro/bundle"],s,n)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ru/bundle"],s,n)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sk/bundle"],s,n)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sl/bundle"],s,n)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr/bundle"],s,n)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr-Latn/bundle"],s,n)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sv/bundle"],s,n)});case"../../resources/nls/th/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/th/bundle"],s,n)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/tr/bundle"],s,n)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/uk/bundle"],s,n)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/vi/bundle"],s,n)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hans/bundle"],s,n)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hant/bundle"],s,n)});default:return new Promise(function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}(`../../resources/nls/${l}/bundle.ts`),a={translations:{"@oracle/oraclejet-preact":i}},{container:b}=n.render(s.jsx(c.RootEnvironmentProvider,Object.assign({environment:a},{children:s.jsx(t.FormFieldContext.Provider,Object.assign({value:{isLoading:!0}},{children:s.jsx(u.TextFieldInput,{ariaLabel:"sample aria label",value:"sample text"})}))}))),d=b.querySelector("input");r.expect(d).not.to.be.null;const m=null==d?void 0:d.getAttribute("aria-label");r.expect(m).to.equal(i.formControl_loading())}),it("aria-label is populated with provided aria-label",async()=>{const l=o.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:i}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar/bundle"],s,n)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar-XB/bundle"],s,n)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bg/bundle"],s,n)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs/bundle"],s,n)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs-Cyrl/bundle"],s,n)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/cs/bundle"],s,n)});case"../../resources/nls/da/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/da/bundle"],s,n)});case"../../resources/nls/de/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/de/bundle"],s,n)});case"../../resources/nls/el/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/el/bundle"],s,n)});case"../../resources/nls/en/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en/bundle"],s,n)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XA/bundle"],s,n)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XC/bundle"],s,n)});case"../../resources/nls/es/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/es/bundle"],s,n)});case"../../resources/nls/et/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/et/bundle"],s,n)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fi/bundle"],s,n)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr/bundle"],s,n)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr-CA/bundle"],s,n)});case"../../resources/nls/he/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/he/bundle"],s,n)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hr/bundle"],s,n)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hu/bundle"],s,n)});case"../../resources/nls/is/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/is/bundle"],s,n)});case"../../resources/nls/it/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/it/bundle"],s,n)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ja/bundle"],s,n)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ko/bundle"],s,n)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lt/bundle"],s,n)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lv/bundle"],s,n)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ms/bundle"],s,n)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/nl/bundle"],s,n)});case"../../resources/nls/no/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/no/bundle"],s,n)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pl/bundle"],s,n)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt/bundle"],s,n)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt-PT/bundle"],s,n)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ro/bundle"],s,n)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ru/bundle"],s,n)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sk/bundle"],s,n)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sl/bundle"],s,n)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr/bundle"],s,n)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr-Latn/bundle"],s,n)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sv/bundle"],s,n)});case"../../resources/nls/th/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/th/bundle"],s,n)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/tr/bundle"],s,n)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/uk/bundle"],s,n)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/vi/bundle"],s,n)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hans/bundle"],s,n)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hant/bundle"],s,n)});default:return new Promise(function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}(`../../resources/nls/${l}/bundle.ts`),a={translations:{"@oracle/oraclejet-preact":i}},b="sample aria label",{container:d}=n.render(s.jsx(c.RootEnvironmentProvider,Object.assign({environment:a},{children:s.jsx(t.FormFieldContext.Provider,Object.assign({value:{isLoading:!1}},{children:s.jsx(u.TextFieldInput,{ariaLabel:b,value:"sample text"})}))}))),m=d.querySelector("input");r.expect(m).not.to.be.null;const f=null==m?void 0:m.getAttribute("aria-label");r.expect(f).to.equal(b)}),afterEach(n.cleanup)}),describe("TextFieldInput - TabbableModeContext",()=>{let t;beforeEach(async function(){t=null!=t?t:await async function(){const s=o.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:n}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar/bundle"],s,n)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar-XB/bundle"],s,n)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bg/bundle"],s,n)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs/bundle"],s,n)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs-Cyrl/bundle"],s,n)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/cs/bundle"],s,n)});case"../../resources/nls/da/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/da/bundle"],s,n)});case"../../resources/nls/de/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/de/bundle"],s,n)});case"../../resources/nls/el/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/el/bundle"],s,n)});case"../../resources/nls/en/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en/bundle"],s,n)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XA/bundle"],s,n)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XC/bundle"],s,n)});case"../../resources/nls/es/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/es/bundle"],s,n)});case"../../resources/nls/et/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/et/bundle"],s,n)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fi/bundle"],s,n)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr/bundle"],s,n)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr-CA/bundle"],s,n)});case"../../resources/nls/he/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/he/bundle"],s,n)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hr/bundle"],s,n)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hu/bundle"],s,n)});case"../../resources/nls/is/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/is/bundle"],s,n)});case"../../resources/nls/it/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/it/bundle"],s,n)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ja/bundle"],s,n)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ko/bundle"],s,n)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lt/bundle"],s,n)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lv/bundle"],s,n)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ms/bundle"],s,n)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/nl/bundle"],s,n)});case"../../resources/nls/no/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/no/bundle"],s,n)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pl/bundle"],s,n)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt/bundle"],s,n)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt-PT/bundle"],s,n)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ro/bundle"],s,n)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ru/bundle"],s,n)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sk/bundle"],s,n)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sl/bundle"],s,n)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr/bundle"],s,n)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr-Latn/bundle"],s,n)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sv/bundle"],s,n)});case"../../resources/nls/th/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/th/bundle"],s,n)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/tr/bundle"],s,n)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/uk/bundle"],s,n)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/vi/bundle"],s,n)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hans/bundle"],s,n)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hant/bundle"],s,n)});default:return new Promise(function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}(`../../resources/nls/${s}/bundle.ts`);return{translations:{"@oracle/oraclejet-preact":n}}}()}),it("as input, TabbableModeContext not provided",async()=>{const{container:e}=n.render(s.jsx(c.RootEnvironmentProvider,Object.assign({environment:t},{children:s.jsx(u.TextFieldInput,{value:"sample text"})}))),l=e.querySelector("input");r.expect(l).not.to.be.null;const o=null==l?void 0:l.getAttribute("tabindex");r.expect(o).to.be.null}),it("as input, TabbableModeContext isTabbable=true",async()=>{const{container:e}=n.render(s.jsx(c.RootEnvironmentProvider,Object.assign({environment:t},{children:s.jsx(l.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!0}},{children:s.jsx(u.TextFieldInput,{value:"sample text"})}))}))),o=e.querySelector("input");r.expect(o).not.to.be.null;const i=null==o?void 0:o.getAttribute("tabindex");r.expect(i).to.be.null}),it("as input, TabbableModeContext isTabbable=false",async()=>{const{container:e}=n.render(s.jsx(c.RootEnvironmentProvider,Object.assign({environment:t},{children:s.jsx(l.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!1}},{children:s.jsx(u.TextFieldInput,{value:"sample text"})}))}))),o=e.querySelector("input");r.expect(o).not.to.be.null;const i=null==o?void 0:o.getAttribute("tabindex");r.expect(i).to.equal("-1")}),it("as textarea, TabbableModeContext not provided",async()=>{const{container:e}=n.render(s.jsx(c.RootEnvironmentProvider,Object.assign({environment:t},{children:s.jsx(u.TextFieldInput,{as:"textarea",value:"sample text"})}))),l=e.querySelector("textarea");r.expect(l).not.to.be.null;const o=null==l?void 0:l.getAttribute("tabindex");r.expect(o).to.be.null}),it("as textarea, TabbableModeContext isTabbable=true",async()=>{const{container:e}=n.render(s.jsx(c.RootEnvironmentProvider,Object.assign({environment:t},{children:s.jsx(l.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!0}},{children:s.jsx(u.TextFieldInput,{as:"textarea",value:"sample text"})}))}))),o=e.querySelector("textarea");r.expect(o).not.to.be.null;const i=null==o?void 0:o.getAttribute("tabindex");r.expect(i).to.be.null}),it("as textarea, TabbableModeContext isTabbable=false",async()=>{const{container:e}=n.render(s.jsx(c.RootEnvironmentProvider,Object.assign({environment:t},{children:s.jsx(l.TabbableModeContext.Provider,Object.assign({value:{isTabbable:!1}},{children:s.jsx(u.TextFieldInput,{as:"textarea",value:"sample text"})}))}))),o=e.querySelector("textarea");r.expect(o).not.to.be.null;const i=null==o?void 0:o.getAttribute("tabindex");r.expect(i).to.equal("-1")}),afterEach(n.cleanup)})});
//# sourceMappingURL=TextFieldInput.spec.js.map
