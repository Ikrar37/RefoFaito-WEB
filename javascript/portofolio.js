document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan elemen input search
    const searchInput = document.getElementById('portfolio-search');
    
    // Mendapatkan semua item portofolio
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Menambahkan event listener untuk input search
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        // Loop melalui semua item portofolio
        portfolioItems.forEach(function(item) {
            // Mendapatkan teks dari judul portofolio
            const title = item.querySelector('.portfolio-info h3').textContent.toLowerCase();
            // Mendapatkan teks dari alt image sebagai deskripsi tambahan
            const description = item.querySelector('.portfolio-image-container img').alt.toLowerCase();
            
            // Memeriksa apakah judul atau deskripsi mengandung kata kunci pencarian
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'block'; // Tampilkan item
            } else {
                item.style.display = 'none'; // Sembunyikan item
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi elemen-elemen portfolio
    const searchBox = document.getElementById('portfolio-search');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolioTitle = document.querySelector('.portfolio-title');
    
    // Efek parallax untuk background
    function initParallaxEffect() {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const portfolioSection = document.querySelector('.portfolio-section');
            
            // Aplikasikan efek parallax ke background
            portfolioSection.style.backgroundPositionY = scrollPosition * 0.05 + 'px';
        });
    }
    
    // Efek hover untuk item portfolio yang lebih halus
    function enhancePortfolioItems() {
        portfolioItems.forEach(item => {
            // Efek tilt saat hover
            item.addEventListener('mousemove', function(e) {
                const boundingRect = this.getBoundingClientRect();
                const mouseX = e.clientX - boundingRect.left;
                const mouseY = e.clientY - boundingRect.top;
                
                // Kalkulasi rotasi berdasarkan posisi mouse
                const tiltX = (mouseY / boundingRect.height - 0.5) * 5;
                const tiltY = (mouseX / boundingRect.width - 0.5) * -5;
                
                // Terapkan efek tilt dengan transform
                this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px)`;
            });
            
            // Reset transformasi saat mouse keluar
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
                
                // Animasi kembali ke posisi awal
                this.style.transition = 'transform 0.5s ease';
                setTimeout(() => {
                    this.style.transition = '';
                }, 500);
            });
            
            // Menambahkan ripple effect saat klik
            item.addEventListener('click', function(e) {
                // Hanya lakukan jika yang di-klik bukan see-more link
                if (!e.target.classList.contains('see-more')) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                }
            });
        });
    }
    
    // Menambahkan fitur filter/pencarian yang lebih canggih
    function enhanceSearch() {
        searchBox.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let hasVisibleItems = false;
            
            portfolioItems.forEach(item => {
                const itemText = item.querySelector('.portfolio-info').textContent.toLowerCase();
                
                if (searchTerm === '' || itemText.includes(searchTerm)) {
                    // Animasi fade-in untuk item yang cocok
                    item.style.display = '';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                    
                    hasVisibleItems = true;
                } else {
                    // Animasi fade-out untuk item yang tidak cocok
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
            
            // Tampilkan pesan jika tidak ada hasil
            if (!hasVisibleItems) {
                if (!document.querySelector('.no-results-message')) {
                    const noResults = document.createElement('div');
                    noResults.classList.add('no-results-message');
                    noResults.textContent = 'Tidak ada hasil ditemukan';
                    noResults.style.textAlign = 'center';
                    noResults.style.padding = '50px 0';
                    noResults.style.color = '#304258';
                    noResults.style.fontWeight = 'bold';
                    noResults.style.width = '100%';
                    noResults.style.animation = 'fadeIn 0.5s ease';
                    
                    portfolioGrid.appendChild(noResults);
                }
            } else {
                const noResults = document.querySelector('.no-results-message');
                if (noResults) {
                    noResults.remove();
                }
            }
        });
        
        // Tambahkan efek fokus pada search box
        searchBox.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        searchBox.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    }
    
    // Tambahkan efek loading finished
    function addLoadingFinishedEffect() {
        document.body.classList.add('loaded');
        
        setTimeout(() => {
            portfolioTitle.classList.add('visible');
        }, 300);
        
        portfolioItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 500 + (index * 200));
        });
    }
    
    // Inisialisasi semua efek
    initParallaxEffect();
    enhancePortfolioItems();
    enhanceSearch();
    addLoadingFinishedEffect();
    
    // Tambahkan hover effect untuk tombol see more
    document.querySelectorAll('.see-more').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
});

// Tambahkan animasi pada scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        if (itemPosition < screenHeight * 0.8) {
            item.classList.add('in-view');
        }
    });
});