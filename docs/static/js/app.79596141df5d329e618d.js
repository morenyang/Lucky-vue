webpackJsonp([1],[function(t,e,n){n(8);var a=n(9)(n(2),n(10),null,null);t.exports=a.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=function t(e,n,a,i){if(!(n.length>=a)){var s=!1;n.map(function(n,l,o){n===e&&(console.log(!1),s=!0,t(Math.floor(Math.random()*a+1),o,a,i))}),s||(i.result=e)}};e.default={name:"app",data:function(){return{flashing:!1,random:1,max:100,result:null,title:"一等奖",list:[]}},methods:{handleFlash:function(){this.flashing=!this.flashing,this.result=this.random;var t=a.a.fetch(),e=this;this.flashing||(i(this.result,t,this.max,e),this.list.push(this.result),t.push(this.result),a.a.save(t))},handleClear:function(){this.list=[],this.result=null},handleClearCache:function(){a.a.clear()}},computed:{display:function(){return this.flashing?this.random:this.result?this.result:"点我开始抽奖"}},beforeMount:function(){var t=this;setInterval(function(){t.random=Math.floor(Math.random()*t.max+1)},100),window.onkeyup=function(){t.flashing&&t.handleFlash()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(0),s=n.n(i);a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:s.a}})},function(t,e,n){"use strict";var a=n(5),i=n.n(a);e.a={fetch:function(){return JSON.parse(window.localStorage.getItem("lucky")||"[]")},save:function(t){window.localStorage.setItem("lucky",i()(t))},clear:function(){window.localStorage.removeItem("lucky")}}},,,,function(t,e){},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("h1",{on:{click:t.handleFlash}},[t._v(t._s(t.display))]),t._v(" "),n("div",{staticClass:"list-layout"},[n("transition-group",{staticClass:"list",attrs:{name:"list",tag:"ul"}},t._l(t.list,function(e){return n("li",{key:e},[t._v(t._s(e))])}))],1)]),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"control-layout"},[n("span",[t._v("输入总人数")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.max,expression:"max"}],domProps:{value:t.max},on:{input:function(e){e.target.composing||(t.max=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"control-layout"},[n("button",{on:{click:t.handleClear}},[t._v("清空")]),t._v(" "),n("button",{on:{click:t.handleClearCache}},[t._v("清空缓存")])])]),t._v(" "),n("span",[t._v("Powered by MorenYANG")])])},staticRenderFns:[]}}],[3]);
//# sourceMappingURL=app.79596141df5d329e618d.js.map