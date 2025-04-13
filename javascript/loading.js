// loading.js - Tambahkan file ini ke folder javascript Anda

// Buat elemen preloader saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Tambahkan class loading ke body
    document.body.classList.add('loading');
    
    // Buat elemen preloader
    var preloader = document.createElement('div');
    preloader.id = 'preloader';
    
    var loader = document.createElement('div');
    loader.id = 'loader';
    
    var loaderText = document.createElement('div');
    loaderText.id = 'loader-text';
    loaderText.innerText = 'RefoFaito';
    
    // Susun elemen-elemen
    preloader.appendChild(loader);
    preloader.appendChild(loaderText);
    
    // Tambahkan preloader ke awal body
    document.body.insertBefore(preloader, document.body.firstChild);
});

// Tunggu hingga semua resource dimuat sebelum menyembunyikan preloader
window.addEventListener('load', function() {
    // Tampilkan loading selama 2 detik
    setTimeout(function() {
        // Tambahkan class loaded ke body untuk menyembunyikan preloader
        document.body.classList.add('loaded');
        // Hapus class loading dari body
        document.body.classList.remove('loading');
    }, 2000); // Durasi loading 2 detik
});