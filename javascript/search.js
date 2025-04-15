// Kode JavaScript minimal hanya untuk fungsi pencarian
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('portfolio-search');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const noResultsMsg = document.getElementById('no-results');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        let hasVisibleItems = false;
        
        // Reset tampilan "tidak ada hasil"
        noResultsMsg.style.display = 'none';
        
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
        if (!hasVisibleItems) {
            noResultsMsg.style.display = 'block';
        }
    });
    
    // Tambahkan efek fokus pada search box
    searchInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});