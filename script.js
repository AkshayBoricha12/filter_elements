const categories = document.querySelectorAll(
  ".category:not(.category:first-child)"
);
const elements = document.querySelectorAll(".element");

function showAll() {
  for (const element of elements) {
    element.style.display = "";
  }
}

function filterData(index) {
  let filterValue = categories[index].innerHTML.toLowerCase();

  for (const element of elements) {
    element.style.display = "";
  }

  for (const element of elements) {
    if (!element.classList.contains(filterValue)) {
      element.style.display = "none";
    }
  }
}
