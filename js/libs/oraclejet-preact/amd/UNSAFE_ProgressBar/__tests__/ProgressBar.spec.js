define(["require","preact/jsx-runtime","@testing-library/preact","chai","../../UNSAFE_ProgressBar","../../utils/UNSAFE_matchTranslationBundle","../../UNSAFE_Environment","../../tslib.es6-24bf3861","../../utils/UNSAFE_classNames","../../classNames-f11010a7","css!./../../UNSAFE_ProgressBar.css","../../hooks/UNSAFE_useUser","preact/hooks","preact","../../UNSAFE_Layer","preact/compat","../../hooks/UNSAFE_useTranslationBundle","../../PRIVATE_Meter"],function(e,s,n,r,u,t,l,o,c,i,d,a,b,m,f,P,w,h){"use strict";describe("Test Progress Bar component",()=>{it("render",async function(){const e=n.render(s.jsx(u.ProgressBar,{value:10})).container.firstElementChild.classList;r.expect(e.length).equals(2)}),it("Default value verification using ARIA attributes",async function(){const e=n.render(s.jsx(u.ProgressBar,{})).container.firstElementChild;r.expect(e.getAttribute("aria-valuemin")).equals("0"),r.expect(e.getAttribute("aria-valuemax")).equals("100"),r.expect(e.getAttribute("aria-valuenow")).equals("0")}),it("Test for Id ",async()=>{const e=n.render(s.jsx(u.ProgressBar,{value:10,id:"progressBar"})).container.firstElementChild;r.expect(e.getAttribute("id")).equals("progressBar")}),"undefined"==typeof jest&&it("Test for component height ",async()=>{const e=n.render(s.jsx(u.ProgressBar,{})).container.firstElementChild;r.expect(window.getComputedStyle(e).getPropertyValue("height"),"Height of the progress Bar ").to.be.equal("6px")}),it("Test for component and value Width",async()=>{const e=n.render(s.jsx(u.ProgressBar,{value:10,width:"200px"})).container.firstElementChild,t=null==e?void 0:e.firstElementChild;r.expect(t.style.width).equals("10%"),r.expect(e.style.width).equals("200px")})}),describe("Progress Bar Indeterminate aria-valuetext, translation and accessibleLabel",()=>{it("Test to check default aria-valuetext",async()=>{const o=t.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:c}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar/bundle"],s,n)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar-XB/bundle"],s,n)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bg/bundle"],s,n)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs/bundle"],s,n)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs-Cyrl/bundle"],s,n)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/cs/bundle"],s,n)});case"../../resources/nls/da/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/da/bundle"],s,n)});case"../../resources/nls/de/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/de/bundle"],s,n)});case"../../resources/nls/el/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/el/bundle"],s,n)});case"../../resources/nls/en/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en/bundle"],s,n)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XA/bundle"],s,n)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XC/bundle"],s,n)});case"../../resources/nls/es/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/es/bundle"],s,n)});case"../../resources/nls/et/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/et/bundle"],s,n)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fi/bundle"],s,n)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr/bundle"],s,n)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr-CA/bundle"],s,n)});case"../../resources/nls/he/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/he/bundle"],s,n)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hr/bundle"],s,n)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hu/bundle"],s,n)});case"../../resources/nls/is/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/is/bundle"],s,n)});case"../../resources/nls/it/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/it/bundle"],s,n)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ja/bundle"],s,n)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ko/bundle"],s,n)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lt/bundle"],s,n)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lv/bundle"],s,n)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ms/bundle"],s,n)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/nl/bundle"],s,n)});case"../../resources/nls/no/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/no/bundle"],s,n)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pl/bundle"],s,n)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt/bundle"],s,n)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt-PT/bundle"],s,n)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ro/bundle"],s,n)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ru/bundle"],s,n)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sk/bundle"],s,n)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sl/bundle"],s,n)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr/bundle"],s,n)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr-Latn/bundle"],s,n)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sv/bundle"],s,n)});case"../../resources/nls/th/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/th/bundle"],s,n)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/tr/bundle"],s,n)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/uk/bundle"],s,n)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/vi/bundle"],s,n)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hans/bundle"],s,n)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hant/bundle"],s,n)});default:return new Promise(function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}(`../../resources/nls/${o}/bundle.ts`),i={translations:{"@oracle/oraclejet-preact":c}},d=n.render(s.jsx(l.RootEnvironmentProvider,Object.assign({environment:i},{children:s.jsx(u.ProgressBar,{value:"indeterminate"})}))).container.firstElementChild;r.expect(d.getAttribute("aria-valuetext")).equals("In Progress")}),it("Test to check accessibleLabel property",async()=>{const o=t.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:c}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar/bundle"],s,n)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar-XB/bundle"],s,n)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bg/bundle"],s,n)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs/bundle"],s,n)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs-Cyrl/bundle"],s,n)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/cs/bundle"],s,n)});case"../../resources/nls/da/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/da/bundle"],s,n)});case"../../resources/nls/de/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/de/bundle"],s,n)});case"../../resources/nls/el/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/el/bundle"],s,n)});case"../../resources/nls/en/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en/bundle"],s,n)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XA/bundle"],s,n)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XC/bundle"],s,n)});case"../../resources/nls/es/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/es/bundle"],s,n)});case"../../resources/nls/et/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/et/bundle"],s,n)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fi/bundle"],s,n)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr/bundle"],s,n)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr-CA/bundle"],s,n)});case"../../resources/nls/he/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/he/bundle"],s,n)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hr/bundle"],s,n)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hu/bundle"],s,n)});case"../../resources/nls/is/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/is/bundle"],s,n)});case"../../resources/nls/it/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/it/bundle"],s,n)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ja/bundle"],s,n)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ko/bundle"],s,n)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lt/bundle"],s,n)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lv/bundle"],s,n)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ms/bundle"],s,n)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/nl/bundle"],s,n)});case"../../resources/nls/no/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/no/bundle"],s,n)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pl/bundle"],s,n)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt/bundle"],s,n)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt-PT/bundle"],s,n)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ro/bundle"],s,n)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ru/bundle"],s,n)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sk/bundle"],s,n)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sl/bundle"],s,n)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr/bundle"],s,n)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr-Latn/bundle"],s,n)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sv/bundle"],s,n)});case"../../resources/nls/th/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/th/bundle"],s,n)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/tr/bundle"],s,n)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/uk/bundle"],s,n)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/vi/bundle"],s,n)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hans/bundle"],s,n)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hant/bundle"],s,n)});default:return new Promise(function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}(`../../resources/nls/${o}/bundle.ts`),i={translations:{"@oracle/oraclejet-preact":c}},d=n.render(s.jsx(l.RootEnvironmentProvider,Object.assign({environment:i},{children:s.jsx(u.ProgressBar,{value:"indeterminate",accessibleLabel:"accessibleLabel"})}))).container.firstElementChild;r.expect(null==d?void 0:d.getAttribute("aria-valuetext")).equals("accessibleLabel")})}),describe("Progress Bar Embedded Test",()=>{"undefined"==typeof jest&&it("Indeterminate Embedded Test",async()=>{const o=t.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:c}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar/bundle"],s,n)});case"../../resources/nls/ar-XB/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ar-XB/bundle"],s,n)});case"../../resources/nls/bg/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bg/bundle"],s,n)});case"../../resources/nls/bs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs/bundle"],s,n)});case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/bs-Cyrl/bundle"],s,n)});case"../../resources/nls/cs/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/cs/bundle"],s,n)});case"../../resources/nls/da/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/da/bundle"],s,n)});case"../../resources/nls/de/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/de/bundle"],s,n)});case"../../resources/nls/el/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/el/bundle"],s,n)});case"../../resources/nls/en/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en/bundle"],s,n)});case"../../resources/nls/en-XA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XA/bundle"],s,n)});case"../../resources/nls/en-XC/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/en-XC/bundle"],s,n)});case"../../resources/nls/es/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/es/bundle"],s,n)});case"../../resources/nls/et/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/et/bundle"],s,n)});case"../../resources/nls/fi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fi/bundle"],s,n)});case"../../resources/nls/fr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr/bundle"],s,n)});case"../../resources/nls/fr-CA/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/fr-CA/bundle"],s,n)});case"../../resources/nls/he/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/he/bundle"],s,n)});case"../../resources/nls/hr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hr/bundle"],s,n)});case"../../resources/nls/hu/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/hu/bundle"],s,n)});case"../../resources/nls/is/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/is/bundle"],s,n)});case"../../resources/nls/it/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/it/bundle"],s,n)});case"../../resources/nls/ja/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ja/bundle"],s,n)});case"../../resources/nls/ko/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ko/bundle"],s,n)});case"../../resources/nls/lt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lt/bundle"],s,n)});case"../../resources/nls/lv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/lv/bundle"],s,n)});case"../../resources/nls/ms/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ms/bundle"],s,n)});case"../../resources/nls/nl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/nl/bundle"],s,n)});case"../../resources/nls/no/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/no/bundle"],s,n)});case"../../resources/nls/pl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pl/bundle"],s,n)});case"../../resources/nls/pt/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt/bundle"],s,n)});case"../../resources/nls/pt-PT/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/pt-PT/bundle"],s,n)});case"../../resources/nls/ro/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ro/bundle"],s,n)});case"../../resources/nls/ru/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/ru/bundle"],s,n)});case"../../resources/nls/sk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sk/bundle"],s,n)});case"../../resources/nls/sl/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sl/bundle"],s,n)});case"../../resources/nls/sr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr/bundle"],s,n)});case"../../resources/nls/sr-Latn/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sr-Latn/bundle"],s,n)});case"../../resources/nls/sv/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/sv/bundle"],s,n)});case"../../resources/nls/th/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/th/bundle"],s,n)});case"../../resources/nls/tr/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/tr/bundle"],s,n)});case"../../resources/nls/uk/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/uk/bundle"],s,n)});case"../../resources/nls/vi/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/vi/bundle"],s,n)});case"../../resources/nls/zh-Hans/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hans/bundle"],s,n)});case"../../resources/nls/zh-Hant/bundle.ts":return new Promise(function(s,n){e(["../../resources/nls/zh-Hant/bundle"],s,n)});default:return new Promise(function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}(`../../resources/nls/${o}/bundle.ts`),i={translations:{"@oracle/oraclejet-preact":c}},d=n.render(s.jsx(l.RootEnvironmentProvider,Object.assign({environment:i},{children:s.jsx(u.ProgressBar,{value:"indeterminate",edge:"top"})}))).container.firstElementChild,a=null==d?void 0:d.firstElementChild;r.expect(a.classList.length).greaterThan(1),r.expect(!window.getComputedStyle(d).getPropertyValue("borderStyle"),"Embedded Indeterminate Progress Bar has no border").to.be.true,r.expect(!window.getComputedStyle(d).getPropertyValue("borderRadius"),"Embedded Indeterminate Progress Bar has no border radius").to.be.true}),it("Determinate Embedded Test",async()=>{var e,t;const l=null===(t=null===(e=n.render(s.jsx(u.ProgressBar,{value:10,edge:"top"})).container)||void 0===e?void 0:e.firstElementChild)||void 0===t?void 0:t.firstElementChild;r.expect(l.classList.length).equals(1)})}),describe("Test Progress Bar ARIA props",()=>{it("Test value and max property of Progress bar",async function(){const e=n.render(s.jsx(u.ProgressBar,{value:50,max:1e3})).container.firstElementChild;r.expect(e.getAttribute("aria-valuemax")).equals("1000"),r.expect(e.getAttribute("aria-valuenow")).equals("50"),r.expect(e.getAttribute("aria-valuemin")).equals("0")})})});
//# sourceMappingURL=ProgressBar.spec.js.map
