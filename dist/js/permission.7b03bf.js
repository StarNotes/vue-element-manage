(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{771:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{defaultRole:"",key:1}},computed:{role:function(){return this.$store.state.account.role},currentRole:{get:function(){return this.role},set:function(e){"管理员"==e?this.$store.commit("setRole","管理员"):this.$store.commit("setRole",this.defaultRole),this.key++}}},created:function(){this.defaultRole=this.role},methods:{handleChange:function(e){}}},r=n(78),l=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("指令权限通过自定义指令来进行DOM级的控制，DOM不渲染，那么需要通过该DOM元素进行的一系列操作当然也就无法进行。")]),e._v(" "),n("br"),e._v(" "),n("div",[e._v("当前角色为："+e._s(e.role))]),e._v(" "),n("br"),e._v(" "),n("span",[e._v("点击切换角色：")]),e._v(" "),n("el-radio-group",{on:{change:e.handleChange},model:{value:e.currentRole,callback:function(t){e.currentRole=t},expression:"currentRole"}},[n("el-radio-button",{attrs:{label:"管理员"}}),e._v(" "),n("el-radio-button",{attrs:{label:e.defaultRole}})],1),e._v(" "),n("div",{key:e.key},[n("br"),e._v(" "),n("p",{directives:[{name:"permission",rawName:"v-permission",value:["管理员"],expression:"['管理员']"}]},[e._v("\n            只有管理员才能看得到，只有管理员才能看得到，只有管理员才能看得到，只有管理员才能看得到，只有管理员才能看得到，只有管理员才能看得到。\n        ")])])],1)},[],!1,null,null,null);l.options.__file="Permission.vue";t.default=l.exports}}]);