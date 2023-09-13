// currying in js is functional programing technique

// regular function declaration
function add(x,y,z){
    return x+y+z;
}
// currying function
function curAdd(x){
    return function(y){
        return function(z){
            return x+y+z;
        };
    };
}
const result =  curAdd(5)(9)(10);
console.log(result);