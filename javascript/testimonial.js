// Simpan file ini sebagai testimonial.js dan tambahkan ke index.html

let slideIndex = 1;
let slideInterval;

// Inisialisasi slide saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
    startAutoSlide();
});

// Fungsi untuk mengubah slide
function changeSlide(n) {
    showSlide(slideIndex += n);
    resetAutoSlide();
}

// Fungsi untuk menampilkan slide tertentu
function currentSlide(n) {
    showSlide(slideIndex = n);
    resetAutoSlide();
}

// Fungsi utama untuk menampilkan slide
function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("dot");
    
    // Reset ke slide pertama jika melebihi jumlah slide
    if (n > slides.length) {slideIndex = 1}
    
    // Kembali ke slide terakhir jika kurang dari 1
    if (n < 1) {slideIndex = slides.length}
    
    // Sembunyikan semua slide
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Deaktifkan semua dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Tampilkan slide yang dipilih
    slides[slideIndex-1].classList.add("active");
    
    // Aktifkan dot yang sesuai
    dots[slideIndex-1].classList.add("active");
}

// Fungsi untuk memulai slide otomatis
function startAutoSlide() {
    slideInterval = setInterval(function() {
        changeSlide(1);
    }, 5000); // Ganti slide setiap 5 detik
}

// Reset timer untuk slide otomatis
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Hentikan slide otomatis saat user mengarahkan kursor ke testimonial
document.addEventListener('DOMContentLoaded', function() {
    const testimonialSection = document.querySelector('.testimonials');
    
    testimonialSection.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    testimonialSection.addEventListener('mouseleave', function() {
        startAutoSlide();
    });
});