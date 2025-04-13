document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan kelas animate-bg ke body untuk animasi zoom background
    document.body.classList.add('animate-bg');
    
    // Inisialisasi efek partikel
    initParticles();
    
    // Animasi hover untuk tombol
    initButtonEffects();
    
    // Efek parallax untuk halaman
    initParallaxEffect();
    
    // Tampilkan konten setelah loading
    showContent();
});

// Menampilkan konten setelah loading selesai
function showContent() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Jika elemen loading screen ada
    if (loadingScreen) {
        // Hilangkan loading screen setelah 1.5 detik
        setTimeout(function() {
            loadingScreen.classList.add('fade-out');
            // Hapus loading screen dari DOM setelah animasi selesai
            setTimeout(function() {
                loadingScreen.remove();
            }, 800);
        }, 1500);
    }
    
    // Tambahkan kelas visible ke elemen-elemen yang memerlukan animasi
    setTimeout(function() {
        document.querySelectorAll('.animate-on-load').forEach(function(el, index) {
            setTimeout(function() {
                el.classList.add('visible');
            }, index * 200);
        });
    }, 300);
}

// Inisialisasi efek partikel
function initParticles() {
    const heroSection = document.querySelector('.hero');
    
    // Buat container untuk partikel
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    heroSection.appendChild(particlesContainer);
    
    // Deteksi apakah perangkat mobile
    const isMobile = window.innerWidth <= 768;
    
    // Sesuaikan jumlah partikel berdasarkan ukuran layar
    const particleCount = isMobile ? 20 : 50;
    
    // Buat partikel-partikel
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer, isMobile);
    }
}

// Membuat partikel individual
function createParticle(container, isMobile) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Setel ukuran dan posisi acak - lebih kecil untuk mobile
    const size = isMobile ? (Math.random() * 3 + 1) : (Math.random() * 5 + 2);
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 20 + 10;
    
    // Styling partikel
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    // Animasi partikel
    particle.style.animation = `floatParticle ${duration}s linear infinite`;
    particle.style.animationDelay = `${delay}s`;
    
    // Tambahkan ke container
    container.appendChild(particle);
    
    // Definisikan animasi keyframes secara dinamis - pergerakan lebih kecil untuk mobile
    const style = document.createElement('style');
    const moveScale = isMobile ? 0.6 : 1; // Kurangi pergerakan pada mobile
    const moveX = ((Math.random() * 40) - 20) * moveScale; 
    const moveY = ((Math.random() * 40) - 20) * moveScale;
    
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translate(0, 0);
            }
            50% {
                transform: translate(${moveX}px, ${moveY}px);
            }
            100% {
                transform: translate(0, 0);
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Inisialisasi efek tombol
function initButtonEffects() {
    const aboutBtn = document.querySelector('.about-btn');
    
    if (aboutBtn) {
        // Tambahkan efek ripple saat klik
        aboutBtn.addEventListener('click', function(e) {
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
        
        // Efek hover 3D
        aboutBtn.addEventListener('mousemove', function(e) {
            const boundingRect = this.getBoundingClientRect();
            const x = e.clientX - boundingRect.left;
            const y = e.clientY - boundingRect.top;
            
            const xPercent = x / boundingRect.width;
            const yPercent = y / boundingRect.height;
            
            const rotateX = (yPercent - 0.5) * 10;
            const rotateY = (xPercent - 0.5) * -10;
            
            this.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.03)`;
        });
        
        // Reset saat mouse keluar
        aboutBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(500px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    }
}

// Inisialisasi efek parallax
function initParallaxEffect() {
    // Deteksi apakah perangkat mobile
    const isMobile = window.innerWidth <= 768;
    
    // Nonaktifkan parallax mouse pada mobile untuk performa lebih baik
    if (!isMobile) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            if (scrollPosition > 0) {
                document.body.style.backgroundPositionY = `calc(30% + ${scrollPosition * 0.05}px)`;
            }
        });
        
        // Parallax effect dengan gerakan mouse (hanya untuk desktop)
        document.addEventListener('mousemove', function(e) {
            const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
            const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
            
            document.body.style.backgroundPositionX = `calc(50% + ${xPos}px)`;
            document.body.style.backgroundPositionY = `calc(30% + ${yPos}px)`;
        });
    } else {
        // Untuk mobile, gunakan animasi sederhana untuk background
        document.body.classList.add('simple-bg-animation');
    }
    
    // Update saat resize window
    window.addEventListener('resize', function() {
        const nowMobile = window.innerWidth <= 768;
        
        if (nowMobile !== isMobile) {
            // Reload halaman saat berubah antara mobile dan desktop
            location.reload();
        }
    });
}

// Text typing animation
function initTypingAnimation() {
    const greetingElement = document.querySelector('.greeting');
    
    if (greetingElement) {
        const originalText = greetingElement.textContent;
        greetingElement.textContent = '';
        
        // Type text effect
        let charIndex = 0;
        const typingInterval = setInterval(function() {
            if (charIndex < originalText.length) {
                greetingElement.textContent += originalText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                
                // Add blinking cursor effect
                const cursor = document.createElement('span');
                cursor.classList.add('typing-cursor');
                cursor.textContent = '|';
                greetingElement.appendChild(cursor);
                
                // Remove cursor after 2 seconds
                setTimeout(function() {
                    cursor.remove();
                }, 2000);
            }
        }, 100);
    }
}