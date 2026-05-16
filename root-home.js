 $(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        arrows: true,
        swipe: true,
        slidesToShow: 3,
        cssEase: 'ease',
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: '<button type="button" class="slick-prev" aria-label="Previous slide">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="Next slide">&#10095;</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('.carousel-inner');
    var prevBtn = document.getElementById('heatPrev');
    var nextBtn = document.getElementById('heatNext');

    if (carousel && prevBtn && nextBtn) {
        var items = document.querySelectorAll('.carousel-item');
        var itemWidth = items[0].offsetWidth + 20;
        var scrollPosition = 0;

        function scrollNext() {
            var maxScroll = carousel.scrollWidth - carousel.clientWidth;
            scrollPosition = Math.min(scrollPosition + itemWidth, maxScroll);
            carousel.style.transform = 'translateX(-' + scrollPosition + 'px)';
        }

        function scrollPrev() {
            scrollPosition = Math.max(scrollPosition - itemWidth, 0);
            carousel.style.transform = 'translateX(-' + scrollPosition + 'px)';
        }

        nextBtn.addEventListener('click', scrollNext);
        prevBtn.addEventListener('click', scrollPrev);
    }

    var slider = document.getElementById('infinite-scroll');
    if (slider) {
        slider.innerHTML += slider.innerHTML;
    }
});

window.onload = function () {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-popup').classList.add('visible');
    }
};

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-popup').classList.remove('visible');
}