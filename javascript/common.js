// Script untuk animasi header
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo h1');
    const navItems = document.querySelectorAll('nav ul li');
    
    // Fungsi untuk header yang berubah saat scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Animasi hover untuk logo
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Animasi ripple effect untuk menu navigasi
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Buat ripple effect hanya jika bukan di mode mobile
            if (window.innerWidth > 768) {
                const link = this.querySelector('a');
                const rect = link.getBoundingClientRect();
                
                const ripple = document.createElement('span');
                ripple.className = 'nav-ripple';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.backgroundColor = 'rgba(74, 144, 226, 0.2)';
                ripple.style.width = '50px';
                ripple.style.height = '50px';
                ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                ripple.style.animation = 'nav-ripple 0.6s linear';
                
                // Posisikan ripple dari titik klik
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                link.appendChild(ripple);
                
                // Hapus ripple setelah animasi selesai
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });
    
    // Tambahkan style untuk animasi ripple
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes nav-ripple {
            to {
                transform: translate(-50%, -50%) scale(3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});