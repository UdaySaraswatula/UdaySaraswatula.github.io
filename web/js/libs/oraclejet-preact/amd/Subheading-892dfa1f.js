define(["exports","./tslib.es6-24bf3861","preact/jsx-runtime","./utils/UNSAFE_arrayUtils",'module',"./utils/UNSAFE_mergeInterpolations"],function(t,e,n,r,i,s){"use strict";function o(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function l(t){return function e(n){return 0===arguments.length||o(n)?e:t.apply(this,arguments)}}Array.isArray;"undefined"!=typeof Symbol&&Symbol.iterator;function u(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var c=Object.prototype.toString,a=function(){return"[object Arguments]"===c.call(arguments)?function(t){return"[object Arguments]"===c.call(t)}:function(t){return u("callee",t)}}(),f=!{toString:null}.propertyIsEnumerable("toString"),p=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],h=function(){return arguments.propertyIsEnumerable("length")}(),b=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},g="function"!=typeof Object.keys||h?l(function(t){if(Object(t)!==t)return[];var e,n,r=[],i=h&&a(t);for(e in t)!u(e,t)||i&&"length"===e||(r[r.length]=e);if(f)for(n=p.length-1;n>=0;)u(e=p[n],t)&&!b(r,e)&&(r[r.length]=e),n-=1;return r}):l(function(t){return Object(t)!==t?[]:Object.keys(t)});Number.isInteger;"function"==typeof Object.is&&Object.is;var y=function(t){return(t<10?"0":"")+t};Date.prototype.toISOString;"function"==typeof Object.assign&&Object.assign;var d="\t\n\v\f\r                　\u2028\u2029\ufeff";String.prototype.trim;const m=r.stringLiteralArray(["h1","h2","h3","h4","h5","h6","div","span"]),j={h1:"2xl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs",div:"md",span:"md"},O={base:"_1q7rd7g",size:{xs:"_12jjwpe",sm:"qul4oh",md:"d82pt5",lg:"_1lvopzz",xl:"pnbq3s","2xl":"bxmb4k",inherit:"wgsje7"}},S=g(O.size),v=[()=>({class:O.base}),({size:t="2xl"})=>({class:O.size[t]})],x=s.mergeInterpolations(v);t.Subheading=t=>{var r,{children:i}=t,s=e.__rest(t,["children"]);const o=s.as;s.size=null!==(r=s.size)&&void 0!==r?r:j[o];const l=x(s),{class:u}=l,c=e.__rest(l,["class"]);return n.jsx(o,Object.assign({class:u,style:c,id:s.id},{children:i}))},t.sizeOptions=S,t.subheadingElementTypes=m});
//# sourceMappingURL=Subheading-892dfa1f.js.map