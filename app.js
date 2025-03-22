console.log(
  "if you are reading this, the Javascript file has been successfully!"
);

const learnMoreButton = document.getElementById("learnMoreButton");
const tokyoParagraph = document.getElementById("tokyoParagraph");

learnMoreButton.addEventListener('click', function () {
  tokyoParagraph.style.display = 'block';
});
