(this.webpackJsonpmy_web=this.webpackJsonpmy_web||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a(45)},,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.20857160.svg"},function(e,t,a){e.exports=a.p+"static/media/bg-header.f2435ee6.svg"},function(e,t,a){e.exports=a.p+"static/media/fea-bgSearch.01e4faf5.svg"},function(e,t,a){e.exports=a.p+"static/media/fea-search.66c50384.svg"},function(e,t,a){e.exports=a.p+"static/media/arrow-right-icon.a799d1d2.svg"},function(e,t,a){e.exports=a.p+"static/media/access.3bb40c83.svg"},function(e,t,a){e.exports=a.p+"static/media/bgAccess.2950ca14.svg"},function(e,t,a){e.exports=a.p+"static/media/print.2b40d4b4.svg"},function(e,t,a){e.exports=a.p+"static/media/bgPrint.490da0ef.svg"},function(e,t,a){e.exports=a.p+"static/media/security.0a5d2c59.svg"},function(e,t,a){e.exports=a.p+"static/media/bgSecurity.b4f5ae50.svg"},function(e,t,a){e.exports=a.p+"static/media/avt-slide.8b856daf.svg"},function(e,t,a){e.exports=a.p+"static/media/btn-right.ebb9bddb.svg"},function(e,t,a){e.exports=a.p+"static/media/btn-left.828b606f.svg"},function(e,t,a){e.exports=a.p+"static/media/media.0734a8e4.svg"},function(e,t,a){e.exports=a.p+"static/media/message.7d7c53ad.svg"},function(e,t,a){e.exports=a.p+"static/media/arrowDown.dc437df4.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-edit.a903ef36.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-delete.558e1dd4.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),s=a.n(l),r=(a(25),a(4)),o=a(2);var i={logo:a(26),bgHeader:a(27),bgFeaSearch:a(28),feaSearch:a(29),iconArrowRight:a(30),access:a(31),bgAccess:a(32),print:a(33),bgPrint:a(34),security:a(35),bgSecurity:a(36),avtSlide:a(37),btnRight:a(38),btnLeft:a(39),media:a(40),message:a(41),iconArrowDown:a(42),iconEdit:a(43),iconDelete:a(44)},m=a(3),d=a.n(m),u=a(8),p=a.n(u);const g=d.a.bind(p.a);var E=function(e){let{to:t,href:a,primary:n=!1,outline:l=!1,small:s=!1,large:o=!1,disabled:i=!1,rounded:m=!1,text:d=!1,type:u,leftIcon:p,rightIcon:E,className:h,children:v,onClick:f,...b}=e,N="Button";const y={onClick:f,...b};t?(y.to=t,N=r.b):a&&(y.href=a,N="a");const S=g("wrapper",{[h]:h,primary:n,outline:l,small:s,text:d,disabled:i,rounded:m,large:o});return c.a.createElement(N,Object.assign({className:S},y,{style:{display:"".concat(i?"none":"block")},type:u}),c.a.createElement("span",{className:g("title")},v))},h=a(9),v=a.n(h),f=a(10),b=a.n(f);d.a.bind(b.a);var N=function(e){let{title:t,content:a,img:n,bg:l}=e;const s=l;return c.a.createElement("div",{className:"card",style:{background:"url(".concat(s,") top right / contain no-repeat")}},c.a.createElement("div",{className:"card-img"},c.a.createElement("img",{src:n})),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"card-title"},c.a.createElement("span",null,t)),c.a.createElement("div",{className:"card-note"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"card-links"},c.a.createElement("a",null,"Learn more"),c.a.createElement("img",{src:i.iconArrowRight}))))},y=a(11),S=a.n(y);d.a.bind(S.a);var k=function(e){let{isLogin:t,isInLoginPage:a,href:n}=e;const l=Object(o.o)();return c.a.createElement("div",{className:"header-top"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:i.logo,alt:"logo"})),c.a.createElement("div",{className:"btn ".concat(a?"dp-none":""," ").concat(t?"":"only")},c.a.createElement(E,{primary:!0,disabled:!t,href:"/demo-deploy/profile"},"Profile"),c.a.createElement(E,{primary:!0,onClick:()=>{if(t){const e={method:"DELETE",headers:{accept:"*/*",authorization:"Bearer "+JSON.parse(localStorage.getItem("token")).accessToken}};fetch("https://agiletech-test-api.zeabur.app/auth/logout",e).then(e=>e.text()).then(e=>{l("/demo-deploy"),localStorage.removeItem("token")}).catch(e=>console.log(e))}else l("/demo-deploy/login")}},t?"Log out":"Sign In")))},w=a(12),j=a.n(w);d.a.bind(j.a);var O=function(e){let{contact:t,iconL:a,iconR:l}=e;const[s,r]=Object(n.useState)(0),[o,i]=Object(n.useState)([]),[m,d]=Object(n.useState)(0),[u,p]=Object(n.useState)(null),g=document.getElementById("item-w");function E(){if(null!=g&&void 0!=g){return g.offsetWidth}}const h=()=>{u&&(s==u.length-1?(r(0),d(0)):(r(e=>e+1),d(e=>e-E())))};return Object(n.useEffect)(()=>{const e=setInterval(h,5e3);return fetch("https://agiletech-test-api.zeabur.app/galleries",{method:"GET",headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{e&&(p(e),(e=>{let t=[];for(let a=0;a<e.length;a++)t.push(a);i(t)})(e))}).catch(e=>console.log(e)),()=>{clearInterval(e)}},[s]),c.a.createElement("div",{className:"slide-container"},c.a.createElement("div",{className:"wrapper-slide"},c.a.createElement("div",{className:"slide"},c.a.createElement("div",{className:"slide-items",style:{transform:"translateX(".concat(m,"px)")}},u&&u.map(e=>c.a.createElement("div",{className:"item",key:e.id,id:"item-w"},c.a.createElement("div",{className:"item-avt"},c.a.createElement("img",{src:e.imageUrl,alt:""})),c.a.createElement("div",{className:"item-content"},c.a.createElement("span",{className:"item-name"},"John Fang"),c.a.createElement("span",{className:"item-contact"},t),c.a.createElement("span",{className:"item-about"},e.desctiption))))))),c.a.createElement("div",{className:"slide-indexs"},o.map(e=>c.a.createElement("div",{className:"index ".concat(s==e?"index-focus":""),key:e}))),c.a.createElement("div",{className:"slide-btn"},c.a.createElement("div",{className:"btn-hover",onClick:()=>{0==s?(r(u.length-1),d(-1*E()*(u.length-1))):(r(e=>e-1),d(e=>e+E()))}},c.a.createElement("img",{src:a,alt:""})),c.a.createElement("div",{className:"btn-hover",onClick:h},c.a.createElement("img",{src:l,alt:""}))))};d.a.bind(v.a);var x=function(){return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement(k,{isLogin:!1,isInLoginPage:!1,href:""!=localStorage.getItem("accessToken")||void 0==localStorage.getItem("accessToken")?"/demo-deploy/home":"/demo-deploy/login"}),c.a.createElement("div",{className:"header-content"},c.a.createElement("div",{className:"content-title"},c.a.createElement("h3",null,"Save your data storage here.")),c.a.createElement("div",{className:"content-define"},c.a.createElement("span",null,"Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.")),c.a.createElement(E,{primary:!0},"Learn more"))),c.a.createElement("div",{className:"features"},c.a.createElement("div",{className:"fea-title"},c.a.createElement("h2",null,"Features"),c.a.createElement("span",null,"Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.")),c.a.createElement("div",{className:"fea-actions"},c.a.createElement(N,{title:"Search Data",content:"Don\u2019t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",img:i.feaSearch,bg:i.bgFeaSearch}),c.a.createElement(N,{title:"24 Hours Access",content:"Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",img:i.access,bg:i.bgAccess}),c.a.createElement(N,{title:"Print Out",content:"Print out service gives you convenience if someday you need print data, just edit it all and just print it.",img:i.print,bg:i.bgPrint}),c.a.createElement(N,{title:"Security Code",content:"Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",img:i.security,bg:i.bgSecurity}))),c.a.createElement("div",{className:"testimonials"},c.a.createElement("div",{className:"testi-title"},c.a.createElement("span",null,"Testimonials")),c.a.createElement("div",{className:"testi-slide"},c.a.createElement(O,{contact:"wordfaang.com",iconL:i.btnLeft,iconR:i.btnRight})))),c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",{className:"address-comp"},c.a.createElement("div",{className:"footer-logo"},c.a.createElement("img",{src:i.logo,alt:""}),c.a.createElement("span",null,"DataWarehouse")),c.a.createElement("span",{className:"address"},"Warehouse Society, 234 Bahagia Ave Street PRBW 29281"),c.a.createElement("span",{className:"contact"},"info@warehouse.project 1-232-3434 (Main)")),c.a.createElement("div",{className:"about-comp"},c.a.createElement("span",{className:"about-title"},"About"),c.a.createElement("div",{className:"about-contents"},c.a.createElement("span",null,"Profile Features Careers DW News"))),c.a.createElement("div",{className:"help-comp"},c.a.createElement("span",{className:"help-title"},"Help"),c.a.createElement("div",{className:"help-contents"},c.a.createElement("span",null,"Support Sign up Guide Reports Q&A"))),c.a.createElement("div",{className:"social-media"},c.a.createElement("span",{className:"media-title"},"Social Media"),c.a.createElement("div",{className:"medias"},c.a.createElement("img",{src:i.media,alt:""}),c.a.createElement("img",{src:i.media,alt:""}),c.a.createElement("img",{src:i.media,alt:""})))),c.a.createElement("div",{className:"copyright"},c.a.createElement("span",null,"\xa9 Datawarehouse\u2122, 2020. All rights reserved. Company Registration Number: 21479524."),c.a.createElement("img",{src:i.message,alt:""}))))},C=a(13),D=a.n(C),T=a(14),A=a.n(T);d.a.bind(A.a);var I=function(e){let{type:t,value:a,icon:n,name:l,onClick:s,placeholder:r}=e;return c.a.createElement("div",null,c.a.createElement("div",{className:"input"},c.a.createElement("input",{type:t,value:a,name:l,placeholder:r}),c.a.createElement("img",{src:n,alt:"",onClick:s})))};d.a.bind(D.a);var L=function(e){const t=Object(o.o)();return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement(k,{isLogin:!1,isInLoginPage:!0}),c.a.createElement("div",{className:"form-signIn"},c.a.createElement("form",{action:"",className:"form-container",onSubmit:e=>{e.preventDefault();const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.target[0].value})};fetch("https://agiletech-test-api.zeabur.app/auth/login",a).then(e=>e.json()).then(e=>{null!=e.accessToken||void 0!=e.accessToken?(localStorage.setItem("token",JSON.stringify(e)),t("/demo-deploy/home")):alert("username error!")}).catch(e=>console.log(e))}},c.a.createElement("span",{className:"form-title"},"Sign In"),c.a.createElement("span",{className:"username"},"Username"),c.a.createElement(I,{type:"text",name:"txtUserName"}),c.a.createElement(E,{primary:!0,type:"submit"},"Sign In")))))},P=a(15),z=a.n(P),B=a(16),R=a.n(B);d.a.bind(R.a);var W=function(e){let{isModalOpen:t,click:a,onClose:n}=e;return!0!==t?null:c.a.createElement("section",{className:"modal"},c.a.createElement("article",{className:"modal-content"},c.a.createElement("main",{className:"modal-mainContents"},c.a.createElement("span",{className:"modalText"},"Delete this Object"),c.a.createElement("div",{className:"modal-button"},c.a.createElement("button",{onClick:n},"Close"),c.a.createElement("button",{onClick:a},"Delete")))))};d.a.bind(z.a);var J=function(e){const[t,a]=Object(n.useState)(null),[l,s]=Object(n.useState)(1),[r,m]=Object(n.useState)(""),[d,u]=Object(n.useState)([]),[p,g]=Object(n.useState)(!1),[h,v]=Object(n.useState)([]),[f,b]=Object(n.useState)([]),[N,y]=Object(n.useState)(!1),[S,k]=Object(n.useState)(""),[w,j]=Object(n.useState)([]),[O,x]=Object(n.useState)(!1),[C,D]=Object(n.useState)(""),T=Object(o.o)(),A=e=>{if(!f.includes(e.tag)){let t=f;t.push(e.tag),b(t)}},L=()=>{if(g(!p),p){const e={method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer "+JSON.parse(localStorage.getItem("token")).accessToken}};fetch("https://agiletech-test-api.zeabur.app/posts/tags",e).then(e=>e.json()).then(e=>{e&&v(e)}).catch(e=>console.log(e))}};function P(){const e={method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer "+JSON.parse(localStorage.getItem("token")).accessToken}};fetch("https://agiletech-test-api.zeabur.app/posts?page=".concat(l),e).then(e=>e.json()).then(e=>{e&&e.posts&&(a(e),u((e=>{let t=[];for(let a=1;a<=e;a++)t.push(a);return t})(e.total_page)))}).catch(e=>console.log(e))}return Object(n.useEffect)(()=>{P()},[l]),c.a.createElement("div",{className:"profile"},c.a.createElement("div",{className:"sidebar"},c.a.createElement("img",{src:i.logo,alt:""}),c.a.createElement("a",{href:"/demo-deploy/home"},"Ports"),c.a.createElement("button",{onClick:()=>{x(!1);const e={method:"DELETE",headers:{accept:"*/*",authorization:"Bearer "+JSON.parse(localStorage.getItem("token")).accessToken}};fetch("https://agiletech-test-api.zeabur.app/auth/logout",e).then(e=>e.text()).then(e=>{T("/demo-deploy"),localStorage.removeItem("token")}).catch(e=>console.log(e))}},"Logout")),c.a.createElement("div",{className:"profile-content"},c.a.createElement("div",{className:"nav"},c.a.createElement(E,{primary:!0,onClick:()=>{return e="Add New",void(N?(y(!N),g(!1),P()):(k(e),y(!N),g(!1),b([])));var e}},N?"Back":"Add New"),c.a.createElement("div",{className:"profile-fillers ".concat(N?"dp-none":"")},c.a.createElement(I,{type:"text"}),c.a.createElement("div",{className:"tags"},c.a.createElement("div",{className:"input-tags"},c.a.createElement("input",{type:"text",value:f}),c.a.createElement("img",{src:i.iconArrowDown,alt:"",onClick:L})),c.a.createElement("div",{className:"list-tags ".concat(p?"show-tags":"")},h.map(e=>c.a.createElement("button",{onClick:()=>A({tag:e}),key:e,type:"button"},e)))))),c.a.createElement("div",{className:"data-posts"},c.a.createElement("div",{className:"table ".concat(N?"dp-none":"")},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"ID"),c.a.createElement("th",null,"Title"),c.a.createElement("th",null,"Description"),c.a.createElement("th",null,"Tags"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,t&&t.posts&&t.posts.map((e,t)=>c.a.createElement("tr",null,c.a.createElement("td",{key:t},e.id),c.a.createElement("td",null,e.title),c.a.createElement("td",null,e.description),c.a.createElement("td",null,e.tags),c.a.createElement("td",{className:"action-cell"},c.a.createElement("button",{className:"btn-action",onClick:()=>{return t=e,k("Edit"),y(!N),void j(t);var t}},c.a.createElement("img",{src:i.iconEdit,alt:""})),c.a.createElement("button",{className:"btn-action",onClick:()=>{return t=e.id,x(!0),void D(t);var t}},c.a.createElement("img",{src:i.iconDelete,alt:""})))))))),c.a.createElement("form",{action:"",className:"form-actions ".concat(N?"":"dp-none"),onSubmit:e=>{if(e.preventDefault(),"Add New"==S){const t={method:"POST",headers:{"Content-Type":"application/json",accept:"*/*",authorization:"Bearer "+JSON.parse(localStorage.getItem("token")).accessToken},body:JSON.stringify({title:e.target[0].value,description:e.target[1].value,tags:e.target[2].value.split(", ")})};fetch("https://agiletech-test-api.zeabur.app/posts",t).then(e=>e.json()).then(t=>{t&&(alert("Add new success"),e.target[0].value="",e.target[1].value="",e.target[2].value="")}).catch(e=>console.log(e))}else{const e={method:"PATCH",headers:{accept:"*/*",authorization:"Bearer "+JSON.parse(localStorage.getItem("token")).accessToken}};fetch("https://agiletech-test-api.zeabur.app/posts/".concat(w.id),e).then(e=>e.json()).then(e=>{e&&alert("Update success")}).catch(e=>console.log(e))}}},c.a.createElement("span",{className:"form-title"},S),c.a.createElement("div",{className:"form-input"},c.a.createElement("span",null,"Title"),c.a.createElement(I,{type:"text",placeholder:w.title})),c.a.createElement("div",{className:"form-input"},c.a.createElement("span",null,"Description"),c.a.createElement(I,{type:"text",placeholder:w.description})),c.a.createElement("div",{className:"form-input"},c.a.createElement("span",null,"Tags"),c.a.createElement("div",{className:"tags"},c.a.createElement("div",{className:"input-tags"},c.a.createElement("input",{type:"text",value:f,placeholder:w.tags}),c.a.createElement("img",{src:i.iconArrowDown,alt:"",onClick:L})),c.a.createElement("div",{className:"list-tags ".concat(p?"show-tags":"")},h.map(e=>c.a.createElement("button",{onClick:()=>A({tag:e}),key:e,type:"button"},e))))),c.a.createElement(E,{primary:!0,type:"submit"},"Save"))),c.a.createElement("div",{className:"pagination ".concat(N?"dp-none":"")},d.map(e=>c.a.createElement("button",{className:"btn-Pagination",key:e,onClick:()=>{s(e)}},e)))),c.a.createElement(W,{isModalOpen:O,click:()=>function(e){console.log(e);const t={method:"DELETE",headers:{accept:"*/*",authorization:"Bearer "+JSON.parse(localStorage.getItem("token")).accessToken}};fetch("https://agiletech-test-api.zeabur.app/posts/".concat(e),t).then(e=>e.text()).then(e=>{e&&(x(!1),P())}).catch(e=>console.log(e))}(C),onClose:()=>{x(!1)}}))};var F=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement(k,{isLogin:!0,isInLoginPage:!1}),c.a.createElement("div",{className:"header-content"},c.a.createElement("div",{className:"content-title"},c.a.createElement("h3",null,"Save your data storage here.")),c.a.createElement("div",{className:"content-define"},c.a.createElement("span",null,"Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.")),c.a.createElement(E,{primary:!0},"Learn more"))),c.a.createElement("div",{className:"features"},c.a.createElement("div",{className:"fea-title"},c.a.createElement("h2",null,"Features"),c.a.createElement("span",null,"Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.")),c.a.createElement("div",{className:"fea-actions"},c.a.createElement(N,{title:"Search Data",content:"Don\u2019t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",img:i.feaSearch,bg:i.bgFeaSearch}),c.a.createElement(N,{title:"24 Hours Access",content:"Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",img:i.access,bg:i.bgAccess}),c.a.createElement(N,{title:"Print Out",content:"Print out service gives you convenience if someday you need print data, just edit it all and just print it.",img:i.print,bg:i.bgPrint}),c.a.createElement(N,{title:"Security Code",content:"Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",img:i.security,bg:i.bgSecurity}))),c.a.createElement("div",{className:"testimonials"},c.a.createElement("div",{className:"testi-title"},c.a.createElement("span",null,"Testimonials")),c.a.createElement("div",{className:"testi-slide"},c.a.createElement(O,{avt:i.avtSlide,name:"John Fang",contact:"wordfaang.com",about:"Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",iconL:i.btnLeft,iconR:i.btnRight})))),c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",{className:"address-comp"},c.a.createElement("div",{className:"footer-logo"},c.a.createElement("img",{src:i.logo,alt:""}),c.a.createElement("span",null,"DataWarehouse")),c.a.createElement("span",{className:"address"},"Warehouse Society, 234 Bahagia Ave Street PRBW 29281"),c.a.createElement("span",{className:"contact"},"info@warehouse.project 1-232-3434 (Main)")),c.a.createElement("div",{className:"about-comp"},c.a.createElement("span",{className:"about-title"},"About"),c.a.createElement("div",{className:"about-contents"},c.a.createElement("span",null,"Profile Features Careers DW News"))),c.a.createElement("div",{className:"help-comp"},c.a.createElement("span",{className:"help-title"},"Help"),c.a.createElement("div",{className:"help-contents"},c.a.createElement("span",null,"Support Sign up Guide Reports Q&A"))),c.a.createElement("div",{className:"social-media"},c.a.createElement("span",{className:"media-title"},"Social Media"),c.a.createElement("div",{className:"medias"},c.a.createElement("img",{src:i.media,alt:""}),c.a.createElement("img",{src:i.media,alt:""}),c.a.createElement("img",{src:i.media,alt:""})))),c.a.createElement("div",{className:"copyright"},c.a.createElement("span",null,"\xa9 Datawarehouse\u2122, 2020. All rights reserved. Company Registration Number: 21479524."),c.a.createElement("img",{src:i.message,alt:""})))))};var M=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/demo-deploy",element:c.a.createElement(x,null)}),c.a.createElement(o.a,{path:"/demo-deploy/login",element:c.a.createElement(L,null)}),c.a.createElement(o.a,{path:"/demo-deploy/profile",element:c.a.createElement(J,null)}),c.a.createElement(o.a,{path:"/demo-deploy/home",element:c.a.createElement(F,null)}))))};var H=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then(t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:l,getTTFB:s}=t;a(e),n(e),c(e),l(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null))),H()}],[[17,1,2]]]);
//# sourceMappingURL=main.b07e9943.chunk.js.map