document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi animasi
    initAnimations();
    
    // Tambahkan ripple effect
    initRippleEffect();
    
    // Animasi scroll untuk item
    initScrollAnimations();
    
    // Tambahkan efek typing untuk teks pesan
    initTypingEffect();
    
    // Tambahkan efek 3D tilt untuk contact items
    initTiltEffect();
    
    // Inisialisasi efek partikel
    initParticles();
});

// Fungsi utama untuk inisialisasi semua animasi dasar
function initAnimations() {
    // Animasi untuk contact items dengan delay staggered
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        // Sembunyikan item terlebih dahulu
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        // Tambahkan event listeners untuk hover
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.03)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(84, 120, 138, 0.2)';
            
            // Putar icon sedikit saat hover
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'rotate(15deg) scale(1.1)';
                img.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Kembalikan icon ke posisi normal
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = '';
            }
        });
        
        // Animasi fade in dengan delay bertahap
        setTimeout(() => {
            item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
    
    // Animasi untuk contact title
    const contactTitle = document.querySelector('.contact-title h2');
    if (contactTitle) {
        contactTitle.style.opacity = '0';
        contactTitle.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            contactTitle.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            contactTitle.style.opacity = '1';
            contactTitle.style.transform = 'translateY(0)';
        }, 200);
        
        // Tambahkan event listeners untuk hover pada title
        contactTitle.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.03)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        });
        
        contactTitle.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    }
    
    // Animasi untuk contact message
    const contactMessage = document.querySelector('.contact-message');
    if (contactMessage) {
        contactMessage.style.opacity = '0';
        contactMessage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            contactMessage.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            contactMessage.style.opacity = '1';
            contactMessage.style.transform = 'scale(1)';
        }, 250);
        
        // Tambahkan event listeners untuk hover pada message
        contactMessage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        contactMessage.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    }
    
    // Animasi float untuk semua item kontak
    setInterval(() => {
        contactItems.forEach((item, index) => {
            // Tambahkan animasi float dengan delay berbeda untuk setiap item
            setTimeout(() => {
                item.style.animation = 'float 3s ease-in-out infinite';
            }, index * 300);
        });
    }, 100);
}

// Fungsi untuk menambahkan efek ripple saat mengklik item
function initRippleEffect() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mousedown', function(e) {
            // Hapus ripple lama jika ada
            const oldRipple = item.querySelector('.ripple');
            if (oldRipple) {
                oldRipple.remove();
            }
            
            // Buat elemen ripple baru
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Posisikan ripple di lokasi klik
            const rect = item.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
            
            // Tambahkan ripple ke item
            item.appendChild(ripple);
            
            // Hapus ripple setelah animasi selesai
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Fungsi untuk animasi saat scroll
function initScrollAnimations() {
    // Deteksi scroll untuk animasi parallax
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        const contactSection = document.querySelector('.contact-section');
        
        if (contactSection) {
            // Efek parallax pada background
            const before = document.styleSheets;
            for (let i = 0; i < before.length; i++) {
                const rules = before[i].cssRules || before[i].rules;
                if (!rules) continue;
                
                for (let j = 0; j < rules.length; j++) {
                    if (rules[j].selectorText === '.contact-section::before') {
                        // Sesuaikan posisi background berdasarkan scroll
                        const yPos = -(scrollPos * 0.15); // Kecepatan parallax
                        rules[j].style.backgroundPositionY = yPos + 'px';
                        break;
                    }
                }
            }
        }
        
        // Tambahkan animasi fade-in saat elemen terlihat saat scroll
        const elements = document.querySelectorAll('.contact-title, .contact-message, .contact-item');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Jika elemen terlihat di viewport
            if (rect.top < windowHeight - 50) {
                el.classList.add('visible');
            }
        });
    });
    
    // Tambahkan class untuk animasi
    const elements = document.querySelectorAll('.contact-title, .contact-message, .contact-item');
    elements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Trigger scroll event sekali untuk inisialisasi
    window.dispatchEvent(new Event('scroll'));
}

// Fungsi untuk efek typing pada pesan
function initTypingEffect() {
    const messageParagraphs = document.querySelectorAll('.contact-message p');
    
    if (messageParagraphs.length > 0) {
        // Simpan teks asli
        const originalTexts = [];
        messageParagraphs.forEach(p => {
            originalTexts.push(p.textContent);
            p.textContent = '';
        });
        
        // Fungsi untuk animasi typing
        function typeText(element, text, i, callback) {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                setTimeout(function() {
                    typeText(element, text, i + 1, callback);
                }, 20); // Kecepatan typing
            } else if (callback) {
                // Setelah selesai, lanjut ke callback
                setTimeout(callback, 300);
            }
        }
        
        // Mulai typing pada paragraf pertama, kemudian yang kedua
        setTimeout(() => {
            typeText(messageParagraphs[0], originalTexts[0], 0, () => {
                if (messageParagraphs.length > 1) {
                    typeText(messageParagraphs[1], originalTexts[1], 0);
                }
            });
        }, 800);
    }
}

// Fungsi untuk efek 3D tilt pada contact items
function initTiltEffect() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            // Dapatkan posisi relatif kursor pada elemen
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // posisi x relatif
            const y = e.clientY - rect.top; // posisi y relatif
            
            // Hitung rotasi berdasarkan posisi kursor
            // Maksimal rotasi: 5 derajat
            const rotateX = ((y - rect.height / 2) / rect.height) * -5;
            const rotateY = ((x - rect.width / 2) / rect.width) * 5;
            
            // Terapkan transformasi
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            
            // Tambahkan highlight berdasarkan posisi
            const intensity = 0.5; // intensitas highlight
            this.style.backgroundImage = 
                `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,${intensity}), transparent)`;
        });
        
        // Reset saat mouse leave
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.backgroundImage = '';
        });
    });
}

