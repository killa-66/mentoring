// flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]

// function flatMap(arr, duplicate) {
//   let res = [];
//   for(let i = 0; i < arr.length; i++) {
//     res.push(duplicate(arr[i]))
//   }
//   return res.reduce((acc, el) => {
//     if(typeof el === 'number') {
//       acc.push(el)
//     } else {
//       acc.push(...el);
//     }
//     return acc}, 
//     [])
// }

function flatten(arr) {
  if (Array.isArray(arr)) {
    let currentArr = []
    arr.forEach(elem => {
      currentArr.push(...flatten(elem))
    })
    return currentArr
  } else {
    return [arr]
  }
}

function duplicate(n) {
  return [[n, n]];
}


function flatMap(arr, duplicate) {
  let res = []
  for (i = 0; i < arr.length; i++) {
    res.push(duplicate(arr[i]))
  }
  return flatten(res)
}