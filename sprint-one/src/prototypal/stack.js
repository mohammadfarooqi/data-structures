var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.sizeA = 0;
  newStack.storage = {};

  return newStack;
};

var stackMethods = {
  pop: function(){
    if(this.sizeA !== 0 && this.sizeA > -1){
      var temp = this.storage[--this.sizeA];
      delete this.storage[this.sizeA];
      return temp;
    }
  },

  push: function(value){
    this.storage[this.sizeA] = value;
    this.sizeA++;
  },

  size: function(){
    return this.sizeA;
  }

};




