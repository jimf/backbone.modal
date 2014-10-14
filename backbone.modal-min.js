(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a},d=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};!function(a,b){return"function"==typeof define&&define.amd?define(["exports","underscore","backbone"],b):"object"==typeof exports?b(exports,require("underscore"),require("backbone")):a.Backbone.Modal=b(a.commonJsStrict={},a._,a.Backbone)}(this,function(b,e,f){var g;return g=function(b){function g(){this.triggerCancel=a(this.triggerCancel,this),this.triggerSubmit=a(this.triggerSubmit,this),this.triggerView=a(this.triggerView,this),this.clickOutside=a(this.clickOutside,this),this.checkKey=a(this.checkKey,this),this.rendererCompleted=a(this.rendererCompleted,this),this.args=Array.prototype.slice.apply(arguments),f.View.prototype.constructor.apply(this,this.args),this.setUIElements()}return c(g,b),g.prototype.prefix="bbm",g.prototype.animate=!0,g.prototype.render=function(a){var b,c,d;return c=this.serializeData(),this.$el.addClass(""+this.prefix+"-wrapper"),this.modalEl=f.$("<div />").addClass(""+this.prefix+"-modal"),this.template&&this.modalEl.html(this.template(c)),this.$el.html(this.modalEl),this.viewContainer?(this.viewContainerEl=this.modalEl.find(this.viewContainer),this.viewContainerEl.addClass(""+this.prefix+"-modal__views")):this.viewContainerEl=this.modalEl,$(":focus").blur(),(null!=(d=this.views)?d.length:void 0)>0&&this.openAt(a||0),"function"==typeof this.onRender&&this.onRender(),this.delegateModalEvents(),b=this.getOption("animate"),this.$el.fadeIn&&b?(this.modalEl.css({opacity:0}),this.$el.fadeIn({duration:100,complete:this.rendererCompleted})):this.rendererCompleted(),this},g.prototype.rendererCompleted=function(){var a;return f.$("body").on("keyup",this.checkKey),f.$("body").on("click",this.clickOutside),this.modalEl.css({opacity:1}).addClass(""+this.prefix+"-modal--open"),"function"==typeof this.onShow&&this.onShow(),null!=(a=this.currentView)&&"function"==typeof a.onShow?a.onShow():void 0},g.prototype.setUIElements=function(){var a;if(this.template=this.getOption("template"),this.views=this.getOption("views"),null!=(a=this.views)&&(a.length=e.size(this.views)),this.viewContainer=this.getOption("viewContainer"),this.$el.hide(),e.isUndefined(this.template)&&e.isUndefined(this.views))throw new Error("No template or views defined for Backbone.Modal");if(this.template&&this.views&&e.isUndefined(this.viewContainer))throw new Error("No viewContainer defined for Backbone.Modal")},g.prototype.getOption=function(a){return a?this.options&&d.call(this.options,a)>=0&&null!=this.options[a]?this.options[a]:this[a]:void 0},g.prototype.serializeData=function(){var a;return a={},this.model&&(a=e.extend(a,this.model.toJSON())),this.collection&&(a=e.extend(a,{items:this.collection.toJSON()})),a},g.prototype.delegateModalEvents=function(){var a,b,c,d,f,g,h;this.active=!0,a=this.getOption("cancelEl"),f=this.getOption("submitEl"),f&&this.$el.on("click",f,this.triggerSubmit),a&&this.$el.on("click",a,this.triggerCancel),h=[];for(b in this.views)e.isString(b)&&"length"!==b?(c=b.match(/^(\S+)\s*(.*)$/),g=c[1],d=c[2],h.push(this.$el.on(g,d,this.views[b],this.triggerView))):h.push(void 0);return h},g.prototype.undelegateModalEvents=function(){var a,b,c,d,f,g,h;this.active=!1,a=this.getOption("cancelEl"),f=this.getOption("submitEl"),f&&this.$el.off("click",f,this.triggerSubmit),a&&this.$el.off("click",a,this.triggerCancel),h=[];for(b in this.views)e.isString(b)&&"length"!==b?(c=b.match(/^(\S+)\s*(.*)$/),g=c[1],d=c[2],h.push(this.$el.off(g,d,this.views[b],this.triggerView))):h.push(void 0);return h},g.prototype.checkKey=function(a){if(this.active)switch(a.keyCode){case 27:return this.triggerCancel(a);case 13:return this.triggerSubmit(a)}},g.prototype.clickOutside=function(a){return f.$(a.target).hasClass(""+this.prefix+"-wrapper")&&this.active?this.triggerCancel():void 0},g.prototype.buildView=function(a,b){var c;if(a)return b&&e.isFunction(b)&&(b=b()),e.isFunction(a)?(c=new a(b||this.args[0]),c instanceof f.View?{el:c.render().$el,view:c}:{el:a(b||this.args[0])}):{view:a,el:a.$el}},g.prototype.triggerView=function(a){var b,c,d,f,g,h,i;if(null!=a&&"function"==typeof a.preventDefault&&a.preventDefault(),f=a.data,c=this.buildView(f.view,f.viewOptions),this.currentView&&(this.previousView=this.currentView,!(null!=(i=f.openOptions)?i.skipSubmit:void 0))){if(("function"==typeof(g=this.previousView).beforeSubmit?g.beforeSubmit():void 0)===!1)return;"function"==typeof(h=this.previousView).submit&&h.submit()}this.currentView=c.view||c.el,b=0;for(d in this.views)f.view===this.views[d].view&&(this.currentIndex=b),b++;return f.onActive&&(e.isFunction(f.onActive)?f.onActive(this):e.isString(f.onActive)&&this[f.onActive].call(this,f)),this.shouldAnimate?this.animateToView(c.el):(this.shouldAnimate=!0,this.$(this.viewContainerEl).html(c.el))},g.prototype.animateToView=function(a){var b,c,d,e,g,h,i;return e={position:"relative",top:-9999,left:-9999},g=f.$("<tester/>").css(e),g.html(this.$el.clone().css(e)),0!==f.$("tester").length?f.$("tester").replaceWith(g):f.$("body").append(g),b=g.find(this.viewContainer?this.viewContainer:"."+this.prefix+"-modal"),b.removeAttr("style"),d=b.outerHeight(),b.html(a),c=b.outerHeight(),d===c?(this.$(this.viewContainerEl).html(a),"function"==typeof(h=this.currentView).onShow&&h.onShow(),null!=(i=this.previousView)&&"function"==typeof i.destroy?i.destroy():void 0):(this.$(this.viewContainerEl).css({opacity:0}),this.$(this.viewContainerEl).animate({height:c},100,function(b){return function(){var c,d;return b.$(b.viewContainerEl).css({opacity:1}).removeAttr("style"),b.$(b.viewContainerEl).html(a),"function"==typeof(c=b.currentView).onShow&&c.onShow(),null!=(d=b.previousView)&&"function"==typeof d.destroy?d.destroy():void 0}}(this)))},g.prototype.triggerSubmit=function(a){var b,c;return null!=a&&a.preventDefault(),this.beforeSubmit&&this.beforeSubmit()===!1||this.currentView&&this.currentView.beforeSubmit&&this.currentView.beforeSubmit()===!1?void 0:this.submit||(null!=(b=this.currentView)?b.submit:void 0)||this.getOption("submitEl")?(null!=(c=this.currentView)&&"function"==typeof c.submit&&c.submit(),"function"==typeof this.submit&&this.submit(),this.regionEnabled?this.trigger("modal:destroy"):this.destroy()):this.triggerCancel()},g.prototype.triggerCancel=function(a){return null!=a&&a.preventDefault(),this.beforeCancel&&this.beforeCancel()===!1?void 0:("function"==typeof this.cancel&&this.cancel(),this.regionEnabled?this.trigger("modal:destroy"):this.destroy())},g.prototype.destroy=function(){var a,b;return f.$("body").off("keyup",this.checkKey),f.$("body").off("click",this.clickOutside),"function"==typeof this.onDestroy&&this.onDestroy(),this.shouldAnimate=!1,this.modalEl.addClass(""+this.prefix+"-modal--destroy"),b=function(a){return function(){var b;return null!=(b=a.currentView)&&"function"==typeof b.remove&&b.remove(),a.remove()}}(this),a=this.getOption("animate"),this.$el.fadeOut&&a?(this.$el.fadeOut({duration:200}),e.delay(function(){return b()},200)):b()},g.prototype.openAt=function(a){var b,c,d,f,g;e.isNumber(a)?b=a:e.isNumber(a._index)&&(b=a._index),d=0;for(f in this.views)if("length"!==f)if(e.isNumber(b))d===b&&(g=this.views[f]),d++;else if(e.isObject(a))for(c in this.views[f])a[c]===this.views[f][c]&&(g=this.views[f]);return g&&(this.currentIndex=e.indexOf(this.views,g),this.triggerView({data:e.extend(g,{openOptions:a})})),this},g.prototype.next=function(a){return null==a&&(a={}),this.currentIndex+1<this.views.length?this.openAt(e.extend(a,{_index:this.currentIndex+1})):void 0},g.prototype.previous=function(a){return null==a&&(a={}),this.currentIndex-1<this.views.length-1?this.openAt(e.extend(a,{_index:this.currentIndex-1})):void 0},g}(f.View)})}).call(this);