console.log(
  "if you are reading this, the Javascript file has been successfully linked!"
);

const learnMoreButton = document.getElementById("learnMoreButton");
const tokyoParagraph = document.getElementById("tokyoParagraph");
const tokyTitleText = document.getElementById("tokyoTitleText");

learnMoreButton.addEventListener("click", function (event) {
  learnMoreButton.style.display = "none";
  tokyoParagraph.style.display = "block";
  tokyoTitleText.style.display = "none";
});
