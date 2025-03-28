console.log(
  "if you are reading this, the Javascript file has been successfully linked!"
);

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 25) {
    header.style.opacity = "70%";
  } else {
    header.style.opacity = "100%";
  }
});

const learnMoreButtonTokyo = document.getElementById("learnMoreButtonTokyo");
const tokyoParagraph = document.getElementById("tokyoParagraph");
const tokyoList = document.getElementById("tokyoList")
const tokyoTitleText = document.getElementById("tokyoTitleText");
const backButtonTokyo = document.getElementById("backButtonTokyo");

learnMoreButtonTokyo.addEventListener("click", function (event) {
  learnMoreButtonTokyo.style.display = "none";
  tokyoParagraph.style.display = "block";
  tokyoList.style.display = "block";
  tokyoTitleText.style.display = "none";
  backButtonTokyo.style.display = "block";
});

backButtonTokyo.addEventListener("click", function (event) {
  backButtonTokyo.style.display = "none";
  tokyoParagraph.style.display = "none";
  tokyoList.style.display = "none";
  tokyoTitleText.style.display = "block";
  learnMoreButtonTokyo.style = "block";
});

const learnMoreButtonKyoto = document.getElementById("learnMoreButtonKyoto");
const kyotoParagraph = document.getElementById("kyotoParagraph");
const kyotoList = document.getElementById("kyotoList");
const kyotoTitleText = document.getElementById("kyotoTitleText");
const backButtonKyoto = document.getElementById("backButtonKyoto");

learnMoreButtonKyoto.addEventListener("click", function (event) {
  learnMoreButtonKyoto.style.display = "none";
  kyotoParagraph.style.display = "block";
  kyotoList.style.display = "block";
  kyotoTitleText.style.display = "none";
  backButtonKyoto.style.display = "block";
});

backButtonKyoto.addEventListener("click", function (event) {
  backButtonKyoto.style.display = "none";
  kyotoParagraph.style.display = "none";
  kyotoList.style.display = "none";
  kyotoTitleText.style.display = "block";
  learnMoreButtonKyoto.style.display = "block";
});

const learnMoreButtonMtFuji = document.getElementById("learnMoreButtonMtFuji");
const mtFujiParagraph = document.getElementById("mtFujiParagraph");
const mtFujiList = document.getElementById("mtFujiList");
const mtFujiTitleText = document.getElementById("mtFujiTitleText");
const backButtonMtFuji = document.getElementById("backButtonMtFuji");

learnMoreButtonMtFuji.addEventListener("click", function (event) {
  learnMoreButtonMtFuji.style.display = "none";
  mtFujiParagraph.style.display = "block";
  mtFujiList.style.display = "block";
  mtFujiTitleText.style.display = "none";
  backButtonMtFuji.style.display = "block";
});

backButtonMtFuji.addEventListener("click", function (event) {
  backButtonMtFuji.style.display = "none";
  mtFujiParagraph.style.display = "none";
  mtFujiList.style.display = "none";
  mtFujiTitleText.style.display = "block";
  learnMoreButtonMtFuji.style.display = "block";
});

const learnMoreButtonHokkaido = document.getElementById("learnMoreButtonHokkaido");
const hokkaidoParagraph = document.getElementById("hokkaidoParagraph");
const hokkaidoList = document.getElementById("hokkaidoList");
const hokkaidoTitleText = document.getElementById("hokkaidoTitleText");
const backButtonHokkaido = document.getElementById("backButtonHokkaido");

learnMoreButtonHokkaido.addEventListener("click", function () {
  learnMoreButtonHokkaido.style.display = "none";
  hokkaidoParagraph.style.display = "block";
  hokkaidoList.style.display = "block";
  hokkaidoTitleText.style.display = "none";
  backButtonHokkaido.style.display = "block";
});

backButtonHokkaido.addEventListener("click", function () {
  backButtonHokkaido.style.display = "none";
  hokkaidoParagraph.style.display = "none";
  hokkaidoList.style.display = "none";
  hokkaidoTitleText.style.display = "block";
  learnMoreButtonHokkaido.style.display = "block";
});
