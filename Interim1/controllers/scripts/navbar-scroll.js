let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Scroll behavior
window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    navbar.classList.remove('show-navbar');
    navbar.classList.add('hide-navbar');
  } else {
    navbar.classList.remove('hide-navbar');
    navbar.classList.add('show-navbar');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Show navbar on load
window.addEventListener('DOMContentLoaded', () => {
  navbar.classList.add('show-navbar');
  // Hide navbar when any nav-link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('show-navbar');
      navbar.classList.add('hide-navbar');
      // Update lastScrollTop to current position
      lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });
  });
});