$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: true,
    swipe: true,
    slidesToShow: 3,
    cssEase: "ease",
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
    nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }),
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
      $(this).removeClass("coll-back");
      if ($(".accordion_body").is(":visible")) {
        $(".accordion_body").slideUp(300);
        $(".plusminus").text("+");
        $(this).removeClass("coll-back");
        $(".rmv-cls").removeClass("coll-back");
      }

      if ($(this).next(".accordion_body").is(":visible")) {
        $(this).next(".accordion_body").slideUp(300);
        $(this).children(".plusminus").text("+");
        $(this).removeClass("coll-back");
      } else {
        $(this).next(".accordion_body").slideDown(300);
        $(this).children(".plusminus").text("");
        $(this).children(".plusminus").append('<hr class="hr-clc">');
        $(this).toggleClass("coll-back");
        $(this).addClass("rmv-cls");
      }
    });

  var $slider = $(".client-slider"),
    $paginationNumber = $(".pagination-number");

  function padNumber(e) {
    return e < 10 ? "0" + e : e;
  }

  $slider.on("init reInit afterChange", function (e, t, i) {
    var o = t.currentSlide + 1,
      n = t.slideCount;
    $paginationNumber.text(padNumber(o) + "/" + padNumber(n));
  }),
    $slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1121,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 991,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 767,
          settings: { slidesToShow: 1 },
        },
      ],
    });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("custom.js loaded");

  const select = document.getElementById("productSelect");
  const button = document.getElementById("downloadBtn");

  console.log("select:", select);
  console.log("button:", button);

  if (select && button) {
    select.addEventListener("change", function () {
      console.log("Value changed:", this.value);
      button.disabled = !this.value;
    });

    button.addEventListener("click", function () {
      const selectedFile = select.value;
      if (selectedFile) {
        const link = document.createElement("a");
        link.href = selectedFile;
        link.download = selectedFile.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  } else {
    console.error("Element not found.");
  }
}),
  AOS.init();

function validateEmail(email) {
  // Simple email validation
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function submitForm() {
  const email = document.getElementById("emailInput").value;
  if (validateEmail(email)) {
    // If email valid, trigger download
    window.location.href = "sample-brochure.pdf";
  } else {
    alert("Please enter a valid email address.");
  }
}

$(".read-more").click(function () {
  $(this).prev().slideToggle();
  if ($(this).text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
});

// Javascript Code for Track Record //

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".timeline-carousel__item-wrapper");
  const items = Array.from(wrapper.children);

  if (window.innerWidth > 576) {
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      wrapper.appendChild(clone);
    });
  }
});

// Javascript Code for Scroll To Top Icon //

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll
  });
};

// FAQ'S and Aplications Section Javascript Code //

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".icon");
      const isOpen = content.style.maxHeight;

      // Close all sections before opening the clicked one
      document.querySelectorAll(".accordion-content").forEach((c) => {
        c.style.maxHeight = null;
        c.previousElementSibling.querySelector(".icon").textContent = "+";
        c.previousElementSibling.setAttribute("aria-expanded", "false");
        c.previousElementSibling.classList.remove("active");
      });

      // Open clicked section
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "−";
        header.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
});

// Spares and Services Javascript Code //

const carousel = document.getElementById("servicesCarousel");
const pagination = document.getElementById("service-pagination");
const totalSlides = carousel.querySelectorAll(".carousel-item").length;

// Update pagination
function updatePagination() {
  const items = carousel.querySelectorAll(".carousel-item");
  const activeIndex = [...items].findIndex((item) =>
    item.classList.contains("active")
  );
  pagination.textContent = `0${activeIndex + 1} / 0${totalSlides}`;
}

// Create a hidden container to measure all slide heights safely
function setEqualSlideHeights() {
  const carouselInner = carousel.querySelector(".carousel-inner");
  const slides = carouselInner.querySelectorAll(".carousel-item");

  // Create hidden container to measure slides
  const tempWrapper = document.createElement("div");
  tempWrapper.style.position = "absolute";
  tempWrapper.style.visibility = "hidden";
  tempWrapper.style.height = "auto";
  tempWrapper.style.width = carouselInner.offsetWidth + "px";
  tempWrapper.style.top = 0;
  tempWrapper.style.left = 0;
  tempWrapper.style.zIndex = -1;
  tempWrapper.style.pointerEvents = "none";
  document.body.appendChild(tempWrapper);

  let maxHeight = 0;

  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    clone.classList.add("d-block"); // force block for measurement
    clone.classList.remove("active");
    tempWrapper.appendChild(clone);
    maxHeight = Math.max(maxHeight, clone.offsetHeight);
  });

  // Clean up
  document.body.removeChild(tempWrapper);

  // Apply the maxHeight to all slides
  slides.forEach((slide) => {
    slide.style.minHeight = maxHeight + "px";
  });

  // Also apply to carousel-inner so the container doesn't collapse
  carouselInner.style.minHeight = maxHeight + "px";
}

// Ensure DOM + images are ready
function onReady(callback) {
  if (document.readyState === "complete") {
    callback();
  } else {
    window.addEventListener("load", callback);
  }
}

onReady(() => {
  updatePagination();
  setEqualSlideHeights();
});

carousel.addEventListener("slid.bs.carousel", () => {
  updatePagination();
  setEqualSlideHeights();
});

window.addEventListener("resize", () => {
  setTimeout(setEqualSlideHeights, 100); // debounce resize
});
