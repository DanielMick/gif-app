(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(14),n(1)),i=n(8);var o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(u.a)(n,2),l=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.trim().length>2&&(t((function(e){return[l].concat(Object(i.a)(e))})),o(""))}},r.a.createElement("h2",null,"Add Category"),r.a.createElement("input",{type:"text",value:l,onChange:function(e){o(e.target.value)},placeholder:"Agrega una categoria"}))},m=function(e){var t=e.item;return r.a.createElement("div",{className:"card animate__fadeInDown"},r.a.createElement("img",{src:t.url,alt:t.title}),r.a.createElement("p",null,t.title," "))},s=n(4),p=n.n(s),d=n(7),f=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r,c,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=JQxbSR8LpEUZPt7yWnVneZYci7rGDK5y"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,l=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null," ",t," "),l&&r.a.createElement("p",null,"Cargando..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(m,{key:e.id,item:e})}))))},E=function(){var e=Object(a.useState)(["malcolm"]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Gif App"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8ffd254a.chunk.js.map