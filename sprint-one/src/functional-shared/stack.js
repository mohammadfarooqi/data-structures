var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};

  instance.sizeA = 0;
  instance.storage = {}

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeA] = value;
  this.sizeA++;
};

stackMethods.pop = function() {
  if (this.sizeA !== 0 && this.sizeA > -1) {
    var temp = this.storage[--this.sizeA];
    delete this.storage[this.sizeA];
    return temp;
  }
};

stackMethods.size = function() {
  return this.sizeA;
};


