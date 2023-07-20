let progressBar = document.querySelector(".progress-bar");
let circles = document.querySelectorAll(".circle");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let activeNum = 1;

function next() {
  activeNum++;
  if (activeNum > circles.length) {
    activeNum = circles.length;
  }
  updateCircles();
}
nextBtn.addEventListener("click", next);
function prev() {
  activeNum--;
  if (activeNum < 1) {
    activeNum = 1;
  }
  updateCircles();
}
prevBtn.addEventListener("click", prev);
function updateCircles() {
  circles.forEach((e, i) => {
    if (i < activeNum) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });

  progressBar.style.width =
    (100 * (activeNum - 1)) / (circles.length - 1) + "%";
  console.log(progressBar.style.width);
  if (activeNum == 1) {
    prevBtn.disabled = true;
  } else if (activeNum == circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
