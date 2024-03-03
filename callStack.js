//Call Stack
//call means calling a function, stack is a data structure which has LIFO .
// function hello(){
//     console.log("inisde hello function");
//     console.log("hello");
// }
// function demo(){
//     console.log("calling demo function");
//     hello();
// }
// demo(); 
// calling demo function
// inisde hello function
// hello

function one(){
    return 1;
}
function two(){
    return one() + one();   //2
}
function three(){
    let ans= two() + one();
    console.log(ans);
}
three();    //3


// JavaScript is single threaded language : at a time ek hi line execute hoti hai 


