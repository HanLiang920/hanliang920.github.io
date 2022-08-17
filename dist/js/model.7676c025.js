(function(){var e={7460:function(e,t,n){"use strict";n.r(t);var o=n(8081),r=n.n(o),i=n(3645),a=n.n(i),u=a()(r());u.push([e.id,"*{font-family:Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}#app{position:absolute;top:0;bottom:0;right:0;left:0}",""]),t["default"]=u},4373:function(e,t,n){"use strict";n(2641),n(7956);var o=n(9963),r=n(6252),i=n(8144),a=n(2262),u={__name:"model",setup(e){const t=(0,a.iH)([...top.currentModel.value]),n=(0,a.iH)(top.showAxes.value),o=(0,a.iH)();return(0,r.bv)((()=>{o.value.addEventListener("loaded",(()=>{parent.postMessage("loaded")}))})),window.addEventListener("message",(e=>{if(!e.data||"webpackOk"===e.data.type)return;const{currentModel:o,showAxes:r}=e.data;o&&(t.value=[o]),n.value=r})),(e,a)=>{const u=(0,r.up)("a-plane"),l=(0,r.up)("a-entity"),s=(0,r.up)("a-scene");return(0,r.wg)(),(0,r.j4)(s,{ref_key:"scene",ref:o,embedded:"","device-orientation-permission-ui":"enabled: false",renderer:"antialias: true;\r\n                   colorManagement: true;\r\n                   sortObjects: true;\r\n                   physicallyCorrectLights: true;\r\n                   logarithmicDepthBuffer: true;\r\n                   maxCanvasWidth: -1;\r\n                   maxCanvasHeight: -1;","vr-mode-ui":"enabled: false"},{default:(0,r.w5)((()=>[t.value[0]?((0,r.wg)(),(0,r.j4)(i.Z,{type:t.value[0],showAxes:n.value,key:t.value[0]},null,8,["type","showAxes"])):(0,r.kq)("",!0),(0,r.Wm)(u,{"shadow-material":"",height:"100",width:"100",rotation:"-90 0 0",shadow:"cast:false;receive: true;"}),(0,r.Wm)(l,{camera:"","look-controls":"enabled: false","object-controls":"target: 0 0.6 -0.5; initialPosition: 0 1.6 5"}),(0,r.Wm)(l,{light:"type: ambient; intensity: 1.8;"}),(0,r.Wm)(l,{light:"type: directional;\r\n                   castShadow: true;\r\n                   intensity: 1.6;",position:"-5 8 1.5"})])),_:1},512)}}};n(2579);const l=u;var s=l;const c=(0,o.ri)(s);c.mount("#app")},2579:function(e,t,n){var o=n(7460);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(4402).Z;r("529cc4aa",o,!0,{sourceMap:!1,shadowMode:!1})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.j=886}(),function(){var e={886:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],l=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var c=l(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998,64],(function(){return n(4373)}));o=n.O(o)})();