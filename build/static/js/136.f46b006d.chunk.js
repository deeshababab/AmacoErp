(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[136],{1375:function(e,a,t){"use strict";var i=t(5),o=t(33),n=t(3),r=t(1),s=(t(0),t(4)),l=t(10),c=t(1522),m=r.forwardRef((function(e,a){var t,o=e.classes,l=e.className,m=e.component,u=void 0===m?"li":m,d=e.disableGutters,p=void 0!==d&&d,b=e.ListItemClasses,f=e.role,g=void 0===f?"menuitem":f,v=e.selected,h=e.tabIndex,E=Object(i.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(t=void 0!==h?h:-1),r.createElement(c.a,Object(n.a)({button:!0,role:g,tabIndex:t,component:u,selected:v,disableGutters:p,classes:Object(n.a)({dense:o.dense},b),className:Object(s.default)(o.root,l,v&&o.selected,!p&&o.gutters),ref:a},E))}));a.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(n.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(m)},1411:function(e,a,t){"use strict";var i=t(3),o=t(5),n=t(1),r=(t(0),t(4)),s=t(10),l=t(32),c=n.forwardRef((function(e,a){var t=e.absolute,s=void 0!==t&&t,l=e.classes,c=e.className,m=e.component,u=void 0===m?"hr":m,d=e.flexItem,p=void 0!==d&&d,b=e.light,f=void 0!==b&&b,g=e.orientation,v=void 0===g?"horizontal":g,h=e.role,E=void 0===h?"hr"!==u?"separator":void 0:h,q=e.variant,x=void 0===q?"fullWidth":q,N=Object(o.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(i.a)({className:Object(r.default)(l.root,c,"fullWidth"!==x&&l[x],s&&l.absolute,p&&l.flexItem,f&&l.light,"vertical"===v&&l.vertical),role:E,ref:a},N))}));a.a=Object(s.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)},1522:function(e,a,t){"use strict";var i=t(3),o=t(5),n=t(1),r=(t(0),t(4)),s=t(10),l=t(556),c=t(194),m=t(27),u=t(352),d=t(24),p="undefined"===typeof window?n.useEffect:n.useLayoutEffect,b=n.forwardRef((function(e,a){var t=e.alignItems,s=void 0===t?"center":t,b=e.autoFocus,f=void 0!==b&&b,g=e.button,v=void 0!==g&&g,h=e.children,E=e.classes,q=e.className,x=e.component,N=e.ContainerComponent,j=void 0===N?"li":N,O=e.ContainerProps,L=(O=void 0===O?{}:O).className,C=Object(o.a)(O,["className"]),k=e.dense,w=void 0!==k&&k,y=e.disabled,I=void 0!==y&&y,S=e.disableGutters,P=void 0!==S&&S,M=e.divider,U=void 0!==M&&M,G=e.focusVisibleClassName,H=e.selected,R=void 0!==H&&H,B=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),V=n.useContext(u.a),A={dense:w||V.dense||!1,alignItems:s},D=n.useRef(null);p((function(){f&&D.current&&D.current.focus()}),[f]);var z=n.Children.toArray(h),F=z.length&&Object(c.a)(z[z.length-1],["ListItemSecondaryAction"]),T=n.useCallback((function(e){D.current=d.findDOMNode(e)}),[]),$=Object(m.a)(T,a),J=Object(i.a)({className:Object(r.default)(E.root,q,A.dense&&E.dense,!P&&E.gutters,U&&E.divider,I&&E.disabled,v&&E.button,"center"!==s&&E.alignItemsFlexStart,F&&E.secondaryAction,R&&E.selected),disabled:I},B),W=x||"li";return v&&(J.component=x||"div",J.focusVisibleClassName=Object(r.default)(E.focusVisible,G),W=l.a),F?(W=J.component||x?W:"div","li"===j&&("li"===W?W="div":"li"===J.component&&(J.component="div")),n.createElement(u.a.Provider,{value:A},n.createElement(j,Object(i.a)({className:Object(r.default)(E.container,L),ref:$},C),n.createElement(W,J,z),z.pop()))):n.createElement(u.a.Provider,{value:A},n.createElement(W,Object(i.a)({ref:$},J),z))}));a.a=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},2641:function(e,a,t){"use strict";t.r(a);var i=t(22),o=t(16),n=t(1),r=t.n(n),s=t(1126),l=t(1225),c=t(569),m=t(1195),u=t(1375),d=t(1222),p=t(1411),b=t(89),f=t(1165),g=t(51),v=t(4),h=Object(f.a)((function(e){var a=e.palette,t=Object(o.a)(e,["palette"]);return{headerBG:{height:200,background:a.primary.main,backgroundImage:"url('/assets/images/home-bg-black.png')",backgroundSize:"contain"},sidenavHolder:{marginTop:-200},sidenav:{background:"transparent !important",[t.breakpoints.down("sm")]:{background:"var(--bg-default) !important"}},sidenavHeader:{color:"rgba(255,255,255,0.87) !important",[t.breakpoints.down("sm")]:{color:"inherit !important"}}}}));a.default=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],o=a[1],f=h(),E=Object(g.a)(),q=Object(s.a)(E.breakpoints.down("sm")),x=function(){o(!t)};return Object(n.useEffect)((function(){o(!q)}),[q]),r.a.createElement("div",{className:"relative"},r.a.createElement("div",{className:f.headerBG}),r.a.createElement("div",{className:f.sidenavHolder},r.a.createElement(b.s,null,r.a.createElement(b.r,{width:"320px",bgClass:"bg-transparent",open:t,toggleSidenav:x},r.a.createElement("div",{className:f.sidenav},r.a.createElement(l.a,{mdUp:!0},r.a.createElement("div",{className:"flex justify-end"},r.a.createElement(c.a,{onClick:x},r.a.createElement(m.a,null,"clear")))),r.a.createElement("h6",{className:Object(v.default)("pl-9 p-6",f.sidenavHeader)},"Sidebar header"),r.a.createElement("div",{className:"py-17"}),r.a.createElement("div",{className:"bg-default"},r.a.createElement(u.a,{className:"pl-8"},"List 1"),r.a.createElement(u.a,{className:"pl-8"},"List 1"),r.a.createElement(u.a,{className:"pl-8"},"List 1"),r.a.createElement(u.a,{className:"pl-8"},"List 1"),r.a.createElement(u.a,{className:"pl-8"},"List 1"),r.a.createElement(u.a,{className:"pl-8"},"List 1"),r.a.createElement(u.a,{className:"pl-8"},"List 1")))),r.a.createElement(b.t,null,r.a.createElement("h5",{className:"text-white pl-6 p-6"},"Left sidebar card"),r.a.createElement("div",{className:"py-5"}),r.a.createElement("div",{className:"pb-6px"}),r.a.createElement(d.a,{className:"content-card m-4",elevation:2},r.a.createElement("div",{className:"card-header flex flex-wrap items-center ml-2"},r.a.createElement(l.a,{mdUp:!0},r.a.createElement(c.a,{onClick:x},r.a.createElement(m.a,null,"short_text"))),r.a.createElement(l.a,{mdDown:!0},r.a.createElement("div",{className:"pl-4"})),r.a.createElement("div",{className:"py-4"},"Card toolbar")),r.a.createElement(p.a,null),r.a.createElement("p",{className:"whitespace-pre-wrap p-6 m-0"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium."))))))}}}]);