var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeA = 0;
  this.storage = {};
};

Stack.prototype.pop = function(){
  if(this.sizeA !== 0 && this.sizeA > -1){
    var temp = this.storage[--this.sizeA];
    delete this.storage[this.sizeA];
    return temp;
  }
};

Stack.prototype.push = function(value){
  this.storage[this.sizeA] = value;
  this.sizeA++;
};

Stack.prototype.size = function(){
  return this.sizeA;
};


