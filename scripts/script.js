"use strict"

function hideScrollBar() {
   let widthMain = 0;
   let widthNew = 0;
   widthMain = document.body.clientWidth;
   document.body.style.overflow = "hidden";
   widthNew = document.body.clientWidth;
   document.body.style.paddingRight = widthNew - widthMain + "px";
}

function showScrollBar() {
   document.body.style.overflow = "";
   document.body.style.paddingRight = 0;
}

/* бургер */
document.querySelector(".header__burger").addEventListener("click", function () {
   document.querySelector(".burger").classList.add("active");
   hideScrollBar();
})

document.querySelector(".burger__close").addEventListener("click", function () {
   document.querySelector(".burger").classList.remove("active");
   showScrollBar();
})

/* Увеличение картинок в галерее */
function addImgScale() {
   let allImages = document.querySelectorAll(".images__item");

   allImages.forEach(function (item) {
      item.addEventListener("click", function () {
         let path = this.firstElementChild.getAttribute("src"); // Берем источник нажатой картинки
         document.querySelector(".imgBig__img img").setAttribute("src", path); // Вставляем источник картинки в img
         document.querySelector(".imgBig").classList.add("active"); // показываем окно большой картинки
         hideScrollBar();   // Запрещаем прокрутку сайта под открытой картинкой
      });
   });

   document.querySelector(".imgBig__close").addEventListener("click", function () {
      document.querySelector(".imgBig").classList.remove("active");
      showScrollBar();
   });
}

addImgScale();

/* Кнопка "load more wark" */

document.querySelector(".galery__btn").addEventListener("click", function () {
   let newImagesLine = document.querySelector(".images__line").cloneNode(true);
   document.querySelector(".images").append(newImagesLine);
   addImgScale();
})

/* Кнопка воспроизведения видео */

document.querySelector(".workProcess__poster").addEventListener("click", function () {
   document.querySelector(".workProcess__poster").classList.add("hide"); // Прячем заставку
   let player = document.querySelector(".youtubeVideo"); // Находим плеер
   let src = player.getAttribute("src");  // Запоминаем источник видео
   player.setAttribute("src", src + "&autoplay=1");   // Запускаем его через автоплей
})

/* Слайдер */

const swiper = new Swiper('.swiper-container', {
   loop: true,
   pagination: {
      el: '.swiper-pagination',
   },
   autoplay: {
      delay: 5000,
   },
});