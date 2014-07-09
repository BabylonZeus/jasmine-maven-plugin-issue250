define(["jquery","backbone-min"],function(_1){
(function($){
var _2=Backbone.History.extend({navigate:function(_3,_4){
if(!_4||_4===true){
_4={trigger:_4};
}
_3=this.getFragment(_3||"");
if(!_4.force){
if(this.fragment===_3){
return;
}
}
this.fragment=_3;
var _5=this.root+_3;
if(this._hasPushState){
this.history[_4.replace?"replaceState":"pushState"]({},document.title,_5);
}else{
if(this._wantsHashChange){
this._updateHash(this.location,_3,_4.replace);
if(this.iframe&&(_3!==this.getFragment(this.getHash(this.iframe)))){
if(!_4.replace){
this.iframe.document.open().close();
}
this._updateHash(this.iframe.location,_3,_4.replace);
}
}else{
return this.location.assign(_5);
}
}
if(_4.trigger){
this.loadUrl(_3);
}
}});
Backbone.history=new _2();
var _6=Backbone.sync;
Backbone.sync=function(_7,_8,_9){
if((_9.data===null||_9.data===undefined)&&_8&&(_7==="create"||_7==="update"||_7==="patch")){
_9.contentType="application/json";
_9.data=JSOG.stringify(_9.attrs||_8.toJSON(_9));
}
return _6.apply(this,[_7,_8,_9]);
};
var _a=Backbone.Model.prototype.fetch;
_.extend(Backbone.Model.prototype,{parse:function(_b,_c){
_b=JSOG.encode(_b);
return JSOG.decode(_b);
},preFetch:function(_d){
return true;
},fetch:function(_e){
if(this.preFetch(_e)){
_a.apply(this,arguments);
}
}});
var _f=Backbone.Collection.prototype.fetch;
_.extend(Backbone.Collection.prototype,{parse:function(_10,_11){
if(typeof this.database!=="undefined"&&Array.isArray(_10)){
var _12=[];
for(var i=0;i<_10.length;i++){
_12.push(JSOG.decode(JSOG.encode(_10[i])));
}
return _12;
}else{
_10=JSOG.encode(_10);
return JSOG.decode(_10);
}
},preFetch:function(_13){
return true;
},fetch:function(_14){
if(this.preFetch(_14)){
_f.apply(this,arguments);
}
}});
var _15=Backbone.Presenter=function(_16){
this._configure(_16||{});
this.initialize.apply(this,arguments);
};
var _17=["model"];
_.extend(_15.prototype,Backbone.Events,{initialize:function(){
},toJSON:function(_18){
return null;
},_configure:function(_19){
if(this.options){
_19=_.extend({},_.result(this,"options"),_19);
}
_.extend(this,_.pick(_19,_17));
this.options=_19;
}});
_15.extend=Backbone.Model.extend;
})(_1);
});

