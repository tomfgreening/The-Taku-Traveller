console.log(
  "if you are reading this, the Javascript file has been successfully linked!"
);

const learnMoreButtonTokyo = document.getElementById("learnMoreButtonTokyo");
const tokyoParagraph = document.getElementById("tokyoParagraph");
const tokyoTitleText = document.getElementById("tokyoTitleText");

learnMoreButtonTokyo.addEventListener("click", function (event) {
  learnMoreButtonTokyo.style.display = "none";
  tokyoParagraph.style.display = "block";
  tokyoTitleText.style.display = "none";
});

const learnMoreButtonKyoto = document.getElementById("learnMoreButtonKyoto");
const kyotoParagraph = document.getElementById("kyotoParagraph");
const kyotoTitleText = document.getElementById("kyotoTitleText");

learnMoreButtonKyoto.addEventListener("click", function (event) {
  learnMoreButtonKyoto.style.display = "none";
  kyotoParagraph.style.display = "block";
  kyotoTitleText.style.display = "none";
});

const learnMoreButtonMtFuji = document.getElementById("learnMoreButtonMtFuji");
const mtFujiParagraph = document.getElementById("mtFujiParagraph");
const mtFujiTitleText = document.getElementById("mtFujiTitleText");

learnMoreButtonMtFuji.addEventListener("click", function (event) {
  learnMoreButtonMtFuji.style.display = "none";
  mtFujiParagraph.style.display = "block";
  mtFujiTitleText.style.display = "none";
});
