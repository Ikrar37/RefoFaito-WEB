// JavaScript minimal hanya untuk animasi kontak
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk animasi kontak item
    function animateContactItems() {
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 300 + (index * 150));
        });
    }
    
    // Panggil fungsi animasi
    animateContactItems();
    
    // Tambahkan efek ripple saat mengklik item
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mousedown', function(e) {
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
});