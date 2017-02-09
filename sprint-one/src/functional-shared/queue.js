var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the newn st
  var instance = {};

  instance.storage = {}
  instance.front = 0;
  instance.back = 0;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[++this.back] = value;
};

// take out the front
queueMethods.dequeue = function() {
  if ((this.back - this.front) > 0) {
    var temp = this.storage[++this.front];
    delete this.storage[this.front];
    return temp;
  }
};

queueMethods.size = function() {
  return this.back - this.front;
};



