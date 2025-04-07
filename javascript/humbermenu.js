document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan elemen hamburger dan navigasi
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    // Menambahkan event listener untuk klik pada hamburger
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Menutup menu saat link di klik
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});