console.log(
  "if you are reading this, the Javascript file has been successfully!"
);

const learnMoreButton = document.getElementById("learnMoreButton");
const tokyoParagraph = document.getElementById("tokyoParagraph");

learnMoreButton.addEventListener("click", function (event) {
  learnMoreButton.style.display = "none";
  tokyoParagraph.style.display = "block";
});
