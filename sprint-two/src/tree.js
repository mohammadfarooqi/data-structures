var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

//constant
treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
  //console.log(this)
};

//quadratic
treeMethods.contains = function(target) {
  var result = false;

  var inner = function(tree) {
    if (tree.value === target) {
      result = true;
      return;
    }

    for (var i = 0; i < tree.children.length; i++) {
      inner(tree.children[i]);
    }
  };

  inner(this);

  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */