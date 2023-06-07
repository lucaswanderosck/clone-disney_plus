document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      closeTabs();
      tab.classList.add("shows__list--active");
      removeActive();
      botao.target.classList.add("shows__tabs__link--active");
    });
  }
});

function removeActive() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__link--active");
  }
}

function closeTabs() {
  const tabsContent = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContent.length; i++) {
    tabsContent[i].classList.remove("shows__list--active");
  }
}
