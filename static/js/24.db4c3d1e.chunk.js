"use strict";(self.webpackChunkdekoart=self.webpackChunkdekoart||[]).push([[24],{5024:function(e,i,n){n.r(i),n.d(i,{default:function(){return y}});var t=n(9439),s=n(2791),d=n(9230),o=n(1933),c=n(7689),r=n(1087),l="video_Container__OaD9O",a="video_Main__wvecu",u="video_Content__SunGr",h="video_ContentLeft__qwSuo",v="video_LeftTitle__hSkHN",_="video_MainItem__2tdUH",x="video_ForText__XLrRq",j="video_textLeftTwo__Zl3bX",f="video_ContentRight__czfL5",m="video_RightTitle__sxjda",p="video_ProductList__AxU6p",N="video_ProductItems__hkRSH",g="video_video_youtub__Cou8i",k=n(6710),w=n(6118),L=n(6355),Z=n(184),b="https://dekoart.uz/api/v1",y=function(){var e=(0,c.UO)().id.replace(":",""),i=(0,c.s0)(),n=(0,s.useState)([]),y=(0,t.Z)(n,2),C=y[0],S=y[1];(0,o.useQuery)(["VideoIdGet type"],(function(){return fetch("".concat(b,"/videos/").concat(e)).then((function(e){return e.json()}))}),{onSuccess:function(e){S(e)},onError:function(e){console.log(e,"err")}});var I=(0,s.useState)([]),O=(0,t.Z)(I,2),T=O[0],R=O[1];(0,o.useQuery)(["videoProductlist type"],(function(){return fetch("".concat(b,"/productlist/")).then((function(e){return e.json()}))}),{onSuccess:function(e){R(e)},onError:function(e){console.log(e,"err")}}),(0,s.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);var E=(0,d.$G)(["video"]).t;return(0,Z.jsx)("div",{className:l,children:(0,Z.jsxs)("div",{className:a,children:[(0,Z.jsx)("div",{className:"BreadcrumbItem",children:(0,Z.jsxs)(w.Z,{children:[(0,Z.jsx)(w.Z.Item,{children:(0,Z.jsxs)(r.OL,{to:"/home",children:[(0,Z.jsx)(L.xng,{style:{marginRight:"15px"}})," DEKOART.UZ"]})}),(0,Z.jsx)(w.Z.Item,{children:(0,Z.jsx)(r.OL,{to:"/product",children:"Videolar"})}),(0,Z.jsx)(w.Z.Item,{children:(0,Z.jsx)(r.OL,{to:"video/:".concat(e),children:null===C||void 0===C?void 0:C.title})})]})}),(0,Z.jsxs)("div",{className:u,children:[(0,Z.jsxs)("div",{className:h,children:[(0,Z.jsx)("div",{className:v,children:(0,Z.jsx)("p",{children:(null===C||void 0===C?void 0:C.title)||"no data"})}),(0,Z.jsxs)("div",{className:_,children:[(0,Z.jsx)("div",{className:g,children:(0,Z.jsx)(k.Z,{width:"100%",height:"100%",style:{width:"100%",height:"100%"},url:null===C||void 0===C?void 0:C.video_url})}),(0,Z.jsx)("div",{className:x,children:(0,Z.jsx)("p",{children:null===C||void 0===C?void 0:C.title})}),(0,Z.jsxs)("div",{className:j,children:[(0,Z.jsxs)("p",{children:[E("idea1")," ",(0,Z.jsx)("b",{style:{color:"green",cursor:"pointer"},children:E("idea2")}),E("idea3")]}),(0,Z.jsxs)("p",{children:[E("idea4"),(0,Z.jsx)("b",{children:"+(998) 95 198-26-66; +(998) 99 855-26-66; +(998) 99 486-26-66;"})]})]})]})]}),(0,Z.jsxs)("div",{className:f,children:[(0,Z.jsx)("div",{className:m,children:(0,Z.jsx)("p",{children:E("produtTitle")})}),(0,Z.jsx)("div",{className:p,children:null===T||void 0===T?void 0:T.map((function(e){return(0,Z.jsxs)("div",{onClick:function(){return function(e){i("/product_det/:".concat(e))}(e.id)},className:N,children:[(0,Z.jsxs)("p",{children:[" ",(0,Z.jsx)("i",{className:"fa fa-chevron-right"})]}),(0,Z.jsx)("p",{children:(null===e||void 0===e?void 0:e.name)||"name"})]},e.id)}))})]})]})]})})}}}]);
//# sourceMappingURL=24.db4c3d1e.chunk.js.map