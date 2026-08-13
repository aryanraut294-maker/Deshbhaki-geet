/* =========================================================
   MERE FAUJI MAHAN 🇮🇳
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   1. WALLPAPERS
   ========================================================= */

const wallpapers = [
    "images/fauji-wallpaper-1.jpg",
    "images/fauji-wallpaper-2.jpg",
    "images/fauji-wallpaper-3.jpg",
    "images/fauji-wallpaper-4.jpg",
    "images/fauji-wallpaper-5.jpg",
    "images/fauji-wallpaper-6.jpg"
];

let currentWallpaper = 0;


/* =========================================================
   2. SONGS
   ========================================================= */

const songs = [

    {
        title: "ऐ मेरे वतन के लोगों",
        quote: "देश के वीर जवानों को शत-शत नमन।",
        audio: "music/Ae Mere Watan Ke Logon.mp3"
    },

    {
        title: "ऐ वतन ऐ वतन",
        quote: "वतन से बढ़कर कुछ भी नहीं।",
        audio: "music/Ae Watan Ae Watan (From Shaheed).mp3"
    },

    {
        title: "ऐ वतन मेरे वतन",
        quote: "भारत माता के चरणों में नमन।",
        audio: "music/Ae Watan Mere Watan - Title Track (PenduJatt.Com.Se).mp3"
    },

    {
        title: "भारत माँ की जय जयकार",
        quote: "भारत माता की जय।",
        audio: "music/Bharat Maa Ki Jai Jaikar.mp3"
    },

    {
        title: "देश रंगीला",
        quote: "मेरा भारत सबसे प्यारा।",
        audio: "music/Des Rangila Fanaa 128 Kbps.mp3"
    },

    {
        title: "देश मेरे",
        quote: "इस मिट्टी से हमें पहचान मिली है।",
        audio: "music/Desh Mere Bhuj - Arijit Singh.mp3"
    },

    {
        title: "I Love My India",
        quote: "दिल से हिंदुस्तानी।",
        audio: "music/I Love My India Male Pardes 128 Kbps.mp3"
    },

    {
        title: "कंधों से मिलते हैं कंधे",
        quote: "एक साथ खड़े हैं भारत के वीर जवान।",
        audio: "music/Kandhon-Se-Milte-Hain-Kandhe-4K-Music-Video-Lakshya-Hrithik-Sonu Nigam-Hariharan.mp3"
    },

    {
        title: "कर हर मैदान फतेह",
        quote: "हर मुश्किल के सामने जीत हमारी होगी।",
        audio: "music/Kar Har Maidaan Fateh Sanju 128 Kbps.mp3"
    },

    {
        title: "माँ तुझे सलाम",
        quote: "माँ तुझे सलाम।",
        audio: "music/Maa Tujhe Salaam Vande Mataram 128 Kbps.mp3"
    },

    {
        title: "मेरे देश की धरती",
        quote: "मेरे देश की मिट्टी को प्रणाम।",
        audio: "music/Mere Desh Ki Dharti Sona Ugle (From Upkar).mp3"
    },

    {
        title: "Sainika",
        quote: "भारत के सैनिकों को सलाम।",
        audio: "music/Sainika - SenSongsMp3.Co.mp3"
    },

    {
        title: "संदेसे आते हैं",
        quote: "सीमा पर खड़ा हर जवान किसी माँ का लाल है।",
        audio: "music/Sandese Aate Hain Border 320 Kbps.mp3"
    },

    {
        title: "सारे जहाँ से अच्छा",
        quote: "हिंदुस्तान हमारा।",
        audio: "music/Sare Jahan Se Achha Hindustan Hamara.mp3"
    },

    {
        title: "सरफरोशी की तमन्ना",
        quote: "वतन के लिए बलिदान से बड़ा कोई सम्मान नहीं।",
        audio: "music/Sarfaroshi Ki Tamanna Shaheed 128 Kbps.mp3"
    },

    {
        title: "वंदे मातरम्",
        quote: "वंदे मातरम्।",
        audio: "music/Vande Mataram (The Fighter Anthem) From Fighter.mp3"
    }

];


/* =========================================================
   3. HTML ELEMENTS
   ========================================================= */

const backgroundLayer1 =
    document.getElementById("backgroundLayer1");

const backgroundLayer2 =
    document.getElementById("backgroundLayer2");

const audioPlayer =
    document.getElementById("audioPlayer");

const songTitle =
    document.getElementById("songTitle");

const songQuote =
    document.getElementById("songQuote");

const playButton =
    document.getElementById("playButton");

const playIcon =
    document.getElementById("playIcon");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const progressBar =
    document.getElementById("progressBar");

const currentTime =
    document.getElementById("currentTime");

const totalTime =
    document.getElementById("totalTime");

const statusText =
    document.getElementById("statusText");

const visualizer =
    document.getElementById("visualizer");


/* =========================================================
   4. VARIABLES
   ========================================================= */

let currentSong = 0;

let isPlaying = false;

let activeBackground = 1;


/* =========================================================
   5. WALLPAPER FUNCTION
   ========================================================= */

function changeWallpaper(index) {

    if (!backgroundLayer1 || !backgroundLayer2) {
        console.error("Wallpaper layers not found!");
        return;
    }

    const image =
        wallpapers[index];

    /*
       We use two layers.

       One layer is visible.
       The other layer receives the next image.

       Then we crossfade them.
    */

    if (activeBackground === 1) {

        backgroundLayer2.style.backgroundImage =
            `url("${image}")`;

        backgroundLayer2.classList.add("visible");

        backgroundLayer1.classList.remove("visible");

        activeBackground = 2;

    } else {

        backgroundLayer1.style.backgroundImage =
            `url("${image}")`;

        backgroundLayer1.classList.add("visible");

        backgroundLayer2.classList.remove("visible");

        activeBackground = 1;

    }

    currentWallpaper = index;

}


