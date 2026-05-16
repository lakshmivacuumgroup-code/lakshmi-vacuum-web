  window.onload = function () {
    if (!localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookie-popup').classList.add('visible');
    }
  };

  function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-popup').classList.remove('visible');
  }