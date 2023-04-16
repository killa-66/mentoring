const generFunc = (n) => {
    const result = []
    for(let i = 0; i <= n; i++) {
        result.push(i)
    }
    return result
}
generFunc(10);
//
//
//

const generFunc = (from, to) => {
    return Math.floor((Math.random() * (to - from))) + from;
}
//
const simulateRequest =() => {
    return new Promise((res, rej) => {
        const delay = generFunc(100, 1000)
        const result = '1'

        setTimeout(() => {
            res(result)
        }, delay)
    })
}

simulateRequest()
    .then((data) => {
        console.log('OK', data)
    })
    .catch((err) => {
        console.log(err)
    })

