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