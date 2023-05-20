//1.

//2. Two sum
function twoSum(numbers, target) {
    const res = []
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                res.push(i, j)
                return res
            }
        }
    }
    return res
}

//3. Length of missing array Прошло 34/43 тестов
function getLengthOfMissingArray(arrayOfArrays) {
    if(arrayOfArrays !== null) {
        arrayOfArrays.sort((a, b) => a.length - b.length)
        for(let i = 0; i < arrayOfArrays.length; i++) {
            if(arrayOfArrays[i+1].length - arrayOfArrays[i].length !== 1) {
                return arrayOfArrays[i].length + 1
            }
        }
    }
    return 0
}

//4. Data reverse
function dataReverse(data) {
    const res = [];
    const bigRes = [];
    for(let i = 0; i < data.length; i += 8) {
        res.push(data.slice(i, i + 8))
    }
    return res.reverse().flat()
}

//5. Proof Read
function proofread(str) {
    const arr = str.toLowerCase().split('')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] + arr[i + 1] === 'ie') {
            arr[i] = 'e'
            arr[i + 1] = 'i'
        }
        if(arr[i] === '.' && arr[i + 2]) {
            arr[i + 2] = arr[i + 2].toUpperCase()
        }
    }

    const res = arr.join('')
    return res.charAt(0).toUpperCase() + res.slice(1)
}

//6.  ???

//7. Delete a Digit
function deleteDigit(n) {
    let a=[];
    n=n.toString();
    for(let i= 0; i < n.length; i++){
        a.push(+(n.replace(n[i],'')))
    }
    return Math.max(...a)
}

// 8. ??

// 9. ??

// 10. ??

// 11. Element equals its index (не пойму как оптимизировать)
function indexEqualsValue(a) {
    let res = null
    for(let i = 0; i < a.length; i++) {
        if(a[i] === i) {
            return res = i
        }
    }
    return res === null ?  -1  :  res
}

//12. Valid Parentheses
function validParentheses(parens) {
    const stack = []

    for(let i = 0; i < parens.length; i++) {
        const current = parens[i];

        if(current === '(') {
            stack.push(current)
        }
        else {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0
}

//13. ???

//14. Run-length encoding
var runLengthEncoding = function(str){
    const arr = str.split('');
    const res = []
    let count = 1;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i + 1]) {
            count = count + 1

        } else {
            res.push([count, arr[i]])
            if(arr[i] !== arr[i + 1]) {
                count = 1;
            }
        }
    }
    return res // << fix this
}

//15. Is a number prime?

function isPrime(num) {
    if(num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0) {
            return false;
        }
    return true;
}

//16. ???

//17. Kebabize (6/100 тестов не прошло)
function kebabize(str) {
    const arr = str.split('')
    return arr.map(elem => {
        if(elem === elem.toUpperCase() && isNaN(elem)) {
            return `-${elem.toLowerCase()}`
        } else {
            if(!isNaN(elem)) {
                return ``
            }
            else {
                return elem
            }
        }
    }).join('')
}

//18.
