//-------------------------------------
//PROMISES - something would happen in future and doesn't guarantee that it will be accomplished
//-------------------------------------
//States - 1. Pending 2. Reject 3. FulFill



let promise = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 2);
    if (num === 0) {  //fulfilled
        // resolve("Homework Done !");
        setTimeout(() => {
            resolve("Homework Done !");
        }, 2000)
    }
    else { //rejected
        setTimeout(() => {
            reject("Very Bad!");
        }, 2000)
    }
})         //NEW Keyword -> to create new instance of Promise
console.log(promise);
promise.then((res) => {
    console.log(res + " in then ");
    console.log(promise);
})
    .catch((err) => {
        console.log(err + " in catch ");
        console.log(promise);
    });



//CHAINED HANDLERS 1

Promise.resolve("Start")
    .then(value => {
        console.log("Step 1:", value);
        throw new Error("Error in step 1");
    })
    .then(value => {
        console.log("Step 2:", value); // Skipped due to error
    })
    .catch(error => {
        console.log("Caught:", error.message);
        return "Recovered";
    })
    .then(value => {
        console.log("Step 3:", value); // Executes with recovered value
    });



//CHAINED HANDLERS 2

const priyanshuPromise = new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject("I GOT PLACED");
  }, 2000);
})


priyanshuPromise
.then((res)=>{
  console.log("PRIYANSHU GETTING SALARY 1CR")
   console.log(res);
})
.catch((err)=>{
  console.log("ERROR FOUND1: ",err)
})
.then(()=>{
  console.log("PARTY TIME");
})
.catch((err)=>{
  console.log("ERROR FOUND:2 ",err)
})
.then(() =>{
  console.log("WORKING WORKING WORKING");
})
.catch((err)=>{
  console.log("ERROR FOUND:3 ",err)
})
.then(()=>{
  console.log("LAYOFF");
})
.catch((err)=>{
  console.log("ERROR FOUND:4 ",err)
})
console.log(priyanshuPromise);





//-------------------------------------
//Error Handling
//-------------------------------------

function sum() {
    try {
        let a = 10
        console.log(a + b);
    }
    catch (error) {
        console.error(error);
    }
}
sum();


//-------------------------------------
//Async & Await
//-------------------------------------

function promises() {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 2);
        if (num === 0) {
            setTimeout(() => {
                resolve("Homework Done !");
            }, 2000)
        }
        else {
            setTimeout(() => {
                reject("Very Bad!");
            }, 2000)
        }
    })
}
async function asyncAwait() {
    try {
        console.log("before 2sec");
        let result = await promises();
        console.log("after 2sec");
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
asyncAwait();



//-------------------------------------
//DOM (DOCUMENT OBJECT MODEL)
//-------------------------------------
//Considers each HTML element as an object and generates a parse tree which is used by programming language to make dynamic webpages.

// DOM uses some QUERY SELECTORS  to access the webpage
//QuerySelector - "#" for id and "." for class
//QuerySelectorAll - selects all element in webpage having specified class or id
//getElementsById
//getElementsByClassName
//getElementsByTagName

let box = document.querySelectorAll("#boxDiv");
console.log(box);
//output - 
//NodeList(15) [div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv, div#boxDiv]

let para = document.querySelector("p");

console.log(para.innerText); //just the tag content

//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta molestiae quae soluta, obcaecati fugit autem alias, ulla m odio tenetur maiores cumque quisquam possimus! Nostrum quam sed voluptatibus nisi? Molestias, itaque!

console.log(para.textContent); //displays the gap and the content of nested element too but not the nested tag itself

/*
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta molestiae quae soluta, obcaecati fugit autem alias, ulla
        
        HELLO WORLD
        
        m odio tenetur maiores cumque quisquam possimus! Nostrum quam sed voluptatibus nisi? Molestias, itaque!
*/
console.log(para.innerHTML); //displays the gap and the content of nested element too and the nested tag itself

/*
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta molestiae quae soluta, obcaecati fugit autem alias, ulla
        
        <b>HELLO WORLD</b>
        
        m odio tenetur maiores cumque quisquam possimus! Nostrum quam sed voluptatibus nisi? Molestias, itaque!
*/

let head = document.querySelector("h2");
head.innerHTML = "Hello <i>Hriday</i>"; // displays Hello Hriday (hriday in italic)
//head.innerHTML = "Hello <i>Hriday</i>";    // output - Hello <i>Hriday</i>
//head.innerHTML = "Hello <i>Hriday</i>";    // output - Hello <i>Hriday</i>
head.style.fontSize = "60px"  //changing the fotnsize of h2 tag

// Alternating color of h2 tag
chngToCyan();
function chngToBlack() {
    setTimeout(() => {
        head.style.color = "black"
        chngToCyan();
    }, 1000)
}
function chngToCyan() {
    setTimeout(() => {
        head.style.color = "red"
        chngToBlack();
    }, 1000)
}

//Changing the mode of screen from dark to light and vica-versa using .classList.toggle()
let body = document.querySelector(".dark")
let btn  = document.querySelector(".switchBtn");
btn.addEventListener("click",()=> {
    // btn.innerText = ""
    body.classList.toggle("dark");
    let str = btn.innerText;
    if(str=="dark") btn.innerText = "Light"
    else btn.innerText = "dark"
})

// positing an image on the random place on the screen 
const body = document.querySelector("body");
const imgBtn = document.querySelector(".imgBtn");
imgBtn.addEventListener("click",()=>{
    const img = document.createElement("img");
    img.setAttribute("src","https://vips.edu/logo.png");
    img.setAttribute("height","100px");
    //img.setAttribute("position","absolute");
    const ranWidth = Math.floor(Math.random()*90);
    const ranHeight = Math.floor(Math.random()*90);
    img.style.left = ranWidth + "%";
    img.style.top = ranHeight + "%";
    img.style.position = "absolute";
    body.appendChild(img);
})