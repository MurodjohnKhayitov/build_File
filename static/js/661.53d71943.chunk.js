"use strict";(self.webpackChunkdekoart=self.webpackChunkdekoart||[]).push([[661],{6997:function(e,r,a){a.d(r,{H:function(){return n}});var n="http://dekoart.jamgirov.uz/api/v1"},9181:function(e,r,a){a.r(r),a.d(r,{default:function(){return S}});var n=a(9439),t=a(2791),o="master_Container__wTO3R",i="master_Main__folFS",c="master_BreadcrumbItem__YIpd6",l="master_CardGroup__7kvrc",s="master_Cards__igJn7",d="master_ForImg__bEzdD",u="master_ForText__o6lF9",m="master_ForTextTitle__uHsqQ",p="master_ForTextBtn__40Eoa",b=a.p+"static/media/abdulla.166a88eaf926b45f64e7.jpg",f=a(6118),h=a(6355),v=a(7689),g=a(1087),x=a(6997),y=a(9230),j=a(4522),k=a(4270),O=a(184);function S(){var e=(0,y.$G)(["masters"]).t,r=(0,v.s0)(),a=(0,t.useState)([]),S=(0,n.Z)(a,2),C=S[0],_=S[1],E=(0,t.useContext)(j.z),Z=(0,n.Z)(E,2),T=Z[0];Z[1];return(0,t.useEffect)((function(){var e;e={language:null===T||void 0===T?void 0:T.typeLang},Object.entries(e).forEach((function(r){r[1]||delete e[r[0]]})),fetch("".concat(x.H,"/masters/?")+new URLSearchParams(e)).then((function(e){return e.json()})).then((function(e){_(e)})).catch((function(e){return console.log(e,"ERROrLIST")})),window.scrollTo({top:0,behavior:"smooth"})}),[null===T||void 0===T?void 0:T.typeLang]),(0,O.jsxs)("div",{className:o,children:[(0,O.jsxs)(k.q,{children:[(0,O.jsx)("title",{children:"Ustalar"}),(0,O.jsx)("meta",{name:"description",content:"DEKOART\u201d \u2013 Ozbekistonda tashqi va ichki yuzalar uchun eng zamonaviy, yuqori sifatli lok boyoq, devor qoplama mahsulolartidir."}),(0,O.jsx)("meta",{name:"description",content:"DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:"}),(0,O.jsx)("meta",{name:"keywords",content:"sadaf decocento dekoart krasska lak buyoq "})]}),(0,O.jsxs)("div",{className:i,children:[(0,O.jsx)("div",{className:c,children:(0,O.jsxs)(f.Z,{children:[(0,O.jsx)(f.Z.Item,{children:(0,O.jsxs)(g.OL,{to:"/home",children:[(0,O.jsx)(h.xng,{style:{marginRight:"15px"}})," DEKOART.UZ"]})}),(0,O.jsx)(f.Z.Item,{children:(0,O.jsxs)(g.OL,{to:"/news",children:[" ",e("breadCrum1")]})})]})}),(0,O.jsx)("div",{className:l,children:C.map((function(a){return(0,O.jsxs)("div",{className:s,onClick:function(){return e=null===a||void 0===a?void 0:a.id,void r("/masters/:".concat(e));var e},children:[(0,O.jsx)("div",{className:d,children:(0,O.jsx)("img",{src:(null===a||void 0===a?void 0:a.photo)||b,alt:""})}),(0,O.jsxs)("div",{className:u,children:[(0,O.jsxs)("div",{className:m,children:[(0,O.jsxs)("p",{children:[(0,O.jsx)("span",{children:"Ism:"}),a.name]}),(0,O.jsxs)("p",{children:[(0,O.jsx)("span",{children:"Tel:"}),"+998951982666"]})]}),(0,O.jsx)("div",{className:p,children:(0,O.jsx)("button",{type:"",children:e("SliderBtn")})})]})]},a.id)}))})]})]})}},6118:function(e,r,a){a.d(r,{Z:function(){return z}});var n=a(4942),t=a(9439),o=a(3433),i=a(1694),c=a.n(i),l=a(5501),s=a(2791),d=a(1929),u=a(8616),m=a(1113),p=a(1413),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},f=a(4291),h=function(e,r){return s.createElement(f.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:r,icon:b}))};h.displayName="DownOutlined";var v=s.forwardRef(h),g=a(5724),x=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a},y=function(e){var r=e.prefixCls,a=e.separator,n=void 0===a?"/":a,t=e.children,o=e.menu,i=e.overlay,c=e.dropdownProps,l=x(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),u=(0,s.useContext(d.E_).getPrefixCls)("breadcrumb",r);var m;return m=function(r){if(o||i){var a=Object.assign({},c);return"overlay"in e&&(a.overlay=i),s.createElement(g.Z,Object.assign({menu:o,placement:"bottom"},a),s.createElement("span",{className:"".concat(u,"-overlay-link")},r,s.createElement(v,null)))}return r}(m="href"in l?s.createElement("a",Object.assign({className:"".concat(u,"-link")},l),t):s.createElement("span",Object.assign({className:"".concat(u,"-link")},l),t)),void 0!==t&&null!==t?s.createElement("li",null,m,n&&s.createElement("span",{className:"".concat(u,"-separator")},n)):null};y.__ANT_BREADCRUMB_ITEM=!0;var j=y,k=function(e){var r=e.children,a=(0,s.useContext(d.E_).getPrefixCls)("breadcrumb");return s.createElement("li",{className:"".concat(a,"-separator"),"aria-hidden":"true"},r||"/")};k.__ANT_BREADCRUMB_SEPARATOR=!0;var O=k,S=a(5564),C=a(9922),_=a(7521),E=function(e){var r,a,t=e.componentCls,o=e.iconCls;return(0,n.Z)({},t,Object.assign(Object.assign({},(0,_.Wf)(e)),(a={color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize},(0,n.Z)(a,o,{fontSize:e.breadcrumbIconFontSize}),(0,n.Z)(a,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),(0,n.Z)(a,"a",Object.assign({color:e.breadcrumbLinkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},(0,_.Qy)(e))),(0,n.Z)(a,"li:last-child",(0,n.Z)({color:e.breadcrumbLastItemColor},"& > ".concat(t,"-separator"),{display:"none"})),(0,n.Z)(a,"".concat(t,"-separator"),{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor}),(0,n.Z)(a,"".concat(t,"-link"),(0,n.Z)({},"\n          > ".concat(o," + span,\n          > ").concat(o," + a\n        "),{marginInlineStart:e.marginXXS})),(0,n.Z)(a,"".concat(t,"-overlay-link"),(r={borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},(0,n.Z)(r,"> ".concat(o),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),(0,n.Z)(r,"&:hover",{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}}),(0,n.Z)(r,"a",{"&:hover":{backgroundColor:"transparent"}}),r)),(0,n.Z)(a,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),a)))},Z=(0,S.Z)("Breadcrumb",(function(e){var r=(0,C.TS)(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[E(r)]})),T=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};function N(e,r,a,n){var t=a.indexOf(e)===a.length-1,o=function(e,r){if(!e.breadcrumbName)return null;var a=Object.keys(r).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return r[a]||e}))}(e,r);return t?s.createElement("span",null,o):s.createElement("a",{href:"#/".concat(n.join("/"))},o)}var R=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach((function(a){e=e.replace(":".concat(a),r[a])})),e},w=function(e,r,a){var n=(0,o.Z)(e),t=R(r||"",a);return t&&n.push(t),n},I=function(e){var r,a=e.prefixCls,o=e.separator,i=void 0===o?"/":o,p=e.style,b=e.className,f=e.rootClassName,h=e.routes,v=e.children,g=e.itemRender,x=void 0===g?N:g,y=e.params,k=void 0===y?{}:y,O=T(e,["prefixCls","separator","style","className","rootClassName","routes","children","itemRender","params"]),S=s.useContext(d.E_),C=S.getPrefixCls,_=S.direction,E=C("breadcrumb",a),I=Z(E),z=(0,t.Z)(I,2),L=z[0],X=z[1];if(h&&h.length>0){var B=[];r=h.map((function(e){var r,a=R(e.path,k);a&&B.push(a),e.children&&e.children.length&&(r=s.createElement(u.Z,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:x(e,k,h,w(B,e.path,k))}}))}));var n={separator:i};return r&&(n.overlay=r),s.createElement(j,Object.assign({},n,{key:a||e.breadcrumbName}),x(e,k,h,B))}))}else v&&(r=(0,l.Z)(v).map((function(e,r){return e?(0,m.Tm)(e,{separator:i,key:r}):e})));var P=c()(E,(0,n.Z)({},"".concat(E,"-rtl"),"rtl"===_),b,f,X);return L(s.createElement("nav",Object.assign({className:P,style:p},O),s.createElement("ol",null,r)))};I.Item=j,I.Separator=O;var z=I}}]);
//# sourceMappingURL=661.53d71943.chunk.js.map