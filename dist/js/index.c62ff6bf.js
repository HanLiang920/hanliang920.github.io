(function(){var e={7332:function(e,o,t){"use strict";t.r(o);var n=t(8081),i=t.n(n),a=t(3645),r=t.n(a),l=r()(i());l.push([e.id,".mode-choose[data-v-501391cc]{width:45%;display:flex;font-size:14px}.mode-choose .mode-choose-item[data-v-501391cc]{width:50%;text-align:center;cursor:pointer;height:100%;display:flex;align-items:center;justify-content:center}.mode-choose .mode-choose-item.choose[data-v-501391cc]{background:#141414;border-radius:4vw;color:#1890ff}",""]),o["default"]=l},5251:function(e,o,t){"use strict";t.r(o);var n=t(8081),i=t.n(n),a=t(3645),r=t.n(a),l=r()(i());l.push([e.id,"*{font-family:Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}#app{position:absolute;top:0;bottom:0;right:0;left:0}.chem-3d-header{position:fixed;top:10px;right:0;left:0;height:6vh;color:#e3e3e3;font-size:16px;z-index:1;display:flex;justify-content:space-between;align-items:center;padding:0 10px}.chem-3d-header>div{height:100%;background:#868686;opacity:.8;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:4vw}.ant-drawer-header{padding-top:13px;padding-bottom:13px}.ant-drawer-body{padding:0}",""]),o["default"]=l},6024:function(e,o,t){"use strict";t(2604);var n=t(3162),i=(t(1930),t(3302)),a=(t(2641),t(9963)),r=t(6252),l=t(3577),d=t(2262),u=t(1468);const c={class:"mode-choose"};var s={__name:"modeChoose",props:{mode:String},emits:["update:mode"],setup(e){const{mode:o}=e;return(o,t)=>((0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",{class:(0,l.C_)({"mode-choose-item":!0,choose:"AR"==e.mode}),onClick:t[0]||(t[0]=e=>o.$emit("update:mode","AR"))},"AR",2),(0,r._)("div",{class:(0,l.C_)({"mode-choose-item":!0,choose:"AR"!=e.mode}),onClick:t[1]||(t[1]=e=>o.$emit("update:mode","模型"))},"模型",2)]))}},f=(t(6640),t(3744));const m=(0,f.Z)(s,[["__scopeId","data-v-501391cc"]]);var p=m;const h={class:"chem-3d-header"},v=(0,r._)("div",{style:{width:"14%",height:"0"}},null,-1),w=(0,r.Uk)("VSEPR"),y=(0,r.Uk)("分子"),g={src:"./ar.html",style:{border:"none",width:"100%",height:"100%",position:"absolute",top:"0"}},b={src:"./model.html",style:{border:"none",width:"100%",height:"100%",position:"absolute",top:"0"}};var _={__name:"App",setup(e){const o=(0,d.iH)("AR"),t=(0,d.iH)(!1),n=(0,d.iH)(["2+1"]),i=(0,d.iH)(["VSEPR"]),c=(0,d.iH)([{name:"4+0"},{name:"3+1"},{name:"2+2"},{name:"3+0"},{name:"2+1"},{name:"2"}]),s=(0,d.iH)([{name:"甲烷"},{name:"乙烷"},{name:"丙烷"},{name:"乙烯"},{name:"乙炔"},{name:"苯"}]);return window.currentModel=n,(e,f)=>{const m=(0,r.up)("a-menu-item"),_=(0,r.up)("a-sub-menu"),k=(0,r.up)("a-menu"),x=(0,r.up)("a-drawer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",h,[(0,r._)("div",{style:(0,l.j5)({width:"14%",visibility:"AR"==o.value?"hidden":"visible",cursor:"pointer"}),onClick:f[0]||(f[0]=e=>t.value=!0)},[(0,r.Wm)((0,d.SU)(u.Z))],4),(0,r.Wm)(p,{mode:o.value,"onUpdate:mode":f[1]||(f[1]=e=>o.value=e)},null,8,["mode"]),v]),(0,r.Wm)(x,{visible:t.value,"onUpdate:visible":f[5]||(f[5]=e=>t.value=e),title:"",placement:"left",width:"60%"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,{selectedKeys:n.value,"onUpdate:selectedKeys":f[2]||(f[2]=e=>n.value=e),openKeys:i.value,"onUpdate:openKeys":f[3]||(f[3]=e=>i.value=e),mode:"inline",onClick:f[4]||(f[4]=e=>t.value=!1)},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{key:"VSEPR"},{title:(0,r.w5)((()=>[w])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.value,(e=>((0,r.wg)(),(0,r.j4)(m,{key:e.name},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.name),1)])),_:2},1024)))),128))])),_:1}),(0,r.Wm)(_,{key:"分子"},{title:(0,r.w5)((()=>[y])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.value,(e=>((0,r.wg)(),(0,r.j4)(m,{key:e.name},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.name),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["selectedKeys","openKeys"])])),_:1},8,["visible"]),(0,r.wy)((0,r._)("iframe",g,null,512),[[a.F8,"AR"===o.value]]),(0,r.wy)((0,r._)("iframe",b,null,512),[[a.F8,"模型"===o.value]])],64)}}};t(5762);const k=_;var x=k;const j=(0,a.ri)(x);j.use(n.ZP).use(i.ZP).mount("#app"),window.watchEffect=r.m0},6640:function(e,o,t){var n=t(7332);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var i=t(4402).Z;i("6d5430cc",n,!0,{sourceMap:!1,shadowMode:!1})},5762:function(e,o,t){var n=t(5251);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var i=t(4402).Z;i("77335162",n,!0,{sourceMap:!1,shadowMode:!1})}},o={};function t(n){var i=o[n];if(void 0!==i)return i.exports;var a=o[n]={id:n,loaded:!1,exports:{}};return e[n](a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(o,n,i,a){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],a=e[c][2];for(var l=!0,d=0;d<n.length;d++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](n[d])}))?n.splice(d--,1):(l=!1,a<r&&(r=a));if(l){e.splice(c--,1);var u=i();void 0!==u&&(o=u)}}return o}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,i,a]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.j=826}(),function(){var e={826:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var i,a,r=n[0],l=n[1],d=n[2],u=0;if(r.some((function(o){return 0!==e[o]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(d)var c=d(t)}for(o&&o(n);u<r.length;u++)a=r[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},n=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6024)}));n=t.O(n)})();