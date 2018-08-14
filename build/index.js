module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){var n="Webkit Moz O ms".split(" "),r=.001;function i(t,e,r){for(var i=t.style,s=0;s<n.length;++s){i[n[s]+o(e)]=r}i[e]=r}function o(t){return t.charAt(0).toUpperCase()+t.slice(1)}function s(t){return!function(t){return"[object Array]"===Object.prototype.toString.call(t)}(t)&&("object"===typeof t&&!!t)}function a(t,e){for(var n in t){if(t.hasOwnProperty(n))e(t[n],n)}}t.exports={extend:function t(e,n,r){for(var i in e=e||{},n=n||{},r=r||!1,n)if(n.hasOwnProperty(i)){var o=e[i],a=n[i];r&&s(o)&&s(a)?e[i]=t(o,a,r):e[i]=a}return e},render:function(t,e){var n=t;for(var r in e)if(e.hasOwnProperty(r)){var i=e[r],o=new RegExp("\\{"+r+"\\}","g");n=n.replace(o,i)}return n},setStyle:i,setStyles:function(t,e){a(e,function(e,n){null!==e&&void 0!==e&&(s(e)&&!0===e.prefix?i(t,n,e.value):t.style[n]=e)})},capitalize:o,isString:function(t){return"string"==typeof t||t instanceof String},isFunction:function(t){return"function"==typeof t},isObject:s,forEachObject:a,floatEquals:function(t,e){return Math.abs(t-e)<r},removeChildren:function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}}},function(t,e,n){var r=n(2),i=n(0),o=function t(e,n){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=i.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},n,!0),i.isObject(n)&&void 0!==n.svgStyle&&(this._opts.svgStyle=n.svgStyle),i.isObject(n)&&i.isObject(n.text)&&void 0!==n.text.style&&(this._opts.text.style=n.text.style);var o,s=this._createSvgView(this._opts);if(!(o=i.isString(e)?document.querySelector(e):e))throw new Error("Container does not exist: "+e);this._container=o,this._container.appendChild(s.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&i.setStyles(s.svg,this._opts.svgStyle),this.svg=s.svg,this.path=s.path,this.trail=s.trail,this.text=null;var a=i.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new r(s.path,a),i.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value)}};o.prototype.animate=function(t,e,n){if(null===this._progressPath)throw new Error("Object is destroyed");this._progressPath.animate(t,e,n)},o.prototype.stop=function(){if(null===this._progressPath)throw new Error("Object is destroyed");void 0!==this._progressPath&&this._progressPath.stop()},o.prototype.destroy=function(){if(null===this._progressPath)throw new Error("Object is destroyed");this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},o.prototype.set=function(t){if(null===this._progressPath)throw new Error("Object is destroyed");this._progressPath.set(t)},o.prototype.value=function(){if(null===this._progressPath)throw new Error("Object is destroyed");return void 0===this._progressPath?0:this._progressPath.value()},o.prototype.setText=function(t){if(null===this._progressPath)throw new Error("Object is destroyed");null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),i.isObject(t)?(i.removeChildren(this.text),this.text.appendChild(t)):this.text.innerHTML=t},o.prototype._createSvgView=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(e,t);var n=null;(t.trailColor||t.trailWidth)&&(n=this._createTrail(t),e.appendChild(n));var r=this._createPath(t);return e.appendChild(r),{svg:e,path:r,trail:n}},o.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 100")},o.prototype._createPath=function(t){var e=this._pathString(t);return this._createPathElement(e,t)},o.prototype._createTrail=function(t){var e=this._trailString(t),n=i.extend({},t);return n.trailColor||(n.trailColor="#eee"),n.trailWidth||(n.trailWidth=n.strokeWidth),n.color=n.trailColor,n.strokeWidth=n.trailWidth,n.fill=null,this._createPathElement(e,n)},o.prototype._createPathElement=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),n.setAttribute("stroke",e.color),n.setAttribute("stroke-width",e.strokeWidth),e.fill?n.setAttribute("fill",e.fill):n.setAttribute("fill-opacity","0"),n},o.prototype._createTextContainer=function(t,e){var n=document.createElement("div");n.className=t.text.className;var r=t.text.style;return r&&(t.text.autoStyleContainer&&(e.style.position="relative"),i.setStyles(n,r),r.color||(n.style.color=t.color)),this._initializeTextContainer(t,e,n),n},o.prototype._initializeTextContainer=function(t,e,n){},o.prototype._pathString=function(t){throw new Error("Override this function for each progress bar")},o.prototype._trailString=function(t){throw new Error("Override this function for each progress bar")},o.prototype._warnContainerAspectRatio=function(t){if(this.containerAspectRatio){var e=window.getComputedStyle(t,null),n=parseFloat(e.getPropertyValue("width"),10),r=parseFloat(e.getPropertyValue("height"),10);i.floatEquals(this.containerAspectRatio,n/r)||(console.warn("Incorrect aspect ratio of container","#"+t.id,"detected:",e.getPropertyValue("width")+"(width)","/",e.getPropertyValue("height")+"(height)","=",n/r),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},t.exports=o},function(t,e,n){var r=n(8),i=n(0),o={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},s=function t(e,n){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");var r;n=i.extend({duration:800,easing:"linear",from:{},to:{},step:function(){}},n),r=i.isString(e)?document.querySelector(e):e,this.path=r,this._opts=n,this._tweenable=null;var o=this.path.getTotalLength();this.path.style.strokeDasharray=o+" "+o,this.set(0)};s.prototype.value=function(){var t=this._getComputedDashOffset(),e=this.path.getTotalLength();return parseFloat((1-t/e).toFixed(6),10)},s.prototype.set=function(t){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(t);var e=this._opts.step;if(i.isFunction(e)){var n=this._easing(this._opts.easing);e(this._calculateTo(t,n),this._opts.shape||this,this._opts.attachment)}},s.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},s.prototype.animate=function(t,e,n){e=e||{},i.isFunction(e)&&(n=e,e={});var o=i.extend({},e),s=i.extend({},this._opts);e=i.extend(s,e);var a=this._easing(e.easing),u=this._resolveFromAndTo(t,a,o);this.stop(),this.path.getBoundingClientRect();var c=this._getComputedDashOffset(),h=this._progressToOffset(t),p=this;this._tweenable=new r,this._tweenable.tween({from:i.extend({offset:c},u.from),to:i.extend({offset:h},u.to),duration:e.duration,easing:a,step:function(t){p.path.style.strokeDashoffset=t.offset;var n=e.shape||p;e.step(t,n,e.attachment)},finish:function(t){i.isFunction(n)&&n()}})},s.prototype._getComputedDashOffset=function(){var t=window.getComputedStyle(this.path,null);return parseFloat(t.getPropertyValue("stroke-dashoffset"),10)},s.prototype._progressToOffset=function(t){var e=this.path.getTotalLength();return e-t*e},s.prototype._resolveFromAndTo=function(t,e,n){return n.from&&n.to?{from:n.from,to:n.to}:{from:this._calculateFrom(e),to:this._calculateTo(t,e)}},s.prototype._calculateFrom=function(t){return r.interpolate(this._opts.from,this._opts.to,this.value(),t)},s.prototype._calculateTo=function(t,e){return r.interpolate(this._opts.from,this._opts.to,t,e)},s.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable=null)},s.prototype._easing=function(t){return o.hasOwnProperty(t)?o[t]:t},t.exports=s},function(t,e,n){var r=n(1),i=n(0),o=function(t,e){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,r.apply(this,arguments)};(o.prototype=new r).constructor=o,o.prototype._pathString=function(t){var e=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(e=t.trailWidth);var n=50-e/2;return i.render(this._pathTemplate,{radius:n,"2radius":2*n})},o.prototype._trailString=function(t){return this._pathString(t)},t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Line=e.SemiCircle=e.Circle=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(5),s=u(o),a=u(n(6));function u(t){return t&&t.__esModule?t:{default:t}}var c=null,h=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.progressBar=(0,o.createRef)(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),i(e,[{key:"componentDidMount",value:function(){var t,e=void 0;e="line"===this.props.type?a.default.Line:"semicircle"===this.props.type?a.default.SemiCircle:a.default.Circle,t="string"==typeof this.props.options.text?{value:this.props.options.text}:this.props.options.text;var n=this.props.options;n.text=t,c=new e(this.progressBar.current,n,this.props.callback)}},{key:"render",value:function(){if(null!=c)switch(this.props.startAnimate){case 0:console.log("render shape start"),c.animate(this.props.progress>=0?this.props.progress:.5,this.props.options,this.props.onStop);break;case 1:console.log("render shape stop"),c.stop();break;case 2:console.log("render shape finish"),c.set(0)}return s.default.createElement("div",{ref:this.progressBar,className:"progressbar-container",style:this.props.container_style})}}]),e}();e.Circle=function(t){return s.default.createElement(h,r({type:"circle",container_class:t.container_class,options:t.options},t))},e.SemiCircle=function(t){return s.default.createElement(h,r({type:"semicircle",container_class:t.container_class,options:t.options},t))},e.Line=function(t){return s.default.createElement(h,r({type:"line",container_class:t.container_class,options:t.options},t))}},function(t,e){t.exports=require("react")},function(t,e,n){t.exports={Line:n(7),Circle:n(3),SemiCircle:n(9),Path:n(2),Shape:n(1),utils:n(0)}},function(t,e,n){var r=n(1),i=n(0),o=function(t,e){this._pathTemplate="M 0,{center} L 100,{center}",r.apply(this,arguments)};(o.prototype=new r).constructor=o,o.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none")},o.prototype._pathString=function(t){return i.render(this._pathTemplate,{center:t.strokeWidth/2})},o.prototype._trailString=function(t){return this._pathString(t)},t.exports=o},function(t,e,n){(function(){var e=this||Function("return this")(),n=function(){"use strict";var n,r,i,o,s,a,u="linear",c=1e3/60,h=Date.now?Date.now:function(){return+new Date},p="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:h;function l(){}function f(t,e){var n;for(n in t)Object.hasOwnProperty.call(t,n)&&e(n)}function d(t,e){return f(e,function(n){t[n]=e[n]}),t}function _(t,e){f(e,function(n){void 0===t[n]&&(t[n]=e[n])})}function g(t,e,r,i,o,s,a){var u,c,h,p=t<s?0:(t-s)/o;for(u in e)e.hasOwnProperty(u)&&(h="function"==typeof(c=a[u])?c:n[c],e[u]=y(r[u],i[u],h,p));return e}function y(t,e,n,r){return t+(e-t)*n(r)}function m(t,e){var n=b.prototype.filter,r=t._filterArgs;f(n,function(i){void 0!==n[i][e]&&n[i][e].apply(t,r)})}function v(t,e,n,r,u,h,l,f,d,_,y){i=e+n+r,o=Math.min(y||p(),i),s=o>=i,a=r-(i-o),t.isPlaying()&&(s?(d(l,t._attachment,a),t.stop(!0)):(t._scheduleId=_(t._timeoutHandler,c),m(t,"beforeTween"),o<e+n?g(1,u,h,l,1,1,f):g(o,u,h,l,r,e+n,f),m(t,"afterTween"),d(u,t._attachment,a)))}function w(t,e){var n={},r=typeof e;return f(t,"string"===r||"function"===r?function(t){n[t]=e}:function(t){n[t]||(n[t]=e[t]||u)}),n}function b(t,e){this._currentState=t||{},this._configured=!1,this._scheduleFunction=r,void 0!==e&&this.setConfig(e)}return r="undefined"!=typeof window&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame)||setTimeout,b.prototype.tween=function(t){return this._isTweening?this:(void 0===t&&this._configured||this.setConfig(t),this._timestamp=p(),this._start(this.get(),this._attachment),this.resume())},b.prototype.setConfig=function(t){t=t||{},this._configured=!0,this._attachment=t.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=t.delay||0,this._start=t.start||l,this._step=t.step||l,this._finish=t.finish||l,this._duration=t.duration||500,this._currentState=d({},t.from||this.get()),this._originalState=this.get(),this._targetState=d({},t.to||this.get());var e=this;this._timeoutHandler=function(){v(e,e._timestamp,e._delay,e._duration,e._currentState,e._originalState,e._targetState,e._easing,e._step,e._scheduleFunction)};var n=this._currentState,r=this._targetState;return _(r,n),this._easing=w(n,t.easing||u),this._filterArgs=[n,this._originalState,r,this._easing],m(this,"tweenCreated"),this},b.prototype.get=function(){return d({},this._currentState)},b.prototype.set=function(t){this._currentState=t},b.prototype.pause=function(){return this._pausedAtTime=p(),this._isPaused=!0,this},b.prototype.resume=function(){return this._isPaused&&(this._timestamp+=p()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},b.prototype.seek=function(t){t=Math.max(t,0);var e=p();return this._timestamp+t===0?this:(this._timestamp=e-t,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,v(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,e),this.pause()),this)},b.prototype.stop=function(t){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=l,(e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.oCancelAnimationFrame||e.msCancelAnimationFrame||e.mozCancelRequestAnimationFrame||e.clearTimeout)(this._scheduleId),t&&(m(this,"beforeTween"),g(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),m(this,"afterTween"),m(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},b.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},b.prototype.setScheduleFunction=function(t){this._scheduleFunction=t},b.prototype.dispose=function(){var t;for(t in this)this.hasOwnProperty(t)&&delete this[t]},b.prototype.filter={},b.prototype.formula={linear:function(t){return t}},n=b.prototype.formula,d(b,{now:p,each:f,tweenProps:g,tweenProp:y,applyFilter:m,shallowCopy:d,defaults:_,composeEasingObject:w}),"function"==typeof SHIFTY_DEBUG_NOW&&(e.timeoutHandler=v),t.exports=b,b}();n.shallowCopy(n.prototype.formula,{easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInQuint:function(t){return Math.pow(t,5)},easeOutQuint:function(t){return Math.pow(t-1,5)+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},elastic:function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},swingFromTo:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},swingFrom:function(t){var e=1.70158;return t*t*((e+1)*t-e)},swingTo:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},bounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bouncePast:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},easeFromTo:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeFrom:function(t){return Math.pow(t,4)},easeTo:function(t){return Math.pow(t,.25)}}),function(){function t(t,e,n,r,i,o){var s=0,a=0,u=0,c=0,h=0,p=0;function l(t){return((s*t+a)*t+u)*t}function f(t){return(3*s*t+2*a)*t+u}function d(t){return t>=0?t:0-t}return s=1-(u=3*e)-(a=3*(r-e)-u),c=1-(p=3*n)-(h=3*(i-n)-p),function(t,e){return function(t){return((c*t+h)*t+p)*t}(function(t,e){var n,r,i,o,s,a;for(i=t,a=0;a<8;a++){if(d(o=l(i)-t)<e)return i;if(d(s=f(i))<1e-6)break;i-=o/s}if(r=1,(i=t)<(n=0))return n;if(i>r)return r;for(;n<r;){if(d((o=l(i))-t)<e)return i;t>o?n=i:r=i,i=.5*(r-n)+n}return i}(t,e))}(t,function(t){return 1/(200*t)}(o))}n.setBezierFunction=function(e,r,i,o,s){var a=function(e,n,r,i){return function(o){return t(o,e,n,r,i,1)}}(r,i,o,s);return a.displayName=e,a.x1=r,a.y1=i,a.x2=o,a.y2=s,n.prototype.formula[e]=a},n.unsetBezierFunction=function(t){delete n.prototype.formula[t]}}(),function(){var t=new n;t._filterArgs=[],n.interpolate=function(e,r,i,o,s){var a=n.shallowCopy({},e),u=s||0,c=n.composeEasingObject(e,o||"linear");t.set({});var h=t._filterArgs;h.length=0,h[0]=a,h[1]=e,h[2]=r,h[3]=c,n.applyFilter(t,"tweenCreated"),n.applyFilter(t,"beforeTween");var p=function(t,e,r,i,o,s){return n.tweenProps(i,e,t,r,1,s,o)}(e,a,r,i,c,u);return n.applyFilter(t,"afterTween"),p}}(),function(t){var e=/(\d|\-|\.)/,n=/([^\-0-9\.]+)/g,r=/[0-9.\-]+/g,i=new RegExp("rgb\\("+r.source+/,\s*/.source+r.source+/,\s*/.source+r.source+"\\)","g"),o=/^.*\(/,s=/#([0-9]|[a-f]){3,6}/gi,a="VAL";function u(e){t.each(e,function(t){var n=e[t];"string"==typeof n&&n.match(s)&&(e[t]=function(t){return l(s,t,c)}(n))})}function c(t){var e=function(t){3===(t=t.replace(/#/,"")).length&&(t=(t=t.split(""))[0]+t[0]+t[1]+t[1]+t[2]+t[2]);return h[0]=p(t.substr(0,2)),h[1]=p(t.substr(2,2)),h[2]=p(t.substr(4,2)),h}(t);return"rgb("+e[0]+","+e[1]+","+e[2]+")"}var h=[];function p(t){return parseInt(t,16)}function l(t,e,n){var r=e.match(t),i=e.replace(t,a);if(r)for(var o,s=r.length,u=0;u<s;u++)o=r.shift(),i=i.replace(a,n(o));return i}function f(t){for(var e=t.match(r),n=e.length,i=t.match(o)[0],s=0;s<n;s++)i+=parseInt(e[s],10)+",";return i=i.slice(0,-1)+")"}function d(r){var i={};return t.each(r,function(t){var o=r[t];if("string"==typeof o){var s=m(o);i[t]={formatString:function(t){var r=t.match(n);return r?(1===r.length||t.charAt(0).match(e))&&r.unshift(""):r=["",""],r.join(a)}(o),chunkNames:function(t,e){var n,r=[],i=t.length;for(n=0;n<i;n++)r.push("_"+e+"_"+n);return r}(s,t)}}}),i}function _(e,n){t.each(n,function(t){for(var r=m(e[t]),i=r.length,o=0;o<i;o++)e[n[t].chunkNames[o]]=+r[o];delete e[t]})}function g(e,n){t.each(n,function(t){var r=e[t],o=function(t,e){y.length=0;for(var n=e.length,r=0;r<n;r++)y.push(t[e[r]]);return y}(function(t,e){for(var n,r={},i=e.length,o=0;o<i;o++)n=e[o],r[n]=t[n],delete t[n];return r}(e,n[t].chunkNames),n[t].chunkNames);r=function(t,e){for(var n=t,r=e.length,i=0;i<r;i++)n=n.replace(a,+e[i].toFixed(4));return n}(n[t].formatString,o),e[t]=function(t){return l(i,t,f)}(r)})}var y=[];function m(t){return t.match(r)}t.prototype.filter.token={tweenCreated:function(t,e,n,r){u(t),u(e),u(n),this._tokenData=d(t)},beforeTween:function(e,n,r,i){!function(e,n){t.each(n,function(t){var r,i=n[t].chunkNames,o=i.length,s=e[t];if("string"==typeof s){var a=s.split(" "),u=a[a.length-1];for(r=0;r<o;r++)e[i[r]]=a[r]||u}else for(r=0;r<o;r++)e[i[r]]=s;delete e[t]})}(i,this._tokenData),_(e,this._tokenData),_(n,this._tokenData),_(r,this._tokenData)},afterTween:function(e,n,r,i){g(e,this._tokenData),g(n,this._tokenData),g(r,this._tokenData),function(e,n){t.each(n,function(t){var r=n[t].chunkNames,i=r.length,o=e[r[0]];if("string"==typeof o){for(var s="",a=0;a<i;a++)s+=" "+e[r[a]],delete e[r[a]];e[t]=s.substr(1)}else e[t]=o})}(i,this._tokenData)}}}(n)}).call(null)},function(t,e,n){var r=n(1),i=n(3),o=n(0),s=function(t,e){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,r.apply(this,arguments)};(s.prototype=new r).constructor=s,s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 50")},s.prototype._initializeTextContainer=function(t,e,n){t.text.style&&(n.style.top="auto",n.style.bottom="0",t.text.alignToBottom?o.setStyle(n,"transform","translate(-50%, 0)"):o.setStyle(n,"transform","translate(-50%, 50%)"))},s.prototype._pathString=i.prototype._pathString,s.prototype._trailString=i.prototype._trailString,t.exports=s}]);