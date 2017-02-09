var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.dequeue = function(){
  if((this.back - this.front) > 0){
    var temp = this.storage[++this.front];
    delete this.storage[this.front];
    return temp;
  }
};

Queue.prototype.enqueue = function(value){
  this.storage[++this.back] = value;
};

Queue.prototype.size = function(){
  return this.back - this.front;
};



