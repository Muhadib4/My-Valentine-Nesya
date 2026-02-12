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
    const webhookURL = "https://discord.com/api/webhooks/1470065627740897561/fTpkZHJc46ZpEhVUuQS-LTms6iGdIzh1z9O90ZwcthOVJgPdDNyhryYghZI3EcQFBecJ"; // <-- CONTOH: "https://discord.com/api/webhooks/..."

    if (webhookURL) {
        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                embeds: [{
                    title: "📝 Log Masuk Baru",
                    color: 16711760, // Warna Pink Valentine
                    fields: [
                        { name: "👤 Nama", value: `**${val}**`, inline: true },
                        { name: "🕒 Waktu", value: new Date().toLocaleString(), inline: true },
                        { name: "📱 Device", value: `\`${navigator.userAgent}\`` }
                    ],
                    footer: { text: "Valentine System Log" },
                    timestamp: new Date().toISOString()
                }]
            })
        }).catch(err => console.log("Gagal kirim log:", err));
    }

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