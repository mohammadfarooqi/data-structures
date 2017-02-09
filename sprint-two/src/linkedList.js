var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a node
    var node = Node(value);

    //first case is if head is null (empty LL)
    if (list.head == null) {
      list.head = node;
      list.tail = node;
    }
    //second case is if head and tail is the same (only 1 value in LL)
    else if (list.head == list.tail){
      list.head.next = node;
      list.tail = node;
    }
    //third case is if any additional value is added after the first node
    else {
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

    while(node) {
      if (node.value == target)
        return true;

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
 */
