/*! data-structures 2016-01-07 */
!function(){Stack=function(){console.log("Stack created"),this.dataStore=[],this.top=0},Stack.prototype={push:function(a){this.dataStore[this.top++]=a},pop:function(){return this.dataStore[--this.top]},peek:function(){return this.dataStore[this.top-1]},length:function(){return this.top},clear:function(){this.top=0}}}();