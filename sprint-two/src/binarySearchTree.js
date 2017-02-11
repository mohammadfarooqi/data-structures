var BinarySearchTree = function(value) {
  var bsTree = Object.create(binarySearchTreeMethods);

  bsTree.value = value;
  bsTree.left = null;
  bsTree.right = null;

  return bsTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);

  var inner = function(node) {
    if (node.value > value && node.left === null) {
      node.left = newNode;
      return;
    } else if (node.value > value && node.left !== null) {
      inner(node.left);
    }

    if (node.value < value && node.right === null) {
      node.right = newNode;
      return;
    } else if (node.value < value && node.right !== null) {
      inner(node.right);
    }
  };

  inner(this);
};

binarySearchTreeMethods.contains = function(value) {
  var result = false;

  var inner = function(node) {
    if (node.value === value) {
      result = true;
    }

    if (node.value > value && node.left !== null) {
      inner(node.left);
    } else if (node.value < value && node.right !== null) {
      inner(node.right);
    }
  };

  inner(this);

  return result;
};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  var inner = function (node) {
    callback(node.value);

    if (node.left !== null) {
      inner(node.left);
    } else if (node.right !== null) {
      inner(node.right);
    }
  };

  inner(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
