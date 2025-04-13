// Script untuk menambahkan animasi ke halaman About
document.addEventListener('DOMContentLoaded', function() {
    // Membuat efek ripple saat mengklik elemen
    document.addEventListener('click', function(e) {
        // Cek apakah click terdeteksi pada elemen yang memiliki hover-tilt class
        if (e.target.closest('.hover-tilt') || e.target.closest('.profile-desc') || e.target.closest('.education') || e.target.closest('.skills-exp')) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            
            // Posisikan ripple di tempat klik
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // Tambahkan ke elemen yang diklik
            e.target.appendChild(ripple);
            
            // Hapus setelah animasi selesai
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });

    // Animasi untuk list items
    const animatedLists = document.querySelectorAll('.animated-list');
    
    animatedLists.forEach(list => {
        const listItems = list.querySelectorAll('li');
        
        listItems.forEach((item, index) => {
            // Set delay untuk animasi berurutan
            item.style.setProperty('--li-index', index);
        });
    });

    // Fungsi untuk mengecek apakah elemen terlihat di viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Fungsi untuk menambahkan class 'in-view' pada elemen yang terlihat
    function checkVisibility() {
        const containers = document.querySelectorAll('.about-container, .skills-experience, .education, .skills-exp');
        
        containers.forEach(container => {
            if (isElementInViewport(container) && !container.classList.contains('in-view')) {
                container.classList.add('in-view');
            }
        });
    }

    // Jalankan saat scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Jalankan saat halaman dimuat
    checkVisibility();
});