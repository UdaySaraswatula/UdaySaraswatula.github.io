define(["exports"],function(o){"use strict";const e={browser:"unknown",browserMajorVersion:-1,deviceType:"unknown",platform:"unknown",touchSupport:"unknown",hoverSupport:"unknown"};let n;function r(o,e){let n;const r=o.match(e);if(r){const o=r[1];o&&(n=parseInt(o))}return null!=n?n:-1}o.getClientHints=function(o){if(void 0===n||o){let i;const t="undefined"!=typeof navigator&&navigator.userAgentData;if(i=t?function(o){const n=Object.assign({},e);for(const e of o.brands){const o=e.brand.toLowerCase();if(o.indexOf("chrome")>-1?n.browser="chrome":o.indexOf("edge")>-1&&(n.browser="edge"),"unknown"!==n.browser){n.browserMajorVersion=Number(e.version);break}}const r=o.platform.toLowerCase();"windows"===r?n.platform="windows":"android"===r?(n.platform="android",n.deviceType=o.mobile?"phone":"tablet"):"macos"===r&&(n.platform="mac");return n}(t):function(o){const n=Object.assign({},e);(o=o.toLowerCase()).indexOf("iphone")>-1?(n.platform="ios",n.deviceType="phone"):o.indexOf("ipad")>-1||o.indexOf("macintosh")>-1&&(null===navigator||void 0===navigator?void 0:navigator.maxTouchPoints)>0?(n.platform="ios",n.deviceType="tablet"):o.indexOf("mac")>-1?n.platform="mac":o.indexOf("android")>-1?n.platform="android":o.indexOf("win")>-1&&(n.platform="windows");o.indexOf("edg")>-1?(n.browser="edge",n.browserMajorVersion=r(o,/edg\/(\d+)/)):o.indexOf("chrome")>-1?(n.browser="chrome",n.browserMajorVersion=r(o,/chrome\/(\d+)/)):o.indexOf("crios")>-1?(n.browser="chrome",n.browserMajorVersion=r(o,/crios\/(\d+)/)):o.indexOf("fxios")>-1?(n.browser="firefox",n.browserMajorVersion=r(o,/fxios\/(\d+)/)):o.indexOf("firefox")>-1?(n.browser="firefox",n.browserMajorVersion=r(o,/rv:(\d+)/)):o.indexOf("safari")>-1&&(n.browser="safari",n.browserMajorVersion=r(o,/version\/(\d+)/));return n}(null!=o?o:"undefined"!=typeof navigator?navigator.userAgent:""),void 0!==o)return i;!function(o){var e,n;"undefined"==typeof window||!("ontouchstart"in window)&&0===navigator.maxTouchPoints?o.touchSupport="none":(null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(pointer: coarse)").matches)?o.touchSupport="primary":(null===(n=window.matchMedia)||void 0===n?void 0:n.call(window,"(any-pointer: coarse)").matches)&&(o.touchSupport="secondary")}(i),function(o){var e,n;"undefined"==typeof window||(null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(hover: none)").matches)?o.hoverSupport="none":"none"!==o.touchSupport&&(null===(n=window.matchMedia)||void 0===n?void 0:n.call(window,"(pointer: fine)").matches)?o.hoverSupport="events":o.hoverSupport="pseudo-classes"}(i),n=Object.assign({},i),Object.freeze(n)}return n}});
//# sourceMappingURL=clientHints-33be1380.js.map