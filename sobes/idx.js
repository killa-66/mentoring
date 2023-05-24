function sortArr(arr) {
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr, length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        current = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = current
      }
    }
  }
}

function str(word) {
  const res = [];
  for (let i = word.length; i > 0; i--) {
    res.push(word[i])
  }
}

function sortString(str) {
  const arr = str.split(' ')
  const sortedArr = arr.sort((a, b) => a.length - b.length)
  sortedArr.forEach(el => {
    console.log(el)
  })
}