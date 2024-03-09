define(["preact/jsx-runtime","preact/hooks","@testing-library/preact","chai","../../VirtualizedCollection-8523118a","../../PRIVATE_Collection","../../Collection-0700cc46","preact","../../utils/UNSAFE_arrayUtils","../../hooks/UNSAFE_useViewportIntersect"],function(e,t,i,n,a,o,s,c,r,l){"use strict";function d({data:i}){const n=t.useRef(null),[o,s]=t.useState({offset:0,data:i.slice(0,25),totalSize:i.length,sizePrecision:"exact"});return e.jsx("div",Object.assign({style:"height: 200px;overflow: auto",ref:n},{children:e.jsx(a.VirtualizedCollection,Object.assign({data:o,itemSelector:".item",viewportConfig:{scroller:()=>n.current},onLoadRange:e=>{const t=e.offset,n=t+e.count,a=Object.assign(Object.assign({},o),{offset:t,data:i.slice(t,n)});s(a)}},{children:t=>e.jsx("div",Object.assign({className:"item",style:{height:"20px",padding:"0.75rem"}},{children:t.data.data.name}),t.data.metadata.key)}))}))}describe("Test VirtualizedCollection component",()=>{beforeEach(()=>{if(!window.IntersectionObserver){const e=jest.fn();e.mockReturnValue({observe:()=>null,unobserve:()=>null,disconnect:()=>null}),Object.defineProperty(global,"IntersectionObserver",{writable:!0,configurable:!0,value:e})}}),it("initial render",async function(){const t=function(e){const t=[];for(let i=0;i<e;i++)t.push({id:"i"+i,name:"Employee "+i});return t}(100).map(e=>({data:e,metadata:{key:e.id}})),a=i.render(e.jsx(d,{data:t})),o=await a.queryAllByText("Employee",{exact:!1});n.expect(o.length).eq(25)})})});
//# sourceMappingURL=VirtualizedCollection.spec.js.map
