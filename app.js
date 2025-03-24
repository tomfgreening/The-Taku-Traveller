console.log(
  "if you are reading this, the Javascript file has been successfully linked!"
);

const learnMoreButtonTokyo = document.getElementById("learnMoreButtonTokyo");
const tokyoParagraph = document.getElementById("tokyoParagraph");
const tokyTitleText = document.getElementById("tokyoTitleText");

learnMoreButtonTokyo.addEventListener("click", function (event) {
  learnMoreButtonTokyo.style.display = "none";
  tokyoParagraph.style.display = "block";
  tokyoTitleText.style.display = "none";
});
