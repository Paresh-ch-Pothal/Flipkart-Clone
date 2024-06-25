//addeventlisener to the arrow-down
let arrow_d=document.getElementsByClassName("login");
// console.log(arrow_d[0].lastElementChild);
arrow_d[0].addEventListener("mouseover",()=>{
    arrow_d[0].innerHTML=`<img src="images/login.svg" width="28" alt="">
    <div class="login-a"><a href="">Login</a></div>
    <img src="images/arrow-up.svg" width="15" alt="">`;
})
arrow_d[0].addEventListener("mouseout",()=>{
    arrow_d[0].innerHTML=`<img src="images/login.svg" width="28" alt="">
    <div class="login-a"><a href="">Login</a></div>
    <img src="images/arrow-d.svg" width="15" alt="">`;
})

//changing the background continuosly
let arr=["images/bg1.webp","images/bg2.webp","images/bg3.webp","images/bg4.webp","images/bg5.webp","images/bg6.webp","images/bg7.webp"];
let bg=document.getElementsByClassName("bg");
let i=0;
setInterval(() => {
    bg[0].style.backgroundImage = `url(${arr[i]})`;
    i = (i+1)%(arr.length-1);
}, 3000);
// console.log(bg);

let leftbutton=document.querySelector(".leftarrow");
leftbutton.addEventListener("click",()=>{
    i = (i-1+arr.length)%(arr.length);
    bg[0].style.backgroundImage = `url(${arr[i-1]})`;
})
let rightbutton=document.querySelector(".rightarrow");
rightbutton.addEventListener("click",()=>{
    i = (i+1)%(arr.length);
    bg[0].style.backgroundImage = `url(${arr[i+1]})`;
})

let mediaquery=window.matchMedia('(max-width: 600px)');
// console.log(mediaquery);
let right=document.querySelector(".right");
let first=document.querySelector(".first");
// first.style.display="none";
console.log(first);
if(mediaquery.matches){
    right.innerHTML=`<div class="hamburger"><img src="images/hamburger.svg" alt=""></div>`;
    let ham=document.querySelector(".hamburger");
    ham.style.cursor="pointer";
    ham.addEventListener("click",()=>{
        first.classList.toggle('show');
    })
}
console.log(right);