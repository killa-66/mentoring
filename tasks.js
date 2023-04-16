// Способы создания объектов в JS
// 1- const obj = {}
// 2 - const obj = new Object()
// 3 - Функция - конструктор
// function Obj (prop1, prop2) {
//     this._prop1 = prop1;
//     this._prop2 = prop2
// }
// const myObj = new Obj('1', '2')

// 4 - const obj = object.Create(prototypeObject)

// 1. Even or Odd
function evenOrOdd(number) {
    if(number % 2 === 0) {
        return 'Even'
    } return 'Odd'
}

// 2. Opposite number
function opposite(number) {
    return number = number * (-1);
}

// 3. Century from year
function century(year) {
    if(year % 100 === 0) {
        return year / 100
    }
    return Math.floor(year / 100) + 1;
}

// 4. Abbreviate a Two Word Name
function abbrevName(name){
    const splitName = name.split(' ')
    return `${splitName[0][0].toUpperCase()}.${splitName[1][0].toUpperCase()}`
}

// 5. Reversed Strings
function solution(str){
    return str.split('').reverse().join('')
}
// 6. Credit Card Mask
function maskify(cc) {
    if(cc.length < 4) return cc
    else {
        const maskifyCC = cc.split('')
        for(let i =0; i < cc.length -4; i++) {
            maskifyCC[i] = '#'
        }
        return maskifyCC.join('')
    }
}

// 7. Remove First and Last Character
function removeChar(str){
    const res = [];
    str = str.split('')
    for(let i = 1; i < str.length - 1; i++){
        res.push(str[i])
    }
    return res.join('')
}

// 8. Create phone number
function createPhoneNumber(numbers){
    return `(${numbers[0].toString()+numbers[1].toString()+numbers[2].toString()}) ${numbers[3].toString()+numbers[4].toString()+numbers[5].toString()}-${numbers[6].toString()+numbers[7].toString()+numbers[8].toString()+numbers[9].toString()}`
}

// 9. How many arguments ???

// 10. Leap Years
function isLeapYear(year) {
    if((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
        return true
    } return false
}

//11. If you can't sleep, just count sheep!!
const countSheep = function (num){
    let sheep = '';
    for (i = 1; i <= num; i++) {
        sheep += i + ' sheep...'
    }
    return sheep
}

//12. ???
