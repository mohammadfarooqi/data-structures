var Set = function() {
  var set = Object.create(setPrototype);
  //set._storage = null;  //fix me
  return set;
};

var setPrototype = {};

//constant
setPrototype.add = function(item) {
  this[item] = item;
};

//constant
setPrototype.contains = function(item) {
  return this[item] ? true : false;
};

//constant
setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

