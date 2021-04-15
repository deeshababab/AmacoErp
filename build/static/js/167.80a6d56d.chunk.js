(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[167],{2654:function(e,a,t){"use strict";t.r(a);var r=t(37),n=t.n(r),l=t(58),i=t(22),o=t(16),c=t(1),m=t.n(c),s=t(1222),u=t(1411),d=t(1221),p=t(535),b=t(1375),h=t(1195),g=t(1166),v=t(89),y=t(1612),E=t(2573),f=t(1975),N=t(4),x=t(1165),B=Object(x.a)((function(e){e.palette,Object(o.a)(e,["palette"]);return{dropZone:{transition:"all 350ms ease-in-out",border:"2px dashed rgba(var(--body),0.3)","&:hover":{background:"rgba(var(--body), 0.2) !important"}}}})),C=E.b().shape({name:E.c().required("Name is required"),price:E.a().required("Price is required"),category:E.c().required("Category is required"),quantity:E.a().required("Quantity is required")}),q={name:"",sku:"",price:"",category:"",quantity:""},O=["Electronics","Clothes","Toys","Books","Utensils"];a.default=function(){var e=Object(c.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(f.a)({accept:"image/*"}),E=o.getRootProps,x=o.getInputProps,P=o.isDragActive,k=o.acceptedFiles,S=B(),j=function(){var e=Object(l.a)(n.a.mark((function e(a,t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isSubmitting;case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r(k)}),[k]),m.a.createElement("div",{className:"m-sm-30"},m.a.createElement("div",{className:"mb-sm-30"},m.a.createElement(v.b,{routeSegments:[{name:"Pages",path:"/pages"},{name:"New Product"}]})),m.a.createElement(s.a,{elevation:3},m.a.createElement("div",{className:"flex p-4"},m.a.createElement("h4",{className:"m-0"},"Add New Product")),m.a.createElement(u.a,{className:"mb-6"}),m.a.createElement(y.b,{initialValues:q,onSubmit:j,enableReinitialize:!0,validationSchema:C},(function(e){var a=e.values,r=e.errors,n=e.touched,l=e.handleChange,i=e.handleBlur,o=e.handleSubmit;e.isSubmitting,e.setSubmitting,e.setFieldValue;return m.a.createElement("form",{className:"px-4",onSubmit:o},m.a.createElement(d.a,{container:!0,spacing:3},m.a.createElement(d.a,{item:!0,sm:6,xs:12},m.a.createElement(p.a,{className:"mb-4",name:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,onBlur:i,onChange:l,value:a.name||"",error:Boolean(n.name&&r.name),helperText:n.name&&r.name}),m.a.createElement(p.a,{className:"mb-4",name:"description",label:"Description",variant:"outlined",size:"small",fullWidth:!0,multiline:!0,onBlur:i,onChange:l,value:a.description||"",error:Boolean(n.description&&r.description),helperText:n.description&&r.description}),m.a.createElement(p.a,{className:"mb-4",name:"category",label:"Category",variant:"outlined",size:"small",fullWidth:!0,select:!0,onBlur:i,onChange:l,value:a.category||"",error:Boolean(n.category&&r.category),helperText:n.category&&r.category},O.sort().map((function(e){return m.a.createElement(b.a,{value:e,key:e},e)}))),m.a.createElement("div",Object.assign({className:Object(N.default)({"border-radius-4 h-160 w-full flex justify-center items-center cursor-pointer mb-4":!0,[S.dropZone]:!0,"bg-light-gray":!P,"bg-gray":P})},E()),m.a.createElement("input",x()),m.a.createElement("div",{className:"flex-column items-center"},m.a.createElement(h.a,{className:"text-muted text-48"},"publish"),t.length?m.a.createElement("span",null,t.length," images were selected"):m.a.createElement("span",null,"Drop product images")))),m.a.createElement(d.a,{item:!0,sm:6,xs:12},m.a.createElement(p.a,{className:"mb-4",name:"productCode",label:"Product Code",variant:"outlined",size:"small",fullWidth:!0,onBlur:i,onChange:l,value:a.productCode||"",error:Boolean(n.productCode&&r.productCode),helperText:n.productCode&&r.productCode}),m.a.createElement(p.a,{className:"mb-4",name:"sku",label:"SKU",variant:"outlined",size:"small",fullWidth:!0,onBlur:i,onChange:l,value:a.sku||"",error:Boolean(n.sku&&r.sku),helperText:n.sku&&r.sku}),m.a.createElement(p.a,{className:"mb-4",name:"price",label:"Price",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:i,onChange:l,value:a.price||"",error:Boolean(n.price&&r.price),helperText:n.price&&r.price}),m.a.createElement(p.a,{className:"mb-4",name:"salePrice",label:"Sale Price",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:i,onChange:l,value:a.salePrice||"",error:Boolean(n.salePrice&&r.salePrice),helperText:n.salePrice&&r.salePrice}),m.a.createElement(p.a,{className:"mb-4",name:"quantity",label:"Quantity",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:i,onChange:l,value:a.quantity||"",error:Boolean(n.quantity&&r.quantity),helperText:n.quantity&&r.quantity}),m.a.createElement(p.a,{className:"mb-4",name:"minOrderAmount",label:"Minimum Order Amount",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:i,onChange:l,value:a.minOrderAmount||"",error:Boolean(n.minOrderAmount&&r.minOrderAmount),helperText:n.minOrderAmount&&r.minOrderAmount}))),m.a.createElement(g.a,{className:"mb-4 px-12",variant:"contained",color:"primary",type:"submit"},"Add Product"))}))))}}}]);