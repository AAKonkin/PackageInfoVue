(function(){"use strict";var e={242:function(e,i,t){var a=t(963),n=t(252),s=t(577);const r=(0,n._)("header",null,[(0,n._)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossorigin:"anonymous"})],-1),o={id:"app"},h={class:"leftTab"},c=(0,n._)("h1",null,"Input Table",-1),l={class:"mainTab"},p=(0,n._)("h1",null,[(0,n._)("b",null,"Simple package searcher")],-1),u={class:"info"},g={key:0},m={key:1},f={key:2},k={key:3},v={key:4},d=["href"],b={key:5},w={key:6},y=["href"],D={key:7},_={key:8},N=["onClick"];function P(e,i,t,P,z,j){return(0,n.wg)(),(0,n.iD)(n.HY,null,[r,(0,n._)("div",o,[(0,n._)("div",h,[c,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":i[0]||(i[0]=i=>e.packageName=i),class:"form-control",type:"text"},null,512),[[a.nr,e.packageName,void 0,{trim:!0}]]),(0,n._)("button",{onClick:i[1]||(i[1]=i=>j.searchPackage(e.packageName)),class:"search btn btn-success"},"search")]),(0,n._)("div",l,[p,(0,n._)("h1",null,(0,s.zw)(z.msg),1),(0,n._)("div",u,[z.visible?((0,n.wg)(),(0,n.iD)("h3",g,"Name: "+(0,s.zw)(z.packName),1)):(0,n.kq)("",!0),z.visible?((0,n.wg)(),(0,n.iD)("h4",m,"Package Manager: "+(0,s.zw)(z.packageManager),1)):(0,n.kq)("",!0),z.visible?((0,n.wg)(),(0,n.iD)("h4",f,"Version: "+(0,s.zw)(z.version),1)):(0,n.kq)("",!0),z.visible?((0,n.wg)(),(0,n.iD)("h4",k,"License: "+(0,s.zw)(z.license),1)):(0,n.kq)("",!0),z.visible?((0,n.wg)(),(0,n.iD)("h4",v,[(0,n.Uk)("Home Page: "),(0,n._)("a",{href:z.homePage,target:"_blank"},(0,s.zw)(z.homePage),9,d)])):(0,n.kq)("",!0),z.visible?((0,n.wg)(),(0,n.iD)("h4",b,"Author Name: "+(0,s.zw)(z.authorName),1)):(0,n.kq)("",!0),z.visible?((0,n.wg)(),(0,n.iD)("h4",w,[(0,n.Uk)("Author Link: "),(0,n._)("a",{href:z.authorEmail,target:"_blank"},(0,s.zw)(z.authorEmail),9,y)])):(0,n.kq)("",!0),z.visible?((0,n.wg)(),(0,n.iD)("h4",D,"Description: "+(0,s.zw)(z.description),1)):(0,n.kq)("",!0),z.visibleDeps?((0,n.wg)(),(0,n.iD)("h4",_,"Dependencies: ")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(z.deps,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id},[(0,n._)("a",{onClick:i=>j.searchPackage(e),href:"#",class:"item btn btn-secondary"},(0,s.zw)(e),9,N)])))),128))])])])],64)}var z={name:"App",data(){return{visible:!1,visibleDeps:!1,msg:"Enter package name and click search!",packName:"Enter package name..",packageManager:"",homePage:"",description:"",version:"",authorName:"",authorEmail:"",license:"",deps:[]}},methods:{async searchPackage(e){if(this.packName=this.description=this.version=this.authorName=this.authorEmail=this.license=this.packageManager=this.homePage="",this.deps=[],this.visible=!1,this.visibleDeps=!1,""!==e.trim())try{let i=await fetch(`https://registry.npmjs.org/${e.toLowerCase()}/latest`),t=await i.json();this.packName=t.name,this.packageManager="NPM",this.description=t.description,this.homePage=t.homepage,this.version=t.version,this.authorName=t.author.name,this.authorEmail=t.author.url,this.license=t.license;for(let e in t.dependencies)this.deps=[...this.deps,e],this.visibleDeps=!0;this.msg="Find this one!",this.visible=!0,console.log(t)}catch(i){try{let i=await fetch(`https://pypi.org/pypi/${e.toLowerCase()}/json`),t=await i.json();this.packName=e.toLowerCase(),this.packageManager="PIP",this.homePage=t.info.home_page,this.description=t.info.description,this.version=t.info.version,this.authorName=t.info.author,this.authorEmail=t.info.author_email,this.license=t.info.license,this.msg="Find this one!",this.visible=!0,console.log(t)}catch(i){this.msg="Couldn't find this package!",this.visible=!1,this.visibleDeps=!1}}else this.msg="Empty package name line!"}}},j=t(744);const O=(0,j.Z)(z,[["render",P]]);var C=O;(0,a.ri)(C).mount("#app")}},i={};function t(a){var n=i[a];if(void 0!==n)return n.exports;var s=i[a]={exports:{}};return e[a](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(i,a,n,s){if(!a){var r=1/0;for(l=0;l<e.length;l++){a=e[l][0],n=e[l][1],s=e[l][2];for(var o=!0,h=0;h<a.length;h++)(!1&s||r>=s)&&Object.keys(t.O).every((function(e){return t.O[e](a[h])}))?a.splice(h--,1):(o=!1,s<r&&(r=s));if(o){e.splice(l--,1);var c=n();void 0!==c&&(i=c)}}return i}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[a,n,s]}}(),function(){t.d=function(e,i){for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,a){var n,s,r=a[0],o=a[1],h=a[2],c=0;if(r.some((function(i){return 0!==e[i]}))){for(n in o)t.o(o,n)&&(t.m[n]=o[n]);if(h)var l=h(t)}for(i&&i(a);c<r.length;c++)s=r[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(l)},a=self["webpackChunkpackinfovue"]=self["webpackChunkpackinfovue"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(242)}));a=t.O(a)})();
//# sourceMappingURL=app.30d0f268.js.map