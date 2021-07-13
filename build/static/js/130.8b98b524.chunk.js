(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[130],{1287:function(e,t,a){"use strict";var l=a(1),i=l.createContext();t.a=i},1377:function(e,t,a){"use strict";var l=a(5),i=a(3),n=a(1),r=(a(0),a(4)),c=a(10),s=a(14),o=a(31),d=a(1419),u=a(1287),m=n.forwardRef((function(e,t){var a,c,o=e.align,m=void 0===o?"inherit":o,p=e.classes,b=e.className,v=e.component,f=e.padding,g=e.scope,h=e.size,O=e.sortDirection,j=e.variant,x=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=n.useContext(d.a),E=n.useContext(u.a),N=E&&"head"===E.variant;v?(c=v,a=N?"columnheader":"cell"):c=N?"th":"td";var w=g;!w&&N&&(w="col");var S=f||(y&&y.padding?y.padding:"default"),z=h||(y&&y.size?y.size:"medium"),_=j||E&&E.variant,M=null;return O&&(M="asc"===O?"ascending":"descending"),n.createElement(c,Object(i.a)({ref:t,className:Object(r.default)(p.root,p[_],b,"inherit"!==m&&p["align".concat(Object(s.a)(m))],"default"!==S&&p["padding".concat(Object(s.a)(S))],"medium"!==z&&p["size".concat(Object(s.a)(z))],"head"===_&&y&&y.stickyHeader&&p.stickyHeader),"aria-sort":M,role:a,scope:w},x))}));t.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.i)(Object(o.d)(e.palette.divider,1),.88):Object(o.a)(Object(o.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1378:function(e,t,a){"use strict";var l=a(5),i=a(3),n=a(1),r=(a(0),a(4)),c=a(10),s=a(1419),o=n.forwardRef((function(e,t){var a=e.classes,c=e.className,o=e.component,d=void 0===o?"table":o,u=e.padding,m=void 0===u?"default":u,p=e.size,b=void 0===p?"medium":p,v=e.stickyHeader,f=void 0!==v&&v,g=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=n.useMemo((function(){return{padding:m,size:b,stickyHeader:f}}),[m,b,f]);return n.createElement(s.a.Provider,{value:h},n.createElement(d,Object(i.a)({role:"table"===d?null:"table",ref:t,className:Object(r.default)(a.root,c,f&&a.stickyHeader)},g)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(o)},1379:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(1),r=(a(0),a(4)),c=a(10),s=a(1287),o=a(31),d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,o=e.component,d=void 0===o?"tr":o,u=e.hover,m=void 0!==u&&u,p=e.selected,b=void 0!==p&&p,v=Object(i.a)(e,["classes","className","component","hover","selected"]),f=n.useContext(s.a);return n.createElement(d,Object(l.a)({ref:t,className:Object(r.default)(a.root,c,f&&{head:a.head,footer:a.footer}[f.variant],m&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},v))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(o.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1380:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(1),r=(a(0),a(4)),c=a(10),s=a(1287),o={variant:"body"},d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(i.a)(e,["classes","className","component"]);return n.createElement(s.a.Provider,{value:o},n.createElement(u,Object(l.a)({className:Object(r.default)(a.root,c),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1381:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(1),r=(a(0),a(4)),c=a(10),s=a(1287),o={variant:"head"},d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(i.a)(e,["classes","className","component"]);return n.createElement(s.a.Provider,{value:o},n.createElement(u,Object(l.a)({className:Object(r.default)(a.root,c),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1382:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(33),r=a(1),c=(a(0),a(4)),s=a(10),o=r.forwardRef((function(e,t){var a=e.classes,n=e.className,s=e.component,o=void 0===s?"div":s,d=e.disableGutters,u=void 0!==d&&d,m=e.variant,p=void 0===m?"regular":m,b=Object(i.a)(e,["classes","className","component","disableGutters","variant"]);return r.createElement(o,Object(l.a)({className:Object(c.default)(a.root,a[p],n,!u&&a.gutters),ref:t},b))}));t.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(n.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(o)},1410:function(e,t,a){"use strict";var l=a(3),i=a(5),n=a(1),r=(a(0),a(4)),c=a(10),s=a(31),o=n.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,s=e.classes,o=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,b=e.light,v=void 0!==b&&b,f=e.orientation,g=void 0===f?"horizontal":f,h=e.role,O=void 0===h?"hr"!==u?"separator":void 0:h,j=e.variant,x=void 0===j?"fullWidth":j,y=Object(i.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(l.a)({className:Object(r.default)(s.root,o,"fullWidth"!==x&&s[x],c&&s.absolute,p&&s.flexItem,v&&s.light,"vertical"===g&&s.vertical),role:O,ref:t},y))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(o)},1419:function(e,t,a){"use strict";var l=a(1),i=l.createContext();t.a=i},2609:function(e,t,a){"use strict";a.r(t);var l=a(12),i=a(7),n=a(22),r=a(16),c=a(1),s=a.n(c),o=a(1166),d=a(1195),u=a(536),m=a(1410),p=a(1378),b=a(1381),v=a(1379),f=a(1377),g=a(1380),h=a(55),O=a(1384),j=a(1559),x=a(1457),y=a(133),E=a(44),N=a(1163),w=a(4),S=(a(20),a(565)),z=a.n(S),_=a(1408),M=a.n(_),T=Object(N.a)((function(e){e.palette;var t=Object(r.a)(e,["palette"]);return{invoiceEditor:{"& h5":{fontSize:15}},root:{width:"100px"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}})),C={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",date:new Date,currency:"",loading:!1};t.default=function(e){var t=e.isNewInvoice,a=(e.toggleInvoiceEditor,Object(c.useState)(!0)),r=Object(n.a)(a,2),N=r[0],S=(r[1],Object(c.useState)(C)),_=Object(n.a)(S,2),D=_[0],k=_[1],q=Object(c.useState)([]),R=Object(n.a)(q,2),F=(R[0],R[1],Object(c.useState)([])),I=Object(n.a)(F,2),W=(I[0],I[1],Object(c.useState)("")),V=Object(n.a)(W,2),H=(V[0],V[1],Object(c.useState)("")),Y=Object(n.a)(H,2),A=Y[0],P=Y[1],L=new Date,G=Object(c.useState)(""),U=Object(n.a)(G,2),$=(U[0],U[1]),B=Object(c.useState)(""),J=Object(n.a)(B,2),Q=J[0],K=J[1],X=Object(c.useState)(""),Z=Object(n.a)(X,2),ee=(Z[0],Z[1],Object(c.useState)("")),te=Object(n.a)(ee,2),ae=te[0],le=te[1],ie=Object(c.useState)([]),ne=Object(n.a)(ie,2),re=(ne[0],ne[1],Object(c.useState)("0")),ce=Object(n.a)(re,2),se=ce[0],oe=(ce[1],Object(c.useState)([])),de=Object(n.a)(oe,2),ue=(de[0],de[1]),me=Object(c.useState)([]),pe=Object(n.a)(me,2),be=(pe[0],pe[1],Object(c.useState)("3 Days")),ve=Object(n.a)(be,2),fe=(ve[0],ve[1],Object(c.useState)("100 %Advance")),ge=Object(n.a)(fe,2),he=(ge[0],ge[1],Object(c.useState)("NA")),Oe=Object(n.a)(he,2),je=(Oe[0],Oe[1],Object(c.useState)("Within 2-3 Days from the Date of PO")),xe=Object(n.a)(je,2),ye=(xe[0],xe[1],Object(c.useState)("DDP-Delivery Duty Paid To CATCO Office")),Ee=Object(n.a)(ye,2),Ne=(Ee[0],Ee[1],Object(c.useState)("0")),we=Object(n.a)(Ne,2),Se=we[0],ze=we[1],_e=Object(c.useState)(M()(new Date).format("DD MMM YYYY")),Me=Object(n.a)(_e,2),Te=Me[0],Ce=Me[1],De=Object(c.useState)(!1),ke=Object(n.a)(De,2),qe=ke[0],Re=(ke[1],Object(E.g)()),Fe=Object(E.i)().id,Ie=T(),We=s.a.useState(!1),Ve=Object(n.a)(We,2),He=(Ve[0],Ve[1],Object(c.useCallback)((function(){var e=Math.random().toString(),t=e.substr(2,e.length-1);k((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:t})}))}),[]));Object(c.useEffect)((function(){y.c.get("products").then((function(e){var t=e.data;ue(t)})),y.c.get("purchase-quotation/"+Fe).then((function(e){var t=e.data;P(t[0].party.firm_name),$(t[0].quotation_no),K(t[0].po_number),ze(t[0].discount_in_p),k(Object(i.a)(Object(i.a)({},D),{},{item:t[0].quotation_details}))}))}),[Fe,t,N,He]);var Ye=0,Ae=0,Pe=(D.orderNo,D.net_amount,D.buyer,D.seller,D.item),Le=void 0===Pe?[]:Pe,Ge=(D.quote,D.status,D.vat),Ue=(D.date,D.currency,D.loading);D.margin;return s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:Object(w.default)("invoice-viewer py-4",Ie.invoiceEditor)},s.a.createElement(h.ValidatorForm,{onSubmit:function(){k(Object(i.a)(Object(i.a)({},D),{},{loading:!0}));var e=[];delete Object(i.a)({},D).loading;var t=Object(l.a)(D.item);e.invoice_details=t,e.quotation_id=parseInt(Fe),e.discount_in_percentage=Se,e.total_value=parseFloat(Ye).toFixed(2),e.grand_total=Ae,e.bill_no=ae,e.issue_date=Te,e.vat_in_value=parseFloat(Ge).toFixed(2);var a=Object.assign({},e);y.c.post("purchase-invoice",a).then((function(e){z.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}),Re.push("/poinv")})).catch((function(e){}))},onError:function(e){return null}},s.a.createElement("div",{className:"viewer_actions px-4 flex justify-between"},s.a.createElement("div",{className:"mb-6"},s.a.createElement("h3",{align:"left"},"Invoice")),s.a.createElement("div",{className:"mb-6"},s.a.createElement(o.a,{className:"mr-4 py-2",variant:"outlined",color:"secondary",onClick:function(){Re.push("/Newinvoiceview")}},s.a.createElement(d.a,null,"cancel")," Cancel"),s.a.createElement(o.a,{type:"submit",className:"py-2",variant:"outlined",color:"primary",disabled:Ue},s.a.createElement(d.a,null,"save")," Save & Print Invoice"))),s.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},s.a.createElement("div",null,s.a.createElement("h5",{className:"font-normal capitalize"},s.a.createElement("strong",null,"P.O Number: "),s.a.createElement("span",null,Q)),s.a.createElement("h5",{className:"font-normal capitalize"},s.a.createElement("strong",null,"Company Name: ")," ",s.a.createElement("span",null,A)),s.a.createElement(u.a,{label:"Bill No",style:{minWidth:200,maxWidth:"250px"},name:"party_id",size:"small",variant:"outlined",value:ae,onChange:function(e){return le(e.target.value)},required:!0})),s.a.createElement("div",null,s.a.createElement("div",{className:"text-right"},s.a.createElement("h5",{className:"font-normal"},s.a.createElement("strong",null,"Due date: "),s.a.createElement("span",null,M()(L).format("DD MMM YYYY")))),s.a.createElement("div",{className:"text-right"},s.a.createElement(O.a,{utils:x.a},s.a.createElement(j.a,{className:"m-2",margin:"none",label:"Invoice Date",inputVariant:"outlined",type:"text",size:"small",selected:Te,value:Te,onChange:function(e){Ce(M()(e).format("DD MMM YYYY"))}}))))),s.a.createElement(m.a,null),s.a.createElement(p.a,{className:"mb-4"},s.a.createElement(b.a,null,s.a.createElement(v.a,{className:"bg-default"},s.a.createElement(f.a,{className:"pl-sm-24"},"S.No."),s.a.createElement(f.a,{className:"px-0"},"Item Name"),s.a.createElement(f.a,{className:"px-0"},"Rfq description"),s.a.createElement(f.a,{className:"px-0"},"UOM"),s.a.createElement(f.a,{className:"px-0",style:{width:"80px"}},"Quantity"),s.a.createElement(f.a,{className:"px-0",style:{width:"80px"}},"Unit Price"),s.a.createElement(f.a,{className:"px-0"},"Total"))),s.a.createElement(g.a,null,Le.map((function(e,t){return qe?(Ye+=parseFloat(e.total_amount),Ge=(15*(Ye-parseFloat(se*Ye/100))/100).toFixed(2),Ae=(Ye-parseFloat(se*Ye/100)+parseFloat(Ge)).toFixed(2)):(Ye+=parseFloat(e.total_amount),Ge=(15*Ye/100).toFixed(2),Ae=(Ye+15*Ye/100).toFixed(2)),s.a.createElement(v.a,{key:t},s.a.createElement(f.a,{className:"pl-sm-24 capitalize",align:"left"},t+1),s.a.createElement(f.a,{className:"pl-0 capitalize",align:"left"},s.a.createElement(h.TextValidator,{label:"Item Name",variant:"outlined",size:"small",type:"text",name:"name",fullWidth:!0,value:e?e.product.name:null,validators:["required"],errorMessages:["this field is required"]})),s.a.createElement(f.a,{className:"pl-0 capitalize",align:"left"},s.a.createElement(h.TextValidator,{label:"description",type:"text",name:"description",fullWidth:!0,variant:"outlined",size:"small",value:e?e.description:null,validators:["required"],errorMessages:["this field is required"]})),s.a.createElement(f.a,{className:"pl-0 capitalize",align:"left"},s.a.createElement(h.TextValidator,{label:"UOM",type:"text",variant:"outlined",size:"small",name:"uom",fullWidth:!0,value:e?e.product.unit_of_measure:null})),s.a.createElement(f.a,{className:"pl-0 capitalize",align:"left",style:{width:"60px"}},s.a.createElement(h.TextValidator,{label:"Quantity",onChange:function(e){return function(e,t){e.persist();var a=Object(l.a)(D.item);a.map((function(a,l){return t===l&&(a.total_amount=(parseInt(a.purchase_price)*e.target.value).toFixed(2),a[e.target.name]=e.target.value),a})),k(Object(i.a)(Object(i.a)({},D),{},{item:a}))}(e,t)},type:"number",variant:"outlined",size:"small",fullWidth:!0,name:"quantity",min:"1",max:e.quantity,value:e.quantity,validators:["required"],errorMessages:["this field is required"]})),s.a.createElement(f.a,{className:"pl-0 capitalize",align:"left",style:{width:"80px"}},s.a.createElement(h.TextValidator,{label:"Unit_Price",type:"text",name:"purchase_price",fullWidth:!0,variant:"outlined",size:"small",value:e?e.purchase_price:null,validators:["required"],errorMessages:["this field is required"]})),s.a.createElement(f.a,{className:"pl-0 capitalize",align:"left"},s.a.createElement(h.TextValidator,{label:"QTotal",type:"text",variant:"outlined",size:"small",name:"total_amount",fullWidth:!0,value:e.total_amount})))})))),s.a.createElement("div",{className:"flex justify-end px-4 mb-4"},s.a.createElement("div",{className:"flex "},s.a.createElement("div",{className:"pr-12"})),s.a.createElement("div",{className:"flex "},s.a.createElement("div",{className:"pr-12"},s.a.createElement("p",{className:"mb-8"},"Sub Total:"),s.a.createElement("p",{className:"mb-8"},"Discount:"),s.a.createElement("p",{className:"mb-8"},"Vat(15%):"),s.a.createElement("strong",null,s.a.createElement("p",{className:"mb-8"},"Grand Total:"))),s.a.createElement("div",null,s.a.createElement("p",{className:"mb-4"},Ye?Ye.toFixed(2):"0.00"),s.a.createElement(h.TextValidator,{className:"mb-4",label:"Discount",type:"text",variant:"outlined",size:"small",value:Se}),s.a.createElement(h.TextValidator,{className:"mb-4",label:"Vat",type:"text",variant:"outlined",size:"small",name:"vat",value:Ye?Ge:0,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(h.TextValidator,{label:"Grand Total",type:"text",className:"mb-4",variant:"outlined",size:"small",name:"net_amount",value:Ye?Ae:0,validators:["required"],errorMessages:["this field is required"]})))))))}}}]);