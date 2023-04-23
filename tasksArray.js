// 1. Sum of positive
function positiveSum(arr) {
    let resArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            resArr.push(arr[i])
        }
    }
    return resArr.reduce((acc, curr) => acc + curr
        , 0)
}

//2. Shortest Word
function findShort(s) {
    const str = s.split(' ')
    const res = str.sort((a,b) => a.length - b .length)
    return res[0].length
}

// 3.List Filtering
function filter_list(l) {
    return l.filter((elem) => Number.isInteger(elem))
}

//4. ???

//5. Vowel Count
function getCount(str) {
    let count = 0;
    const reg = /[aeiou]/g
    if(str.match(reg)){
        return str.match(reg).length
    } else {
        return 0
    }
}

//6. Playing with digits
function digPow(n, p){
    let res = 0;
    const arr = n.toString().split('')
    for(let i = 0; i < arr.length; i++) {
        res = Math.pow(arr[i], p + i) + res
    }
   return res % n ? -1 : res / n
}
//7. Smallest value of an array
function min(arr, toReturn) {
    let minValue = arr[0]
    let minIndex = 0;
    for(let i = 0; i < arr.length; i++) {
        if(minValue > arr[i]) {
            minValue = arr[i]
            minIndex = i
        }
    }
    if(toReturn === 'value') {
        return minValue
    } else(toReturn === 'index')
    return minIndex
}
//8. Array dot diff
function arrayDiff(a, b) {
    let arrdiff = a.filter(x => !b.includes(x))
    return arrdiff
}
//9. Find the capitals
const capitals = function (word) {
    let res = [];
    const arrWord = word.split('');
    arrWord.forEach((elem, idx) => {
        if(elem !== elem.toLowerCase()) {
            res.push(idx)
        }
    })
    return res
};
//10.Insert dashes
function insertDash(num) {
    const str = num.toString();
    const arr = str.split('')
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i-1] % 2 && arr[i] % 2) {
            res.push(`-${arr[i]}`)
        } else {
            res.push(`${arr[i]}`)
        }
    }
    return res.join('')
}
//11. homogenous-arrays ???

//12. lottery-ticket ???

//13. Row weights
function rowWeights(array){
    let comand1 = 0;
    let comand2 = 0;
    for(let i = 0; i < array.length; i++) {
        if(i % 2 === 0) {
            comand1 = comand1 + array[i]
        } else if(i % 2 !== 0) {
            comand2 = comand2 + array[i]
        }
    }
    return [comand1, comand2]
}

// более красивое
function rowWeights(array){
  let comand1 = array.filter((el, i) => i % 2 === 0).reduce((acc, curr) => acc + curr, 0);
  let comand2 = array.filter((el, i) => i % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
  return [comand1, comand2]
}

//14.  Scrolling Text (ужасное решение, но лучше я не придумал)
function scrollingText(text){
    let upText = text.toUpperCase()
    let res = []
    res.push(upText)
    for(let i = 0; i < upText.length - 1; i++) {
        let firstLetter = upText[0];
        upText = upText.slice(1) + firstLetter
        console.log(upText)
        res.push(upText)
    }
    return res
}

//15. Write Number in Expanded Form ???

//16. Is every value in the array an array
const arrCheck = value => {
    return value.every(elem => {
        if(Array.isArray(elem)) {
            return true
        } else {
            return false
        }
    });
}

//17. make-a-square-box
function box(n){
    const arr = [];
    for(let i = 1; i <= n; i++){
        if(i === 1 || i === n){
            arr.push('-'.repeat(n));
        } else {
            arr.push('-' + ' '.repeat(n - 2) + '-')
        }
    }
    return arr;
}

//18.  magic index (1 ощибка в тесте, не понял почему)
function findMagic(arr){
    let res = 0;
    const sort = arr.sort((a, b) => a - b)
    for(let i = 0; i < sort.length; i++) {
        if(sort[i] === i) {
            return res = i
        } else {
            res = -1
        }
    }
    return res
}

// 19. Email Address Obfuscator
obfuscate = function(email) {
    return email.replace(/@/g, ' [at] ').replace(/\./g, ' [dot] ')
}

// 20.

//21. Count smiles
function countSmileys(arr) {
    const reg = /^[:;][-~]?[)D]$/
    return arr.filter(elem => reg.test(elem)).length
}