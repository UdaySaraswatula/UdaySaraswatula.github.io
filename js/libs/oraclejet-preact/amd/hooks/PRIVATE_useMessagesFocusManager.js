define(["exports","preact/hooks"],function(e,n){"use strict";const t=new Map,o=[],u=new Map;let r,c,l=!1;function i(e){0===t.size||"F6"!==e.key||e.defaultPrevented||function(e){var n,u,r,l,i;for(let s=function(e,n,t=-1){const o=e.indexOf(n);return-1!==o?o:t}(o,c,o.length)-1;s>-1;s--){const d=o[s],{ref:a}=null!==(n=t.get(d))&&void 0!==n?n:{};if(null===(r=null===(u=null==a?void 0:a.current)||void 0===u?void 0:u.focus)||void 0===r?void 0:r.call(u)){if(e.preventDefault(),c){const{callbacks:e}=null!==(l=t.get(c))&&void 0!==l?l:{};null===(i=null==e?void 0:e.onFocusLeave)||void 0===i||i.call(e)}return!0}}return!1}(e)||c&&v(c,e)}function s(e){r=e.target}function d(e,n){var o;if(!t.has(e)||n.defaultPrevented)return;c=e;const{callbacks:l}=t.get(e);r&&!function(e){var n;for(const{ref:o}of t.values())if(null===(n=o.current)||void 0===n?void 0:n.contains(e))return!0;return!1}(r)&&(u.set(e,r),null===(o=null==l?void 0:l.onFocus)||void 0===o||o.call(l))}function a(e,n){t.set(e,n),o.push(e)}function f(e){t.has(e)&&(t.delete(e),o.splice(o.indexOf(e),1))}function v(e,n){var r,c;const l=function(e){for(let n=o.indexOf(e);n<o.length;n++)if(u.has(o[n]))return u.get(o[n]);return null}(e),{callbacks:i}=null!==(r=t.get(e))&&void 0!==r?r:{};return!(!l||!document.body.contains(l))&&(l.focus(),null===(c=null==i?void 0:i.onFocusLeave)||void 0===c||c.call(i),u.clear(),null==n||n.preventDefault(),!0)}const g={prioritize:function(e){if(!t.has(e))return;const n=t.get(e);f(e),a(e,n)},register:function(e,n,o={handleEscapeKey:!0}){l||(document.documentElement.addEventListener("keydown",i,!0),document.documentElement.addEventListener("blur",s,!0),l=!0),a(e,n);const u={onfocusin:n=>d(e,n),onfocusout:n=>function(e,n){t.has(e)&&!n.defaultPrevented&&(c=void 0)}(e,n)};return o.handleEscapeKey&&(u.onKeyUp=n=>function(e,n){t.has(e)&&!n.defaultPrevented&&"keyup"===n.type&&["Escape"].includes(n.key)&&v(e,n)}(e,n)),u},togglePreviousFocus:v,unregister:function(e){f(e),function(e){u.delete(e)}(e),l&&0===t.size&&(document.documentElement.removeEventListener("keydown",i,!0),document.documentElement.removeEventListener("blur",s,!0),l=!1)}};e.useMessageFocusManager=function(e,t,o){const u=n.useRef(Symbol()),r=n.useRef(g),[c,l]=n.useState({}),i=n.useMemo(()=>({prioritize:()=>r.current.prioritize(u.current),restorePriorFocus:()=>r.current.togglePreviousFocus(u.current)}),[]);return n.useEffect(()=>{const n=r.current,c=u.current;return l(n.register(c,{ref:e,callbacks:t},o)),()=>n.unregister(c)},[]),{handlers:c,controller:i}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_useMessagesFocusManager.js.map