(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[8602],{89766:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var i=n(89743),r=n(2677),a=n(51649),s=n(9140),c=n(74342),o=n(69532),l=n(11087),u=n(80184),d=function(e){var t=e.tabContents;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Default Tabs"}),(0,u.jsxs)(c.Z.Container,{defaultActiveKey:"Profile",children:[(0,u.jsx)(o.Z,{as:"ul",variant:"tabs",children:(t||[]).map((function(e,t){return(0,u.jsx)(o.Z.Item,{as:"li",children:(0,u.jsx)(o.Z.Link,{as:l.rU,to:"#",eventKey:e.title,className:"cursor-pointer",children:e.title})},t.toString())}))}),(0,u.jsx)(c.Z.Content,{children:(t||[]).map((function(e,t){return(0,u.jsx)(c.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},t.toString())}))})]})]})})},h=function(e){var t=e.tabContents;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Tabs Justified"}),(0,u.jsxs)(c.Z.Container,{defaultActiveKey:"Profile",children:[(0,u.jsx)(o.Z,{as:"ul",variant:"pills",justify:!0,className:"navtab-bg",children:(t||[]).map((function(e,t){return(0,u.jsx)(o.Z.Item,{as:"li",children:(0,u.jsx)(o.Z.Link,{as:l.rU,to:"#",className:"cursor-pointer",eventKey:e.title,children:e.title})},t.toString())}))}),(0,u.jsx)(c.Z.Content,{children:(t||[]).map((function(e,t){return(0,u.jsx)(c.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},t.toString())}))})]})]})})},f=function(e){var t=e.tabContents;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Tabs Vertical Left"}),(0,u.jsx)(i.Z,{children:(0,u.jsxs)(c.Z.Container,{defaultActiveKey:"Home",children:[(0,u.jsx)(r.Z,{sm:3,children:(0,u.jsx)(o.Z,{as:"ul",variant:"pills",className:"flex-column",children:(t||[]).map((function(e,t){return(0,u.jsx)(o.Z.Item,{as:"li",children:(0,u.jsx)(o.Z.Link,{as:l.rU,to:"#",className:"cursor-pointer",eventKey:e.title,children:e.title})},t.toString())}))})}),(0,u.jsx)(r.Z,{sm:9,children:(0,u.jsx)(c.Z.Content,{className:"pt-0",children:(t||[]).map((function(e,t){return(0,u.jsx)(c.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},t.toString())}))})})]})})]})})},m=function(e){var t=e.tabContents;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Tabs Vertical Right"}),(0,u.jsx)(i.Z,{children:(0,u.jsxs)(c.Z.Container,{defaultActiveKey:"Home",children:[(0,u.jsx)(r.Z,{sm:9,children:(0,u.jsx)(c.Z.Content,{className:"pt-0",children:(t||[]).map((function(e,t){return(0,u.jsx)(c.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},t.toString())}))})}),(0,u.jsx)(r.Z,{sm:3,children:(0,u.jsx)(o.Z,{as:"ul",variant:"pills",className:"flex-column",children:(t||[]).map((function(e,t){return(0,u.jsx)(o.Z.Item,{as:"li",children:(0,u.jsx)(o.Z.Link,{as:l.rU,to:"#",className:"cursor-pointer",eventKey:e.title,children:e.title})},t.toString())}))})})]})})]})})},x=function(e){var t=e.tabContents,n=e.justify;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Tabs Bordered"}),(0,u.jsxs)(c.Z.Container,{defaultActiveKey:"Profile",children:[(0,u.jsx)(o.Z,{as:"ul",variant:"tabs",justify:n,className:"nav-bordered",children:(t||[]).map((function(e,t){return(0,u.jsx)(o.Z.Item,{as:"li",children:(0,u.jsx)(o.Z.Link,{as:l.rU,to:"#",eventKey:e.title,className:"cursor-pointer",children:e.title})},t.toString())}))}),(0,u.jsx)(c.Z.Content,{children:(t||[]).map((function(e,t){return(0,u.jsx)(c.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},t.toString())}))})]})]})})},v=n(72791),p=n(5912),b=n(87333),y=n(65695),j=n(81694),Z=n.n(j),g=function(e){var t=e.children,n=e.eventKey,i=e.containerClass,r=e.linkClass,a=e.callback,s=(0,v.useContext)(p.Z).activeEventKey,c=(0,b.k)(n,(function(){return a&&a(n)})),o=s===n;return(0,u.jsx)("h5",{className:i,children:(0,u.jsx)(l.rU,{to:"#",className:Z()(r,{collapsed:!o}),onClick:c,children:t})})},C=function(e){var t=e.accordionContent;return(0,u.jsx)(y.Z,{defaultActiveKey:"0",id:"accordion",className:"mb-3",children:(t||[]).map((function(e,t){return(0,u.jsxs)(s.Z,{className:"mb-1",children:[(0,u.jsx)(s.Z.Header,{children:(0,u.jsxs)(g,{eventKey:String(t),containerClass:"m-0",linkClass:"text-dark",children:[(0,u.jsx)("i",{className:"mdi mdi-help-circle me-1 text-primary"}),e.title]})}),(0,u.jsx)(y.Z.Collapse,{eventKey:String(t),children:(0,u.jsx)(s.Z.Body,{children:e.text})})]},t.toString())}))})},k=function(e){var t=e.children,n=e.eventKey,i=e.containerClass,r=e.linkClass,a=e.callback,s=(0,v.useContext)(p.Z).activeEventKey,c=(0,b.k)(n,(function(){return a&&a(n)})),o=s===n;return(0,u.jsx)("h5",{className:i,children:(0,u.jsx)(l.rU,{to:"#",className:Z()(r,{collapsed:!o}),onClick:c,children:t})})},w=function(e){var t=e.accordionContent;return(0,u.jsx)(y.Z,{className:"custom-accordion mb-3",defaultActiveKey:"0",id:"accordion",children:(t||[]).map((function(e,t){return(0,u.jsxs)(s.Z,{className:"mb-0",children:[(0,u.jsx)(s.Z.Header,{children:(0,u.jsxs)(k,{eventKey:String(t),containerClass:"m-0 position-relative",linkClass:"custom-accordion-title text-reset d-block",children:["Q. ",e.title,(0,u.jsx)("i",{className:"mdi mdi-chevron-down accordion-arrow"})]})}),(0,u.jsx)(y.Z.Collapse,{eventKey:String(t),children:(0,u.jsx)(s.Z.Body,{children:e.text})})]},t.toString())}))})},N=n(29439),q=n(43360),K=n(17858),S=function(){var e=(0,v.useState)(!0),t=(0,N.Z)(e,2),n=t[0],i=t[1],r=function(){return i(!n)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[(0,u.jsx)(l.rU,{to:"#",className:"btn btn-primary waves-effect waves-light",onClick:r,children:"Link with href"}),(0,u.jsx)(q.Z,{color:"primary",className:"waves-effect waves-light ms-1",onClick:r,children:"Button with data-bs-target"})]}),(0,u.jsx)(K.Z,{in:n,children:(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,{children:(0,u.jsx)(s.Z.Body,{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})})})]})},A=function(){var e=(0,v.useState)(!1),t=(0,N.Z)(e,2),n=t[0],i=t[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:(0,u.jsx)(q.Z,{onClick:function(){return i(!n)},"aria-controls":"example-collapse-text","aria-expanded":n,children:"Toggle width collapse"})}),(0,u.jsx)(K.Z,{in:n,dimension:"width",children:(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,{as:s.Z.Body,className:"mb-0",style:{width:"450px"},children:"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered."})})})]})},P=[{id:1,title:"Home",text:"Home - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."},{id:2,title:"Profile",text:"Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."},{id:3,title:"Messages",text:"Messages - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}],I=[{id:1,title:"What is Vakal text here?",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},{id:2,title:"Why use Vakal text here?",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},{id:3,title:"How many variations exist?",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},{id:4,title:"What is Vakal text here?",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}],O=[{id:1,title:"Can I use this template for my client?",text:" Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere"},{id:2,title:"Can this theme work with Wordpress?",text:"No. This is a HTML template. It won't directly with wordpress, though you can convert this into wordpress compatible theme"},{id:3,title:"How do I get help with the theme?",text:"   Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime"},{id:4,title:"Will you regularly give updates of Adminto ?",text:"Yes, We will update the Adminto regularly. All the future updates would be available without any cost"}],B=function(){return(0,a.Tt)({title:"Tabs & Accordions",breadCrumbItems:[{path:"/base-ui/tabs-accordions",label:"Base UI"},{path:"/base-ui/tabs-accordions",label:"Tabs & Accordions",active:!0}]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(d,{tabContents:P})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(h,{tabContents:P})})]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(f,{tabContents:P})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(m,{tabContents:P})})]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(x,{tabContents:P})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(x,{tabContents:P,justify:!0})})]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(C,{accordionContent:I})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(w,{accordionContent:O})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(S,{})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(A,{})})]})]})}},53649:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(29439),r=n(72791);function a(){var e=(0,r.useReducer)((function(e){return!e}),!1);return(0,i.Z)(e,2)[1]}},71306:function(e,t,n){"use strict";n.d(t,{PB:function(){return i},$F:function(){return r}});function i(e){return"".concat("data-rr-ui-").concat(e)}function r(e){return"".concat("rrUi").concat(e)}},41337:function(e,t,n){"use strict";var i=n(13808),r=n(72791),a=n(53649),s=n(73201),c=n(74784),o=n(78633),l=n(90165),u=n(71306),d=n(24787),h=n(80184),f=["as","onSelect","activeKey","role","onKeyDown"];var m=function(){},x=(0,u.PB)("event-key"),v=r.forwardRef((function(e,t){var n,d,v=e.as,p=void 0===v?"div":v,b=e.onSelect,y=e.activeKey,j=e.role,Z=e.onKeyDown,g=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,f),C=(0,a.Z)(),k=(0,r.useRef)(!1),w=(0,r.useContext)(o.Z),N=(0,r.useContext)(l.Z);N&&(j=j||"tablist",y=N.activeKey,n=N.getControlledId,d=N.getControllerId);var q=(0,r.useRef)(null),K=function(e){var t=q.current;if(!t)return null;var n=(0,i.Z)(t,"[".concat(x,"]:not([aria-disabled=true])")),r=t.querySelector("[aria-selected=true]");if(!r)return null;var a=n.indexOf(r);if(-1===a)return null;var s=a+e;return s>=n.length&&(s=0),s<0&&(s=n.length-1),n[s]},S=function(e,t){null!=e&&(null==b||b(e,t),null==w||w(e,t))};(0,r.useEffect)((function(){if(q.current&&k.current){var e=q.current.querySelector("[".concat(x,"][aria-selected=true]"));null==e||e.focus()}k.current=!1}));var A=(0,s.Z)(t,q);return(0,h.jsx)(o.Z.Provider,{value:S,children:(0,h.jsx)(c.Z.Provider,{value:{role:j,activeKey:(0,o.h)(y),getControlledId:n||m,getControllerId:d||m},children:(0,h.jsx)(p,Object.assign({},g,{onKeyDown:function(e){if(null==Z||Z(e),N){var t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=K(-1);break;case"ArrowRight":case"ArrowDown":t=K(1);break;default:return}t&&(e.preventDefault(),S(t.dataset[(0,u.$F)("EventKey")]||null,e),k.current=!0,C())}},ref:A,role:j}))})})}));v.displayName="Nav",t.Z=Object.assign(v,{Item:d.Z})},74784:function(e,t,n){"use strict";var i=n(72791).createContext(null);i.displayName="NavContext",t.Z=i},24787:function(e,t,n){"use strict";n.d(t,{v:function(){return h}});var i=n(29439),r=n(72791),a=n(39007),s=n(74784),c=n(78633),o=n(15341),l=n(71306),u=n(80184),d=["as","active","eventKey"];function h(e){var t=e.key,n=e.onClick,i=e.active,o=e.id,u=e.role,d=e.disabled,h=(0,r.useContext)(c.Z),f=(0,r.useContext)(s.Z),m=i,x={role:u};if(f){u||"tablist"!==f.role||(x.role="tab");var v=f.getControllerId(null!=t?t:null),p=f.getControlledId(null!=t?t:null);x[(0,l.PB)("event-key")]=t,x.id=v||o,x["aria-controls"]=p,m=null==i&&null!=t?f.activeKey===t:i}return"tab"===x.role&&(d&&(x.tabIndex=-1,x["aria-disabled"]=!0),m?x["aria-selected"]=m:x.tabIndex=-1),x.onClick=(0,a.Z)((function(e){d||(null==n||n(e),null!=t&&h&&!e.isPropagationStopped()&&h(t,e))})),[x,{isActive:m}]}var f=r.forwardRef((function(e,t){var n=e.as,r=void 0===n?o.ZP:n,a=e.active,s=e.eventKey,f=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,d),m=h(Object.assign({key:(0,c.h)(s,f.href),active:a},f)),x=(0,i.Z)(m,2),v=x[0],p=x[1];return v[(0,l.PB)("active")]=p.isActive,(0,u.jsx)(r,Object.assign({},f,v,{ref:t}))}));f.displayName="NavItem",t.Z=f},13808:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return i(e.querySelectorAll(t))}},33573:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function i(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}return(0,a.default)(i)};var i,r=n(46054),a=(i=r)&&i.__esModule?i:{default:i};e.exports=t.default},46054:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,i,r,a,s){var c=r||"<<anonymous>>",o=s||i;if(null==n[i])return t?new Error("Required "+a+" `"+o+"` was not specified in `"+c+"`."):null;for(var l=arguments.length,u=Array(l>6?l-6:0),d=6;d<l;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,i,c,a,o].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},80888:function(e,t,n){"use strict";var i=n(79047);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,s){if(s!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},52007:function(e,t,n){e.exports=n(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},72709:function(e,t,n){"use strict";var i,r=n(1413),a=n(45987),s=n(4942),c=n(81694),o=n.n(c),l=n(72791),u=n(26752),d=n(71380),h=n(67202),f=n(85007),m=n(80184),x=["className","children","transitionClasses"],v=(i={},(0,s.Z)(i,u.d0,"show"),(0,s.Z)(i,u.cn,"show"),i),p=l.forwardRef((function(e,t){var n=e.className,i=e.children,s=e.transitionClasses,c=void 0===s?{}:s,u=(0,a.Z)(e,x),p=(0,l.useCallback)((function(e,t){(0,h.Z)(e),null==u.onEnter||u.onEnter(e,t)}),[u]);return(0,m.jsx)(f.Z,(0,r.Z)((0,r.Z)({ref:t,addEndListener:d.Z},u),{},{onEnter:p,childRef:i.ref,children:function(e,t){return l.cloneElement(i,(0,r.Z)((0,r.Z)({},t),{},{className:o()("fade",n,i.props.className,v[e],c[e])}))}}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",t.Z=p},69532:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var i=n(4942),r=n(1413),a=n(45987),s=n(81694),c=n.n(s),o=(n(33573),n(72791)),l=n(32592),u=n(41337),d=n(10162),h=n(5715),f=n(96040),m=(0,n(66543).Z)("nav-item"),x=n(29439),v=n(16445),p=n(24787),b=n(78633),y=n(80184),j=["bsPrefix","className","as","active","eventKey"],Z=o.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.as,o=void 0===s?v.Z:s,l=e.active,u=e.eventKey,h=(0,a.Z)(e,j);n=(0,d.vE)(n,"nav-link");var f=(0,p.v)((0,r.Z)({key:(0,b.h)(u,h.href),active:l},h)),m=(0,x.Z)(f,2),Z=m[0],g=m[1];return(0,y.jsx)(o,(0,r.Z)((0,r.Z)((0,r.Z)({},h),Z),{},{ref:t,className:c()(i,n,h.disabled&&"disabled",g.isActive&&"active")}))}));Z.displayName="NavLink",Z.defaultProps={disabled:!1};var g=Z,C=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],k=o.forwardRef((function(e,t){var n,s,m,x=(0,l.Ch)(e,{activeKey:"onSelect"}),v=x.as,p=void 0===v?"div":v,b=x.bsPrefix,j=x.variant,Z=x.fill,g=x.justify,k=x.navbar,w=x.navbarScroll,N=x.className,q=x.activeKey,K=(0,a.Z)(x,C),S=(0,d.vE)(b,"nav"),A=!1,P=(0,o.useContext)(h.Z),I=(0,o.useContext)(f.Z);return P?(s=P.bsPrefix,A=null==k||k):I&&(m=I.cardHeaderBsPrefix),(0,y.jsx)(u.Z,(0,r.Z)({as:p,ref:t,activeKey:q,className:c()(N,(n={},(0,i.Z)(n,S,!A),(0,i.Z)(n,"".concat(s,"-nav"),A),(0,i.Z)(n,"".concat(s,"-nav-scroll"),A&&w),(0,i.Z)(n,"".concat(m,"-").concat(j),!!m),(0,i.Z)(n,"".concat(S,"-").concat(j),!!j),(0,i.Z)(n,"".concat(S,"-fill"),Z),(0,i.Z)(n,"".concat(S,"-justified"),g),n))},K))}));k.displayName="Nav",k.defaultProps={justify:!1,fill:!1};var w=Object.assign(k,{Item:m,Link:g})},5715:function(e,t,n){"use strict";var i=n(72791).createContext(null);i.displayName="NavbarContext",t.Z=i}}]);
//# sourceMappingURL=8602.e9a4b9d6.chunk.js.map