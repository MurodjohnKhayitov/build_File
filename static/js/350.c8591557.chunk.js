"use strict";(self.webpackChunkdekoart=self.webpackChunkdekoart||[]).push([[350],{613:function(e,r,a){a.r(r),a.d(r,{default:function(){return T}});var n=a(9439),t=a(2791),o=a(7689),c="maslahat_Container__fes3k",i="maslahat_Main__PqSik",l="maslahat_BreadcrumbItem__6H-d9",s="maslahat_Content__HYTRM",d="maslahat_ContentLeft__hJ0YZ",m="maslahat_LeftTitle__56RrI",u="maslahat_MainItem__Q2J8x",p="maslahat_ImgOne__3i7jN",h="maslahat_ImgTwo__GBEuz",b="maslahat_textLeft__2-dzB",f="maslahat_textLeftTwo__MxJJm",v="maslahat_ContentRight__23-wZ",x="maslahat_RightTitle__hgU-F",g="maslahat_ProductList__QkB0V",j="maslahat_ProductItems__p5wxa",_=a.p+"static/media/imgOne.4ac2e1ed4239cdd1f6d0.jpg",y=a.p+"static/media/1548312143_1548312080553.f300707c118aad5cc51c.png",C=a(6118),O=a(6355),S=a(1087),Z=a(1933),N=a(9230),k=a(6856),E=a(184);function T(){var e=(0,o.s0)(),r=(0,N.$G)(["serviceAdv"]).t;(0,t.useEffect)((function(){document.title="MASLAHAT BERAMIZ>> DEKOART.UZ",window.scrollTo({top:0,behavior:"smooth"})}),[]);var a=(0,t.useState)([]),T=(0,n.Z)(a,2),I=T[0],w=T[1];return(0,Z.useQuery)(["productlist type"],(function(){return fetch("".concat("https://dekoart.uz/api/v1","/productlist/")).then((function(e){return e.json()}))}),{onSuccess:function(e){w(e)},onError:function(e){console.log(e,"err")}}),(0,E.jsx)("div",{className:c,children:(0,E.jsxs)("div",{className:i,children:[(0,E.jsx)("div",{className:l,children:(0,E.jsxs)(C.Z,{children:[(0,E.jsx)(C.Z.Item,{children:(0,E.jsxs)(S.OL,{to:"/home",children:[(0,E.jsx)(O.xng,{style:{marginRight:"15px"}})," DEKOART.UZ"]})}),(0,E.jsx)(C.Z.Item,{children:(0,E.jsxs)(S.OL,{to:"/usluga",children:[" ",r("breadCrum1")]})}),(0,E.jsx)(C.Z.Item,{children:(0,E.jsxs)(S.OL,{to:"/maslahat",children:[" ",r("breadCrum2")]})})]})}),(0,E.jsxs)("div",{className:s,children:[(0,E.jsxs)("div",{className:d,children:[(0,E.jsx)("div",{className:m,children:(0,E.jsx)("p",{children:r("leftTitle")})}),(0,E.jsxs)("div",{className:u,children:[(0,E.jsxs)("div",{className:p,children:[(0,E.jsx)("img",{src:_,alt:""}),(0,E.jsx)("p",{children:r("imgTitle")})]}),(0,E.jsxs)("div",{className:b,children:[(0,E.jsx)("p",{children:r("textOne")}),(0,E.jsxs)("p",{children:[r("textTwo")," "]})]}),(0,E.jsx)("div",{className:h,children:(0,E.jsx)("img",{src:y,alt:""})}),(0,E.jsxs)("div",{className:f,children:[(0,E.jsxs)("p",{children:[r("idea1"),(0,E.jsx)("b",{style:{color:"green",cursor:"pointer"},children:r("idea2")})," ",r("idea3")]}),(0,E.jsxs)("p",{children:[r("idea4"),(0,E.jsx)("b",{children:"+(998) 99 855-26-66; +(998) 99 863-26-66; +(998) 99 326-26-66;"})]})]})]})]}),(0,E.jsxs)("div",{className:v,children:[(0,E.jsx)("div",{className:x,children:(0,E.jsx)("p",{children:r("produtTitle")})}),(0,E.jsx)("div",{className:g,children:I.map((function(r){return(0,E.jsxs)("div",{onClick:function(){return a=r.id,void e("/product_det/:".concat(a));var a},className:j,children:[(0,E.jsx)("p",{children:(0,E.jsx)(k.acS,{size:30})}),(0,E.jsx)("p",{children:r.name})]},r.id)}))})]})]})]})})}},6118:function(e,r,a){a.d(r,{Z:function(){return L}});var n=a(4942),t=a(9439),o=a(3433),c=a(1694),i=a.n(c),l=a(5501),s=a(2791),d=a(1929),m=a(8616),u=a(1113),p=a(1413),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},b=a(4291),f=function(e,r){return s.createElement(b.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:r,icon:h}))};f.displayName="DownOutlined";var v=s.forwardRef(f),x=a(5724),g=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a},j=function(e){var r=e.prefixCls,a=e.separator,n=void 0===a?"/":a,t=e.children,o=e.menu,c=e.overlay,i=e.dropdownProps,l=g(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),m=(0,s.useContext(d.E_).getPrefixCls)("breadcrumb",r);var u;return u=function(r){if(o||c){var a=Object.assign({},i);return"overlay"in e&&(a.overlay=c),s.createElement(x.Z,Object.assign({menu:o,placement:"bottom"},a),s.createElement("span",{className:"".concat(m,"-overlay-link")},r,s.createElement(v,null)))}return r}(u="href"in l?s.createElement("a",Object.assign({className:"".concat(m,"-link")},l),t):s.createElement("span",Object.assign({className:"".concat(m,"-link")},l),t)),void 0!==t&&null!==t?s.createElement("li",null,u,n&&s.createElement("span",{className:"".concat(m,"-separator")},n)):null};j.__ANT_BREADCRUMB_ITEM=!0;var _=j,y=function(e){var r=e.children,a=(0,s.useContext(d.E_).getPrefixCls)("breadcrumb");return s.createElement("li",{className:"".concat(a,"-separator"),"aria-hidden":"true"},r||"/")};y.__ANT_BREADCRUMB_SEPARATOR=!0;var C=y,O=a(5564),S=a(9922),Z=a(7521),N=function(e){var r,a,t=e.componentCls,o=e.iconCls;return(0,n.Z)({},t,Object.assign(Object.assign({},(0,Z.Wf)(e)),(a={color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize},(0,n.Z)(a,o,{fontSize:e.breadcrumbIconFontSize}),(0,n.Z)(a,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),(0,n.Z)(a,"a",Object.assign({color:e.breadcrumbLinkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},(0,Z.Qy)(e))),(0,n.Z)(a,"li:last-child",(0,n.Z)({color:e.breadcrumbLastItemColor},"& > ".concat(t,"-separator"),{display:"none"})),(0,n.Z)(a,"".concat(t,"-separator"),{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor}),(0,n.Z)(a,"".concat(t,"-link"),(0,n.Z)({},"\n          > ".concat(o," + span,\n          > ").concat(o," + a\n        "),{marginInlineStart:e.marginXXS})),(0,n.Z)(a,"".concat(t,"-overlay-link"),(r={borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},(0,n.Z)(r,"> ".concat(o),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),(0,n.Z)(r,"&:hover",{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}}),(0,n.Z)(r,"a",{"&:hover":{backgroundColor:"transparent"}}),r)),(0,n.Z)(a,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),a)))},k=(0,O.Z)("Breadcrumb",(function(e){var r=(0,S.TS)(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[N(r)]})),E=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};function T(e,r,a,n){var t=a.indexOf(e)===a.length-1,o=function(e,r){if(!e.breadcrumbName)return null;var a=Object.keys(r).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return r[a]||e}))}(e,r);return t?s.createElement("span",null,o):s.createElement("a",{href:"#/".concat(n.join("/"))},o)}var I=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach((function(a){e=e.replace(":".concat(a),r[a])})),e},w=function(e,r,a){var n=(0,o.Z)(e),t=I(r||"",a);return t&&n.push(t),n},R=function(e){var r,a=e.prefixCls,o=e.separator,c=void 0===o?"/":o,p=e.style,h=e.className,b=e.rootClassName,f=e.routes,v=e.children,x=e.itemRender,g=void 0===x?T:x,j=e.params,y=void 0===j?{}:j,C=E(e,["prefixCls","separator","style","className","rootClassName","routes","children","itemRender","params"]),O=s.useContext(d.E_),S=O.getPrefixCls,Z=O.direction,N=S("breadcrumb",a),R=k(N),L=(0,t.Z)(R,2),z=L[0],B=L[1];if(f&&f.length>0){var M=[];r=f.map((function(e){var r,a=I(e.path,y);a&&M.push(a),e.children&&e.children.length&&(r=s.createElement(m.Z,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:g(e,y,f,w(M,e.path,y))}}))}));var n={separator:c};return r&&(n.overlay=r),s.createElement(_,Object.assign({},n,{key:a||e.breadcrumbName}),g(e,y,f,M))}))}else v&&(r=(0,l.Z)(v).map((function(e,r){return e?(0,u.Tm)(e,{separator:c,key:r}):e})));var P=i()(N,(0,n.Z)({},"".concat(N,"-rtl"),"rtl"===Z),h,b,B);return z(s.createElement("nav",Object.assign({className:P,style:p},C),s.createElement("ol",null,r)))};R.Item=_,R.Separator=C;var L=R}}]);
//# sourceMappingURL=350.c8591557.chunk.js.map