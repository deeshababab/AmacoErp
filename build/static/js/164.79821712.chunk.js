(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[164],{2670:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(89),o=t(22),i=t(16),c=t(1165),m=t(1166),s=t(1426),u=t(1130),d=t(1522),E=t(1482),p=t(1351),g=t(1481),f=t(1219),b=t(2327),v=t.n(b),h=t(2328),y=t.n(h),C=t(567),k=t(204),O=["username@gmail.com","user02@gmail.com"],j=Object(c.a)({avatar:{backgroundColor:k.a[100],color:k.a[600]}});function S(e){var a=j(),t=e.onClose,n=e.selectedValue,r=Object(i.a)(e,["onClose","selectedValue"]);function o(e){t(e)}return l.a.createElement(f.a,Object.assign({onClose:function(){t(n)},"aria-labelledby":"simple-dialog-title"},r),l.a.createElement(g.a,{id:"simple-dialog-title"},"Set backup account"),l.a.createElement(u.a,null,O.map((function(e){return l.a.createElement(d.a,{button:!0,onClick:function(){return o(e)},key:e},l.a.createElement(E.a,null,l.a.createElement(s.a,{className:a.avatar},l.a.createElement(v.a,null))),l.a.createElement(p.a,{primary:e}))})),l.a.createElement(d.a,{button:!0,onClick:function(){return o("addAccount")}},l.a.createElement(E.a,null,l.a.createElement(s.a,null,l.a.createElement(y.a,null))),l.a.createElement(p.a,{primary:"add account"}))))}function w(){var e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=l.a.useState(O[1]),i=Object(o.a)(r,2),c=i[0],s=i[1];return l.a.createElement("div",null,l.a.createElement(C.a,{variant:"subtitle1"},"Selected: ",c),l.a.createElement("br",null),l.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Open simple dialog"),l.a.createElement(S,{selectedValue:c,open:t,onClose:function(e){n(!1),s(e)}}))}var x=t(1431),N=t(1430),A=t(1483);function T(){var e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1];function r(){n(!1)}return l.a.createElement("div",null,l.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Open alert dialog"),l.a.createElement(f.a,{open:t,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(g.a,{id:"alert-dialog-title"},"Use Google's location service?"),l.a.createElement(N.a,null,l.a.createElement(A.a,{id:"alert-dialog-description"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),l.a.createElement(x.a,null,l.a.createElement(m.a,{onClick:r,color:"primary"},"Disagree"),l.a.createElement(m.a,{onClick:r,color:"primary",autoFocus:!0},"Agree"))))}var D=t(1443),G=l.a.forwardRef((function(e,a){return l.a.createElement(D.a,Object.assign({direction:"up",ref:a},e))}));function P(){var e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1];function r(){n(!1)}return l.a.createElement("div",null,l.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Slide in alert dialog"),l.a.createElement(f.a,{open:t,TransitionComponent:G,keepMounted:!0,onClose:r,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(g.a,{id:"alert-dialog-slide-title"},"Use Google's location service?"),l.a.createElement(N.a,null,l.a.createElement(A.a,{id:"alert-dialog-slide-description"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),l.a.createElement(x.a,null,l.a.createElement(m.a,{onClick:r,color:"primary"},"Disagree"),l.a.createElement(m.a,{onClick:r,color:"primary"},"Agree"))))}var W=t(535);function B(){var e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1];function r(){n(!1)}return l.a.createElement("div",null,l.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Open form dialog"),l.a.createElement(f.a,{open:t,onClose:r,"aria-labelledby":"form-dialog-title"},l.a.createElement(g.a,{id:"form-dialog-title"},"Subscribe"),l.a.createElement(N.a,null,l.a.createElement(A.a,null,"To subscribe to this website, please enter your email address here. We will send updates occasionally."),l.a.createElement(W.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})),l.a.createElement(x.a,null,l.a.createElement(m.a,{variant:"outlined",color:"secondary",onClick:r},"Cancel"),l.a.createElement(m.a,{onClick:r,color:"primary"},"Subscribe"))))}var L=t(1624),z=t(1625),F=t(1634),M=t(1633),R=t(10),V=t(569),U=t(1385),q=t.n(U),H=Object(R.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose;return l.a.createElement(g.a,{disableTypography:!0,className:t.root},l.a.createElement(C.a,{variant:"h6"},a),n?l.a.createElement(V.a,{"aria-label":"Close",className:t.closeButton,onClick:n},l.a.createElement(q.a,null)):null)})),J=Object(R.a)((function(e){return{root:{padding:e.spacing(2)}}}))(N.a),I=Object(R.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(x.a),K=function(e){Object(F.a)(t,e);var a=Object(M.a)(t);function t(){var e;Object(L.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={open:!1},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e}return Object(z.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,{variant:"outlined",color:"secondary",onClick:this.handleClickOpen},"Open dialog"),l.a.createElement(f.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.open},l.a.createElement(H,{id:"customized-dialog-title",onClose:this.handleClose},"Modal title"),l.a.createElement(J,{dividers:!0},l.a.createElement(C.a,{gutterBottom:!0},"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."),l.a.createElement(C.a,{gutterBottom:!0},"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."),l.a.createElement(C.a,{gutterBottom:!0},"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.")),l.a.createElement(I,null,l.a.createElement(m.a,{onClick:this.handleClose,color:"primary"},"Save changes"))))}}]),t}(l.a.Component),Y=t(1411),Q=t(1465),X=t(1384),Z=Object(c.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),$=l.a.forwardRef((function(e,a){return l.a.createElement(D.a,Object.assign({direction:"up",ref:a},e))}));function _(){var e=Z(),a=l.a.useState(!1),t=Object(o.a)(a,2),n=t[0],r=t[1];function i(){r(!1)}return l.a.createElement("div",null,l.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){r(!0)}},"Open full-screen dialog"),l.a.createElement(f.a,{fullScreen:!0,open:n,onClose:i,TransitionComponent:$},l.a.createElement(Q.a,{className:e.appBar},l.a.createElement(X.a,null,l.a.createElement(V.a,{edge:"start",color:"inherit",onClick:i,"aria-label":"Close"},l.a.createElement(q.a,null)),l.a.createElement(C.a,{variant:"h6",className:e.title},"Sound"),l.a.createElement(m.a,{color:"inherit",onClick:i},"save"))),l.a.createElement(u.a,null,l.a.createElement(d.a,{button:!0},l.a.createElement(p.a,{primary:"Phone ringtone",secondary:"Titania"})),l.a.createElement(Y.a,null),l.a.createElement(d.a,{button:!0},l.a.createElement(p.a,{primary:"Default notification ringtone",secondary:"Tethys"})))))}var ee=t(566),ae=t(1167),te=t(570),ne=t(1375),le=t(571),re=t(1453),oe=Object(c.a)((function(e){return{form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},formControl:{marginTop:e.spacing(2),minWidth:120},formControlLabel:{marginTop:e.spacing(1)}}}));function ie(){var e=oe(),a=l.a.useState(!1),t=Object(o.a)(a,2),n=t[0],r=t[1],i=l.a.useState(!0),c=Object(o.a)(i,2),s=c[0],u=c[1],d=l.a.useState("sm"),E=Object(o.a)(d,2),p=E[0],b=E[1];function v(){r(!1)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){r(!0)}},"Open max-width dialog"),l.a.createElement(f.a,{fullWidth:s,maxWidth:p,open:n,onClose:v,"aria-labelledby":"max-width-dialog-title"},l.a.createElement(g.a,{id:"max-width-dialog-title"},"Optional sizes"),l.a.createElement(N.a,null,l.a.createElement(A.a,null,"You can set my maximum width and whether to adapt or not."),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(ee.a,{className:e.formControl},l.a.createElement(te.a,{htmlFor:"max-width"},"maxWidth"),l.a.createElement(le.a,{value:p,onChange:function(e){b(e.target.value)},inputProps:{name:"max-width",id:"max-width"}},l.a.createElement(ne.a,{value:!1},"false"),l.a.createElement(ne.a,{value:"xs"},"xs"),l.a.createElement(ne.a,{value:"sm"},"sm"),l.a.createElement(ne.a,{value:"md"},"md"),l.a.createElement(ne.a,{value:"lg"},"lg"),l.a.createElement(ne.a,{value:"xl"},"xl"))),l.a.createElement(ae.a,{className:e.formControlLabel,control:l.a.createElement(re.a,{checked:s,onChange:function(e){u(e.target.checked)},value:"fullWidth"}),label:"Full width"}))),l.a.createElement(x.a,null,l.a.createElement(m.a,{onClick:v,color:"primary"},"Close"))))}var ce=t(1126),me=t(51);function se(){var e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=Object(me.a)(),i=Object(ce.a)(r.breakpoints.down("sm"));function c(){n(!1)}return l.a.createElement("div",null,l.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Open responsive dialog"),l.a.createElement(f.a,{fullScreen:i,open:t,onClose:c,"aria-labelledby":"responsive-dialog-title"},l.a.createElement(g.a,{id:"responsive-dialog-title"},"Use Google's location service?"),l.a.createElement(N.a,null,l.a.createElement(A.a,null,"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),l.a.createElement(x.a,null,l.a.createElement(m.a,{onClick:c,color:"primary"},"Disagree"),l.a.createElement(m.a,{onClick:c,color:"primary",autoFocus:!0},"Agree"))))}var ue=t(1291),de=t(1441),Ee=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function pe(e){var a=e.onClose,t=e.value,n=e.open,r=Object(i.a)(e,["onClose","value","open"]),c=l.a.useState(t),s=Object(o.a)(c,2),u=s[0],d=s[1],E=l.a.useRef(null);return l.a.useEffect((function(){n||d(t)}),[t,n]),l.a.createElement(f.a,Object.assign({disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:function(){null!=E.current&&E.current.focus()},"aria-labelledby":"confirmation-dialog-title",open:n},r),l.a.createElement(g.a,{id:"confirmation-dialog-title"},"Phone Ringtone"),l.a.createElement(N.a,{dividers:!0},l.a.createElement(ue.a,{ref:E,"aria-label":"Ringtone",name:"ringtone",value:u,onChange:function(e,a){d(a)}},Ee.map((function(e){return l.a.createElement(ae.a,{value:e,key:e,control:l.a.createElement(de.a,null),label:e})})))),l.a.createElement(x.a,null,l.a.createElement(m.a,{variant:"outlined",color:"secondary",onClick:function(){a()}},"Cancel"),l.a.createElement(m.a,{onClick:function(){a(u)},color:"primary"},"Ok")))}var ge=Object(c.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paper:{width:"80%",maxHeight:435}}}));function fe(){var e=ge(),a=l.a.useState(!1),t=Object(o.a)(a,2),n=t[0],r=t[1],i=l.a.useState("Dione"),c=Object(o.a)(i,2),m=c[0],s=c[1];return l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{component:"div",role:"list"},l.a.createElement(d.a,{button:!0,divider:!0,disabled:!0,role:"listitem"},l.a.createElement(p.a,{primary:"Interruptions"})),l.a.createElement(d.a,{button:!0,divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:function(){r(!0)},role:"listitem"},l.a.createElement(p.a,{primary:"Phone ringtone",secondary:m})),l.a.createElement(d.a,{button:!0,divider:!0,disabled:!0,role:"listitem"},l.a.createElement(p.a,{primary:"Default notification ringtone",secondary:"Tethys"})),l.a.createElement(pe,{classes:{paper:e.paper},id:"ringtone-menu",keepMounted:!0,open:n,onClose:function(e){r(!1),e&&s(e)},value:m})))}a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(r.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Dialog"}]})),l.a.createElement(r.A,{title:"simple Dialog"},l.a.createElement(w,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"alert dialog"},l.a.createElement(T,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"transition"},l.a.createElement(P,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"form dialog"},l.a.createElement(B,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"customized dialog"},l.a.createElement(K,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"full-screen dialog"},l.a.createElement(_,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"optimized size dialog"},l.a.createElement(ie,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"responsive dialog"},l.a.createElement(se,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.A,{title:"confirmation dialog"},l.a.createElement(fe,null)))}}}]);