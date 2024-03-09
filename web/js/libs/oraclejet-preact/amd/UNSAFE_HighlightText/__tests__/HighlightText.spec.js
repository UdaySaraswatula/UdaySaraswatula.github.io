define(["preact/jsx-runtime","@testing-library/preact","chai","../../HighlightText-f5e447be","preact","css!./../../UNSAFE_HighlightText.css"],function(e,t,i,n,c,h){"use strict";afterEach(t.cleanup),describe("Test HighlightText component:",()=>{it("render no highlighting",async function(){const c=t.render(e.jsx(n.HighlightText,Object.assign({matchText:"x"},{children:"testing"}))).container.querySelectorAll("span");i.expect(c.length,"unhighlighted text").eq(0)}),it("render highlighting",async function(){const c=t.render(e.jsx(n.HighlightText,Object.assign({matchText:"t"},{children:"testing"}))).container.querySelectorAll("span");i.expect(c.length,"highlighted text").eq(2)})})});
//# sourceMappingURL=HighlightText.spec.js.map