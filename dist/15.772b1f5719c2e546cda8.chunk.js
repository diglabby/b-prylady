webpackJsonp([15],{"ENQ+":function(l,n,e){"use strict";function t(l){return i._26(0,[(l()(),i._3(0,0,null,null,6,"mat-card",[["class","middle mat-elevation-z8 mat-card"]],null,null,null,s.d,s.a)),i._2(1,16384,null,0,p.p,[],null,null),i._2(2,49152,null,0,d.a,[],null,null),(l()(),i._24(-1,0,["\n  "])),(l()(),i._3(4,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),i._24(-1,null,["\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439"])),(l()(),i._24(-1,0,["\n"])),(l()(),i._24(-1,null,["\n"]))],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var i=e("LMZF"),u=(e("6Xbx"),e("Un6q")),o=(e("6lRS"),e("UHIZ")),a=e("HAwn"),r=function(){function l(l,n,e){this.route=l,this.db=n,this.router=e}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe(function(n){l.email=n.res,l.delEmail=n.del,void 0!==l.email&&l.sendToDb(l.email),void 0!==l.delEmail&&l.removeFromDb(l.delEmail),l.close()})},l.prototype.validateEmail=function(l){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(l)},l.prototype.sendToDb=function(l){if(this.validateEmail(l)){var n=l.replace(/\./g,",");this.db.object("/subscribers/"+n).set({email:l})}else console.log("email validate err");return!1},l.prototype.removeFromDb=function(l){if(this.validateEmail(l)){var n=l.replace(/\./g,",");this.db.object("/subscribers/"+n).remove()}else console.log("email validate err");return!1},l.prototype.close=function(){var l=this;setTimeout(function(){return l.router.navigate(["/home"])},5e3)},l}(),c=(o.n.forChild([{path:"",component:r}]),function(){}),s=e("pvRN"),p=e("j5BN"),d=e("Ioj9"),m=i._1({encapsulation:0,styles:[[".middle[_ngcontent-%COMP%]{position:absolute;text-align:center;top:150px;left:calc(50% - 174px);max-width:300px;z-index:1}@media (max-width:400px){.middle[_ngcontent-%COMP%]{max-width:200px;left:calc(50% - 115px)}}"]],data:{}}),_=i.Z("app-get-subscription",r,function(l){return i._26(0,[(l()(),i._3(0,0,null,null,1,"app-get-subscription",[],null,null,null,t,m)),i._2(1,114688,null,0,r,[o.a,a.a,o.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),b=e("l6RC"),f=e("RyBE");e.d(n,"GetSubscriptionModuleNgFactory",function(){return v});var v=i._0(c,[],function(l){return i._14([i._15(512,i.j,i.W,[[8,[_]],[3,i.j],i.v]),i._15(4608,u.n,u.m,[i.s,[2,u.v]]),i._15(6144,b.b,null,[f.b]),i._15(4608,b.c,b.c,[[2,b.b]]),i._15(512,o.n,o.n,[[2,o.s],[2,o.k]]),i._15(512,u.c,u.c,[]),i._15(512,p.c,p.c,[]),i._15(512,b.a,b.a,[]),i._15(256,p.f,!0,[]),i._15(512,p.l,p.l,[[2,p.f]]),i._15(512,d.g,d.g,[]),i._15(512,c,c,[]),i._15(1024,o.i,function(){return[[{path:"",component:r}]]},[])])})}});