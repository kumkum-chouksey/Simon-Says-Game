let gameSq=[];
let userSq=[];
let btn=["red","blue","green","purple"];
let h3=document.querySelector("h3");

let started=false;
let level=0;
document.addEventListener("keypress", function() {
 if(started==false) {
  started=true;
  levelUp();
 }
});

function checkAns(idx) {
  if(userSq[idx]===gameSq[idx]) {
      if(userSq.length == gameSq.length) {
          setTimeout(levelUp,500);
      }
  } else {
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor="white";
    },250);
    h3.innerHTML=`Game Over. Your score was <b>${level}</b> <br> Press any key to restart`;
    reset();
  }
}

function levelUp() {
  userSq=[];
  level++;
  h3.innerText=`Level ${level}`;

  let randomIdx=Math.floor(Math.random()*3);
  let randomColor=btn[randomIdx];
  gameSq.push(randomColor);
  console.log(gameSq);
  let randomBtn=document.querySelector(`.${randomColor}`);
  btnFlash(randomBtn);
}
function btnFlash(btn) {
 btn.classList.add("flash");
 setTimeout(function() {
   btn.classList.remove("flash");
 },100);
}

function btnPress(Btn) {
  userColor=Btn.getAttribute("id");
  userSq.push(userColor);
  checkAns(userSq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(let Btn of allBtn){
Btn.addEventListener("click", function() {
   btnPress(Btn);
   btnFlash(Btn);
});
}

function reset() {
  started=false;
  gameSq=[];
  userSq=[];
  level=0;
}