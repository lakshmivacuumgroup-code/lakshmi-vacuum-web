document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".spares-carousel");
  const slides = document.querySelectorAll(".spare-slide");
  let currentIndex = 0;

  function getSlideWidth() {
    const style = getComputedStyle(slides[0]);
    const width = slides[0].offsetWidth;
    const marginRight = parseInt(style.marginRight);
    return width + marginRight;
  }

  let slideWidth = getSlideWidth();

  window.addEventListener("resize", () => {
    slideWidth = getSlideWidth();
  });

  setInterval(() => {
    currentIndex++;
    if (window.innerWidth >= 768 && currentIndex > slides.length - 3) {
      currentIndex = 0;
    } else if (window.innerWidth >= 575 && window.innerWidth < 768 && currentIndex > slides.length - 2) {
      currentIndex = 0;
    } else if (window.innerWidth < 575 && currentIndex > slides.length - 1) {
      currentIndex = 0;
    }

    carousel.scrollTo({
      left: slideWidth * currentIndex,
      behavior: "smooth"
    });
  }, 3000);
});


