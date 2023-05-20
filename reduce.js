Array.prototype.myReduce = myReduce;

function myReduce(callback, acc) {
  const arr = this;
  let res = 0;
  if (!!acc) {
    for (let i = 0; i < arr.length; i++) {
      res = callback(acc, arr[i]);
      acc = res
    }
    return acc
  }

  else {
    acc = arr[0]
    for (let i = 1; i < arr.length; i++) {
      res = callback(acc, arr[i]);
      acc = res
    }
    return acc
  }
}
console.log([1, 2, 3, 4, 5, 6].myReduce((acc, elem) => acc * elem))
console.log([1, 2, 3, 4, 5, 6].myReduce((acc, elem) => acc + elem, 10))


Array.prototype.my_reduce = my_reduce

function my_reduce(cb, initial) {
  let acc;
  if (initial) {
    acc = initial
  } else {
    acc = this[0]
  }

  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i])
  }
  return acc
}