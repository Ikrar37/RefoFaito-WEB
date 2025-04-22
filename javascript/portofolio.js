// Script untuk portofolio.js - simpan di folder javascript
document.addEventListener('DOMContentLoaded', function() {
    // Setup search functionality
    const searchInput = document.getElementById('portfolio-search');
    const mobileSearchInput = document.getElementById('mobile-search-input');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const noResultsMsg = document.getElementById('no-results');
    const mobileSearchBox = document.querySelector('.mobile-search .search-box');
    const mobileSearchIcon = document.querySelector('.mobile-search .fa-search');
    
    // Fungsi untuk menjalankan pencarian
    function performSearch(term) {
        const searchTerm = term.toLowerCase().trim();
        let hasVisibleItems = false;
        
        // Reset tampilan "tidak ada hasil"
        if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
        
        // Jika pencarian kosong, tampilkan semua item
        if (searchTerm === '') {
            portfolioItems.forEach(item => {
                item.style.display = 'block';
            });
            return;
        }
        
        // Filter berdasarkan kata kunci pencarian
        portfolioItems.forEach(item => {
            const keywords = item.getAttribute('data-keywords').toLowerCase();
            
            if (keywords.includes(searchTerm)) {
                item.style.display = 'block';
                hasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Tampilkan pesan jika tidak ada hasil yang cocok
        if (!hasVisibleItems && noResultsMsg) {
            noResultsMsg.style.display = 'block';
        }
    }
    
    // Sinkronkan input pencarian
    if (searchInput && mobileSearchInput) {
        searchInput.addEventListener('input', function() {
            mobileSearchInput.value = this.value;
            performSearch(this.value);
        });
        
        mobileSearchInput.addEventListener('input', function() {
            searchInput.value = this.value;
            performSearch(this.value);
        });
    } else if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
    } else if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
    }
    
    // Toggle expand/collapse mobile search
    if (mobileSearchBox && mobileSearchIcon) {
        mobileSearchIcon.addEventListener('click', function(e) {
            if (!mobileSearchBox.classList.contains('expanded')) {
                e.preventDefault();
                e.stopPropagation();
                mobileSearchBox.classList.add('expanded');
                mobileSearchInput.focus();
            }
        });
        
        // Collapse search when clicking outside
        document.addEventListener('click', function(e) {
            if (mobileSearchBox.classList.contains('expanded') && 
                !mobileSearchBox.contains(e.target)) {
                mobileSearchBox.classList.remove('expanded');
            }
        });
    }
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
        
        // Close menu when clicking menu items
        const menuItems = document.querySelectorAll('nav a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
    
    // Tambahkan efek ripple pada tombol see more
    const addRippleEffect = (button) => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    };
    
    // Terapkan efek ripple pada semua tombol see more
    document.querySelectorAll('.see-more').forEach(button => {
        addRippleEffect(button);
    });
});