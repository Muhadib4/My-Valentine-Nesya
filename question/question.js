const yes = document.getElementById("yes");
const no = document.getElementById("no");
const arena = document.getElementById("arena");
const text = document.getElementById("questionText");

let yesFontSize = 16; // Ukuran font awal dalam pixel
let noScale = 1;

const messages = [
  "eits tidak kena, wkwkkwkw",
  "pilih yess ajaaa",
  "ayoo doonggg 🥺",
  "plwisss",
  "horeeee",
];


let count = 0;

no.addEventListener("click", () => {
  no.style.position = "absolute";
  count++;

  // YES membesar (Menggunakan font-size agar card ikut membesar dan tidak menutupi teks)
  yesFontSize += 15; 
  yes.style.fontSize = `${yesFontSize}px`;

  // NO mengecil
  noScale -= 0.15;
  if (noScale < 0.3) noScale = 0.3;
  no.style.transform = `scale(${noScale})`;

  if (count <= messages.length) {
    text.textContent = messages[count - 1];
  }

  // === Pindahkan Tombol NO ke Area Aman (di bawah tombol YES) ===
  const noRect = no.getBoundingClientRect();

  // Batas horizontal: seluruh lebar arena dikurangi lebar tombol NO
  const maxX = arena.clientWidth - noRect.width;
  
  // Batas vertikal: area di bawah tombol YES
  const minY = yes.offsetHeight + 20; // Posisi Y minimum (di bawah YES + margin 20px)
  const maxY = arena.clientHeight - noRect.height; // Posisi Y maksimum

  // Hitung rentang yang aman untuk posisi Y, pastikan tidak negatif
  const yRange = Math.max(0, maxY - minY);
  const x = Math.random() * Math.max(0, maxX);
  const y = (Math.random() * yRange) + minY;
  
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  if (yesFontSize >= 80) { // Batas ukuran font
    no.style.display = "none";
    text.textContent = "YES MENANG 💖 hehehe";
  }

});

yes.addEventListener("click", () => {
  const card = document.querySelector(".card");
  const heading = document.querySelector("h1"); // Ambil elemen h1
  
  // 1. Ubah teks h1 menjadi "howreeee"
  heading.textContent = "Yeeyy, horeee!❤️🤍";
  
  // 2. Ubah tampilan card menjadi Luxury Green
  card.style.backgroundImage = "radial-gradient(at 0% 0%, #268e72 0, #065f46 50%, #5dceb0 100%)";
  card.style.boxShadow = "0 0 25px rgba(6, 78, 59, 0.6)";
  card.style.color = "#d1fae5";
  
  // Sembunyikan tombol-tombol agar fokus ke pesan
  arena.style.display = "none";
  
  // 3. Ubah teks pesan/pertanyaan menjadi status countdown
  text.innerHTML = `
    <div class="fade-in">
      <p>Tunggu sebentar ya...😁</p>
      <div id="timer" style="font-size: 0.9rem; margin-top: 15px; opacity: 0.8;">
        Membuka surat dalam 5...
      </div>
    </div>
  `;

  let timeLeft = 5;
  const countdown = setInterval(() => {
    timeLeft--;
    const timerElement = document.getElementById("timer");
    if (timerElement) {
      timerElement.innerText = `Membuka surat dalam ${timeLeft}...`;
    }
    
    if (timeLeft <= 0) {
      clearInterval(countdown);
      location.href = "letter/index.html";
    }
  }, 1000);
});