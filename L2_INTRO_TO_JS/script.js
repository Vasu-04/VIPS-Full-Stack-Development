console.log("Hello World!");
var a = 20;
var b = 30;
var add = a+b;
console.log("Output : " + add);

function myFunc(s1,s2){
    var s = s1 + " " + s2;
    return s;
}

function greet(s){
    return "Good Morning, " + s;
}

var str1 = "Himanshu";
var str2 = "Jindal";
var str3 = myFunc(str1,str2);
console.log(greet(str3));
//---------------------------------------
//SET TIME OUT GEC
var time1 = 0;
for(var i=0;i<=3;i++){
    setTimeout(function(){
        console.log(i);
    },5000+time1);
    time1 += 1000;
}
//---------------------------------------

//Closure
//--------
//A closure is a fundamental JavaScript concept where an inner function has access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.

function outerFunction(x) {
    // This is the outer function's scope
    
    function innerFunction(y) {
        // Inner function has access to outer function's variables
        return x + y;
    }
    
    return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8


for(var a=0;a<=3;a++){
    function close(j){
        var i = j; //each function has its own scope whether for var or let or const variable
        setTimeout(function(){
        console.log(i);
        },2000);
    }
    close(a);
}
//--------------------

//----------------
//Function
//----------------
/*

Types of Functions - 
1) NORMAL FUNCTION
fucntion func(){

}

2) ANONYMOUS FUCNTION
function (){

}

3) ARROW FUCNTION
() => {
    
    }

4) FUNCTION EXPRESSION
var myVal = ()=>{
    
    }

*/
//FUNCTION WITH GEC

functionB();                                //phase 1 allocation
function functionB(){                       //phase 2 in memory
    console.log("Hello funcB");
}                                           //Hello funcB

functionB();                                //phase 1 variable allocation
var functionB = function (){                //phase 2 ,function call before assigning it to variable
    console.log("Hello funcB");
}                                           //Undefined

functionB();                                //phase 1 variable allocation
var functionB = ()=>{                       //phase 2 ,function call before assigning it to variable
    console.log("Hello funcB");
}                                           //Undefined

var functionB = ()=>{                       
    console.log("Hello funcB");
}
functionB();                                //Hello funcB

//----------------------------------------------------------------
/*
THE MOST IMPORTANT FUNCTION - FIRST CLASS FUCNTION
we pass fucntiona as an argument and also we return a fucntion. it is also called as first class citizen.
*/

function function1(func,m,n){
    return func(m,n);
}
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
var addResult = function1(add,10,20);
var subResult = function1(subtract,10,20);
console.log(addResult);
console.log(subResult);

console.log("passing return function");

function getFunction(str){
    if(str=="add"){
        return addfunc;
    }
    else{
        return subfunc;
    }
}
function addfunc(a,b){
    return a+b;
}
function subfunc(a,b){
    return a-b;
}
var addValue = getFunction("add")(1,2);
var subvalue = getFunction("sub")(1,2);
console.log(addValue);
console.log(subvalue);


//----------------------------------------------------------------
/*
ASYNCHRONOUS PROGRAMMING - CALLBACK FUNCTION
disadvantage - Pyramid of doom not easy to debug
*/
function menu(cb){
    setTimeout(function(){
        console.log("menu done");
        cb(dinner)
    },2000);
}
function order(cb){
    setTimeout(function(){
        console.log("order done");
        cb(sauf);
    },5000);
    
}
function dinner(cb){
    setTimeout(function(){
        console.log("dinner done");
        cb(paybill);
    },10000);
    
}
function sauf(cb){
    setTimeout(function(){
        console.log("sauf done");
        cb();
    },1000);
    
}
function paybill(){
    setTimeout(function(){
        console.log("paybill done");
    },3000);
    
}

menu(order);
//----------------------------------------------------------------