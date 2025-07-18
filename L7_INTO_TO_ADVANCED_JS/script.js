// let myBtn = document.querySelector(".myBtn");
// myBtn.addEventListener("click",()=>{
//     let parent = myBtn.parentElement
//     console.log(parent)
//     parent.style.height = "100px";
//     parent.style.width = "100px"
//     parent.style.backgroundColor = "red"
    
// })

/*
let list = document.querySelector(".list")
list.addEventListener("click",()=>{
    // let list = document.querySelector(".list") //selects single element
    let liEle = document.querySelectorAll("li") //selects all element with that tag
    console.log(liEle)
    console.log(list)
    console.log(list.children) //displays all children elements inside an element
    console.log(list.firstElementChild) //displays last element of parent element
    console.log(list.lastElementChild) //displays last element of parent element
    console.log(list.firstChild)
    console.log(list.lastChild)
    console.log(list.nextElementSibling) //displays the just previous sibling 
    console.log(list.previousElementSibling) //displays the just next sibling
    // console.log(list)
    console.log(list.nextElementSibling.src) //displays the url
    console.log("id of li before: " + list.firstElementChild.id) //displays id of element before change
    list.firstElementChild.id="lsits"
    console.log("id of li after: " + list.firstElementChild.id) //displays id of element after change
    list.removeAttribute("class")
    list.removeChild(liEle[0]) //it access the first index of the list of all elements with tag "l1" in line 15 and in this case deleted one by one 
    // console.log();
    
})

*/ 
//Event Handling
/*
1. onClick
2. onmousehover
3. onchange
4. addEventListener
*/

//Events List
/*
1. click - single click
2. dblClick - double click
3. mouseover - comes over the container
4. mouseout - comes out of the conatiner
5. keyup - when is key is released
6. keydown - when key presss and works on all key
7. keypress - works only on number , character, symbols and not shift, ctrl etc.
*/



let inp = document.querySelector(".inputField");
inp.addEventListener("mouseover",()=>{
    console.log("hovering on input field")
})
inp.addEventListener("mouseout",()=>{
    console.log("out from the input field")
})
inp.addEventListener("keyup",()=>{
    console.log("key released")
})
inp.addEventListener("keypress",()=>{
    console.log("key pressed")
})
inp.addEventListener("keydown",()=>{
    console.log("key down")
})