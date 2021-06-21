(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[133],{1287:function(e,t,a){"use strict";var l=a(1),n=l.createContext();t.a=n},1377:function(e,t,a){"use strict";var l=a(5),n=a(3),i=a(1),r=(a(0),a(4)),c=a(10),o=a(14),s=a(31),d=a(1419),m=a(1287),u=i.forwardRef((function(e,t){var a,c,s=e.align,u=void 0===s?"inherit":s,p=e.classes,b=e.className,v=e.component,f=e.padding,g=e.scope,h=e.size,O=e.sortDirection,j=e.variant,x=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=i.useContext(d.a),E=i.useContext(m.a),N=E&&"head"===E.variant;v?(c=v,a=N?"columnheader":"cell"):c=N?"th":"td";var w=g;!w&&N&&(w="col");var S=f||(y&&y.padding?y.padding:"default"),z=h||(y&&y.size?y.size:"medium"),_=j||E&&E.variant,T=null;return O&&(T="asc"===O?"ascending":"descending"),i.createElement(c,Object(n.a)({ref:t,className:Object(r.default)(p.root,p[_],b,"inherit"!==u&&p["align".concat(Object(o.a)(u))],"default"!==S&&p["padding".concat(Object(o.a)(S))],"medium"!==z&&p["size".concat(Object(o.a)(z))],"head"===_&&y&&y.stickyHeader&&p.stickyHeader),"aria-sort":T,role:a,scope:w},x))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1378:function(e,t,a){"use strict";var l=a(5),n=a(3),i=a(1),r=(a(0),a(4)),c=a(10),o=a(1419),s=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,u=void 0===m?"default":m,p=e.size,b=void 0===p?"medium":p,v=e.stickyHeader,f=void 0!==v&&v,g=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=i.useMemo((function(){return{padding:u,size:b,stickyHeader:f}}),[u,b,f]);return i.createElement(o.a.Provider,{value:h},i.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:t,className:Object(r.default)(a.root,c,f&&a.stickyHeader)},g)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1379:function(e,t,a){"use strict";var l=a(3),n=a(5),i=a(1),r=(a(0),a(4)),c=a(10),o=a(1287),s=a(31),d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,u=void 0!==m&&m,p=e.selected,b=void 0!==p&&p,v=Object(n.a)(e,["classes","className","component","hover","selected"]),f=i.useContext(o.a);return i.createElement(d,Object(l.a)({ref:t,className:Object(r.default)(a.root,c,f&&{head:a.head,footer:a.footer}[f.variant],u&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},v))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1380:function(e,t,a){"use strict";var l=a(3),n=a(5),i=a(1),r=(a(0),a(4)),c=a(10),o=a(1287),s={variant:"body"},d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,m=void 0===d?"tbody":d,u=Object(n.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:s},i.createElement(m,Object(l.a)({className:Object(r.default)(a.root,c),ref:t,role:"tbody"===m?null:"rowgroup"},u)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1381:function(e,t,a){"use strict";var l=a(3),n=a(5),i=a(1),r=(a(0),a(4)),c=a(10),o=a(1287),s={variant:"head"},d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,m=void 0===d?"thead":d,u=Object(n.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:s},i.createElement(m,Object(l.a)({className:Object(r.default)(a.root,c),ref:t,role:"thead"===m?null:"rowgroup"},u)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1410:function(e,t,a){"use strict";var l=a(3),n=a(5),i=a(1),r=(a(0),a(4)),c=a(10),o=a(31),s=i.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,o=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,p=void 0!==u&&u,b=e.light,v=void 0!==b&&b,f=e.orientation,g=void 0===f?"horizontal":f,h=e.role,O=void 0===h?"hr"!==m?"separator":void 0:h,j=e.variant,x=void 0===j?"fullWidth":j,y=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,Object(l.a)({className:Object(r.default)(o.root,s,"fullWidth"!==x&&o[x],c&&o.absolute,p&&o.flexItem,v&&o.light,"vertical"===g&&o.vertical),role:O,ref:t},y))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},1419:function(e,t,a){"use strict";var l=a(1),n=l.createContext();t.a=n},3e3:function(e,t,a){"use strict";a.r(t);var l=a(12),n=a(7),i=a(22),r=a(16),c=a(1),o=a.n(c),s=a(1164),d=a(1195),m=a(1410),u=a(1378),p=a(1381),b=a(1379),v=a(1377),f=a(1380),g=a(55),h=(a(1432),a(133)),O=a(44),j=a(1163),x=a(4),y=(a(20),a(565)),E=a.n(y),N=a(1405),w=a.n(N),S=Object(j.a)((function(e){e.palette;var t=Object(r.a)(e,["palette"]);return{invoiceEditor:{"& h5":{fontSize:15}},root:{width:"100px"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}})),z={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",date:new Date,currency:"",loading:!1};t.default=function(e){var t=e.isNewInvoice,a=(e.toggleInvoiceEditor,Object(c.useState)(!0)),r=Object(i.a)(a,2),j=r[0],y=(r[1],Object(c.useState)(z)),N=Object(i.a)(y,2),_=N[0],T=N[1],k=Object(c.useState)([]),C=Object(i.a)(k,2),q=(C[0],C[1],Object(c.useState)([])),M=Object(i.a)(q,2),D=(M[0],M[1],Object(c.useState)("")),R=Object(i.a)(D,2),F=(R[0],R[1],Object(c.useState)("")),I=Object(i.a)(F,2),W=I[0],V=I[1],A=new Date,H=Object(c.useState)(""),P=Object(i.a)(H,2),L=P[0],Q=P[1],U=Object(c.useState)(""),Y=Object(i.a)(U,2),$=Y[0],J=Y[1],B=Object(c.useState)(""),G=Object(i.a)(B,2),K=(G[0],G[1],Object(c.useState)([])),X=Object(i.a)(K,2),Z=(X[0],X[1],Object(c.useState)("0")),ee=Object(i.a)(Z,2),te=ee[0],ae=(ee[1],Object(c.useState)([])),le=Object(i.a)(ae,2),ne=(le[0],le[1]),ie=Object(c.useState)([]),re=Object(i.a)(ie,2),ce=(re[0],re[1],Object(c.useState)("3 Days")),oe=Object(i.a)(ce,2),se=(oe[0],oe[1],Object(c.useState)("100 %Advance")),de=Object(i.a)(se,2),me=(de[0],de[1],Object(c.useState)("NA")),ue=Object(i.a)(me,2),pe=(ue[0],ue[1],Object(c.useState)("Within 2-3 Days from the Date of PO")),be=Object(i.a)(pe,2),ve=(be[0],be[1],Object(c.useState)("DDP-Delivery Duty Paid To CATCO Office")),fe=Object(i.a)(ve,2),ge=(fe[0],fe[1],Object(c.useState)("0")),he=Object(i.a)(ge,2),Oe=he[0],je=he[1],xe=Object(c.useState)(!1),ye=Object(i.a)(xe,2),Ee=ye[0],Ne=(ye[1],Object(O.g)()),we=Object(O.i)().id,Se=S(),ze=o.a.useState(!1),_e=Object(i.a)(ze,2),Te=(_e[0],_e[1],Object(c.useCallback)((function(){var e=Math.random().toString(),t=e.substr(2,e.length-1);T((function(e){return Object(n.a)(Object(n.a)({},e),{},{id:t})}))}),[]));Object(c.useEffect)((function(){h.b.get("products").then((function(e){var t=e.data;ne(t)})),h.b.get("quotation/"+we).then((function(e){var t=e.data;V(t[0].party.firm_name),Q(t[0].quotation_no),J(t[0].po_number),je(t[0].discount_in_p),T(Object(n.a)(Object(n.a)({},_),{},{item:t[0].quotation_details}))}))}),[we,t,j,Te]);var ke=0,Ce=0,qe=(_.orderNo,_.net_amount,_.buyer,_.seller,_.item),Me=void 0===qe?[]:qe,De=(_.quote,_.status,_.vat),Re=(_.date,_.currency,_.loading);_.margin;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement("div",{className:Object(x.default)("invoice-viewer py-4",Se.invoiceEditor)},o.a.createElement(g.ValidatorForm,{onSubmit:function(){T(Object(n.a)(Object(n.a)({},_),{},{loading:!0}));var e=[];delete Object(n.a)({},_).loading;var t=Object(l.a)(_.item);e.invoice_details=t,e.quotation_id=parseInt(we),e.discount_in_percentage=Oe,e.total_value=parseFloat(ke).toFixed(2),e.grand_total=Ce,e.vat_in_value=parseFloat(De).toFixed(2);var a=Object.assign({},e);h.b.post("invoice",a).then((function(e){E.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}),Ne.push("/inv")})).catch((function(e){}))},onError:function(e){return null}},o.a.createElement("div",{className:"viewer_actions px-4 flex justify-between"},o.a.createElement("div",{className:"mb-6"},o.a.createElement("h3",{align:"left"},"Invoice")),o.a.createElement("div",{className:"mb-6"},o.a.createElement(s.a,{className:"mr-4 py-2",variant:"outlined",color:"secondary",onClick:function(){Ne.push("/Newinvoiceview")}},o.a.createElement(d.a,null,"cancel")," Cancel"),o.a.createElement(s.a,{type:"submit",className:"py-2",variant:"outlined",color:"primary",disabled:Re},o.a.createElement(d.a,null,"save")," Save & Print Invoice"))),o.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},o.a.createElement("div",null,o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"Quotation Number: ")," ",o.a.createElement("span",null,L)),o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"Company Name: ")," ",o.a.createElement("span",null,W))),o.a.createElement("div",null,o.a.createElement("div",{className:"text-right"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"Due date: "),o.a.createElement("span",null,w()(A).format("DD MMM YYYY")))),o.a.createElement("div",{className:"text-right"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"P.O Number: "),o.a.createElement("span",null,$))))),o.a.createElement(m.a,null),o.a.createElement(u.a,{className:"mb-4"},o.a.createElement(p.a,null,o.a.createElement(b.a,{className:"bg-default"},o.a.createElement(v.a,{className:"pl-sm-24"},"S.No."),o.a.createElement(v.a,{className:"px-0"},"Item Name"),o.a.createElement(v.a,{className:"px-0"},"Rfq description"),o.a.createElement(v.a,{className:"px-0"},"UOM"),o.a.createElement(v.a,{className:"px-0",style:{width:"80px"}},"Quantity"),o.a.createElement(v.a,{className:"px-0",style:{width:"80px"}},"Unit Price"),o.a.createElement(v.a,{className:"px-0"},"Total"))),o.a.createElement(f.a,null,Me.map((function(e,t){return Ee?(ke+=parseFloat(e.total_amount),De=(15*(ke-parseFloat(te*ke/100))/100).toFixed(2),Ce=(ke-parseFloat(te*ke/100)+parseFloat(De)).toFixed(2)):(ke+=parseFloat(e.total_amount),De=(15*ke/100).toFixed(2),Ce=(ke+15*ke/100).toFixed(2)),o.a.createElement(b.a,{key:t},o.a.createElement(v.a,{className:"pl-sm-24 capitalize",align:"left"},t+1),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(g.TextValidator,{label:"Item Name",variant:"outlined",size:"small",type:"text",name:"name",fullWidth:!0,value:e?e.product.name:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(g.TextValidator,{label:"description",type:"text",name:"description",fullWidth:!0,variant:"outlined",size:"small",value:e?e.description:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(g.TextValidator,{label:"UOM",type:"text",variant:"outlined",size:"small",name:"uom",fullWidth:!0,value:e?e.product.unit_of_measure:null})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left",style:{width:"60px"}},o.a.createElement(g.TextValidator,{label:"Quantity",onChange:function(e){return function(e,t){e.persist();var a=Object(l.a)(_.item);a.map((function(a,l){return t===l&&(a.total_amount=(parseInt(a.sell_price)*e.target.value).toFixed(2),a[e.target.name]=e.target.value),a})),T(Object(n.a)(Object(n.a)({},_),{},{item:a}))}(e,t)},type:"number",variant:"outlined",size:"small",fullWidth:!0,name:"quantity",min:"1",max:e.quantity,value:e.quantity,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left",style:{width:"80px"}},o.a.createElement(g.TextValidator,{label:"Unit_Price",type:"text",name:"sell_price",fullWidth:!0,variant:"outlined",size:"small",value:e?e.sell_price:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(g.TextValidator,{label:"QTotal",type:"text",variant:"outlined",size:"small",name:"total_amount",fullWidth:!0,value:e.total_amount})))})))),o.a.createElement("div",{className:"flex justify-end px-4 mb-4"},o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:"pr-12"})),o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:"pr-12"},o.a.createElement("p",{className:"mb-8"},"Sub Total:"),o.a.createElement("p",{className:"mb-8"},"Discount:"),o.a.createElement("p",{className:"mb-8"},"Vat(15%):"),o.a.createElement("strong",null,o.a.createElement("p",{className:"mb-8"},"Grand Total:"))),o.a.createElement("div",null,o.a.createElement("p",{className:"mb-4"},ke?ke.toFixed(2):"0.00"),o.a.createElement(g.TextValidator,{className:"mb-4",label:"Discount",type:"text",variant:"outlined",size:"small",value:Oe}),o.a.createElement(g.TextValidator,{className:"mb-4",label:"Vat",type:"text",variant:"outlined",size:"small",name:"vat",value:ke?De:0,validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(g.TextValidator,{label:"Grand Total",type:"text",className:"mb-4",variant:"outlined",size:"small",name:"net_amount",value:ke?Ce:0,validators:["required"],errorMessages:["this field is required"]})))))))}}}]);