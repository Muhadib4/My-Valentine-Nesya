function check() {
    const input = document.getElementById("nameInput");
    const container = document.querySelector(".center");
    const allowed = ["nesya"];
    const val = input.value.toLowerCase().trim();

// ////////////////////////////////////////////////////

    // --- PENCATAT HISTORY ---
    // 1. Tampilkan di Console Browser (Klik kanan > Inspect > Console untuk melihat)
    console.log(`[HISTORY] Nama: ${val} | Waktu: ${new Date().toLocaleString()} | Device: ${navigator.userAgent}`);

    // 2. Kirim ke Discord (Opsional: Isi URL Webhook di bawah agar muncul notifikasi di laptopmu)
    

///////////////////////////////////////

    // Hapus konten di dalam container untuk animasi
    container.innerHTML = "";

    if (allowed.includes(val)) {
        // JIKA BENAR (LUXURY GREEN)
        container.classList.add("luxury-green");
        container.innerHTML = `
            <h1 class="fade-in">Hawloooo! 👋</h1>
            <p class="fade-in">Selamat datang, ${val.charAt(0).toUpperCase() + val.slice(1)}</p>
            <div id="timer" class="countdown-text">Memindahkan dalam 5...</div>
        `;

        let timeLeft = 5;
        const timer = setInterval(() => {
            timeLeft--;
            document.getElementById("timer").innerText = `Memindahkan dalam ${timeLeft}...`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                location.href = "question/index.html";
            }
        }, 1000);

    } else {
        // JIKA SALAH (LUXURY RED)
        container.classList.add("luxury-red");
        container.innerHTML = `
            <h1 class="fade-in">Oops...</h1>
            <p class="fade-in">Maaf, kamu bukan orangnya.</p>
            <div id="timer" class="countdown-text">Keluar dalam 10...</div>
        `;

        let timeLeft = 10;
        const timer = setInterval(() => {
            timeLeft--;
            document.getElementById("timer").innerText = `Keluar dalam ${timeLeft}...`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                location.href = "https://google.com";
            }
        }, 1000);
    }
}
