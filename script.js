const dropDownButton = document.querySelectorAll(".header-menu-dropdown");
const dropDownItem = document.querySelectorAll(".header-menu-collapse");

dropDownButton.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    const clickedBtn = e.target;

    clickedBtn.classList.toggle("header-menu-dropdown--active");
    clickedBtn.nextElementSibling.classList.toggle("show");

    dropDownButton.forEach((target) => {
      if (target !== clickedBtn) {
        target.classList.remove("header-menu-dropdown--active");
        target.nextElementSibling.classList.remove("show");
      }
    });
  });
});

const hamburgerMenu = document.querySelector(".header__menu-container");
const sideBar = document.querySelector(".sidebar");
const modalOverlay = document.querySelector(".modal--overlay");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("header__menu-container--active");

  if (hamburgerMenu.classList.contains("header__menu-container--active")) {
    sideBar.classList.add("sidebar--active");
    modalOverlay.classList.remove("hidden");
  } else {
    sideBar.classList.remove("sidebar--active");
    modalOverlay.classList.add("hidden");
  }
});

const sidebardropDownButton = document.querySelectorAll(
  ".sidebar-menu-dropdown"
);
const sidebardropDownItem = document.querySelectorAll(".sidebar-menu-collapse");

sidebardropDownButton.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    const clickedBtn = e.target;

    clickedBtn.classList.toggle("sidebar-menu-dropdown--active");
    clickedBtn.nextElementSibling.classList.toggle("show");

    sidebardropDownButton.forEach((target) => {
      if (target !== clickedBtn) {
        target.classList.remove("sidebar-menu-dropdown--active");
        target.nextElementSibling.classList.remove("show");
      }
    });
  });
});
