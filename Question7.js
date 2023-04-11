function ret(keys){
    let c = localStorage.getItem(keys)
    return JSON.parse(c)
}
let b = ret("name")
console.log(b)