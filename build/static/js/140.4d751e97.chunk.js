(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[140],{1428:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"d",(function(){return c})),t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return o})),t.d(a,"e",(function(){return s}));var n=t(20),l=t.n(n),r=function(){return l.a.get("/api/user/all")},c=function(e){return l.a.get("/api/user",{data:e})},i=function(e){return l.a.post("/api/user/delete",e)},o=function(e){return l.a.post("/api/user/add",e)},s=function(e){return l.a.post("/api/user/update",e)}},2708:function(e,a,t){"use strict";t.r(a);var n=t(22),l=t(16),r=t(1),c=t.n(r),i=t(1166),o=t(1222),s=t(1379),u=t(1382),m=t(1380),d=t(1376),b=t(1381),p=t(569),f=t(1195),v=t(1388),E=t(1428),g=t(7),h=t(1219),j=t(1221),O=t(1167),x=t(1453),N=t(55),y=t(116),C=function(e){var a=e.uid,t=e.open,l=e.handleClose,o=Object(r.useState)({name:"",email:"",phone:"",balance:"",age:"",company:"",address:"",isActive:!1}),s=Object(n.a)(o,2),u=s[0],m=s[1],d=function(e,a){e.persist(),m("switch"!==a?Object(g.a)(Object(g.a)({},u),{},{[e.target.name]:e.target.value}):Object(g.a)(Object(g.a)({},u),{},{isActive:e.target.checked}))};return Object(r.useEffect)((function(){Object(E.d)(a).then((function(e){return m(Object(g.a)({},e.data))}))}),[a]),c.a.createElement(h.a,{onClose:l,open:t},c.a.createElement("div",{className:"p-6"},c.a.createElement("h4",{className:"mb-5"},"Update Member"),c.a.createElement(N.ValidatorForm,{onSubmit:function(){u.id?Object(E.e)(Object(g.a)({},u)).then((function(){l()})):Object(E.a)(Object(g.a)({id:Object(y.c)()},u)).then((function(){l()}))}},c.a.createElement(j.a,{className:"mb-4",container:!0,spacing:4},c.a.createElement(j.a,{item:!0,sm:6,xs:12},c.a.createElement(N.TextValidator,{className:"w-full mb-4",label:"Name",onChange:d,type:"text",name:"name",value:null===u||void 0===u?void 0:u.name,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(N.TextValidator,{className:"w-full mb-4",label:"Email",onChange:d,type:"text",name:"email",value:null===u||void 0===u?void 0:u.email,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(N.TextValidator,{className:"w-full mb-4",label:"Phone",onChange:d,type:"text",name:"phone",value:null===u||void 0===u?void 0:u.phone,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(N.TextValidator,{className:"w-full mb-4",label:"Balance",onChange:d,type:"number",name:"balance",value:null===u||void 0===u?void 0:u.balance,validators:["required"],errorMessages:["this field is required"]})),c.a.createElement(j.a,{item:!0,sm:6,xs:12},c.a.createElement(N.TextValidator,{className:"w-full mb-4",label:"Age",onChange:d,type:"number",name:"age",value:null===u||void 0===u?void 0:u.age,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(N.TextValidator,{className:"w-full mb-4",label:"Company",onChange:d,type:"text",name:"company",value:null===u||void 0===u?void 0:u.company,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(N.TextValidator,{className:"w-full mb-4",label:"Address",onChange:d,type:"text",name:"address",value:null===u||void 0===u?void 0:u.address,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(O.a,{className:"my-5",control:c.a.createElement(x.a,{checked:null===u||void 0===u?void 0:u.isActive,onChange:function(e){return d(e,"switch")}}),label:"Active Customer"}))),c.a.createElement("div",{className:"flex justify-between items-center"},c.a.createElement(i.a,{variant:"contained",color:"primary",type:"submit"},"Save"),c.a.createElement(i.a,{variant:"outlined",color:"secondary",onClick:function(){return l()}},"Cancel")))))},w=t(89),q=t(1942),P=t.n(q),S=t(1165),k=t(4),A=Object(S.a)((function(e){e.palette,Object(l.a)(e,["palette"]);return{productTable:{"& thead":{"& th:first-child":{paddingLeft:16}},"& td":{borderBottom:"none"},"& td:first-child":{paddingLeft:"16px !important"}}}}));a.default=function(){var e=Object(r.useState)(null),a=Object(n.a)(e,2),t=a[0],l=a[1],g=Object(r.useState)(10),h=Object(n.a)(g,2),j=h[0],O=h[1],x=Object(r.useState)(0),N=Object(n.a)(x,2),y=N[0],q=N[1],S=Object(r.useState)(null),T=Object(n.a)(S,2),M=T[0],V=T[1],B=Object(r.useState)([]),z=Object(n.a)(B,2),D=z[0],I=z[1],J=Object(r.useState)(!1),L=Object(n.a)(J,2),R=L[0],U=L[1],F=Object(r.useState)(!1),Y=Object(n.a)(F,2),$=Y[0],G=Y[1],H=A(),K=function(){U(!1),G(!1),Q()},Q=function(){Object(E.c)().then((function(e){var a=e.data;I(a)}))};return Object(r.useEffect)((function(){Q()}),[]),c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(w.b,{routeSegments:[{name:"CRUD Table"}]})),c.a.createElement(i.a,{className:"mb-4",variant:"contained",color:"primary",onClick:function(){return U(!0)}},"Add New Member"),c.a.createElement(o.a,{className:"w-full overflow-auto",elevation:6},c.a.createElement(s.a,{className:Object(k.default)("whitespace-pre min-w-750",H.productTable)},c.a.createElement(u.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,null,"Name"),c.a.createElement(d.a,null,"Age"),c.a.createElement(d.a,null,"Balance"),c.a.createElement(d.a,null,"Company"),c.a.createElement(d.a,null,"Status"),c.a.createElement(d.a,null,"Action"))),c.a.createElement(b.a,null,null===D||void 0===D?void 0:D.slice(y*j,y*j+j).map((function(e,a){return c.a.createElement(m.a,{hover:!0,key:P.a.generate()},c.a.createElement(d.a,{className:"px-0",align:"left"},e.name),c.a.createElement(d.a,{className:"px-0",align:"left"},e.age),c.a.createElement(d.a,{className:"px-0"},"$",e.balance),c.a.createElement(d.a,{className:"px-0",align:"left"},e.company),c.a.createElement(d.a,{className:"px-0"},e.isActive?c.a.createElement("small",{className:"rounded bg-primary elevation-z3 text-white px-2 py-2px"},"active"):c.a.createElement("small",{className:"rounded bg-light-gray elevation-z3 px-2 py-2px"},"inactive")),c.a.createElement(d.a,{className:"px-0 border-none"},c.a.createElement(p.a,{onClick:function(){l(e.id),U(!0)}},c.a.createElement(f.a,{color:"primary"},"edit")),c.a.createElement(p.a,{onClick:function(){return function(e){V(e),G(!0)}(e)}},c.a.createElement(f.a,{color:"error"},"delete"))))})))),c.a.createElement(v.a,{className:"px-4",rowsPerPageOptions:[5,10,25],component:"div",count:null===D||void 0===D?void 0:D.length,rowsPerPage:j,page:y,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,a){q(a)},onChangeRowsPerPage:function(e){var a=e.target.value;return O(a)}}),R&&c.a.createElement(C,{handleClose:K,open:R,uid:t}),$&&c.a.createElement(w.d,{open:$,onConfirmDialogClose:K,onYesClick:function(){Object(E.b)(M).then((function(){K()}))},text:"Are you sure to delete?"})))}}}]);