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


//Task 2
const obj = {
  d: 12,
  g: {
    f: 45,
    c: {
      n: {
        j: 12,
      }
    }
  },
  a: {
    b: 43
  }
}

function cloneObject(obj) {
  const res = {};
  const keys = Object.keys(obj)

  let buffer = [...keys];

  while (buffer.length > 0) {
    const key = buffer.shift()
    if (typeof obj[key] !== 'object') {
      res[key] = obj[key]
    } else {
      res[key] = cloneObject(obj[key])
    }
  }

  return res
}

//TODO: без рекурсии 
console.log(cloneObject(obj).g.c === obj.g.c) 