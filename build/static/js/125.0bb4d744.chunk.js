(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[125],{1140:function(e,a,t){"use strict";t.r(a);var n=t(356);t.d(a,"default",(function(){return n.a}))},1230:function(e,a,t){"use strict";var n=t(557);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=r.default.memo(r.default.forwardRef((function(a,t){return r.default.createElement(o.default,(0,l.default)({ref:t},a),e)})));0;return t.muiName=o.default.muiName,t};var l=n(t(1258)),r=n(t(1)),o=n(t(1140))},1258:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}e.exports=t},1316:function(e,a,t){"use strict";var n=t(3),l=t(5),r=t(1),o=(t(0),t(4)),c=t(77),i=Object(c.a)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=t(10),d=t(31),m=t(27),u=t(14),p=t(556);function g(e){return"Backspace"===e.key||"Delete"===e.key}var b=r.forwardRef((function(e,a){var t=e.avatar,c=e.classes,s=e.className,d=e.clickable,b=e.color,h=void 0===b?"default":b,f=e.component,y=e.deleteIcon,E=e.disabled,v=void 0!==E&&E,x=e.icon,C=e.label,O=e.onClick,S=e.onDelete,j=e.onKeyDown,k=e.onKeyUp,N=e.size,I=void 0===N?"medium":N,w=e.variant,L=void 0===w?"default":w,R=Object(l.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),$=r.useRef(null),P=Object(m.a)($,a),T=function(e){e.stopPropagation(),S&&S(e)},z=!(!1===d||!O)||d,D="small"===I,A=f||(z?p.a:"div"),H=A===p.a?{component:"div"}:{},q=null;if(S){var M=Object(o.default)("default"!==h&&("default"===L?c["deleteIconColor".concat(Object(u.a)(h))]:c["deleteIconOutlinedColor".concat(Object(u.a)(h))]),D&&c.deleteIconSmall);q=y&&r.isValidElement(y)?r.cloneElement(y,{className:Object(o.default)(y.props.className,c.deleteIcon,M),onClick:T}):r.createElement(i,{className:Object(o.default)(c.deleteIcon,M),onClick:T})}var B=null;t&&r.isValidElement(t)&&(B=r.cloneElement(t,{className:Object(o.default)(c.avatar,t.props.className,D&&c.avatarSmall,"default"!==h&&c["avatarColor".concat(Object(u.a)(h))])}));var K=null;return x&&r.isValidElement(x)&&(K=r.cloneElement(x,{className:Object(o.default)(c.icon,x.props.className,D&&c.iconSmall,"default"!==h&&c["iconColor".concat(Object(u.a)(h))])})),r.createElement(A,Object(n.a)({role:z||S?"button":void 0,className:Object(o.default)(c.root,s,"default"!==h&&[c["color".concat(Object(u.a)(h))],z&&c["clickableColor".concat(Object(u.a)(h))],S&&c["deletableColor".concat(Object(u.a)(h))]],"default"!==L&&[c.outlined,{primary:c.outlinedPrimary,secondary:c.outlinedSecondary}[h]],v&&c.disabled,D&&c.sizeSmall,z&&c.clickable,S&&c.deletable),"aria-disabled":!!v||void 0,tabIndex:z||S?0:void 0,onClick:O,onKeyDown:function(e){e.currentTarget===e.target&&g(e)&&e.preventDefault(),j&&j(e)},onKeyUp:function(e){e.currentTarget===e.target&&(S&&g(e)?S(e):"Escape"===e.key&&$.current&&$.current.blur()),k&&k(e)},ref:P},H,R),B||K,r.createElement("span",{className:Object(o.default)(c.label,D&&c.labelSmall)},C),q)}));a.a=Object(s.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(d.d)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.c)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.c)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.d)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.d)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.d)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.d)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.d)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.d)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.d)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.d)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(b)},1472:function(e,a,t){"use strict";var n=t(3),l=t(5),r=t(1),o=(t(0),t(4)),c=t(10),i=r.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.disableSpacing,s=void 0!==i&&i,d=Object(l.a)(e,["classes","className","disableSpacing"]);return r.createElement("div",Object(n.a)({className:Object(o.default)(t.root,c,!s&&t.spacing),ref:a},d))}));a.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiExpansionPanelActions"})(i)},1616:function(e,a,t){"use strict";var n=t(557);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(1)),r=(0,n(t(1230)).default)(l.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.default=r},2689:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(89),o=t(1163),c=t(1469),i=t(1470),s=t(1471),d=t(567),m=t(1616),u=t.n(m),p=Object(o.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function g(){var e=p();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,null,l.a.createElement(i.a,{expandIcon:l.a.createElement(u.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},l.a.createElement(d.a,{className:e.heading},"Expansion Panel 1")),l.a.createElement(s.a,null,l.a.createElement(d.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(c.a,null,l.a.createElement(i.a,{expandIcon:l.a.createElement(u.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},l.a.createElement(d.a,{className:e.heading},"Expansion Panel 2")),l.a.createElement(s.a,null,l.a.createElement(d.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(c.a,{disabled:!0},l.a.createElement(i.a,{expandIcon:l.a.createElement(u.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},l.a.createElement(d.a,{className:e.heading},"Disabled Expansion Panel"))))}var b=t(22),h=Object(o.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}));function f(){var e=h(),a=l.a.useState(!1),t=Object(b.a)(a,2),n=t[0],r=t[1],o=function(e){return function(a,t){r(!!t&&e)}};return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,{expanded:"panel1"===n,onChange:o("panel1")},l.a.createElement(i.a,{expandIcon:l.a.createElement(u.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement(d.a,{className:e.heading},"General settings"),l.a.createElement(d.a,{className:e.secondaryHeading},"I am an expansion panel")),l.a.createElement(s.a,null,l.a.createElement(d.a,null,"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."))),l.a.createElement(c.a,{expanded:"panel2"===n,onChange:o("panel2")},l.a.createElement(i.a,{expandIcon:l.a.createElement(u.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},l.a.createElement(d.a,{className:e.heading},"Users"),l.a.createElement(d.a,{className:e.secondaryHeading},"You are currently not an owner")),l.a.createElement(s.a,null,l.a.createElement(d.a,null,"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."))),l.a.createElement(c.a,{expanded:"panel3"===n,onChange:o("panel3")},l.a.createElement(i.a,{expandIcon:l.a.createElement(u.a,null),"aria-controls":"panel3bh-content",id:"panel3bh-header"},l.a.createElement(d.a,{className:e.heading},"Advanced settings"),l.a.createElement(d.a,{className:e.secondaryHeading},"Filtering has been entirely disabled for whole web server")),l.a.createElement(s.a,null,l.a.createElement(d.a,null,"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))),l.a.createElement(c.a,{expanded:"panel4"===n,onChange:o("panel4")},l.a.createElement(i.a,{expandIcon:l.a.createElement(u.a,null),"aria-controls":"panel4bh-content",id:"panel4bh-header"},l.a.createElement(d.a,{className:e.heading},"Personal data")),l.a.createElement(s.a,null,l.a.createElement(d.a,null,"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))))}var y=t(4),E=t(1472),v=t(1316),x=t(1166),C=t(1411),O=Object(o.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}));function S(){var e=O();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,{defaultExpanded:!0},l.a.createElement(i.a,{expandIcon:l.a.createElement(u.a,null),"aria-controls":"panel1c-content",id:"panel1c-header"},l.a.createElement("div",{className:e.column},l.a.createElement(d.a,{className:e.heading},"Location")),l.a.createElement("div",{className:e.column},l.a.createElement(d.a,{className:e.secondaryHeading},"Select trip destination"))),l.a.createElement(s.a,{className:e.details},l.a.createElement("div",{className:e.column}),l.a.createElement("div",{className:e.column},l.a.createElement(v.a,{label:"Barbados",onDelete:function(){}})),l.a.createElement("div",{className:Object(y.default)(e.column,e.helper)},l.a.createElement(d.a,{variant:"caption"},"Select your destination of choice",l.a.createElement("br",null),l.a.createElement("a",{href:"#sub-labels-and-columns",className:e.link},"Learn more")))),l.a.createElement(C.a,null),l.a.createElement(E.a,null,l.a.createElement(x.a,{size:"small"},"Cancel"),l.a.createElement(x.a,{size:"small",color:"primary"},"Save"))))}var j=t(10),k=Object(j.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(c.a),N=Object(j.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(i.a),I=Object(j.a)((function(e){return{root:{padding:e.spacing(2)}}}))(s.a);function w(){var e=l.a.useState("panel1"),a=Object(b.a)(e,2),t=a[0],n=a[1],r=function(e){return function(a,t){n(!!t&&e)}};return l.a.createElement("div",null,l.a.createElement(k,{square:!0,expanded:"panel1"===t,onChange:r("panel1")},l.a.createElement(N,{"aria-controls":"panel1d-content",id:"panel1d-header"},l.a.createElement(d.a,null,"Collapsible Group Item #1")),l.a.createElement(I,null,l.a.createElement(d.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(k,{square:!0,expanded:"panel2"===t,onChange:r("panel2")},l.a.createElement(N,{"aria-controls":"panel2d-content",id:"panel2d-header"},l.a.createElement(d.a,null,"Collapsible Group Item #2")),l.a.createElement(I,null,l.a.createElement(d.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(k,{square:!0,expanded:"panel3"===t,onChange:r("panel3")},l.a.createElement(N,{"aria-controls":"panel3d-content",id:"panel3d-header"},l.a.createElement(d.a,null,"Collapsible Group Item #3")),l.a.createElement(I,null,l.a.createElement(d.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(r.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Expansion Panel"}]})),l.a.createElement(r.A,{title:"simple expansion panel"},l.a.createElement(g,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"Controlled Accordion"},l.a.createElement(f,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"Secondary heading and Columns"},l.a.createElement(S,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"Customized expansion panels"},l.a.createElement(w,null)))}}}]);