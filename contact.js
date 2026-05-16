  const emailField = document.getElementById("Email");
  const phoneField = document.getElementById("Phone");


  function clearError(field) {
    document.getElementById(field.id + "-error").innerText = "";
  }


  // Email: Must be valid format
  emailField.addEventListener("input", () => {
    const email = emailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(emailField, "Enter a valid email.");
    } else {
      clearError(emailField);
    }
  });

  // Phone: Only digits (intl-tel-input handles country codes)
  phoneField.addEventListener("input", () => {
    const raw = phoneField.value;
    
    // 1. Clean input: allow only digits and '+'
    let numeric = raw.replace(/[^\d+]/g, ""); 

    // 2. ENFORCE 15-DIGIT LIMIT
    if (numeric.length > 15) {
        numeric = numeric.slice(0, 15);
    }

    // 3. Update the field value if we modified it
    if (raw !== numeric) {
      phoneField.value = numeric; 
    }

    // 4. Check validity using intl-tel-input
    if (numeric && !iti.isValidNumber()) {
      showError(phoneField, "Enter a valid phone number.");
    } else {
      clearError(phoneField);
    }
  });


  const slider = document.getElementById('infinite-scroll');
  slider.innerHTML += slider.innerHTML; 

  window.onload = function () {
    if (!localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookie-popup').classList.add('visible');
    }
  };

  function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-popup').classList.remove('visible');
  }