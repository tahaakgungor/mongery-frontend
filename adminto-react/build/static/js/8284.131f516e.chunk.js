(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[8284],{69998:function(e,n){"use strict";n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},80888:function(e,n,t){"use strict";var r=t(79047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},52007:function(e,n,t){e.exports=t(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9140:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(1413),o=t(45987),i=t(81694),a=t.n(i),c=t(72791),u=t(10162),l=t(66543),s=t(27472),f=t(80184),p=["bsPrefix","className","variant","as"],d=c.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,c=e.variant,l=e.as,s=void 0===l?"img":l,d=(0,o.Z)(e,p),v=(0,u.vE)(t,"card-img");return(0,f.jsx)(s,(0,r.Z)({ref:n,className:a()(c?"".concat(v,"-").concat(c):v,i)},d))}));d.displayName="CardImg";var v=d,m=t(96040),g=["bsPrefix","className","as"],y=c.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,l=e.as,s=void 0===l?"div":l,p=(0,o.Z)(e,g),d=(0,u.vE)(t,"card-header"),v=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:d}}),[d]);return(0,f.jsx)(m.Z.Provider,{value:v,children:(0,f.jsx)(s,(0,r.Z)((0,r.Z)({ref:n},p),{},{className:a()(i,d)}))})}));y.displayName="CardHeader";var b=y,h=["bsPrefix","className","bg","text","border","body","children","as"],w=(0,s.Z)("h5"),x=(0,s.Z)("h6"),D=(0,l.Z)("card-body"),O=(0,l.Z)("card-title",{Component:w}),j=(0,l.Z)("card-subtitle",{Component:x}),P=(0,l.Z)("card-link",{Component:"a"}),F=(0,l.Z)("card-text",{Component:"p"}),A=(0,l.Z)("card-footer"),E=(0,l.Z)("card-img-overlay"),C=c.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,c=e.bg,l=e.text,s=e.border,p=e.body,d=e.children,v=e.as,m=void 0===v?"div":v,g=(0,o.Z)(e,h),y=(0,u.vE)(t,"card");return(0,f.jsx)(m,(0,r.Z)((0,r.Z)({ref:n},g),{},{className:a()(i,y,c&&"bg-".concat(c),l&&"text-".concat(l),s&&"border-".concat(s)),children:p?(0,f.jsx)(D,{children:d}):d}))}));C.displayName="Card",C.defaultProps={body:!1};var k=Object.assign(C,{Img:v,Title:O,Subtitle:j,Body:D,Link:P,Text:F,Header:b,Footer:A,ImgOverlay:E})},96040:function(e,n,t){"use strict";var r=t(72791).createContext(null);r.displayName="CardHeaderContext",n.Z=r},66543:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(1413),o=t(45987),i=t(81694),a=t.n(i),c=/-(.)/g;var u=t(72791),l=t(10162),s=t(80184),f=["className","bsPrefix","as"],p=function(e){return e[0].toUpperCase()+(n=e,n.replace(c,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,i=void 0===t?p(e):t,c=n.Component,d=n.defaultProps,v=u.forwardRef((function(n,t){var i=n.className,u=n.bsPrefix,p=n.as,d=void 0===p?c||"div":p,v=(0,o.Z)(n,f),m=(0,l.vE)(u,e);return(0,s.jsx)(d,(0,r.Z)({ref:t,className:a()(i,m)},v))}));return v.defaultProps=d,v.displayName=i,v}},27472:function(e,n,t){"use strict";var r=t(1413),o=t(72791),i=t(81694),a=t.n(i),c=t(80184);n.Z=function(e){return o.forwardRef((function(n,t){return(0,c.jsx)("div",(0,r.Z)((0,r.Z)({},n),{},{ref:t,className:a()(n.className,e)}))}))}},43954:function(e,n,t){"use strict";t.d(n,{ZP:function(){return ve}});var r=t(72791),o=t(52007),i=t.n(o);function a(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(n){i(n)}}function c(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function c(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(u){c=[6,u],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}Object.create;function u(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function l(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(u(arguments[n]));return e}Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=s.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"===typeof e&&null!==e}function v(e){return b(e.target.files).map((function(e){return f(e)}))}function m(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return f(e)}))]}}))}))}function g(e,n){return a(this,void 0,void 0,(function(){var t;return c(this,(function(r){switch(r.label){case 0:return null===e?[2,[]]:e.items?(t=b(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(h))]):[3,2];case 1:return[2,y(w(r.sent()))];case 2:return[2,y(b(e.files).map((function(e){return f(e)})))]}}))}))}function y(e){return e.filter((function(e){return-1===p.indexOf(e.name)}))}function b(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function h(e){if("function"!==typeof e.webkitGetAsEntry)return x(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?O(n):x(e)}function w(e){return e.reduce((function(e,n){return l(e,Array.isArray(n)?w(n):[n])}),[])}function x(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var t=f(n);return Promise.resolve(t)}function D(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,e.isDirectory?O(e):j(e)]}))}))}function O(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return a(i,void 0,void 0,(function(){var i,a,u;return c(this,(function(c){switch(c.label){case 0:if(n.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),t(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(n.map(D)),r.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function j(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=f(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var P=t(69998);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){E(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return k(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var S="file-invalid-type",R="file-too-large",z="file-too-small",T="too-many-files",Z=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:S,message:"File type must be ".concat(n)}},I=function(e){return{code:R,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},N=function(e){return{code:z,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},L={code:T,message:"Too many files"};function _(e,n){var t="application/x-moz-file"===e.type||(0,P.Z)(e,n);return[t,t?null:Z(n)]}function B(e,n,t){if(M(e.size))if(M(n)&&M(t)){if(e.size>t)return[!1,I(t)];if(e.size<n)return[!1,N(n)]}else{if(M(n)&&e.size<n)return[!1,N(n)];if(M(t)&&e.size>t)return[!1,I(t)]}return[!0,null]}function M(e){return void 0!==e&&null!==e}function K(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=C(_(e,t),1)[0],i=C(B(e,r,o),1)[0];return n&&i}))}function U(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function H(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function W(e){e.preventDefault()}function $(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function q(e){return-1!==e.indexOf("Edge/")}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return $(e)||q(e)}function Y(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!U(e)&&n&&n.apply(void 0,[e].concat(r)),U(e)}))}}function V(){return"showOpenFilePicker"in window}function J(e){return e="string"===typeof e?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter((function(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)})).reduce((function(e,n){return A(A({},e),{},E({},n,[]))}),{}):{}}]}function Q(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function X(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}var ee=["children"],ne=["open"],te=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],re=["refKey","onChange","onClick"];function oe(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ae(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||ae(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,n){if(e){if("string"===typeof e)return ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ce(e,n):void 0}}function ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function le(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ue(Object(t),!0).forEach((function(n){se(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function se(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var pe=(0,r.forwardRef)((function(e,n){var t=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=le(le({},de),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,m=n.onDropRejected,g=n.onFileDialogCancel,y=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.preventDropOnDocument,w=n.noClick,x=n.noKeyboard,D=n.noDrag,O=n.noDragEventsBubbling,j=n.validator,P=(0,r.useMemo)((function(){return"function"===typeof y?y:ye}),[y]),F=(0,r.useMemo)((function(){return"function"===typeof g?g:ye}),[g]),A=(0,r.useRef)(null),E=(0,r.useRef)(null),C=ie((0,r.useReducer)(ge,me),2),k=C[0],S=C[1],R=k.isFocused,z=k.isFileDialogActive,T=k.draggedFiles,Z=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&V()),I=function(){!Z.current&&z&&setTimeout((function(){E.current&&(E.current.files.length||(S({type:"closeDialog"}),F()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",I,!1),function(){window.removeEventListener("focus",I,!1)}}),[E,z,F,Z]);var N=(0,r.useRef)([]),M=function(e){A.current&&A.current.contains(e.target)||(e.preventDefault(),N.current=[])};(0,r.useEffect)((function(){return h&&(document.addEventListener("dragover",W,!1),document.addEventListener("drop",M,!1)),function(){h&&(document.removeEventListener("dragover",W),document.removeEventListener("drop",M))}}),[A,h]);var $=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),De(e),N.current=[].concat(oe(N.current),[e.target]),H(e)&&Promise.resolve(i(e)).then((function(n){U(e)&&!O||(S({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,O]),q=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),De(e);var n=H(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return n&&p&&p(e),!1}),[p,O]),ee=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),De(e);var n=N.current.filter((function(e){return A.current&&A.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),N.current=n,n.length>0||(S({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),H(e)&&f&&f(e))}),[A,f,O]),ne=(0,r.useCallback)((function(e,n){var r=[],o=[];e.forEach((function(e){var n=ie(_(e,t),2),i=n[0],u=n[1],l=ie(B(e,c,a),2),s=l[0],f=l[1],p=j?j(e):null;if(i&&s&&!p)r.push(e);else{var d=[u,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!u&&r.length>1||u&&l>=1&&r.length>l)&&(r.forEach((function(e){o.push({file:e,errors:[L]})})),r.splice(0)),S({acceptedFiles:r,fileRejections:o,type:"setFiles"}),d&&d(r,o,n),o.length>0&&m&&m(o,n),r.length>0&&v&&v(r,n)}),[S,u,t,c,a,l,d,v,m,j]),ae=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),De(e),N.current=[],H(e)&&Promise.resolve(i(e)).then((function(n){U(e)&&!O||ne(n,e)})),S({type:"reset"})}),[i,ne,O]),ce=(0,r.useCallback)((function(){if(Z.current){S({type:"openDialog"}),P();var e={multiple:u,types:J(t)};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ne(e,null),S({type:"closeDialog"})})).catch((function(e){Q(e)?(F(e),S({type:"closeDialog"})):X(e)&&(Z.current=!1,E.current&&(E.current.value=null,E.current.click()))}))}else E.current&&(S({type:"openDialog"}),P(),E.current.value=null,E.current.click())}),[S,P,F,b,ne,t,u]),ue=(0,r.useCallback)((function(e){A.current&&A.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),ce()))}),[A,ce]),pe=(0,r.useCallback)((function(){S({type:"focus"})}),[]),ve=(0,r.useCallback)((function(){S({type:"blur"})}),[]),be=(0,r.useCallback)((function(){w||(G()?setTimeout(ce,0):ce())}),[w,ce]),he=function(e){return o?null:e},we=function(e){return x?null:he(e)},xe=function(e){return D?null:he(e)},De=function(e){O&&e.stopPropagation()},Oe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=fe(e,te);return le(le(se({onKeyDown:we(Y(i,ue)),onFocus:we(Y(a,pe)),onBlur:we(Y(c,ve)),onClick:he(Y(u,be)),onDragEnter:xe(Y(l,$)),onDragOver:xe(Y(s,q)),onDragLeave:xe(Y(f,ee)),onDrop:xe(Y(p,ae)),role:"string"===typeof r&&""!==r?r:"button"},t,A),o||x?{}:{tabIndex:0}),d)}}),[A,ue,pe,ve,be,$,q,ee,ae,x,D,o]),je=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Pe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=fe(e,re);return le(le({},se({accept:t,multiple:u,type:"file",style:{display:"none"},onChange:he(Y(o,ae)),onClick:he(Y(i,je)),autoComplete:"off",tabIndex:-1},r,E)),a)}}),[E,t,u,ae,o]),Fe=T.length,Ae=Fe>0&&K({files:T,accept:t,minSize:c,maxSize:a,multiple:u,maxFiles:l}),Ee=Fe>0&&!Ae;return le(le({},k),{},{isDragAccept:Ae,isDragReject:Ee,isFocused:R&&!o,getRootProps:Oe,getInputProps:Pe,rootRef:A,inputRef:E,open:he(ce)})}(fe(e,ee)),i=o.open,a=fe(o,ne);return(0,r.useImperativeHandle)(n,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,t(le(le({},a),{},{open:i})))}));pe.displayName="Dropzone";var de={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return d(e)&&d(e.dataTransfer)?[2,g(e.dataTransfer,e.type)]:function(e){return d(e)&&d(e.target)}(e)?[2,v(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,m(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0};pe.defaultProps=de,pe.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var ve=pe,me={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ge(e,n){switch(n.type){case"focus":return le(le({},e),{},{isFocused:!0});case"blur":return le(le({},e),{},{isFocused:!1});case"openDialog":return le(le({},me),{},{isFileDialogActive:!0});case"closeDialog":return le(le({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var t=n.isDragActive,r=n.draggedFiles;return le(le({},e),{},{draggedFiles:r,isDragActive:t});case"setFiles":return le(le({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return le({},me);default:return e}}function ye(){}}}]);
//# sourceMappingURL=8284.131f516e.chunk.js.map