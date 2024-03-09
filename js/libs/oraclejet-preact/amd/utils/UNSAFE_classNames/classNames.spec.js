define(["../../classNames-f11010a7","chai"],function(s,e){"use strict";describe("Utilities",()=>{it("joins values into a string",()=>{e.expect(s.classNames(["A","B",!1,"D"])).equals("A B D"),e.expect(s.classNames(["A"])).equals("A"),e.expect(s.classNames([!1])).equals("")})})});
//# sourceMappingURL=classNames.spec.js.map
