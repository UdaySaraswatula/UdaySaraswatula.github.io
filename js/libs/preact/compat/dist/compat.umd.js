!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact"),require("preact/hooks")):"function"==typeof define&&define.amd?define(["exports","preact","preact/hooks"],t):t((n||self).preactCompat={},n.preact,n.preactHooks)}(this,function(n,t,e){function r(n,t){for(var e in t)n[e]=t[e];return n}function u(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function i(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function o(n){this.props=n}function c(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:u(this.props,n)}function i(e){return this.shouldComponentUpdate=r,t.createElement(n,e)}return i.displayName="Memo("+(n.displayName||n.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(o.prototype=new t.Component).isPureReactComponent=!0,o.prototype.shouldComponentUpdate=function(n,t){return u(this.props,n)||u(this.state,t)};var f=t.options.__b;t.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),f&&f(n)};var l="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function a(n){function t(t){var e=r({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=l,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var s=function(n,e){return null==n?null:t.toChildArray(t.toChildArray(n).map(e))},h={map:s,forEach:s,count:function(n){return n?t.toChildArray(n).length:0},only:function(n){var e=t.toChildArray(n);if(1!==e.length)throw"Children.only";return e[0]},toArray:t.toChildArray},d=t.options.__e;t.options.__e=function(n,t,e,r){if(n.then)for(var u,i=t;i=i.__;)if((u=i.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);d(n,t,e,r)};var v=t.options.unmount;function p(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=r({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return p(n,t,e)})),n}function m(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return m(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function b(){this.__u=0,this.t=null,this.__b=null}function y(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function _(n){var e,r,u;function i(i){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return t.createElement(r,i)}return i.displayName="Lazy",i.__f=!0,i}function g(){this.u=null,this.i=null}t.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),v&&v(n)},(b.prototype=new t.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=y(r.__v),i=!1,o=function(){i||(i=!0,e.__R=null,u?u(c):c())};e.__R=o;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=m(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(o,o)},b.prototype.componentWillUnmount=function(){this.t=[]},b.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),u=this.__v.__k[0].__c;this.__v.__k[0]=p(this.__b,r,u.__O=u.__P)}this.__b=null}var i=e.__a&&t.createElement(t.Fragment,null,n.fallback);return i&&(i.__h=null),[t.createElement(t.Fragment,null,e.__a?null:n.children),i]};var S=function(n,t,e){if(++e[1]===e[0]&&n.i.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.i.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function C(n){return this.getChildContext=function(){return n.context},n.children}function E(n){var e=this,r=n.o;e.componentWillUnmount=function(){t.render(null,e.l),e.l=null,e.o=null},e.o&&e.o!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.o=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.o.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.o.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.o.removeChild(n)}}),t.render(t.createElement(C,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function O(n,e){var r=t.createElement(E,{__v:n,o:e});return r.containerInfo=e,r}(g.prototype=new t.Component).__a=function(n){var t=this,e=y(t.__v),r=t.i.get(n);return r[0]++,function(u){var i=function(){t.props.revealOrder?(r.push(u),S(t,n,r)):u()};e?e(i):i()}},g.prototype.render=function(n){this.u=null,this.i=new Map;var e=t.toChildArray(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.i.set(e[r],this.u=[1,0,this.u]);return n.children},g.prototype.componentDidUpdate=g.prototype.componentDidMount=function(){var n=this;this.i.forEach(function(t,e){S(n,e,t)})};var w="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,R=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,x="undefined"!=typeof document,j=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function N(n,e,r){return null==e.__k&&(e.textContent=""),t.render(n,e),"function"==typeof r&&r(),n?n.__c:null}function T(n,e,r){return t.hydrate(n,e),"function"==typeof r&&r(),n?n.__c:null}t.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(t.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var k=t.options.event;function A(){}function I(){return this.cancelBubble}function L(){return this.defaultPrevented}t.options.event=function(n){return k&&(n=k(n)),n.persist=A,n.isPropagationStopped=I,n.isDefaultPrevented=L,n.nativeEvent=n};var U,D={configurable:!0,get:function(){return this.class}},F=t.options.vnode;t.options.vnode=function(n){var e=n.type,r=n.props,u=r;if("string"==typeof e){var i=-1===e.indexOf("-");for(var o in u={},r){var c=r[o];x&&"children"===o&&"noscript"===e||"value"===o&&"defaultValue"in r&&null==c||("defaultValue"===o&&"value"in r&&null==r.value?o="value":"download"===o&&!0===c?c="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!j(r.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&R.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===c&&(c=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),u[o]&&(o="oninputCapture")),u[o]=c)}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=t.toChildArray(r.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=t.toChildArray(r.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),n.props=u,r.class!=r.className&&(D.enumerable="className"in r,null!=r.className&&(u.class=r.className),Object.defineProperty(u,"className",D))}n.$$typeof=w,F&&F(n)};var M=t.options.__r;t.options.__r=function(n){M&&M(n),U=n.__c};var V={ReactCurrentDispatcher:{current:{readContext:function(n){return U.__n[n.__c].props.value}}}},W="17.0.2";function P(n){return t.createElement.bind(null,n)}function $(n){return!!n&&n.$$typeof===w}function z(n){return $(n)?t.cloneElement.apply(null,arguments):n}function B(n){return!!n.__k&&(t.render(null,n),!0)}function q(n){return n&&(n.base||1===n.nodeType&&n)||null}var H=function(n,t){return n(t)},Z=function(n,t){return n(t)},Y=t.Fragment;function G(n){n()}function J(n){return n}function K(){return[!1,G]}var Q=e.useLayoutEffect;function X(n,t){var r=t(),u=e.useState({h:{__:r,v:t}}),o=u[0].h,c=u[1];return e.useLayoutEffect(function(){o.__=r,o.v=t,i(o.__,t())||c({h:o})},[n,r,t]),e.useEffect(function(){return i(o.__,o.v())||c({h:o}),n(function(){i(o.__,o.v())||c({h:o})})},[n]),r}var nn={useState:e.useState,useId:e.useId,useReducer:e.useReducer,useEffect:e.useEffect,useLayoutEffect:e.useLayoutEffect,useInsertionEffect:Q,useTransition:K,useDeferredValue:J,useSyncExternalStore:X,startTransition:G,useRef:e.useRef,useImperativeHandle:e.useImperativeHandle,useMemo:e.useMemo,useCallback:e.useCallback,useContext:e.useContext,useDebugValue:e.useDebugValue,version:W,Children:h,render:N,hydrate:T,unmountComponentAtNode:B,createPortal:O,createElement:t.createElement,createContext:t.createContext,createFactory:P,cloneElement:z,createRef:t.createRef,Fragment:t.Fragment,isValidElement:$,findDOMNode:q,Component:t.Component,PureComponent:o,memo:c,forwardRef:a,flushSync:Z,unstable_batchedUpdates:H,StrictMode:Y,Suspense:b,SuspenseList:g,lazy:_,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:V};Object.defineProperty(n,"Component",{enumerable:!0,get:function(){return t.Component}}),Object.defineProperty(n,"Fragment",{enumerable:!0,get:function(){return t.Fragment}}),Object.defineProperty(n,"createContext",{enumerable:!0,get:function(){return t.createContext}}),Object.defineProperty(n,"createElement",{enumerable:!0,get:function(){return t.createElement}}),Object.defineProperty(n,"createRef",{enumerable:!0,get:function(){return t.createRef}}),n.Children=h,n.PureComponent=o,n.StrictMode=Y,n.Suspense=b,n.SuspenseList=g,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,n.cloneElement=z,n.createFactory=P,n.createPortal=O,n.default=nn,n.findDOMNode=q,n.flushSync=Z,n.forwardRef=a,n.hydrate=T,n.isValidElement=$,n.lazy=_,n.memo=c,n.render=N,n.startTransition=G,n.unmountComponentAtNode=B,n.unstable_batchedUpdates=H,n.useDeferredValue=J,n.useInsertionEffect=Q,n.useSyncExternalStore=X,n.useTransition=K,n.version=W,Object.keys(e).forEach(function(t){"default"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})});
//# sourceMappingURL=compat.umd.js.map
