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

// Fungsi untuk menambahkan animasi pada elemen list
document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan index animasi ke semua list item
    const addIndexToListItems = () => {
        document.querySelectorAll('.education ul li, .skills ul li, .experience ul li').forEach((item, index) => {
            item.style.setProperty('--li-index', index);
        });
    };
    
    // Menambahkan efek parallax pada scroll
    const parallaxEffect = () => {
        const aboutSection = document.querySelector('.about-section');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            
            // Parallax untuk background
            aboutSection.style.backgroundPositionY = scrollPosition * 0.05 + 'px';
        });
    };
    
    // Menambahkan animasi hover pada cards
    const addCardHoverEffects = () => {
        const cards = document.querySelectorAll('.profile-desc, .education, .skills-exp');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transition = 'all 0.3s ease';
            });
        });
    };
    
    // Menambahkan efek ripple saat klik
    const addRippleEffect = () => {
        const buttons = document.querySelectorAll('.about-title h2');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const x = e.clientX - this.getBoundingClientRect().left;
                const y = e.clientY - this.getBoundingClientRect().top;
                
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-effect');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    };
    
    // Animasi untuk gambar profil
    const animateProfileImage = () => {
        const profileImage = document.querySelector('.profile-image img');
        
        profileImage.addEventListener('mouseover', function() {
            this.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        });
    };
    
    // Deteksi scroll untuk animasi entrance
    const handleScrollAnimations = () => {
        const elements = document.querySelectorAll('.about-container, .skills-experience');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    // Jalankan semua fungsi
    addIndexToListItems();
    parallaxEffect();
    addCardHoverEffects();
    addRippleEffect();
    animateProfileImage();
    handleScrollAnimations();
});

// Tambahkan animasi loading selesai
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animasikan judul dan container dengan delay
    setTimeout(() => {
        document.querySelector('.about-title').classList.add('animate');
    }, 300);
    
    setTimeout(() => {
        document.querySelector('.about-container').classList.add('animate');
    }, 500);
    
    setTimeout(() => {
        document.querySelector('.skills-experience').classList.add('animate');
    }, 700);
});