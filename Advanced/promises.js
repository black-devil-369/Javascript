// creating an promises  and to store in pro variable 
const pro = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
});
pro.then(function(){
    console.log("Async 2 resolved")
})
