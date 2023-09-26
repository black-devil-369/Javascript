const arr2 = [];
arr.push(42);
arr.push(40);

// using of for loop to print the array
for(const i of arr){
    console.log(i);
}
arr.push(89);
console.log(arr);
const a = new Array();
a.push(42);
a.push(487);
a.push(45);
a.push(87);
a.push(40);
a.push(10);
a.push(100);
a.push(24);
for(const f of a){
    console.log(Math.sqrt(f));
}
const u = prompt("Ente your name please")
console.log(u);
const myArr = Math.max.apply(null,a);
const b = a.sort((a,b)=>a-b);
console.log(b);
for(let i =0;i<a.length;i++){
    if(a[i]>a[i+1]){
        let temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
    }
}
console.log(a);
const arr = [1,"Ajay",true, 23, false,"Chauhan", 2]
const hitest = arr.pop();
console.log(hitest);
for(let element of arr){
    if(typeof element === "object"){
        console.log(element);
    }
    else{
        break;
    }
}
const c = [13, , 52, , 58, ,90];
console.log(c.length);
console.log(c[2]);
let greeting ={
    0: 32,
    1: 42,
    2 : 34,
    length : 3,
    prepend(message){
        [].unshift.call(this,message);
        return this.length;
    },
    removeLast(){
        return [].pop.call(this);
    }
};
greeting.prepend(52);
console.log(greeting);
greeting.removeLast();
console.log(greeting);

let arr1 = [34,52,true,"ajay",false,"shivam"];
for(let arr1 of arr){
    if( typeof arr1 === "number"){
        console.log(arr1);
    }
}