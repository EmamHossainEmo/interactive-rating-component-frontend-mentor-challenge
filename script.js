const ratingSection = document.querySelector("#rating-section");
const thankingSection = document.querySelector("#thanking-section");
const btn = document.querySelector("#submit-btn");
btn.addEventListener("click", changeInterface);
ratingSection.style.display = "flex";
thankingSection.style.display = "none";

function changeInterface() {
  if (getRating() !== undefined) {
    ratingSection.style.display = "none";
    thankingSection.style.display = "flex";
    document.querySelector("#given-rating").innerText = getRating();
  }
}

function getRating() {
  for (let i = 0; i < 5; i++) {
    if (document.getElementsByTagName("input")[i].checked) {
      return document.getElementsByTagName("input")[i].value;
    }
  }
}
