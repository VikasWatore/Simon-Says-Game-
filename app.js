let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];


let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function () {
    if(started==false){
        console.log("game Started");
        started=true;
        levelUp();
    }

    
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}



function levelUp() {
    userSeq=[];
    level ++;
    h2.innerText=`level${level}`;

    let randIdx=Math.floor(Math.random()*3); 
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
}


function checkAns(idx) {
    console.log(`curr level:`,level);

    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp(),1000);
       }  
    }
    else{
        h2.innerHTML=`Game Over!your score <b> ${level}</b>  <br>  press any key to start.`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
       },1000);
        reset();    
    }

}

function btnPress() {
    let btn=this;
    btnFlash(btn);
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns) {
btn.addEventListener("click",btnPress)    
}

function reset() {
    started==false;
    gameSeq=[];
    userSeq=[];
    level=0;
}