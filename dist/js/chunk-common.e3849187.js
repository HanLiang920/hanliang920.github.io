(self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[]).push([[64],{8321:function(o,t,e){"use strict";var r=e(925);function n(o,t,e){this.setObjectToMove=function(o){d=o},this.getObjectToMove=function(){return d},this.setZoomSpeed=function(o){a=o},this.setDistance=function(o,t){s=o,i=t},this.setRotationSpeed=function(o){b=o},this.setRotationSpeedTouchDevices=function(o){l=o},this.enableVerticalRotation=function(){m=!0},this.disableVerticalRotation=function(){m=!1},this.enableHorizontalRotation=function(){u=!0},this.disableHorizontalRotation=function(){u=!1},this.setMaxVerticalRotationAngle=function(o,t){r.x.from=o,r.x.to=t,r.x.enabled=!0},this.setMaxHorizontalRotationAngle=function(o,t){r.y.from=o,r.y.to=t,r.y.enabled=!0},this.disableMaxHorizontalAngleRotation=function(){r.y.enabled=!1},this.disableMaxVerticalAngleRotation=function(){r.x.enabled=!1},this.disableZoom=function(){p=!1},this.enableZoom=function(){p=!0},this.isUserInteractionActive=function(){return c},t=void 0!==t?t:document;const r={x:{enabled:!1,from:Math.PI/8,to:Math.PI/8},y:{enabled:!1,from:Math.PI/4,to:Math.PI/4}};let n,d=e,i=15,s=6,a=.5,b=.05,l=.05,c=!1,m=!1,u=!0,p=!0,y={MOUSEDOWN:0,MOUSEMOVE:1},h={x:0,y:0},A={X:null,Y:null},O=[];function f(){o.position.z-=a}function T(){o.position.z+=a}function C(o,t){if(t.length>1)for(let e=0;e<t.length;e++)C(o,t[e]);else t.rotation.x+=Math.sign(o.y)*b}function g(o,t){if(t.length>1)for(let e=0;e<t.length;e++)g(o,t[e]);else t.rotation.x+=Math.sign(o.y)*l}function w(o,t){if(t.length>1)for(let e=0;e<t.length;e++)w(o,t[e]);else t.rotation.y+=Math.sign(o.x)*b}function H(o,t){if(t.length>1)for(let e=0;e<t.length;e++)H(o,t[e]);else t.rotation.y+=Math.sign(o.x)*l}function N(o,t){if(r[t].enabled){if(d.length>1){let e=!0;for(let n=0;n<d.length;n++){if(!e)return!1;r[t].enabled&&(e=M(d[n],o,t))}return e}return M(d,o,t)}return!0}function M(o,t,e){return-1*r[e].from<o.rotation[e]+t&&o.rotation[e]+t<r[e].to}function E(){h={x:0,y:0}}function x(o){c=!0,n=y.MOUSEDOWN}function S(o){if(c){const t={x:o.offsetX-h.x,y:o.offsetY-h.y};if(h={x:o.offsetX,y:o.offsetY},u&&0!=t.x){if(!N(Math.sign(t.x)*b,"y"))return;w(t,d),n=y.MOUSEMOVE}if(m&&0!=t.y){if(!N(Math.sign(t.y)*b,"x"))return;C(t,d),n=y.MOUSEMOVE}}}function j(){c=!1,E()}function v(t){if(!p)return;const e=t.wheelDelta?t.wheelDelta:-1*t.deltaY;e>0&&o.position.z>s?f():e<0&&o.position.z<i&&T()}function k(o){o.preventDefault(),n=y.MOUSEDOWN,2===o.touches.length?(A.X=Math.abs(o.touches[0].clientX-o.touches[1].clientX),A.Y=Math.abs(o.touches[0].clientY-o.touches[1].clientY),O=new Array(2)):h={x:o.touches[0].pageX,y:o.touches[0].pageY}}function U(o){A.X=null,A.Y=null,O.length>0?O.pop():O=[],o.preventDefault(),n===y.MOUSEDOWN||y.MOUSEMOVE,E()}function D(t){if(t.preventDefault(),n=y.MOUSEMOVE,2===t.touches.length&&p){O=new Array(2);const e=Math.abs(t.touches[0].clientX-t.touches[1].clientX),r=Math.abs(t.touches[0].clientY-t.touches[1].clientY);A&&A.X>0&&A.Y>0&&(e>A.X&&r>A.Y&&o.position.z>s?f():e<A.X&&o.position.z<i&&r<A.Y&&T()),A.X=e,A.Y=r}else if(0===O.length){A.X=null,A.Y=null;const o={x:t.touches[0].pageX-h.x,y:t.touches[0].pageY-h.y};if(h={x:t.touches[0].pageX,y:t.touches[0].pageY},u&&0!=o.x){if(!N(Math.sign(o.x)*l,"y"))return;H(o,d)}if(m&&0!=o.y){if(!N(Math.sign(o.y)*l,"x"))return;g(o,d)}}}t.addEventListener("mousedown",x,!1),t.addEventListener("mousemove",S,!1),t.addEventListener("mouseup",j,!1),t.addEventListener("mouseout",j,!1),t.addEventListener("wheel",v,!1),t.addEventListener("touchstart",k,!1),t.addEventListener("touchmove",D,!1),t.addEventListener("touchend",U,!1)}window.showObject={},window.atomInfos={C:{radius:.43,color:"black"},H:{radius:.39,color:"#fff"},B:{radius:.43,color:"black"},F:{radius:.39,color:"#fff"},O:{radius:.4,color:"red"},N:{radius:.4,color:"#1d0ff9"}};const d={},i=o=>o.keys().map(o),s=e(2229),a=s.keys();function b(){const o=Object.values(window.showObject);0!==o.length?1!==o.length?window.objectControls.setObjectToMove(o):window.objectControls.setObjectToMove(o[0]):window.objectControls.setObjectToMove([])}i(s).forEach(((o,t)=>{const e=a[t].split("/").pop().replace(".json","");d[e]=(0,r.B)(o)})),window.c3Data=d,AFRAME.registerGeometry("electronPair",{schema:{},init:function(o){const t=new THREE.CubicBezierCurve(new THREE.Vector2(0,0),new THREE.Vector2(1.05,.05),new THREE.Vector2(.7,1.46),new THREE.Vector2(0,1.91)),e=t.getPoints(50);this.geometry=new THREE.LatheGeometry(e,30)}}),AFRAME.registerComponent("axes-helper",{schema:{size:{type:"number",default:1}},init:function(){var o=this.data;this.axes=new THREE.AxesHelper(o.size),this.el.setObject3D("axes-helper",this.axes)}}),AFRAME.registerComponent("shadow-material",{init(){this.material=new THREE.ShadowMaterial,this.el.getOrCreateObject3D("mesh").material=this.material,this.material.opacity=.2}}),AFRAME.registerComponent("use-rotate",{init(){window.showObject[this.el.object3D.uuid]=this.el.object3D,b()},remove:function(){delete window.showObject[this.el.object3D.uuid],b()}}),AFRAME.registerComponent("object-controls",{schema:{initialPosition:{type:"vec3"},target:{type:"vec3"}},init:function(){var o=this.el;this.target=new THREE.Vector3,o.getObject3D("camera").position.copy(this.data.initialPosition)},pause:function(){this.controls.dispose&&this.controls.dispose()},play:function(){const o=this.el,t=o.getObject3D("camera"),e=o.sceneEl.renderer.domElement,r=new n(t,e,[]);r.setDistance(-10,10),r.setZoomSpeed(.5),r.enableVerticalRotation(),r.setMaxVerticalRotationAngle(Math.PI,Math.PI),r.setRotationSpeed(.05),this.controls=r,window.objectControls=r,this.update()},update:function(o){var t=this.controls,e=this.data;t&&(t.target=this.target.copy(e.target))},tick:function(){},remove:function(){this.controls.reset(),this.controls.dispose&&this.controls.dispose()}})},925:function(o,t,e){"use strict";function r(o){const t={};return o.atom.forEach((o=>{const{id:e,symbol:r,cartCoords:n}=o,{x:d,y:i,z:s}=AFRAME.utils.coordinates.parse(n);t[e]={symbol:r,x:d,y:i,z:s}})),{atom:t,bond:o.bond,center:o.center}}function n([o,t,e],[r,n,d]){const i=Math.pow(Math.pow(r-o,2)+Math.pow(n-t,2)+Math.pow(d-e,2),.5),s=180*Math.asin((n-t)/i)/Math.PI+90,a=Math.pow(Math.pow(r-o,2)+Math.pow(d-e,2),.5);let b=180*Math.asin((e-d)/a)/Math.PI;return o>=r&&(b=180-b),`0 ${b} ${s}`}e.d(t,{B:function(){return r},j:function(){return n}})},7181:function(o,t,e){"use strict";e.d(t,{Z:function(){return O}});var r=e(5751),n=e(5136),d=e(4214),i={__name:"BaseAtom",props:{symbol:String,x:Number,y:Number,z:Number},setup(o){const{symbol:t,x:e,y:n,z:i}=o,s=(0,r.Fl)((()=>window.atomInfos[t])),a=(0,r.Fl)((()=>`${e} ${n} ${i}`));return(o,t)=>{const e=(0,r.up)("a-entity");return(0,r.wg)(),(0,r.j4)(e,{geometry:`primitive: sphere; radius: ${(0,d.SU)(s).radius}`,material:`color: ${(0,d.SU)(s).color};roughness: 0.25; metalness: 0.2`,position:(0,d.SU)(a)},null,8,["geometry","material","position"])}}};const s=i;var a=s,b=e(925),l={__name:"BaseBond",props:{bondAtom1:Object,bondAtom2:Object,bondOrderType:String,bondOrder:String},setup(o){const{bondAtom1:t,bondAtom2:e,bondOrderType:n,bondOrder:i}=o,s=(0,r.Fl)((()=>window.atomInfos[t.symbol])),a=(0,r.Fl)((()=>window.atomInfos[e.symbol])),l=(0,r.Fl)((()=>{const{x:o,y:r,z:n}=t,{x:d,y:i,z:l}=e,c=(s.value.radius,a.value.radius,(o+d)/2),m=(r+i)/2,u=(n+l)/2,p=Math.pow(Math.pow(o-d,2)+Math.pow(r-i,2)+Math.pow(n-l,2),.5);return{position:`${c} ${m} ${u}`,length:p,rotation:(0,b.j)([c,m,u],[o,r,n])}}));return(t,e)=>{const n=(0,r.up)("a-cylinder"),i=(0,r.up)("a-entity");return(0,r.wg)(),(0,r.j4)(i,{position:(0,d.SU)(l).position,scale:`1 ${(0,d.SU)(l).length/.2} 1`,rotation:(0,d.SU)(l).rotation},{default:(0,r.w5)((()=>[15==o.bondOrderType?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(i,{position:"0.1 0 0"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:(0,d.SU)(s).color,height:"0.1",radius:"0.05",position:"0 -0.05 0"},null,8,["color"]),(0,r.Wm)(n,{color:(0,d.SU)(a).color,height:"0.1",radius:"0.05",position:"0 0.05 0"},null,8,["color"])])),_:1}),(0,r.Wm)(i,{position:"-0.1 0 0"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:(0,d.SU)(s).color,height:"0.1",radius:"0.05",position:"0 -0.05 0"},null,8,["color"])])),_:1})],64)):14==o.bondOrderType?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Wm)(i,{position:"0.15 0 0"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:(0,d.SU)(s).color,height:"0.1",radius:"0.05",position:"0 -0.05 0"},null,8,["color"]),(0,r.Wm)(n,{color:(0,d.SU)(a).color,height:"0.1",radius:"0.05",position:"0 0.05 0"},null,8,["color"])])),_:1}),(0,r.Wm)(i,{position:"0 0 0"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:(0,d.SU)(s).color,height:"0.1",radius:"0.05",position:"0 -0.05 0"},null,8,["color"]),(0,r.Wm)(n,{color:(0,d.SU)(a).color,height:"0.1",radius:"0.05",position:"0 0.05 0"},null,8,["color"])])),_:1}),(0,r.Wm)(i,{position:"-0.15 0 0"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:(0,d.SU)(s).color,height:"0.1",radius:"0.05",position:"0 -0.05 0"},null,8,["color"]),(0,r.Wm)(n,{color:(0,d.SU)(a).color,height:"0.1",radius:"0.05",position:"0 0.05 0"},null,8,["color"])])),_:1})],64)):13==o.bondOrderType?((0,r.wg)(),(0,r.iD)(r.HY,{key:2},[(0,r.Wm)(i,{position:"0.1 0 0"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:(0,d.SU)(s).color,height:"0.1",radius:"0.05",position:"0 -0.05 0"},null,8,["color"]),(0,r.Wm)(n,{color:(0,d.SU)(a).color,height:"0.1",radius:"0.05",position:"0 0.05 0"},null,8,["color"])])),_:1}),(0,r.Wm)(i,{position:"-0.1 0 0"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:(0,d.SU)(s).color,height:"0.1",radius:"0.05",position:"0 -0.05 0"},null,8,["color"]),(0,r.Wm)(n,{color:(0,d.SU)(a).color,height:"0.1",radius:"0.05",position:"0 0.05 0"},null,8,["color"])])),_:1})],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:3},[(0,r.Wm)(n,{color:(0,d.SU)(s).color,height:"0.1",radius:"0.05",position:"0 -0.05 0"},null,8,["color"]),(0,r.Wm)(n,{color:(0,d.SU)(a).color,height:"0.1",radius:"0.05",position:"0 0.05 0"},null,8,["color"])],64))])),_:1},8,["position","scale","rotation"])}}};const c=l;var m=c,u={__name:"BaseElectronPair",props:{bondAtom1:Object,bondAtom2:Object,id:String},setup(o){const{bondAtom1:t,bondAtom2:e,id:n}=o,i=(0,r.Fl)((()=>{const{x:o,y:r,z:n}=t,{x:d,y:i,z:s}=e;return(0,b.j)([d,i,s],[o,r,n])})),s=(0,r.Fl)((()=>{const{x:o,y:t,z:r}=e;return`${o} ${t} ${r}`}));return(t,e)=>{const n=(0,r.up)("a-entity");return(0,r.wg)(),(0,r.j4)(n,{position:(0,d.SU)(s),rotation:(0,d.SU)(i),scale:"0.6 0.6 0.6"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)(n,{key:o.id,position:"0 -1.91 0",geometry:"primitive: electronPair;",material:"color: yellow;roughness: 0.25; metalness: 0.2;opacity:0.5"}))])),_:1},8,["position","rotation"])}}};const p=u;var y=p,h={__name:"fragment",props:{type:String,showAxes:{type:Boolean,default:!0}},setup(o){const{type:t}=o,e=(0,d.qj)(window.c3Data[t]);return(t,d)=>{const i=(0,r.up)("a-entity");return(0,r.wg)(),(0,r.j4)(i,{"use-rotate":""},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{shadow:"",position:e.center},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.atom,(o=>((0,r.wg)(),(0,r.iD)(r.HY,{key:o.id},[o.symbol?((0,r.wg)(),(0,r.j4)(a,(0,n.vs)((0,r.dG)({key:0},o)),null,16)):(0,r.kq)("",!0)],64)))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.bond,(t=>((0,r.wg)(),(0,r.iD)(r.HY,{key:t.id},[t.isElectronPair?!0===t.isElectronPair?((0,r.wg)(),(0,r.j4)(y,{key:1,bondAtom1:e.atom[t.bondAtom1],bondAtom2:e.atom[t.bondAtom2],id:o.type+t.id},null,8,["bondAtom1","bondAtom2","id"])):(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(m,{key:0,bondAtom1:e.atom[t.bondAtom1],bondAtom2:e.atom[t.bondAtom2],bondOrderType:t.bondOrderType,bondOrder:t.bondOrder},null,8,["bondAtom1","bondAtom2","bondOrderType","bondOrder"]))],64)))),128))])),_:1},8,["position"]),o.showAxes?((0,r.wg)(),(0,r.j4)(i,{key:0,"axes-helper":"size:2"})):(0,r.kq)("",!0)])),_:1})}}};const A=h;var O=A},2229:function(o,t,e){var r={"./2+1.json":2446,"./2+2.json":9694,"./3+1.json":1277,"./丙烷.json":3352,"./乙炔.json":2465,"./乙烯.json":8651,"./乙烷.json":5085,"./甲烷.json":7870,"./苯.json":7243};function n(o){var t=d(o);return e(t)}function d(o){if(!e.o(r,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return r[o]}n.keys=function(){return Object.keys(r)},n.resolve=d,o.exports=n,n.id=2229},2446:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"1","symbol":"B","cartCoords":"0.0560 0.4615 0"},{"id":"2","symbol":"F","cartCoords":"-1.1624 1.3704 0"},{"id":"3","symbol":"F","cartCoords":"1.4523 1.0622 0"},{"id":"4","symbol":"","cartCoords":"-0.1220 -1.0480 0"}],"bond":[{"id":"5","bondAtom1":"2","bondAtom2":"1","bondOrderType":"0","bondOrder":"1"},{"id":"6","bondAtom1":"1","bondAtom2":"3","bondOrderType":"0","bondOrder":"1"},{"id":"7","bondAtom1":"4","bondAtom2":"1","isElectronPair":true}],"center":"-0.0560 -0.4615 0"}')},9694:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"1","symbol":"O","cartCoords":"0.0370 -0.0253 0.1252"},{"id":"2","symbol":"H","cartCoords":"0.3478 -0.8749 0.4940"},{"id":"3","symbol":"","cartCoords":"0.3368 0.0703 -0.7997"},{"id":"4","symbol":"","cartCoords":"0.3554 0.7056 0.6565"},{"id":"5","symbol":"H","cartCoords":"-0.9181 0.0304 0.1740"}],"bond":[{"id":"6","bondAtom1":"4","bondAtom2":"1","isElectronPair":true},{"id":"7","bondAtom1":"1","bondAtom2":"5","bondOrderType":"0","bondOrder":"1"},{"id":"8","bondAtom1":"2","bondAtom2":"1","bondOrderType":"0","bondOrder":"1"},{"id":"9","bondAtom1":"3","bondAtom2":"1","isElectronPair":true}],"center":"-0.0370 0.0253 -0.1252"}')},1277:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"1","symbol":"N","cartCoords":"0 0 -0.0030"},{"id":"2","symbol":"H","cartCoords":"-0.4771 -0.8263 -0.3403"},{"id":"3","symbol":"H","cartCoords":"0.9541 0 -0.3403"},{"id":"4","symbol":"H","cartCoords":"-0.4771 0.8263 -0.3403"},{"id":"5","symbol":"","cartCoords":"0 0 1.0238"}],"bond":[{"id":"6","bondAtom1":"2","bondAtom2":"1","bondOrderType":"0","bondOrder":"1"},{"id":"7","bondAtom1":"1","bondAtom2":"3","bondOrderType":"0","bondOrder":"1"},{"id":"8","bondAtom1":"4","bondAtom2":"1","bondOrderType":"0","bondOrder":"1"},{"id":"9","bondAtom1":"5","bondAtom2":"1","isElectronPair":true}],"center":"0 0 0.0030"}')},3352:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"5","atType":"H","symbol":"H","userNum":"4","cartCoords":"-0.508397 -0.598954 -1.36072"},{"id":"6","atType":"H","symbol":"H","userNum":"3","cartCoords":"-1.29548 0.765055 -0.452235"},{"id":"7","atType":"C Alkane","symbol":"C","userNum":"2","cartCoords":"0.86907 0.80286 -0.452235"},{"id":"8","atType":"C Alkane","symbol":"C","userNum":"1","cartCoords":"-0.449887 0.0413605 -0.452235"},{"id":"9","atType":"C Alkane","symbol":"C","userNum":"5","cartCoords":"-0.531648 -0.833801 0.791524"},{"id":"10","atType":"H","symbol":"H","userNum":"8","cartCoords":"0.92758 1.44317 0.456248"},{"id":"11","atType":"H","symbol":"H","userNum":"7","cartCoords":"1.71467 0.0791652 -0.452235"},{"id":"12","atType":"H","symbol":"H","userNum":"6","cartCoords":"0.928821 1.44242 -1.36117"},{"id":"13","atType":"H","symbol":"H","userNum":"11","cartCoords":"-0.473138 -0.193487 1.70001"},{"id":"14","atType":"H","symbol":"H","userNum":"10","cartCoords":"0.313949 -1.5575 0.791524"},{"id":"15","atType":"H","symbol":"H","userNum":"9","cartCoords":"-1.49553 -1.3903 0.791524"}],"bond":[{"id":"16","bondAtom1":"8","bondAtom2":"5","bondOrderType":"0","bondOrder":"1"},{"id":"17","bondAtom1":"8","bondAtom2":"6","bondOrderType":"0","bondOrder":"1"},{"id":"18","bondAtom1":"8","bondAtom2":"7","bondOrderType":"0","bondOrder":"1"},{"id":"19","bondAtom1":"8","bondAtom2":"9","bondOrderType":"0","bondOrder":"1"},{"id":"20","bondAtom1":"7","bondAtom2":"10","bondOrderType":"0","bondOrder":"1"},{"id":"21","bondAtom1":"7","bondAtom2":"11","bondOrderType":"0","bondOrder":"1"},{"id":"22","bondAtom1":"7","bondAtom2":"12","bondOrderType":"0","bondOrder":"1"},{"id":"23","bondAtom1":"9","bondAtom2":"13","bondOrderType":"0","bondOrder":"1"},{"id":"24","bondAtom1":"9","bondAtom2":"14","bondOrderType":"0","bondOrder":"1"},{"id":"25","bondAtom1":"9","bondAtom2":"15","bondOrderType":"0","bondOrder":"1"}]}')},2465:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"5","atType":"C Alkyne","symbol":"C","userNum":"1","cartCoords":"-0.524811 -0.303 0"},{"id":"6","atType":"C Alkyne","symbol":"C","userNum":"2","cartCoords":"0.524811 0.303 0"},{"id":"7","atType":"H","symbol":"H","userNum":"3","cartCoords":"-1.46878 -0.848 0"},{"id":"8","atType":"H","symbol":"H","userNum":"4","cartCoords":"1.46878 0.848 0"}],"bond":[{"id":"9","bondAtom1":"5","bondAtom2":"6","bondOrderType":"14","bondOrder":"3"},{"id":"10","bondAtom1":"5","bondAtom2":"7","bondOrderType":"0","bondOrder":"1"},{"id":"11","bondAtom1":"6","bondAtom2":"8","bondOrderType":"0","bondOrder":"1"}],"id":"4","groupName":"Fragment","groupID":"1"}')},8651:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"5","atType":"C Alkene","symbol":"C","userNum":"1","cartCoords":"-0.578938 -0.33425 1.2326e-32"},{"id":"6","atType":"C Alkene","symbol":"C","userNum":"2","cartCoords":"0.578938 0.33425 1.2326e-32"},{"id":"7","atType":"H","symbol":"H","userNum":"3","cartCoords":"-0.578938 -1.43425 -1.59365e-16"},{"id":"8","atType":"H","symbol":"H","userNum":"4","cartCoords":"-1.53157 0.21575 1.59365e-16"},{"id":"9","atType":"H","symbol":"H","userNum":"5","cartCoords":"0.578938 1.43425 -5.21609e-17"},{"id":"10","atType":"H","symbol":"H","userNum":"6","cartCoords":"1.53157 -0.21575 5.21609e-17"}],"bond":[{"id":"11","bondAtom1":"5","bondAtom2":"6","bondOrderType":"13","bondOrder":"2"},{"id":"12","bondAtom1":"5","bondAtom2":"7","bondOrderType":"0","bondOrder":"1"},{"id":"13","bondAtom1":"5","bondAtom2":"8","bondOrderType":"0","bondOrder":"1"},{"id":"14","bondAtom1":"6","bondAtom2":"9","bondOrderType":"0","bondOrder":"1"},{"id":"15","bondAtom1":"6","bondAtom2":"10","bondOrderType":"0","bondOrder":"1"}]}')},5085:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"5","atType":"C Alkane","symbol":"C","userNum":"1","cartCoords":"0.312615 -0.308902 0.621879"},{"id":"6","atType":"H","symbol":"H","userNum":"3","cartCoords":"0.132359 -1.40721 0.621879"},{"id":"7","atType":"H","symbol":"H","userNum":"4","cartCoords":"1.40829 -0.113309 0.621879"},{"id":"8","atType":"H","symbol":"H","userNum":"5","cartCoords":"-0.145667 0.142102 1.53036"},{"id":"9","atType":"C Alkane","symbol":"C","userNum":"2","cartCoords":"-0.312615 0.308902 -0.621879"},{"id":"10","atType":"H","symbol":"H","userNum":"6","cartCoords":"-0.132359 1.40721 -0.621879"},{"id":"11","atType":"H","symbol":"H","userNum":"7","cartCoords":"-1.40829 0.113309 -0.621879"},{"id":"12","atType":"H","symbol":"H","userNum":"8","cartCoords":"0.145667 -0.142102 -1.53036"}],"bond":[{"id":"13","bondAtom1":"5","bondAtom2":"6","bondOrderType":"0","bondOrder":"1"},{"id":"14","bondAtom1":"5","bondAtom2":"7","bondOrderType":"0","bondOrder":"1"},{"id":"15","bondAtom1":"5","bondAtom2":"8","bondOrderType":"0","bondOrder":"1"},{"id":"16","bondAtom1":"5","bondAtom2":"9","bondOrderType":"0","bondOrder":"1"},{"id":"17","bondAtom1":"9","bondAtom2":"10","bondOrderType":"0","bondOrder":"1"},{"id":"18","bondAtom1":"9","bondAtom2":"11","bondOrderType":"0","bondOrder":"1"},{"id":"19","bondAtom1":"9","bondAtom2":"12","bondOrderType":"0","bondOrder":"1"}]}')},7870:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"5","atType":"C Alkane","symbol":"C","userNum":"1","cartCoords":"-4.18758e-05 -4.76308e-05 -8.9706e-05"},{"id":"6","atType":"H","symbol":"H","userNum":"2","cartCoords":"-0.258523 1.08252 -8.9706e-05"},{"id":"7","atType":"H","symbol":"H","userNum":"3","cartCoords":"1.10672 -0.117761 -8.9706e-05"},{"id":"8","atType":"H","symbol":"H","userNum":"4","cartCoords":"-0.423866 -0.482118 0.909169"},{"id":"9","atType":"H","symbol":"H","userNum":"5","cartCoords":"-0.424285 -0.482595 -0.908899"}],"bond":[{"id":"10","bondAtom1":"5","bondAtom2":"6","bondOrderType":"0","bondOrder":"1"},{"id":"11","bondAtom1":"5","bondAtom2":"7","bondOrderType":"0","bondOrder":"1"},{"id":"12","bondAtom1":"5","bondAtom2":"8","bondOrderType":"0","bondOrder":"1"},{"id":"13","bondAtom1":"5","bondAtom2":"9","bondOrderType":"0","bondOrder":"1"}]}')},7243:function(o){"use strict";o.exports=JSON.parse('{"atom":[{"id":"5","atType":"C Alkene","symbol":"C","userNum":"1","cartCoords":"-1.20794 0.697405 -1.94219e-05"},{"id":"6","atType":"C Alkene","symbol":"C","userNum":"2","cartCoords":"-1.208 -0.697403 -4.49847e-05"},{"id":"7","atType":"C Alkene","symbol":"C","userNum":"3","cartCoords":"5.78479e-06 -1.39482 5.16372e-05"},{"id":"8","atType":"C Alkene","symbol":"C","userNum":"4","cartCoords":"1.20794 -0.697395 5.16079e-05"},{"id":"9","atType":"C Alkene","symbol":"C","userNum":"5","cartCoords":"1.208 0.69739 -1.94219e-05"},{"id":"10","atType":"C Alkene","symbol":"C","userNum":"6","cartCoords":"-1.05911e-05 1.39483 -1.94219e-05"},{"id":"11","atType":"H","symbol":"H","userNum":"7","cartCoords":"-2.16057 1.24742 7.38712e-07"},{"id":"12","atType":"H","symbol":"H","userNum":"8","cartCoords":"-2.16063 -1.24739 -0.000141336"},{"id":"13","atType":"H","symbol":"H","userNum":"9","cartCoords":"2.22023e-05 -2.49482 0.000127857"},{"id":"14","atType":"H","symbol":"H","userNum":"10","cartCoords":"2.16056 -1.24741 0.000107605"},{"id":"15","atType":"H","symbol":"H","userNum":"11","cartCoords":"2.16064 1.24737 -7.54374e-05"},{"id":"16","atType":"H","symbol":"H","userNum":"12","cartCoords":"-2.07752e-05 2.49483 -1.94219e-05"}],"bond":[{"id":"17","bondAtom1":"5","bondAtom2":"6","bondOrderType":"15","bondOrder":"1"},{"id":"18","bondAtom1":"6","bondAtom2":"7","bondOrderType":"15","bondOrder":"2"},{"id":"19","bondAtom1":"7","bondAtom2":"8","bondOrderType":"15","bondOrder":"1"},{"id":"20","bondAtom1":"8","bondAtom2":"9","bondOrderType":"15","bondOrder":"2"},{"id":"21","bondAtom1":"9","bondAtom2":"10","bondOrderType":"15","bondOrder":"1"},{"id":"22","bondAtom1":"5","bondAtom2":"10","bondOrderType":"15","bondOrder":"2"},{"id":"23","bondAtom1":"5","bondAtom2":"11","bondOrderType":"0","bondOrder":"1"},{"id":"24","bondAtom1":"6","bondAtom2":"12","bondOrderType":"0","bondOrder":"1"},{"id":"25","bondAtom1":"7","bondAtom2":"13","bondOrderType":"0","bondOrder":"1"},{"id":"26","bondAtom1":"8","bondAtom2":"14","bondOrderType":"0","bondOrder":"1"},{"id":"27","bondAtom1":"9","bondAtom2":"15","bondOrderType":"0","bondOrder":"1"},{"id":"28","bondAtom1":"10","bondAtom2":"16","bondOrderType":"0","bondOrder":"1"}]}')}}]);