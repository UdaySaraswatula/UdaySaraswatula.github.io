define(["../../../flexbox-b6c222f9","chai","css!./../flexbox.css","../../../keys-6231193b","../../../_curry1-f9717f1c","../../../_has-6f4fa2af"],function(e,c,n,o,t,f){"use strict";const{direction:i}=e.flexboxInterpolations;describe("flexbox direction",()=>{[[{},{}],[{foo:"bar"},{}]].forEach(e=>{const[n,o]=e;it(`when ${n} returns ${o}`,async function(){const e=i(n);c.expect(e).to.deep.equal(o)})})})});
//# sourceMappingURL=flexbox.spec.js.map
