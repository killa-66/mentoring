//1. Complementary DNA
function DNAStrand(dna){
    const arr = dna.split('')
    return arr.map(elem => {
        if(elem === 'A') {
            return elem = 'T'
        }
        if(elem === 'T') {
            return elem = 'A'
        }
        if(elem === 'G') {
            return elem = 'C'
        }
        if(elem === 'C') {
            return elem = 'G'
        }
    }).join('')
}
//2. Convert the score
function scoreboard(string) {
    const voice = {
        'nil': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    const res = []
    const arr = string.split(' ')
    for(let i = 0; i < arr.length; i++){
        if(Object.keys(voice).some(key => key == arr[i])) {
            res.push(voice[arr[i]])
        }
    }
    return res
}

//3. The Office I - Outed
function outed(meet, boss){
    let sum = 0;
    let count = 0;
    for(let key in meet) {
        if(key !== boss){
            sum += meet[key]
            count ++
        } else {
            sum += meet[key]*2
            count ++
        }
    }
    return sum/count <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
//4. Who's online?
const whosOnline = (friends) => {
    const res = {};

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'online') {
            if (friends[i].lastActivity <= 10) {
                if (!res.online) {
                    res.online = [];
                }
                res.online.push(friends[i].username);
            } else {
                if (!res.away) {
                    res.away = [];
                }
                res.away.push(friends[i].username);
            }
        } else if (friends[i].status === 'offline') {
            if (!res.offline) {
                res.offline = [];
            }
            res.offline.push(friends[i].username);
        }
    }

    return res;
}

//5. Where my anagrams at

//6. Make a function that does arithmetic! не уверен что это на объекты, вижу решение через switch/case

//7. Pluck(не до конца верное решение)
function pluck(objs, name) {
    const res = []
    for(let i = 0; i < objs.length; i++) {
        for(let key in objs[i]) {
            if(name == key) {
                res.push(objs[i][key])
            }
            if (name !== key) {
                res.push(undefined)
            }
        }
    }
    return res
}

//8. Remove duplicate words(забыл что можно использовать Set для создания коллекции с уникальными элементами)
function removeDuplicateWords (s) {
    const arr = s.split(' ')
    const counter = {}
    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]] = true;
    }
    return Object.keys(counter).join(' ');
}

//9. Find the unique number
function findUnique(numbers) {
    const counter = {}
    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i]
        if(counter[current]) {
            counter[current]++
        } else {
            counter[current] = 1;
        }
    }
    const uniqueNumbers = [];
    for (const [number, count] of Object.entries(counter)) {
        if (count === 1) {
            uniqueNumbers.push(number);
        }
    }
    return parseInt(uniqueNumbers.join(' '));
}

//10. Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`
    }
    return list
}

// 11. Convert Hash To An Array
function convertHashToArray(hash){
    return Object.entries(hash).sort()
}

//12. Kebabize - уже решал

//13. ??

//14. Ip Validation ??

//15. ??

//16. From..To..Series #2: from arr1 to arr2. Find the most same sum value of pairs
function findPair(arr1, arr2) {
    let sum, pairs = {};
    arr1.forEach(function(curr, i) {
        sum = curr + arr2[i];
        (pairs[sum] = pairs[sum] || []).push([curr, arr2[i]]);
    });
    let len, key, longest = [];
    for (key in pairs) {
        len = pairs[key].length;
        if (len > 1 && len >= longest.length) {
            longest = pairs[key];
        }
    }
    return longest;
}
//17. Evaluating prefix Polish notation??

//18
//19 } Решал до этого
//20
//21

//22 digital root
function digitalRoot(n) {
    while(n > 9) {
        n = n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0)
    }
    return n
}
