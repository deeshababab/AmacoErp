(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[93],{1264:function(e,t,a){"use strict";var n=a(1),i=n.createContext();t.a=i},1375:function(e,t,a){"use strict";var n=a(5),i=a(33),l=a(3),r=a(1),s=(a(0),a(4)),o=a(10),c=a(1517),d=r.forwardRef((function(e,t){var a,i=e.classes,o=e.className,d=e.component,u=void 0===d?"li":d,m=e.disableGutters,p=void 0!==m&&m,b=e.ListItemClasses,f=e.role,g=void 0===f?"menuitem":f,v=e.selected,h=e.tabIndex,O=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==h?h:-1),r.createElement(c.a,Object(l.a)({button:!0,role:g,tabIndex:a,component:u,selected:v,disableGutters:p,classes:Object(l.a)({dense:i.dense},b),className:Object(s.default)(i.root,o,v&&i.selected,!p&&i.gutters),ref:t},O))}));t.a=Object(o.a)((function(e){return{root:Object(l.a)({},e.typography.body1,Object(i.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(l.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},1376:function(e,t,a){"use strict";var n=a(5),i=a(3),l=a(1),r=(a(0),a(4)),s=a(10),o=a(14),c=a(31),d=a(1387),u=a(1264),m=l.forwardRef((function(e,t){var a,s,c=e.align,m=void 0===c?"inherit":c,p=e.classes,b=e.className,f=e.component,g=e.padding,v=e.scope,h=e.size,O=e.sortDirection,j=e.variant,y=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=l.useContext(d.a),E=l.useContext(u.a),N=E&&"head"===E.variant;f?(s=f,a=N?"columnheader":"cell"):s=N?"th":"td";var w=v;!w&&N&&(w="col");var C=g||(x&&x.padding?x.padding:"default"),S=h||(x&&x.size?x.size:"medium"),_=j||E&&E.variant,k=null;return O&&(k="asc"===O?"ascending":"descending"),l.createElement(s,Object(i.a)({ref:t,className:Object(r.default)(p.root,p[_],b,"inherit"!==m&&p["align".concat(Object(o.a)(m))],"default"!==C&&p["padding".concat(Object(o.a)(C))],"medium"!==S&&p["size".concat(Object(o.a)(S))],"head"===_&&x&&x.stickyHeader&&p.stickyHeader),"aria-sort":k,role:a,scope:w},y))}));t.a=Object(s.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(c.i)(Object(c.d)(e.palette.divider,1),.88):Object(c.a)(Object(c.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1378:function(e,t,a){"use strict";var n=a(5),i=a(3),l=a(1),r=(a(0),a(4)),s=a(10),o=a(1387),c=l.forwardRef((function(e,t){var a=e.classes,s=e.className,c=e.component,d=void 0===c?"table":c,u=e.padding,m=void 0===u?"default":u,p=e.size,b=void 0===p?"medium":p,f=e.stickyHeader,g=void 0!==f&&f,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=l.useMemo((function(){return{padding:m,size:b,stickyHeader:g}}),[m,b,g]);return l.createElement(o.a.Provider,{value:h},l.createElement(d,Object(i.a)({role:"table"===d?null:"table",ref:t,className:Object(r.default)(a.root,s,g&&a.stickyHeader)},v)))}));t.a=Object(s.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(c)},1379:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),r=(a(0),a(4)),s=a(10),o=a(1264),c=a(31),d=l.forwardRef((function(e,t){var a=e.classes,s=e.className,c=e.component,d=void 0===c?"tr":c,u=e.hover,m=void 0!==u&&u,p=e.selected,b=void 0!==p&&p,f=Object(i.a)(e,["classes","className","component","hover","selected"]),g=l.useContext(o.a);return l.createElement(d,Object(n.a)({ref:t,className:Object(r.default)(a.root,s,g&&{head:a.head,footer:a.footer}[g.variant],m&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},f))}));t.a=Object(s.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(c.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1380:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),r=(a(0),a(4)),s=a(10),o=a(1264),c={variant:"body"},d=l.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(i.a)(e,["classes","className","component"]);return l.createElement(o.a.Provider,{value:c},l.createElement(u,Object(n.a)({className:Object(r.default)(a.root,s),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(s.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1381:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),r=(a(0),a(4)),s=a(10),o=a(1264),c={variant:"head"},d=l.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(i.a)(e,["classes","className","component"]);return l.createElement(o.a.Provider,{value:c},l.createElement(u,Object(n.a)({className:Object(r.default)(a.root,s),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1383:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(33),r=a(1),s=(a(0),a(4)),o=a(10),c=r.forwardRef((function(e,t){var a=e.classes,l=e.className,o=e.component,c=void 0===o?"div":o,d=e.disableGutters,u=void 0!==d&&d,m=e.variant,p=void 0===m?"regular":m,b=Object(i.a)(e,["classes","className","component","disableGutters","variant"]);return r.createElement(c,Object(n.a)({className:Object(s.default)(a.root,a[p],l,!u&&a.gutters),ref:t},b))}));t.a=Object(o.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(l.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(c)},1387:function(e,t,a){"use strict";var n=a(1),i=n.createContext();t.a=i},1409:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),r=(a(0),a(4)),s=a(10),o=a(31),c=l.forwardRef((function(e,t){var a=e.absolute,s=void 0!==a&&a,o=e.classes,c=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,b=e.light,f=void 0!==b&&b,g=e.orientation,v=void 0===g?"horizontal":g,h=e.role,O=void 0===h?"hr"!==u?"separator":void 0:h,j=e.variant,y=void 0===j?"fullWidth":j,x=Object(i.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(u,Object(n.a)({className:Object(r.default)(o.root,c,"fullWidth"!==y&&o[y],s&&o.absolute,p&&o.flexItem,f&&o.light,"vertical"===v&&o.vertical),role:O,ref:t},x))}));t.a=Object(s.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)},1517:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),r=(a(0),a(4)),s=a(10),o=a(556),c=a(194),d=a(27),u=a(352),m=a(24),p="undefined"===typeof window?l.useEffect:l.useLayoutEffect,b=l.forwardRef((function(e,t){var a=e.alignItems,s=void 0===a?"center":a,b=e.autoFocus,f=void 0!==b&&b,g=e.button,v=void 0!==g&&g,h=e.children,O=e.classes,j=e.className,y=e.component,x=e.ContainerComponent,E=void 0===x?"li":x,N=e.ContainerProps,w=(N=void 0===N?{}:N).className,C=Object(i.a)(N,["className"]),S=e.dense,_=void 0!==S&&S,k=e.disabled,z=void 0!==k&&k,T=e.disableGutters,D=void 0!==T&&T,M=e.divider,q=void 0!==M&&M,R=e.focusVisibleClassName,I=e.selected,V=void 0!==I&&I,F=Object(i.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),A=l.useContext(u.a),P={dense:_||A.dense||!1,alignItems:s},Y=l.useRef(null);p((function(){f&&Y.current&&Y.current.focus()}),[f]);var H=l.Children.toArray(h),W=H.length&&Object(c.a)(H[H.length-1],["ListItemSecondaryAction"]),L=l.useCallback((function(e){Y.current=m.findDOMNode(e)}),[]),B=Object(d.a)(L,t),Q=Object(n.a)({className:Object(r.default)(O.root,j,P.dense&&O.dense,!D&&O.gutters,q&&O.divider,z&&O.disabled,v&&O.button,"center"!==s&&O.alignItemsFlexStart,W&&O.secondaryAction,V&&O.selected),disabled:z},F),G=y||"li";return v&&(Q.component=y||"div",Q.focusVisibleClassName=Object(r.default)(O.focusVisible,R),G=o.a),W?(G=Q.component||y?G:"div","li"===E&&("li"===G?G="div":"li"===Q.component&&(Q.component="div")),l.createElement(u.a.Provider,{value:P},l.createElement(E,Object(n.a)({className:Object(r.default)(O.container,w),ref:B},C),l.createElement(G,Q,H),H.pop()))):l.createElement(u.a.Provider,{value:P},l.createElement(G,Object(n.a)({ref:B},Q),H))}));t.a=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},2596:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(7),l=a(22),r=a(16),s=a(1),o=a.n(s),c=a(1222),d=a(1166),u=a(1195),m=a(1409),p=a(1378),b=a(1381),f=a(1379),g=a(1376),v=a(1380),h=a(1375),O=a(55),j=a(1385),y=a(1629),x=a(1434),E=a(114),N=a(44),w=a(1165),C=a(4),S=(a(20),a(565)),_=a.n(S),k=(a(89),a(1410)),z=a.n(k),T=(a(166),Object(w.a)((function(e){e.palette;var t=Object(r.a)(e,["palette"]);return{invoiceEditor:{"& h5":{fontSize:15}},root:{width:"100px"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}}))),D={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",date:new Date,currency:"",loading:!1};t.default=function(e){var t=e.isNewInvoice,a=(e.toggleInvoiceEditor,Object(s.useState)(!0)),r=Object(l.a)(a,2),w=r[0],S=(r[1],Object(s.useState)(D)),k=Object(l.a)(S,2),M=k[0],q=k[1],R=Object(s.useState)([]),I=Object(l.a)(R,2),V=(I[0],I[1],Object(s.useState)([])),F=Object(l.a)(V,2),A=F[0],P=F[1],Y=Object(s.useState)([]),H=Object(l.a)(Y,2),W=H[0],L=H[1],B=Object(s.useState)("abcd"),Q=Object(l.a)(B,2),G=Q[0],$=(Q[1],Object(s.useState)("")),J=Object(l.a)($,2),U=J[0],K=J[1],X=Object(s.useState)([]),Z=Object(l.a)(X,2),ee=(Z[0],Z[1],Object(s.useState)("0")),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],ie=Object(s.useState)([]),le=Object(l.a)(ie,2),re=(le[0],le[1]),se=Object(s.useState)([]),oe=Object(l.a)(se,2),ce=(oe[0],oe[1],Object(s.useState)("3 Days")),de=Object(l.a)(ce,2),ue=de[0],me=de[1],pe=Object(s.useState)("100% Advance"),be=Object(l.a)(pe,2),fe=be[0],ge=be[1],ve=Object(s.useState)("NA"),he=Object(l.a)(ve,2),Oe=he[0],je=he[1],ye=Object(s.useState)("Within 2-3 Days from the Date of PO"),xe=Object(l.a)(ye,2),Ee=xe[0],Ne=xe[1],we=Object(s.useState)("DDP-Delivery Duty Paid To Customer Office"),Ce=Object(l.a)(we,2),Se=Ce[0],_e=Ce[1],ke=Object(s.useState)("0"),ze=Object(l.a)(ke,2),Te=(ze[0],ze[1]),De=Object(s.useState)(""),Me=Object(l.a)(De,2),qe=Me[0],Re=Me[1],Ie=Object(s.useState)(!1),Ve=Object(l.a)(Ie,2),Fe=Ve[0],Ae=Ve[1],Pe=Object(s.useState)(0),Ye=Object(l.a)(Pe,2),He=(Ye[0],Ye[1],Object(s.useState)(0)),We=Object(l.a)(He,2),Le=(We[0],We[1],Object(s.useState)(0)),Be=Object(l.a)(Le,2),Qe=(Be[0],Be[1],Object(s.useState)("1")),Ge=Object(l.a)(Qe,2),$e=(Ge[0],Ge[1],Object(s.useState)(0)),Je=Object(l.a)($e,2),Ue=(Je[0],Je[1],Object(s.useState)("")),Ke=Object(l.a)(Ue,2),Xe=(Ke[0],Ke[1],Object(s.useState)("")),Ze=Object(l.a)(Xe,2),et=Ze[0],tt=Ze[1],at=Object(s.useState)([]),nt=Object(l.a)(at,2),it=(nt[0],nt[1],Object(N.g)()),lt=Object(N.i)().id,rt=T(),st=o.a.useState(!1),ot=Object(l.a)(st,2),ct=(ot[0],ot[1],Object(s.useState)(!1)),dt=Object(l.a)(ct,2),ut=(dt[0],dt[1],Object(s.useState)(z()(new Date).format("DD MMM YYYY"))),mt=Object(l.a)(ut,2),pt=mt[0],bt=mt[1],ft=Object(s.useState)(!1),gt=Object(l.a)(ft,2),vt=(gt[0],gt[1],Object(s.useCallback)((function(){var e=Math.random().toString(),t=e.substr(2,e.length-1);q((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:t})}))}),[]));Object(s.useEffect)((function(){E.b.get("products").then((function(e){var t=e.data;re(t)})),E.b.get("purchase-quotation/"+lt).then((function(e){var t=e.data;tt(t[0].po_number),Re(t[0].contact.id),P(z()(t[0].created_at).format("DD MMM YYYY")),L(z()(t[0].require_date).format("DD MMM YYYY")),K(t[0].party_id),q(Object(i.a)(Object(i.a)({},M),{},{item:t[0].quotation_details}))}))}),[lt,t,w,vt]);var ht=0,Ot=0,jt=(M.orderNo,M.net_amount,M.buyer,M.seller,M.item),yt=void 0===jt?[]:jt,xt=(M.quote,M.status,M.vat),Et=(M.date,M.currency,M.loading);M.margin,M.remark;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(c.a,{elevation:3},o.a.createElement("div",{className:Object(C.default)("invoice-viewer py-4",rt.invoiceEditor)},o.a.createElement(O.ValidatorForm,{onSubmit:function(){q(Object(i.a)(Object(i.a)({},M),{},{loading:!0}));var e=[];delete Object(i.a)({},M).loading;var t=Object(n.a)(M.item);e.quotation_details=t,e.discount_in_p=0,e.total_value=parseFloat(ht).toFixed(2),e.net_amount=Ot,e.vat_in_value=parseFloat(xt).toFixed(2),e.rfq_id=lt,e.po_number=et,e.party_id=U,e.validity=ue,e.warranty=Oe,e.delivery_time=Ee,e.inco_terms=Se,e.payment_terms=fe,e.contact_id=qe,e.transaction_type="purchase",e.ps_date=pt;var a=Object.assign({},e);console.log(a),E.b.put("purchase-quotation/".concat(lt),a).then((function(e){_.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}),window.location.href="../Newinvoiceview"})).catch((function(e){}))},onError:function(e){return null}},o.a.createElement("div",{className:"viewer_actions px-4 flex justify-between"},o.a.createElement("div",{className:"mb-6"},o.a.createElement("h3",{align:"left"},"Edit PurchaseOrder")),o.a.createElement("div",{className:"mb-6"},o.a.createElement(d.a,{className:"mr-4 py-2",variant:"outlined",color:"secondary",onClick:function(){it.push("/poinvoice/".concat(lt))}},o.a.createElement(u.a,null,"cancel")," Cancel"),o.a.createElement(d.a,{type:"submit",className:"py-2",variant:"outlined",color:"primary",disabled:Et},o.a.createElement(u.a,null,"save")," Save & Print Quotation"))),o.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},o.a.createElement("div",null,o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"RFQ ID: ")," ",o.a.createElement("span",null,lt)),o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"Vendor Name: ")," ",o.a.createElement("span",null,G))),o.a.createElement("div",null,o.a.createElement("div",{className:"text-right"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"RFQ Date: "),o.a.createElement("span",null,A)),o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"Bid Closing Date: "),o.a.createElement("span",null,W))),o.a.createElement("div",{className:"flex"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"Purchase Order Date: "),o.a.createElement(j.a,{utils:x.a},o.a.createElement(y.a,{className:"ml-2",margin:"none",label:"Purchase Order Date",inputVariant:"outlined",type:"text",size:"small",selected:pt,value:pt,onChange:function(e){bt(z()(e).format("DD MMM YYYY"))}})))))),o.a.createElement(m.a,null),o.a.createElement(p.a,{className:"mb-4"},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:"bg-default"},o.a.createElement(g.a,{className:"px-2",style:{width:"80px"},align:"left"},"S.No."),o.a.createElement(g.a,{className:"px-0",style:{width:"250px"}},"Rfq description"),o.a.createElement(g.a,{className:"px-0",style:{width:"250px"}},"Our Description"),o.a.createElement(g.a,{className:"px-0",style:{width:"80px"}},"Quantity"),o.a.createElement(g.a,{className:"px-0",style:{width:"150px"}},"Price"),o.a.createElement(g.a,{className:"px-0",style:{width:"150px"}},"Total"),o.a.createElement(g.a,{className:"px-0",style:{width:"200px"}},"Remark"),o.a.createElement(g.a,{className:"px-0",style:{width:"50px"}},"Action"))),o.a.createElement(v.a,null,yt.map((function(e,t){return Fe?(ht+=parseFloat(e.total_amount),parseFloat(ae*ht/100).toFixed(2),xt=(15*(ht-parseFloat(ae*ht/100))/100).toFixed(2),Ot=(ht-parseFloat(ae*ht/100)+parseFloat(xt)).toFixed(2)):(ht+=parseFloat(e.total_amount),xt=(15*ht/100).toFixed(2),Ot=(ht+15*ht/100).toFixed(2)),o.a.createElement(f.a,{key:t},o.a.createElement(g.a,{className:"pl-2 capitalize",align:"left",style:{width:50}},t+1),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left",style:{width:"250px"}},o.a.createElement(O.TextValidator,{label:"description",type:"text",name:"description",fullWidth:!0,variant:"outlined",size:"small",value:e?e.description:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left",style:{width:"250px"}},o.a.createElement(O.TextValidator,{label:"Our description",type:"text",variant:"outlined",size:"small",name:"quotedescription",fullWidth:!0,value:e?e.descriptionss:null})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left",style:{width:"80px"}},o.a.createElement(O.TextValidator,{label:"Quantity",onChange:function(e){return function(e,t){e.persist();var a=Object(n.a)(M.item);console.log(a),a.map((function(a,n){return t===n&&(a.total_amount=(e.target.value*a.purchase_price).toFixed(2),a[e.target.name]=e.target.value),a})),q(Object(i.a)(Object(i.a)({},M),{},{item:a}))}(e,t)},type:"text",variant:"outlined",size:"small",fullWidth:!0,name:"quantity",inputProps:{min:0,style:{textAlign:"center"}},value:e.quantity?e.quantity:"",validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(O.TextValidator,{label:"Unit Price",variant:"outlined",onChange:function(e){return function(e,t){e.persist();var a=Object(n.a)(M.item);a.map((function(a,n){return t===n&&(a.total_amount=(e.target.value*a.quantity).toFixed(2),a[e.target.name]=e.target.value,a.margin="",a.sell_price=""),a})),q(Object(i.a)(Object(i.a)({},M),{},{item:a}))}(e,t)},type:"text",name:"purchase_price",size:"small",fullWidth:!0,value:e.purchase_price?e.purchase_price:"",select:!0},e.product_price_list.map((function(e){return o.a.createElement(h.a,{value:e.price,key:e.price},e.price,"-",e.firm_name)})))),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left",style:{width:"80px"}},o.a.createElement(O.TextValidator,{label:"QTotal",type:"text",variant:"outlined",size:"small",name:"total_amount",inputProps:{min:0,style:{textAlign:"right"}},value:e.total_amount?e.total_amount:""})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left",style:{width:"200px"}},o.a.createElement(O.TextValidator,{label:"Remark",onChange:function(e){return function(e,t){e.persist();var a=Object(n.a)(M.item);a.map((function(a,n){return t===n&&(a[e.target.name]=e.target.value),a})),q(Object(i.a)(Object(i.a)({},M),{},{item:a}))}(e,t)},type:"text",variant:"outlined",size:"small",name:"remark",style:{width:"75%",float:"left"},fullWidth:!0,value:e.remark?e.remark:""})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left",style:{width:"50px"}},o.a.createElement(u.a,{color:"error",fontSize:"small",onClick:function(){return function(e){_.a.fire({title:"Are you sure?",text:"You want to Delete this Quotation Details!",icon:"danger",showCancelButton:!0,confirmButtonText:"Yes, delete it!",icon:"warning",cancelButtonText:"No, keep it"}).then((function(t){if(t.value){var a=Object(n.a)(M.item);a.splice(e,1),q(Object(i.a)(Object(i.a)({},M),{},{item:a}))}else t.dismiss===_.a.DismissReason.cancel&&_.a.fire("Cancelled","Your Quotation Details is safe :)","error")}))}(t)}},"delete")))})))),o.a.createElement("h6",null,o.a.createElement("strong",null,"Terms")),o.a.createElement("div",{className:"px-4 flex justify-between"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12"},o.a.createElement("p",{className:"mb-8"},"Quotation Validity:"),o.a.createElement("p",{className:"mb-8"},"payment Terms:"),o.a.createElement("p",{className:"mb-8"},"Waranty:"),o.a.createElement("p",{className:"mb-8"},"Delivery Time:"),o.a.createElement("p",{className:"mb-8"},"Inco-Term:")),o.a.createElement("div",null,o.a.createElement(O.TextValidator,{label:"Quotation Validity",className:"mb-4",type:"text",variant:"outlined",size:"small",style:{width:500},onChange:function(e){return me(e.target.value)},value:ue,validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(O.TextValidator,{label:"payment Terms",className:"mb-4",onChange:function(e){return ge(e.target.value)},type:"text",style:{width:500},variant:"outlined",size:"small",name:"net_amount",value:fe,validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(O.TextValidator,{label:"Waranty",onChange:function(e){return je(e.target.value)},className:"mb-4",type:"text",variant:"outlined",size:"small",name:"net_amount",style:{width:500},value:Oe,validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(O.TextValidator,{label:"Delivery Time",className:"mb-4",onChange:function(e){return Ne(e.target.value)},type:"text",variant:"outlined",size:"small",style:{width:500},name:"net_amount",value:Ee,validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(O.TextValidator,{label:"Inco-Term",onChange:function(e){return _e(e.target.value)},type:"text",className:"mb-4",variant:"outlined",size:"small",name:"net_amount",style:{width:500},value:Se,validators:["required"],errorMessages:["this field is required"]}))),o.a.createElement("div",{className:"px-4 flex justify-end"},o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:"pr-12"},o.a.createElement("p",{className:"mb-8"},"Sub Total:"),o.a.createElement("p",{className:"mb-8"},"Vat(15%):"),o.a.createElement("strong",null,o.a.createElement("p",{className:"mb-8"},"Grand Total:"))),o.a.createElement("div",null,o.a.createElement("p",{className:"mb-4",align:"right"},ht?ht.toFixed(2):"0.00"),o.a.createElement(O.TextValidator,{className:"mb-4 ",label:"Vat",inputProps:{min:0,style:{textAlign:"right"}},type:"text",variant:"outlined",size:"small",name:"vat",value:ht?xt:0,validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(O.TextValidator,{label:"Grand Total",onChange:function(e,t){e.persist();Object(n.a)(M.item);Ae(!0),Te(e.target.value),ne(e.target.value)},type:"text",className:"mb-4",variant:"outlined",size:"small",inputProps:{min:0,style:{textAlign:"right"}},name:"net_amount",value:ht?Ot:0,validators:["required"],errorMessages:["this field is required"]})))))))))}}}]);