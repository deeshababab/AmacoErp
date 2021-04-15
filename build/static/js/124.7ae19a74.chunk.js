(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[124],{1293:function(e,a,t){"use strict";var r=t(3),n=t(78),l=t(5),o=t(33),i=t(1),c=t(24),s=(t(0),t(4)),m=t(574),p=t(32),u=t(10),d=t(14),g=t(360),h=t(2569),b=t(27),f=t(1259),x=t(100),E=t(348),v=t(193),y=t(51);function N(e){return Math.round(1e5*e)/1e5}var w=!1,O=null;var T=i.forwardRef((function(e,a){var t=e.arrow,o=void 0!==t&&t,p=e.children,u=e.classes,N=e.disableFocusListener,T=void 0!==N&&N,j=e.disableHoverListener,S=void 0!==j&&j,k=e.disableTouchListener,L=void 0!==k&&k,C=e.enterDelay,z=void 0===C?100:C,R=e.enterNextDelay,M=void 0===R?0:R,F=e.enterTouchDelay,D=void 0===F?700:F,P=e.id,_=e.interactive,A=void 0!==_&&_,B=e.leaveDelay,V=void 0===B?0:B,$=e.leaveTouchDelay,W=void 0===$?1500:$,I=e.onClose,U=e.onOpen,G=e.open,H=e.placement,J=void 0===H?"bottom":H,X=e.PopperComponent,Y=void 0===X?h.a:X,Z=e.PopperProps,q=e.title,K=e.TransitionComponent,Q=void 0===K?g.a:K,ee=e.TransitionProps,ae=Object(l.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),te=Object(y.a)(),re=i.useState(),ne=re[0],le=re[1],oe=i.useState(null),ie=oe[0],ce=oe[1],se=i.useRef(!1),me=i.useRef(),pe=i.useRef(),ue=i.useRef(),de=i.useRef(),ge=Object(v.a)({controlled:G,default:!1,name:"Tooltip",state:"open"}),he=Object(n.a)(ge,2),be=he[0],fe=he[1],xe=be,Ee=Object(f.a)(P);i.useEffect((function(){return function(){clearTimeout(me.current),clearTimeout(pe.current),clearTimeout(ue.current),clearTimeout(de.current)}}),[]);var ve=function(e){clearTimeout(O),w=!0,fe(!0),U&&U(e)},ye=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(a){var t=p.props;"mouseover"===a.type&&t.onMouseOver&&e&&t.onMouseOver(a),se.current&&"touchstart"!==a.type||(ne&&ne.removeAttribute("title"),clearTimeout(pe.current),clearTimeout(ue.current),z||w&&M?(a.persist(),pe.current=setTimeout((function(){ve(a)}),w?M:z)):ve(a))}},Ne=Object(E.a)(),we=Ne.isFocusVisible,Oe=Ne.onBlurVisible,Te=Ne.ref,je=i.useState(!1),Se=je[0],ke=je[1],Le=function(){Se&&(ke(!1),Oe())},Ce=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(a){ne||le(a.currentTarget),we(a)&&(ke(!0),ye()(a));var t=p.props;t.onFocus&&e&&t.onFocus(a)}},ze=function(e){clearTimeout(O),O=setTimeout((function(){w=!1}),800+V),fe(!1),I&&I(e),clearTimeout(me.current),me.current=setTimeout((function(){se.current=!1}),te.transitions.duration.shortest)},Re=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(a){var t=p.props;"blur"===a.type&&(t.onBlur&&e&&t.onBlur(a),Le()),"mouseleave"===a.type&&t.onMouseLeave&&a.currentTarget===ne&&t.onMouseLeave(a),clearTimeout(pe.current),clearTimeout(ue.current),a.persist(),ue.current=setTimeout((function(){ze(a)}),V)}},Me=function(e){se.current=!0;var a=p.props;a.onTouchStart&&a.onTouchStart(e)},Fe=Object(b.a)(le,a),De=Object(b.a)(Te,Fe),Pe=i.useCallback((function(e){Object(x.a)(De,c.findDOMNode(e))}),[De]),_e=Object(b.a)(p.ref,Pe);""===q&&(xe=!1);var Ae=!xe&&!S,Be=Object(r.a)({"aria-describedby":xe?Ee:null,title:Ae&&"string"===typeof q?q:null},ae,p.props,{className:Object(s.default)(ae.className,p.props.className),onTouchStart:Me,ref:_e}),Ve={};L||(Be.onTouchStart=function(e){Me(e),clearTimeout(ue.current),clearTimeout(me.current),clearTimeout(de.current),e.persist(),de.current=setTimeout((function(){ye()(e)}),D)},Be.onTouchEnd=function(e){p.props.onTouchEnd&&p.props.onTouchEnd(e),clearTimeout(de.current),clearTimeout(ue.current),e.persist(),ue.current=setTimeout((function(){ze(e)}),W)}),S||(Be.onMouseOver=ye(),Be.onMouseLeave=Re(),A&&(Ve.onMouseOver=ye(!1),Ve.onMouseLeave=Re(!1))),T||(Be.onFocus=Ce(),Be.onBlur=Re(),A&&(Ve.onFocus=Ce(!1),Ve.onBlur=Re(!1)));var $e=i.useMemo((function(){return Object(m.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(ie),element:ie}}}},Z)}),[ie,Z]);return i.createElement(i.Fragment,null,i.cloneElement(p,Be),i.createElement(Y,Object(r.a)({className:Object(s.default)(u.popper,A&&u.popperInteractive,o&&u.popperArrow),placement:J,anchorEl:ne,open:!!ne&&xe,id:Be["aria-describedby"],transition:!0},Ve,$e),(function(e){var a=e.placement,t=e.TransitionProps;return i.createElement(Q,Object(r.a)({timeout:te.transitions.duration.shorter},t,ee),i.createElement("div",{className:Object(s.default)(u.tooltip,u["tooltipPlacement".concat(Object(d.a)(a.split("-")[0]))],se.current&&u.touch,o&&u.tooltipArrow)},q,o?i.createElement("span",{className:u.arrow,ref:ce}):null))})))}));a.a=Object(u.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(p.d)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(N(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(p.d)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(N(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(o.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(o.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(o.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(o.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(T)},1433:function(e,a,t){"use strict";var r=t(5),n=t(3),l=t(1),o=(t(0),t(4)),i=t(10),c=t(556),s=t(14),m=l.forwardRef((function(e,a){var t=e.children,i=e.classes,m=e.className,p=e.color,u=void 0===p?"default":p,d=e.component,g=void 0===d?"button":d,h=e.disabled,b=void 0!==h&&h,f=e.disableFocusRipple,x=void 0!==f&&f,E=e.focusVisibleClassName,v=e.size,y=void 0===v?"large":v,N=e.variant,w=void 0===N?"round":N,O=Object(r.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return l.createElement(c.a,Object(n.a)({className:Object(o.default)(i.root,m,"round"!==w&&i.extended,"large"!==y&&i["size".concat(Object(s.a)(y))],b&&i.disabled,{primary:i.primary,secondary:i.secondary,inherit:i.colorInherit}[u]),component:g,disabled:b,focusRipple:!x,focusVisibleClassName:Object(o.default)(i.focusVisible,E),ref:a},O),l.createElement("span",{className:i.label},t))}));a.a=Object(i.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(m)},1869:function(e,a,t){"use strict";var r=t(1),n=t.n(r),l=t(370),o=t.n(l),i=t(166),c={grid:{top:16,left:36,right:16,bottom:32},legend:{},tooltip:{show:!0,trigger:"axis",axisPointer:{type:"cross",lineStyle:{opacity:0}},crossStyle:{color:"#000"}},series:[{areaStyle:{},smooth:!0,lineStyle:{width:2,color:"#fff"}}],xAxis:{show:!0,type:"category",showGrid:!1,boundaryGap:!1,axisLabel:{color:"#ccc",margin:20},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"value",min:10,max:60,axisLabel:{color:"#ccc",margin:20,fontSize:13,fontFamily:"roboto"},splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, .1)"}},axisLine:{show:!1},axisTick:{show:!1}},color:[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,255,255,0.3)"},{offset:1,color:"rgba(255,255,255,0)"}],global:!1}]};a.a=function(e){var a=e.height,t=e.option;return n.a.createElement(o.a,{style:{height:a},option:Object(i.merge)({},c,t)})}},1900:function(e,a,t){"use strict";var r=t(13),n=t(7),l=t(1),o=t.n(l),i=t(370),c=t.n(i),s=t(256);a.a=function(e){var a=e.height,t=e.color,l=void 0===t?[]:t,i=Object(s.a)(),m={legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Traffic Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"normal"},formatter:"{b} \n{c} ({d}%)"}},labelLine:{normal:{show:!1}},data:[{value:65,name:"Google"},{value:20,name:"Facebook"},{value:15,name:"Others"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return o.a.createElement(c.a,{style:{height:a},option:Object(n.a)(Object(n.a)({},m),{},{color:Object(r.a)(l)})})}},1901:function(e,a,t){"use strict";var r=t(16),n=t(1),l=t.n(n),o=t(1222),i=t(571),c=t(1375),s=t(1379),m=t(1382),p=t(1380),u=t(1376),d=t(1381),g=t(1426),h=t(569),b=t(1195),f=t(1165),x=t(4),E=Object(f.a)((function(e){e.palette,Object(r.a)(e,["palette"]);return{productTable:{"& small":{height:15,width:50,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-child":{paddingLeft:"16px !important"}}}})),v=[{imgUrl:"/assets/images/products/headphone-2.jpg",name:"earphone",price:100,available:15},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"earphone",price:1500,available:30},{imgUrl:"/assets/images/products/iphone-2.jpg",name:"iPhone x",price:1900,available:35},{imgUrl:"/assets/images/products/iphone-1.jpg",name:"iPhone x",price:100,available:0},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Head phone",price:1190,available:5}];a.a=function(){var e=E();return l.a.createElement(o.a,{elevation:3,className:"pt-5 mb-6"},l.a.createElement("div",{className:"flex justify-between items-center px-6 mb-3"},l.a.createElement("span",{className:"card-title"},"top selling products"),l.a.createElement(i.a,{size:"small",defaultValue:"this_month",disableUnderline:!0},l.a.createElement(c.a,{value:"this_month"},"This Month"),l.a.createElement(c.a,{value:"last_month"},"Last Month"))),l.a.createElement("div",{className:"overflow-auto"},l.a.createElement(s.a,{className:Object(x.default)("whitespace-pre min-w-400",e.productTable)},l.a.createElement(m.a,null,l.a.createElement(p.a,null,l.a.createElement(u.a,{className:"px-6",colSpan:4},"Name"),l.a.createElement(u.a,{className:"px-0",colSpan:2},"Revenue"),l.a.createElement(u.a,{className:"px-0",colSpan:2},"Stock Status"),l.a.createElement(u.a,{className:"px-0",colSpan:1},"Action"))),l.a.createElement(d.a,null,v.map((function(e,a){return l.a.createElement(p.a,{key:a,hover:!0},l.a.createElement(u.a,{className:"px-0 capitalize",colSpan:4,align:"left"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement(g.a,{src:e.imgUrl}),l.a.createElement("p",{className:"m-0 ml-8"},e.name))),l.a.createElement(u.a,{className:"px-0 capitalize",align:"left",colSpan:2},"$",e.price>999?(e.price/1e3).toFixed(1)+"k":e.price),l.a.createElement(u.a,{className:"px-0",align:"left",colSpan:2},e.available?e.available<20?l.a.createElement("small",{className:"border-radius-4 bg-secondary text-white px-2 py-2px"},e.available," available"):l.a.createElement("small",{className:"border-radius-4 bg-primary text-white px-2 py-2px"},"in stock"):l.a.createElement("small",{className:"border-radius-4 bg-error text-white px-2 py-2px"},"out of stock")),l.a.createElement(u.a,{className:"px-0",colSpan:1},l.a.createElement(h.a,null,l.a.createElement(b.a,{color:"primary"},"edit"))))}))))))}},2669:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),l=t(1221),o=t(1222),i=t(1900),c=t(1869),s=t(16),m=t(1195),p=t(1293),u=t(569),d=t(1165),g=Object(d.a)((function(e){var a=e.palette;Object(s.a)(e,["palette"]);return{icon:{fontSize:"44px",opacity:.6,color:a.primary.main}}})),h=function(){var e=g();return n.a.createElement(l.a,{container:!0,spacing:3,className:"mb-3"},n.a.createElement(l.a,{item:!0,xs:12,md:6},n.a.createElement(o.a,{className:"flex flex-wrap justify-between items-center p-sm-24 bg-paper",elevation:6},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(m.a,{className:e.icon},"group"),n.a.createElement("div",{className:"ml-3"},n.a.createElement("small",{className:"text-muted"},"New Leads"),n.a.createElement("h6",{className:"m-0 mt-1 text-primary font-medium"},"3050"))),n.a.createElement(p.a,{title:"View Details",placement:"top"},n.a.createElement(u.a,null,n.a.createElement(m.a,null,"arrow_right_alt"))))),n.a.createElement(l.a,{item:!0,xs:12,md:6},n.a.createElement(o.a,{className:"flex flex-wrap justify-between align-center p-sm-24 bg-paper",elevation:6},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(m.a,{className:e.icon},"attach_money"),n.a.createElement("div",{className:"ml-3"},n.a.createElement("small",{className:"text-muted line-height-1"},"This week Sales"),n.a.createElement("h6",{className:"m-0 mt-1 text-primary font-medium"},"$80,500"))),n.a.createElement(p.a,{title:"View Details",placement:"top"},n.a.createElement(u.a,null,n.a.createElement(m.a,null,"arrow_right_alt"))))),n.a.createElement(l.a,{item:!0,xs:12,md:6},n.a.createElement(o.a,{className:"flex flex-wrap justify-between items-center p-sm-24 bg-paper",elevation:6},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(m.a,{className:e.icon},"store"),n.a.createElement("div",{className:"ml-3"},n.a.createElement("small",{className:"text-muted"},"Inventory Status"),n.a.createElement("h6",{className:"m-0 mt-1 text-primary font-medium"},"8.5% Stock Surplus"))),n.a.createElement(p.a,{title:"View Details",placement:"top"},n.a.createElement(u.a,null,n.a.createElement(m.a,null,"arrow_right_alt"))))),n.a.createElement(l.a,{item:!0,xs:12,md:6},n.a.createElement(o.a,{className:"flex flex-wrap justify-between items-center p-sm-24 bg-paper",elevation:6},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(m.a,{className:e.icon},"shopping_cart"),n.a.createElement("div",{className:"ml-3"},n.a.createElement("small",{className:"text-muted"},"Orders to deliver"),n.a.createElement("h6",{className:"m-0 mt-1 text-primary font-medium"},"305 Orders"))),n.a.createElement(p.a,{title:"View Details",placement:"top"},n.a.createElement(u.a,null,n.a.createElement(m.a,null,"arrow_right_alt"))))))},b=t(1901),f=t(1519),x=t(1168),E=t(1225),v=t(1433),y=t(1426),N=t(4),w=Object(d.a)((function(e){e.palette;return{projectName:{marginLeft:24,[Object(s.a)(e,["palette"]).breakpoints.down("sm")]:{marginLeft:4}}}})),O=function(){var e=w();return[1,2,3,4].map((function(a){return n.a.createElement(r.Fragment,{key:a},n.a.createElement(o.a,{className:"py-2 px-4 project-card"},n.a.createElement(l.a,{container:!0,alignItems:"center"},n.a.createElement(l.a,{item:!0,md:5,xs:7},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(x.a,null),n.a.createElement(E.a,{smDown:!0},a%2===1?n.a.createElement(v.a,{className:"ml-4 bg-error box-shadow-none",size:"small"},n.a.createElement(m.a,null,"star_outline")):n.a.createElement(v.a,{className:"ml-4 bg-green box-shadow-none text-white",size:"small"},n.a.createElement(m.a,null,"date_range"))),n.a.createElement("span",{className:Object(N.default)("font-medium",e.projectName)},"Project ",a))),n.a.createElement(l.a,{item:!0,md:3,xs:4},n.a.createElement("div",{className:"text-muted"},Object(f.a)((new Date).getTime(),"MM/dd/yyyy hh:mma"))),n.a.createElement(E.a,{smDown:!0},n.a.createElement(l.a,{item:!0,xs:3},n.a.createElement("div",{className:"flex relative face-group"},n.a.createElement(y.a,{className:"avatar",src:"/assets/images/face-4.jpg"}),n.a.createElement(y.a,{className:"avatar",src:"/assets/images/face-4.jpg"}),n.a.createElement(y.a,{className:"avatar",src:"/assets/images/face-4.jpg"}),n.a.createElement(y.a,{className:"text-14 avatar"},"+3")))),n.a.createElement(l.a,{item:!0,xs:1},n.a.createElement("div",{className:"flex justify-end"},n.a.createElement(u.a,null,n.a.createElement(m.a,null,"more_vert")))))),n.a.createElement("div",{className:"py-2"}))}))},T=function(){return n.a.createElement(l.a,{container:!0,spacing:3,className:"mb-6"},n.a.createElement(l.a,{item:!0,xs:12,md:6},n.a.createElement(o.a,{elevation:3,className:"p-4"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(v.a,{size:"medium",className:"bg-light-green circle-44 box-shadow-none"},n.a.createElement(m.a,{className:"text-green"},"trending_up")),n.a.createElement("h5",{className:"font-medium text-green m-0 ml-3"},"Active Users")),n.a.createElement("div",{className:"pt-4 flex items-center"},n.a.createElement("h2",{className:"m-0 text-muted flex-grow"},"10.8k"),n.a.createElement("div",{className:"flex justify-center items-centerml-3 h-16 w-16 rounded bg-green text-white"},n.a.createElement(m.a,{className:"text-14"},"expand_less")),n.a.createElement("span",{className:"text-13 text-green ml-1"}," (+21%)")))),n.a.createElement(l.a,{item:!0,xs:12,md:6},n.a.createElement(o.a,{elevation:3,className:"p-4"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(v.a,{size:"medium",className:"bg-light-error circle-44 box-shadow-none overflow-hidden"},n.a.createElement(m.a,{className:"text-error"},"star_outline")),n.a.createElement("h5",{className:"font-medium text-error m-0 ml-3"},"Transactions")),n.a.createElement("div",{className:"pt-4 flex items-center"},n.a.createElement("h2",{className:"m-0 text-muted flex-grow"},"$2.8M"),n.a.createElement("div",{className:"flex justify-center items-centerml-3 h-16 w-16 rounded bg-error text-white"},n.a.createElement(m.a,{className:"text-14"},"expand_less")),n.a.createElement("span",{className:"text-13 text-error ml-1"},"(+21%)")))))},j=t(1166),S=function(){return n.a.createElement(o.a,{className:"p-sm-24 mb-6"},n.a.createElement(o.a,{elevation:0,className:"box-shadow-none text-center relative bg-light-primary p-sm-24"},n.a.createElement("img",{src:"/assets/images/illustrations/upgrade.svg",alt:"upgrade"}),n.a.createElement("p",{className:"text-muted m-0 py-6"},"Upgrade to ",n.a.createElement("b",null,"MatX PRO")," for ",n.a.createElement("br",null)," more resources"),n.a.createElement(j.a,{className:"uppercase",size:"large",variant:"contained",color:"primary"},"upgrade now")))},k=t(89),L=function(){return n.a.createElement("div",null,n.a.createElement(k.A,{title:"Campaigns"},n.a.createElement("small",{className:"text-muted"},"Today"),n.a.createElement("div",{className:"pt-2"}),n.a.createElement(k.p,{value:75,color:"primary",text:"Google (102k)"}),n.a.createElement("div",{className:"py-1"}),n.a.createElement(k.p,{value:45,color:"secondary",text:"Twitter (40k)"}),n.a.createElement("div",{className:"py-1"}),n.a.createElement(k.p,{value:75,color:"primary",text:"Tensor (80k)"}),n.a.createElement("div",{className:"py-3"}),n.a.createElement("small",{className:"text-muted"},"Yesterday"),n.a.createElement("div",{className:"pt-2"}),n.a.createElement(k.p,{value:75,color:"primary",text:"Google (102k)"}),n.a.createElement("div",{className:"py-1"}),n.a.createElement(k.p,{value:45,color:"secondary",text:"Twitter (40k)"}),n.a.createElement("div",{className:"py-1"}),n.a.createElement(k.p,{value:75,color:"primary",text:"Tensor (80k)"}),n.a.createElement("div",{className:"py-3"}),n.a.createElement("small",{className:"text-muted"},"Yesterday"),n.a.createElement("div",{className:"pt-2"}),n.a.createElement(k.p,{value:75,color:"primary",text:"Google (102k)"}),n.a.createElement("div",{className:"py-1"}),n.a.createElement(k.p,{value:45,color:"secondary",text:"Twitter (40k)"}),n.a.createElement("div",{className:"py-1"}),n.a.createElement(k.p,{value:75,color:"primary",text:"Tensor (80k)"})))},C=t(256);a.default=function(){var e=Object(C.a)();return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"pb-24 pt-7 px-8 bg-primary"},n.a.createElement("div",{className:"card-title capitalize text-white mb-4 text-white-secondary"},"Last 12 months sales"),n.a.createElement(c.a,{height:"280px",option:{series:[{data:[34,45,31,45,31,43,26,43,31,45,33,40],type:"line"}],xAxis:{data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}}})),n.a.createElement("div",{className:"analytics m-sm-30 mt--18"},n.a.createElement(l.a,{container:!0,spacing:3},n.a.createElement(l.a,{item:!0,lg:8,md:8,sm:12,xs:12},n.a.createElement(h,null),n.a.createElement(b.a,null),n.a.createElement(T,null),n.a.createElement("h4",{className:"card-title text-muted mb-4"},"Ongoing Projects"),n.a.createElement(O,null)),n.a.createElement(l.a,{item:!0,lg:4,md:4,sm:12,xs:12},n.a.createElement(o.a,{className:"px-6 py-4 mb-6"},n.a.createElement("div",{className:"card-title"},"Traffic Sources"),n.a.createElement("div",{className:"card-subtitle"},"Last 30 days"),n.a.createElement(i.a,{height:"300px",color:[e.palette.primary.dark,e.palette.primary.main,e.palette.primary.light]})),n.a.createElement(S,null),n.a.createElement(L,null)))))}}}]);