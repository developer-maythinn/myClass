const darkModeToggle = document.getElementById("darkModeToggle");
const transitionBackground = document.querySelector(".transition-background");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
  if (!darkModeToggle.checked) {
    body.style.background = "rgb(26, 24, 31)";
    transitionBackground.style.animation =
      "2s ease 0s 1 normal forwards running whiteBgAnimate";
  } else {
    body.style.background = "#fff";
    transitionBackground.style.animation =
      "2s ease 0s 1 normal forwards running blackBgAnimate";
  }
});
