const el = document.getElementById("text");
const words = el.innerText.split(" ");

el.innerHTML = words
.map(word => `<span>${word}</span>`)
.join(" ");

function next1() {
    location.href = "Animated-Firework-Diwali-Copy/Animated Firework Diwali/index.html";
}
function next2() {
    location.href = "Heart-Animation/Heart Animation/index.html";
}
function next3() {
    location.href = "Flower-Animations/Flower Animations/index.html";
}
function next4() {
    location.href = "CSS-Blossoming-Flowers-Animation/CSS Blossoming Flowers Animation/index.html";
}


const audio = document.getElementById("audio-source");
const playBtn = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const title = document.getElementById("song-title");
const artist = document.getElementById("song-artist");

// DATA LAGU (Silahkan ganti link dan namanya di sini)
const songs = [
    { name: "Jatuh Sejatuh-Jatuhnya", artist: "Anneth", src: "audio/ANNETH - JATUH SEJATUH-JATUHNYA (LYRIC VIDEO) LIRIK LAGU VIRAL & TRENDING TERBARU.mp3" },
    { name: "Consume", artist: "Chase Atlantic", src: "audio/Chase Atlantic - _Consume_ feat Goon Des Garcons Official Audio.mp3" },
    { name: "I Think They Call This Love", artist: "Elliot James Reay", src: "audio/Elliot James Reay - I Think They Call This Love Lyrics.mp3" },
    { name: "Last Night on Earth", artist: "Green Day", src: "audio/Green Day - Last Night on Earth.mp3" },
    { name: "Sanctuary", artist: "Joji", src: "audio/Joji  Sanctuary _ Lirik Lagu Terjemahan.mp3" },
    { name: "Please, Please, Please, Let Me Get What I Want", artist: "The Smiths", src: "audio/The Smiths - Please, Please, Please, Let Me Get What I Want (Official Audio).mp3" },
    { name: "Mind Games", artist: "Sickick", src: "audio/Sickick - Mind Games (Lyrics).mp3" },
    { name: "The Only Exception", artist: "Paramore", src: "audio/paramore - the only exception (lyrics).mp3" },
    { name: "Die For You", artist: "The Weeknd, Ariana Grande", src: "audio/The Weeknd, Ariana Grande - Die For You (Remix  Lyric Video).mp3" },
    { name: "Love Me", artist: "RealestK", src: "audio/RealestK - Love Me (Official Audio).mp3" },
    { name: "From The Start", artist: "Laufey", src: "audio/@laufey - From The Start (Lyrics).mp3" },
    { name: "Something About You", artist: "Eyedress & Dent May", src: "audio/Eyedress & Dent May - Something About You.mp3" },
    { name: "I Wanna Be Yours", artist: "Arctic Monkeys", src: "audio/I Wanna Be Yours.mp3" },
    { name: "So Easy", artist: "Olivia Dean", src: "audio/Olivia Dean - So Easy (To Fall In Love) (Lyric Video).mp3" },
    { name: "Locked Away", artist: "R. City", src: "audio/R. City - Locked Away ft. Adam Levine.mp3" },
    { name: "You're Still The One", artist: "Shania Twain", src: "audio/You're Still The One - Shania Twain (Lirik Lagu Terjemahan).mp3" },
    { name: "About You", artist: "The 1975", src: "audio/The 1975 - About You (Official).mp3" },
    { name: "Be My Baby", artist: "The Ronettes", src: "audio/The Ronettes - Be My Baby.mp3" },
    { name: "SENCY", artist: "dia", src: "audio/dia - SENCY ft. TENXI (Lyric Video).mp3" },
    { name: "BIRDS OF A FEATHER", artist: "Billie Eilish", src: "audio/Billie Eilish - BIRDS OF A FEATHER (Official Lyric Video).mp3" },
    { name: "Kota Ini Tak Sama Tanpa Mu", artist: "Nadhif Basalamah", src: "audio/Nadhif Basalamah (with Aziz Harun & Aisha Retno) - kota ini tak sama tanpamu (Official Lyric Video).mp3" },
    { name: "Love Me Not", artist: "Ravyn Lenae", src: "audio/Ravyn Lenae - Love Me Not.mp3" },
    // { name: "Lagu", artist: "Artis", src: "audio" },
];

