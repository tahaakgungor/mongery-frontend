"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[1895],{22826:function(e,n,t){t.d(n,{y:function(){return b},J:function(){return o}});var r=t(1413),a=t(72791),s=t(61134),c=t(80184),o=function(e){var n=e.defaultValues,t=e.resolver,o=e.children,i=e.onSubmit,l=e.formClass,u=(0,s.cI)({defaultValues:n,resolver:t}),d=u.handleSubmit,p=u.register,m=u.control,h=u.formState.errors;return(0,c.jsx)("form",{onSubmit:d(i),className:l,noValidate:!0,children:Array.isArray(o)?o.map((function(e){return e.props&&e.props.name?a.createElement(e.type,(0,r.Z)({},(0,r.Z)((0,r.Z)({},e.props),{},{register:p,key:e.props.name,errors:h,control:m}))):e})):o})},i=t(29439),l=t(45987),u=t(99410),d=t(33358),p=t(81694),m=t.n(p),h=["name","placeholder","refCallback","errors","control","register","className"],f=["type","name","placeholder","endIcon","register","errors","comp","rows","className","refCallback"],x=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],v=["type","label","name","placeholder","register","errors","comp","className","children","refCallback"],g=["label","type","name","placeholder","endIcon","register","errors","control","className","labelClassName","containerClass","refCallback","children","action","rows"],y=function(e){var n=e.name,t=e.placeholder,s=e.refCallback,o=e.errors,p=(e.control,e.register),f=e.className,x=(0,l.Z)(e,h),v=(0,a.useState)(!1),g=(0,i.Z)(v,2),y=g[0],j=g[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(u.Z,{className:"mb-0",children:[(0,c.jsx)(d.Z.Control,(0,r.Z)((0,r.Z)({type:y?"text":"password",placeholder:t,name:n,id:n,as:"input",ref:function(e){s&&s(e)},className:f,isInvalid:!(!o||!o[n])},p?p(n):{}),{},{autoComplete:n},x)),(0,c.jsx)("div",{className:m()("input-group-text","input-group-password",{"show-password":y}),"data-password":y?"true":"false",children:(0,c.jsx)("span",{className:"password-eye",onClick:function(){j(!y)}})})]}),o&&o[n]?(0,c.jsx)(d.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[n].message}):null]})},j=function(e){var n=e.type,t=e.name,a=e.placeholder,s=e.endIcon,o=e.register,i=e.errors,u=e.comp,p=e.rows,m=e.className,h=e.refCallback,x=(0,l.Z)(e,f);return(0,c.jsx)(c.Fragment,{children:"password"===n&&s?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(y,(0,r.Z)({name:t,placeholder:a,refCallback:h,errors:i,register:o,className:m},x))}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Z.Control,(0,r.Z)((0,r.Z)({type:n,placeholder:a,name:t,as:u,id:t,ref:function(e){h&&h(e)},className:m,isInvalid:!(!i||!i[t])},o?o(t):{}),{},{rows:p},x)),i&&i[t]?(0,c.jsx)(d.Z.Control.Feedback,{type:"invalid",className:"d-block",children:i[t].message}):null]})})},Z=function(e){var n=e.type,t=e.label,a=e.name,s=(e.placeholder,e.register),o=e.errors,i=(e.comp,e.rows,e.className),u=e.refCallback,p=(0,l.Z)(e,x);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Z.Check,(0,r.Z)((0,r.Z)({type:n,label:t,name:a,id:a,ref:function(e){u&&u(e)},className:i,isInvalid:!(!o||!o[a])},s?s(a):{}),p)),o&&o[a]?(0,c.jsx)(d.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[a].message}):null]})},k=function(e){var n=e.type,t=e.label,a=e.name,s=(e.placeholder,e.register),o=e.errors,i=(e.comp,e.className),u=e.children,p=e.refCallback,m=(0,l.Z)(e,v);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Z.Select,(0,r.Z)((0,r.Z)({type:n,label:t,name:a,id:a,ref:function(e){p&&p(e)},children:u,className:i,isInvalid:!(!o||!o[a])},s?s(a):{}),m)),o&&o[a]?(0,c.jsx)(d.Z.Control.Feedback,{type:"invalid",children:o[a].message}):null]})},b=function(e){var n=e.label,t=e.type,a=e.name,s=e.placeholder,o=e.endIcon,i=e.register,u=e.errors,p=(e.control,e.className),m=e.labelClassName,h=e.containerClass,f=e.refCallback,x=e.children,v=e.action,y=e.rows,b=(0,l.Z)(e,g),w="textarea"===t?"textarea":"select"===t?"select":"input",C=void 0===o||o;return(0,c.jsx)(c.Fragment,{children:"hidden"===t?(0,c.jsx)("input",(0,r.Z)((0,r.Z)({type:t,name:a},i?i(a):{}),b)):(0,c.jsx)(c.Fragment,{children:"select"===t?(0,c.jsxs)(d.Z.Group,{className:h,children:[n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Z.Label,{className:m,children:n}),v&&v]}):null,(0,c.jsx)(k,(0,r.Z)({type:t,name:a,placeholder:s,refCallback:f,errors:u,register:i,comp:w,className:p,children:x},b))]}):(0,c.jsx)(c.Fragment,{children:"checkbox"===t||"radio"===t?(0,c.jsx)(d.Z.Group,{className:h,children:(0,c.jsx)(Z,(0,r.Z)({type:t,label:n,name:a,placeholder:s,refCallback:f,errors:u,register:i,comp:w,className:p,rows:y},b))}):(0,c.jsxs)(d.Z.Group,{className:h,children:[n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Z.Label,{className:m,children:n}),v&&v]}):null,(0,c.jsx)(j,(0,r.Z)({type:t,name:a,placeholder:s,endIcon:C,refCallback:f,errors:u,register:i,comp:w,className:p,rows:y},b))]})})})})}},48694:function(e,n,t){t.d(n,{g:function(){return s}});var r=t(43144),a=t(15671),s=(0,r.Z)((function e(){(0,a.Z)(this,e)}));s.link=" http://45.155.124.180:5050/",s.API=s.link+"api",s.login=s.link+"auth/login",s.register=s.link+"auth/register",s.verify=s.link+"auth/verify"},21895:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r=t(93433),a=t(15861),s=t(4942),c=t(1413),o=t(29439),i=t(64687),l=t.n(i),u=t(11087),d=t(89743),p=t(2677),m=t(9140),h=t(55353),f=t(95316),x=t(33358),v=t(43360),g=t(45736),y=t(3593),j=t(8396),Z=t(12576),k=t(99410),b=t(74292),w=t(18185),C=t(81694),N=t.n(C),I=t(69658),S=t(52977),A=t(80485),P=t(51649),q=t(22826),T=t(72791),O=t(48694),F=function(){var e=(0,a.Z)(l().mark((function e(n,t){var r,a,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r='\n\n        mutation {\n            createCategory(createCategoryInput: {\n              name: "'.concat(n,'"\n            }) {\n              id\n              name\n            }\n          }\n    '),e.next=4,fetch(O.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({query:r})});case 4:return a=e.sent,e.next=7,a.json();case 7:if(!(s=e.sent).errors){e.next=10;break}throw new Error(s.errors[0].message);case 10:return e.abrupt("return",s.data.createCategory);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n,t){return e.apply(this,arguments)}}(),E=function(){var e=(0,a.Z)(l().mark((function e(n){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"\n        query {\n            categories {\n              id\n              name\n              createdAt\n              updatedAt\n            }\n          }\n    ",e.next=4,fetch(O.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({query:"\n        query {\n            categories {\n              id\n              name\n              createdAt\n              updatedAt\n            }\n          }\n    "})});case 4:return t=e.sent,e.next=7,t.json();case 7:if(!(r=e.sent).errors){e.next=10;break}throw new Error(r.errors[0].message);case 10:return e.abrupt("return",r.data.categories);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),$=t(97140),z=t(86738),B=t(80184),J=function(e){var n=e.searchOptions,t=e.products,i=e.setProducts,k=(0,T.useState)(1),b=(0,o.Z)(k,2),w=b[0],C=b[1],I=(0,T.useState)(""),S=(0,o.Z)(I,2),A=S[0],q=(S[1],(0,P.Sc)()),O=(q.dispatch,q.appSelector,(0,T.useState)(!1)),F=(0,o.Z)(O,2),E=(F[0],F[1]),J=(0,T.useState)(!1),L=(0,o.Z)(J,2),G=L[0],K=L[1],D=(0,T.useState)(),H=(0,o.Z)(D,2),V=H[0],U=H[1],M=(0,T.useState)({}),Y=(0,o.Z)(M,2),R=Y[0],X=Y[1],_=localStorage.getItem("token")||"",Q=(0,T.useState)([]),W=(0,o.Z)(Q,2),ee=W[0],ne=W[1];(0,T.useEffect)((function(){de()}),[ne]),(0,T.useEffect)((function(){ce()}),[i,E]);var te=function(e){var n=e.target,t=n.name,r=n.value;X((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,s.Z)({},t,r))}))};(0,T.useEffect)((function(){!function(){var e={};t.forEach((function(n){var t,r=0==(t=n.stock)?"Stok Yok":t<100?"Stok Az":"Stok Var";e[n.id]=r}))}()}),[]);var re=function(){var e=(0,a.Z)(l().mark((function e(n,t){var a,s,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=ee.find((function(e){return e.products.id===n.id})))){e.next=15;break}return s=(0,c.Z)((0,c.Z)({},a),{},{quantity:a.quantity+t}),ne(ee.map((function(e){return e.products.id===n.id?s:e}))),e.prev=4,e.next=7,ae(a.id,s.quantity);case 7:console.log("Sepet g\xfcncellendi:",a.id),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.error("Sepet g\xfcncelleme hatas\u0131:",e.t0);case 13:e.next=27;break;case 15:return e.prev=15,console.log("Sepet olu\u015fturuluyor:",n),e.next=19,(0,z.sA)(n,t,_);case 19:o=e.sent,ne([].concat((0,r.Z)(ee),[o])),console.log("Sepet olu\u015fturuldu:",o),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(15),console.error("Sepet olu\u015fturma hatas\u0131:",e.t1);case 27:case"end":return e.stop()}}),e,null,[[4,10],[15,24]])})));return function(n,t){return e.apply(this,arguments)}}(),ae=function(){var e=(0,a.Z)(l().mark((function e(n,t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,z.xu)(n,t,_);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Hata:",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n,t){return e.apply(this,arguments)}}(),se=function(){var e=(0,a.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(Number(n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ce=function(){var e=(0,a.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,$.Xp)(_);case 3:n=e.sent,i(n),console.log("\xdcr\xfcnler:",n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),oe=function(e){var t=n.find((function(n){return n.id===e}));return t?t.name:""},ie=function(){var e=(0,a.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("remove",n),e.next=3,(0,$.kh)(n,_);case 3:i(t.filter((function(e){return e.id!==n})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),le=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U((0,c.Z)((0,c.Z)({},V),R)),console.log("G\xfcncellenen \xdcr\xfcn:",R),e.next=5,(0,$.nM)(R,_);case 5:K(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("\xdcr\xfcn g\xfcncelleme hatas\u0131:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,a.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,z.N6)(n,_);case 2:ne(ee.filter((function(e){return e.id!==n})));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),de=function(){var e=(0,a.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,z.Py)(_);case 3:n=e.sent,ne(n),console.log("Sepet:",n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,B.jsxs)(d.Z,{children:[(t||[]).map((function(e,n){return(0,B.jsx)(p.Z,{xl:4,children:(0,B.jsx)(m.Z,{children:(0,B.jsxs)(m.Z.Body,{className:"project-box",children:[(0,B.jsxs)(h.Z,{className:"float-end",align:"end",children:[(0,B.jsx)(h.Z.Toggle,{as:"a",className:"cursor-pointer card-drop",children:(0,B.jsx)("i",{className:"mdi mdi-dots-vertical"})}),(0,B.jsxs)(h.Z.Menu,{children:[(0,B.jsx)(h.Z.Item,{onClick:function(){return function(e){console.log("(80 PROD):",e);var n={id:e.id,title:e.title,price:e.price,stock:e.stock,description:e.description,variant:e.quantity>=100?"success":e.variant};K(!0),X(n),U(e),console.log("\xdcr\xfcn:",e)}(e)},children:" D\xfczenle"}),(0,B.jsxs)(h.Z.Item,{onClick:function(){return ie(e.id)},children:[" ","Sil"]})]})]}),(0,B.jsxs)(f.Z,{show:G,onHide:function(){return K(!1)},children:[(0,B.jsx)(f.Z.Header,{closeButton:!0,children:(0,B.jsx)(f.Z.Title,{children:"\xdcr\xfcnleri D\xfczenle"})}),(0,B.jsx)(f.Z.Body,{children:(0,B.jsxs)(x.Z,{children:[(0,B.jsxs)(x.Z.Group,{className:"mb-3",children:[(0,B.jsx)(x.Z.Label,{children:"\xdcr\xfcn Ad\u0131"}),(0,B.jsx)(x.Z.Control,{type:"text",name:"title",value:R.title||"",onChange:te})]}),(0,B.jsxs)(x.Z.Group,{className:"mb-3",children:[(0,B.jsx)(x.Z.Label,{children:"\xdcr\xfcn Fiyat\u0131"}),(0,B.jsx)(x.Z.Control,{type:"text",name:"price",value:R.price||"",onChange:te})]}),(0,B.jsxs)(x.Z.Group,{className:"mb-3",children:[(0,B.jsx)(x.Z.Label,{children:"\xdcr\xfcn Sto\u011fu"}),(0,B.jsx)(x.Z.Control,{type:"text",name:"stock",value:R.stock,onChange:te})]}),(0,B.jsxs)(x.Z.Group,{className:"mb-3",children:[(0,B.jsx)(x.Z.Label,{children:"\xdcr\xfcn A\xe7\u0131klamas\u0131"}),(0,B.jsx)(x.Z.Control,{type:"text",name:"description",value:R.description||"",onChange:te})]})]})}),(0,B.jsxs)(f.Z.Footer,{children:[(0,B.jsx)(v.Z,{variant:"secondary",onClick:function(){return K(!1)},children:"\u0130ptal"}),(0,B.jsx)(v.Z,{variant:"primary",onClick:function(){return le()},children:"D\xfczenle"})]})]}),(0,B.jsx)(g.Z,{bg:e.variant,className:"float-end",children:A}),(0,B.jsx)("h4",{className:"mt-0",children:(0,B.jsx)(u.rU,{to:"#",className:"text-dark",children:e.title})}),(0,B.jsx)("p",{className:N()("text-"+e.variant,"text-uppercase","font-13"),children:oe(e.categoryId)}),(0,B.jsxs)("p",{className:"text-muted font-13",children:[e.description,(0,B.jsx)(u.rU,{to:"#",className:"text-primary",children:"View more"})]}),(0,B.jsxs)("ul",{className:"list-inline",children:[(0,B.jsxs)("li",{className:"list-inline-item me-4",children:[(0,B.jsxs)("h4",{className:"mb-0",children:["$",e.price]}),(0,B.jsx)("p",{className:"text-muted",children:"Fiyat"})]}),e.customInputs.map((function(e,n){return(0,B.jsxs)("li",{className:"list-inline-item",children:[(0,B.jsx)("h4",{className:"mb-0",children:e.value}),(0,B.jsx)("p",{className:"text-muted",children:e.key})]},n.toString())}))]}),(0,B.jsxs)("h5",{className:"mb-2 fw-semibold",children:["Stok",(0,B.jsxs)("span",{className:N()("float-end","text-"+e.variant),children:[e.stock,"KG"]})]}),(0,B.jsx)(y.Z,{className:N()("quantity-bar-alt-"+e.variant,"quantity-sm"),children:(0,B.jsx)(y.Z,{variant:e.variant,now:e.stock,max:1e3,className:"quantity-animated"})}),(0,B.jsx)("input",{type:"number",className:"form-control mt-3",value:w.toString(),onChange:function(e){return se(e.target.value)}},n),(0,B.jsxs)(v.Z,{variant:"outline-primary",className:"btn-sm mt-3",onClick:function(){return re(e,w)},children:[(0,B.jsx)("i",{className:"mdi mdi-cart me-1"}),"Sepete Ekle"]})]})})},n.toString())})),ee.length>=0&&(0,B.jsx)(p.Z,{xl:12,children:(0,B.jsx)(m.Z,{children:(0,B.jsxs)(m.Z.Body,{children:[(0,B.jsx)("h4",{className:"header-title mb-3",children:"Sepet"}),(0,B.jsx)("div",{className:"table-responsive",children:(0,B.jsxs)("table",{className:"table table-centered table-nowrap",children:[(0,B.jsx)("thead",{children:(0,B.jsxs)("tr",{children:[(0,B.jsx)("th",{style:{width:"70px"},children:"\xdcr\xfcn"}),(0,B.jsx)("th",{children:"\xdcr\xfcn Ad\u0131"}),(0,B.jsx)("th",{children:"\xd6zellikler"}),(0,B.jsx)("th",{children:"Adet"}),(0,B.jsx)("th",{children:"Fiyat"}),(0,B.jsx)("th",{children:"Toplam"}),(0,B.jsx)("th",{style:{width:"50px"}})]})}),(0,B.jsx)("tbody",{children:ee.map((function(e,n){return(0,B.jsxs)("tr",{children:[(0,B.jsx)("td",{children:(0,B.jsx)("img",{src:"https://w7.pngwing.com/pngs/346/530/png-transparent-wire-mesh-fence-wire-mesh-fence-blocked-isolated-garden-fence-wire-braid-fenced-enclosure.png",alt:e.products.title,title:e.products.title,className:"avatar-sm"})}),(0,B.jsx)("td",{children:(0,B.jsx)("h5",{className:"m-0",children:e.products.title})}),(0,B.jsx)("td",{style:{width:"200px"},children:e.products.customInputs.map((function(e,n){return(0,B.jsxs)("div",{children:[(0,B.jsx)("h5",{className:"m-0",children:e.key}),(0,B.jsx)("p",{className:"m-0",children:e.value})]},n.toString())}))}),(0,B.jsx)("td",{children:(0,B.jsx)("h5",{className:"m-0",children:e.quantity})}),(0,B.jsx)("td",{children:e.products.price}),(0,B.jsx)("td",{children:e.products.price*e.quantity}),(0,B.jsx)("td",{children:(0,B.jsx)(j.Z,{placement:"top",overlay:(0,B.jsx)(Z.Z,{children:"Remove"}),children:(0,B.jsx)(v.Z,{variant:"light",className:"btn-sm",onClick:function(){return ue(e.id)},children:(0,B.jsx)("i",{className:"mdi mdi-close"})})})})]},n.toString())}))})]})}),(0,B.jsxs)(d.Z,{children:[(0,B.jsx)(p.Z,{sm:6,children:(0,B.jsxs)(u.rU,{to:"/apps/contacts",className:"btn btn-secondary waves-effect waves-light",children:[(0,B.jsx)("i",{className:"mdi mdi-arrow-left"})," Geri"]})}),(0,B.jsx)(p.Z,{sm:6,children:(0,B.jsx)("div",{className:"text-sm-end mt-2 mt-sm-0",children:(0,B.jsx)(u.rU,{to:{pathname:"/pages/invoice/"},children:(0,B.jsxs)(v.Z,{variant:"success",className:"waves-effect waves-light",children:[(0,B.jsx)("i",{className:"mdi mdi-cash-multiple me-1"})," Onayla"]})})})})]})]})})})]})},L=function(){var e=(0,T.useState)(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1],i=(0,T.useState)([{name:"",placeholder:""}]),u=(0,o.Z)(i,2),m=u[0],h=u[1],g=(0,T.useState)(""),y=(0,o.Z)(g,2),j=(y[0],y[1],(0,T.useState)([])),Z=(0,o.Z)(j,2),C=Z[0],N=Z[1],O=(0,T.useState)()||"",z=(0,o.Z)(O,2),L=(z[0],z[1]),G=(0,T.useState)(""),K=(0,o.Z)(G,2),D=K[0],H=K[1],V=(0,T.useState)(0),U=(0,o.Z)(V,2),M=U[0],Y=U[1],R=(0,T.useState)(0),X=(0,o.Z)(R,2),_=X[0],Q=X[1],W=(0,T.useState)(""),ee=(0,o.Z)(W,2),ne=ee[0],te=ee[1],re=(0,T.useState)(""),ae=(0,o.Z)(re,2),se=(ae[0],ae[1],(0,T.useState)()),ce=(0,o.Z)(se,2),oe=ce[0],ie=(ce[1],(0,T.useState)("")),le=(0,o.Z)(ie,2),ue=le[0],de=le[1],pe=(0,T.useState)([]),me=(0,o.Z)(pe,2),he=me[0],fe=me[1],xe=(0,T.useState)(!1),ve=(0,o.Z)(xe,2),ge=ve[0],ye=ve[1],je=(0,T.useState)([]),Ze=(0,o.Z)(je,2),ke=Ze[0],be=Ze[1],we=localStorage.getItem("token")||"",Ce={id:"",name:""};(0,T.useEffect)((function(){Ae()}),[oe]),(0,P.Tt)({title:"\xdcr\xfcnler",breadCrumbItems:[{path:"apps/projects",label:"Apps"},{path:"apps/projects",label:"Projects",active:!0}]});var Ne=function(){s(!t)},Ie=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=(0,r.Z)(m);a[e][n]=t,h(a)};var Se=function(){var e=(0,a.Z)(l().mark((function e(){var n,t,a,s,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ne(),!ue){e.next=34;break}if(e.prev=2,console.log("Kategori olu\u015fturuluyor:",ue,"exist",C),C.some((function(e){return e.toLowerCase()===ue.toLowerCase()}))){e.next=17;break}return console.log("Yeni kategori olu\u015fturuluyor:",ue),e.next=9,F(ue,we);case 9:n=e.sent,Ce.id=n.id,Ce.name=n.name,console.log("Yeni kategori olu\u015fturuldu:",n),N([].concat((0,r.Z)(C),[ue])),ye(!ge),e.next=23;break;case 17:t=C.find((function(e){return e.toLowerCase()===ue.toLowerCase()})),console.log("Kategori id:",t),a=he.find((function(e){return e.name===t})),console.log("Kategori object:",a),Ce.id=null===a||void 0===a?void 0:a.id,Ce.name=null===a||void 0===a?void 0:a.name;case 23:return s={name:D,price:M,stock:_,description:ne,variant:_>=100?"success":_<100?"warning":"danger",categoryId:{id:Ce.id,name:Ce.name},customFields:m,image:"avatar"},console.log("\xdcr\xfcn kaydediliyor:",s),e.next=27,(0,$.gK)(s,we);case 27:c=e.sent,be([].concat((0,r.Z)(ke),[c])),e.next=34;break;case 31:e.prev=31,e.t0=e.catch(2),console.error("\xdcr\xfcn kaydetme hatas\u0131:",e.t0);case 34:case"end":return e.stop()}}),e,null,[[2,31]])})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=(0,a.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(we);case 3:n=e.sent,N(n.map((function(e){return e.name}))),fe(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(d.Z,{children:[(0,B.jsxs)(f.Z,{show:t,onHide:Ne,children:[(0,B.jsx)(f.Z.Header,{closeButton:!0,children:(0,B.jsx)(f.Z.Title,{children:"\xdcr\xfcn Ekle"})}),(0,B.jsx)(f.Z.Body,{children:(0,B.jsxs)(p.Z,{sm:8,children:[(0,B.jsx)(S.Z,{spacing:2,sx:{width:310,height:70},children:(0,B.jsx)(A.Z,{freeSolo:!0,id:"free-solo-2-demo",disableClearable:!0,options:he.map((function(e){return e.name})),onInputChange:function(e,n){return de(n)},renderInput:function(e){return(0,B.jsx)(I.Z,(0,c.Z)((0,c.Z)({},e),{},{label:"Kategori Ara",InputProps:(0,c.Z)((0,c.Z)({},e.InputProps),{},{type:"search"})}))}})}),(0,B.jsx)(q.y,{type:"text",name:"name",placeholder:"\xdcr\xfcn Ad\u0131",containerClass:"mb-3",onChange:function(e){return H(e.target.value)}}),(0,B.jsx)(q.y,{type:"text",name:"name",placeholder:"\xdcr\xfcn Fiyat\u0131",containerClass:"mb-3",onChange:function(e){return Y(Number(e.target.value))}}),(0,B.jsx)(q.y,{type:"text",name:"name",placeholder:"\xdcr\xfcn Sto\u011fu",containerClass:"mb-3",onChange:function(e){return Q(Number(e.target.value))}}),(0,B.jsx)(q.y,{type:"text",name:"name",placeholder:"\xdcr\xfcn A\xe7\u0131klamas\u0131",containerClass:"mb-3",onChange:function(e){return te(e.target.value)}}),(0,B.jsx)(q.y,{label:"Avatar",type:"file",name:"avatar",accept:"image/*",onChange:function(e){var n=e.target.files&&e.target.files[0];n&&L(n)},containerClass:"mb-3"}),(0,B.jsxs)(x.Z.Group,{children:[(0,B.jsx)(x.Z.Label,{children:"\xd6zel Alanlar"}),m.map((function(e,n){return(0,B.jsxs)(k.Z,{className:"mb-3",children:[(0,B.jsx)(b.Z,{placeholder:"Alan Ad\u0131",value:e.name,onChange:function(e){return Ie(n,"name",e.target.value)}}),(0,B.jsx)(b.Z,{placeholder:"Alan De\u011feri",value:e.placeholder,onChange:function(e){return Ie(n,"placeholder",e.target.value)}}),(0,B.jsx)(v.Z,{variant:"danger",onClick:function(){return function(e){var n=(0,r.Z)(m);n.splice(e,1),h(n)}(n)},children:(0,B.jsx)(w.pZ2,{})})]},n)})),(0,B.jsx)(v.Z,{variant:"success",onClick:function(){return h([].concat((0,r.Z)(m),[{name:"",placeholder:""}]))},children:(0,B.jsx)(w.L3d,{})})]})]})}),(0,B.jsxs)(f.Z.Footer,{children:[(0,B.jsx)(v.Z,{variant:"secondary",onClick:Ne,children:"Close"}),(0,B.jsx)(v.Z,{variant:"primary",onClick:Se,children:"Save"})]})]}),(0,B.jsx)(p.Z,{sm:4,children:(0,B.jsxs)(v.Z,{variant:"primary",className:"mb-3",onClick:function(){Ne()},children:[(0,B.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," \xdcr\xfcn Ekle"]})})]}),(0,B.jsx)(J,{searchOptions:he,products:ke,setProducts:be})]})}},86738:function(e,n,t){t.d(n,{sA:function(){return o},Py:function(){return i},xu:function(){return l},N6:function(){return u}});var r=t(15861),a=t(64687),s=t.n(a),c=t(48694),o=function(){var e=(0,r.Z)(s().mark((function e(n,t,r){var a,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"\n        mutation CreateCart($productId: Int!, $quantity: Int!) {\n          createCart(createCartInput: {\n            productId: $productId,\n            quantity: $quantity,\n          }) {\n            id\n            products {\n              id\n              image\n              title\n              category {\n                id\n                name\n              }\n              price\n              stock\n              description\n              variant\n              createdAt\n              updatedAt\n              customInputs {\n                key\n                value\n              }\n            }\n            quantity\n            createdAt\n            updatedAt\n          }\n        }\n      ",a={productId:n.id,quantity:t},e.next=5,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({query:"\n        mutation CreateCart($productId: Int!, $quantity: Int!) {\n          createCart(createCartInput: {\n            productId: $productId,\n            quantity: $quantity,\n          }) {\n            id\n            products {\n              id\n              image\n              title\n              category {\n                id\n                name\n              }\n              price\n              stock\n              description\n              variant\n              createdAt\n              updatedAt\n              customInputs {\n                key\n                value\n              }\n            }\n            quantity\n            createdAt\n            updatedAt\n          }\n        }\n      ",variables:a})});case 5:return o=e.sent,e.next=8,o.json();case 8:if(i=e.sent,console.log(i),!i.errors){e.next=12;break}throw new Error(i.errors[0].message);case 12:return e.abrupt("return",i.data.createCart);case 15:throw e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n,t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"\n        query {\n            carts {\n              id\n              products {\n                id\n                image\n                title\n                category {\n                  id\n                  name\n                }\n                price\n                stock\n                description\n                variant\n                createdAt\n                updatedAt\n                customInputs {\n                  key\n                  value\n                }\n              }\n              quantity\n              createdAt\n              updatedAt\n            }\n          }\n\n        ",e.next=4,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({query:"\n        query {\n            carts {\n              id\n              products {\n                id\n                image\n                title\n                category {\n                  id\n                  name\n                }\n                price\n                stock\n                description\n                variant\n                createdAt\n                updatedAt\n                customInputs {\n                  key\n                  value\n                }\n              }\n              quantity\n              createdAt\n              updatedAt\n            }\n          }\n\n        "})});case 4:return t=e.sent,e.next=7,t.json();case 7:if(!(r=e.sent).errors){e.next=10;break}throw new Error(r.errors[0].message);case 10:return e.abrupt("return",r.data.carts);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n,t,r){var a,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n,t),e.prev=1,a="\n        mutation {\n            updateCart(updateCartInput: {\n              id: ".concat(n,"\n              quantity: ").concat(t,"\n            }) {\n              id\n              products {\n                id\n                image\n                title\n                category {\n                    id\n                    name\n                }\n                price\n                stock\n                description\n                variant\n                createdAt\n                updatedAt\n                customInputs {\n                  key\n                  value\n                }\n              }\n              quantity\n              createdAt\n              updatedAt\n            }\n          }\n        "),e.next=5,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({query:a})});case 5:return o=e.sent,e.next=8,o.json();case 8:if(!(i=e.sent).errors){e.next=11;break}throw new Error(i.errors[0].message);case 11:return e.abrupt("return",i.data.updateCart);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n,t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n),"\n        mutation ($id: Int!) {\n            removeCart(id: $id)\n          }\n        ",e.next=5,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({query:"\n        mutation ($id: Int!) {\n            removeCart(id: $id)\n          }\n        ",variables:{id:n}})});case 5:return r=e.sent,e.next=8,r.json();case 8:if(a=e.sent,!r.ok){e.next=11;break}return e.abrupt("return",a.data.removeCart);case 11:throw new Error(a.errors[0].message);case 14:throw e.prev=14,e.t0=e.catch(0),console.log(e.t0),e.t0;case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n,t){return e.apply(this,arguments)}}()},97140:function(e,n,t){t.d(n,{gK:function(){return o},Xp:function(){return i},kh:function(){return l},nM:function(){return u},Fw:function(){return d}});var r=t(15861),a=t(64687),s=t.n(a),c=t(48694),o=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r,a,o,i,l,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.customFields.map((function(e){return{key:e.name,value:e.placeholder}})),console.log(n),a=n.categoryId.id,console.log(a),e.prev=4,o='\n  mutation CreateProduct($customInputs: [CustomInput!], $categoryId: Int!) {\n    createProduct(createProductInput: {\n      image: "'.concat(n.image,'",\n      title: "').concat(n.name,'",\n      categoryId: $categoryId,\n      price: ').concat(n.price,",\n      stock: ").concat(n.stock,',\n      variant: "').concat(n.variant,'",\n      description: "').concat(n.description,'",\n      customInputs: $customInputs\n    }) {\n      id\n      image\n      title\n      category {\n        id\n        name\n      }\n      price\n      stock\n      variant\n      description\n      customInputs {\n        key\n        value\n      }\n      createdAt\n      updatedAt\n    }\n  }\n'),i={customInputs:r,categoryId:a},e.next=9,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({query:o,variables:i})});case 9:return l=e.sent,console.log(l),e.next=13,l.json();case 13:if(u=e.sent,console.log(u),!l.ok){e.next=17;break}return e.abrupt("return",u.data.createProduct);case 17:throw new Error(u.errors[0].message);case 20:throw e.prev=20,e.t0=e.catch(4),console.log(e.t0),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(n,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0," query {\n      products {\n        id\n        image\n        title\n        category {\n          id\n          name\n        }\n        price\n        stock\n        variant\n        description\n        customInputs {\n          key\n          value\n        }\n        createdAt\n        updatedAt\n      }\n    }\n    ",e.next=4,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({query:" query {\n      products {\n        id\n        image\n        title\n        category {\n          id\n          name\n        }\n        price\n        stock\n        variant\n        description\n        customInputs {\n          key\n          value\n        }\n        createdAt\n        updatedAt\n      }\n    }\n    "})});case 4:return t=e.sent,e.next=7,t.json();case 7:if(r=e.sent,!t.ok){e.next=10;break}return e.abrupt("return",r.data.products);case 10:throw new Error(r.errors[0].message);case 13:throw e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n),"\n    mutation ($id: Int!) {\n      removeProduct(id: $id)\n    }\n    ",e.next=5,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({query:"\n    mutation ($id: Int!) {\n      removeProduct(id: $id)\n    }\n    ",variables:{id:n}})});case 5:return r=e.sent,e.next=8,r.json();case 8:if(a=e.sent,console.log(a),!r.ok){e.next=12;break}return e.abrupt("return",a.data.removeProduct);case 12:throw new Error(a.errors[0].message);case 15:throw e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stock>=100?n.variant="success":n.stock<100?n.variant="warning":n.stock<=1&&(n.variant="danger"),e.prev=1,r="\n    mutation {\n      updateProduct(updateProductInput: {\n        id: ".concat(n.id,',\n        title: "').concat(n.title,'",\n        price: ').concat(n.price,",\n        stock: ").concat(n.stock,',\n        variant: "').concat(n.variant,'",\n        description: "').concat(n.description,'",\n      }) {\n        id\n        title\n        price\n        stock\n        variant\n        createdAt\n        updatedAt\n      }\n    }\n    '),e.next=5,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({query:r,variables:{input:n}})});case 5:return a=e.sent,console.log(a),e.next=9,a.json();case 9:if(o=e.sent,console.log(o),!a.ok){e.next=13;break}return e.abrupt("return",o.data.updateProduct);case 13:throw new Error(o.errors[0].message);case 16:throw e.prev=16,e.t0=e.catch(1),console.log(e.t0),e.t0;case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n,t,r){var a,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="\n    mutation {\n      updateProduct(updateProductInput: {\n        id: ".concat(n,",\n        stock: ").concat(t,",\n      }) {\n        id\n        title\n        price\n        stock\n        variant\n        createdAt\n        updatedAt\n      }\n    }\n    "),e.next=4,fetch(c.g.API,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({query:a,variables:{input:n}})});case 4:return o=e.sent,console.log(o),e.next=8,o.json();case 8:if(i=e.sent,console.log(i),!o.ok){e.next=12;break}return e.abrupt("return",i.data.updateProduct);case 12:throw new Error(i.errors[0].message);case 15:throw e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n,t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=1895.6a26f1b6.chunk.js.map