define(["exports","preact/jsx-runtime","@testing-library/preact","chai","@testing-library/user-event","./listViewTestFixtures-b0f629d1","./testHelpers-d5c11a32"],function(e,t,a,n,i,d,c){"use strict";function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=u(i);e.testTabbableMode=e=>{it("acts as single tab stop in composition",async()=>{const i=d.populateData(100,!0).map(e=>({data:e,metadata:{key:e.id}})),u=a.render(t.jsx(e,{data:i})),r=await c.getRoot(u);s.default.tab(),n.expect(document.activeElement).equals(u.getByText("Preceding Button")),s.default.tab(),n.expect(document.activeElement).equals(r),s.default.tab(),n.expect(document.activeElement).equals(u.getByText("Following Button")),s.default.tab({shift:!0}),n.expect(document.activeElement).equals(r),s.default.tab({shift:!0}),n.expect(document.activeElement).equals(u.getByText("Preceding Button"))}),it("enters interactive mode with keyboard via F2",async()=>{const i=d.populateData(100,!0).map(e=>({data:e,metadata:{key:e.id}})),u=a.render(t.jsx(e,{data:i})),r=await c.getRoot(u);s.default.tab(),s.default.tab(),n.expect(document.activeElement).equals(r),u.rerender(t.jsx(e,{data:i}));const l=u.getByTestId("input-0");n.expect(l.getAttribute("tabindex")).equals("-1"),a.fireEvent.keyUp(r,{key:"F2"}),n.expect(l.getAttribute("tabindex")).equals("0")}),it("enters and leaves interactive mode with keyboard via F2, ESC and arrow keys",async()=>{const i=d.populateData(100,!0).map(e=>({data:e,metadata:{key:e.id}})),u=a.render(t.jsx(e,{data:i})),r=await c.getRoot(u);s.default.tab(),s.default.tab(),n.expect(document.activeElement).equals(r),u.rerender(t.jsx(e,{data:i}));const l=u.getByTestId("input-0");n.expect(l.getAttribute("tabindex")).equals("-1"),a.fireEvent.keyUp(r,{key:"F2"}),n.expect(l.getAttribute("tabindex")).equals("0"),a.fireEvent.keyUp(r,{key:"Esc"}),await a.waitFor(()=>{n.expect(document.activeElement).equals(r)}),a.fireEvent.keyDown(r,{key:"ArrowDown"});const o=u.getByTestId("input-1");n.expect(o.getAttribute("tabindex")).equals("-1"),a.fireEvent.keyUp(r,{key:"F2"}),n.expect(o.getAttribute("tabindex")).equals("0")}),it("enters interactive mode with click on input",async()=>{const i=d.populateData(100,!0).map(e=>({data:e,metadata:{key:e.id}})),c=a.render(t.jsx(e,{data:i})),u=c.getByTestId("input-0");n.expect(u.getAttribute("tabindex")).equals("-1"),s.default.click(u),c.rerender(t.jsx(e,{data:i})),n.expect(u.getAttribute("tabindex")).equals("0"),n.expect(document.activeElement).equals(u),s.default.tab(),n.expect(document.activeElement).equals(c.getByTestId("button-0"))}),xit("leaves interactive mode with click outside",async()=>{const i=d.populateData(100,!0).map(e=>({data:e,metadata:{key:e.id}})),c=a.render(t.jsx(e,{data:i})),u=c.getByTestId("input-0");n.expect(u.getAttribute("tabindex")).equals("-1"),s.default.click(u),c.rerender(t.jsx(e,{data:i})),n.expect(u.getAttribute("tabindex")).equals("0"),n.expect(document.activeElement).equals(u);const r=c.getByText("Preceding Button");s.default.click(r),n.expect(document.activeElement).equals(r),c.rerender(t.jsx(e,{data:i})),n.expect(u.getAttribute("tabindex")).equals("-1")})}});
//# sourceMappingURL=listViewTabbableModeTests-b0269dd8.js.map