// Fungsi untuk inisialisasi efek partikel
function initParticles() {
    // Cek apakah section contact ada
    const contactSection = document.querySelector('.contact-section');
    if (!contactSection) return;
    
    // Buat canvas untuk partikel
    const canvas = document.createElement('canvas');
    canvas.className = 'particles-canvas';
    
    // Sisipkan canvas sebelum semua konten di dalam contact-section
    contactSection.insertBefore(canvas, contactSection.firstChild);
    
    // Inisialisasi canvas
    const ctx = canvas.getContext('2d');
    
    // Resize canvas agar sesuai dengan ukuran jendela
    function resizeCanvas() {
        canvas.width = contactSection.offsetWidth;
        canvas.height = contactSection.offsetHeight;
    }
    
    // Panggil resizeCanvas saat halaman dimuat dan diresize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Buat array untuk menyimpan partikel
    const particles = [];
    const maxParticles = 40; // Jumlah partikel
    
    // Class untuk mengelola partikel
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1; // Ukuran partikel: 1-4px
            this.speedX = Math.random() * 0.5 - 0.25; // Kecepatan horizontal: -0.25 sampai 0.25
            this.speedY = Math.random() * 0.5 - 0.25; // Kecepatan vertikal: -0.25 sampai 0.25
            this.opacity = Math.random() * 0.5 + 0.1; // Transparansi: 0.1-0.6
            this.color = Math.random() > 0.5 ? '#55788a' : '#C7D9E5'; // Dua warna tema
        }
        
        update() {
            // Perbarui posisi
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Kembalikan partikel ke dalam canvas jika keluar batas
            if (this.x < 0 || this.x > canvas.width || 
                this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
        }
    }
    
    // Inisialisasi partikel
    function initParticlesArray() {
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
    }
    
    // Update dan draw semua partikel
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Gambar garis penghubung antara partikel yang berdekatan
            connectParticles(particles[i], particles);
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    // Fungsi untuk menggambar garis antara partikel yang berdekatan
    function connectParticles(p1, particles) {
        const maxDistance = 100; // Jarak maksimum untuk menghubungkan partikel
        
        for (let i = 0; i < particles.length; i++) {
            const p2 = particles[i];
            
            // Hitung jarak antara dua partikel
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Jika jaraknya kurang dari maxDistance, gambar garis
            if (distance < maxDistance) {
                // Opacity berbanding terbalik dengan jarak
                const opacity = 1 - (distance / maxDistance);
                ctx.beginPath();
                ctx.strokeStyle = p1.color; // Gunakan warna partikel pertama
                ctx.globalAlpha = opacity * 0.2; // Atur transparansi garis
                ctx.lineWidth = 0.5;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    }
    
    // Tambahkan interaksi mouse untuk efek hover
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 100; // Radius pengaruh mouse
    
    // Pantau posisi mouse
    contactSection.addEventListener('mousemove', function(e) {
        const rect = contactSection.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        
        // Perbarui posisi partikel yang dekat dengan mouse
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouseRadius) {
                // Dorong partikel menjauhi mouse
                const force = (mouseRadius - distance) / mouseRadius;
                const directionX = dx / distance || 0;
                const directionY = dy / distance || 0;
                
                p.x += directionX * force * 2; // Sesuaikan kekuatan dorongan
                p.y += directionY * force * 2;
            }
        }
    });
    
    // Mulai animasi
    initParticlesArray();
    animateParticles();
}

// Tambahkan kode JavaScript ini ke file contact.js atau script di akhir contact.html

// Fungsi untuk memperbaiki pesan kontak pada perangkat mobile
function fixContactMessageOnMobile() {
    // Deteksi apakah perangkat adalah mobile
    const isMobile = window.innerWidth <= 768;
    
    // Dapatkan paragraf pertama dalam contact-message
    const messageParagraph = document.querySelector('.contact-message p:first-child');
    
    if (messageParagraph) {
        if (isMobile) {
            // Untuk mobile: hapus semua tag <br> dan simpan teks asli
            const originalText = messageParagraph.innerText;
            
            // Reset HTML dengan teks asli tanpa tag <br>
            messageParagraph.innerHTML = originalText;
            
            // Gaya tambahan untuk memastikan teks tetap utuh
            messageParagraph.style.whiteSpace = 'normal';
            messageParagraph.style.wordBreak = 'keep-all';
            messageParagraph.style.fontSize = '15px';
            messageParagraph.style.lineHeight = '1.4';
        } else {
            // Untuk desktop: kembalikan format asli dengan tag <br>
            // Pastikan ini hanya dijalankan sekali untuk menghindari duplikasi
            if (!messageParagraph.querySelector('br')) {
                // Cari posisi "butuh foto" untuk memasukkan tag <br>
                const text = messageParagraph.innerText;
                const marketingIndex = text.indexOf('Digital Marketing atau');
                
                if (marketingIndex !== -1) {
                    const insertIndex = marketingIndex + 'Digital Marketing atau'.length;
                    const newText = text.substring(0, insertIndex) + 
                                   ' <br> ' + 
                                   text.substring(insertIndex).trim();
                    
                    messageParagraph.innerHTML = newText;
                }
            }
        }
    }
}

// Jalankan fungsi saat halaman dimuat dan saat ukuran layar berubah
window.addEventListener('DOMContentLoaded', fixContactMessageOnMobile);
window.addEventListener('resize', fixContactMessageOnMobile);