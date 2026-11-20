const menuButton = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector(".primary-nav");

if (menuButton && primaryNavigation) {
  const closeMenu = () => {
    primaryNavigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    primaryNavigation.classList.toggle("is-open", open);
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
