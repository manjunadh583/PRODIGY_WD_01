// Get the navbar element
const navbar = document.getElementById('navbar');

// Detect when the page is scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');  // Add 'scrolled' class when scroll position is more than 50px
  } else {
    navbar.classList.remove('scrolled');  // Remove 'scrolled' class when scroll position is less than 50px
  }
});
