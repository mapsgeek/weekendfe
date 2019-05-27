(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.getTokens}});var r=n(92)},366:function(e,t,n){"use strict";var r=n(34);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=y,t.default=void 0;var o=r(n(160)),a=r(n(43)),u=r(n(44)),i=r(n(89)),c=r(n(90)),l=r(n(91)),f=r(n(65)),d=r(n(0)),s=r(n(45)),p=r(n(367)),h=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(d.default.Component);(0,f.default)(h,"contextTypes",{headManager:s.default.object});var v="next-head";function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return[d.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var m=["name","httpEquiv","charSet","itemProp","property"],b=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var g=(0,p.default)(function(e){return e.map(function(e){return d.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return d.default.Fragment&&t.type===d.default.Fragment?e.concat(d.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(y("")).filter(Boolean).filter((t=new o.default,n=new o.default,r=new o.default,a={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var u=0,i=m.length;u<i;u++){var c=m[u];if(e.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var l=e.props[c],f=a[c]||new o.default;if(f.has(l)&&-1===b.indexOf(l))return!1;f.add(l),a[c]=f}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+v,r=e.key||t;return d.default.cloneElement(e,{key:r,className:n})});var t,n,r,a},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(h);t.default=g},367:function(e,t,n){"use strict";var r=n(139),o=n(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,y=new p.default;function m(r){o=e((0,s.default)(y)),b.canUseDOM?t.call(r,o):n&&(o=n(o))}var b=function(e){function t(e){var n;return(0,a.default)(this,t),n=(0,u.default)(this,(0,i.default)(t).call(this,e)),t.canUseDOM||(y.add((0,f.default)((0,f.default)(n))),m((0,f.default)((0,f.default)(n)))),n}return(0,l.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,y.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){y.add(this),m(this)}},{key:"componentDidUpdate",value:function(){m(this)}},{key:"componentWillUnmount",value:function(){y.delete(this),m(this)}},{key:"render",value:function(){return h.default.createElement(r,null,this.props.children)}}]),t}(h.Component);return(0,d.default)(b,"canUseDOM","undefined"!=typeof window),(0,d.default)(b,"contextTypes",r.contextTypes),(0,d.default)(b,"displayName","SideEffect(".concat((0,v.getDisplayName)(r),")")),b}};var a=o(n(43)),u=o(n(89)),i=o(n(90)),c=o(n(44)),l=o(n(91)),f=o(n(178)),d=o(n(65)),s=o(n(368)),p=o(n(160)),h=r(n(0)),v=n(146)},368:function(e,t,n){var r=n(369),o=n(370),a=n(378);e.exports=function(e){return r(e)||o(e)||a()}},369:function(e,t,n){var r=n(176);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},370:function(e,t,n){var r=n(371),o=n(375);e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},371:function(e,t,n){e.exports=n(372)},372:function(e,t,n){n(88),n(373),e.exports=n(17).Array.from},373:function(e,t,n){"use strict";var r=n(87),o=n(29),a=n(143),u=n(344),i=n(345),c=n(171),l=n(374),f=n(319);o(o.S+o.F*!n(348)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,d,s=a(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,m=0,b=f(s);if(y&&(v=r(v,h>2?arguments[2]:void 0,2)),null==b||p==Array&&i(b))for(n=new p(t=c(s.length));t>m;m++)l(n,m,y?v(s[m],m):s[m]);else for(d=b.call(s),n=new p;!(o=d.next()).done;m++)l(n,m,y?u(d,v,[o.value,m],!0):o.value);return n.length=m,n}})},374:function(e,t,n){"use strict";var r=n(63),o=n(159);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},375:function(e,t,n){e.exports=n(376)},376:function(e,t,n){n(102),n(88),e.exports=n(377)},377:function(e,t,n){var r=n(174),o=n(40)("iterator"),a=n(145);e.exports=n(17).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(r(t))}},378:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DictionaryContext=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));var o=r.createContext({});t.DictionaryContext=o;var a=function(e){var t=e.values,n=e.children;return r.createElement(o.Provider,{value:t},n)};t.default=a},485:function(e,t,n){e.exports=n(627)},508:function(e,t,n){e.exports=n(366)},509:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=n(1),a=u(n(379));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.theme,n=e.dictionary,u=e.children;return r.default.createElement(o.ThemeProvider,{theme:t},n?r.default.createElement(a.default,{values:n},r.default.Children.only(u)):r.default.Children.only(u))};t.default=i},625:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(626),{page:e.exports.default}})},626:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(485),a=n.n(o),u=n(508),i=n.n(u),c=n(509),l=n.n(c),f=n(179),d=n.n(f),s=n(1);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  body {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 auto;\n    background-color: ",";\n  }\n"]);return b=function(){return e},e}var g=Object(s.createGlobalStyle)(b(),function(e){return e.theme.orbit.paletteCloudLight}),w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,y(t).apply(this,arguments))}var n,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a.a),n=t,(u=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return r.createElement(o.Container,null,r.createElement(i.a,null,r.createElement("title",null,"JS Weekend")),r.createElement(l.a,{theme:{orbit:d()()}},r.createElement(r.Fragment,null,r.createElement(g,null),r.createElement(t,n))))}}])&&h(n.prototype,u),c&&h(n,c),t}();t.default=w},627:function(e,t,n){"use strict";var r=n(139),o=n(34);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=O,t.Container=t.default=void 0;var a=o(n(316)),u=o(n(318)),i=o(n(628)),c=o(n(43)),l=o(n(44)),f=o(n(89)),d=o(n(90)),s=o(n(91)),p=o(n(65)),h=r(n(0)),v=o(n(45)),y=n(146),m=n(177),b=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,d.default)(t).apply(this,arguments))}var n;return(0,s.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=O(t);return h.default.createElement(g,null,h.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,y.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=b,(0,p.default)(b,"childContextTypes",{headManager:v.default.object,router:v.default.object});var g=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,d.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=g;var w=(0,y.execOnce)(function(){0});function O(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},628:function(e,t,n){var r=n(322);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o}},[[625,0,1]]]);