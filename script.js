// new Promise(
// function(resolve,reject){
//     setTimeout(function(){
//         console.log("first i willl getcall function inside setTomeout");
//         resolve();
//     },1000)
// })
// .then(

//     function(){
//         console.log("i am second");
//     }
// )



 P1=  new Promise(function(resolve,reject){
            setTimeout(function(){
                var x=  prompt(console.log(x))
                console.log("first");
            },1000);
          if(x==5){
            resolve();
        }
            else{
                reject();
            }
            console.log("finally");
   }).resolve(
    console.log("second")
)
.reject(
    console.log("reject")
);