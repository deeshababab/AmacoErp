(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[89],{1500:function(e,a){e.exports=function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}},1564:function(e,a,t){e.exports=t.p+"static/media/amaco-logo.6510d041.png"},1565:function(e,a,t){e.exports=t.p+"static/media/vision2030.a6e8f10c.png"},1566:function(e){e.exports=JSON.parse('{"app.header":"\u0642\u0645 \u0628\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u062d\u0641\u0638\u0647\u0627 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644","app.content":"\u062a\u0639\u0644\u0645 React","app.channel.plug":"\u0634\u0631\u0643\u0629 \u0623\u0645\u0627\u0643\u0648 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0644\u0644\u0645\u0642\u0627\u0648\u0644\u0627\u062a","pono":"\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629","podate":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0635\u062f\u0627\u0631","vatinvoice":"\u0641\u0627\u062a\u0648\u0631\u0629 \u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629","companyname":"\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0639\u0646\u0648\u0627\u0646\u0647\u0627","po_no":"\u0638\u0631\u064a\u0628\u0647 \u0627\u0644\u0634\u0631\u0627\u0621","vatno":"\u0631\u0642\u0645 \u0627\u0645\u0631\u0627\u0644\u0634\u0631\u0627\u0621","preparedby":"\u0623\u0639\u062f\u062a \u0628\u0648\u0627\u0633\u0637\u0629","approvedby":"\u0627\u0639\u062a\u0645\u062f\u062a \u0628\u0648\u0627\u0633\u0629","receivedby":"\u0627\u0633\u062a\u0644\u0645\u062a \u0645\u0646 \u0642\u0628\u0644"}')},1666:function(e,a,t){"use strict";var n=t(1790),l=t(1500),r=t(1793);Object.defineProperty(a,"__esModule",{value:!0}),a.ToWords=void 0;var i={currency:!1,ignoreDecimal:!1,ignoreZeroCurrency:!1},o=function(){function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,e),this.options={},this.locale=void 0,this.options=Object.assign({localeCode:"en-IN",converterOptions:i},a)}return r(e,[{key:"getLocaleClass",value:function(){switch(this.options.localeCode){case"en-IN":return t(1794).Locale;case"en-MM":return t(1795).Locale;case"en-MU":return t(1796).Locale;case"en-US":return t(1797).Locale;case"fa-IR":return t(1798).Locale}throw new Error('Unknown Locale "'.concat(this.options.localeCode,'"'))}},{key:"getLocale",value:function(){if(void 0===this.locale){var e=this.getLocaleClass();this.locale=new e}return this.locale}},{key:"convert",value:function(e){var a,t,l,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i=Object.assign({},this.options.converterOptions,i),!this.isValidNumber(e))throw new Error('Invalid Number "'.concat(e,'"'));var o=this.getLocale(),c=this.isFloat(e);i.ignoreDecimal&&(e=Number.parseInt(e.toString()),c=!1);var u=e<0;if(u&&(e=Math.abs(e)),i.currency){e=this.toFixed(e),c=this.isFloat(e);var s=e.toString().split("."),m="".concat(this.convertInternal(Number(s[0]),i)).concat(o.currency.plural?" ".concat(o.currency.plural):""),b=e>=0&&e<1,d=i.ignoreZeroCurrency||(null===(a=o.options)||void 0===a?void 0:a.ignoreZeroInDecimals)&&0!==e;b&&d&&(m="");var p="";if(c){b&&d||(p+=" ".concat(o.texts.and," "));var v=null===(t=null===o||void 0===o?void 0:o.decimalLengthWordMapping)||void 0===t?void 0:t[s[1].length];p+="".concat(this.convertInternal(Number(s[1])*(o.decimalLengthWordMapping?1:Math.pow(10,2-s[1].length)),i)).concat(v?" ".concat(v):""," ").concat(o.currency.fractionalUnit.plural)}else o.decimalLengthWordMapping&&""!==m&&(m+=" ".concat(o.currency.fractionalUnit.plural));var f=m.length<=0&&p.length<=0;return(!f&&u?"".concat(o.texts.minus," "):"")+m+p+(!f&&o.texts.only?" ".concat(o.texts.only):"")}var y=e>=0&&e<1,g=e.toString().split("."),h=y&&(null===(l=o.options)||void 0===l?void 0:l.ignoreZeroInDecimals),x=c&&h?"":this.convertInternal(Number(g[0]),i),E="";if(c){var S=null===(r=null===o||void 0===o?void 0:o.decimalLengthWordMapping)||void 0===r?void 0:r[g[1].length];if(h||(E+=" ".concat(o.texts.point," ")),g[1].startsWith("0")&&!o.decimalLengthWordMapping){var N,w=[],F=n(g[1]);try{for(F.s();!(N=F.n()).done;){var z=N.value;w.push(this.convertInternal(Number(z)))}}catch(j){F.e(j)}finally{F.f()}E+=w.join(" ")}else E+="".concat(this.convertInternal(Number(g[1]),i)).concat(S?" ".concat(S):"")}var C=x.length<=0&&E.length<=0;return(!C&&u?"".concat(o.texts.minus," "):"")+x+E}},{key:"convertInternal",value:function(e){var a,t,n,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getLocale(),i=(null===(a=r.options)||void 0===a?void 0:a.splitWord)?"".concat(null===(t=r.options)||void 0===t?void 0:t.splitWord," "):"",o=r.numberWordsMapping.find((function(a){return e>=a.number}));if(!o)throw new Error('Invalid Number "'.concat(e,'"'));var c="";if(!(e<=100||e<1e3&&(null===(n=r.options)||void 0===n?void 0:n.namedLessThan1000))){var u=Math.floor(e/o.number),s=e%o.number;return s>0?"".concat(this.convertInternal(u,l)," ").concat(o.value," ").concat(i).concat(this.convertInternal(s,l)):"".concat(this.convertInternal(u,l)," ").concat(o.value)}return c+=o.value,(e-=o.number)>0&&(c+=" ".concat(i).concat(this.convertInternal(e,l))),c}},{key:"toFixed",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(Number(e).toFixed(a))}},{key:"isFloat",value:function(e){return Number(e)===e&&e%1!==0}},{key:"isValidNumber",value:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}}]),e}();a.ToWords=o},1789:function(e,a,t){"use strict"},1790:function(e,a,t){var n=t(1791);e.exports=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,i=!0,o=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return i=e.done,e},e:function(e){o=!0,r=e},f:function(){try{i||null==l.return||l.return()}finally{if(o)throw r}}}}},1791:function(e,a,t){var n=t(1792);e.exports=function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}},1792:function(e,a){e.exports=function(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}},1793:function(e,a){function t(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}},1794:function(e,a,t){"use strict";var n=t(1500);Object.defineProperty(a,"__esModule",{value:!0}),a.Locale=void 0;a.Locale=function e(){n(this,e),this.currency={name:"Rupee",plural:"Rupees",symbol:"\u20b9",fractionalUnit:{name:"Paisa",plural:"Paise",symbol:""}},this.texts={and:"And",minus:"Minus",only:"Only",point:"Point"},this.numberWordsMapping=[{number:1e7,value:"Crore"},{number:1e5,value:"Lakh"},{number:1e3,value:"Thousand"},{number:100,value:"Hundred"},{number:90,value:"Ninety"},{number:80,value:"Eighty"},{number:70,value:"Seventy"},{number:60,value:"Sixty"},{number:50,value:"Fifty"},{number:40,value:"Forty"},{number:30,value:"Thirty"},{number:20,value:"Twenty"},{number:19,value:"Nineteen"},{number:18,value:"Eighteen"},{number:17,value:"Seventeen"},{number:16,value:"Sixteen"},{number:15,value:"Fifteen"},{number:14,value:"Fourteen"},{number:13,value:"Thirteen"},{number:12,value:"Twelve"},{number:11,value:"Eleven"},{number:10,value:"Ten"},{number:9,value:"Nine"},{number:8,value:"Eight"},{number:7,value:"Seven"},{number:6,value:"Six"},{number:5,value:"Five"},{number:4,value:"Four"},{number:3,value:"Three"},{number:2,value:"Two"},{number:1,value:"One"},{number:0,value:"Zero"}]}},1795:function(e,a,t){"use strict";var n=t(1500);Object.defineProperty(a,"__esModule",{value:!0}),a.Locale=void 0;a.Locale=function e(){n(this,e),this.currency={name:"Kyat",plural:"Kyats",symbol:"K",fractionalUnit:{name:"Pya",plural:"Pyas",symbol:""}},this.texts={and:"And",minus:"Minus",only:"Only",point:"Point"},this.numberWordsMapping=[{number:1e15,value:"Quadrillion"},{number:1e12,value:"Trillion"},{number:1e9,value:"Billion"},{number:1e6,value:"Million"},{number:1e3,value:"Thousand"},{number:100,value:"Hundred"},{number:90,value:"Ninety"},{number:80,value:"Eighty"},{number:70,value:"Seventy"},{number:60,value:"Sixty"},{number:50,value:"Fifty"},{number:40,value:"Forty"},{number:30,value:"Thirty"},{number:20,value:"Twenty"},{number:19,value:"Nineteen"},{number:18,value:"Eighteen"},{number:17,value:"Seventeen"},{number:16,value:"Sixteen"},{number:15,value:"Fifteen"},{number:14,value:"Fourteen"},{number:13,value:"Thirteen"},{number:12,value:"Twelve"},{number:11,value:"Eleven"},{number:10,value:"Ten"},{number:9,value:"Nine"},{number:8,value:"Eight"},{number:7,value:"Seven"},{number:6,value:"Six"},{number:5,value:"Five"},{number:4,value:"Four"},{number:3,value:"Three"},{number:2,value:"Two"},{number:1,value:"One"},{number:0,value:"Zero"}]}},1796:function(e,a,t){"use strict";var n=t(1500);Object.defineProperty(a,"__esModule",{value:!0}),a.Locale=void 0;a.Locale=function e(){n(this,e),this.currency={name:"Rupee",plural:"Rupees",symbol:"Rs",fractionalUnit:{name:"Cent",plural:"Cents",symbol:""}},this.texts={and:"And",minus:"Minus",only:"Only",point:"Point"},this.numberWordsMapping=[{number:1e7,value:"Crore"},{number:1e5,value:"Lakh"},{number:1e3,value:"Thousand"},{number:100,value:"Hundred"},{number:90,value:"Ninety"},{number:80,value:"Eighty"},{number:70,value:"Seventy"},{number:60,value:"Sixty"},{number:50,value:"Fifty"},{number:40,value:"Forty"},{number:30,value:"Thirty"},{number:20,value:"Twenty"},{number:19,value:"Nineteen"},{number:18,value:"Eighteen"},{number:17,value:"Seventeen"},{number:16,value:"Sixteen"},{number:15,value:"Fifteen"},{number:14,value:"Fourteen"},{number:13,value:"Thirteen"},{number:12,value:"Twelve"},{number:11,value:"Eleven"},{number:10,value:"Ten"},{number:9,value:"Nine"},{number:8,value:"Eight"},{number:7,value:"Seven"},{number:6,value:"Six"},{number:5,value:"Five"},{number:4,value:"Four"},{number:3,value:"Three"},{number:2,value:"Two"},{number:1,value:"One"},{number:0,value:"Zero"}]}},1797:function(e,a,t){"use strict";var n=t(1500);Object.defineProperty(a,"__esModule",{value:!0}),a.Locale=void 0;a.Locale=function e(){n(this,e),this.currency={name:"Dollar",plural:"Dollars",symbol:"$",fractionalUnit:{name:"Cent",plural:"Cents",symbol:"\xa2"}},this.texts={and:"And",minus:"Minus",only:"Only",point:"Point"},this.numberWordsMapping=[{number:1e15,value:"Quadrillion"},{number:1e12,value:"Trillion"},{number:1e9,value:"Billion"},{number:1e6,value:"Million"},{number:1e3,value:"Thousand"},{number:100,value:"Hundred"},{number:90,value:"Ninety"},{number:80,value:"Eighty"},{number:70,value:"Seventy"},{number:60,value:"Sixty"},{number:50,value:"Fifty"},{number:40,value:"Forty"},{number:30,value:"Thirty"},{number:20,value:"Twenty"},{number:19,value:"Nineteen"},{number:18,value:"Eighteen"},{number:17,value:"Seventeen"},{number:16,value:"Sixteen"},{number:15,value:"Fifteen"},{number:14,value:"Fourteen"},{number:13,value:"Thirteen"},{number:12,value:"Twelve"},{number:11,value:"Eleven"},{number:10,value:"Ten"},{number:9,value:"Nine"},{number:8,value:"Eight"},{number:7,value:"Seven"},{number:6,value:"Six"},{number:5,value:"Five"},{number:4,value:"Four"},{number:3,value:"Three"},{number:2,value:"Two"},{number:1,value:"One"},{number:0,value:"Zero"}]}},1798:function(e,a,t){"use strict";var n=t(1500);Object.defineProperty(a,"__esModule",{value:!0}),a.Locale=void 0;a.Locale=function e(){n(this,e),this.currency={name:"\u062a\u0648\u0645\u0627\u0646",plural:"",symbol:"\u062a\u0648\u0645\u0627\u0646",fractionalUnit:{name:"",plural:"\u062a\u0648\u0645\u0627\u0646",symbol:""}},this.texts={and:"\u0648",minus:"\u0645\u0646\u0641\u06cc",only:"",point:"\u0648"},this.options={namedLessThan1000:!0,splitWord:"\u0648",ignoreZeroInDecimals:!0},this.decimalLengthWordMapping={1:"\u062f\u0647\u0645",2:"\u0635\u062f\u0645",3:"\u0647\u0632\u0627\u0631\u0645",4:"\u062f\u0647\u200c\u0647\u0632\u0627\u0631\u0645",5:"\u0635\u062f\u200c\u0647\u0632\u0627\u0631\u0645",6:"\u0645\u06cc\u0644\u06cc\u0648\u0646\u06cc\u0648\u0645",7:"\u062f\u0647\u200c\u0645\u06cc\u0644\u06cc\u0648\u0646\u06cc\u0648\u0645",8:"\u0635\u062f\u200c\u0645\u06cc\u0644\u06cc\u0648\u0646\u06cc\u0648\u0645",9:"\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f\u06cc\u0648\u0645"},this.numberWordsMapping=[{number:1e15,value:"\u06a9\u0648\u0627\u062f\u0631\u06cc\u0644\u06cc\u0648\u0646"},{number:1e12,value:"\u062a\u06cc\u0644\u06cc\u0627\u0631\u062f"},{number:1e9,value:"\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f"},{number:1e6,value:"\u0645\u06cc\u0644\u06cc\u0648\u0646"},{number:1e3,value:"\u0647\u0632\u0627\u0631"},{number:900,value:"\u0646\u0647\u0635\u062f"},{number:800,value:"\u0647\u0634\u062a\u0635\u062f"},{number:700,value:"\u0647\u0641\u062a\u0635\u062f"},{number:600,value:"\u0634\u0634\u0635\u062f"},{number:500,value:"\u067e\u0627\u0646\u0635\u062f"},{number:400,value:"\u0686\u0647\u0627\u0631\u0635\u062f"},{number:300,value:"\u0633\u06cc\u0635\u062f"},{number:200,value:"\u062f\u0648\u06cc\u0633\u062a"},{number:100,value:"\u0635\u062f"},{number:90,value:"\u0646\u0648\u062f"},{number:80,value:"\u0647\u0634\u062a\u0627\u062f"},{number:70,value:"\u0647\u0641\u062a\u0627\u062f"},{number:60,value:"\u0634\u0635\u062a"},{number:50,value:"\u067e\u0646\u062c\u0627\u0647"},{number:40,value:"\u0686\u0647\u0644"},{number:30,value:"\u0633\u06cc"},{number:20,value:"\u0628\u06cc\u0633\u062a"},{number:19,value:"\u0646\u0648\u0632\u062f\u0647"},{number:18,value:"\u0647\u062c\u062f\u0647"},{number:17,value:"\u0647\u0641\u062f\u0647"},{number:16,value:"\u0634\u0627\u0646\u0632\u062f\u0647"},{number:15,value:"\u067e\u0627\u0646\u0632\u062f\u0647"},{number:14,value:"\u0686\u0647\u0627\u0631\u062f\u0647"},{number:13,value:"\u0633\u06cc\u0632\u062f\u0647"},{number:12,value:"\u062f\u0648\u0627\u0632\u062f\u0647"},{number:11,value:"\u06cc\u0627\u0632\u062f\u0647"},{number:10,value:"\u062f\u0647"},{number:9,value:"\u0646\u0647"},{number:8,value:"\u0647\u0634\u062a"},{number:7,value:"\u0647\u0641\u062a"},{number:6,value:"\u0634\u0634"},{number:5,value:"\u067e\u0646\u062c"},{number:4,value:"\u0686\u0647\u0627\u0631"},{number:3,value:"\u0633\u0647"},{number:2,value:"\u062f\u0648"},{number:1,value:"\u06cc\u06a9"},{number:0,value:"\u0635\u0641\u0631"}]}},2653:function(e,a,t){"use strict";t.r(a);var n=t(22),l=t(16),r=t(1),i=t.n(r),o=(t(1427),t(1166)),c=t(1195),u=t(1379),s=t(1380),m=t(1376),b=t(1382),d=t(1381),p=t(133),v=t(1165),f=t(4),y=(t(20),t(166),t(1564)),g=t.n(y),h=(t(1565),t(70),t(1789),t(1566),t(565),t(79),t(1410)),x=t.n(h),E=(t(1666),t(1435)),S=t(89),N=(t(55),navigator.language,Object(v.a)((function(e){e.palette,Object(l.a)(e,["palette"]);return{"@global":{"@media print":{"body, html":{visibility:"hidden",size:"auto",content:"none !important","-webkit-print-color-adjust":"exact !important",marginTop:"10px"},"#header":{position:"fixed",marginTop:"100px",left:0,paddingTop:130,justifySelf:"end"},".empty-header":{height:"100px",marginTop:"10px"},".empty-footer":{height:"100px",marginTop:"10px"},".header":{position:"fixed",height:"100px",top:0},".footer":{position:"fixed",height:"100px",bottom:0,width:"100%"},"#footer":{backgroundColor:"#F8F8F8",borderTop:"1px solid #E7E7E7",textAlign:"center",bottom:"0",position:"fixed",width:"100%",justifySelf:"end"},"#table":{display:"-webkit-box",display:"-ms-flexbox",width:"650px",margin:"15px",position:"absolute"},"#print-area":{left:0,right:0,boxDecorationBreak:"clone",position:"relative","& *":{visibility:"visible"}}}},invoiceViewer:{}}})));a.default=function(e){e.toggleInvoiceEditor,e.list,e.handleAddList,e.handleAddNewCard;var a=Object(r.useRef)(),t=Object(r.useState)([]),l=Object(n.a)(t,2),v=(l[0],l[1]),y=Object(r.useState)(""),h=Object(n.a)(y,2),w=h[0],F=h[1],z=Object(r.useState)(!1),C=Object(n.a)(z,2),j=(C[0],C[1],Object(r.useState)(!1)),O=Object(n.a)(j,2),k=(O[0],O[1]),T=Object(r.useState)(new Date),L=Object(n.a)(T,2),A=L[0],M=L[1],I=Object(r.useState)(new Date),B=Object(n.a)(I,2),D=B[0],_=B[1],W=Object(r.useState)(),P=Object(n.a)(W,2),R=P[0],U=P[1],Y=Object(r.useState)(),Z=Object(n.a)(Y,2),V=Z[0],H=Z[1],J=Object(r.useState)(),K=Object(n.a)(J,2),q=K[0],Q=K[1],$=Object(r.useState)(),G=Object(n.a)($,2),X=(G[0],G[1]),ee=Object(r.useState)(),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],le=Object(r.useState)([]),re=Object(n.a)(le,2),ie=re[0],oe=re[1],ce=Object(r.useState)(0),ue=Object(n.a)(ce,2),se=(ue[0],ue[1]),me=Object(r.useState)(0),be=Object(n.a)(me,2),de=(be[0],be[1]),pe=Object(r.useState)([]),ve=Object(n.a)(pe,2),fe=ve[0],ye=(ve[1],Object(r.useState)()),ge=Object(n.a)(ye,2),he=(ge[0],ge[1]),xe=Object(r.useState)(!1),Ee=Object(n.a)(xe,2),Se=(Ee[0],Ee[1],i.a.useState({open:!1,vertical:"top",horizontal:"center"})),Ne=Object(n.a)(Se,2),we=Ne[0],Fe=(Ne[1],we.vertical,we.horizontal,we.open,N());new FormData;Object(r.useEffect)((function(){document.title="Request for quoatation - Amaco",Object(p.i)().then((function(e){var a=e.data;v(a)})),p.b.get("all-account-statementpayment_account_id="+w+"&from_date="+x()(A).format("YYYY-MM-DD")+"&to_date="+x()(D).format("YYYY-MM-DD")).then((function(e){var a=e.data,t=Object.values(a[0].data).sort((function(e,a){return new Date(e[0].date)-new Date(a[0].date)}));oe(t),he(Object.keys(t).length);var n=parseFloat(a[0].opening_balance),l=0;Object.values(a[0].data).map((function(e,a){e[0].debit&&(n+=parseFloat(e[0].debit.split(",").join(""))),e[0].credit&&(l+=parseFloat(e[0].credit.split(",").join("")))})),M(new Date),_(new Date),F(""),se(n),de(l),U(a[0].from_date),H(a[0].to_date),X(a[0].credit_days),Q(a[0].firm_name),ne(a[0].opening_balance),k(!0)}))}),[]);window.onafterprint=function(){window.close(),window.location.href=""};var ze=Object(E.useReactToPrint)({content:function(){return a.current},header:function(){return a.current}}),Ce=function(e,a,t,n){var l;e=parseFloat(null===(l=e)||void 0===l?void 0:l.split(",").join(""));var r=parseFloat(null===a||void 0===a?void 0:a.split(",").join(""));return"+"===t&&(e+=r),"-"===t&&(e-=r),je=e,fe.push(e.toLocaleString(void 0,{minimumFractionDigits:2})),parseFloat(e).toLocaleString(void 0,{minimumFractionDigits:2})},je=0,Oe=parseFloat(te).toLocaleString(void 0,{minimumFractionDigits:2});we.orderNo,we.buyer,we.seller,we.item,we.status,we.vat,we.date;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement("div",{className:"flex flex-wrap justify-between mb-2"},i.a.createElement(S.b,{routeSegments:[{name:"Account Statements"}]}),i.a.createElement("div",{className:"text-right"},i.a.createElement(o.a,{className:"mr-4 py-2",color:"secondary",variant:"outlined",onClick:ze},i.a.createElement(c.a,null,"print")," Print Statement")))),i.a.createElement("div",{className:Object(f.default)("invoice-viewer py-4 pt-0",Fe.customer)},i.a.createElement("div",{className:"viewer_actions px-4 mb-5 flex items-center justify-between"},i.a.createElement("div",null)),i.a.createElement("div",{id:"print-area",ref:a,style:{fontFamily:"Calibri",fontSize:16}},i.a.createElement("table",null,i.a.createElement("thead",{style:{display:"table-header-group",marginTop:"20px"}},i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("div",{class:"empty-header"},i.a.createElement("div",{className:"px-2 flex justify-between"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"pr-12"},i.a.createElement("img",{src:g.a,alt:"this is car image",style:{marginLeft:"15px",width:237}})),i.a.createElement("div",{className:"viewer__order-info px-4 mb-4  flex justify-between"})),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{style:{marginLeft:"50px",marginRight:10}},i.a.createElement("h2",{style:{color:"#1d2257",textAlign:"right"}},"\u0634\u0631\u0643\u0629 \u0623\u0645\u0627\u0643\u0648 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0644\u0644\u0645\u0642\u0627\u0648\u0644\u0627\u062a"),i.a.createElement("h3",{style:{color:"#1d2257",textAlign:"right",fontSize:20}},"AMACO ARABIA CONTRACTING COMPANY"),i.a.createElement("h5",{style:{color:"#555",textAlign:"right",fontSize:17},className:"font-normal b-4 capitalize"},"C.R No. 2055003404 | VAT No. 310398615200003")))))))),i.a.createElement("tbody",{style:{marginBottom:"50px"}},i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("div",null,i.a.createElement("div",{className:"px-4 mb-2 pl-4 pt-4 flex "},i.a.createElement(u.a,{style:{width:"100%",fontSize:12,border:"none"},className:"pl-4"},i.a.createElement(s.a,{style:{border:"1px solid #ccc",pageBreakInside:"avoid"}},i.a.createElement(m.a,{className:"pl-2",align:"left",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},"Name"),i.a.createElement(m.a,{className:"pl-2",align:"left",colSpan:3,style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},q),i.a.createElement(m.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pr-0 capitalize",align:"center",rowSpan:2,colSpan:2,style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}},i.a.createElement("h3",null,"Statement of Account"))),i.a.createElement(s.a,{style:{border:"1px solid #ccc",pageBreakInside:"avoid"}},i.a.createElement(m.a,{className:"pl-2",align:"left",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},"Period"),i.a.createElement(m.a,{className:"pl-2",align:"left",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},R),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},"to"),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}},V),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}})),i.a.createElement(s.a,{style:{border:"1px solid #ccc",pageBreakInside:"avoid"}},i.a.createElement(m.a,{className:"pl-2",align:"left",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},"Opening Balance"),i.a.createElement(m.a,{className:"pl-2",align:"left",colSpan:1,style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},parseFloat(te).toLocaleString(void 0,{minimumFractionDigits:2})),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},"Current Balance"),i.a.createElement(m.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},fe.slice(fe.length-1)),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}})))),i.a.createElement("div",{className:"px-4 mb-2 pl-4 pt-4 pb-8 flex justify-between"},i.a.createElement(u.a,{style:{width:"100%",fontSize:12,border:"none"},className:"pl-4"},i.a.createElement(b.a,{style:{backgroundColor:"#1d2257",display:"table-row-group"}},i.a.createElement(s.a,{style:{pageBreakInside:"avoid"}},i.a.createElement(m.a,{className:"pr-0",colSpan:1,style:{border:"1px solid #ccc",width:100,fontFamily:"Calibri",color:"#fff",fontWeight:1e3,fontSize:16},align:"center"},"DATE"),i.a.createElement(m.a,{className:"px-0",colSpan:2,style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",fontColor:"#fff",width:110,fontWeight:1e3,fontSize:16},align:"center"},"INV.#"),i.a.createElement(m.a,{className:"px-0",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",fontColor:"#fff",fontWeight:1e3,fontSize:16,width:50},align:"center"},"DOCUMENT #"),i.a.createElement(m.a,{className:"px-0",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",fontColor:"#fff",fontWeight:1e3,fontSize:16,width:120},align:"center"},"PARTICULARS"),i.a.createElement(m.a,{className:"px-0",style:{border:"1px solid #ccc",fontFamily:"Calibri",width:180,color:"#fff",fontWeight:1e3,fontSize:16},align:"center"},"DEBIT"),i.a.createElement(m.a,{className:"px-0",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",width:180,fontWeight:1e3,fontSize:16},align:"center"},"CREDIT"),i.a.createElement(m.a,{className:"px-0",style:{border:"1px solid #ccc",fontFamily:"Calibri",width:110,color:"#fff",fontWeight:1e3,fontSize:16},align:"center"},"BALANCE"))),i.a.createElement(d.a,null,i.a.createElement(s.a,{style:{border:"1px solid #ccc",pageBreakInside:"avoid"}},i.a.createElement(m.a,{className:"pr-0",align:"center",colSpan:1,style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},R),i.a.createElement(m.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16},colSpan:2},"--"),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}},"--"),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}},"opening_balance"),te>=0?i.a.createElement(m.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},parseFloat(te).toLocaleString(void 0,{minimumFractionDigits:2})):i.a.createElement(m.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}}),te<0?i.a.createElement(m.a,{className:" capitalize",align:"right",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},te):i.a.createElement(m.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},parseFloat(te).toLocaleString(void 0,{minimumFractionDigits:2}))),ie.map((function(e,a){return i.a.createElement(s.a,{style:{border:"1px solid #ccc",pageBreakInside:"avoid"}},i.a.createElement(m.a,{className:"pr-0",align:"center",colSpan:1,style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},x()(e[0].date).format("YYYY-MM-DD")),i.a.createElement(m.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16},colSpan:2},null===e[0].code_no?"":e[0].code_no),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}},"--"),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}},null===e[0].description?"":e[0].description),i.a.createElement(m.a,{className:" capitalize",align:"right",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},null===e[0].debit?"":e[0].debit),i.a.createElement(m.a,{className:"capitalize",align:"right",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},null===e[0].credit?"":e[0].credit),i.a.createElement(m.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},Oe=e[0].debit?Ce(Oe,e[0].debit,"+"):Ce(Oe,e[0].credit,"-")))})),i.a.createElement(s.a,{style:{border:"1px solid #ccc",pageBreakInside:"avoid",backgroundColor:"#ccc"}},i.a.createElement(m.a,{className:"pr-0",align:"center",colSpan:1,style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16},colSpan:2}),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pl-2 capitalize",align:"left",style:{border:"1px solid #ccc",wordBreak:"break-word",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}}),i.a.createElement(m.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},je.toLocaleString(void 0,{minimumFractionDigits:2})))))),i.a.createElement("div",{className:"px-4 mb-2 pl-4 pt-8 flex justify-between"},i.a.createElement(u.a,{style:{width:"100%",fontSize:12,border:"none"},className:"pl-4"},i.a.createElement("tr",{style:{borderColor:"#fff",pageBreakInside:"avoid"}},i.a.createElement("td",{className:"pr-0 capitalize",align:"left",style:{fontFamily:"Calibri",fontSize:16}},"Accounts Dept."),i.a.createElement("td",{className:"pr-0 capitalize",align:"left",style:{fontFamily:"Calibri",fontSize:16}},"Finance Dept.")))),i.a.createElement("div",{className:"px-4 mb-2 pl-4 pt-8 flex justify-between"},i.a.createElement(u.a,{style:{width:"100%",fontSize:12,border:"none"},className:"pl-4"},i.a.createElement(s.a,{style:{border:"1px solid #ccc",pageBreakInside:"avoid"}},i.a.createElement(m.a,{className:"pr-0",align:"center",colSpan:1,style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},"Bank Name"),i.a.createElement(m.a,{className:"pr-0",align:"center",colSpan:1,style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},"Account No."),i.a.createElement(m.a,{className:"pr-0",align:"center",colSpan:1,style:{border:"1px solid #ccc",fontFamily:"Calibri",fontSize:16}},"IBAN NO.")))),i.a.createElement("br",null),i.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},i.a.createElement("div",null)),i.a.createElement("br",null),i.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"}),i.a.createElement("br",null))))),i.a.createElement("tfoot",null,i.a.createElement("div",{class:"empty-footer"}))),i.a.createElement("div",{class:"footer"},i.a.createElement("footer",{style:{visibility:"hidden"}},i.a.createElement("div",null,i.a.createElement("div",{id:"outer",style:{position:"relative",width:"1050px",backgroundColor:"#c1c1c1",transform:"skew(-20deg)",marginLeft:"40px",marginRight:"50px"}},i.a.createElement("p",{style:{color:"#fff",paddingTop:5,paddingBottom:5,transform:"skew(20deg)"},align:"center"}," ","Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 9290 | Jubail 31951 | Kingdom of Saudi Arabia"),i.a.createElement("div",{id:"spacer",style:{width:"200px",height:"10px",marginRight:0}}),i.a.createElement("div",{style:{position:"fixed",bottom:0,width:"100%",height:30,backgroundColor:"#1d2257"}}," ",i.a.createElement("p",{style:{textAlign:"center",color:"white",fontFamily:"Calibri",paddingTop:5,paddingBottom:10,transform:"skew(20deg)"}},"E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa")))))))))}}}]);