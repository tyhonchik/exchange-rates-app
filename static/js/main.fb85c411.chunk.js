(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,r){},107:function(e,t,r){},158:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(11),l=r.n(c),i=(r(101),r(13)),u=r(36),o=r(79),s=r(55),d=r(42),m=r(29),p=r(23),y="FETCH_CURRENCIES",h="FETCH_CURRENCIES_SUCCESS",f="FETCH_CURRENCIES_FAILURE",b="ADD_CURRENCY",E="FETCH_CURRENCY",C="FETCH_CURRENCY_SUCCESS",g="FETCH_CURRENCY_FAILURE",O="RESET_ACTIVE_CURRENCY",j="DELETE_POST",v="https://thingproxy.freeboard.io/fetch/",T="https://cash.rbc.ru/cash/json/cash_currencies/",w="https://cash.rbc.ru/cash/json/cash_rates/?city=1&currency=";function L(e){return{type:f,payload:e}}function k(e){return{type:g,payload:e}}function S(e){return{type:b,payload:e}}var R,x={myCurrencies:{currencies:[]},currencyList:{currencies:[],error:null,loading:!1},activeCurrency:{currency:null,error:null,loading:!1}},F=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case y:return Object(p.a)({},t,{currencyList:{currencies:[],error:null,loading:!0}});case h:return Object(p.a)({},t,{currencyList:{currencies:r.payload,error:null,loading:!1}});case f:return e=r.payload||{message:r.payload.message},Object(p.a)({},t,{currencyList:{currencies:[],error:e,loading:!1}});case E:return Object(p.a)({},t,{activeCurrency:Object(p.a)({},t.activeCurrency,{loading:!0})});case C:return Object(p.a)({},t,{activeCurrency:{currency:r.payload,error:null,loading:!1}});case g:return e=r.payload||{message:r.payload.message},Object(p.a)({},t,{activeCurrency:{currency:null,error:e,loading:!1}});case O:return Object(p.a)({},t,{activeCurrency:{currency:null,error:null,loading:!1}});case b:var n=Object(p.a)({},t.myCurrencies);return n.currencies.filter(function(e){return e.id===r.payload.id}).length<=0&&n.currencies.push(r.payload),Object(p.a)({},t,{myCurrencies:Object(p.a)({},n)});case j:var a=Object(p.a)({},t.myCurrencies);return null!=a.currencies&&(a.currencies=a.currencies.filter(function(e){return e.id!==parseInt(r.payload,10)})),Object(p.a)({},t,{myCurrencies:Object(p.a)({},a)});default:return t}},H=Object(d.a)({basename:"/exchange-rates-app"}),I=[o.a,Object(s.a)(H)],N=m.d.apply(void 0,[m.a.apply(void 0,I)].concat([])),_=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),M=Object(m.e)((R=H,Object(m.c)({currs:F,router:Object(u.b)(R)})),_,N);M.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(r){}}(M.getState())});var D=M,U=r(17),A=r(18),B=r(21),P=r(19),V=r(20),q=(r(107),function(e){return e.children}),Y=r(165),J=r(162),X=r(161),K={width:"100%",height:"100%",borderRadius:"0px"},W=function(e){return a.a.createElement(X.a,{to:"/info/"+e.currId,style:{textDecoration:"none"}},a.a.createElement(J.a,{interactive:!0,style:K},a.a.createElement("h5",null,e.title),a.a.createElement("small",{style:{textDecoration:"none",color:"#333"}}," ",e.country?"\u0421\u0442\u0440\u0430\u043d\u0430: "+e.country:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0430\u043b\u044e\u0442\u0430")))},z=r(163),G=r(31),Q=r(164),Z=r(91),$=function(e){function t(){var e,r;Object(U.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(r=Object(B.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(c)))).renderCurrency=function(e,t){var r=t.handleClick,n=t.modifiers;t.query;if(!n.matchesPredicate)return null;var c=e.name;return a.a.createElement(Z.a,{active:n.active,label:e.country,key:e.id,onClick:r,text:c})},r.filterCurrency=function(e,t){return"".concat(t.name.toLowerCase()," ").concat(t.country?t.country.toLowerCase():"").indexOf(e.toLowerCase())>=0},r.renderInputValue=function(e){return e.name},r.handleValueChange=function(e){return r.props.addCurrency(e)},r}return Object(V.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return a.a.createElement(Q.a,{itemPredicate:this.filterCurrency,itemRenderer:this.renderCurrency,items:Object(G.a)(this.props.currencyList),noResults:a.a.createElement(Z.a,{disabled:!0,text:"\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u044b"}),inputValueRenderer:this.renderInputValue,onItemSelect:this.handleValueChange,popoverProps:{popoverClassName:"popover-list"},inputProps:{placeholder:"\u041a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0430"}})}}]),t}(n.Component),ee=Object(i.c)(function(e){return{currencyList:e.currs.currencyList.currencies,loading:e.currs.currencyList.loading,error:e.currs.currencyList.error}},function(e){return{addCurrency:function(t){return e(S(t))}}})($),te=function(e){function t(){return Object(U.a)(this,t),Object(B.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){if(null===this.props.myCurrencies.currencies||0===this.props.myCurrencies.currencies.length){var e=a.a.createElement(ee,this.props);return a.a.createElement(z.a,{style:{marginTop:"80px"},title:"\u0412\u0430\u0448 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0430\u043b\u044e\u0442 \u043f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \ud83d\udc47",visual:"geosearch",action:e,className:"NonIdealState"})}return a.a.createElement("div",{style:{width:"47vw",margin:"55px auto"}},a.a.createElement("div",{className:"currencyList"},this.props.myCurrencies.currencies.map(function(e){return a.a.createElement(W,{key:e.id,title:e.name,country:e.country,currId:e.id})})))}}]),t}(n.Component),re=Object(i.c)(function(e){return{myCurrencies:e.currs.myCurrencies}},null)(te),ne=r(166),ae=r(16),ce=function(e){function t(){return Object(U.a)(this,t),Object(B.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this,t=null,r=Object(G.a)(this.props.currencyList);null!=r&&r.length>0&&(t=r.filter(function(t){return t.id===parseInt(e.props.currencyId,10)})[0]);var n=null;return null!=t&&(n=this.props.myCurrencies.filter(function(e){return e.id===parseInt(t.id,10)}).length<=0?a.a.createElement(ne.a,{className:"pt-minimal",icon:"plus",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u0443 \u0432\u0430\u043b\u044e\u0442\u0443 \u0441\u0435\u0431\u0435 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a",onClick:function(){return e.props.addCurrency(t)}}):a.a.createElement(ne.a,{className:"pt-minimal",icon:"delete",text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u043e\u0438\u0445 \u0432\u0430\u043b\u044e\u0442",onClick:function(){return e.props.deleteCurrency(e.props.currencyId)}})),n}}]),t}(n.Component),le=Object(i.c)(function(e,t){return{currencyId:t.match.params.id,currencyList:e.currs.currencyList.currencies,myCurrencies:e.currs.myCurrencies.currencies}},function(e){return{deleteCurrency:function(t){e(function(e){return{type:j,payload:e}}(t)),e(Object(ae.d)("/"))},addCurrency:function(t){e(S(t)),e(Object(ae.d)("/"))}}})(ce),ie=r(86),ue=r(167),oe=r(88),se=r(33),de=r(89),me=function(e){function t(){var e,r;Object(U.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(B.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(a)))).renderRedirect=function(){localStorage.clear(),r.props.history.go("/")},r}return Object(V.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=null,t=!!window.opr&&!!window.opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,r="undefined"!==typeof InstallTrigger,n=!!!document.documentMode&&!!window.StyleMedia,c=!!window.chrome&&!!window.chrome.webstore,l=a.a.createElement(ie.a,{content:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c localStorage"},a.a.createElement(ne.a,{onClick:this.renderRedirect,minimal:"true",icon:"trash"}));switch(c||t||n||r||(l=null),this.props.pageType){case"home":e=a.a.createElement(ue.a,null,a.a.createElement(oe.a,{align:se.a.LEFT},a.a.createElement(de.a,null,"\u041c\u043e\u0438 \u0432\u0430\u043b\u044e\u0442\u044b"),l),a.a.createElement(oe.a,{align:se.a.RIGHT},this.props.myCurrencies>0?a.a.createElement(q,null,a.a.createElement("span",null,"\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0430\u043b\u044e\u0442\u0443"," ",a.a.createElement("span",{role:"img","aria-label":"right"},"\ud83d\udc49")," "),a.a.createElement(ee,this.props)):""));break;case"info":e=a.a.createElement(ue.a,null,a.a.createElement(oe.a,{align:se.a.LEFT},a.a.createElement(X.a,{to:"/"},a.a.createElement(ne.a,{className:"pt-minimal",icon:"arrow-left",text:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0441\u043f\u0438\u0441\u043a\u0443"})),l),a.a.createElement(oe.a,{align:se.a.RIGHT},a.a.createElement(le,this.props)));break;default:e=a.a.createElement(ue.a,null,a.a.createElement(oe.a,{align:se.a.LEFT},a.a.createElement(de.a,null,"\u041c\u043e\u0438 \u0432\u0430\u043b\u044e\u0442\u044b | default"),a.a.createElement(ie.a,{content:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c localStorage"},a.a.createElement(ne.a,{onClick:this.renderRedirect,minimal:"true",icon:"trash"}))))}return e}}]),t}(n.PureComponent),pe=Object(i.c)(function(e){return{myCurrencies:e.currs.myCurrencies.currencies.length,currencyList:e.currs.currencyList.currencies,loading:e.currs.currencyList.loading,error:e.currs.currencyList.error}},function(e){return{fetchData:function(){return e(function(){console.log("azaz");var e=fetch(v+T,{headers:{"Access-Control-Allow-Origin":"*","X-Requested-With":"XMLHttpRequest","Content-Type":"application/json",Origin:"*"}});return{type:y,payload:e}}()).payload.then(function(t){if(!t.ok)throw e(L(t.statusText)),Error(t.statusText);return t}).then(function(e){return e.json()}).then(function(t){return e({type:h,payload:t})}).catch(function(t){return e(L(t))})}}})(me),ye=function(e){function t(){return Object(U.a)(this,t),Object(B.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return a.a.createElement(q,null,a.a.createElement("header",null,a.a.createElement(pe,Object.assign({pageType:"home"},this.props))),a.a.createElement("main",null,a.a.createElement(re,null)))}}]),t}(n.Component),he=r(87),fe=r(9),be={width:"100%",padding:"50px"},Ee=function(e){function t(){return Object(U.a)(this,t),Object(B.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(A.a)(t,[{key:"componentWillUnmount",value:function(){this.props.resetMe()}},{key:"getTime",value:function(){Date.prototype.timeNow=function(){return(this.getHours()<10?"0":"")+this.getHours()+":"+(this.getMinutes()<10?"0":"")+this.getMinutes()+":"+(this.getSeconds()<10?"0":"")+this.getSeconds()}}},{key:"render",value:function(){var e=this;this.getTime();var t=this.props.activeCurrency,r=t.currency,n=t.loading,c=t.error,l=Object(G.a)(this.props.currencyList).filter(function(t){return t.id===parseInt(e.props.currencyId,10)})[0];if(c)return a.a.createElement(z.a,{style:{marginTop:"80px"},title:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 :(",description:c?c.message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",visual:"error",className:"NonIdealState"});var i=a.a.createElement(fe.BootstrapTable,{striped:!0,hover:!0,options:{noDataText:"..."}},a.a.createElement(fe.TableHeaderColumn,{isKey:!0,dataField:"name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u041c\u0435\u0442\u0440\u043e"));if(null!=r){if(n)return a.a.createElement(he.a,{className:"spinner-custom"});if(!l&&!n)return a.a.createElement(z.a,{style:{marginTop:"80px"},title:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u0439 \u0412\u0430\u043c\u0438 \u0432\u0430\u043b\u044e\u0442\u044b \u043d\u0435\u0442  \xaf\\_(\u30c4)_/\xaf",visual:"heart-broken",className:"NonIdealState"});if(null!=r.banks&&r.banks.length>0){var u=r.banks.filter(function(e){return null!=e.rate.buy}).map(function(e){return parseFloat(e.rate.buy)}),o=r.banks.filter(function(e){return null!=e.rate.sell}).map(function(e){return parseFloat(e.rate.sell)});u.length>0&&(l.maxBuy=Math.max.apply(Math,Object(G.a)(u))),o.length>0&&(l.minSell=Math.min.apply(Math,Object(G.a)(o)));var s=r.banks.map(function(e){return{name:e.name,rateBuy:e.rate.buy,rateSell:e.rate.sell,pubTime:new Date(e.dt_last_published).timeNow(),phone:e.phone,metro:e.metro&&e.metro[0]&&e.metro[0][0]?e.metro[0][0]:"-"}});i=a.a.createElement(fe.BootstrapTable,{data:s,striped:!0,hover:!0},a.a.createElement(fe.TableHeaderColumn,{isKey:!0,dataField:"name",tdStyle:{whiteSpace:"normal"},width:"230px"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),a.a.createElement(fe.TableHeaderColumn,{dataField:"rateBuy",width:"120"},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"),a.a.createElement(fe.TableHeaderColumn,{dataField:"rateSell",width:"120"},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"),a.a.createElement(fe.TableHeaderColumn,{dataField:"pubTime",width:"120"},"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),a.a.createElement(fe.TableHeaderColumn,{dataField:"phone",width:"150"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),a.a.createElement(fe.TableHeaderColumn,{dataField:"metro",tdStyle:{whiteSpace:"normal"},width:"180"},"\u041c\u0435\u0442\u0440\u043e"))}else i=a.a.createElement(fe.BootstrapTable,{striped:!0,hover:!0,options:{noDataText:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0443\u0440\u0441\u043e\u0432 \u043f\u0443\u0441\u0442.\r\n \u0416\u0434\u0435\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0442 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \ud83e\udd1e"}},a.a.createElement(fe.TableHeaderColumn,{isKey:!0,dataField:"name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),a.a.createElement(fe.TableHeaderColumn,{dataField:""},"\u041c\u0435\u0442\u0440\u043e"))}else if(!n)return a.a.createElement(z.a,{style:{marginTop:"80px"},title:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u0439 \u0412\u0430\u043c\u0438 \u0432\u0430\u043b\u044e\u0442\u044b \u043d\u0435\u0442  \xaf\\_(\u30c4)_/\xaf",visual:"heart-broken",className:"NonIdealState"});return a.a.createElement(q,null,a.a.createElement("div",{style:be},a.a.createElement("h1",{className:n?"pt-skeleton":"",style:{display:"inline-block"}},n?"Loading":l?l.name:"---"),"   ",a.a.createElement("small",{className:n?"pt-skeleton":""},l&&l.country?l.country:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0430\u043b\u044e\u0442\u0430"),a.a.createElement("br",null),a.a.createElement("h6",{className:n?"pt-skeleton":"",style:{display:"table"}},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430 (\u043c\u0430\u043a\u0441.):"," ",n?"Loading":l&&l.maxBuy?l.maxBuy:"---"," ","\u0440\u0443\u0431."),a.a.createElement("h6",{className:n?"pt-skeleton":"",style:{display:"table"}},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430 (\u043c\u0438\u043d.):"," ",n?"Loading":l&&l.minSell?l.minSell:"---"," ","\u0440\u0443\u0431."),a.a.createElement("div",{style:{marginTop:"50px"}},i)))}}]),t}(n.PureComponent),Ce=Object(i.c)(function(e,t){return{activeCurrency:e.currs.activeCurrency,currencyId:t.match.params.id,currencyList:e.currs.currencyList.currencies,loading:e.currs.currencyList.loading,error:e.currs.currencyList.error}},function(e){return{resetMe:function(){e({type:O})}}})(Ee),ge=function(e){function t(){return Object(U.a)(this,t),Object(B.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCurrency(this.props.match.params.id)}},{key:"render",value:function(){return a.a.createElement(q,null,a.a.createElement("header",null,a.a.createElement(pe,Object.assign({pageType:"info"},this.props))),a.a.createElement("main",null,a.a.createElement(Ce,this.props)))}}]),t}(n.Component),Oe=Object(i.c)(function(e){return{currencyList:e.currs.currencyList.currencies,loading:e.currs.currencyList.loading,error:e.currs.currencyList.error}},function(e){return{fetchCurrency:function(t){e(function(e){var t=fetch(v+w+e,{headers:{"Access-Control-Allow-Origin":"*","X-Requested-With":"XMLHttpRequest","Content-Type":"application/json",Origin:"https://tyhonchik.github.io"}});return{type:E,payload:t}}(t)).payload.then(function(t){if(!t.ok)throw e(k(t.statusText)),Error(t.statusText);return t}).then(function(e){return e.json()}).then(function(t){return e({type:C,payload:t})}).catch(function(t){return e(k(t))})}}})(ge),je=function(e){function t(){return Object(U.a)(this,t),Object(B.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return a.a.createElement(q,null,a.a.createElement(Y.a,{exact:!0,path:"/",component:ye}),a.a.createElement(Y.a,{path:"/info/:id?",component:Oe}))}}]),t}(n.Component);l.a.render(a.a.createElement(i.a,{store:D},a.a.createElement(u.a,{history:H},a.a.createElement("div",null,a.a.createElement(je,null)))),document.getElementById("root"))},96:function(e,t,r){e.exports=r(158)}},[[96,1,2]]]);
//# sourceMappingURL=main.fb85c411.chunk.js.map