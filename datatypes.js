// var and let can reassigned but const can not be reassigned
var x;
let a;

//const b;      // const can not reassign

 x=10;
 a = 15;

 console.log(x);
 console.log(a);

 // var scope var his function scope we can use it through out function in any block
 function varScope(){
    var x=25;
    if(x==25){
        console.log(x)
        var z= 30;
    }

    console.log(z);  // we can not do this with let because let his only block scope
 }

 varScope();

  // let scope

//   function letScope(){
//     let x=25;
//     if(x==25){
//         console.log(x)
//         let z= 30;
//     }

//     console.log(z);   // it will show scope error, we only access let within block
//  }

//  letScope();


// Const also his block scope like let and it can not be reassigned