/* =========================================================
   6. NEXT WALLPAPER
   ========================================================= */

function nextWallpaper() {

    currentWallpaper++;

    if (currentWallpaper >= wallpapers.length) {
        currentWallpaper = 0;
    }

    changeWallpaper(currentWallpaper);

}


/* =========================================================
   7. LOAD SONG
   ========================================================= */

function loadSong(index, autoplay = false) {

    if (index < 0) {
        index = songs.length - 1;
    }

    if (index >= songs.length) {
        index = 0;
    }

    currentSong = index;

    const song =
        songs[currentSong];

    /* Change title */

    songTitle.textContent =
        song.title;

    /* Change quote */

    songQuote.textContent =
        `"${song.quote}"`;

    /* Change audio */

    audioPlayer.src =
        song.audio;

    audioPlayer.load();

    /* Change wallpaper */

    changeWallpaper(
        currentSong % wallpapers.length
    );

    /* Reset progress */

    progressBar.value = 0;

    currentTime.textContent =
        "00:00";

    totalTime.textContent =
        "00:00";

    /* Status */

    statusText.textContent =
        "तैयार है";

    playIcon.textContent =
        "▶";

    isPlaying = false;

    stopVisualizer();


    /* Play automatically if requested */

    if (autoplay) {

        playSong();

    }

}


/* =========================================================
   8. PLAY
   ========================================================= */

function playSong() {

    audioPlayer.play()
        .then(() => {

            isPlaying = true;

            playIcon.textContent =
                "⏸";

            playButton.setAttribute(
                "aria-label",
                "Pause Song"
            );

            statusText.textContent =
                "अब बज रहा है";

            startVisualizer();

        })
        .catch(error => {

            console.error(
                "Audio playback error:",
                error
            );

            statusText.textContent =
                "गीत चल नहीं पाया";

        });

}


/* =========================================================
   9. PAUSE
   ========================================================= */

function pauseSong() {

    audioPlayer.pause();

    isPlaying = false;

    playIcon.textContent =
        "▶";

    playButton.setAttribute(
        "aria-label",
        "Play Song"
    );

    statusText.textContent =
        "रुका हुआ है";

    stopVisualizer();

}


/* =========================================================
   10. PLAY / PAUSE BUTTON
   ========================================================= */

playButton.addEventListener(
    "click",
    () => {

        if (isPlaying) {

            pauseSong();

        } else {

            playSong();

        }

    }
);


/* =========================================================
   11. NEXT SONG
   ========================================================= */

nextButton.addEventListener(
    "click",
    () => {

        currentSong++;

        if (currentSong >= songs.length) {
            currentSong = 0;
        }

        loadSong(
            currentSong,
            true
        );

    }
);


/* =========================================================
   12. PREVIOUS SONG
   ========================================================= */

previousButton.addEventListener(
    "click",
    () => {

        currentSong--;

        if (currentSong < 0) {
            currentSong = songs.length - 1;
        }

        loadSong(
            currentSong,
            true
        );

    }
);


/* =========================================================
   13. SONG ENDS
   ========================================================= */

audioPlayer.addEventListener(
    "ended",
    () => {

        currentSong++;

        if (currentSong >= songs.length) {
            currentSong = 0;
        }

        loadSong(
            currentSong,
            true
        );

    }
);


/* =========================================================
   14. AUDIO TIME UPDATE
   ========================================================= */

audioPlayer.addEventListener(
    "timeupdate",
    () => {

        if (!audioPlayer.duration) {
            return;
        }

        const percentage =
            (audioPlayer.currentTime /
                audioPlayer.duration) *
            100;

        progressBar.value =
            percentage;

        currentTime.textContent =
            formatTime(
                audioPlayer.currentTime
            );

    }
);


/* =========================================================
   15. AUDIO LOADED
   ========================================================= */

audioPlayer.addEventListener(
    "loadedmetadata",
    () => {

        if (audioPlayer.duration) {

            totalTime.textContent =
                formatTime(
                    audioPlayer.duration
                );

        }

    }
);


/* =========================================================
   16. PROGRESS BAR
   ========================================================= */

progressBar.addEventListener(
    "input",
    () => {

        if (!audioPlayer.duration) {
            return;
        }

        const newTime =
            (progressBar.value / 100) *
            audioPlayer.duration;

        audioPlayer.currentTime =
            newTime;

    }
);


/* =========================================================
   17. FORMAT TIME
   ========================================================= */

function formatTime(seconds) {

    if (
        !seconds ||
        isNaN(seconds)
    ) {

        return "00:00";

    }

    const minutes =
        Math.floor(
            seconds / 60
        );

    const secondsRemaining =
        Math.floor(
            seconds % 60
        );

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secondsRemaining)
            .padStart(2, "0")
    );

}


/* =========================================================
   18. VISUALIZER
   ========================================================= */

function startVisualizer() {

    if (visualizer) {

        visualizer.classList.add(
            "playing"
        );

    }

}


function stopVisualizer() {

    if (visualizer) {

        visualizer.classList.remove(
            "playing"
        );

    }

}


/* =========================================================
   19. AUTOMATIC WALLPAPER
       EVERY 120 SECONDS
   ========================================================= */

setInterval(
    () => {

        nextWallpaper();

    },
    120000
);


/* =========================================================
   20. INITIALIZE
   ========================================================= */

function initializeWebsite() {

    /*
       IMPORTANT:

       First wallpaper is loaded immediately.
    */

    changeWallpaper(0);

    /*
       First song.
    */

    loadSong(0);

    console.log(
        "🇮🇳 Fauji Deshbhakti Geet loaded successfully!"
    );

}


initializeWebsite();