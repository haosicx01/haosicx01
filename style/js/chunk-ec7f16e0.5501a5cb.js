(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec7f16e0"],{b0c0:function(t,e,r){"use strict";var n=r("83ab"),i=r("5e77").EXISTS,a=r("e330"),o=r("edd0"),c=Function.prototype,l=a(c.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=a(s.exec),f="name";n&&!i&&o(c,f,{configurable:!0,get:function(){try{return u(s,l(this))[1]}catch(t){return""}}})},b8fa:function(t,e,r){"use strict";r.r(e);r("b0c0");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[t._m(0),e("b-container",{staticClass:"contace_map",attrs:{fluid:"xl"}},[e("baidu-map",{staticClass:"contace_mapBox",attrs:{center:{lng:115.886466,lat:28.65921},zoom:18}},[e("bm-marker",{attrs:{position:{lng:115.886466,lat:28.65921},dragging:!0,animation:"BMAP_ANIMATION_BOUNCE"}},[e("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),e("bm-label",{attrs:{content:"联系盈家律师团队<br/><small>电话：15879010591</small>",labelStyle:{color:"red",fontSize:"24px"},offset:{width:-35,height:30}}})],1)],1)],1),e("b-container",{staticClass:"contace_put",attrs:{fluid:"xl"}},[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":""},attrs:{title:"留下您的电话",tag:"article"}},[e("b-card-text",[t._v(" 让我们专业的律师团队联系您 ")])],1),e("hr"),e("b-form-input",{attrs:{placeholder:"客户留言",value:""},model:{value:t.form.PubTitle,callback:function(e){t.$set(t.form,"PubTitle",e)},expression:"form.PubTitle"}}),e("b-form-input",{attrs:{placeholder:"敬请下尊姓大名我们将严格保证你的隐私"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e("b-form-input",{attrs:{placeholder:"请输入手机号方便我们联系您"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}}),e("b-button",{attrs:{variant:"info btn-block"},on:{click:function(e){return t.submit()}}},[e("i",{staticClass:"zi zi_click"}),t._v(" 点此立即提交您的法务诉求")])],1),e("footer",[e("b-container",{attrs:{fluid:"xl"}},[e("b-row",[e("b-col",{attrs:{md:"4"}},[e("i",{staticClass:"zi zi_phonevolume"}),t._v(" 免费客服热线:(周一至周日 9:00-18:00） 15879010591 ")]),e("b-col",{attrs:{md:"4"}},[e("i",{staticClass:"zi zi_map"}),t._v(" 联系地址：南昌市西湖区洪池路2号汇景国际综合楼3A层 江西朗秋律师事务所 ")]),e("b-col",{attrs:{md:"4"}},[e("b-img",{attrs:{src:r("72b4"),alt:"微信关注我们"}}),t._v(" 微信关注我们 ")],1)],1)],1)],1),e("b-container",{attrs:{fluid:"xl"}},[e("ZoomlaFoot",{attrs:{cols:12,md:12,con:"2020年朗秋团队",icpOpen:!0,icp:"赣ICP备14007249号"}})],1),e("ZoomlaKefu",{attrs:{tel:"15879010591",qq:"405565053",url:"http://tl.lqlawyer.com"}})],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact_banner"},[e("h1",[t._v("盈家，婚姻家事专业律师事务所")]),t._v(" 离婚请谨慎，维权找盈家 ")])}],a=(r("e9c4"),{data:function(){var t={form:{}};return t},metaInfo:{title:"联系我们",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"},{vmid:"description",name:"description",content:"联系盈家律师最快方式"},{vmid:"keywords",name:"keywords",content:"联系唐乐婚姻,家事,离婚,南昌法院,南昌小三案件,南昌夫妻财产"}]},methods:{submit:function(){var t=this;return t.Regex.isEmpty(t.form.name)?(t.util.alert("姓名不能为空"),!1):t.Regex.isMobilePhone(t.form.mobile)?void t.jsp("pub_add&pubid=7",{model:JSON.stringify(t.form)}).then((function(e){if(1!=e.retcode)return t.util.alert(e.retmsg),!1;t.util.alert("加盟代理申请已提交成功,请等待管理员审核")})):(t.util.alert("手机号格式不正确 "),!1)}}}),o=a,c=r("2877"),l=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=l.exports},e267:function(t,e,r){"use strict";var n=r("e330"),i=r("e8b5"),a=r("1626"),o=r("c6b6"),c=r("577e"),l=n([].push);t.exports=function(t){if(a(t))return t;if(i(t)){for(var e=t.length,r=[],n=0;n<e;n++){var s=t[n];"string"==typeof s?l(r,s):"number"!=typeof s&&"Number"!==o(s)&&"String"!==o(s)||l(r,c(s))}var u=r.length,f=!0;return function(t,e){if(f)return f=!1,e;if(i(this))return e;for(var n=0;n<u;n++)if(r[n]===t)return e}}}},e9c4:function(t,e,r){"use strict";var n=r("23e7"),i=r("d066"),a=r("2ba4"),o=r("c65b"),c=r("e330"),l=r("d039"),s=r("1626"),u=r("d9b5"),f=r("f36a"),m=r("e267"),b=r("04f8"),d=String,p=i("JSON","stringify"),v=c(/./.exec),h=c("".charAt),g=c("".charCodeAt),_=c("".replace),x=c(1..toString),y=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,S=!b||l((function(){var t=i("Symbol")("stringify detection");return"[null]"!==p([t])||"{}"!==p({a:t})||"{}"!==p(Object(t))})),k=l((function(){return'"\\udf06\\ud834"'!==p("\udf06\ud834")||'"\\udead"'!==p("\udead")})),F=function(t,e){var r=f(arguments),n=m(e);if(s(n)||void 0!==t&&!u(t))return r[1]=function(t,e){if(s(n)&&(e=o(n,this,d(t),e)),!u(e))return e},a(p,null,r)},O=function(t,e,r){var n=h(r,e-1),i=h(r,e+1);return v(w,t)&&!v(C,i)||v(C,t)&&!v(w,n)?"\\u"+x(g(t,0),16):t};p&&n({target:"JSON",stat:!0,arity:3,forced:S||k},{stringify:function(t,e,r){var n=f(arguments),i=a(S?F:p,null,n);return k&&"string"==typeof i?_(i,y,O):i}})}}]);
//# sourceMappingURL=chunk-ec7f16e0.5501a5cb.js.map