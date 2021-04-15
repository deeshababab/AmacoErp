(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[115],{1276:function(e,a,t){"use strict";var n=t(1),r=n.createContext();a.a=r},1376:function(e,a,t){"use strict";var n=t(5),r=t(3),l=t(1),c=(t(0),t(4)),o=t(10),i=t(14),s=t(32),d=t(1407),p=t(1276),m=l.forwardRef((function(e,a){var t,o,s=e.align,m=void 0===s?"inherit":s,u=e.classes,g=e.className,b=e.component,f=e.padding,h=e.scope,v=e.size,y=e.sortDirection,x=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=l.useContext(d.a),E=l.useContext(p.a),N=E&&"head"===E.variant;b?(o=b,t=N?"columnheader":"cell"):o=N?"th":"td";var w=h;!w&&N&&(w="col");var k=f||(O&&O.padding?O.padding:"default"),z=v||(O&&O.size?O.size:"medium"),C=x||E&&E.variant,R=null;return y&&(R="asc"===y?"ascending":"descending"),l.createElement(o,Object(r.a)({ref:a,className:Object(c.default)(u.root,u[C],g,"inherit"!==m&&u["align".concat(Object(i.a)(m))],"default"!==k&&u["padding".concat(Object(i.a)(k))],"medium"!==z&&u["size".concat(Object(i.a)(z))],"head"===C&&O&&O.stickyHeader&&u.stickyHeader),"aria-sort":R,role:t,scope:w},j))}));a.a=Object(o.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1379:function(e,a,t){"use strict";var n=t(5),r=t(3),l=t(1),c=(t(0),t(4)),o=t(10),i=t(1407),s=l.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.component,d=void 0===s?"table":s,p=e.padding,m=void 0===p?"default":p,u=e.size,g=void 0===u?"medium":u,b=e.stickyHeader,f=void 0!==b&&b,h=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=l.useMemo((function(){return{padding:m,size:g,stickyHeader:f}}),[m,g,f]);return l.createElement(i.a.Provider,{value:v},l.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:a,className:Object(c.default)(t.root,o,f&&t.stickyHeader)},h)))}));a.a=Object(o.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1380:function(e,a,t){"use strict";var n=t(3),r=t(5),l=t(1),c=(t(0),t(4)),o=t(10),i=t(1276),s=t(32),d=l.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,m=void 0!==p&&p,u=e.selected,g=void 0!==u&&u,b=Object(r.a)(e,["classes","className","component","hover","selected"]),f=l.useContext(i.a);return l.createElement(d,Object(n.a)({ref:a,className:Object(c.default)(t.root,o,f&&{head:t.head,footer:t.footer}[f.variant],m&&t.hover,g&&t.selected),role:"tr"===d?null:"row"},b))}));a.a=Object(o.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1381:function(e,a,t){"use strict";var n=t(3),r=t(5),l=t(1),c=(t(0),t(4)),o=t(10),i=t(1276),s={variant:"body"},d=l.forwardRef((function(e,a){var t=e.classes,o=e.className,d=e.component,p=void 0===d?"tbody":d,m=Object(r.a)(e,["classes","className","component"]);return l.createElement(i.a.Provider,{value:s},l.createElement(p,Object(n.a)({className:Object(c.default)(t.root,o),ref:a,role:"tbody"===p?null:"rowgroup"},m)))}));a.a=Object(o.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1382:function(e,a,t){"use strict";var n=t(3),r=t(5),l=t(1),c=(t(0),t(4)),o=t(10),i=t(1276),s={variant:"head"},d=l.forwardRef((function(e,a){var t=e.classes,o=e.className,d=e.component,p=void 0===d?"thead":d,m=Object(r.a)(e,["classes","className","component"]);return l.createElement(i.a.Provider,{value:s},l.createElement(p,Object(n.a)({className:Object(c.default)(t.root,o),ref:a,role:"thead"===p?null:"rowgroup"},m)))}));a.a=Object(o.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1407:function(e,a,t){"use strict";var n=t(1),r=n.createContext();a.a=r},2578:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(1),l=t.n(r),c=t(1379),o=t(1382),i=t(1380),s=t(1376),d=t(1381),p=t(89);a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(p.b,{routeSegments:[{name:"Utilities",path:"/utilities"},{name:"Shadow"}]})),l.a.createElement(p.A,{title:"Shadow"},l.a.createElement("p",{className:"m-0"},"The classes are named using the format-",l.a.createElement("code",null,"elevation-z(size)")),l.a.createElement("p",null,"Where ",l.a.createElement("em",null,"size")," is one of:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",{className:"whitespace-pre-wrap\\"},"[",Object(n.a)(Array(25).keys()).toString(),"]"))),l.a.createElement(c.a,{className:"whitespace-pre"},l.a.createElement(o.a,null,l.a.createElement(i.a,{className:"bg-default"},l.a.createElement(s.a,{className:"px-0"},"Class Name"),l.a.createElement(s.a,{className:"px-0",align:"center"},"Example"))),l.a.createElement(d.a,null,Object(n.a)(Array(25).keys()).map((function(e,a){return l.a.createElement(i.a,{key:a},l.a.createElement(s.a,{className:"px-0",align:"left"},"elevation-z",e),l.a.createElement(s.a,{className:"px-0",align:"left"},l.a.createElement("div",{className:"text-center px-20 py-4 my-2 elevation-z".concat(e)},"elevation-z".concat(e))))}))))))}}}]);