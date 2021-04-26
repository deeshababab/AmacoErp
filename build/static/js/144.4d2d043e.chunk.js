(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[144],{1293:function(e,t,a){"use strict";var n=a(3),r=a(78),l=a(5),c=a(33),i=a(1),o=a(24),m=(a(0),a(4)),s=a(574),d=a(31),u=a(10),p=a(14),b=a(360),f=a(2578),v=a(27),E=a(1259),g=a(100),h=a(348),x=a(193),O=a(51);function N(e){return Math.round(1e5*e)/1e5}var j=!1,y=null;var w=i.forwardRef((function(e,t){var a=e.arrow,c=void 0!==a&&a,d=e.children,u=e.classes,N=e.disableFocusListener,w=void 0!==N&&N,T=e.disableHoverListener,k=void 0!==T&&T,C=e.disableTouchListener,z=void 0!==C&&C,I=e.enterDelay,S=void 0===I?100:I,P=e.enterNextDelay,L=void 0===P?0:P,A=e.enterTouchDelay,D=void 0===A?700:A,M=e.id,R=e.interactive,B=void 0!==R&&R,F=e.leaveDelay,W=void 0===F?0:F,H=e.leaveTouchDelay,K=void 0===H?1500:H,_=e.onClose,$=e.onOpen,J=e.open,U=e.placement,V=void 0===U?"bottom":U,q=e.PopperComponent,G=void 0===q?f.a:q,Q=e.PopperProps,X=e.title,Y=e.TransitionComponent,Z=void 0===Y?b.a:Y,ee=e.TransitionProps,te=Object(l.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),ae=Object(O.a)(),ne=i.useState(),re=ne[0],le=ne[1],ce=i.useState(null),ie=ce[0],oe=ce[1],me=i.useRef(!1),se=i.useRef(),de=i.useRef(),ue=i.useRef(),pe=i.useRef(),be=Object(x.a)({controlled:J,default:!1,name:"Tooltip",state:"open"}),fe=Object(r.a)(be,2),ve=fe[0],Ee=fe[1],ge=ve,he=Object(E.a)(M);i.useEffect((function(){return function(){clearTimeout(se.current),clearTimeout(de.current),clearTimeout(ue.current),clearTimeout(pe.current)}}),[]);var xe=function(e){clearTimeout(y),j=!0,Ee(!0),$&&$(e)},Oe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var a=d.props;"mouseover"===t.type&&a.onMouseOver&&e&&a.onMouseOver(t),me.current&&"touchstart"!==t.type||(re&&re.removeAttribute("title"),clearTimeout(de.current),clearTimeout(ue.current),S||j&&L?(t.persist(),de.current=setTimeout((function(){xe(t)}),j?L:S)):xe(t))}},Ne=Object(h.a)(),je=Ne.isFocusVisible,ye=Ne.onBlurVisible,we=Ne.ref,Te=i.useState(!1),ke=Te[0],Ce=Te[1],ze=function(){ke&&(Ce(!1),ye())},Ie=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){re||le(t.currentTarget),je(t)&&(Ce(!0),Oe()(t));var a=d.props;a.onFocus&&e&&a.onFocus(t)}},Se=function(e){clearTimeout(y),y=setTimeout((function(){j=!1}),800+W),Ee(!1),_&&_(e),clearTimeout(se.current),se.current=setTimeout((function(){me.current=!1}),ae.transitions.duration.shortest)},Pe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var a=d.props;"blur"===t.type&&(a.onBlur&&e&&a.onBlur(t),ze()),"mouseleave"===t.type&&a.onMouseLeave&&t.currentTarget===re&&a.onMouseLeave(t),clearTimeout(de.current),clearTimeout(ue.current),t.persist(),ue.current=setTimeout((function(){Se(t)}),W)}},Le=function(e){me.current=!0;var t=d.props;t.onTouchStart&&t.onTouchStart(e)},Ae=Object(v.a)(le,t),De=Object(v.a)(we,Ae),Me=i.useCallback((function(e){Object(g.a)(De,o.findDOMNode(e))}),[De]),Re=Object(v.a)(d.ref,Me);""===X&&(ge=!1);var Be=!ge&&!k,Fe=Object(n.a)({"aria-describedby":ge?he:null,title:Be&&"string"===typeof X?X:null},te,d.props,{className:Object(m.default)(te.className,d.props.className),onTouchStart:Le,ref:Re}),We={};z||(Fe.onTouchStart=function(e){Le(e),clearTimeout(ue.current),clearTimeout(se.current),clearTimeout(pe.current),e.persist(),pe.current=setTimeout((function(){Oe()(e)}),D)},Fe.onTouchEnd=function(e){d.props.onTouchEnd&&d.props.onTouchEnd(e),clearTimeout(pe.current),clearTimeout(ue.current),e.persist(),ue.current=setTimeout((function(){Se(e)}),K)}),k||(Fe.onMouseOver=Oe(),Fe.onMouseLeave=Pe(),B&&(We.onMouseOver=Oe(!1),We.onMouseLeave=Pe(!1))),w||(Fe.onFocus=Ie(),Fe.onBlur=Pe(),B&&(We.onFocus=Ie(!1),We.onBlur=Pe(!1)));var He=i.useMemo((function(){return Object(s.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(ie),element:ie}}}},Q)}),[ie,Q]);return i.createElement(i.Fragment,null,i.cloneElement(d,Fe),i.createElement(G,Object(n.a)({className:Object(m.default)(u.popper,B&&u.popperInteractive,c&&u.popperArrow),placement:V,anchorEl:re,open:!!re&&ge,id:Fe["aria-describedby"],transition:!0},We,He),(function(e){var t=e.placement,a=e.TransitionProps;return i.createElement(Z,Object(n.a)({timeout:ae.transitions.duration.shorter},a,ee),i.createElement("div",{className:Object(m.default)(u.tooltip,u["tooltipPlacement".concat(Object(p.a)(t.split("-")[0]))],me.current&&u.touch,c&&u.tooltipArrow)},X,c?i.createElement("span",{className:u.arrow,ref:oe}):null))})))}));t.a=Object(u.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(d.d)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(N(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(d.d)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(N(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(c.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(c.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(c.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(c.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(w)},1425:function(e,t,a){"use strict";var n=a(3),r=a(5),l=a(1),c=(a(0),a(4)),i=a(567),o=a(10),m=a(115),s=l.forwardRef((function(e,t){var a=e.children,o=e.classes,s=e.className,d=e.component,u=void 0===d?"div":d,p=e.disablePointerEvents,b=void 0!==p&&p,f=e.disableTypography,v=void 0!==f&&f,E=e.position,g=e.variant,h=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(m.b)()||{},O=g;return g&&x.variant,x&&!O&&(O=x.variant),l.createElement(m.a.Provider,{value:null},l.createElement(u,Object(n.a)({className:Object(c.default)(o.root,s,b&&o.disablePointerEvents,x.hiddenLabel&&o.hiddenLabel,"filled"===O&&o.filled,{start:o.positionStart,end:o.positionEnd}[E],"dense"===x.margin&&o.marginDense),ref:t},h),"string"!==typeof a||v?a:l.createElement(i.a,{color:"textSecondary"},a)))}));t.a=Object(o.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(s)},2685:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(16),l=a(1),c=a.n(l),i=a(569),o=a(1195),m=a(1293),s=a(1426),d=a(1167),u=a(1168),p=a(22),b=a(1828),f=a(13),v=a(1126),E=a(1219),g=a(361),h=a(1166),x=a(1411),O=a(536),N=a(1221),j=a(1222),y=a(1376),w=a(51),T=a(116),k=a(1782),C=a.n(k),z=a(89),I=a(208),S=a(53),P=function(e){var t=e.open,a=e.card,r=e.handleClose,b=Object(l.useState)({}),k=Object(p.a)(b,2),P=k[0],L=k[1],A=Object(I.c)(),D=Object(w.a)(),M=Object(v.a)(D.breakpoints.down("sm")),R=Object(I.d)((function(e){return e})).user,B=void 0===R?{}:R,F=Object(I.d)((function(e){return e.scrumboard})),W=F.board,H=void 0===W?{}:W,K=F.memberList,_=void 0===K?[]:K,$=F.labelList,J=void 0===$?[]:$,U=function(){r()},V=function(e){var t=e.target,a=t.value;if("avatar"===t.name){var r=P.cardMembers,l=P.boardMembers.find((function(e){return e.id===a}));t.checked?(r.push(l),L(Object(n.a)(Object(n.a)({},P),{},{cardMembers:r}))):(r.splice(r.indexOf(l),1),L(Object(n.a)(Object(n.a)({},P),{},{cardMembers:r})))}else if("label"===t.name){var c=P.labels,i=J.find((function(e){return e.id===parseInt(a)}));t.checked?(c.push(i),L(Object(n.a)(Object(n.a)({},P),{},{labels:c}))):(c.splice(c.indexOf(i),1),L(Object(n.a)(Object(n.a)({},P),{},{labels:c})))}else"Enter"!==e.key||e.shiftKey||"commentText"!==t.name?L(Object(n.a)(Object(n.a)({},P),{},{[e.target.name]:e.target.value})):(L(Object(n.a)(Object(n.a)({},P),{},{[e.target.name]:e.target.value})),q())},q=function(){var e=P.comments,t=void 0===e?[]:e,a=P.commentText;""!==a.trim()&&(t.push({id:Object(T.c)(),uid:B.userId,text:a.trim(),time:new Date}),a=""),L(Object(n.a)(Object(n.a)({},P),{},{comments:t,commentText:a}))};Object(l.useEffect)((function(){var e=a.members,t=void 0===e?[]:e,r=a.labels,l=void 0===r?[]:r,c=t.map((function(e){return _.find((function(t){return t.id===e}))})),i=l.map((function(e){return J.find((function(t){return t.id===e}))})),o=H.members.map((function(e){return _.find((function(t){return t.id===e.id}))}));L((function(e){return Object(n.a)(Object(n.a)(Object(n.a)({},e),a),{},{boardId:H.id,cardMembers:c,boardMembers:o,labels:Object(f.a)(i)})}))}),[a,J,_,H.id,H.members]);var G=P.title,Q=P.cardMembers,X=void 0===Q?[]:Q,Y=P.boardMembers,Z=void 0===Y?[]:Y,ee=P.labels,te=void 0===ee?[]:ee,ae=P.description,ne=P.attachments,re=void 0===ne?[]:ne,le=P.comments,ce=void 0===le?[]:le,ie=P.commentText;return c.a.createElement(E.a,{onClose:U,open:t,fullScreen:M,fullWidth:!0,scroll:"body"},c.a.createElement("div",{className:"scrum-board"},c.a.createElement("div",{className:"px-sm-24 pt-sm-24"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement("div",{className:"flex items-center flex-grow"},c.a.createElement(o.a,{className:"text-muted"},"assignment"),c.a.createElement(g.a,{className:"flex-grow  ml-3 pl-3px pr-2 capitalize font-medium text-16",type:"text",autoFocus:!0,name:"title",onChange:V,disableUnderline:!0,value:G})),c.a.createElement(i.a,{size:"small",onClick:U},c.a.createElement(o.a,null,"clear"))),c.a.createElement("div",{className:"ml-10"},c.a.createElement("p",{className:"m-0 mb-4 text-small text-muted"},"Tech Startup Board Hot Backlog"),c.a.createElement("div",{className:"mb-4 flex flex-wrap justify-between"},c.a.createElement("div",null,c.a.createElement("h6",{className:"m-0 mb-2 uppercase text-muted"},"Card Members"),c.a.createElement("div",{className:"flex relative face-group"},X.map((function(e){return c.a.createElement(s.a,{key:e.id,className:"avatar",src:e.avatar})})),c.a.createElement(z.o,{horizontalPosition:"center",shouldCloseOnItemClick:!1,menuButton:c.a.createElement(m.a,{title:"Add",fontSize:"large"},c.a.createElement(s.a,{className:"avatar ml--3 cursor-pointer"},"+"))},Z.map((function(e){return c.a.createElement(d.a,{className:"ml-0",key:e.id,control:c.a.createElement(u.a,{name:"avatar",checked:X.some((function(t){return t.id===e.id})),onChange:V,value:e.id}),label:c.a.createElement("div",{className:"flex items-center"},c.a.createElement(s.a,{src:e.avatar,className:"size-24"}),c.a.createElement("span",{className:"ml-3"},e.name))})}))))),c.a.createElement("div",null,c.a.createElement("h6",{className:"m-0 mb-2 pb-3px uppercase text-muted"},"labels"),c.a.createElement("div",{className:"button-group"},te.map((function(e){return c.a.createElement(h.a,{key:e.id,size:"small",variant:"contained",className:"capitalize mr-1 text-white text-small bg-".concat(e.color)},e.title)})),c.a.createElement(z.o,{horizontalPosition:"right",shouldCloseOnItemClick:!1,menuButton:c.a.createElement(m.a,{title:"Add",fontSize:"large"},c.a.createElement(h.a,{className:"bg-light-gray",size:"small"},"+"))},J.map((function(e){return c.a.createElement(d.a,{className:"ml-0",key:e.id,control:c.a.createElement(u.a,{checked:te.some((function(t){return t.id===e.id})),onChange:V,value:e.id,name:"label"}),label:c.a.createElement("div",{className:"flex items-center"},c.a.createElement("div",{className:"border-radius-4 size-24 bg-".concat(e.color)}),c.a.createElement("span",{className:"ml-3"},e.title))})})))))))),c.a.createElement(x.a,null),c.a.createElement(C.a,{className:"relative pt-4 mb-4 max-h-380"},c.a.createElement("div",{className:"px-sm-24 pt-4"},c.a.createElement("div",{className:"flex items-center mb-2"},c.a.createElement(o.a,{className:"text-muted"},"description"),c.a.createElement("h6",{className:"m-0 ml-4 uppercase text-muted"},"description")),c.a.createElement("div",{className:"ml-10 mb-4 flex"},c.a.createElement(O.a,{className:"text-muted",onChange:V,name:"description",value:ae,variant:"outlined",fullWidth:!0,multiline:!0})),c.a.createElement("div",{className:"flex justify-between items-center"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement(o.a,{className:"text-muted"},"attach_file"),c.a.createElement("h6",{className:"m-0 ml-4 uppercase text-muted"},"attachments")),c.a.createElement("label",{htmlFor:"upload-file"},c.a.createElement(h.a,{className:"text-primary uppercase font-medium",component:"span"},"+ add an attachment")),c.a.createElement("input",{className:"hidden",id:"upload-file",type:"file",multiple:!0})),c.a.createElement("div",{className:"ml-10 mb-4"},c.a.createElement(N.a,{container:!0,spacing:2},re.map((function(e,t){return c.a.createElement(N.a,{key:t,item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(j.a,{className:"p-4 flex items-center bg-default h-full",elevation:2},c.a.createElement("div",{className:"flex items-center border-radius-8"},c.a.createElement("img",{className:"w-full",src:e.url,alt:"cover"})),c.a.createElement("div",{className:"ml-4"},c.a.createElement("h6",{className:"m-0 text-muted capitalize"},e.name),c.a.createElement("small",{className:"text-muted text-small capitalize"},e.size)),c.a.createElement(z.o,{horizontalPosition:"center",menuButton:c.a.createElement(i.a,{className:"ml-4"},c.a.createElement(o.a,null,"more_vert"))},c.a.createElement(y.a,{className:"flex items-center min-w-164",onClick:function(){return t=e.url,void L(Object(n.a)(Object(n.a)({},P),{},{coverImage:t}));var t}},c.a.createElement(o.a,null," insert_photo "),c.a.createElement("span",{className:"pl-4"}," Make Cover ")),c.a.createElement(y.a,{onClick:function(){return function(e){var t=P.attachments,a=void 0===t?[]:t;a.splice(e,1),L(Object(n.a)(Object(n.a)({},P),{},{attachments:a}))}(t)},className:"flex items-center min-w-164"},c.a.createElement(o.a,null," delete "),c.a.createElement("span",{className:"pl-4"}," Remove ")))))}))))),c.a.createElement(x.a,{className:"my-4"}),c.a.createElement("div",{className:"px-sm-24"},c.a.createElement("div",{className:"flex items-center mb-2"},c.a.createElement(o.a,{className:"text-muted"},"message"),c.a.createElement("h6",{className:"m-0 ml-4 uppercase text-muted"},"comments")),c.a.createElement("div",{className:"comments ml-10"},ce.map((function(e){var t=_.find((function(t){return t.id===e.uid}));return c.a.createElement("div",{className:"mb-4",key:e.id},c.a.createElement("div",{className:"flex items-center mb-2"},c.a.createElement(s.a,{className:"avatar size-36",src:t.avatar}),c.a.createElement("div",{className:"ml-3"},c.a.createElement("h6",{className:"m-0"},t.name),c.a.createElement("small",null,Object(T.d)(new Date(e.time))," ago"))),c.a.createElement("p",{className:"m-0 text-muted"},e.text))})),c.a.createElement("div",{className:"flex items-center mb-4"},c.a.createElement(s.a,{className:"avatar size-36",src:B.photoURL}),c.a.createElement("div",{className:"flex-grow flex"},c.a.createElement(O.a,{className:"ml-3 text-muted",onChange:V,onKeyDown:V,variant:"outlined",name:"commentText",value:ie||"",fullWidth:!0,inputProps:{style:{padding:"10px"}}})),c.a.createElement(h.a,{onClick:q},"Send"))))),c.a.createElement("div",{className:"px-sm-24 mb-3 flex justify-end"},c.a.createElement(h.a,{className:"mr-3",onClick:U},"Cancel"),c.a.createElement(h.a,{onClick:function(){var e=P.id,t=P.title,a=P.coverImage,n=P.cardMembers,r=void 0===n?[]:n,l=P.labels,c=void 0===l?[]:l,i=P.description,o=P.attachments,m=void 0===o?[]:o,s=P.comments,d=void 0===s?[]:s,u=P.listId,p=P.boardId,b={id:e,title:t,coverImage:a,members:r.map((function(e){return e.id})),labels:c.map((function(e){return e.id})),description:i,attachments:m,comments:d};A(Object(S.D)(p,u,b)),U()},variant:"contained",color:"primary"},"Save"))))},L=a(1131),A=a(1425),D=a(1163),M=Object(D.a)((function(e){e.palette,Object(r.a)(e,["palette"]);return{root:{width:"32px",height:"6px",borderRadius:"6px",overflow:"hidden",marginRight:"8px"}}})),R=function(e){var t=e.color,a=void 0===t?"primary":t,n=M();return c.a.createElement("div",{className:"bg-".concat(a," ").concat(n.root)})},B=function(e){var t=e.card,a=t.title,n=t.members,r=void 0===n?[]:n,l=t.labels,i=void 0===l?[]:l,m=t.coverImage,d=t.attachments,u=t.comments,p=Object(I.d)((function(e){return e.scrumboard})),b=p.memberList,f=void 0===b?[]:b,v=p.labelList,E=void 0===v?[]:v,g=r.map((function(e){return f.find((function(t){return t.id===e}))})),x=i.map((function(e){return E.find((function(t){return t.id===e}))}));return c.a.createElement("div",{className:"scrum-board-card"},m&&c.a.createElement("img",{className:"border-radius-4 w-full",src:m,alt:"stair"}),c.a.createElement("div",{className:"px-4 py-3"},0!==x.length&&c.a.createElement("div",{className:"flex mb-3 font-medium"},x.map((function(e){return e&&c.a.createElement(R,{key:e.id,color:e.color})}))),c.a.createElement("h6",{className:"m-0 font-medium"},a),(0!==u.length||0!==d.length||0!==r.length)&&c.a.createElement("div",{className:"flex items-center justify-between mt-3 button-group text-small"},c.a.createElement("div",{className:"flex"},0!==u.length&&c.a.createElement(h.a,{size:"small"},c.a.createElement(o.a,{className:"mr-1 text-small",fontSize:"small"},"chat"),c.a.createElement("span",null,u.length)),0!==d.length&&c.a.createElement(h.a,{size:"small"},c.a.createElement(o.a,{className:"mr-1 text-small",fontSize:"small"},"attach_file"),c.a.createElement("span",null,d.length))),c.a.createElement("div",{className:"flex relative face-group"},g.map((function(e){return e&&c.a.createElement(s.a,{key:e.id,className:"avatar",src:e.avatar})}))))))},F=function(e){var t=e.data,a=e.handleCardClick,r=Object(l.useState)(!1),m=Object(p.a)(r,2),s=m[0],d=m[1],u=Object(l.useState)(!1),f=Object(p.a)(u,2),v=f[0],E=f[1],g=Object(l.useState)(""),x=Object(p.a)(g,2),N=x[0],w=x[1],T=Object(l.useState)(""),k=Object(p.a)(T,2),P=k[0],D=k[1],M=Object(I.c)(),R=Object(I.d)((function(e){return e.scrumboard})).board,F=void 0===R?{}:R,W=function(e){var t=e.target.name,a=e.target.value;"cardTitleText"===t?"Enter"!==e.key||e.shiftKey?w(a):$():"Enter"!==e.key||e.shiftKey?D(a):H()},H=function(){M(Object(S.A)({boardId:F.id,listId:t.column.id,listTitle:P})),K(!1)},K=function(e){d(e)},_=function(e){E(e)},$=function(){""!==N.trim()&&(M(Object(S.s)({boardId:F.id,listId:t.column.id,cardTitle:N})),w(""))},J=function(){M(Object(S.t)({boardId:F.id,listId:t.column.id}))};Object(l.useEffect)((function(){var e,a=null===t||void 0===t||null===(e=t.column)||void 0===e?void 0:e.title;a&&D(a)}),[t]);var U=t.provided,V=t.snapshot,q=t.column;return c.a.createElement(j.a,Object.assign({className:"mx-3 relative pt-2 w-288",elevation:V.isDragging?10:3,ref:U.innerRef},U.draggableProps,U.dragHandleProps,{style:Object(n.a)({},U.draggableProps.style)}),c.a.createElement(b.c,{droppableId:q.id,direction:"vertical",type:"card"},(function(e,t){return c.a.createElement("div",{ref:e.innerRef,className:"relative"},c.a.createElement("div",{className:"flex items-center justify-between pb-2"},s?c.a.createElement(L.a,{onClickAway:function(){return K(!1)}},c.a.createElement(O.a,{className:"pl-4",size:"small",variant:"outlined",value:P,onChange:W,onKeyDown:W,name:"columnTitleText",InputProps:{endAdornment:c.a.createElement(A.a,{position:"end"},c.a.createElement(i.a,{size:"small",onClick:H},c.a.createElement(o.a,{fontSize:"small"},"done")))}})):c.a.createElement("h4",{className:"m-0 flex-grow py-1 pl-4 capitalize",onClick:function(){return K(!0)}},q.title),c.a.createElement(z.o,{horizontalPosition:"right",menuButton:c.a.createElement(i.a,null,c.a.createElement(o.a,null,"more_vert"))},c.a.createElement(y.a,{className:"flex items-center min-w-148"},c.a.createElement(o.a,null," settings "),c.a.createElement("span",{className:"pl-4"}," Settings ")),c.a.createElement(y.a,{onClick:J,className:"flex items-center min-w-148"},c.a.createElement(o.a,null," delete "),c.a.createElement("span",{className:"pl-4"}," Delete ")))),c.a.createElement(C.a,{className:"relative h-380 px-4"},q.cardList.map((function(e,t){return c.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t,type:"card"},(function(t,r){return c.a.createElement(j.a,Object.assign({className:"mb-4 border-radius-4 bg-light-gray",elevation:r.isDragging?10:3,onClick:function(){return a(Object(n.a)(Object(n.a)({},e),{},{listId:q.id}))},ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:Object(n.a)({},t.draggableProps.style)}),c.a.createElement(B,{card:e}))}))}))),e.placeholder)})),v?c.a.createElement(L.a,{onClickAway:function(){return _(!1)}},c.a.createElement(j.a,{className:"position-bottom border-radius-0 cursor-pointer p-4 w-full",elevation:5},c.a.createElement(O.a,{size:"small",className:"mb-3",variant:"outlined",name:"cardTitleText",value:N,fullWidth:!0,onChange:W,onKeyDown:W,InputProps:{endAdornment:c.a.createElement(A.a,{position:"end"},c.a.createElement(i.a,{size:"small",onClick:function(){return _(!1)}},c.a.createElement(o.a,{fontSize:"small"},"clear")))}}),c.a.createElement("div",{className:"flex justify-end"},c.a.createElement(h.a,{onClick:$,variant:"contained",color:"primary"},"Add")))):c.a.createElement("div",{className:"flex"},c.a.createElement(h.a,{className:"font-medium flex-grow border-radius-0",variant:"contained",color:"primary",onClick:function(){return _(!0)}},"+ Add Card")))},W=function(e){var t=e.list,a=void 0===t?[]:t,n=e.handleAddList,r=e.handleAddNewCard,m=Object(l.useState)(null),d=Object(p.a)(m,2),u=d[0],f=d[1],v=Object(l.useState)(!1),E=Object(p.a)(v,2),g=E[0],x=E[1],N=Object(l.useState)(!1),y=Object(p.a)(N,2),w=y[0],T=y[1],k=Object(l.useState)(""),z=Object(p.a)(k,2),D=z[0],M=z[1],R=Object(I.c)(),B=Object(I.d)((function(e){return e.scrumboard})).board,W=void 0===B?{}:B,H=function(e){f(e),x(!0)},K=function(){x(!1)},_=function(e){T(e)},$=function(e){"Enter"!==e.key||e.shiftKey?M(e.target.value):(n(D),M(""))};return c.a.createElement(C.a,{className:"relative flex pb-4 w-full"},c.a.createElement(b.a,{onDragEnd:function(e){var t=e.source,a=e.destination;a&&("horizontal-droppable"===t.droppableId?R(Object(S.C)(W.id,t.index,a.index)):t.droppableId===a.droppableId?R(Object(S.B)(W.id,t.droppableId,t.index,a.index)):R(Object(S.z)(W.id,t.droppableId,a.droppableId,t,a)))}},c.a.createElement(b.c,{droppableId:"horizontal-droppable",direction:"horizontal"},(function(e){return c.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps,{className:"flex"}),a.map((function(e,t){return c.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t,type:"column"},(function(t,a){return c.a.createElement(F,{data:{provided:t,snapshot:a,column:e},handleCardClick:H,handleDialogClose:K,handleAddNewCard:r})}))})),e.placeholder)}))),c.a.createElement("div",null,w?c.a.createElement(L.a,{onClickAway:function(){return _(!1)}},c.a.createElement(j.a,{className:"mx-3 border-radius-0 cursor-pointer p-4 min-w-288",elevation:3},c.a.createElement(O.a,{size:"small",className:"mb-3",variant:"outlined",name:"columnTitle",value:D,fullWidth:!0,onChange:$,onKeyDown:$,InputProps:{endAdornment:c.a.createElement(A.a,{position:"end"},c.a.createElement(i.a,{size:"small",onClick:function(){return _(!1)}},c.a.createElement(o.a,{fontSize:"small"},"clear")))}}),c.a.createElement("div",{className:"flex justify-end"},c.a.createElement(h.a,{onClick:function(){n(D),M("")},variant:"contained",color:"primary"},"Add")))):c.a.createElement(j.a,{className:"mx-3 cursor-pointer flex items-center py-4 px-4 bg-light-gray min-w-288",elevation:3,onClick:function(){return _(!0)}},c.a.createElement(s.a,{className:"size-24 bg-error"},"+"),c.a.createElement("span",{className:"ml-8 font-medium"},"Add List"))),g&&c.a.createElement(P,{card:u,open:g,handleClose:K}))},H=a(44),K=a(50),_=a(4),$=Object(D.a)((function(e){e.palette,Object(r.a)(e,["palette"]);return{avatar:{border:"2px solid white"}}}));t.default=function(){var e=Object(I.d)((function(e){return e.scrumboard})),t=e.board,a=void 0===t?{}:t,r=e.memberList,p=void 0===r?[]:r,b=Object(H.i)().id,f=Object(I.c)(),v=$();Object(l.useEffect)((function(){f(Object(S.y)(b)),f(Object(S.x)()),f(Object(S.w)())}),[b,f]);var E=function(e){var t=e.target.value,n=a.members,r=a.id;n.some((function(e){return e.id===t}))?f(Object(S.u)({boardId:r,memberId:t})):f(Object(S.q)({boardId:r,memberId:t}))},g=a.members,h=void 0===g?[]:g,x=a.title,O=a.list,N=void 0===O?[]:O;return c.a.createElement("div",{className:"scrum-board m-sm-30"},c.a.createElement("div",{className:"flex flex-wrap items-center justify-between mb-4"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement(K.a,{to:"/scrum-board"},c.a.createElement(i.a,null,c.a.createElement(o.a,null,"arrow_back"))),c.a.createElement("h5",{className:"m-0 ml-2 capitalize"},x),c.a.createElement(i.a,{className:"ml-2"},c.a.createElement(o.a,null,"star_outline"))),c.a.createElement("div",{className:"flex relative mr-2 items-center"},h.map((function(e,t){return c.a.createElement(m.a,{key:t,title:e.name,fontSize:"large"},c.a.createElement(s.a,{className:Object(_.default)("h-24 w-24 ml--2",v.avatar),src:e.avatar}))})),c.a.createElement(z.o,{horizontalPosition:"right",shouldCloseOnItemClick:!1,menuButton:c.a.createElement(m.a,{title:"Add",fontSize:"large"},c.a.createElement(s.a,{className:Object(_.default)("h-24 w-24 ml--2 cursor-pointer",v.avatar)},"+"))},p.map((function(e){return c.a.createElement(d.a,{className:"ml-0",key:e.id,control:c.a.createElement(u.a,{checked:h.some((function(t){return t.id===e.id})),onChange:E,value:e.id}),label:c.a.createElement("div",{className:"flex items-center"},c.a.createElement(s.a,{src:e.avatar,className:"size-24"}),c.a.createElement("span",{className:"ml-3"},e.name))})}))))),c.a.createElement("div",{className:"relative"},c.a.createElement(W,{list:N,handleAddList:function(e){""!==e&&f(Object(S.p)({boardId:b,listTitle:e}))},handleAddNewCard:function(e){f(Object(S.s)(Object(n.a)({boardId:b},e)))}})))}}}]);