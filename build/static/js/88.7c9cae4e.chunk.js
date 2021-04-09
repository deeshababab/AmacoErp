(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[88],{1432:function(e,t,a){"use strict";var n=a(5),r=a(3),c=a(1),i=(a(0),a(4)),o=a(10),s=a(556),l=a(14),u=c.forwardRef((function(e,t){var a=e.children,o=e.classes,u=e.className,m=e.color,d=void 0===m?"default":m,h=e.component,p=void 0===h?"button":h,f=e.disabled,b=void 0!==f&&f,g=e.disableFocusRipple,v=void 0!==g&&g,x=e.focusVisibleClassName,E=e.size,j=void 0===E?"large":E,w=e.variant,y=void 0===w?"round":w,O=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return c.createElement(s.a,Object(r.a)({className:Object(i.default)(o.root,u,"round"!==y&&o.extended,"large"!==j&&o["size".concat(Object(l.a)(j))],b&&o.disabled,{primary:o.primary,secondary:o.secondary,inherit:o.colorInherit}[d]),component:p,disabled:b,focusRipple:!v,focusVisibleClassName:Object(i.default)(o.focusVisible,x),ref:t},O),c.createElement("span",{className:o.label},a))}));t.a=Object(o.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)},1799:function(e,t,a){"use strict";var n,r,c,i=a(1942),o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){c=!1}function l(e){if(e){if(e!==n){if(e.length!==o.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,a){return t!==a.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,s()}}else n!==o&&(n=o,s())}function u(){return c||(c=function(){n||l(o);for(var e,t=n.split(""),a=[],r=i.nextValue();t.length>0;)r=i.nextValue(),e=Math.floor(r*t.length),a.push(t.splice(e,1)[0]);return a.join("")}())}e.exports={get:function(){return n||o},characters:function(e){return l(e),n},seed:function(e){i.seed(e),r!==e&&(s(),r=e)},lookup:function(e){return u()[e]},shuffled:u}},1895:function(e,t,a){"use strict";var n=a(16),r=a(1),c=a.n(r),i=a(1428),o=a(1165),s=Object(o.a)((function(e){e.palette,Object(n.a)(e,["palette"]);return{avatar:{height:"40px",width:"40px"},status_circle:{position:"absolute",height:"14px",width:"14px",borderRadius:"7px",bottom:"0px",right:"-3px",border:"2px solid white"}}}));t.a=function(e){var t=e.src,a=e.status,n=s();return c.a.createElement("div",{className:"relative"},c.a.createElement(i.a,{className:n.avatar,src:t}),c.a.createElement("div",{className:"".concat(n.status_circle," ").concat("online"===a?"bg-primary":"bg-error")}))}},1940:function(e,t,a){"use strict";e.exports=a(1941)},1941:function(e,t,a){"use strict";var n=a(1799),r=a(1943),c=a(1947),i=a(1948)||0;function o(){return r(i)}e.exports=o,e.exports.generate=o,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return i=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=c},1942:function(e,t,a){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},1943:function(e,t,a){"use strict";var n,r,c=a(1944);a(1799);e.exports=function(e){var t="",a=Math.floor(.001*(Date.now()-1567752802062));return a===r?n++:(n=0,r=a),t+=c(7),t+=c(e),n>0&&(t+=c(n)),t+=c(a)}},1944:function(e,t,a){"use strict";var n=a(1799),r=a(1945),c=a(1946);e.exports=function(e){for(var t,a=0,i="";!t;)i+=c(r,n.get(),1),t=e<Math.pow(16,a+1),a++;return i}},1945:function(e,t,a){"use strict";var n,r="object"===typeof window&&(window.crypto||window.msCrypto);n=r&&r.getRandomValues?function(e){return r.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(256*Math.random()));return t},e.exports=n},1946:function(e,t){e.exports=function(e,t,a){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,r=-~(1.6*n*a/t.length),c="";;)for(var i=e(r),o=r;o--;)if((c+=t[i[o]&n]||"").length===+a)return c}},1947:function(e,t,a){"use strict";var n=a(1799);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},1948:function(e,t,a){"use strict";e.exports=0},1961:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return l}));var n=a(20),r=a.n(n),c=function(e){return r.a.get("/api/chat/contacts",{data:e})},i=function(e){return r.a.get("/api/chat/contacts/recent",{data:e})},o=function(e){return r.a.get("/api/chat/contacts/all",{data:e})},s=function(e,t){return r.a.get("/api/chat/chat-room",{data:{currentUser:e,contactId:t}})},l=function(e){return r.a.post("/api/chat/add",e)}},2686:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(7),c=a(22),i=a(1),o=a.n(i),s=a(1126),l=a(1222),u=a(89),m=a(1961),d=a(16),h=a(1895),p=a(1778),f=a.n(p),b=a(1409),g=a(1519),v=a(1165),x=a(4),E=Object(v.a)((function(e){e.palette,Object(d.a)(e,["palette"]);return{chatSidenav:{borderRight:"1px solid rgba(0, 0, 0, 0.08)",height:450}}})),j=function(e){var t=e.currentUser,a=e.contactList,n=void 0===a?[]:a,r=e.recentContactList,c=void 0===r?[]:r,i=e.handleContactClick,s=E();return o.a.createElement("div",{className:Object(x.default)("bg-default",s.chatSidenav)},o.a.createElement("div",{className:"chat-sidenav__topbar flex items-center h-56 px-4 bg-primary"},o.a.createElement(h.a,{src:t.avatar,status:t.status}),o.a.createElement("h5",{className:"ml-4 whitespace-pre mb-0 font-medium text-18 text-white"},t.name)),o.a.createElement(f.a,{className:"relative h-full"},c.map((function(e,t){return o.a.createElement("div",{onClick:function(){return i(e.id)},key:t,className:"flex items-center p-4 cursor-pointer  gray-on-hover"},o.a.createElement(h.a,{src:e.avatar,status:e.status}),o.a.createElement("div",{className:"pl-4"},o.a.createElement("p",{className:"m-0"},e.name),o.a.createElement("p",{className:"m-0 text-muted"},Object(g.a)(new Date(e.lastChatTime).getTime(),"MMMM dd, yyyy"))))})),o.a.createElement(b.a,null),n.map((function(e,t){return o.a.createElement("div",{onClick:function(){return i(e.id)},key:t,className:"flex items-center px-4 py-1 cursor-pointer  gray-on-hover"},o.a.createElement(h.a,{src:e.avatar,status:e.status}),o.a.createElement("div",{className:"pl-4"},o.a.createElement("p",null,e.name)))}))))},w=a(1225),y=a(569),O=a(1195),N=a(1375),C=a(535),k=a(1432),S=Object(v.a)((function(e){e.palette,Object(d.a)(e,["palette"]);return{icon:{fontSize:"4rem"}}})),M=function(){var e=S();return o.a.createElement("div",{className:"h-220 w-220 rounded elevation-z6 bg-default flex justify-center items-center"},o.a.createElement(O.a,{className:e.icon,color:"primary"},"chat"))},R=a(117),I=a(1940),V=a.n(I),z=Object(v.a)((function(e){e.palette,Object(d.a)(e,["palette"]);return{chatContainer:{background:"rgba(0, 0, 0, 0.05)",height:450}}})),_=function(e){var t=e.id,a=e.toggleSidenav,n=e.currentChatRoom,r=e.opponentUser,s=e.messageList,l=void 0===s?[]:s,m=e.handleMessageSend,d=Object(i.useState)(""),p=Object(c.a)(d,2),g=p[0],v=p[1],E=z();return o.a.createElement("div",{className:Object(x.default)("flex-column relative",E.chatContainer)},o.a.createElement("div",{className:"chat-container__topbar flex items-center justify-between p-1 bg-primary"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(w.a,{mdUp:!0},o.a.createElement(y.a,{onClick:a},o.a.createElement(O.a,{className:"text-white"},"short_text"))),o.a.createElement(w.a,{smDown:!0},o.a.createElement("div",{className:"pl-3"})),r&&o.a.createElement(i.Fragment,null,o.a.createElement(h.a,{src:r.avatar,status:r.status}),o.a.createElement("h5",{className:"ml-4 whitespace-pre mb-0 font-medium text-18 text-white"},r.name))),o.a.createElement(u.o,{menuButton:o.a.createElement(y.a,null,o.a.createElement(O.a,{className:"text-white"},"more_vert"))},o.a.createElement(N.a,{className:"flex items-center"},o.a.createElement(O.a,{className:"mr-4"},"account_circle")," Contact"),o.a.createElement(N.a,{className:"flex items-center"},o.a.createElement(O.a,{className:"mr-4"},"volume_mute")," Mute"),o.a.createElement(N.a,{className:"flex items-center"},o.a.createElement(O.a,{className:"mr-4"},"delete")," Clear Chat"))),o.a.createElement(f.a,{className:"chat-message-list flex-grow relative",id:"chat-message-list"},""===n&&o.a.createElement("div",{className:"flex-column justify-center items-center h-full"},o.a.createElement(M,null),o.a.createElement("p",null,"Select a contact")),l.map((function(e,a){return o.a.createElement("div",{className:"flex items-start px-4 py-3",key:V.a.generate()},o.a.createElement(h.a,{src:e.avatar,status:e.status}),o.a.createElement("div",{className:"ml-4"},o.a.createElement("p",{className:"text-muted m-0 mb-2"},e.name),o.a.createElement("div",{className:Object(x.default)({"px-4 py-2 mb-2 border-radius-4 bg-paper":!0,"bg-primary text-white":t===e.contactId})},o.a.createElement("span",{className:"whitespace-pre-wrap"},e.text)),o.a.createElement("small",{className:"text-muted mb-0"},Object(R.d)(new Date(e.time))," ago")))}))),o.a.createElement(b.a,null),""!==n&&o.a.createElement("div",{className:"flex items-center px-4 py-2"},o.a.createElement(C.a,{label:"Type your message here*",value:g,onChange:function(e){return v(e.target.value)},onKeyUp:function(e){if("Enter"===e.key&&!e.shiftKey){var t=g.trim();""!==t&&m(t),v("")}},fullWidth:!0,multiline:!0,rows:1,variant:"outlined"}),o.a.createElement("div",null,o.a.createElement(k.a,{onClick:function(){""!==g.trim()&&m(g),v("")},color:"primary",className:"ml-4"},o.a.createElement(O.a,null,"send")))))},L=a(51);t.default=function(){var e=document.querySelector("#chat-message-list"),t=Object(i.useState)(!0),a=Object(c.a)(t,2),d=a[0],h=a[1],p=Object(i.useState)({id:"7863a6802ez0e277a0f98534"}),f=Object(c.a)(p,2),b=f[0],g=f[1],v=Object(i.useState)(null),x=Object(c.a)(v,2),E=x[0],w=x[1],y=Object(i.useState)(""),O=Object(c.a)(y,2),N=O[0],C=O[1],k=Object(i.useState)([]),S=Object(c.a)(k,2),M=S[0],R=S[1],I=Object(i.useState)([]),V=Object(c.a)(I,2),z=V[0],T=V[1],U=Object(i.useState)([]),D=Object(c.a)(U,2),$=D[0],W=D[1],q=Object(i.useRef)(b),F=Object(L.a)(),H=Object(s.a)(F.breakpoints.down("sm")),B=Object(i.useCallback)((function(){var e=q.current.id;Object(m.d)(e).then((function(e){T(e.data)}))}),[]);Object(i.useEffect)((function(){var e=q.current.id;Object(m.c)(e).then((function(e){h(H),g(Object(r.a)({},e.data))})),Object(m.a)(b.id).then((function(e){return R(e.data)})),B()}),[H,b.id,B]);var A=function(){e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},J=function(){h(!d)};return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(u.b,{routeSegments:[{name:"Chat"}]})),o.a.createElement(l.a,{elevation:6},o.a.createElement(u.s,null,o.a.createElement(u.r,{width:"230px",open:d,toggleSidenav:J},o.a.createElement(j,{currentUser:b,contactList:M,recentContactList:z,handleContactClick:function(e){H&&J(),Object(m.c)(e).then((function(e){var t=e.data;w(Object(r.a)({},t))})),Object(m.b)(b.id,e).then((function(e){var t=e.data,a=t.chatId,n=t.messageList,r=t.recentListUpdated;C(a),W(n),A(),r&&B()}))}})),o.a.createElement(u.t,null,o.a.createElement(_,{id:null===b||void 0===b?void 0:b.id,opponentUser:E,messageList:$,currentChatRoom:N,handleMessageSend:function(e){var t=b.id;""!==N&&(Object(m.e)({chatId:N,text:e,contactId:t,time:new Date}).then((function(e){W(Object(n.a)(e.data)),A()})),setTimeout((function(){Object(m.e)({chatId:N,text:"Hi, I'm ".concat(E.name,". Your imaginary friend."),contactId:E.id,time:new Date}).then((function(e){W(Object(n.a)(e.data)),A()}))}),750))},toggleSidenav:J})))))}}}]);