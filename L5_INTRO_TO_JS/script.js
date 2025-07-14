//Array Methods
//---------------------------------------------
//Mutating Methods- the methods which returns a new array
//---------------------------------------------

let arr = [1, 2, 50, , 3, 10, 4, -4, 5, 6, 7]

// push() - End mein add karta hai
arr.push(4); // [1, 2, 3, 4]

// pop() - Last element remove karta hai
arr.pop(); // [1, 2, 3]

// unshift() - Start mein add karta hai
arr.unshift(0); // [0, 1, 2, 3]

// shift() - First element remove karta hai
arr.shift(); // [1, 2, 3]

// splice() - Add/remove elements at any position
arr.splice(1, 1, 'new'); // [1, 'new', 3]


//---------------------------------------------
//Non-Mutating Methods - the methods which don't returns a new array
//---------------------------------------------


// map() - Har element ko transform karta hai
let doubled = arr.map(x => x * 2); // [2, 4, 6]

// filter() - Condition ke basis pe filter karta hai
let evens = arr.filter(x => x % 2 === 0); // [2]

// reduce() - Single value mein reduce karta hai
let sum = arr.reduce((acc, curr) => acc + curr, 0); // 6

// slice() - Portion extract karta hai
let part = arr.slice(1, 3); // [2, 3]

// concat() - Arrays ko join karta hai
let combined = arr.concat([4, 5]); // [1, 2, 3, 4, 5]



//---------------------------------------------
//Testing Methods
//---------------------------------------------


// every() - Sabhi elements condition satisfy karte hain
arr.every(x => x % 2 === 0); // true

// some() - Koi ek element condition satisfy karta hai
arr.some(x => x > 5); // true


//Length of an Array
console.log(arr.length);

//---------------------------------------------
//Filter Method
//---------------------------------------------
function even(val){
    if(val%2==0) return val;
}
console.log(arr.filter(
    (value,index)=>even(value)
))

//---------------------------------------------
//Reduce Method - to find the sum of all elements of an array
//---------------------------------------------
console.log(arr.reduce(
    (prev,curr)=>{
        console.log(prev + ":" + curr + ":" + (prev+curr));
        return prev+curr;
    }
))

//---------------------------------------------
//Reduce Method - to find the maximum value in an array
//---------------------------------------------
console.log(arr.reduce(
    (prev,curr)=>{
        return Math.max(prev,curr);
    }
))

//---------------------------------------------
//For Each Method - traverses using elements not indices
//---------------------------------------------
console.log(arr.forEach(
    (val) => { return val }
)) //gives undefined because foreach doesn't return anything it is just used to iterate or performing some operations

arr.forEach(
    (val)=>console.log(2*3.14*val)
)

//---------------------------------------------
//OBJECTS
//---------------------------------------------
let obj={
    firstname:"Himanshu",
    lastname:"Jindal",
    age:21,
    address:{
        houseNo : 209/210,
        Sector : 24,
        City: "New Delhi"
    },
    func : function(){ //method not function
        this.firstname = "vasu"
    },
    funThis : function(){
        console.log(this)
    }
}
console.log("Hello " + obj.firstname + " " + obj.lastname)
console.log(obj)
console.log("Hello " + obj.firstname + " " + obj.lastname)
{obj.func()}
console.log("Hello " + obj.firstname + " " + obj.lastname)

//the below method return the global object - WINDOW
console.log(this)
//the below mwthod return the whole object
obj.funThis()

//---------------------------------------------
//SPREAD Operator(...) 
//---------------------------------------------

// - Existing values ko "spread" ya "expand" karta hai
// - Array ka reference ni jaata
//Example

// Array elements ko spread karna
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Arrays ko combine karna
let combined1 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Array ko copy karna (shallow copy)
let copy = [...arr1]; // [1, 2, 3]

// Array mein elements add karna
let newArr = [0, ...arr1, 7]; // [0, 1, 2, 3, 7]

// Math functions ke saath
let numbers = [1, 5, 3, 9, 2];
console.log(Math.max(...numbers)); // 9
console.log(Math.min(...numbers)); // 1

//String
let str = "hello";
let chars = [...str]; // ['h', 'e', 'l', 'l', 'o']


//DOM elements ke saath
// NodeList ko Array mein convert karna
let divs = document.querySelectorAll('div');
let divsArray = [...divs];

// Array methods use kar sakte hain
divsArray.forEach(div => console.log(div));
