//-------------------------------------
//PROMISES - something would happen in future and doesn't guarantee that it will be accomplished
//-------------------------------------
//States - 1. Pending 2. Reject 3. FulFill

/*

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

*/

//-------------------------------------
//Error Handling
//-------------------------------------
/*
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
*/

//-------------------------------------
//Async & Await
//-------------------------------------
/*
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
*/


