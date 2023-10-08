///////////////////////     Pre--loader  //////////////////////////////
let preLoader: HTMLElement | null;

function loadNow(timeDelay : number) {
    if (timeDelay <= 0) {
        displayContent();
    } else {
        window.setTimeout(function() {
            loadNow(timeDelay - 0.1);
        }, 400);
    }
}

function displayContent() {
    if(preLoader)preLoader.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    preLoader = document.getElementById('loader');
    loadNow(1);
});

// const btnScroolTo = document.querySelector(".btn--scroll-to");

// const section1 = document.querySelector("#section--1");

// // Modal window

// const modal1 = document.querySelector(".modal");
// const overlay1 = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".btn--close-modal");
// const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// const openModal = function () {
//   modal1?.classList.remove("hidden");
//   overlay1?.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal1?.classList.add("hidden");
//   overlay1?.classList.add("hidden");
// };

// for (let i: number = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal?.addEventListener("click", closeModal);
// overlay1?.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal1?.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// btnScroolTo?.addEventListener("click", function (e) {
//   const s1coords = section1?.getBoundingClientRect();

//   section1?.scrollIntoView({ behavior: "smooth" });
// });

// document.querySelector(".nav__links")?.addEventListener("click", function (e) {
//   e.preventDefault();

//   // Matching Strategy
//   if (e.target?.classList.contains("nav__link")) {
//     const id = e.target.getAttribute("href");

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

// /////operationsss

// const tabs = document.querySelectorAll(".operations__tab");
// const tabsContainer = document.querySelector(".operations__tab-container");
// const tabsContent = document.querySelectorAll(".operations__content");

// tabsContainer?.addEventListener("click", function (e) {
//   const clicked = e.target?.closest(".operations__tab");

//   if (!clicked) return;

//   tabs.forEach((t) => t.classList.remove("operations__tab--active"));

//   tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

//   clicked.classList.add("operations__tab--active");

//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     ?.classList.add("operations__content--active");
// });
// // Intersction Observer API

// const nav = document.querySelector(".nav");

// const header = document.querySelector(".header");
// const navHeight = nav?.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) nav?.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header);

// //   Reveal Section //////
// const allSections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (entry.isIntersecting) {
//     entry.target?.classList.remove("section--hidden");

//     observer.unobserve(entry.target);
//   }
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.2,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

// // Lazy Loading Images..............

// const imgTargets = document.querySelectorAll("img[data-src]");

// const loading = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.src = entry.target.dataset.src;
//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//   });
// };

// const imgObserver = new IntersectionObserver(loading, {
//   root: null,
//   threshold: 0,
// });

// imgTargets.forEach((ele) => imgObserver.observe(ele));

// //--------------- slider --------------------

// const slides = document.querySelectorAll(".slide");
// const btnLeft = document.querySelector(".slider__btn--left");
// const btnRight = document.querySelector(".slider__btn--right");
// const dotsContainer = document.querySelector(".dots");

// let curSlide = 0;

// // const slider=document.querySelector('.slider');
// // slider.style.transform= 'scale(0.4) translateX(-800px)';
// // slider.style.overflow='visible';

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

// btnLeft?.addEventListener("click", function () {
//   if (curSlide === 0) curSlide = slides.length - 1;
//   else curSlide--;

//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
//   );
// });

// btnRight?.addEventListener("click", function () {
//   if (curSlide === slides.length - 1) curSlide = 0;
//   else curSlide++;

//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
//   );
// });

// ////  create Dots

// const createDots = function () {
//   slides.forEach(function (_, i) {
//     dotsContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };
// createDots();

// dotsContainer?.addEventListener("click", function (e) {
//   if (e.target.classList.contains("dots__dot")) {
//     const { slide } = e.target.dataset;

//     currSlide = slide - 1;

//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   }
// });