let songIndex = 0;

function loadSong(index, autoPlay = true) {
    songIndex = index;
    const song = songs[songIndex];
    title.innerText = song.name;
    artist.innerText = song.artist;
    audio.src = song.src;
    audio.loop = true; // Loop lagu saat selesai
    if (autoPlay) {
        playPause(true); // Langsung putar saat dipilih
    } else {
        playBtn.innerText = "▶";
    }
}

function playPause(forcePlay = false) {
    if (audio.paused || forcePlay) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
}

// Update Progress Bar
audio.ontimeupdate = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
    
    // Format Waktu
    let curMins = Math.floor(audio.currentTime / 60);
    let curSecs = Math.floor(audio.currentTime % 60);
    let durMins = Math.floor(audio.duration / 60) || 0;
    let durSecs = Math.floor(audio.duration % 60) || 0;
    
    currentTimeEl.innerText = `${curMins}:${curSecs < 10 ? '0'+curSecs : curSecs}`;
    durationEl.innerText = `${durMins}:${durSecs < 10 ? '0'+durSecs : durSecs}`;

    // --- FADE IN & FADE OUT (10 Detik) ---
    if (typeof volumeSlider !== 'undefined') {
        const fadeTime = 10; // Durasi fade dalam detik
        const targetVol = volumeSlider.value / 100; // Volume maksimal sesuai slider user
        const time = audio.currentTime;
        const duration = audio.duration;

        if (duration > 0) {
            // Hitung volume: Ambil nilai terkecil antara Fade In, Fade Out, atau 1 (Normal)
            const fadeIn = Math.min(1, time / fadeTime);
            const fadeOut = Math.min(1, (duration - time) / fadeTime);
            
            // Terapkan volume
            audio.volume = Math.min(fadeIn, fadeOut) * targetVol;
        }
    }
};

progressBar.oninput = () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
};

// Toggle Player Pop-up
function toggleMusicPlayer() {
    const player = document.getElementById("music-player");
    const mainBox = document.querySelector(".box");
    player.classList.toggle("active");
    mainBox.classList.toggle("blur-effect");

    const boowomp = document.getElementById("boowomp");
    if (boowomp) {
        boowomp.currentTime = 0; // Reset suara agar bisa diputar ulang dengan cepat
        boowomp.play();
    }
}


// Ambil elemen volume
const volumeSlider = document.getElementById("volume-slider");
const volumeValue = document.getElementById("volume-value");

audio.volume = 0;

const volumeIcon = volumeSlider.previousElementSibling;
volumeIcon.innerText = "🔇";


volumeSlider.addEventListener("input", (e) => {
    let vol = e.target.value;
    audio.volume = vol / 100;
    volumeValue.innerText = vol;
    
    if (vol == 0) volumeIcon.innerText = "🔇";
    else if (vol < 50) volumeIcon.innerText = "🔉";
    else volumeIcon.innerText = "🔊";
});

// Inisialisasi lagu pertama (Dipindah ke bawah agar volumeSlider sudah terdefinisi)
loadSong(0, false);

// Fungsi Kontrol Volume
volumeSlider.addEventListener("input", (e) => {
    let vol = e.target.value;
    audio.volume = vol / 100; // Audio API menggunakan skala 0.0 sampai 1.0
    volumeValue.innerText = vol; // Update angka indikator
    
    // Opsional: Ganti ikon berdasarkan besar suara
    const volumeIcon = volumeSlider.previousElementSibling;
    if (vol == 0) volumeIcon.innerText = "🔇";
    else if (vol < 50) volumeIcon.innerText = "🔉";
    else volumeIcon.innerText = "🔊";
});