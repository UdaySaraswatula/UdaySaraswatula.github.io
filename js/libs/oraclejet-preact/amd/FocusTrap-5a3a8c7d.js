define(["exports","preact/jsx-runtime","preact","preact/compat","./utils/UNSAFE_classNames",'module',"./utils/PRIVATE_tabbableUtils","./classNames-f11010a7"],function(e,t,n,r,s,c,u,o){"use strict";const a="_1wiccdc",l=r.forwardRef(({onFocus:e},n)=>t.jsx("div",{class:a,onFocus:e,ref:n,tabIndex:0})),i=e=>{e&&u.isTabbableElement(e)&&setTimeout(()=>{u.focusOn(e)},0)},f=(e,t)=>{if(0===e.length)return!1;const n=null!=t?t:u.getActiveElement(e[0]);return e.some(e=>e===n||(null==e?void 0:e.contains(n)))},d="_5u2asu";e.FocusTrap=({autoFocusRef:e,children:s,isDisabled:c=!1,restoreFocusRef:a})=>{const p=r.useRef(null),m=r.useRef(null),b=r.useRef(null),F=r.useRef(null),g=o.classNames([d]),v=r.useCallback(e=>{const t=p.current;!c&&t&&e&&(e&&f([t,m.current,b.current],e)?F.current=e:F.current?u.focusOn(F.current):u.focusWithin(t))},[c]);return r.useEffect(()=>{const t=p.current;if(!t||c)return;const n=u.getActiveElement(t);e&&e.current?u.focusOn(e.current):v(n);const r=a;return()=>{!1!==r&&i((null==r?void 0:r.current)||n)}},[e,v,c,a]),t.jsxs(n.Fragment,{children:[!c&&t.jsx(l,{onFocus:e=>{!c&&p.current&&(u.focusOnEnd(p.current),e.stopPropagation(),e.preventDefault())},ref:m}),t.jsx("div",Object.assign({onFocus:e=>{F.current=e.target},ref:p,class:g},{children:s})),!c&&t.jsx(l,{onFocus:e=>{!c&&p.current&&(u.focusOnStart(p.current),e.stopPropagation(),e.preventDefault())},ref:b})]})}});
//# sourceMappingURL=FocusTrap-5a3a8c7d.js.map