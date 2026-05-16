<div>
    function enableSubmit() {
  document.querySelectorAll(".submit-button").forEach((btn) => {
    btn.removeAttribute("disabled");
  });
  console.log("CAPTCHA verified, submit buttons enabled.");
}

document.querySelectorAll(".email-input").forEach((input) => {
  input.addEventListener("input", function () {
    const form = this.closest("form");
    const submitBtn = form.querySelector(".submit-button");
    const emailError = form.querySelector(".email-error");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(this.value)) {
      submitBtn.removeAttribute("disabled");
      emailError.style.display = "none";
    } else {
      submitBtn.setAttribute("disabled", "true");
      emailError.style.display = "inline";
    }
  });
});

document.querySelectorAll(".brochure-form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = form.querySelector(".email-input");
    const email = emailInput.value.trim();
    const emailError = form.querySelector(".email-error");
    const successMessage = form.querySelector(".success-message");
    const submitBtn = form.querySelector(".submit-button");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
      window.open("lvh-bengaluru.pdf", "_blank");
      fetch(
        "https://script.google.com/macros/s/AKfycbyFBDFb_sBp0ZNJUJ-vjrIxkQw3r6T1KhQQXkVA33jiWC-sR6a9C1Gg_LprwKD4q-Lo/exec",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            download: "brochure",
          }),
        }
      )
        .then((res) => res.text())
        .then((data) => {
          console.log("Submitted to Google Apps Script:", data);
        })
        .catch((err) => {
          console.error("Error submitting to script:", err);
        });
      successMessage.style.display = "inline";
      setTimeout(() => {
        successMessage.style.display = "none";
        emailInput.value = "";
        submitBtn.setAttribute("disabled", "true");
      }, 2000);
    } else {
      // ❌ Invalid email: show error only
      emailError.style.display = "inline";

      setTimeout(() => {
        emailInput.value = "";
        emailError.style.display = "none";
        submitBtn.setAttribute("disabled", "true");
      }, 2000);
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const awardsCarousel = document.querySelector('#awardsCarousel');
  if (awardsCarousel) {
    new bootstrap.Carousel(awardsCarousel, {
      interval: 3000,
      ride: 'carousel',
      pause: false,
      wrap: true
    });
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

</div>