(() => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("overlay");
  let closed = true;

  const change = () => {
    if (closed) {
      hamburger.classList.add("open");
      menu.classList.add("menu");
    } else {
      hamburger.classList.remove("open");
      menu.classList.remove("menu");
    }
    closed = !closed;
  };

  hamburger.addEventListener("click", change);
})();
(() => {
  const mainMenu = document.querySelector(".main-menu");
  const subMenu = mainMenu.querySelector(".sub-menu");
  const menus = mainMenu.querySelectorAll(".sub-menu > li");

  if (mainMenu && subMenu) {
    mainMenu.addEventListener("click", () => {
      subMenu.classList.toggle("slide-down");
    });
    document.addEventListener("click", (e) => {
      if (!mainMenu.contains(e.target)) {
        subMenu.classList.remove("slide-down");
      }
    });
  }
})();
