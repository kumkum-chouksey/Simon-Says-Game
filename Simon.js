let gameSq=[];
let userSq=[];
let btn=["red","blue","green","purple"];

let h3=document.querySelector("h3");

let started=false;
let level=0;
document.addEventListener("keypress", function() {
 if(started==false) {
  console.log("game started");
  started=true;
  levelUp();
 }
});

function checkAns() {
  let idx=level-1;
  if(userSq[idx]===gameSq[idx]) {
      console.log("same value");
  } else {
    h3.innerText="Game Over";
    console.log("Game Over");
  }
}

function levelUp() {
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
  checkAns();
}

let allBtn=document.querySelectorAll(".btn");
for(let Btn of allBtn){
Btn.addEventListener("click", function() {
   btnPress(Btn);
   btnFlash(Btn);
});
}