document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan hover effect sederhana untuk contact items
    initHoverEffect();
    
    // Menginisialisasi animasi sederhana saat halaman dimuat
    initSimplePageLoad();
});

// Hover effect untuk contact items
function initHoverEffect() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        // Menambahkan efek saat hover
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
        });
        
        // Mengembalikan ke normal saat tidak hover
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Inisialisasi animasi sederhana saat halaman dimuat
function initSimplePageLoad() {
    // Animasi fadeIn untuk contact items
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        
        // Menambahkan delay yang berbeda untuk setiap item
        setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 + (index * 100)); // Waktu delay yang lebih singkat
    });
}

// Animasi hover untuk contact title
window.addEventListener('load', function() {
    const contactTitle = document.querySelector('.contact-title h2');
    
    if (contactTitle) {
        contactTitle.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        });
        
        contactTitle.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    }
    
    // Tambahkan kelas loaded ke body
    document.body.classList.add('loaded');
});