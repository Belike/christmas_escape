(function(){"use strict";var e={9115:function(e,t,n){var r=n(9242),i=n(3396);function a(e,t,n,r,a,o){const u=(0,i.up)("router-view"),s=(0,i.up)("v-main"),l=(0,i.up)("v-app");return(0,i.wg)(),(0,i.j4)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u)])),_:1})])),_:1})}var o={name:"App",data:()=>({})},u=n(89);const s=(0,u.Z)(o,[["render",a]]);var l=s,c=n(2483);const d=(0,i._)("label",{for:"passphrase"},"Enter passphrase:",-1),p=(0,i._)("button",{type:"submit"},"Log In",-1);function f(e,t,n,a,o,u){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("form",{onSubmit:t[1]||(t[1]=(0,r.iM)(((...e)=>u.login&&u.login(...e)),["prevent"]))},[d,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.passphrase=e),type:"password",id:"passphrase"},null,512),[[r.nr,o.passphrase]]),p],32)])}n(7658);var g={data(){return{passphrase:"",loginAttempts:3}},methods:{login(){0==this.loginAttempts?this.$router.push("/fail"):"test"===this.passphrase?this.$router.push("/app"):(this.loginAttempts--,alert("Deine Eingabe war töricht, du hast "+this.loginAttempts+" weitere Versuche"))}}};const m=(0,u.Z)(g,[["render",f]]);var h=m;function b(e,t,n,r,a,o){const u=(0,i.up)("header-item"),s=(0,i.up)("Card");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(u),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.cards,(e=>((0,i.wg)(),(0,i.j4)(s,{key:e.id,imageUrl:e.imageUrl,imageTitle:e.imageTitle,blogTitle:e.blogTitle,blogText:e.blogText,date:e.date,style:{"margin-top":"20px"}},null,8,["imageUrl","imageTitle","blogTitle","blogText","date"])))),128))])}var v=n(7139);const w={class:"card"},y={class:"card-image"},T=["src","alt"],k={class:"image-title"},_={class:"card-content"},j={class:"date"},O={class:"blog-title"},x={class:"blog-text"};function A(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("div",y,[(0,i._)("img",{src:n.imageUrl,alt:n.imageTitle},null,8,T),(0,i._)("h3",k,(0,v.zw)(n.imageTitle),1)]),(0,i._)("div",_,[(0,i._)("h4",j,(0,v.zw)(n.date),1),(0,i._)("h2",O,(0,v.zw)(n.blogTitle),1),(0,i._)("p",x,(0,v.zw)(n.blogText),1)])])}var S={name:"CardComponent",props:{imageUrl:{type:String,required:!0},imageTitle:{type:String,required:!0},blogTitle:{type:String,required:!0},blogText:{type:String,required:!0},date:{type:String,required:!0}}};const P=(0,u.Z)(S,[["render",A]]);var U=P;const C={class:"header"},D=(0,i._)("h1",{class:"header-text"},"Du hast den Fluch besiegt!",-1),q=[D];function M(e,t){return(0,i.wg)(),(0,i.iD)("header",C,q)}const E={},z=(0,u.Z)(E,[["render",M]]);var F=z,Z={name:"CardList",components:{Card:U,HeaderItem:F},data(){return{cards:[{id:1,imageUrl:"/images/anfahrt.jpg",imageTitle:"Fahrt nach Arnhem Niederlande",blogTitle:"Die Fahrt",blogText:"Nach deiner anstrengenden Hospitation hast du es verdient, dich eine Weile vom Stress zu erholen. Deshalb möchte ich dich einladen, das Wochenende in Arnhem mit mir zu verbringen. Die Fahrt dorthin dauert ungefähr eine Stunde und 30 Minuten und kann locker auch nach der Arbeit angetreten werden. In Arnhem gibt es viele Möglichkeiten, wie wir unseren ersten Abend verbringen können - wir können ein Restaurant besuchen oder in unserer modernen Unterkunft kochen und uns dort aufhalten.",date:"März 31, 2023"},{id:2,imageUrl:"/images/haus.jpg",imageTitle:"Buitenplaats Petersburg",blogTitle:"Unterkunft mit Stil und Picknick",blogText:"Auch der Morgen des zweiten Tages lässt keine Wünsche offen. Ich habe bei der Unterkunft einen Picknickkorb reserviert, der uns an der Tür abgestellt wird. Mit diesen Leckereien werden wir sicher gestärkt in den Tag durchstarten können!"},{id:3,imageUrl:"/images/seekuh.jpg",imageTitle:"(Optional) Burgers Zoo",blogTitle:"Blog Title 3",blogText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]}}};const L=(0,u.Z)(Z,[["render",b]]);var N=L;const W={class:"card"},I=(0,i._)("img",{class:"giant-picture",src:"images/grinch.jpg",alt:"Picture"},null,-1),B=(0,i._)("div",{class:"text-overlay"},[(0,i._)("p",null,"Ich habe gewonnen!")],-1),H=[I,B];function R(e,t){return(0,i.wg)(),(0,i.iD)("div",W,H)}const V={},$=(0,u.Z)(V,[["render",R]]);var K=$;const Y=[{path:"/",name:"login",component:h},{path:"/app",name:"App",component:N},{path:"/fail",name:"Fail",component:K}],G=(0,c.p7)({history:(0,c.r5)(),routes:Y});var J=G;async function Q(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Q(),(0,r.ri)(l).use(J).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<o&&(o=a));if(u){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var u=2&i&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){o[e]=function(){return r[e]}}));return o["default"]=function(){return r},n.d(a,o),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.219cc5ee.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="christmas_escape:";n.l=function(r,i,a,o){if(e[r])e[r].push(i);else{var u,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[i];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/christmas_escape/"}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,i[1](u)}};n.l(o,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],u=r[1],s=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var c=s(n)}for(t&&t(r);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkchristmas_escape"]=self["webpackChunkchristmas_escape"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9115)}));r=n.O(r)})();
//# sourceMappingURL=app.39286bc9.js.map