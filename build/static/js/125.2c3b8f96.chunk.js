(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[125],{1287:function(e,a,t){"use strict";var l=t(1),r=l.createContext();a.a=r},1377:function(e,a,t){"use strict";var l=t(5),r=t(3),n=t(1),i=(t(0),t(4)),c=t(10),o=t(14),s=t(31),d=t(1419),m=t(1287),p=n.forwardRef((function(e,a){var t,c,s=e.align,p=void 0===s?"inherit":s,b=e.classes,u=e.className,g=e.component,E=e.padding,f=e.scope,v=e.size,x=e.sortDirection,h=e.variant,y=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=n.useContext(d.a),O=n.useContext(m.a),j=O&&"head"===O.variant;g?(c=g,t=j?"columnheader":"cell"):c=j?"th":"td";var w=f;!w&&j&&(w="col");var A=E||(N&&N.padding?N.padding:"default"),S=v||(N&&N.size?N.size:"medium"),z=h||O&&O.variant,C=null;return x&&(C="asc"===x?"ascending":"descending"),n.createElement(c,Object(r.a)({ref:a,className:Object(i.default)(b.root,b[z],u,"inherit"!==p&&b["align".concat(Object(o.a)(p))],"default"!==A&&b["padding".concat(Object(o.a)(A))],"medium"!==S&&b["size".concat(Object(o.a)(S))],"head"===z&&N&&N.stickyHeader&&b.stickyHeader),"aria-sort":C,role:t,scope:w},y))}));a.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},1378:function(e,a,t){"use strict";var l=t(5),r=t(3),n=t(1),i=(t(0),t(4)),c=t(10),o=t(1419),s=n.forwardRef((function(e,a){var t=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,p=void 0===m?"default":m,b=e.size,u=void 0===b?"medium":b,g=e.stickyHeader,E=void 0!==g&&g,f=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=n.useMemo((function(){return{padding:p,size:u,stickyHeader:E}}),[p,u,E]);return n.createElement(o.a.Provider,{value:v},n.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:a,className:Object(i.default)(t.root,c,E&&t.stickyHeader)},f)))}));a.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1379:function(e,a,t){"use strict";var l=t(3),r=t(5),n=t(1),i=(t(0),t(4)),c=t(10),o=t(1287),s=t(31),d=n.forwardRef((function(e,a){var t=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,p=void 0!==m&&m,b=e.selected,u=void 0!==b&&b,g=Object(r.a)(e,["classes","className","component","hover","selected"]),E=n.useContext(o.a);return n.createElement(d,Object(l.a)({ref:a,className:Object(i.default)(t.root,c,E&&{head:t.head,footer:t.footer}[E.variant],p&&t.hover,u&&t.selected),role:"tr"===d?null:"row"},g))}));a.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1380:function(e,a,t){"use strict";var l=t(3),r=t(5),n=t(1),i=(t(0),t(4)),c=t(10),o=t(1287),s={variant:"body"},d=n.forwardRef((function(e,a){var t=e.classes,c=e.className,d=e.component,m=void 0===d?"tbody":d,p=Object(r.a)(e,["classes","className","component"]);return n.createElement(o.a.Provider,{value:s},n.createElement(m,Object(l.a)({className:Object(i.default)(t.root,c),ref:a,role:"tbody"===m?null:"rowgroup"},p)))}));a.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1381:function(e,a,t){"use strict";var l=t(3),r=t(5),n=t(1),i=(t(0),t(4)),c=t(10),o=t(1287),s={variant:"head"},d=n.forwardRef((function(e,a){var t=e.classes,c=e.className,d=e.component,m=void 0===d?"thead":d,p=Object(r.a)(e,["classes","className","component"]);return n.createElement(o.a.Provider,{value:s},n.createElement(m,Object(l.a)({className:Object(i.default)(t.root,c),ref:a,role:"thead"===m?null:"rowgroup"},p)))}));a.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1419:function(e,a,t){"use strict";var l=t(1),r=l.createContext();a.a=r},1566:function(e,a,t){e.exports=t.p+"static/media/amaco-logo.6510d041.png"},1567:function(e,a,t){e.exports=t.p+"static/media/vision2030.a6e8f10c.png"},1568:function(e){e.exports=JSON.parse('{"app.header":"\u0642\u0645 \u0628\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u062d\u0641\u0638\u0647\u0627 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644","app.content":"\u062a\u0639\u0644\u0645 React","app.channel.plug":"\u0634\u0631\u0643\u0629 \u0623\u0645\u0627\u0643\u0648 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0644\u0644\u0645\u0642\u0627\u0648\u0644\u0627\u062a","pono":"\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629","podate":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0635\u062f\u0627\u0631","vatinvoice":"\u0641\u0627\u062a\u0648\u0631\u0629 \u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629","companyname":"\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0639\u0646\u0648\u0627\u0646\u0647\u0627","po_no":"\u0638\u0631\u064a\u0628\u0647 \u0627\u0644\u0634\u0631\u0627\u0621","vatno":"\u0631\u0642\u0645 \u0627\u0645\u0631\u0627\u0644\u0634\u0631\u0627\u0621","preparedby":"\u0623\u0639\u062f\u062a \u0628\u0648\u0627\u0633\u0637\u0629","approvedby":"\u0627\u0639\u062a\u0645\u062f\u062a \u0628\u0648\u0627\u0633\u0629","receivedby":"\u0627\u0633\u062a\u0644\u0645\u062a \u0645\u0646 \u0642\u0628\u0644"}')},2605:function(e,a,t){"use strict";t.r(a);var l=t(7),r=t(22),n=t(16),i=t(1),c=t.n(i),o=(t(1887),t(1568)),s=t(2688),d=t(2604),m=t(1408),p=t.n(m),b=(t(2026),t(1661)),u=t(569),g=t(1195),E=t(1166),f=t(1222),v=t(1378),x=t(1381),h=t(1379),y=t(1377),N=t(1380),O=t(44),j=t(50),w=t(133),A=t(1163),S=t(4),z=(t(20),t(166),t(576),t(1566)),C=t.n(z),T=(t(1567),t(565)),_=t.n(T),k=t(70),R=navigator.language,B=Object(A.a)((function(e){e.palette,Object(n.a)(e,["palette"]);return{"@global":{"@page":{size:"A4",margin:0},"@media print":{"body, *, html":{visibility:"hidden",size:"auto",margin:"0mm"},"#header":{position:"fixed",top:0,left:0,width:"100%"},"#footer":{backgroundColor:"#F8F8F8",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"auto",width:"100%"},"#table":{display:"-webkit-box",display:"-ms-flexbox",width:"650px",margin:"15px",position:"absolute"},"#print-area":{position:"fixed",top:45,left:0,right:0,height:"100%",marginTop:"45px","& *":{visibility:"visible"}}}},invoiceViewer:{"& h5":{fontSize:15}}}}));a.default=function(e){e.toggleInvoiceEditor;var a=Object(i.useState)({}),t=Object(r.a)(a,2),n=t[0],m=(t[1],Object(i.useState)([])),A=Object(r.a)(m,2),z=(A[0],A[1],Object(i.useState)([])),T=Object(r.a)(z,2),I=(T[0],T[1],Object(i.useState)([])),M=Object(r.a)(I,2),D=(M[0],M[1],Object(i.useState)([])),L=Object(r.a)(D,2),P=(L[0],L[1],Object(i.useState)("")),Y=Object(r.a)(P,2),q=Y[0],H=Y[1],U=Object(i.useState)(""),V=Object(r.a)(U,2),F=V[0],J=V[1],W=Object(i.useState)(""),X=Object(r.a)(W,2),$=X[0],K=X[1],G=Object(i.useState)(""),Q=Object(r.a)(G,2),Z=Q[0],ee=Q[1],ae=Object(i.useState)(""),te=Object(r.a)(ae,2),le=te[0],re=te[1],ne=Object(i.useState)(""),ie=Object(r.a)(ne,2),ce=ie[0],oe=ie[1],se=Object(i.useState)([]),de=Object(r.a)(se,2),me=de[0],pe=de[1],be=Object(i.useState)(""),ue=Object(r.a)(be,2),ge=(ue[0],ue[1]),Ee=Object(i.useState)(""),fe=Object(r.a)(Ee,2),ve=fe[0],xe=fe[1],he=Object(i.useState)(""),ye=Object(r.a)(he,2),Ne=ye[0],Oe=ye[1],je=Object(i.useState)(0),we=Object(r.a)(je,2),Ae=we[0],Se=we[1],ze=Object(i.useState)(""),Ce=Object(r.a)(ze,2),Te=Ce[0],_e=(Ce[1],Object(i.useState)("")),ke=Object(r.a)(_e,2),Re=ke[0],Be=ke[1],Ie=Object(i.useState)(""),Me=Object(r.a)(Ie,2),De=Me[0],Le=Me[1],Pe=Object(i.useState)(0),Ye=Object(r.a)(Pe,2),qe=(Ye[0],Ye[1]),He=Object(i.useState)(),Ue=Object(r.a)(He,2),Ve=Ue[0],Fe=Ue[1],Je=new b.ToWords({localeCode:"en-IN",converterOptions:{currency:!0,ignoreDecimal:!1,ignoreZeroCurrency:!1}}),We=Object(O.i)().id,Xe=B(),$e=Object(k.a)(),Ke=$e.settings,Ge=$e.updateSettings;Object(i.useEffect)((function(){Qe({mode:"close"}),document.title="VAT Invoice - Amaco",w.c.get("purchase-invoice/"+We).then((function(e){var a=e.data;if(a){qe(a[0].discount_in_percentage),pe(a[0].purchase_invoice_detail),H(a[0].quotation.party.firm_name),J(a[0].quotation.party.city),K(a[0].quotation.party.street),re(a[0].quotation.party.zip_code),ee(a[0].quotation.po_number),oe(a[0].quotation.party.vat_no),Be(a[0].bill_no),Le(a[0].issue_date),xe(a[0].vat_in_value),Se(a[0].grand_total),Oe(a[0].total_value);var t=Je.convert(parseFloat(a[0].grand_total)).replace("Rupees","Riyals").replace("Paise","Halala");Fe(t)}})),w.c.get("quotation/"+We).then((function(e){var a=e.data;ge(a[0].quotation_no)}))}),[We]);var Qe=function(e){if("close"==e.mode){var a=Ke.activeLayout+"Settings",t=Ke[a];Ge(Object(l.a)(Object(l.a)({},Ke),{},{[a]:Object(l.a)(Object(l.a)({},t),{},{leftSidebar:Object(l.a)(Object(l.a)({},t.leftSidebar),e)})}))}else{window.location.href="../inv";var r=Ke.activeLayout+"Settings",n=Ke[r];Ge(Object(l.a)(Object(l.a)({},Ke),{},{[r]:Object(l.a)(Object(l.a)({},n),{},{leftSidebar:Object(l.a)(Object(l.a)({},n.leftSidebar),e)})}))}};window.onafterprint=function(){window.close(),window.location.href=""};n.orderNo,n.buyer,n.seller,n.item,n.status;var Ze=n.vat;n.date;return c.a.createElement("div",{className:Object(S.default)("invoice-viewer py-4",Xe.invoiceViewer)},c.a.createElement("div",{className:"viewer_actions px-4 mb-5 flex items-center justify-between"},c.a.createElement(j.a,{onClick:function(){return Qe({mode:"on"})}},c.a.createElement(u.a,null,c.a.createElement(g.a,null,"arrow_back"))),c.a.createElement("div",null,c.a.createElement(E.a,{className:"mr-4 py-2",style:{color:"red"},variant:"outlined",onClick:function(){_.a.fire({title:"Are you sure?",text:"You will not be able to recover this Invoice!",icon:"danger",showCancelButton:!0,confirmButtonText:"Yes, delete it!",icon:"warning",cancelButtonText:"No, keep it"}).then((function(e){e.value?w.c.delete("invoice/".concat(We)).then((function(e){_.a.fire("Deleted!","Invoice has been deleted.","success"),Qe({mode:"on"}),window.location.href="../inv"})):e.dismiss===_.a.DismissReason.cancel&&_.a.fire("Cancelled","Your Invoice is safe :)","error")}))}},"Delete Invoice"),c.a.createElement(E.a,{onClick:function(){return window.print()},className:"py-2",color:"secondary",variant:"outlined"},"Print Invoice"))),c.a.createElement("div",{id:"print-area"},c.a.createElement("header",{id:"header"},c.a.createElement("div",{className:"px-2 flex justify-between"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12"},c.a.createElement("img",{src:C.a,alt:"this is car image",style:{marginLeft:"15px",width:237}})),c.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"})),c.a.createElement("div",{className:"flex",align:"right"},c.a.createElement("div",null,c.a.createElement("h4",{style:{color:"#00008B"}},c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"app.channel.plug",defaultMessage:"Amaco Arabia Contracting Company",values:"Amaco Arabia Contracting Company"}))),c.a.createElement("h5",{className:"font-normal b-4  capitalize"},c.a.createElement("strong",{style:{color:"#00008B"}},"AMACO ARABIA CONTRACTING COMPANY")),c.a.createElement("h6",{className:"font-normal b-4 capitalize",style:{color:"#555"}},"C.R No. 205500334 | VAT No. 810398615200003"))))),c.a.createElement("hr",null),c.a.createElement("div",{className:"px-4 flex justify-between"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12 px-4 mb-4"},c.a.createElement("h4",null,"PURCHASE INVOICE"),Ze)),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12 px-4 mb-4"},c.a.createElement("h4",null,c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"vatinvoice"})))))),c.a.createElement("div",{className:"px-4 flex justify-between"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12 px-6 mb-4"},c.a.createElement("h5",null,"ISSUE DATE"),p()(De).format("DD MMM YYYY")),c.a.createElement("div",{className:"pl-24 px-26 mb-4"},c.a.createElement("h5",null,"INVOICE NUMBER"),Re)),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-25"},c.a.createElement("h5",{align:"right"},c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"pono"}))),Re),c.a.createElement("div",{className:"pr-4"},c.a.createElement("h5",{align:"right"},c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"podate"}))),p()(De).format("DD MMM YYYY")))),c.a.createElement("div",{className:"px-4 flex justify-between"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12 px-4 mb-4"},c.a.createElement("h5",null,"COMPANY NAME & ADDRESS"),q,c.a.createElement("br",null),$,"-",F,",",Z," ",le)),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12 px-4 mb-4"},c.a.createElement("h5",null,c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"companyname"}))),Te))),c.a.createElement("div",{className:"px-4 flex justify-between"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12 px-4 mb-4"},c.a.createElement("h5",null,"P.O. NUMBER"),Z),c.a.createElement("div",{className:"pl-24 px-26 mb-4"},c.a.createElement("h5",null,"VAT NUMBER"),ce)),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-25"},c.a.createElement("h5",{align:"right"},c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"po_no"}))),Z),c.a.createElement("div",{className:"pr-4"},c.a.createElement("h5",{align:"right"},c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"vatno"}))),ce))),c.a.createElement(f.a,{className:"mb-4",elevation:0,title:"Rfq Details",borderRadius:"borderRadius"},c.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},c.a.createElement(v.a,{style:{border:"1px solid rgb(0, 0, 0)"}},c.a.createElement(x.a,null,c.a.createElement(h.a,{style:{border:"1px solid rgb(0, 0, 0)"}},c.a.createElement(y.a,{className:"pl-0",colspan:1,style:{border:"1px solid rgb(0, 0, 0)",width:"50px"},align:"center"},"\u0631\u0642\u0645",c.a.createElement("br",null),"S.No."),c.a.createElement(y.a,{className:"px-0",colspan:3,style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0648\u0635\u0641",c.a.createElement("br",null),"DESCRIPTION"),c.a.createElement(y.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)",width:"70px"},align:"center"},"\u0648\u062d\u062f\u0629",c.a.createElement("br",null),"UOM"),c.a.createElement(y.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0643\u0645\u064a\u0629",c.a.createElement("br",null),"QTY"),c.a.createElement(y.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0633\u0639\u0631 \u0627\u0644\u0648\u062d\u062f\u0629",c.a.createElement("br",null),"UNIT PRICE"),c.a.createElement(y.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)",wordBreak:"break-word"},align:"center"},"\u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u062e\u0627\u0636\u0639 \u0644\u0644\u0636\u0631\u064a\u0628\u0629",c.a.createElement("br",null),"TAXABLE AMOUNT"),c.a.createElement(y.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0636\u0631\u064a\u0628\u064a\u0629",c.a.createElement("br",null),"TAX VALUE (15%)"),c.a.createElement(y.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0645\u062c\u0645\u0648\u0639",c.a.createElement("br",null),"TOTAL"))),c.a.createElement(N.a,null,me.map((function(e,a){return c.a.createElement(h.a,{key:a,style:{border:"1px solid rgb(0, 0, 0)"}},c.a.createElement(y.a,{className:"pl-0",align:"center",colspan:1,style:{border:"1px solid rgb(0, 0, 0)"}},a+1),c.a.createElement(y.a,{className:"pl-0 capitalize",align:"left",colspan:3,style:{border:"1px solid rgb(0, 0, 0)"}},e.product.description),c.a.createElement(y.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"}},e.product.unit_of_measure),c.a.createElement(y.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"}},e.quotation_detail.quantity),c.a.createElement(y.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid rgb(0, 0, 0)"}},e.quotation_detail.purchase_price),c.a.createElement(y.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid rgb(0, 0, 0)"}},e.quotation_detail.total_amount),c.a.createElement(y.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid rgb(0, 0, 0)"}},(15*e.total_amount/100).toFixed(2)),c.a.createElement(y.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid rgb(0, 0, 0)"}},(parseFloat(e.total_amount)+15*e.total_amount/100).toFixed(2)))})),c.a.createElement(h.a,{style:{border:"1px solid rgb(0, 0, 0)"}},c.a.createElement(y.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"},rowspan:2,colspan:8},c.a.createElement("div",{className:"px-4 flex justify-between"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12"},c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("h5",{className:"font-normal capitalize"},c.a.createElement("strong",null,"BANK DETAILS ")," "))),c.a.createElement("tr",{style:{height:5,fontSize:13,textAlign:"left"}},c.a.createElement("td",{style:{height:"auto !important"}},c.a.createElement("strong",null,"Bank Name")),c.a.createElement("td",{style:{height:"auto !important"}},"National Commercial Bank")),c.a.createElement("tr",{style:{height:5,fontSize:13,textAlign:"left"}},c.a.createElement("td",{style:{height:"auto !important"}},c.a.createElement("strong",null,"Account No")),c.a.createElement("td",{style:{height:"auto !important"}},"6000000242200")),c.a.createElement("tr",{style:{height:5,fontSize:13,textAlign:"left"}},c.a.createElement("td",{style:{height:"auto !important"}},c.a.createElement("strong",null,"IBAN No")),c.a.createElement("td",{style:{height:"auto !important"}},"SA3610000006000000242200")))))),c.a.createElement(y.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)",wordBreak:"break-word"}},"\u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u062e\u0627\u0636\u0639 \u0644\u0644\u0636\u0631\u064a\u0628\u0629",c.a.createElement("br",null),"TAXABLE AMOUNT"),c.a.createElement(y.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid rgb(0, 0, 0)"}},Ne)),c.a.createElement(h.a,{style:{border:"1px solid rgb(0, 0, 0)"}},c.a.createElement(y.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"}},"\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0636\u0631\u064a\u0628\u064a\u0629",c.a.createElement("br",null),"TAX VALUE (15%)"),c.a.createElement(y.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid rgb(0, 0, 0)"}},ve)),c.a.createElement(h.a,{style:{border:"1px solid rgb(0, 0, 0)"}},c.a.createElement(y.a,{className:"pl-0 capitalize",colspan:8,style:{border:"1px solid rgb(0, 0, 0)"}},c.a.createElement("div",{className:"px-4 flex justify-between"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"pr-12"},c.a.createElement("strong",null,"Total In Words"),"  ",Ve)))),c.a.createElement(y.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"}},"TOTAL INC.VAT"),c.a.createElement(y.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid rgb(0, 0, 0)"}},Ae))))),c.a.createElement("br",null),c.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},c.a.createElement("div",{className:"ml-24"},c.a.createElement("h5",{className:"font-normal t-4 capitalize"},c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"preparedby"}))),"Prepared By"),c.a.createElement("div",null,c.a.createElement("h5",{className:"font-normal t-4 capitalize"},c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"approvedby"}))),"Approved By"),c.a.createElement("div",{className:"mr-24"},c.a.createElement("h5",{className:"font-normal t-4 capitalize"},c.a.createElement(s.a,{locale:R,messages:o},c.a.createElement(d.a,{id:"receivedby"}))),"Received By"))),c.a.createElement("div",null),c.a.createElement("footer",{id:"footer",style:{visibility:"hidden"}},c.a.createElement("div",{style:{fontSize:"8px",visibility:"hidden"},style:{borderBottom:"25px solid #555",borderLeft:"50px solid transparent",height:0,width:"100%",marginLeft:"10%"}},c.a.createElement("span",{style:{color:"#fff"}},"Tel: +966 1336323871 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia")),c.a.createElement("div",{style:{fontSize:"8px",visibility:"hidden"},style:{borderBottom:"25px solid #00008B",height:0,width:"100%",alignItems:"center"}},c.a.createElement("span",{style:{color:"#fff"}},"Tel: +966 1336323871 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia")))))}}}]);