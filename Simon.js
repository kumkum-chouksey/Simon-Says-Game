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

function levelUp() {
  level++;
  h3.innerText=`Level ${level}`;

  let randomIdx=Math.floor(Math.random()*3);
  let randomColor=btn[randomIdx];
  let randomBtn=document.querySelector(`.${randomColor}`);
  btnFlash(randomBtn);
}
function btnFlash(btn) {
 btn.classList.add("flash");
 setTimeout(function() {
   btn.classList.remove("flash");
 },200);
}

function btnPress() {
  console.log("btn was pressed");
}
let allBtn=document.querySelectorAll(".btn");
for(let Btn of allBtn){
Btn.addEventListener("click", function() {
   btnPress();
   btnFlash(Btn);
});
}