document.getElementById("whatsappButton").addEventListener("click", function() {
    var phoneNumber = "6282335158180"; // Nomor WhatsApp tujuan tanpa kode negara
    var message = "Halo, saya tertarik dengan produk Anda."; // Pesan yang ingin dikirim
    
    // Membangun URL WhatsApp dengan nomor tujuan dan pesan
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    
    // Membuka link WhatsApp dalam jendela baru
    window.open(whatsappURL, '_blank');
  });
  