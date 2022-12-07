//var global or function level only
//let cannot be redeclared...global and witin block only, can be re-assigned

//functions with method name
function add(a,b) {
    return a+b
}

console.log(add(5,6))

//anonymous function

let total = function(a,b) {
    return a+b
}

console.log(total(3,5))

let sum = (a,b)=> a+b //kailangan dikit ung => sa ()

console.log(sum(4,5))