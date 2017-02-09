var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.front = 0;
  newQueue.back = 0;

  return newQueue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[++this.back] = value;
  },

  dequeue: function(){
    if((this.back - this.front) > 0){
      var temp = this.storage[++this.front];
      delete this.storage[this.front];
      return temp;
    }
  },

  size: function(){
    return this.back - this.front;
  }

};



