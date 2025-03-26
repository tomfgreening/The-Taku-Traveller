console.log(
  "if you are reading this, the Javascript file has been successfully linked!"
);

const learnMoreButtonTokyo = document.getElementById("learnMoreButtonTokyo");
const tokyoParagraph = document.getElementById("tokyoParagraph");
const tokyoTitleText = document.getElementById("tokyoTitleText");
const backButtonTokyo = document.getElementById("backButtonTokyo");

learnMoreButtonTokyo.addEventListener("click", function (event) {
  learnMoreButtonTokyo.style.display = "none";
  tokyoParagraph.style.display = "block";
  tokyoTitleText.style.display = "none";
  backButtonTokyo.style.display = "block";
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

const header = document.querySelector("header");

window.addEventListener("scroll", function (){
  if (window.scrollY > 25 ) {
    header.style.opacity = "70%";
  }
  else {
    header.style.opacity = "100%"
  }
});