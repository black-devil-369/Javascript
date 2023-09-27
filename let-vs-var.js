"use strict"
// let and var are two keywords in js
// which is used for variable declaration in js but they have some key difference between them
let a = 36;
console.log(a);
function example(){
    var x = 90;
    console.log(x);
    var x = 10;
    console.log(x);
}
example();


// these code will be print the value is :  5 5 5 5 5 
for(var i =0;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


// fix the problem;
for(var i  = 0; i<5;i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, 1000);
    })(i);
}
for(var i = 0; i<5; i++){
    console.log(i);
}
console.log(i);
let netPrice    = 9.99,
    shippingFee = 1.99;
let grossPrice  = netPrice + shippingFee;

console.log(grossPrice);

let j =52,
    p = 59,
    k  = 54;
console.log(p,j,k);

let remainder = '10'%3;
console.log(remainder);