(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[153],{2074:function(e,t){},2697:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(1),r=a.n(l),o=a(1196),i=a(1782),c=a.n(i),s=a(2077),d=a(7),m=a(22),u=a(1126),f=a(569),p=a(1195),b=a(1225),g=a(1426),h=a(1375),E=a(89),v=(a(1471),a(1315),a(1222),a(1166),a(50),a(116),a(1165)),x=a(4),w=a(70),j=(a(37),a(58),a(20),Object(l.createContext)({notifications:[],deleteNotification:function(){},clearNotifications:function(){},getNotifications:function(){},createNotification:function(){}}),Object(v.a)((function(e){e.palette,Object(n.a)(e,["palette"]);return{notification:{width:"var(--sidenav-width)","& .notification__topbar":{height:"var(--topbar-height)"}},notificationCard:{"&:hover":{"& .delete-button":{cursor:"pointer",display:"unset",right:0,marginTop:6,top:0,zIndex:2},"& .card__topbar__time":{display:"none"}},"& .delete-button":{display:"none",position:"absolute",right:0,marginTop:9},"& .card__topbar__button":{borderRadius:15,opacity:.9}}}})),a(1974),a(51)),N=a(105),O=a(79),S=a(2074),y=a.n(S),_=Object(v.a)((function(e){var t=e.palette,a=Object(n.a)(e,["palette"]);return{topbar:{top:0,zIndex:96,transition:"all 0.3s ease",background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))","& .topbar-hold":{backgroundColor:t.primary.main,height:80,paddingLeft:18,paddingRight:20,[a.breakpoints.down("sm")]:{paddingLeft:16,paddingRight:16},[a.breakpoints.down("xs")]:{paddingLeft:14,paddingRight:16}},"& .fixed":{boxShadow:a.shadows[8],height:64}},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}})),k=r.a.memo((function(){var e,t,a=Object(j.a)(),n=_(),o=Object(w.a)(),i=o.settings,c=o.updateSettings,s=Object(N.a)().user,v=Object(u.a)(a.breakpoints.down("md")),S=null===i||void 0===i||null===(e=i.layout1Settings)||void 0===e||null===(t=e.topbar)||void 0===t?void 0:t.fixed,k=(localStorage.getItem("user"),Object(l.useState)(!1)),C=Object(m.a)(k,2),I=C[0],R=C[1],L=Object(l.useState)(!1),z=Object(m.a)(L,2),W=z[0],A=(z[1],function(){R(!1)});return r.a.createElement("div",{className:n.topbar},r.a.createElement("div",{className:Object(x.default)({"topbar-hold":!0,fixed:S})},r.a.createElement("div",{className:"flex justify-between items-center h-full"},r.a.createElement("div",{className:"flex"},r.a.createElement(f.a,{onClick:function(){var e,t,a=i.layout1Settings;e=v?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",t={mode:e},c({layout1Settings:{leftSidebar:Object(d.a)({},t)}})},className:"hide-on-pc"},r.a.createElement(p.a,null,"menu")),r.a.createElement("div",{className:"hide-on-mobile"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,"mail_outline")),r.a.createElement(f.a,null,r.a.createElement(p.a,null,"web_asset")),r.a.createElement(f.a,null,r.a.createElement(p.a,null,"star_outline")))),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(E.q,null),r.a.createElement(E.o,{menuButton:r.a.createElement("div",{className:n.userMenu},r.a.createElement(b.a,{xsDown:!0},r.a.createElement("span",null,"Hi ",r.a.createElement("strong",null,null===s||void 0===s?void 0:s.name))),r.a.createElement(g.a,{className:"cursor-pointer"}))},r.a.createElement(h.a,{className:n.menuItem,onClick:function(e){return O.a.push("/changepass")}},r.a.createElement(p.a,null," settings "),r.a.createElement("span",{className:"pl-4"},"Change Password"),I&&r.a.createElement(y.a,{handleClose:A,open:I}),W&&r.a.createElement(E.d,{open:W,onConfirmDialogClose:A,text:"Are you sure to delete?"})),r.a.createElement(h.a,{onClick:function(){localStorage.clear(),window.location.href="../dashboard/default"},className:n.menuItem},r.a.createElement(p.a,null," power_settings_new "),r.a.createElement("span",{className:"pl-4"}," Logout ")))))))})),C=a(2079),I=a(2075),R=a(2078),L=a(152),z=a(2076),W=Object(v.a)((function(e){e.palette,Object(n.a)(e,["palette"]);return{contentWrap:function(e){return{verticalAlign:"top",marginLeft:e.width,transition:"all 0.3s ease",marginRight:e.secondarySidebar.open?50:0}},topbar:{top:0,zIndex:96,background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))",transition:"all 0.3s ease"}}}));t.default=r.a.memo((function(){var e=Object(w.a)().settings,t=e.layout1Settings,a=e.secondarySidebar,n=t.leftSidebar,i=n.mode,d=n.show,m=Object(l.useContext)(L.a).routes,u=function(){switch(i){case"full":return"var(--sidenav-width)";case"compact":return"var(--sidenav-compact-width)";default:return"0px"}}(),f=W({width:u,secondarySidebar:a}),p=Object(j.a)(),b=e.themes[t.topbar.theme],g="theme-".concat(p.palette.type," flex");return r.a.createElement("div",{className:Object(x.default)("bg-default",g)},d&&"close"!==i&&r.a.createElement(z.a,null,r.a.createElement(C.a,null)),r.a.createElement("div",{className:Object(x.default)("flex-grow flex-column relative overflow-hidden h-full-screen",f.contentWrap)},t.topbar.show&&t.topbar.fixed&&r.a.createElement(o.a,{theme:b},r.a.createElement(k,{fixed:!0,className:"elevation-z8"})),e.perfectScrollbar&&r.a.createElement(c.a,{className:"flex-grow flex-column relative h-full"},t.topbar.show&&!t.topbar.fixed&&r.a.createElement(o.a,{theme:b},r.a.createElement(k,null)),r.a.createElement("div",{className:"relative flex-grow"},r.a.createElement(E.u,null,Object(s.a)(m))),e.footer.show&&!e.footer.fixed&&r.a.createElement(I.a,null)),!e.perfectScrollbar&&r.a.createElement("div",{className:"flex-grow flex-column relative h-full scroll-y"},t.topbar.show&&!t.topbar.fixed&&r.a.createElement(o.a,{theme:b}),r.a.createElement("div",{className:"relative flex-grow"},r.a.createElement(E.u,null,Object(s.a)(m))),e.footer.show&&!e.footer.fixed&&r.a.createElement(I.a,null)),e.footer.show&&e.footer.fixed&&r.a.createElement(I.a,null)),e.secondarySidebar.show&&r.a.createElement(R.a,null))}))}}]);