"use strict";(self.webpackChunkdekoart=self.webpackChunkdekoart||[]).push([[153],{1153:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(9439),a=n(2791),o=n(7689),c="newsDetail_Container__IH5VG",i="newsDetail_Main__DCPlm",l="newsDetail_BreadcrumbItem__eKHrl",s="newsDetail_Content__xCK+X",d="newsDetail_ContentLeft__8Uv-m",u="newsDetail_LeftTitle__6sYVO",m="newsDetail_MainItem__JkGUW",p="newsDetail_ImgOne__sECTG",b="newsDetail_ContentRight__ySFjy",f="newsDetail_RightTitle__XWrcL",v="newsDetail_ProductList__S6acZ",h="newsDetail_ProductItems__yL85i",g="newsDetail_Descripton__Ss9Gs",x=n(6118),_=n(6355),j=n(1087),y=n(1933),S=n(9230),C=n(184),O="https://dekoart.uz/api/v1";function w(){var e;(0,a.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);var r=(0,S.$G)(["news"]).t,n=(0,o.s0)(),w=(0,a.useState)([]),N=(0,t.Z)(w,2),Z=N[0],E=N[1];(0,y.useQuery)(["productlist type"],(function(){return fetch("".concat(O,"/productlist/")).then((function(e){return e.json()}))}),{onSuccess:function(e){E(e)},onError:function(e){console.log(e,"err")}});var k=(0,o.UO)().id.replace(":",""),D=(0,a.useState)([]),I=(0,t.Z)(D,2),T=I[0],L=I[1];return(0,y.useQuery)(["newsDetail type"],(function(){return fetch("".concat(O,"/news/").concat(k)).then((function(e){return e.json()}))}),{onSuccess:function(e){L(e)},onError:function(e){console.log(e,"err")}}),(0,C.jsx)("div",{className:c,children:(0,C.jsxs)("div",{className:i,children:[(0,C.jsx)("div",{className:l,children:(0,C.jsxs)(x.Z,{children:[(0,C.jsx)(x.Z.Item,{children:(0,C.jsxs)(j.OL,{to:"/home",children:[(0,C.jsx)(_.xng,{style:{marginRight:"15px"}})," DEKOART.UZ"]})}),(0,C.jsx)(x.Z.Item,{children:(0,C.jsxs)(j.OL,{to:"/news",children:[" ",r("breadCrum1")]})}),(0,C.jsx)(x.Z.Item,{children:(0,C.jsxs)(j.OL,{to:"/news/:".concat(k),children:[" ",null===T||void 0===T?void 0:T.title," "]})})]})}),(0,C.jsxs)("div",{className:s,children:[(0,C.jsxs)("div",{className:d,children:[(0,C.jsx)("div",{className:u,children:(0,C.jsx)("p",{children:null===T||void 0===T?void 0:T.title})}),(0,C.jsxs)("div",{className:m,children:[(0,C.jsx)("div",{className:g,children:(0,C.jsx)("p",{id:"terms-content",dangerouslySetInnerHTML:{__html:null===T||void 0===T?void 0:T.description}})}),null===T||void 0===T||null===(e=T.attachment)||void 0===e?void 0:e.map((function(e){return(0,C.jsxs)("div",{className:p,children:[(0,C.jsx)("img",{src:null===e||void 0===e?void 0:e.photo_url,alt:"NoData"}),(0,C.jsx)("p",{id:"terms-content",dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.title)||"NoData"}})]})}))]})]}),(0,C.jsxs)("div",{className:b,children:[(0,C.jsx)("div",{className:f,children:(0,C.jsx)("p",{children:r("produtTitle")})}),(0,C.jsx)("div",{className:v,children:Z.map((function(e){return(0,C.jsxs)("div",{onClick:function(){return function(e){n("/product_det/:".concat(e))}(e.id)},className:h,children:[(0,C.jsxs)("p",{children:[" ",(0,C.jsx)("i",{className:"fa fa-chevron-right"})]}),(0,C.jsx)("p",{children:(null===e||void 0===e?void 0:e.name)||"name"})]},e.id)}))})]})]})]})})}},6118:function(e,r,n){n.d(r,{Z:function(){return L}});var t=n(4942),a=n(9439),o=n(3433),c=n(1694),i=n.n(c),l=n(5501),s=n(2791),d=n(1929),u=n(8616),m=n(1113),p=n(1413),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},f=n(4291),v=function(e,r){return s.createElement(f.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:r,icon:b}))};v.displayName="DownOutlined";var h=s.forwardRef(v),g=n(5724),x=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n},_=function(e){var r=e.prefixCls,n=e.separator,t=void 0===n?"/":n,a=e.children,o=e.menu,c=e.overlay,i=e.dropdownProps,l=x(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),u=(0,s.useContext(d.E_).getPrefixCls)("breadcrumb",r);var m;return m=function(r){if(o||c){var n=Object.assign({},i);return"overlay"in e&&(n.overlay=c),s.createElement(g.Z,Object.assign({menu:o,placement:"bottom"},n),s.createElement("span",{className:"".concat(u,"-overlay-link")},r,s.createElement(h,null)))}return r}(m="href"in l?s.createElement("a",Object.assign({className:"".concat(u,"-link")},l),a):s.createElement("span",Object.assign({className:"".concat(u,"-link")},l),a)),void 0!==a&&null!==a?s.createElement("li",null,m,t&&s.createElement("span",{className:"".concat(u,"-separator")},t)):null};_.__ANT_BREADCRUMB_ITEM=!0;var j=_,y=function(e){var r=e.children,n=(0,s.useContext(d.E_).getPrefixCls)("breadcrumb");return s.createElement("li",{className:"".concat(n,"-separator"),"aria-hidden":"true"},r||"/")};y.__ANT_BREADCRUMB_SEPARATOR=!0;var S=y,C=n(5564),O=n(9922),w=n(7521),N=function(e){var r,n,a=e.componentCls,o=e.iconCls;return(0,t.Z)({},a,Object.assign(Object.assign({},(0,w.Wf)(e)),(n={color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize},(0,t.Z)(n,o,{fontSize:e.breadcrumbIconFontSize}),(0,t.Z)(n,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),(0,t.Z)(n,"a",Object.assign({color:e.breadcrumbLinkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},(0,w.Qy)(e))),(0,t.Z)(n,"li:last-child",(0,t.Z)({color:e.breadcrumbLastItemColor},"& > ".concat(a,"-separator"),{display:"none"})),(0,t.Z)(n,"".concat(a,"-separator"),{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor}),(0,t.Z)(n,"".concat(a,"-link"),(0,t.Z)({},"\n          > ".concat(o," + span,\n          > ").concat(o," + a\n        "),{marginInlineStart:e.marginXXS})),(0,t.Z)(n,"".concat(a,"-overlay-link"),(r={borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},(0,t.Z)(r,"> ".concat(o),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),(0,t.Z)(r,"&:hover",{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}}),(0,t.Z)(r,"a",{"&:hover":{backgroundColor:"transparent"}}),r)),(0,t.Z)(n,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),n)))},Z=(0,C.Z)("Breadcrumb",(function(e){var r=(0,O.TS)(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[N(r)]})),E=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n};function k(e,r,n,t){var a=n.indexOf(e)===n.length-1,o=function(e,r){if(!e.breadcrumbName)return null;var n=Object.keys(r).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return r[n]||e}))}(e,r);return a?s.createElement("span",null,o):s.createElement("a",{href:"#/".concat(t.join("/"))},o)}var D=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach((function(n){e=e.replace(":".concat(n),r[n])})),e},I=function(e,r,n){var t=(0,o.Z)(e),a=D(r||"",n);return a&&t.push(a),t},T=function(e){var r,n=e.prefixCls,o=e.separator,c=void 0===o?"/":o,p=e.style,b=e.className,f=e.rootClassName,v=e.routes,h=e.children,g=e.itemRender,x=void 0===g?k:g,_=e.params,y=void 0===_?{}:_,S=E(e,["prefixCls","separator","style","className","rootClassName","routes","children","itemRender","params"]),C=s.useContext(d.E_),O=C.getPrefixCls,w=C.direction,N=O("breadcrumb",n),T=Z(N),L=(0,a.Z)(T,2),R=L[0],P=L[1];if(v&&v.length>0){var X=[];r=v.map((function(e){var r,n=D(e.path,y);n&&X.push(n),e.children&&e.children.length&&(r=s.createElement(u.Z,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:x(e,y,v,I(X,e.path,y))}}))}));var t={separator:c};return r&&(t.overlay=r),s.createElement(j,Object.assign({},t,{key:n||e.breadcrumbName}),x(e,y,v,X))}))}else h&&(r=(0,l.Z)(h).map((function(e,r){return e?(0,m.Tm)(e,{separator:c,key:r}):e})));var z=i()(N,(0,t.Z)({},"".concat(N,"-rtl"),"rtl"===w),b,f,P);return R(s.createElement("nav",Object.assign({className:z,style:p},S),s.createElement("ol",null,r)))};T.Item=j,T.Separator=S;var L=T}}]);
//# sourceMappingURL=153.be870b69.chunk.js.map