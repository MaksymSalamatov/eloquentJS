
function range(start, end, step ){
    let arr = []
    for(let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}

function sum(arr){
    return arr.reduce((acc, i) => {
        return acc += i
    }, 0)
}

console.log(range(1, 20))
console.log(sum(range(1, 10)))