// JavaScript simpel untuk hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');
    
    // Log untuk debugging
    console.log('Hamburger:', hamburger);
    console.log('Nav:', nav);
    
    if (hamburger && nav) {
      // Toggle menu
      hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        nav.classList.toggle('active');
        console.log('Hamburger clicked, menu toggled');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
        }
      });
      
      // Close menu when clicking links
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
        });
      });
    } else {
      console.error('Hamburger menu atau nav tidak ditemukan');
    }
  });