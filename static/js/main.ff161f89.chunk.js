(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,r){e.exports=r(184)},110:function(e,t,r){},134:function(e,t,r){},184:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(11),l=r.n(c),i=(r(110),r(13)),u=r(37),o=r(88),s=r(64),m=r(43),d=r(30),p=r(23),y=r(53),h=r.n(y),b="FETCH_CURRENCIES",f="FETCH_CURRENCIES_SUCCESS",E="FETCH_CURRENCIES_FAILURE",C="ADD_CURRENCY",g="FETCH_CURRENCY",O="FETCH_CURRENCY_SUCCESS",j="FETCH_CURRENCY_FAILURE",v="RESET_ACTIVE_CURRENCY",T="DELETE_POST",w="https://thingproxy.freeboard.io/fetch/",L="https://cash.rbc.ru/cash/json/cash_currencies/",k="https://cash.rbc.ru/cash/json/cash_rates/?city=1&currency=";function S(e){return{type:C,payload:e}}var F,I={myCurrencies:{currencies:[]},currencyList:{currencies:[],error:null,loading:!1},activeCurrency:{currency:null,error:null,loading:!1}},N=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case b:return Object(p.a)({},t,{currencyList:{currencies:[],error:null,loading:!0}});case f:return Object(p.a)({},t,{currencyList:{currencies:r.payload,error:null,loading:!1}});case E:return e=r.payload||{message:r.payload.message},Object(p.a)({},t,{currencyList:{currencies:[],error:e,loading:!1}});case g:return Object(p.a)({},t,{activeCurrency:Object(p.a)({},t.activeCurrency,{loading:!0})});case O:return Object(p.a)({},t,{activeCurrency:{currency:r.payload,error:null,loading:!1}});case j:return e=r.payload||{message:r.payload.message},Object(p.a)({},t,{activeCurrency:{currency:null,error:e,loading:!1}});case v:return Object(p.a)({},t,{activeCurrency:{currency:null,error:null,loading:!1}});case C:var n=Object(p.a)({},t.myCurrencies);return n.currencies.filter(function(e){return e.id===r.payload.id}).length<=0&&n.currencies.push(r.payload),Object(p.a)({},t,{myCurrencies:Object(p.a)({},n)});case T:var a=Object(p.a)({},t.myCurrencies);return null!=a.currencies&&(a.currencies=a.currencies.filter(function(e){return e.id!==parseInt(r.payload,10)})),Object(p.a)({},t,{myCurrencies:Object(p.a)({},a)});default:return t}},R=Object(m.a)({basename:"/exchange-rates-app"}),x=[o.a,Object(s.a)(R)],H=d.d.apply(void 0,[d.a.apply(void 0,x)].concat([])),_=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),D=Object(d.e)((F=R,Object(d.c)({currs:N,router:Object(u.b)(F)})),_,H);D.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(r){}}(D.getState())});var U=D,M=r(17),B=r(18),P=r(21),A=r(19),V=r(20),Y=(r(134),function(e){return e.children}),J=r(191),K=r(188),z=r(187),G={width:"100%",height:"100%",borderRadius:"0px"},q=function(e){return a.a.createElement(z.a,{to:"/info/"+e.currId,style:{textDecoration:"none"}},a.a.createElement(K.a,{interactive:!0,style:G},a.a.createElement("h5",null,e.title),a.a.createElement("small",{style:{textDecoration:"none",color:"#333"}}," ",e.country?"\u0421\u0442\u0440\u0430\u043d\u0430: "+e.country:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0430\u043b\u044e\u0442\u0430")))},W=r(189),Q=r(32),X=r(190),Z=r(100),$=function(e){function t(){var e,r;Object(M.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(r=Object(P.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(c)))).renderCurrency=function(e,t){var r=t.handleClick,n=t.modifiers;t.query;if(!n.matchesPredicate)return null;var c=e.name;return a.a.createElement(Z.a,{active:n.active,label:e.country,key:e.id,onClick:r,text:c})},r.filterCurrency=function(e,t){return"".concat(t.name.toLowerCase()," ").concat(t.country?t.country.toLowerCase():"").indexOf(e.toLowerCase())>=0},r.renderInputValue=function(e){return e.name},r.handleValueChange=function(e){return r.props.addCurrency(e)},r}return Object(V.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return a.a.createElement(X.a,{itemPredicate:this.filterCurrency,itemRenderer:this.renderCurrency,items:Object(Q.a)(this.props.currencyList),noResults:a.a.createElement(Z.a,{disabled:!0,text:"\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u044b"}),inputValueRenderer:this.renderInputValue,onItemSelect:this.handleValueChange,popoverProps:{popoverClassName:"popover-list"},inputProps:{placeholder:"\u041a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0430"}})}}]),t}(n.Component),ee=Object(i.c)(function(e){return{currencyList:e.currs.currencyList.currencies,loading:e.currs.currencyList.loading,error:e.currs.currencyList.error}},function(e){return{addCurrency:function(t){return e(S(t))}}})($),te=function(e){function t(){return Object(M.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){if(null===this.props.myCurrencies.currencies||0===this.props.myCurrencies.currencies.length){var e=a.a.createElement(ee,this.props);return a.a.createElement(W.a,{style:{marginTop:"80px"},title:"\u0412\u0430\u0448 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0430\u043b\u044e\u0442 \u043f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \ud83d\udc47",visual:"geosearch",action:e,className:"NonIdealState"})}return a.a.createElement("div",{style:{width:"47vw",margin:"55px auto"}},a.a.createElement("div",{className:"currencyList"},this.props.myCurrencies.currencies.map(function(e){return a.a.createElement(q,{key:e.id,title:e.name,country:e.country,currId:e.id})})))}}]),t}(n.Component),re=Object(i.c)(function(e){return{myCurrencies:e.currs.myCurrencies}},null)(te),ne=r(192),ae=r(16),ce=function(e){function t(){return Object(M.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this,t=null,r=Object(Q.a)(this.props.currencyList);null!=r&&r.length>0&&(t=r.filter(function(t){return t.id===parseInt(e.props.currencyId,10)})[0]);var n=null;return null!=t&&(n=this.props.myCurrencies.filter(function(e){return e.id===parseInt(t.id,10)}).length<=0?a.a.createElement(ne.a,{className:"pt-minimal",icon:"plus",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u0443 \u0432\u0430\u043b\u044e\u0442\u0443 \u0441\u0435\u0431\u0435 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a",onClick:function(){return e.props.addCurrency(t)}}):a.a.createElement(ne.a,{className:"pt-minimal",icon:"delete",text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u043e\u0438\u0445 \u0432\u0430\u043b\u044e\u0442",onClick:function(){return e.props.deleteCurrency(e.props.currencyId)}})),n}}]),t}(n.Component),le=Object(i.c)(function(e,t){return{currencyId:t.match.params.id,currencyList:e.currs.currencyList.currencies,myCurrencies:e.currs.myCurrencies.currencies}},function(e){return{deleteCurrency:function(t){e(function(e){return{type:T,payload:e}}(t)),e(Object(ae.d)("/"))},addCurrency:function(t){e(S(t)),e(Object(ae.d)("/"))}}})(ce),ie=r(95),ue=r(193),oe=r(97),se=r(34),me=r(98),de=function(e){function t(){var e,r;Object(M.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(P.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(a)))).renderRedirect=function(){localStorage.clear(),r.props.history.go("/")},r}return Object(V.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=null,t=!!window.opr&&!!window.opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,r="undefined"!==typeof InstallTrigger,n=!!!document.documentMode&&!!window.StyleMedia,c=!!window.chrome&&!!window.chrome.webstore,l=a.a.createElement(ie.a,{content:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c localStorage"},a.a.createElement(ne.a,{onClick:this.renderRedirect,minimal:"true",icon:"trash"}));switch(c||t||n||r||(l=null),this.props.pageType){case"home":e=a.a.createElement(ue.a,null,a.a.createElement(oe.a,{align:se.a.LEFT},a.a.createElement(me.a,null,"\u041c\u043e\u0438 \u0432\u0430\u043b\u044e\u0442\u044b"),l),a.a.createElement(oe.a,{align:se.a.RIGHT},this.props.myCurrencies>0?a.a.createElement(Y,null,a.a.createElement("span",null,"\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0430\u043b\u044e\u0442\u0443"," ",a.a.createElement("span",{role:"img","aria-label":"right"},"\ud83d\udc49")," "),a.a.createElement(ee,this.props)):""));break;case"info":e=a.a.createElement(ue.a,null,a.a.createElement(oe.a,{align:se.a.LEFT},a.a.createElement(z.a,{to:"/"},a.a.createElement(ne.a,{className:"pt-minimal",icon:"arrow-left",text:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0441\u043f\u0438\u0441\u043a\u0443"})),l),a.a.createElement(oe.a,{align:se.a.RIGHT},a.a.createElement(le,this.props)));break;default:e=a.a.createElement(ue.a,null,a.a.createElement(oe.a,{align:se.a.LEFT},a.a.createElement(me.a,null,"\u041c\u043e\u0438 \u0432\u0430\u043b\u044e\u0442\u044b | default"),a.a.createElement(ie.a,{content:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c localStorage"},a.a.createElement(ne.a,{onClick:this.renderRedirect,minimal:"true",icon:"trash"}))))}return e}}]),t}(n.PureComponent),pe=Object(i.c)(function(e){return{myCurrencies:e.currs.myCurrencies.currencies.length,currencyList:e.currs.currencyList.currencies,loading:e.currs.currencyList.loading,error:e.currs.currencyList.error}},function(e){return{fetchData:function(){return e(function(){console.log("azaz11");var e=h.a.get(w+L);return{type:b,payload:e}}()).payload.then(function(e){return e.data}).then(function(t){return console.log(t),e({type:f,payload:t})}).catch(function(t){return e(function(e){return{type:E,payload:e}}(t))})}}})(de),ye=function(e){function t(){return Object(M.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return a.a.createElement(Y,null,a.a.createElement("header",null,a.a.createElement(pe,Object.assign({pageType:"home"},this.props))),a.a.createElement("main",null,a.a.createElement(re,null)))}}]),t}(n.Component),he=r(96),be=r(9),fe={width:"100%",padding:"50px"},Ee=function(e){function t(){return Object(M.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(B.a)(t,[{key:"componentWillUnmount",value:function(){this.props.resetMe()}},{key:"getTime",value:function(){Date.prototype.timeNow=function(){return(this.getHours()<10?"0":"")+this.getHours()+":"+(this.getMinutes()<10?"0":"")+this.getMinutes()+":"+(this.getSeconds()<10?"0":"")+this.getSeconds()}}},{key:"render",value:function(){var e=this;this.getTime();var t=this.props.activeCurrency,r=t.currency,n=t.loading,c=t.error,l=Object(Q.a)(this.props.currencyList).filter(function(t){return t.id===parseInt(e.props.currencyId,10)})[0];if(c)return a.a.createElement(W.a,{style:{marginTop:"80px"},title:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 :(",description:c?c.message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",visual:"error",className:"NonIdealState"});var i=a.a.createElement(be.BootstrapTable,{striped:!0,hover:!0,options:{noDataText:"..."}},a.a.createElement(be.TableHeaderColumn,{isKey:!0,dataField:"name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u041c\u0435\u0442\u0440\u043e"));if(null!=r){if(n)return a.a.createElement(he.a,{className:"spinner-custom"});if(!l&&!n)return a.a.createElement(W.a,{style:{marginTop:"80px"},title:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u0439 \u0412\u0430\u043c\u0438 \u0432\u0430\u043b\u044e\u0442\u044b \u043d\u0435\u0442  \xaf\\_(\u30c4)_/\xaf",visual:"heart-broken",className:"NonIdealState"});if(null!=r.banks&&r.banks.length>0){var u=r.banks.filter(function(e){return null!=e.rate.buy}).map(function(e){return parseFloat(e.rate.buy)}),o=r.banks.filter(function(e){return null!=e.rate.sell}).map(function(e){return parseFloat(e.rate.sell)});u.length>0&&(l.maxBuy=Math.max.apply(Math,Object(Q.a)(u))),o.length>0&&(l.minSell=Math.min.apply(Math,Object(Q.a)(o)));var s=r.banks.map(function(e){return{name:e.name,rateBuy:e.rate.buy,rateSell:e.rate.sell,pubTime:new Date(e.dt_last_published).timeNow(),phone:e.phone,metro:e.metro&&e.metro[0]&&e.metro[0][0]?e.metro[0][0]:"-"}});i=a.a.createElement(be.BootstrapTable,{data:s,striped:!0,hover:!0},a.a.createElement(be.TableHeaderColumn,{isKey:!0,dataField:"name",tdStyle:{whiteSpace:"normal"},width:"230px"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),a.a.createElement(be.TableHeaderColumn,{dataField:"rateBuy",width:"120"},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"),a.a.createElement(be.TableHeaderColumn,{dataField:"rateSell",width:"120"},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"),a.a.createElement(be.TableHeaderColumn,{dataField:"pubTime",width:"120"},"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),a.a.createElement(be.TableHeaderColumn,{dataField:"phone",width:"150"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),a.a.createElement(be.TableHeaderColumn,{dataField:"metro",tdStyle:{whiteSpace:"normal"},width:"180"},"\u041c\u0435\u0442\u0440\u043e"))}else i=a.a.createElement(be.BootstrapTable,{striped:!0,hover:!0,options:{noDataText:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0443\u0440\u0441\u043e\u0432 \u043f\u0443\u0441\u0442.\r\n \u0416\u0434\u0435\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0442 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \ud83e\udd1e"}},a.a.createElement(be.TableHeaderColumn,{isKey:!0,dataField:"name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),a.a.createElement(be.TableHeaderColumn,{dataField:""},"\u041c\u0435\u0442\u0440\u043e"))}else if(!n)return a.a.createElement(W.a,{style:{marginTop:"80px"},title:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u0439 \u0412\u0430\u043c\u0438 \u0432\u0430\u043b\u044e\u0442\u044b \u043d\u0435\u0442  \xaf\\_(\u30c4)_/\xaf",visual:"heart-broken",className:"NonIdealState"});return a.a.createElement(Y,null,a.a.createElement("div",{style:fe},a.a.createElement("h1",{className:n?"pt-skeleton":"",style:{display:"inline-block"}},n?"Loading":l?l.name:"---"),"   ",a.a.createElement("small",{className:n?"pt-skeleton":""},l&&l.country?l.country:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0430\u043b\u044e\u0442\u0430"),a.a.createElement("br",null),a.a.createElement("h6",{className:n?"pt-skeleton":"",style:{display:"table"}},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430 (\u043c\u0430\u043a\u0441.):"," ",n?"Loading":l&&l.maxBuy?l.maxBuy:"---"," ","\u0440\u0443\u0431."),a.a.createElement("h6",{className:n?"pt-skeleton":"",style:{display:"table"}},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430 (\u043c\u0438\u043d.):"," ",n?"Loading":l&&l.minSell?l.minSell:"---"," ","\u0440\u0443\u0431."),a.a.createElement("div",{style:{marginTop:"50px"}},i)))}}]),t}(n.PureComponent),Ce=Object(i.c)(function(e,t){return{activeCurrency:e.currs.activeCurrency,currencyId:t.match.params.id,currencyList:e.currs.currencyList.currencies,loading:e.currs.currencyList.loading,error:e.currs.currencyList.error}},function(e){return{resetMe:function(){e({type:v})}}})(Ee),ge=function(e){function t(){return Object(M.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCurrency(this.props.match.params.id)}},{key:"render",value:function(){return a.a.createElement(Y,null,a.a.createElement("header",null,a.a.createElement(pe,Object.assign({pageType:"info"},this.props))),a.a.createElement("main",null,a.a.createElement(Ce,this.props)))}}]),t}(n.Component),Oe=Object(i.c)(function(e){return{currencyList:e.currs.currencyList.currencies,loading:e.currs.currencyList.loading,error:e.currs.currencyList.error}},function(e){return{fetchCurrency:function(t){e(function(e){var t=h.a.get(w+k+e);return{type:g,payload:t}}(t)).payload.then(function(e){return e.data}).then(function(t){return e({type:O,payload:t})}).catch(function(t){return e(function(e){return{type:j,payload:e}}(t))})}}})(ge),je=function(e){function t(){return Object(M.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return a.a.createElement(Y,null,a.a.createElement(J.a,{exact:!0,path:"/",component:ye}),a.a.createElement(J.a,{path:"/info/:id?",component:Oe}))}}]),t}(n.Component);l.a.render(a.a.createElement(i.a,{store:U},a.a.createElement(u.a,{history:R},a.a.createElement("div",null,a.a.createElement(je,null)))),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.ff161f89.chunk.js.map