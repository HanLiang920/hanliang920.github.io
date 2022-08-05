(function(){var e={8088:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),i=n(3645),l=n.n(i),d=l()(o());d.push([e.id,".base-name[data-v-38aa6309]{font-style:italic}",""]),t["default"]=d},547:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),i=n(3645),l=n.n(i),d=l()(o());d.push([e.id,".mode-choose[data-v-0cde4147]{width:45%;display:flex;font-size:14px}.mode-choose .mode-choose-item[data-v-0cde4147]{width:50%;text-align:center;cursor:pointer;height:100%;display:flex;align-items:center;justify-content:center}.mode-choose .mode-choose-item.choose[data-v-0cde4147]{background:#141414;border-radius:15px;color:#1890ff}",""]),t["default"]=d},8876:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),i=n(3645),l=n.n(i),d=l()(o());d.push([e.id,".app{position:absolute;top:0;bottom:0;right:0;left:0}.chem-3d-header{position:fixed;top:10px;right:0;left:0;height:45px;color:#e3e3e3;font-size:16px;font-weight:500;z-index:1;display:flex;justify-content:space-between;align-items:center;padding:0 10px}.chem-3d-header>div{height:100%;background:#868686;opacity:.8;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:15px}.ant-drawer-header{padding-top:13px;padding-bottom:13px}.ant-drawer-body{padding:0}.drawer-content{display:flex;flex-direction:column;height:100%}.drawer-content .drawer-content-menu{flex:1;overflow:hidden}.drawer-content .switch-item{display:flex;align-items:center;justify-content:space-between;height:40px}",""]),t["default"]=d},7596:function(e,t,n){"use strict";n(2604);var a=n(3162),o=(n(1930),n(3302)),i=(n(3309),n(2734)),l=(n(7481),n(7762)),d=(n(2641),n(9963)),s=n(6252),r=n(3577),u=n(2262),c=n(4341),m=n(5255),f=n(4367);const p={class:"mode-choose"};var w={__name:"modeChoose",props:{mode:String},emits:["update:mode"],setup(e){const{mode:t}=e;return(t,n)=>((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",{class:(0,r.C_)({"mode-choose-item":!0,choose:"AR"!=e.mode}),onClick:n[0]||(n[0]=e=>t.$emit("update:mode","模型"))},"模型",2),(0,s._)("div",{class:(0,r.C_)({"mode-choose-item":!0,choose:"AR"==e.mode}),onClick:n[1]||(n[1]=e=>t.$emit("update:mode","AR"))},"AR",2)]))}},h=(n(2774),n(3744));const v=(0,h.Z)(w,[["__scopeId","data-v-0cde4147"]]);var k=v;const y={class:"base-name"},_={key:0};var g={__name:"BaseName",props:{name:String},setup(e){const{name:t}=e,n=(0,s.Fl)((()=>t?t.split("").map((e=>({text:e,isNumber:!isNaN(e)}))):[]));return(e,t)=>((0,s.wg)(),(0,s.iD)("span",y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,u.SU)(n),((e,t)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:t},[e.isNumber?((0,s.wg)(),(0,s.iD)("sub",_,(0,r.zw)(e.text),1)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Uk)((0,r.zw)(e.text),1)],64))],64)))),128))]))}};n(7174);const b=(0,h.Z)(g,[["__scopeId","data-v-38aa6309"]]);var U=b;const x={class:"chem-3d-header"},W=(0,s._)("div",{style:{width:"14%",height:"0"}},null,-1),H={class:"drawer-content"},C={class:"drawer-content-menu"},j={style:{overflow:"auto",height:"100%"}},O=(0,s.Uk)("分子模型"),S=(0,s.Uk)("无机化合物"),M=(0,s.Uk)("有机化合物"),Z=(0,s.Uk)("VSEPR模型"),P=(0,s.Uk)("直线形"),D=(0,s.Uk)("2+0"),A=(0,s.Uk)("平面三角形"),K=(0,s.Uk)("2+1"),z=(0,s.Uk)("3+0"),R=(0,s.Uk)("四面体"),N=(0,s.Uk)("2+2"),Y=(0,s.Uk)("3+1"),E=(0,s.Uk)("4+0"),T=(0,s.Uk)("杂化轨道模型"),q=(0,s.Uk)("s轨道"),F=(0,s.Uk)("p轨道"),$=(0,s.Uk)("p"),I=(0,s._)("sub",null,"x",-1),V=(0,s.Uk)("轨道"),B=(0,s.Uk)("p"),L=(0,s._)("sub",null,"y",-1),G=(0,s.Uk)("轨道"),J=(0,s.Uk)("p"),Q=(0,s._)("sub",null,"z",-1),X=(0,s.Uk)("轨道"),ee=(0,s.Uk)("sp轨道"),te=(0,s.Uk)("sp2轨道"),ne=(0,s.Uk)("sp3轨道"),ae={style:{padding:"10px 24px","border-top":"1px solid rgba(60, 60, 60, .12)"}},oe={class:"switch-item"},ie=(0,s._)("span",null,"显示背景",-1),le={class:"switch-item"},de=(0,s._)("span",null,"显示坐标轴",-1),se=["src"];var re={__name:"App",setup(e){const t=(0,s.Fl)((()=>1659712191814)),n=(0,u.iH)("模型"),a=(0,u.iH)(!1),o=(0,u.iH)(!1),i=(0,u.iH)(!0),l=(0,u.iH)(!0),d=(0,u.iH)(["H2O"]),p=(0,u.iH)(["分子模型","无机化合物"]),w=(0,u.iH)([{name:"H2O"},{name:"NH3"},{name:"CO2"},{name:"P4"},{name:"S8"}]),h=(0,u.iH)([{name:"CH2O"},{name:"CH4"},{name:"C2H6"},{name:"C3H8"},{name:"C2H4"},{name:"C2H2"},{name:"C6H6"},{name:"C60"}]);window.currentModel=d,window.showAxes=l;const v=(0,u.iH)();return(0,s.m0)((()=>{v&&v.value&&v.value.contentWindow.postMessage({currentModel:d.value[0],showAxes:l.value})})),(0,s.YP)(n,(()=>{a.value=!1})),window.addEventListener("message",(e=>{"loaded"===e.data&&(a.value=!0)})),(e,y)=>{const _=(0,s.up)("a-menu-item"),g=(0,s.up)("a-sub-menu"),b=(0,s.up)("a-menu"),re=(0,s.up)("a-switch"),ue=(0,s.up)("a-drawer"),ce=(0,s.up)("a-spin");return(0,s.wg)(),(0,s.iD)("div",{class:"app",style:(0,r.j5)({background:i.value?"linear-gradient(200deg, #f4efef, #e3eeff)":""})},[(0,s._)("div",x,[(0,s._)("div",{style:(0,r.j5)({width:"14%",visibility:"AR"==n.value?"hidden":"visible",cursor:"pointer"}),onClick:y[0]||(y[0]=e=>o.value=!0)},[(0,s.Wm)((0,u.SU)(c.Z))],4),(0,s.Wm)(k,{mode:n.value,"onUpdate:mode":y[1]||(y[1]=e=>n.value=e)},null,8,["mode"]),W]),(0,s.Wm)(ue,{visible:o.value,"onUpdate:visible":y[7]||(y[7]=e=>o.value=e),closable:!1,title:"",placement:"left",width:"55%"},{default:(0,s.w5)((()=>[(0,s._)("div",H,[(0,s._)("div",C,[(0,s._)("div",j,[(0,s.Wm)(b,{selectedKeys:d.value,"onUpdate:selectedKeys":y[2]||(y[2]=e=>d.value=e),openKeys:p.value,"onUpdate:openKeys":y[3]||(y[3]=e=>p.value=e),mode:"inline",onClick:y[4]||(y[4]=e=>o.value=!1)},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{key:"分子模型"},{title:(0,s.w5)((()=>[O])),default:(0,s.w5)((()=>[(0,s.Wm)(g,{key:"无机化合物"},{title:(0,s.w5)((()=>[S])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(w.value,(e=>((0,s.wg)(),(0,s.j4)(_,{key:e.name},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{name:e.name},null,8,["name"])])),_:2},1024)))),128))])),_:1}),(0,s.Wm)(g,{key:"有机化合物"},{title:(0,s.w5)((()=>[M])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.value,(e=>((0,s.wg)(),(0,s.j4)(_,{key:e.name},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{name:e.name},null,8,["name"])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,s.Wm)(g,{key:"VSEPR模型"},{title:(0,s.w5)((()=>[Z])),default:(0,s.w5)((()=>[(0,s.Wm)(g,{key:"直线形"},{title:(0,s.w5)((()=>[P])),default:(0,s.w5)((()=>[(0,s.Wm)(_,{key:"2+0"},{default:(0,s.w5)((()=>[D])),_:1})])),_:1}),(0,s.Wm)(g,{key:"平面三角形"},{title:(0,s.w5)((()=>[A])),default:(0,s.w5)((()=>[(0,s.Wm)(_,{key:"2+1"},{default:(0,s.w5)((()=>[K])),_:1}),(0,s.Wm)(_,{key:"3+0"},{default:(0,s.w5)((()=>[z])),_:1})])),_:1}),(0,s.Wm)(g,{key:"四面体"},{title:(0,s.w5)((()=>[R])),default:(0,s.w5)((()=>[(0,s.Wm)(_,{key:"2+2"},{default:(0,s.w5)((()=>[N])),_:1}),(0,s.Wm)(_,{key:"3+1"},{default:(0,s.w5)((()=>[Y])),_:1}),(0,s.Wm)(_,{key:"4+0"},{default:(0,s.w5)((()=>[E])),_:1})])),_:1})])),_:1}),(0,s.Wm)(g,{key:"杂化轨道模型"},{title:(0,s.w5)((()=>[T])),default:(0,s.w5)((()=>[(0,s.Wm)(_,{key:"s"},{default:(0,s.w5)((()=>[q])),_:1}),(0,s.Wm)(g,{key:"p轨道"},{title:(0,s.w5)((()=>[F])),default:(0,s.w5)((()=>[(0,s.Wm)(_,{key:"px"},{default:(0,s.w5)((()=>[$,I,V])),_:1}),(0,s.Wm)(_,{key:"py"},{default:(0,s.w5)((()=>[B,L,G])),_:1}),(0,s.Wm)(_,{key:"pz"},{default:(0,s.w5)((()=>[J,Q,X])),_:1})])),_:1}),(0,s.Wm)(_,{key:"sp"},{default:(0,s.w5)((()=>[ee])),_:1}),(0,s.Wm)(_,{key:"sp2"},{default:(0,s.w5)((()=>[te])),_:1}),(0,s.Wm)(_,{key:"sp3"},{default:(0,s.w5)((()=>[ne])),_:1})])),_:1})])),_:1},8,["selectedKeys","openKeys"])])]),(0,s._)("div",ae,[(0,s._)("div",oe,[ie,(0,s.Wm)(re,{checked:i.value,"onUpdate:checked":y[5]||(y[5]=e=>i.value=e)},{checkedChildren:(0,s.w5)((()=>[(0,s.Wm)((0,u.SU)(m.Z))])),unCheckedChildren:(0,s.w5)((()=>[(0,s.Wm)((0,u.SU)(f.Z))])),_:1},8,["checked"])]),(0,s._)("div",le,[de,(0,s.Wm)(re,{checked:l.value,"onUpdate:checked":y[6]||(y[6]=e=>l.value=e)},{checkedChildren:(0,s.w5)((()=>[(0,s.Wm)((0,u.SU)(m.Z))])),unCheckedChildren:(0,s.w5)((()=>[(0,s.Wm)((0,u.SU)(f.Z))])),_:1},8,["checked"])])])])])),_:1},8,["visible"]),"AR"===n.value?((0,s.wg)(),(0,s.iD)("iframe",{key:0,src:`./ar.html?v=${(0,u.SU)(t)}`,style:{border:"none",width:"100%",height:"100%",position:"absolute",top:"0"}},null,8,se)):(0,s.kq)("",!0),"模型"===n.value?((0,s.wg)(),(0,s.iD)("iframe",{key:1,ref_key:"modelEl",ref:v,src:"./model.html?v=1.0",style:{border:"none",width:"100%",height:"100%",position:"absolute",top:"0"}},null,512)):(0,s.kq)("",!0),a.value?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(ce,{key:2,size:"large",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}))],4)}}};n(6702);const ue=re;var ce=ue;const me=(0,d.ri)(ce);me.use(a.ZP).use(o.ZP).use(i.ZP).use(l.ZP).mount(".app")},7174:function(e,t,n){var a=n(8088);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=n(4402).Z;o("0d4a42a6",a,!0,{sourceMap:!1,shadowMode:!1})},2774:function(e,t,n){var a=n(547);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=n(4402).Z;o("9085566a",a,!0,{sourceMap:!1,shadowMode:!1})},6702:function(e,t,n){var a=n(8876);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=n(4402).Z;o("2c16cf5a",a,!0,{sourceMap:!1,shadowMode:!1})}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={id:a,loaded:!1,exports:{}};return e[a](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],i=e[u][2];for(var d=!0,s=0;s<a.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(d=!1,i<l&&(l=i));if(d){e.splice(u--,1);var r=o();void 0!==r&&(t=r)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.j=826}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,l=a[0],d=a[1],s=a[2],r=0;if(l.some((function(t){return 0!==e[t]}))){for(o in d)n.o(d,o)&&(n.m[o]=d[o]);if(s)var u=s(n)}for(t&&t(a);r<l.length;r++)i=l[r],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7596)}));a=n.O(a)})();