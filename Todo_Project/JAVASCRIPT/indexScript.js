let eyeIcon = document.querySelector("#eyeIcon");

eyeIcon.addEventListener("click", () => {
    let pass = document.querySelector(".fieldInputPassword");
    if (pass.getAttribute("type") == "password") {
        pass.setAttribute("type", "text");
        eyeIcon.setAttribute("class", "fa-solid fa-eye-slash");
    }
    else {
        pass.setAttribute("type", "password");
        eyeIcon.setAttribute("class", "fa-solid fa-eye");
    }
})

let signInBtn = document.querySelectorAll(".signInBtn");
signInBtn[0].addEventListener("click", () => {
    window.location.href = "../HTML/home.html"
})
signInBtn[1].addEventListener("click", () => {
    window.location.href = "../HTML/home.html"
})
let sideBar = document.querySelector(".sideBar");

sideBar.addEventListener("click", () => {
    let sideBar = document.querySelector(".sideBar");
    let sideBar_formDiv = document.querySelector(".sideBar .formDiv");
    let sideBar_formDiv_signInBtn = document.querySelector(".sideBar .formDiv .signInBtn");
    let sideBar_formDiv_formHeading = document.querySelector(".sideBar .formDiv .formHeading");
    let sideBar_h1 = document.querySelector(".sideBar h1");
    let sideBar_p = document.querySelector(".sideBar p");
    let MainDiv2 = document.querySelector(".MainDiv2");
    let MainDiv2_formDiv = document.querySelector(".MainDiv2 .formDiv");
    let MainDiv2_h1 = document.querySelector(".MainDiv2 h1");
    let MainDiv2_p = document.querySelector(".MainDiv2 p");
    let LeftDiv = document.querySelector(".LeftDiv");
    sideBar_formDiv_formHeading.innerHTML = "Create Account";
    LeftDiv.style.left = "calc(100% - 600px)";
    sideBar.style.width = "calc(100% - 600px)";
    MainDiv2.style.width = "100px";
    sideBar.style.transition = "width 2s ease";
    MainDiv2.style.transition = "width 2s ease";
    sideBar_p.style.transition = "display 2s ease";
    sideBar_h1.style.transition = "display 12s ease";
    LeftDiv.style.transition = "left 2s ease";
    sideBar_formDiv.style.opacity = "1"
    sideBar_formDiv.style.transition = "opacity 2s ease"
    // sideBar_formDiv.style.display = "flex";
    sideBar_h1.style.display = "none";
    sideBar_p.style.display = "none";
    MainDiv2_h1.style.display = "block";
    MainDiv2_p.style.display = "block";
    MainDiv2_h1.style.opacity = 1;
    MainDiv2_h1.style.transition = "opacity 2s ease"
    MainDiv2_p.style.transition = "opacity 2s ease"
    MainDiv2_p.style.opacity = 1;
    MainDiv2_p.innerHTML = "Sign In";
    MainDiv2_formDiv.style.display = "none";
    // MainDiv2_formDiv.style.opacity = "0"
    sideBar_formDiv_signInBtn.innerHTML = "Create Account";
    // MainDiv2_formDiv.style.left = "100px";
    // MainDiv2_formDiv.style.transition = "opacity 0.5s ease"
    // MainDiv2.setAttribute("style.writing-mode","sideways-rl");
    sideBar_formDiv.style.display = "flex";
})


let MainDiv2 = document.querySelector(".MainDiv2");
MainDiv2.addEventListener("click", () => {
    let MainDiv2 = document.querySelector(".MainDiv2");
    let sideBar = document.querySelector(".sideBar");
    let sideBar_formDiv = document.querySelector(".sideBar .formDiv");
    let sideBar_formDiv_signInBtn = document.querySelector(".sideBar .formDiv .signInBtn");
    let sideBar_formDiv_formHeading = document.querySelector(".sideBar .formDiv .formHeading");
    let sideBar_h1 = document.querySelector(".sideBar h1");
    let sideBar_p = document.querySelector(".sideBar p");
    let MainDiv2_formDiv = document.querySelector(".MainDiv2 .formDiv");
    let MainDiv2_h1 = document.querySelector(".MainDiv2 h1");
    let MainDiv2_p = document.querySelector(".MainDiv2 p");
    let LeftDiv = document.querySelector(".LeftDiv");
    sideBar_formDiv_formHeading.innerHTML = "Create Account";
    LeftDiv.style.left = "100px";
    sideBar.style.width = "100px";
    MainDiv2.style.width = "calc(100% - 600px)";
    sideBar.style.transition = "width 2s ease";
    MainDiv2.style.transition = "width 2s ease";
    sideBar_p.style.transition = "display 2s ease";
    sideBar_h1.style.transition = "display 12s ease";
    LeftDiv.style.transition = "left 2s ease";
    sideBar_formDiv.style.opacity = "0"
    sideBar_formDiv.style.transition = "opacity 2s ease"
    sideBar_formDiv.style.display = "none";
    sideBar_h1.style.display = "block";
    sideBar_p.style.display = "block";
    // MainDiv2_h1.style.display = "block";
    // MainDiv2_p.style.display = "block";
    MainDiv2_h1.style.display = "none"
    MainDiv2_p.style.display = "none"
    MainDiv2_p.innerHTML = "Sign In";
    MainDiv2_formDiv.style.opacity = "1";
    MainDiv2_formDiv.style.transition = "opacity 2s ease"
    sideBar_formDiv_signInBtn.innerHTML = "Create Account";
    MainDiv2_formDiv.style.display = "flex";
})