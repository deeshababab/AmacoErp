(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[103],{1277:function(e,t,a){"use strict";var n=a(1),i=n.createContext();t.a=i},1376:function(e,t,a){"use strict";var n=a(5),i=a(33),l=a(3),o=a(1),c=(a(0),a(4)),r=a(10),s=a(1524),d=o.forwardRef((function(e,t){var a,i=e.classes,r=e.className,d=e.component,u=void 0===d?"li":d,m=e.disableGutters,p=void 0!==m&&m,b=e.ListItemClasses,f=e.role,g=void 0===f?"menuitem":f,v=e.selected,h=e.tabIndex,y=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==h?h:-1),o.createElement(s.a,Object(l.a)({button:!0,role:g,tabIndex:a,component:u,selected:v,disableGutters:p,classes:Object(l.a)({dense:i.dense},b),className:Object(c.default)(i.root,r,v&&i.selected,!p&&i.gutters),ref:t},y))}));t.a=Object(r.a)((function(e){return{root:Object(l.a)({},e.typography.body1,Object(i.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(l.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},1377:function(e,t,a){"use strict";var n=a(5),i=a(3),l=a(1),o=(a(0),a(4)),c=a(10),r=a(14),s=a(31),d=a(1408),u=a(1277),m=l.forwardRef((function(e,t){var a,c,s=e.align,m=void 0===s?"inherit":s,p=e.classes,b=e.className,f=e.component,g=e.padding,v=e.scope,h=e.size,y=e.sortDirection,j=e.variant,x=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=l.useContext(d.a),N=l.useContext(u.a),E=N&&"head"===N.variant;f?(c=f,a=E?"columnheader":"cell"):c=E?"th":"td";var w=v;!w&&E&&(w="col");var C=g||(O&&O.padding?O.padding:"default"),k=h||(O&&O.size?O.size:"medium"),z=j||N&&N.variant,S=null;return y&&(S="asc"===y?"ascending":"descending"),l.createElement(c,Object(i.a)({ref:t,className:Object(o.default)(p.root,p[z],b,"inherit"!==m&&p["align".concat(Object(r.a)(m))],"default"!==C&&p["padding".concat(Object(r.a)(C))],"medium"!==k&&p["size".concat(Object(r.a)(k))],"head"===z&&O&&O.stickyHeader&&p.stickyHeader),"aria-sort":S,role:a,scope:w},x))}));t.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1378:function(e,t,a){"use strict";var n=a(5),i=a(3),l=a(1),o=(a(0),a(4)),c=a(10),r=a(1408),s=l.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,m=void 0===u?"default":u,p=e.size,b=void 0===p?"medium":p,f=e.stickyHeader,g=void 0!==f&&f,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=l.useMemo((function(){return{padding:m,size:b,stickyHeader:g}}),[m,b,g]);return l.createElement(r.a.Provider,{value:h},l.createElement(d,Object(i.a)({role:"table"===d?null:"table",ref:t,className:Object(o.default)(a.root,c,g&&a.stickyHeader)},v)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1379:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),o=(a(0),a(4)),c=a(10),r=a(1277),s=a(31),d=l.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,m=void 0!==u&&u,p=e.selected,b=void 0!==p&&p,f=Object(i.a)(e,["classes","className","component","hover","selected"]),g=l.useContext(r.a);return l.createElement(d,Object(n.a)({ref:t,className:Object(o.default)(a.root,c,g&&{head:a.head,footer:a.footer}[g.variant],m&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},f))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1380:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),o=(a(0),a(4)),c=a(10),r=a(1277),s={variant:"body"},d=l.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(i.a)(e,["classes","className","component"]);return l.createElement(r.a.Provider,{value:s},l.createElement(u,Object(n.a)({className:Object(o.default)(a.root,c),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1381:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),o=(a(0),a(4)),c=a(10),r=a(1277),s={variant:"head"},d=l.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(i.a)(e,["classes","className","component"]);return l.createElement(r.a.Provider,{value:s},l.createElement(u,Object(n.a)({className:Object(o.default)(a.root,c),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1408:function(e,t,a){"use strict";var n=a(1),i=n.createContext();t.a=i},1411:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),o=(a(0),a(4)),c=a(10),r=a(31),s=l.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,r=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,b=e.light,f=void 0!==b&&b,g=e.orientation,v=void 0===g?"horizontal":g,h=e.role,y=void 0===h?"hr"!==u?"separator":void 0:h,j=e.variant,x=void 0===j?"fullWidth":j,O=Object(i.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(u,Object(n.a)({className:Object(o.default)(r.root,s,"fullWidth"!==x&&r[x],c&&r.absolute,p&&r.flexItem,f&&r.light,"vertical"===v&&r.vertical),role:y,ref:t},O))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(r.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},1524:function(e,t,a){"use strict";var n=a(3),i=a(5),l=a(1),o=(a(0),a(4)),c=a(10),r=a(556),s=a(194),d=a(27),u=a(352),m=a(24),p="undefined"===typeof window?l.useEffect:l.useLayoutEffect,b=l.forwardRef((function(e,t){var a=e.alignItems,c=void 0===a?"center":a,b=e.autoFocus,f=void 0!==b&&b,g=e.button,v=void 0!==g&&g,h=e.children,y=e.classes,j=e.className,x=e.component,O=e.ContainerComponent,N=void 0===O?"li":O,E=e.ContainerProps,w=(E=void 0===E?{}:E).className,C=Object(i.a)(E,["className"]),k=e.dense,z=void 0!==k&&k,S=e.disabled,I=void 0!==S&&S,R=e.disableGutters,T=void 0!==R&&R,A=e.divider,H=void 0!==A&&A,M=e.focusVisibleClassName,D=e.selected,L=void 0!==D&&D,F=Object(i.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),W=l.useContext(u.a),B={dense:z||W.dense||!1,alignItems:c},V=l.useRef(null);p((function(){f&&V.current&&V.current.focus()}),[f]);var $=l.Children.toArray(h),P=$.length&&Object(s.a)($[$.length-1],["ListItemSecondaryAction"]),G=l.useCallback((function(e){V.current=m.findDOMNode(e)}),[]),_=Object(d.a)(G,t),J=Object(n.a)({className:Object(o.default)(y.root,j,B.dense&&y.dense,!T&&y.gutters,H&&y.divider,I&&y.disabled,v&&y.button,"center"!==c&&y.alignItemsFlexStart,P&&y.secondaryAction,L&&y.selected),disabled:I},F),q=x||"li";return v&&(J.component=x||"div",J.focusVisibleClassName=Object(o.default)(y.focusVisible,M),q=r.a),P?(q=J.component||x?q:"div","li"===N&&("li"===q?q="div":"li"===J.component&&(J.component="div")),l.createElement(u.a.Provider,{value:B},l.createElement(N,Object(n.a)({className:Object(o.default)(y.container,w),ref:_},C),l.createElement(q,J,$),$.pop()))):l.createElement(u.a.Provider,{value:B},l.createElement(q,Object(n.a)({ref:_},J),$))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},1839:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(7),l=a(22),o=a(16),c=a(1),r=a.n(c),s=a(1219),d=a(1411),u=a(1378),m=a(1381),p=a(1379),b=a(1377),f=a(1380),g=a(1376),v=a(1195),h=a(1166),y=a(55),j=(a(1433),a(133)),x=a(44),O=a(1165),N=a(4),E=(a(20),a(565)),w=a.n(E),C=(a(89),a(1407),a(166),Object(O.a)((function(e){e.palette;var t=Object(o.a)(e,["palette"]);return{invoiceEditor:{"& h5":{fontSize:15}},root:{width:"100px"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}}))),k=[{name:"File",value:"file"},{name:"Date",value:"date"},{name:"Text",value:"text"}],z={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",date:new Date,currency:"",loading:!1};t.default=function(e){e.uid;var t=e.open,a=e.handleClose,o=(e.accounttype,e.catid),O=e.catname,E=(e.setcat,Object(c.useState)(z)),S=Object(l.a)(E,2),I=S[0],R=S[1],T=Object(c.useState)(!0),A=Object(l.a)(T,2),H=A[0],M=A[1],D=Object(c.useState)([]),L=Object(l.a)(D,2),F=L[0],W=L[1],B=(Object(x.g)(),Object(x.i)().id),V=C(),$=Object(c.useCallback)((function(){var e=Math.random().toString(),t=e.substr(2,e.length-1);R((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:t})}))}),[]),P=r.a.useState(!0),G=Object(l.a)(P,2),_=G[0],J=(G[1],r.a.useState("sm")),q=Object(l.a)(J,2),Y=q[0];q[1];function K(e){o&&(M(!1),j.b.get("columns/".concat(o)).then((function(e){W(e.data[0].column)})))}var Q=function(e,t){e.persist();var a=Object(n.a)(I.item);a.map((function(a,n){return t===n&&(a[e.target.name]=e.target.value),a})),R(Object(i.a)(Object(i.a)({},I),{},{item:a}))};Object(c.useEffect)((function(){j.b.get("columns/".concat(o)).then((function(e){var t=e.data;W(t[0].column)}))}),[B,H,$]);I.orderNo,I.net_amount,I.buyer,I.seller;var U=I.item,X=void 0===U?[]:U;I.quote,I.status,I.vat,I.date,I.currency,I.loading,I.margin,I.remark,I.quantity,I.type,I.name;return r.a.createElement(s.a,{onClose:a,open:t,className:"px-6 pt-2 pb-4",style:{zIndex:1e3},fullWidth:_,maxWidth:Y},r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:Object(N.default)("invoice-viewer py-4",V.invoiceEditor)},r.a.createElement(y.ValidatorForm,{onSubmit:function(){R(Object(i.a)(Object(i.a)({},I),{},{loading:!0}));delete Object(i.a)({},I).loading;var e=Object(n.a)(I.item);e.account_category_id=o;var t=Object.assign({},e);j.b.post("columns",t).then((function(e){e.data;w.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}),a()}))},onError:function(e){return null}},r.a.createElement("div",{className:"viewer_actions px-4 flex justify-between"}),r.a.createElement("h4",{className:"mb-5"},o&&"Field For"," ",O),r.a.createElement(d.a,null),r.a.createElement(u.a,{className:"mb-4"},r.a.createElement(m.a,null,r.a.createElement(p.a,{className:"bg-default"},r.a.createElement(b.a,{className:"pl-sm-24",style:{width:70},align:"left"},"S.No."),r.a.createElement(b.a,{className:"px-0",style:{width:"200px"}},"Type"),r.a.createElement(b.a,{className:"px-0",style:{width:"200px"}},"Name"))),r.a.createElement(f.a,null,X.map((function(e,t){return r.a.createElement(p.a,{key:t},r.a.createElement(b.a,{className:"pl-sm-24 capitalize",align:"left",style:{width:50}},t+1),r.a.createElement(b.a,{className:"pl-0 capitalize",align:"left",style:{width:"200px"}},r.a.createElement(y.TextValidator,{label:"Type",type:"text",name:"type",fullWidth:!0,variant:"outlined",size:"small",value:e.type,onChange:function(e){return Q(e,t)},select:!0},k.map((function(e){return r.a.createElement(g.a,{value:e.value,key:e.id},e.name)})))),r.a.createElement(b.a,{className:"pl-0 capitalize",align:"left",style:{width:"80px"}},r.a.createElement(y.TextValidator,{label:"Name",onChange:function(e){return Q(e,t)},type:"text",variant:"outlined",size:"small",name:"name",fullWidth:!0,value:e.name})),r.a.createElement(b.a,{className:"pl-0 capitalize",align:"left",style:{width:"50px"}},r.a.createElement(v.a,{color:"error",fontSize:"small",onClick:function(){return function(e){var t=Object(n.a)(I.item);t.splice(e,1),R(Object(i.a)(Object(i.a)({},I),{},{item:t}))}(t)}},"delete")))})))),r.a.createElement("div",{className:"flex justify-end px-4 mb-4"},r.a.createElement(h.a,{className:"mt-4",color:"primary",variant:"contained",size:"small",onClick:function(){var e=Object(n.a)(I.item);e.push({}),R(Object(i.a)(Object(i.a)({},I),{},{item:e}))}},"Add Item")),r.a.createElement("div",{className:"flex justify-between "},r.a.createElement(h.a,{variant:"contained",color:"primary",type:"submit"},"Save"),r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:function(){return a()}},"Cancel"),r.a.createElement(h.a,{variant:"outlined",color:"primary",onClick:function(){return K()}},"view")))),!H&&r.a.createElement(u.a,{className:"mb-4"},r.a.createElement(m.a,null,r.a.createElement(p.a,{className:"bg-default"},r.a.createElement(b.a,{className:"pl-sm-24",style:{width:70},align:"left"},"S.No."),r.a.createElement(b.a,{className:"px-0",style:{width:"200px"}},"Type"),r.a.createElement(b.a,{className:"px-0",style:{width:"200px"}},"Name"))),r.a.createElement(f.a,null,F.map((function(e,t){return r.a.createElement(p.a,{key:t},r.a.createElement(b.a,{className:"pl-sm-24 capitalize",align:"left",style:{width:50}},t+1),r.a.createElement(b.a,{className:"pl-sm-24 capitalize",align:"left",style:{width:50}},e.type),r.a.createElement(b.a,{className:"pl-sm-24 capitalize",align:"left",style:{width:50}},e.name),r.a.createElement(b.a,{className:"pl-0 capitalize",align:"left",style:{width:"50px"}},r.a.createElement(v.a,{color:"error",fontSize:"small",onClick:function(){return function(e){w.a.fire({text:"Are you sure you want to delete this Field?",icon:"warning",showCancelButton:!0,customClass:{zIndex:1e3},confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(t){t.value?j.b.delete("columns/".concat(e)).then((function(e){K(),w.a.fire("Deleted!","Field has been deleted.","success")})):t.dismiss===w.a.DismissReason.cancel&&w.a.fire({customClass:{zIndex:1e3},title:"Cancelled"})}))}(e.id)}},"delete")))})))))))}}}]);