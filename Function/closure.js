// lexical scoping
function outer(name){
    const lastName = "Chauhan";
    function inner(){
        console.log(`My name is ${name} ${lastName}`);
    }
    inner();
}
outer("Ajay");

// closure in js
function outer(name){
    const lastname = "chauhan";
    function inner(){
        console.log(`My name is ${name} ${lastname}`);
    }
    return inner();
}
const n = outer("Ajay");
n;