const dropDownButton = document.querySelectorAll(".header-menu-dropdown");
const dropDownItem = document.querySelectorAll(".header-menu-collapse");

console.log(dropDownItem);

dropDownButton.forEach((elm) => {
  elm.addEventListener("click", () => {
    elm.classList.toggle("header-menu-dropdown--active");

    dropDownButton.forEach((target) => {
      if (target !== elm) {
        target.classList.remove("header-menu-dropdown--active");
      }
    });

    if (elm.classList.contains("header-menu-dropdown--active")) {
      dropDownItem.forEach((target) => {
        target.classList.toggle("show");
      });
    }
  });
});

const hamburgerMenu = document.querySelector(".header__menu-container");
const sideBar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("header__menu-container--active");

  if (hamburgerMenu.classList.contains("header__menu-container--active")) {
    sideBar.classList.add("sidebar--active");
  } else {
    sideBar.classList.remove("sidebar--active");
  }
});
