"use strict";(self["webpackChunkmj_h5"]=self["webpackChunkmj_h5"]||[]).push([[576],{3576:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-page"},[e("div",{staticClass:"user"},[e("img",{attrs:{src:t.userInfo.avatar,alt:""}}),e("h3",[t._v(t._s(t.userInfo.username))])]),e("van-grid",{attrs:{"column-num":3,clickable:""}},[e("van-grid-item",{attrs:{icon:"clock-o",text:"历史记录",to:"/"}}),e("van-grid-item",{attrs:{icon:"bookmark-o",text:"我的收藏",to:"/collect"}}),e("van-grid-item",{attrs:{icon:"good-job-o",text:"我的点赞",to:"/like"}})],1),e("van-cell-group",{staticClass:"tip"},[e("van-cell",{attrs:{title:"推荐分享","is-link":""}}),e("van-cell",{attrs:{title:"意见反馈","is-link":""}}),e("van-cell",{attrs:{title:"关于我们","is-link":""}}),e("van-cell",{attrs:{title:"退出登录","is-link":""}})],1)],1)},s=[],a=n(9613),i={name:"UserPage",data(){return{userInfo:{}}},async created(){const t=await(0,a.ug)();this.userInfo=t.data,console.log(t)}},l=i,o=n(1656),c=(0,o.A)(l,r,s,!1,null,"5a8de406",null),u=c.exports},9613:function(t,e,n){n.d(e,{iD:function(){return a},kz:function(){return s},ug:function(){return i}});var r=n(9316);const s=t=>r.A.post("/user/register",t),a=t=>r.A.post("/user/login",t),i=()=>r.A.get("/user/currentUser")}}]);
//# sourceMappingURL=576.42ba993f.js.map