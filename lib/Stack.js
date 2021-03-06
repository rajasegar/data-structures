// Stack ADT
Stack = function() {
    this.dataStore = [];
    this.top = 0;
};

Stack.prototype =  {
    push:function(element){
        this.dataStore[this.top++] = element;
    },
    pop: function() {
        return this.dataStore[--this.top];
    },
    peek: function() {
        return this.dataStore[this.top - 1];
    },
    length: function() {
        return this.top;
    },
    clear: function() {
        delete this.dataStore;
        this.dataStore = [];
        this.top = 0;
    }
};
module.exports = Stack;
