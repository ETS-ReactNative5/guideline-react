webpackJsonp([2],{431:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{nasaAPOD:e.nasaAPOD}}Object.defineProperty(t,"__esModule",{value:!0});var f=n(0),l=n.n(f),u=n(9),s=n(128),d=(n.n(s),n(570)),c=n.n(d),p=n(135),m=n(136),h=n(577),A=(n.n(h),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),v=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),A(t,[{key:"componentDidMount",value:function(){this.props.fetchAPOD()}},{key:"render",value:function(){var e=void 0;return e="video"===this.props.nasaAPOD.media_type?l.a.createElement("iframe",{id:"nasa-video",title:"Nasa Video",className:"media-nasa",height:"100%;",alt:this.props.nasaAPOD.title,src:this.props.nasaAPOD.url,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("img",{className:"media-nasa",alt:this.props.nasaAPOD.title,src:this.props.nasaAPOD.hdurl}),l.a.createElement("div",null,l.a.createElement(s.Helmet,{defaultTitle:"NASA \xb7 Guideline Solutions"}),l.a.createElement("div",{className:"contact-form"},l.a.createElement("div",{className:"container t-pad-20 b-pad-20"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h4",null,"NASA - Picture of the day"))),l.a.createElement("div",{className:"media-nasa-div"},l.a.createElement(c.a,null,e)),l.a.createElement("div",{className:"container b-pad-60"},l.a.createElement("div",{className:"apod-date"},l.a.createElement(p.a,{value:this.props.nasaAPOD.date?this.props.nasaAPOD.date:new Date,day:"numeric",month:"long",year:"numeric"})),l.a.createElement("div",{className:"apod-title"},this.props.nasaAPOD.title),l.a.createElement("div",{className:"page-divider t-pad-10 b-pad-20"},l.a.createElement("div",null)),this.props.nasaAPOD.explanation,l.a.createElement("br",null))))}}]),t}(f.Component);t.default=Object(u.b)(o,{fetchAPOD:m.b})(v)},570:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),s=n(2),d=r(s),c=n(132),p=n(571),m=n(572),h=r(m),A=n(573),v=r(A),g=n(574),y=r(g),b=n(575),w=r(b),x=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.lazyLoadHandler=n.lazyLoadHandler.bind(n),e.throttle>0&&(e.debounce?n.lazyLoadHandler=(0,h.default)(n.lazyLoadHandler,e.throttle):n.lazyLoadHandler=(0,v.default)(n.lazyLoadHandler,e.throttle)),n.state={visible:!1},n}return o(t,e),f(t,[{key:"componentDidMount",value:function(){this._mounted=!0;var e=this.getEventNode();this.lazyLoadHandler(),this.lazyLoadHandler.flush&&this.lazyLoadHandler.flush(),(0,p.add)(window,"resize",this.lazyLoadHandler),(0,p.add)(e,"scroll",this.lazyLoadHandler)}},{key:"componentWillReceiveProps",value:function(){this.state.visible||this.lazyLoadHandler()}},{key:"shouldComponentUpdate",value:function(e,t){return t.visible}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.lazyLoadHandler.cancel&&this.lazyLoadHandler.cancel(),this.detachListeners()}},{key:"getEventNode",value:function(){return(0,y.default)((0,c.findDOMNode)(this))}},{key:"getOffset",value:function(){var e=this.props,t=e.offset,n=e.offsetVertical,r=e.offsetHorizontal,i=e.offsetTop,a=e.offsetBottom,o=e.offsetLeft,f=e.offsetRight,l=e.threshold,u=l||t,s=n||u,d=r||u;return{top:i||s,bottom:a||s,left:o||d,right:f||d}}},{key:"lazyLoadHandler",value:function(){if(this._mounted){var e=this.getOffset(),t=(0,c.findDOMNode)(this),n=this.getEventNode();if((0,w.default)(t,n,e)){var r=this.props.onContentVisible;this.setState({visible:!0},function(){r&&r()}),this.detachListeners()}}}},{key:"detachListeners",value:function(){var e=this.getEventNode();(0,p.remove)(window,"resize",this.lazyLoadHandler),(0,p.remove)(e,"scroll",this.lazyLoadHandler)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.height,i=e.width,a=this.state.visible,o={height:r,width:i},f="LazyLoad"+(a?" is-visible":"")+(n?" "+n:"");return u.default.createElement(this.props.elementType,{className:f,style:o},a&&l.Children.only(t))}}]),t}(l.Component);t.default=x,x.propTypes={children:d.default.node.isRequired,className:d.default.string,debounce:d.default.bool,elementType:d.default.string,height:d.default.oneOfType([d.default.string,d.default.number]),offset:d.default.number,offsetBottom:d.default.number,offsetHorizontal:d.default.number,offsetLeft:d.default.number,offsetRight:d.default.number,offsetTop:d.default.number,offsetVertical:d.default.number,threshold:d.default.number,throttle:d.default.number,width:d.default.oneOfType([d.default.string,d.default.number]),onContentVisible:d.default.func},x.defaultProps={elementType:"div",debounce:!0,offset:0,offsetBottom:0,offsetHorizontal:0,offsetLeft:0,offsetRight:0,offsetTop:0,offsetVertical:0,throttle:250}},571:function(e,t,n){var r,i;!function(a,o){r=o,void 0!==(i="function"===typeof r?r.call(t,n,t,e):r)&&(e.exports=i)}(0,function(){function e(e,t){return function(n,r,i,a){n[e]?n[e](r,i,a):n[t]&&n[t]("on"+r,i)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})},572:function(e,t,n){(function(t){function n(e,t,n){function i(t){var n=h,r=A;return h=A=void 0,C=t,g=e.apply(r,n)}function a(e){return C=e,y=setTimeout(s,t),B?i(e):g}function l(e){var n=e-O,r=e-C,i=t-n;return E?w(i,v-r):i}function u(e){var n=e-O,r=e-C;return void 0===O||n>=t||n<0||E&&r>=v}function s(){var e=x();if(u(e))return d(e);y=setTimeout(s,l(e))}function d(e){return y=void 0,j&&h?i(e):(h=A=void 0,g)}function c(){void 0!==y&&clearTimeout(y),C=0,h=O=A=y=void 0}function p(){return void 0===y?g:d(x())}function m(){var e=x(),n=u(e);if(h=arguments,A=this,O=e,n){if(void 0===y)return a(O);if(E)return y=setTimeout(s,t),i(O)}return void 0===y&&(y=setTimeout(s,t)),g}var h,A,v,g,y,O,C=0,B=!1,E=!1,j=!0;if("function"!=typeof e)throw new TypeError(f);return t=o(t)||0,r(n)&&(B=!!n.leading,E="maxWait"in n,v=E?b(o(n.maxWait)||0,t):v,j="trailing"in n?!!n.trailing:j),m.cancel=c,m.flush=p,m}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||i(e)&&y.call(e)==u}function o(e){if("number"==typeof e)return e;if(a(e))return l;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=c.test(e);return n||p.test(e)?m(e.slice(2),n?2:8):d.test(e)?l:+e}var f="Expected a function",l=NaN,u="[object Symbol]",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,A="object"==typeof self&&self&&self.Object===Object&&self,v=h||A||Function("return this")(),g=Object.prototype,y=g.toString,b=Math.max,w=Math.min,x=function(){return v.Date.now()};e.exports=n}).call(t,n(12))},573:function(e,t,n){(function(t){function n(e,t,n){function r(t){var n=h,r=A;return h=A=void 0,C=t,g=e.apply(r,n)}function a(e){return C=e,y=setTimeout(s,t),B?r(e):g}function o(e){var n=e-b,r=e-C,i=t-n;return E?x(i,v-r):i}function u(e){var n=e-b,r=e-C;return void 0===b||n>=t||n<0||E&&r>=v}function s(){var e=O();if(u(e))return d(e);y=setTimeout(s,o(e))}function d(e){return y=void 0,j&&h?r(e):(h=A=void 0,g)}function c(){void 0!==y&&clearTimeout(y),C=0,h=b=A=y=void 0}function p(){return void 0===y?g:d(O())}function m(){var e=O(),n=u(e);if(h=arguments,A=this,b=e,n){if(void 0===y)return a(b);if(E)return y=setTimeout(s,t),r(b)}return void 0===y&&(y=setTimeout(s,t)),g}var h,A,v,g,y,b,C=0,B=!1,E=!1,j=!0;if("function"!=typeof e)throw new TypeError(l);return t=f(t)||0,i(n)&&(B=!!n.leading,E="maxWait"in n,v=E?w(f(n.maxWait)||0,t):v,j="trailing"in n?!!n.trailing:j),m.cancel=c,m.flush=p,m}function r(e,t,r){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError(l);return i(r)&&(a="leading"in r?!!r.leading:a,o="trailing"in r?!!r.trailing:o),n(e,t,{leading:a,maxWait:t,trailing:o})}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==typeof e}function o(e){return"symbol"==typeof e||a(e)&&b.call(e)==s}function f(e){if("number"==typeof e)return e;if(o(e))return u;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?h(e.slice(2),n?2:8):c.test(e)?u:+e}var l="Expected a function",u=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,h=parseInt,A="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,g=A||v||Function("return this")(),y=Object.prototype,b=y.toString,w=Math.max,x=Math.min,O=function(){return g.Date.now()};e.exports=r}).call(t,n(12))},574:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return"undefined"!==typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},i=function(e){return r(e,"overflow")+r(e,"overflow-y")+r(e,"overflow-x")},a=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(i(t)))return t;t=t.parentNode}return window};t.default=a},575:function(e,t,n){"use strict";function r(e,t,n){if(o(e))return!1;var r=void 0,i=void 0,f=void 0,l=void 0;if("undefined"===typeof t||t===window)r=window.pageYOffset,f=window.pageXOffset,i=r+window.innerHeight,l=f+window.innerWidth;else{var u=(0,a.default)(t);r=u.top,f=u.left,i=r+t.offsetHeight,l=f+t.offsetWidth}var s=(0,a.default)(e);return r<=s.top+e.offsetHeight+n.top&&i>=s.top-n.bottom&&f<=s.left+e.offsetWidth+n.left&&l>=s.left-n.right}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(576),a=function(e){return e&&e.__esModule?e:{default:e}}(i),o=function(e){return null===e.offsetParent}},576:function(e,t,n){"use strict";function r(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},577:function(e,t,n){var r=n(578);"string"===typeof r&&(r=[[e.i,r,""]]);var i={hmr:!1};i.transform=void 0;n(426)(r,i);r.locals&&(e.exports=r.locals)},578:function(e,t,n){t=e.exports=n(425)(!0),t.push([e.i,".media-nasa {\r\n    width: 90%;\r\n    margin-right:5%;\r\n    margin-left:5%;\r\n    text-align: center;\r\n    max-width:1024px;\r\n}\r\n\r\n.media-nasa-div {\r\n    text-align: center;\r\n}\r\n\r\n.apod-title {\r\n   text-align: center;\r\n   font-weight:bold;\r\n   padding-top:2px;\r\n   padding-bottom:20px;\r\n   font-size:1.2rem;\r\n}\r\n\r\n.apod-date {\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n#nasa-video {\r\n    min-height:580px;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    .media-nasa {\r\n        width: 94%;\r\n        margin-right: 3%;\r\n        margin-left: 3%;\r\n    }\r\n    #nasa-video {\r\n        min-height: 500px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .media-nasa {\r\n        width: 96%;\r\n        margin-right: 2%;\r\n        margin-left: 2%;\r\n    }\r\n    #nasa-video {\r\n        min-height: 440px;\r\n    }\r\n}\r\n\r\n@media (max-width: 560px) {\r\n    .media-nasa {\r\n        width: 100%;\r\n        margin-right: 0%;\r\n        margin-left: 0%;\r\n    }\r\n    #nasa-video {\r\n        min-height: 400px;\r\n    }\r\n}\r\n","",{version:3,sources:["nasa.css"],names:[],mappings:"AAAA;IACI,UAAU;IACV,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;GACG,kBAAkB;GAClB,gBAAgB;GAChB,eAAe;GACf,mBAAmB;GACnB,gBAAgB;AACnB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,UAAU;QACV,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,UAAU;QACV,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,WAAW;QACX,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;AACJ",file:"nasa.css",sourcesContent:[".media-nasa {\r\n    width: 90%;\r\n    margin-right:5%;\r\n    margin-left:5%;\r\n    text-align: center;\r\n    max-width:1024px;\r\n}\r\n\r\n.media-nasa-div {\r\n    text-align: center;\r\n}\r\n\r\n.apod-title {\r\n   text-align: center;\r\n   font-weight:bold;\r\n   padding-top:2px;\r\n   padding-bottom:20px;\r\n   font-size:1.2rem;\r\n}\r\n\r\n.apod-date {\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n#nasa-video {\r\n    min-height:580px;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    .media-nasa {\r\n        width: 94%;\r\n        margin-right: 3%;\r\n        margin-left: 3%;\r\n    }\r\n    #nasa-video {\r\n        min-height: 500px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .media-nasa {\r\n        width: 96%;\r\n        margin-right: 2%;\r\n        margin-left: 2%;\r\n    }\r\n    #nasa-video {\r\n        min-height: 440px;\r\n    }\r\n}\r\n\r\n@media (max-width: 560px) {\r\n    .media-nasa {\r\n        width: 100%;\r\n        margin-right: 0%;\r\n        margin-left: 0%;\r\n    }\r\n    #nasa-video {\r\n        min-height: 400px;\r\n    }\r\n}\r\n"]}])}});
//# sourceMappingURL=2.3c57f824.chunk.js.map