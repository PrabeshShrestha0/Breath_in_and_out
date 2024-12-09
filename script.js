const container = document.getElementById("container");
const text = document.getElementById("text");

// The 4-7-8 breathing technique
const totalTime = 19000;
const breatheTime = 4000;
const holdTime = 7000;

function breatheAnimation() {
  text.innerText = "Breathe In!";
  container.classList.add("grow");

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.classList.remove("grow");
      container.classList.add("shrink");
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);

// Init
breatheAnimation();
