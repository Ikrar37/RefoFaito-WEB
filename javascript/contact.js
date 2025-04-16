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

// Tambahkan kode ini ke file contact.js atau buat file baru

document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk menampilkan form kontak
    const contactItems = document.querySelectorAll('.contact-item');
    
    setTimeout(() => {
        contactItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }, 500);
    
    // Inisialisasi form feedback
    const feedbackForm = document.getElementById('feedbackForm');
    const formNotification = document.getElementById('formNotification');
    const notificationMessage = document.getElementById('notificationMessage');
    const closeNotification = document.getElementById('closeNotification');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data dari form
            const formData = new FormData(feedbackForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Simulasi proses pengiriman form (ganti dengan API sebenarnya nanti)
            setTimeout(() => {
                // Tampilkan notifikasi sukses
                showNotification('Terima kasih! Masukan Anda telah berhasil dikirim.', 'success');
                
                // Reset form
                feedbackForm.reset();
            }, 1000);
        });
    }
    
    // Fungsi untuk menampilkan notifikasi
    function showNotification(message, type = 'success') {
        notificationMessage.textContent = message;
        formNotification.classList.remove('hidden', 'error');
        
        if (type === 'error') {
            formNotification.classList.add('error');
        }
        
        // Sembunyikan notifikasi setelah 5 detik
        setTimeout(() => {
            formNotification.classList.add('hidden');
        }, 5000);
    }
    
    // Close button untuk notifikasi
    if (closeNotification) {
        closeNotification.addEventListener('click', function() {
            formNotification.classList.add('hidden');
        });
    }
    
    // Form validasi tambahan jika diperlukan
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Tambahkan efek highlight saat focus
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            
            // Validasi sederhana
            if (this.value.trim() === '') {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });
    });
});