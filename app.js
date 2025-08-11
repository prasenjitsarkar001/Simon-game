let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;

let h2= document.querySelector("h2");
//start  press by key  
document.addEventListener("keypress",function(){
    if(started==false)
    console.log("game started");
    started = true;

    levelup();
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250)
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText=`level ${level}`;
 //random btn choose

 let randomIndx=Math.floor(Math.random() * 3);
 let randomColor=btns[randomIndx];
 let randombtn = document.querySelector(`.${randomColor}`);
//  console.log(randomIndx);
//  console.log(randomColor);
//  console.log(randombtn);
 gameseq.push(randomColor);
 console.log(gameseq);
   btnFlash(randombtn);
}
function checkAns(idx){

   if(userseq[idx]== gameseq[idx]){
    if(userseq.length== gameseq.length){
        setTimeout(levelup,1000);
    }
    console.log("same value");
   }else{
    h2.innerHTML=`Game Over! your score was <b> ${level} </b>.<br> press any key to start. `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
     document.querySelector("body").style.backgroundColor="white";
    }, 150)
    reset();
   }
}

function btnPress(){
    console.log(this);
   let btn =this;
   btnFlash(btn);

   userColor = btn.getAttribute("id");
   userseq.push(userColor);

   checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}