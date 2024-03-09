define("oj-c/utils/UNSAFE_meterUtils/meterUtils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getThresholdColorByIndex=void 0;const t=["danger","warning","success"];e.getThresholdColorByIndex=(e,r)=>e.color?e.color:t[r%t.length]}));var __rest=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};define("oj-c/meter-bar/meter-bar",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/UNSAFE_MeterBar","ojs/ojvcomponent","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","../utils/UNSAFE_meterUtils/meterUtils","css!oj-c/meter-bar/meter-bar-styles.css"],(function(require,e,t,r,o,a,l,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MeterBar=void 0,r=__importDefault(r),e.MeterBar=(0,a.registerCustomElement)("oj-c-meter-bar",(e=>{var r,i,s,d,c,{max:u=100,value:p=0,min:y=0,size:m="md",orientation:b="horizontal",step:h=1,indicatorSize:v=1,readonly:_=!1,thresholdDisplay:f="indicator"}=e,j=__rest(e,["max","value","min","size","orientation","step","indicatorSize","readonly","thresholdDisplay"]);const[g,O]=(0,l.useState)(),B=null===(r=j.thresholds)||void 0===r?void 0:r.map(((e,t)=>Object.assign(Object.assign({},e),{color:(0,n.getThresholdColorByIndex)(e,t)})));return(0,t.jsx)(a.Root,Object.assign({class:`oj-c-meter-bar-${b}`},{children:(0,t.jsx)(o.MeterBar,{value:null!=g?g:p,step:h,max:u,min:y,size:m,orientation:b,indicatorSize:v,datatip:j.datatip?j.datatip({value:null!=g?g:p}):j.datatip,onCommit:_?void 0:e=>{var t;null===(t=j.onValueChanged)||void 0===t||t.call(j,e.value)},onInput:_?void 0:e=>{var t;O(e.value),null===(t=j.onTransientValueChanged)||void 0===t||t.call(j,e.value)},length:"100%",thresholds:B,referenceLines:j.referenceLines,thresholdDisplay:"plotArea"===f?"track":f,indicatorColor:j.color,trackColor:null===(i=j.plotArea)||void 0===i?void 0:i.color,isTrackRendered:"off"!==(null===(s=j.plotArea)||void 0===s?void 0:s.rendered),accessibleLabel:j["aria-label"],ariaLabelledBy:null!==(d=j.labelledBy)&&void 0!==d?d:void 0,ariaDescribedBy:null!==(c=j.describedBy)&&void 0!==c?c:void 0})}))}),"MeterBar",{properties:{max:{type:"number"},min:{type:"number"},readonly:{type:"boolean"},value:{type:"number|null",writeback:!0},step:{type:"number"},color:{type:"string"},indicatorSize:{type:"number"},plotArea:{type:"object",properties:{color:{type:"string"},rendered:{type:"string",enumValues:["on","off"]}}},orientation:{type:"string",enumValues:["vertical","horizontal"]},referenceLines:{type:"Array<object>"},thresholdDisplay:{type:"string",enumValues:["all","plotArea","indicator"]},thresholds:{type:"Array<object>"},describedBy:{type:"string|null"},labelledBy:{type:"string|null"},size:{type:"string",enumValues:["sm","md","lg"]},datatip:{type:"function"},transientValue:{type:"number",readOnly:!0,writeback:!0}},extension:{_WRITEBACK_PROPS:["value","transientValue"],_READ_ONLY_PROPS:["transientValue"],_OBSERVED_GLOBAL_PROPS:["aria-label"]}},{max:100,value:0,min:0,size:"md",orientation:"horizontal",step:1,indicatorSize:1,readonly:!1,thresholdDisplay:"indicator"},{"@oracle/oraclejet-preact":r.default},{consume:[i.TabbableModeContext]})}));
//# sourceMappingURL=meter-bar.js.map