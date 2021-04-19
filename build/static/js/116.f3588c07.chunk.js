(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[116],{1140:function(e,t,n){"use strict";n.r(t);var a=n(356);n.d(t,"default",(function(){return a.a}))},1230:function(e,t,n){"use strict";var a=n(557);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=r.default.memo(r.default.forwardRef((function(t,n){return r.default.createElement(i.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=i.default.muiName,n};var o=a(n(1249)),r=a(n(1)),i=a(n(1140))},1249:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},1376:function(e,t,n){"use strict";var a=n(5),o=n(33),r=n(3),i=n(1),l=(n(0),n(4)),c=n(10),s=n(1524),u=i.forwardRef((function(e,t){var n,o=e.classes,c=e.className,u=e.component,d=void 0===u?"li":u,f=e.disableGutters,v=void 0!==f&&f,b=e.ListItemClasses,p=e.role,m=void 0===p?"menuitem":p,g=e.selected,h=e.tabIndex,O=Object(a.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==h?h:-1),i.createElement(s.a,Object(r.a)({button:!0,role:m,tabIndex:n,component:d,selected:g,disableGutters:v,classes:Object(r.a)({dense:o.dense},b),className:Object(l.default)(o.root,c,g&&o.selected,!v&&o.gutters),ref:t},O))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(r.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(u)},1524:function(e,t,n){"use strict";var a=n(3),o=n(5),r=n(1),i=(n(0),n(4)),l=n(10),c=n(556),s=n(194),u=n(27),d=n(352),f=n(24),v="undefined"===typeof window?r.useEffect:r.useLayoutEffect,b=r.forwardRef((function(e,t){var n=e.alignItems,l=void 0===n?"center":n,b=e.autoFocus,p=void 0!==b&&b,m=e.button,g=void 0!==m&&m,h=e.children,O=e.classes,j=e.className,E=e.component,y=e.ContainerComponent,x=void 0===y?"li":y,C=e.ContainerProps,I=(C=void 0===C?{}:C).className,N=Object(o.a)(C,["className"]),w=e.dense,M=void 0!==w&&w,k=e.disabled,S=void 0!==k&&k,P=e.disableGutters,R=void 0!==P&&P,A=e.divider,F=void 0!==A&&A,L=e.focusVisibleClassName,D=e.selected,T=void 0!==D&&D,V=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),z=r.useContext(d.a),G={dense:M||z.dense||!1,alignItems:l},H=r.useRef(null);v((function(){p&&H.current&&H.current.focus()}),[p]);var B=r.Children.toArray(h),$=B.length&&Object(s.a)(B[B.length-1],["ListItemSecondaryAction"]),_=r.useCallback((function(e){H.current=f.findDOMNode(e)}),[]),J=Object(u.a)(_,t),K=Object(a.a)({className:Object(i.default)(O.root,j,G.dense&&O.dense,!R&&O.gutters,F&&O.divider,S&&O.disabled,g&&O.button,"center"!==l&&O.alignItemsFlexStart,$&&O.secondaryAction,T&&O.selected),disabled:S},V),X=E||"li";return g&&(K.component=E||"div",K.focusVisibleClassName=Object(i.default)(O.focusVisible,L),X=c.a),$?(X=K.component||E?X:"div","li"===x&&("li"===X?X="div":"li"===K.component&&(K.component="div")),r.createElement(d.a.Provider,{value:G},r.createElement(x,Object(a.a)({className:Object(i.default)(O.container,I),ref:J},N),r.createElement(X,K,B),B.pop()))):r.createElement(d.a.Provider,{value:G},r.createElement(X,Object(a.a)({ref:J},K),B))}));t.a=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},1622:function(e,t,n){"use strict";var a=n(261),o=n(22),r=n(16),i=n(1),l=n.n(i),c=n(1165),s=n(539),u=n(1376),d=n(1623),f=n.n(d),v=n(4),b=Object(c.a)((function(e){return{root:function(t){return{backgroundColor:t.open?e.palette.action.hover:"rgba(0,0,0,0)"}}}})),p=l.a.forwardRef((function(e,t){var n=e.parentMenuOpen,c=(e.component,e.label),d=e.rightIcon,p=void 0===d?l.a.createElement(f.a,null):d,m=e.children,g=e.className,h=e.tabIndex,O=(e.MenuProps,e.ContainerProps),j=void 0===O?{}:O,E=Object(r.a)(e,["parentMenuOpen","component","label","rightIcon","children","className","tabIndex","MenuProps","ContainerProps"]),y=j.ref,x=Object(r.a)(j,["ref"]),C=Object(i.useRef)(null);Object(i.useImperativeHandle)(t,(function(){return C.current}));var I=Object(i.useRef)(null);Object(i.useImperativeHandle)(y,(function(){return I.current}));var N,w=Object(i.useRef)(null),M=Object(i.useState)(!1),k=Object(o.a)(M,2),S=k[0],P=k[1],R=function(){var e,t,n,o,r,i=null===(t=null===(e=I.current)||void 0===e?void 0:e.ownerDocument)||void 0===t?void 0:t.activeElement,l=Object(a.a)(null!==(o=null===(n=w.current)||void 0===n?void 0:n.children)&&void 0!==o?o:[]);try{for(l.s();!(r=l.n()).done;){if(r.value===i)return!0}}catch(c){l.e(c)}finally{l.f()}return!1},A=S&&n,F=b({open:A});return e.disabled||(N=void 0!==h?h:-1),l.a.createElement("div",Object.assign({},x,{ref:I,onFocus:function(e){var t;e.target===I.current&&P(!0),(null===(t=x)||void 0===t?void 0:t.onFocus)&&x.onFocus(e)},tabIndex:N,onMouseEnter:function(e){var t;P(!0),(null===(t=x)||void 0===t?void 0:t.onMouseEnter)&&x.onMouseEnter(e)},onMouseLeave:function(e){var t;P(!1),(null===(t=x)||void 0===t?void 0:t.onMouseLeave)&&x.onMouseLeave(e)},onKeyDown:function(e){var t,n,a,o,r;if("Escape"!==e.key){R()&&e.stopPropagation();var i=null===(n=null===(t=I.current)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.activeElement;if("ArrowLeft"===e.key&&R()&&(null===(a=I.current)||void 0===a||a.focus()),"ArrowRight"===e.key&&e.target===I.current&&e.target===i)null===(r=null===(o=w.current)||void 0===o?void 0:o.children[0])||void 0===r||r.focus()}}}),l.a.createElement(u.a,Object.assign({},E,{className:Object(v.default)(F.root,g),ref:C}),c,p),l.a.createElement(s.a,{style:{pointerEvents:"none"},anchorEl:C.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:A,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){P(!1)}},l.a.createElement("div",{ref:w,style:{pointerEvents:"auto"}},m)))}));t.a=p},1623:function(e,t,n){"use strict";var a=n(557);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1)),r=(0,a(n(1230)).default)(o.default.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.default=r},2619:function(e,t,n){"use strict";n.r(t),n.d(t,"NestedMenu",(function(){return d}));var a=n(22),o=n(1),r=n.n(o),i=n(1376),l=n(567),c=n(539),s=n(133),u=n(1622),d=function(){var e=Object(o.useState)(null),t=Object(a.a)(e,2),n=t[0],d=t[1],f=Object(o.useState)([]),v=Object(a.a)(f,2),b=(v[0],v[1]),p=Object(o.useState)([]),m=Object(a.a)(p,2),g=(m[0],m[1],function e(t){var n=t.data;return r.a.createElement("li",null,r.a.createElement(i.a,{onClick:function(e){return h()}},"+ Add New"),n.map((function(t,a){return r.a.createElement(u.a,{label:n[a].title,parentMenuOpen:h,onClick:function(e){return h(n[a].title)}},t.children&&r.a.createElement(e,{data:t.children}))})))}),h=function(e){alert(e)};return r.a.createElement("div",{onClick:function(e){s.b.get("account-categories").then((function(e){var t=e.data;b(t)})),n||(e.preventDefault(),d({top:e.pageY,left:e.pageX}))}},r.a.createElement(l.a,null,"Right click to open menu"),r.a.createElement(c.a,{open:!!n,onClose:function(){return d(null)},anchorReference:"anchorPosition",anchorPosition:n},r.a.createElement(g,{data:[{id:"1",title:"Top level 1",slug:"top-level-1",children:[{id:"sub1",title:"Sub level 1",slug:"sub-level-1",children:[{id:"sub sub 1",title:"Sub Sub level 1",slug:"sub-Sub-level-1"}]}]},{id:"2",title:"Top level 2",slug:"top-level-2",children:[{id:"sub 2",title:"Sub level 2",slug:"sub-level-2"}]},{id:"3",title:"Top level 3",slug:"top-level-3"}]})),r.a.createElement("div",{className:"px-4 flex justify-center"},r.a.createElement("div",{className:"flex "}),r.a.createElement("div",null)))};t.default=d}}]);