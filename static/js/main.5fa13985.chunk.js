(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(1),i=n.n(s),u=n(2),l=n(5),d=n(6),f=n(8),m=n(7),h=function(t){var e=t.goods;return r.a.createElement("ul",{className:"card py-4 px-6 has-background-light"},e.map((function(t){return r.a.createElement("li",{key:t.id,className:"is-size-4",style:{color:t.color}},t.name)})))},p="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function g(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p).then((function(t){return t.json()}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return g().then((function(t){return t}))}function x(){return g().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)}))})).then((function(t){return t.slice(0,5)}))}function y(){return g().then((function(t){return t.filter((function(t){return"red"===t.color}))}))}n(15),n(16);var k=function(t){var e=t.className,n=t.handleClick,a=t.text;return r.a.createElement("button",{type:"button",className:"button mx-4 ".concat(e),onClick:n},a)},w=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.getAllGoods=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,b();case 3:e.t1=e.sent,e.t2={goods:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),t.getFirstFiveGoods=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,x();case 3:e.t1=e.sent,e.t2={goods:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),t.getRedGoods=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,y();case 3:e.t1=e.sent,e.t2={goods:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.goods;return r.a.createElement("div",{className:"box"},r.a.createElement("h1",{className:"title"},"Dynamic list of Goods"),r.a.createElement("div",{className:"buttons"},r.a.createElement(k,{text:"All goods",handleClick:this.getAllGoods,className:"is-warning"}),r.a.createElement(k,{text:"Five goods",handleClick:this.getFirstFiveGoods,className:"is-warning"}),r.a.createElement(k,{text:"Red goods",handleClick:this.getRedGoods,className:"is-warning"})),t.length>0&&r.a.createElement(h,{goods:t}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.5fa13985.chunk.js.map