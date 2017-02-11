var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//linear
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (Array.isArray(this._storage.get(index))) {
    var bucket = this._storage.get(index);

    var tuple = [k, v];

    bucket.push(tuple);

    this._storage.set(index, bucket);
  } else {
    var bucket = [];
    var tuple = [k, v];

    bucket.push(tuple);

    this._storage.set(index, bucket);
  }
};

//linear
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var result = undefined;

  if (Array.isArray(this._storage.get(index))) {
    var bucket = this._storage.get(index);

    _.each(bucket, function (item) {
      if (item[0] === k) {
        result = item[1];
      }
    });
  }

  return result;
};

//linear
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (Array.isArray(this._storage.get(index))) {
    var bucket = this._storage.get(index);
    var newBucket = null;

    var foundAtIndex = null;

    _.each(bucket, function (item, index) {
      if (item[0] === k) {
        foundAtIndex = index;
        return;
      }
    });

    //rearrange array
    if (foundAtIndex === 0) {
      newBucket = bucket.slice(1);
    } else {
      var begin = bucket.slice(0, foundAtIndex);
      var end = bucket.slice(foundAtIndex + 1);
      newBucket = begin.concat(end);
    }

    if (newBucket.length !== 0) {
      this._storage.set(index, newBucket);
    } else {
      this._storage.set(index, undefined);
    }

  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


