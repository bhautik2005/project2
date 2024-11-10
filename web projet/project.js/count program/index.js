const up = document.getElementById("up");
const down = document.getElementById("down");
const  set = document.getElementById("set");
const  countlable = document.getElementById("lable");

let count =0;

up.onclick = function(){
  count++;
  countlable.textContent = count;
}
down.onclick = function(){
  count--;
  countlable.textContent = count;
}
set.onclick = function(){
  count=0;
  countlable.textContent = count;
}




