var Queue = function() {
  var someInstance = {};


  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  // Implement the methods below

  // insert at the back
  someInstance.enqueue = function(value) {
    storage[++back] = value;
  };

  // take out the front
  someInstance.dequeue = function() {
    if ((back - front) > 0) {
      var temp = storage[++front];

      delete storage[front];

      return temp;
    }
  };

  someInstance.size = function() {
    return back - front;
  };

  return someInstance;
};
