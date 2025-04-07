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