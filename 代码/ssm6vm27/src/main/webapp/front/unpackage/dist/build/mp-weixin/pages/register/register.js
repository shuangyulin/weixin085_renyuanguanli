(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"135e":function(n,e,t){"use strict";(function(n){t("c321");u(t("66fd"));var e=u(t("6b55"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"2df0":function(n,e,t){},3174:function(n,e,t){"use strict";var u;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return u}));var r=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"6b55":function(n,e,t){"use strict";t.r(e);var u=t("3174"),r=t("d8f1");for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t("94a2");var a,o=t("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"83420186",null,!1,u["a"],a);e["default"]=c.exports},"94a2":function(n,e,t){"use strict";var u=t("2df0"),r=t.n(u);r.a},d8f1:function(n,e,t){"use strict";t.r(e);var u=t("fb46"),r=t.n(u);for(var i in u)"default"!==i&&function(n){t.d(e,n,(function(){return u[n]}))}(i);e["default"]=r.a},fb46:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,u,r,i,a){try{var o=n[i](a),c=o.value}catch(s){return void t(s)}o.done?e(c):Promise.resolve(c).then(u,r)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(u,r){var a=n.apply(e,t);function o(n){i(a,u,r,o,c,"next",n)}function c(n){i(a,u,r,o,c,"throw",n)}o(void 0)}))}}var o={data:function(){return{jingwuyuanxingbieOptions:[],jingwuyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=this;return a(u.default.mark((function t(){var r;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],r=n.getStorageSync("loginTable"),e.tableName=r,"jingwuyuan"==e.tableName&&(e.jingwuyuanxingbieOptions="男,女".split(","),e.ruleForm.xingbie=e.jingwuyuanxingbieOptions[0]),e.styleChange();case 5:case"end":return t.stop()}}),t)})))()},methods:{jingwuyuanxingbieChange:function(n){this.jingwuyuanxingbieIndex=n.target.value,this.ruleForm.xingbie=this.jingwuyuanxingbieOptions[this.jingwuyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var n=this;return a(u.default.mark((function e(){return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.jingwuhao||"jingwuyuan"!=n.tableName){e.next=3;break}return n.$utils.msg("警务号不能为空"),e.abrupt("return");case 3:if(n.ruleForm.mima||"jingwuyuan"!=n.tableName){e.next=6;break}return n.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(n.ruleForm.xingming||"jingwuyuan"!=n.tableName){e.next=9;break}return n.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if("jingwuyuan"!=n.tableName||!n.ruleForm.lianxifangshi||n.$validate.isMobile(n.ruleForm.lianxifangshi)){e.next=12;break}return n.$utils.msg("联系方式应输入手机格式"),e.abrupt("return");case 12:return e.next=14,n.$api.register("".concat(n.tableName),n.ruleForm);case 14:n.$utils.msgBack("注册成功");case 16:case"end":return e.stop()}}),e)})))()}}};e.default=o}).call(this,t("543d")["default"])}},[["135e","common/runtime","common/vendor"]]]);