(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[168],{2591:function(e,a,t){"use strict";t.r(a);var r=t(22),n=t(1),s=t.n(n),c=t(1163),l=t(1199),m=t(1220),i=t(89),o=Object(c.a)((function(e){return{root:{flexGrow:1},progress:{margin:e.spacing(2)}}}));a.default=function(){var e=o(),a=s.a.useState(0),t=Object(r.a)(a,2),n=t[0],c=t[1];return s.a.useEffect((function(){var e=setInterval((function(){c((function(e){if(100===e)return 0;var a=10*Math.random();return Math.min(e+a,100)}))}),500);return function(){clearInterval(e)}}),[]),s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(i.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Prgress"}]})),s.a.createElement(i.A,{title:"Circuar Progress (Indeterminate)"},s.a.createElement(l.a,{className:e.progress}),s.a.createElement(l.a,{className:e.progress,color:"secondary"})),s.a.createElement("div",{className:"py-3"}),s.a.createElement(i.A,{title:"Circuar Progress (static)"},s.a.createElement(l.a,{variant:"static",value:25,className:e.progress}),s.a.createElement(l.a,{variant:"static",value:50,className:e.progress,color:"secondary"}),s.a.createElement(l.a,{variant:"static",value:75,className:e.progress,color:"secondary"})),s.a.createElement("div",{className:"py-3"}),s.a.createElement(i.A,{title:"Linear Progress (Indeterminate)"},s.a.createElement(m.a,null),s.a.createElement("br",null),s.a.createElement(m.a,{color:"secondary"})),s.a.createElement("div",{className:"py-3"}),s.a.createElement(i.A,{title:"Linear Progress (Determinate)"},s.a.createElement(m.a,{variant:"determinate",value:n}),s.a.createElement("br",null),s.a.createElement(m.a,{color:"secondary",variant:"determinate",value:n})))}}}]);