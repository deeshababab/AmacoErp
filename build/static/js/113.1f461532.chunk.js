(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[113],{1281:function(e,t,a){"use strict";var l=a(1),i=l.createContext();t.a=i},1377:function(e,t,a){"use strict";var l=a(5),i=a(3),n=a(1),r=(a(0),a(4)),c=a(10),o=a(14),s=a(31),d=a(1410),m=a(1281),u=n.forwardRef((function(e,t){var a,c,s=e.align,u=void 0===s?"inherit":s,p=e.classes,b=e.className,v=e.component,f=e.padding,g=e.scope,h=e.size,O=e.sortDirection,j=e.variant,y=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=n.useContext(d.a),E=n.useContext(m.a),N=E&&"head"===E.variant;v?(c=v,a=N?"columnheader":"cell"):c=N?"th":"td";var S=g;!S&&N&&(S="col");var w=f||(x&&x.padding?x.padding:"default"),z=h||(x&&x.size?x.size:"medium"),_=j||E&&E.variant,T=null;return O&&(T="asc"===O?"ascending":"descending"),n.createElement(c,Object(i.a)({ref:t,className:Object(r.default)(p.root,p[_],b,"inherit"!==u&&p["align".concat(Object(o.a)(u))],"default"!==w&&p["padding".concat(Object(o.a)(w))],"medium"!==z&&p["size".concat(Object(o.a)(z))],"head"===_&&x&&x.stickyHeader&&p.stickyHeader),"aria-sort":T,role:a,scope:S},y))}));t.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1378:function(e,t,a){"use strict";var l=a(5),i=a(3),n=a(1),r=(a(0),a(4)),c=a(10),o=a(1410),s=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,u=void 0===m?"default":m,p=e.size,b=void 0===p?"medium":p,v=e.stickyHeader,f=void 0!==v&&v,g=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=n.useMemo((function(){return{padding:u,size:b,stickyHeader:f}}),[u,b,f]);return n.createElement(o.a.Provider,{value:h},n.createElement(d,Object(i.a)({role:"table"===d?null:"table",ref:t,className:Object(r.default)(a.root,c,f&&a.stickyHeader)},g)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1379:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(1),r=(a(0),a(4)),c=a(10),o=a(1281),s=a(31),d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,u=void 0!==m&&m,p=e.selected,b=void 0!==p&&p,v=Object(i.a)(e,["classes","className","component","hover","selected"]),f=n.useContext(o.a);return n.createElement(d,Object(l.a)({ref:t,className:Object(r.default)(a.root,c,f&&{head:a.head,footer:a.footer}[f.variant],u&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},v))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1380:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(1),r=(a(0),a(4)),c=a(10),o=a(1281),s={variant:"body"},d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,m=void 0===d?"tbody":d,u=Object(i.a)(e,["classes","className","component"]);return n.createElement(o.a.Provider,{value:s},n.createElement(m,Object(l.a)({className:Object(r.default)(a.root,c),ref:t,role:"tbody"===m?null:"rowgroup"},u)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1381:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(1),r=(a(0),a(4)),c=a(10),o=a(1281),s={variant:"head"},d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,m=void 0===d?"thead":d,u=Object(i.a)(e,["classes","className","component"]);return n.createElement(o.a.Provider,{value:s},n.createElement(m,Object(l.a)({className:Object(r.default)(a.root,c),ref:t,role:"thead"===m?null:"rowgroup"},u)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1410:function(e,t,a){"use strict";var l=a(1),i=l.createContext();t.a=i},1411:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(1),r=(a(0),a(4)),c=a(10),o=a(31),s=n.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,o=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,p=void 0!==u&&u,b=e.light,v=void 0!==b&&b,f=e.orientation,g=void 0===f?"horizontal":f,h=e.role,O=void 0===h?"hr"!==m?"separator":void 0:h,j=e.variant,y=void 0===j?"fullWidth":j,x=Object(i.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(m,Object(l.a)({className:Object(r.default)(o.root,s,"fullWidth"!==y&&o[y],c&&o.absolute,p&&o.flexItem,v&&o.light,"vertical"===g&&o.vertical),role:O,ref:t},x))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},2600:function(e,t,a){"use strict";a.r(t);var l=a(13),i=a(7),n=a(22),r=a(16),c=a(1),o=a.n(c),s=a(1222),d=a(1166),m=a(1195),u=a(1411),p=a(1378),b=a(1381),v=a(1379),f=a(1377),g=a(1380),h=a(55),O=(a(1428),a(133)),j=a(44),y=a(1163),x=a(4),E=(a(20),a(565)),N=a.n(E),S=a(1408),w=a.n(S),z=Object(y.a)((function(e){e.palette;var t=Object(r.a)(e,["palette"]);return{invoiceEditor:{"& h5":{fontSize:15}},root:{width:"100px"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}})),_={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",date:new Date,currency:"",loading:!1};t.default=function(e){var t=e.isNewInvoice,a=(e.toggleInvoiceEditor,Object(c.useState)(!0)),r=Object(n.a)(a,2),y=r[0],E=(r[1],Object(c.useState)(_)),S=Object(n.a)(E,2),T=S[0],k=S[1],C=Object(c.useState)([]),q=Object(n.a)(C,2),M=(q[0],q[1],Object(c.useState)([])),D=Object(n.a)(M,2),A=(D[0],D[1],Object(c.useState)("")),P=Object(n.a)(A,2),R=(P[0],P[1],Object(c.useState)("")),F=Object(n.a)(R,2),I=F[0],W=F[1],V=new Date,H=Object(c.useState)(""),L=Object(n.a)(H,2),Q=L[0],U=L[1],Y=Object(c.useState)(""),$=Object(n.a)(Y,2),J=$[0],B=$[1],G=Object(c.useState)(""),K=Object(n.a)(G,2),X=K[0],Z=K[1],ee=Object(c.useState)([]),te=Object(n.a)(ee,2),ae=(te[0],te[1],Object(c.useState)("0")),le=Object(n.a)(ae,2),ie=le[0],ne=(le[1],Object(c.useState)([])),re=Object(n.a)(ne,2),ce=(re[0],re[1]),oe=Object(c.useState)([]),se=Object(n.a)(oe,2),de=(se[0],se[1],Object(c.useState)("3 Days")),me=Object(n.a)(de,2),ue=(me[0],me[1],Object(c.useState)("100 %Advance")),pe=Object(n.a)(ue,2),be=(pe[0],pe[1],Object(c.useState)("NA")),ve=Object(n.a)(be,2),fe=(ve[0],ve[1],Object(c.useState)("Within 2-3 Days from the Date of PO")),ge=Object(n.a)(fe,2),he=(ge[0],ge[1],Object(c.useState)("DDP-Delivery Duty Paid To CATCO Office")),Oe=Object(n.a)(he,2),je=(Oe[0],Oe[1],Object(c.useState)("0")),ye=Object(n.a)(je,2),xe=ye[0],Ee=ye[1],Ne=Object(c.useState)(""),Se=Object(n.a)(Ne,2),we=(Se[0],Se[1],Object(c.useState)(!1)),ze=Object(n.a)(we,2),_e=ze[0],Te=(ze[1],Object(j.g)()),ke=Object(j.i)().id,Ce=z(),qe=o.a.useState(!1),Me=Object(n.a)(qe,2),De=(Me[0],Me[1],Object(c.useCallback)((function(){var e=Math.random().toString(),t=e.substr(2,e.length-1);k((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:t})}))}),[]));Object(c.useEffect)((function(){O.b.get("products").then((function(e){var t=e.data;ce(t)})),O.b.get("sale-quotation/"+ke).then((function(e){var t=e.data;W(t[0].party.firm_name),U(t[0].quotation_no),B(t[0].po_number),Z(t[0].party.id),Ee(t[0].discount_in_p),k(Object(i.a)(Object(i.a)({},T),{},{item:t[0].quotation_details}))}))}),[ke,t,y,De]);var Ae=0,Pe=0,Re=(T.orderNo,T.net_amount,T.buyer,T.seller,T.item),Fe=void 0===Re?[]:Re,Ie=(T.quote,T.status,T.vat),We=(T.date,T.currency,T.loading);T.margin;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(s.a,{elevation:3},o.a.createElement("div",{className:Object(x.default)("invoice-viewer py-4",Ce.invoiceEditor)},o.a.createElement(h.ValidatorForm,{onSubmit:function(){k(Object(i.a)(Object(i.a)({},T),{},{loading:!0}));var e=[];delete Object(i.a)({},T).loading;var t=Object(l.a)(T.item);e.invoice_details=t,e.quotation_id=parseInt(ke),e.discount_in_percentage=xe,e.total_value=parseFloat(Ae).toFixed(2),e.grand_total=Pe,e.vat_in_value=parseFloat(Ie).toFixed(2),e.party_id=X;var a=Object.assign({},e);O.b.post("invoice",a).then((function(e){N.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}),Te.push("/inv")})).catch((function(e){}))},onError:function(e){return null}},o.a.createElement("div",{className:"viewer_actions px-4 flex justify-between"},o.a.createElement("div",{className:"mb-6"},o.a.createElement("h3",{align:"left"},"Sales Invoice")),o.a.createElement("div",{className:"mb-6"},o.a.createElement(d.a,{className:"mr-4 py-2",variant:"outlined",color:"secondary",onClick:function(){Te.push("/quote/".concat(ke,"/accept"))}},o.a.createElement(m.a,null,"cancel")," Cancel"),o.a.createElement(d.a,{type:"submit",className:"py-2",variant:"outlined",color:"primary",disabled:We},o.a.createElement(m.a,null,"save")," Save & Print Invoice"))),o.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},o.a.createElement("div",null,o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"Quotation Number: ")," ",o.a.createElement("span",null,Q)),o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"Company Name: ")," ",o.a.createElement("span",null,I))),o.a.createElement("div",null,o.a.createElement("div",{className:"text-right"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"Due date: "),o.a.createElement("span",null,w()(V).format("DD MMM YYYY")))),o.a.createElement("div",{className:"text-right"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"P.O Number: "),o.a.createElement("span",null,J))))),o.a.createElement(u.a,null),o.a.createElement(p.a,{className:"mb-4"},o.a.createElement(b.a,null,o.a.createElement(v.a,{className:"bg-default"},o.a.createElement(f.a,{className:"pl-2",width:80},"S.No."),o.a.createElement(f.a,{className:"px-0"},"Item Name"),o.a.createElement(f.a,{className:"px-0"},"Rfq description"),o.a.createElement(f.a,{className:"px-0",width:100},"UOM"),o.a.createElement(f.a,{className:"px-0",style:{width:"80px"}},"Quantity"),o.a.createElement(f.a,{className:"px-0",style:{width:"150px"}},"Unit Price"),o.a.createElement(f.a,{className:"px-0"},"Total"))),o.a.createElement(g.a,null,Fe.map((function(e,t){return _e?(Ae+=parseFloat(e.total_amount),Ie=(15*(Ae-parseFloat(ie*Ae/100))/100).toFixed(2),Pe=(Ae-parseFloat(ie*Ae/100)+parseFloat(Ie)).toFixed(2)):(Ae+=parseFloat(e.total_amount),Ie=(15*Ae/100).toFixed(2),Pe=(Ae+15*Ae/100).toFixed(2)),o.a.createElement(v.a,{key:t},o.a.createElement(f.a,{className:"pl-2 capitalize",align:"left"},t+1),o.a.createElement(f.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(h.TextValidator,{label:"Item Name",variant:"outlined",size:"small",type:"text",name:"name",fullWidth:!0,value:e?e.product.name:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(f.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(h.TextValidator,{label:"description",type:"text",name:"description",fullWidth:!0,variant:"outlined",size:"small",inputProps:{style:{textTransform:"capitalize"}},value:e?e.description:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(f.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(h.TextValidator,{label:"UOM",type:"text",variant:"outlined",size:"small",name:"uom",inputProps:{min:0,style:{textAlign:"center"}},fullWidth:!0,value:e?e.product.unit_of_measure:null})),o.a.createElement(f.a,{className:"pl-0 capitalize",align:"left",style:{width:"60px"}},o.a.createElement(h.TextValidator,{label:"Quantity",onChange:function(e){return function(e,t){e.persist();var a=Object(l.a)(T.item);a.map((function(a,l){return t===l&&(a.total_amount=(parseInt(a.sell_price)*e.target.value).toFixed(2),a[e.target.name]=e.target.value),a})),k(Object(i.a)(Object(i.a)({},T),{},{item:a}))}(e,t)},type:"number",variant:"outlined",size:"small",fullWidth:!0,name:"quantity",min:"1",max:e.quantity,inputProps:{min:0,style:{textAlign:"center"}},value:e.quantity,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(f.a,{className:"pl-0 capitalize",align:"left",style:{width:"80px"}},o.a.createElement(h.TextValidator,{label:"Unit_Price",type:"text",name:"sell_price",fullWidth:!0,variant:"outlined",size:"small",value:e?e.sell_price:null,inputProps:{min:0,style:{textAlign:"right"}},validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(f.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(h.TextValidator,{label:"QTotal",type:"text",variant:"outlined",size:"small",name:"total_amount",inputProps:{min:0,style:{textAlign:"right"}},fullWidth:!0,value:e.total_amount})))})))),o.a.createElement("div",{className:"flex justify-end px-4 mb-4"},o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:"pr-12"})),o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:"pr-12"},o.a.createElement("p",{className:"mb-8"},"Sub Total:"),o.a.createElement("p",{className:"mb-8"},"Discount:"),o.a.createElement("p",{className:"mb-8"},"Vat(15%):"),o.a.createElement("strong",null,o.a.createElement("p",{className:"mb-8"},"Grand Total:"))),o.a.createElement("div",null,o.a.createElement("p",{className:"mb-4",align:"right"},Ae?Ae.toFixed(2):"0.00"),o.a.createElement(h.TextValidator,{className:"mb-4",label:"Discount",type:"text",variant:"outlined",size:"small",inputProps:{min:0,style:{textAlign:"right"}},value:xe}),o.a.createElement(h.TextValidator,{className:"mb-4",label:"Vat",type:"text",variant:"outlined",size:"small",name:"vat",value:Ae?Ie:0,inputProps:{min:0,style:{textAlign:"right"}},validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(h.TextValidator,{label:"Grand Total",type:"text",className:"mb-4",variant:"outlined",size:"small",name:"net_amount",value:Ae?Pe:0,inputProps:{min:0,style:{textAlign:"right"}},validators:["required"],errorMessages:["this field is required"]}))))))))}}}]);