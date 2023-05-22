//First task
function sqr(arr) {
  const res = []
  const min = arr.find(el => el >= 0)
  const idx = arr.indexOf(min)
  let rigth = idx
  let left = idx - 1

  if (min === undefined) return arr.map(el => el ** 2).reverse()
  if (left === -1) return arr.map(el => el ** 2)

  while (res.length < arr.length) {
    if (rigth >= arr.length) {
      res.push(arr[left] * arr[left]);
      left--;
    }
    else if (left < 0) {
      res.push(arr[rigth] * arr[rigth]);
      rigth++;
    }
    else if (Math.abs(arr[rigth]) <= Math.abs(arr[left])) {
      res.push(arr[rigth] * arr[rigth])
      rigth++
    } else {
      res.push(arr[left] * arr[left])
      left--
    }
  }
  return res
}


console.log(sqr([-5, -3, 0, 1, 2, 5, 6]))

//1. Name That Integer
function detectInt(...callback) {
  let num = 1;
  while (true) {
    if (callback.every(elem => elem(num))) return num
    num++
  }
}

//2. zipWith
function zipWith(fn, a0, a1) {
  const res = [];
  let minLength = Math.min(a0.length, a1.length)
  for (let i = 0; i < minLength; i++) {
    res.push(fn(a0[i], a1[i]))
  }
  return res
}

//3. Super power frequency function решал уже

//4. Currying functions: multiply all elements in an array
function multiplyAll(arr) {
  return function (num) {
    return arr.map(elem => {
      return elem * num
    })
  }
}

//5. Chain me
function chain(input, fs) {
  let res = 0
  for (let i = 0; i < fs.length; i++) {
    res = fs[i](input)
    input = res
  }
  return res
}

//6. The Span Function
function span(arr, predicate) {
  const trueArr = [];
  const falseArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      trueArr.push(arr[i])
    } else {
      for (let j = i; j < arr.length; j++) {
        falseArr.push(arr[j])
      }
      break;
    }
  }
  return [trueArr, falseArr]
}