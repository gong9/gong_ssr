(()=>{"use strict";var e={n:r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},d:(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("express");var n=e.n(r);const t=require("react");var o=e.n(t);const c=require("react-dom/server"),l=function(){return o().createElement("div",null,"ssr小轮子-小白",o().createElement("button",{onClick:function(){console.log("这是一个服务端事件")}},"测试"))};var a=n()();a.get("/",(function(e,r){r.send("".concat((0,c.renderToString)(o().createElement(l,null))))})),a.listen(3e3,(function(){console.log("服务器在3000端口成功启动")}))})();