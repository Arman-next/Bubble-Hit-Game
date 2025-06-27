const clock = document.querySelector(".timer");
const bottom = document.querySelector(".bottom");
const scorebox = document.querySelector(".scorebox");
const hitno = document.querySelector(".hitno");
let timer = 30;
let Score = 0;
let hit = 0;
const bubbleCreate = function () {
  let clutter = "";
  for (let i = 0; i < 112; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  bottom.innerHTML = clutter;
};

const Timer = function () {
  setInterval(() => {
    if (timer > 0) {
      timer--;
      clock.innerText = timer;
    } else {
      clearInterval(Timer);
      bottom.innerText = `GAME OVER and your Score is: ${Score}`;
    }
  }, 1000);
};

const Hit = function () {
  hit = Math.floor(Math.random() * 10);
  hitno.innerText = hit;
};

const score = function () {
  Score += 10;
  scorebox.innerText = Score;
};

bottom.addEventListener("click", function (d) {
  const targetValue = Number(d.target.innerText);
  console.log(targetValue);
  if (targetValue === hit) {
    score();
    Hit();
    bubbleCreate();
  }
});
bubbleCreate();
Timer();
Hit();
