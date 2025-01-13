const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  spaceBetween: 80,
  slidesPerView: 3, // Default for lg and above
  pagination: false,
  effect: "coverflow",

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    scale: 0.8,
  },

  breakpoints: {
    0: {
      // For extra small screens (xs) less than 576px
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      // Corresponding to sm in Bootstrap
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      // Corresponding to md in Bootstrap
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      // Corresponding to lg and above in Bootstrap
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },

  on: {
    slideChange: function () {
      updateProgressBarOnSlideChange(this.activeIndex);
    },
  },
});

function updateProgressBar(event) {
  let container = event.target.closest(".timeline-container");
  let rect = event.target.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();

  // Calcula a largura relativa ao contêiner pai
  let width = (rect.left + rect.right) / 2 - containerRect.left;
  document.querySelector(".progress-bar").style.width = width + "px";

  // Remove a classe 'active' do item atualmente ativo
  let lastActive = document.querySelector(".timeline-text-clickable.active");
  lastActive.classList.remove("active");
  lastActive.classList.remove("active-timeline-text");

  // Adicione a classe 'active' ao item clicado
  event.target.classList.add("active");
  event.target.classList.add("active-timeline-text");

  let index = Array.from(
    document.querySelectorAll(".timeline-text-clickable")
  ).indexOf(event.target);
  swiper.slideTo(index);
}

function updateProgressBarOnSlideChange(activeIndex) {
  let items = document.querySelectorAll(".timeline-text-clickable");
  let container = document.querySelector(".timeline-container");
  let containerRect = container.getBoundingClientRect();

  if (activeIndex >= 0 && activeIndex < items.length) {
    let item = items[activeIndex];
    let rect = item.getBoundingClientRect();

    // Calcula a largura relativa ao contêiner pai
    let width = (rect.left + rect.right) / 2 - containerRect.left;
    document.querySelector(".progress-bar").style.width = width + "px";

    // Remove a classe 'active' do item atualmente ativo
    let lastActive = document.querySelector(".timeline-text-clickable.active");
    if (lastActive) {
      lastActive.classList.remove("active");
      lastActive.classList.remove("active-timeline-text");
    }

    // Adicione a classe 'active' ao item atual
    item.classList.add("active");
    item.classList.add("active-timeline-text");
  }
}

document.querySelectorAll(".timeline-text-clickable").forEach((item) => {
  item.addEventListener("click", updateProgressBar);
});

window.addEventListener("resize", () => {
  // Dispare o evento de clique no item atualmente ativo
  let activeItem = document.querySelector(".timeline-text-clickable.active");
  if (activeItem) {
    activeItem.click(); // Dispara um evento de clique real
  }
});

// Clique no primeiro item quando a página é carregada
window.addEventListener("load", () => {
  let firstItem = document.querySelector(".timeline-text-clickable");
  if (firstItem) {
    firstItem.click(); // Dispara um evento de clique real
  }
});

// Clique no último item preenche 100% da barra de progresso
document
  .querySelector(".timeline-text-clickable:last-child")
  .addEventListener("click", () => {
    document.querySelector(".progress-bar").style.width = "100%";
  });
