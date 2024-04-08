// simple way to creting function inside an javascript
function square(n){
    return n*n;
}
function displaySquare(fn){
    console.log(`Square is ${fn(7)}`);
}
displaySquare(square);

// arrow function creating in javascript
let f = (n) =>{
    return n*n;
}
let dis = (k)=>{
    console.log(`Square is ${k(8)}`)
}
dis(f);
// concept of first class function
const fn = function(x){
    console.log(x*x);
}
fn(7);

// passed as arguments to other other function

function double(x){
    console.log(x*2);
}
function applyOperation(num,operation){ // const operation = double(num)
    return operation(num);
}
const result = applyOperation(5,double);
// returned function another function
function mutiplier(factor){
    return function(x){
        return x*factor;
    }
}
const f8  = mutiplier(6);
console.log(f8(2));

// stored in data structure

const mathOperation = {
    // creating an object in js
    add: function add(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    }
}
console.log(mathOperation.add(5,8));
console.log(mathOperation.sub(9,6));