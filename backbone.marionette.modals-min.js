(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};!function(a){return"function"==typeof define&&define.amd?define(["underscore","backbone","backbone.marionette","exports"],a):"object"==typeof exports?a(require("underscore"),require("backbone"),require("backbone.marionette"),exports):a(_,Backbone,Backbone.Marionette,{})}(function(b,d,e,f){return f=function(d){function f(){return this.destroy=a(this.destroy,this),f.__super__.constructor.apply(this,arguments)}return c(f,d),f.prototype.modals=[],f.prototype.zIndex=0,f.prototype.show=function(a,c){var d,f,g,h,i,j,k,l,m;if(null==c&&(c={}),this._ensureElement(),this.modals.length>0&&(d=b.last(this.modals),d.modalEl.addClass(""+d.prefix+"-view--stacked"),g=this.modals[this.modals.length-1],null!=g&&g.modalEl.removeClass(""+g.prefix+"-modal--stacked-reverse")),a.render(),a.regionEnabled=!0,this.triggerMethod("before:swap",a),this.triggerMethod("before:show",a),e.triggerMethodOn(a,"before:show"),this.triggerMethod("swapOut",this.currentView),this.$el.append(a.el),this.currentView=a,this.triggerMethod("swap",a),this.triggerMethod("show",a),e.triggerMethodOn(a,"show"),this.modals.length>0)for(l=this.modals,h=0,j=l.length;j>h;h++)f=l[h],f.$el.css({background:"none"});for(m=this.modals,i=0,k=m.length;k>i;i++)f=m[i],f.undelegateModalEvents();return a.on("modal:destroy",this.destroy),this.modals.push(a),this.zIndex++},f.prototype.destroy=function(){var a,c;return(c=this.currentView)?(c.destroy&&!c.isDestroyed?c.destroy():c.remove&&c.remove(),c.off("modal:destroy",this.destroy),this.modals.splice(b.indexOf(this.modals,c),1),this.zIndex--,this.currentView=this.modals[this.zIndex-1],a=b.last(this.modals),a&&(a.$el.removeAttr("style"),a.modalEl.addClass(""+a.prefix+"-modal--stacked-reverse"),b.delay(function(){return function(){return a.modalEl.removeClass(""+a.prefix+"-modal--stacked")}}(this),300),0!==this.zIndex)?a.delegateModalEvents():void 0):void 0},f.prototype.destroyAll=function(){var a,b,c,d,e;for(d=this.modals,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.destroy());return e},f}(e.Region),e.Modals=f,e.Modals})}).call(this);