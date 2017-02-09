var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a node
    var node = Node(value);

    if (list.head === null) {
      //first case is if head is null (empty LL)
      list.head = node;
      list.tail = node;
    } else if (list.head === list.tail) {
      //second case is if head and tail is the same (only 1 value in LL)
      list.head.next = node;
      list.tail = node;
    } else {
    //third case is if any additional value is added after the first node
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = temp.next;
    return temp.value;
  };

  list.contains = function(target) {
    var node = this.head;

    while (node) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    add and remove have constant time
    contains has linear
 */
