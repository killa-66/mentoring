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