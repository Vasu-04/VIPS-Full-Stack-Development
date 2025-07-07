function redirect() {
         setTimeout(myURL, 5000);
         var result = document.getElementById("result");
         result.innerHTML = "<b> The page will redirect after delay of 5 seconds";
         alert("Login Succesfull");
         return false;
}

function myURL() {
    document.location.href = 'home.html';
}

// var time1 = 0;
// for(let i=1;i<=3;i++){
//     setTimeout(
//         function(){
//             let load = document.getElementById("Loading");
//             load.innerText = ".".repeat(i);
//             if(i==3){
//                 setTimeout(
//                     function(){
//                         document.location.href = "home.html";
//                     },2000
//                 );
//             }
//         },1000+time1
//     );
//     time1+=1000;
// }

