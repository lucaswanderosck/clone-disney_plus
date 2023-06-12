document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const acordionQuestion = document.getElementsByClassName(
    "faq__questions__item__question"
  );

  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaHeader();
    } else {
      exibeHeader();
    }
  });

  // Tabs da secao de atracoes
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

  // Accordion FAQ
  for (let i = 0; i < acordionQuestion.length; i++) {
    acordionQuestion[i].addEventListener("click", function () {
      this.classList.toggle("faq__questions__item--active");

      const acordionAnswer = this.nextElementSibling;

      if (acordionAnswer.style.maxHeight) {
        acordionAnswer.style.maxHeight = null;
      } else {
        acordionAnswer.style.maxHeight = acordionAnswer.scrollHeight + "px";
      }
    });
  }
});

function ocultaHeader() {
  const header = document.querySelector("header");

  header.classList.add("header--is-hidden");
}

function exibeHeader() {
  const header = document.querySelector("header");

  header.classList.remove("header--is-hidden");
}

//Programacao das tabs
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
