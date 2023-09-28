// Object Literal
const person = {
    firstName: "Ajay",
    LastName: "Chauhan",
    age : 35,
}
console.log(person.firstName)

// constructor function
function Person(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = age;
}
const per = new Person("Ajay","Chauhan",22);
console.log(per.firstName);

// Object.create()
const personPrototype ={
    greet: function(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    }
}
const o =  Object.create(personPrototype);
o.firstName = "Bhavani";
o.lastName = "Jai Ho";
o.greet();

// class systax
class PPerson{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet(){
        console.log(`firstName: ${this.firstName} LastName: ${this.lastName} Age: ${this.age}`);
    }
}
const p = new PPerson("Rudra","Chauhan",59);
p.greet();