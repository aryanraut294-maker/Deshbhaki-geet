/* =========================================================
   🇮🇳 FAUJI DESHBHAKTI GEET
   COMPLETE MUSIC + WALLPAPER SYSTEM
   ========================================================= */


/* =========================================================
   1. SONG LIST
   =========================================================

   IMPORTANT:
   These filenames MUST be exactly the same as the files
   inside your:

   music/

   folder.

   If you add another song later, add another object here.
*/

const songs = [

    {
        title: "01 - Prassthanam Title Track",
        file: "01 - Prassthanam Title Track - Prassthanam (2019).mp3",
        quote: "हर कदम देश के नाम।"
    },

    {
        title: "Ab Tumhare Hawale Vatan Sathiyon",
        file: "Ab Tumhare Hawale Vatan Sathiyon.mp3",
        quote: "वतन के लिए समर्पण ही सच्ची देशभक्ति है।"
    },

    {
        title: "Ae Mere Watan Ke Logon",
        file: "Ae Mere Watan Ke Logon.mp3",
        quote: "शहीदों को याद करना ही सच्ची श्रद्धांजलि है।"
    },

    {
        title: "Ae Mere Watan Ke Logon - Sky Force",
        file: "Ae Mere Watan Ke Logon Sky Force 128 Kbps.mp3",
        quote: "भारत के वीर जवानों को शत्-शत् नमन।"
    },

    {
        title: "Ae Watan Ae Watan",
        file: "Ae Watan Ae Watan (From Shaheed).mp3",
        quote: "वतन से बढ़कर कुछ भी नहीं।"
    },

    {
        title: "Ae Watan Mere Watan",
        file: "Ae Watan Mere Watan - Title Track (PenduJatt.Com.Se).mp3",
        quote: "मेरा वतन, मेरी पहचान।"
    },

    {
        title: "Aisa Des Hai Mera",
        file: "Aisa Des Hai Mera.mp3",
        quote: "ऐसा देश है मेरा।"
    },

    {
        title: "Allah Tero Naam",
        file: "Allah Tero Naam Ishwar Tero Naam.mp3",
        quote: "भारत की मिट्टी में अनेकता में एकता बसती है।"
    },

    {
        title: "Ban Ke Dikha Ikkis",
        file: "Ban Ke Dikha Ikkis(KoshalWorld.Com).mp3",
        quote: "देश के लिए कुछ कर गुजरने का जज़्बा।"
    },

    {
        title: "Bharat Humko Jaan Se Pyara Hai",
        file: "Bharat Humko Jaan Se Pyara Hai.mp3",
        quote: "भारत हमें जान से भी प्यारा है।"
    },

    {
        title: "Bharat Maa Ki Jai Jaikar",
        file: "Bharat Maa Ki Jai Jaikar.mp3",
        quote: "भारत माता की जय!"
    },

    {
        title: "Brothers Anthem",
        file: "Brothers Anthem Vishal Dadlani 320 Kbps.mp3",
        quote: "हौसला रखो और आगे बढ़ते रहो।"
    },

    {
        title: "Des Rangila",
        file: "Des Rangila Fanaa 128 Kbps.mp3",
        quote: "रंग दे बसंती वतन की मिट्टी को।"
    },

    {
        title: "Desh Mere",
        file: "Desh Mere Bhuj - Arijit Singh.mp3",
        quote: "मेरा देश, मेरी शान।"
    },

    {
        title: "Ekla Cholo Re Kahaani",
        file: "Ekla Cholo Re Kahaani 128 Kbps.mp3",
        quote: "अकेले चलना पड़े तो भी देश के लिए चलते रहो।"
    },

    {
        title: "Ghar Kab Aaoge",
        file: "Ghar Kab Aaoge (From BORDER 2).mp3",
        quote: "हर सैनिक के पीछे एक परिवार इंतजार करता है।"
    },

    {
        title: "Hindustan Meri Jaan",
        file: "Hindustan Meri Jaan Border 2 128 Kbps.mp3",
        quote: "हिंदुस्तान मेरी जान।"
    },

    {
        title: "Hindustani",
        file: "Hindustani (Suno Gaur Se Duniya Walo).mp3",
        quote: "सुनो गौर से दुनिया वालों।"
    },

    {
        title: "Hum Honge Kamyaab",
        file: "Hum Honge Kamyaab.mp3",
        quote: "हम होंगे कामयाब।"
    },

    {
        title: "I Love My India",
        file: "I Love My India Male Pardes 128 Kbps.mp3",
        quote: "I Love My India 🇮🇳"
    },

    {
        title: "Itni Shakti Hamein Dena Data",
        file: "Itni Shakti Hamein Dena Data.mp3",
        quote: "हे प्रभु, हमें देश के लिए सही मार्ग दिखाना।"
    },

    {
        title: "Jagga Jiteya",
        file: "Jagga Jiteya (Uri - The Surgical Strike) 128 Kbps.mp3",
        quote: "देश के लिए जीतने का जज़्बा।"
    },

    {
        title: "Jahan Daal Daal Par Sone Ki Chidiya",
        file: "Jahan Daal Daal Par Sone Ki Chidiya (PenduJatt.Com.Se).mp3",
        quote: "सोने की चिड़िया हमारा हिंदुस्तान।"
    },

    {
        title: "Jahan Daal Daal Pe Sone Ki Chidiya",
        file: "Jahan-Dal-Dal-Pe-Sone-Ki-Chidiya.mp3",
        quote: "भारत की समृद्ध विरासत को सलाम।"
    },

    {
        title: "Jai Hindi Ki Senaa",
        file: "Jai Hindi Ki Senaa(PagalWorld.com.pe).mp3",
        quote: "जय हिंद की सेना!"
    },

    {
        title: "Jana Gana Mana",
        file: "Jana Gana Mana - Major- [PagalWorld.NL].mp3",
        quote: "जन गण मन अधिनायक जय हे।"
    },

    {
        title: "Jeete Hain Chal",
        file: "Jeete Hain Chal Neerja 128 Kbps.mp3",
        quote: "हौसले के साथ आगे बढ़ते रहो।"
    },

    {
        title: "Jhuk Na Paunga",
        file: "Jhuk Na Paunga Raid 320 Kbps.mp3",
        quote: "देश के सामने कभी झुकना नहीं।"
    },

    {
        title: "Kandhon Se Milte Hain Kandhe",
        file: "Kandhon-Se-Milte-Hain-Kandhe-4K-Music-Video-Lakshya-Hrithik-Sonu-Nigam-Hariharan.mp3",
        quote: "कंधे से कंधा मिलाकर देश की रक्षा।"
    },

    {
        title: "Kar Har Maidaan Fateh",
        file: "Kar Har Maidaan Fateh Sanju 128 Kbps.mp3",
        quote: "हर मैदान फतह करना है।"
    },

    {
        title: "Kasumbi",
        file: "Kasumbi Parmanu 128 Kbps.mp3",
        quote: "देश के वीरों के नाम।"
    },

    {
        title: "Lakshya",
        file: "Lakshya Shankar Mahadevan 128 Kbps.mp3",
        quote: "लक्ष्य हमेशा ऊँचा रखो।"
    },

    {
        title: "Lehra Do",
        file: "Lehra Do (PenduJatt.Com.Se).mp3",
        quote: "तिरंगा हमेशा ऊँचा लहराए।"
    },

    {
        title: "Maa Tujhe Salaam",
        file: "Maa Tujhe Salaam Vande Mataram 128 Kbps.mp3",
        quote: "माँ तुझे सलाम।"
    },

    {
        title: "Mera Karma Tu",
        file: "Mera Karma Tu (From Karma).mp3",
        quote: "भारत माता को नमन।"
    },

    {
        title: "Mere Desh Ki Dharti",
        file: "Mere Desh Ki Dharti Sona Ugle (From Upkar).mp3",
        quote: "मेरे देश की धरती सोना उगले।"
    },

    {
        title: "Sainika",
        file: "Sainika - SenSongsMp3.Co.mp3",
        quote: "हर सैनिक को सलाम।"
    },

    {
        title: "Sandese Aate Hain",
        file: "Sandese Aate Hain Border 320 Kbps.mp3",
        quote: "सीमा पर खड़ा हर जवान किसी माँ का बेटा है।"
    },

    {
        title: "Sare Jahan Se Achha",
        file: "Sare Jahan Se Achha Hindustan Hamara.mp3",
        quote: "सारे जहाँ से अच्छा हिंदुस्तान हमारा।"
    },

    {
        title: "Sarfaroshi Ki Tamanna",
        file: "Sarfaroshi Ki Tamanna Shaheed 128 Kbps.mp3",
        quote: "सरफरोशी की तमन्ना अब हमारे दिल में है।"
    },

    {
        title: "Tu Hindu Banega Na Musalman",
        file: "Tu Hindu Banega Na Musalman.mp3",
        quote: "भारत की पहचान एकता और भाईचारा है।"
    },

    {
        title: "Vande Mataram",
        file: "Vande Mataram (The Fighter Anthem) From Fighter.mp3",
        quote: "वन्दे मातरम्।"
    }

];


/* =========================================================
   2. WALLPAPERS
   =========================================================

   You said you have 11 wallpapers.

   Rename them like this:

   images/
       fauji-wallpaper-1.jpg
       fauji-wallpaper-2.jpg
       fauji-wallpaper-3.jpg
       ...
       fauji-wallpaper-11.jpg

   IMPORTANT:
   File extension must be correct.
   If your files are .png, change .jpg to .png.
*/

const wallpapers = [

    "images/fauji-wallpaper-1.jpg",
    "images/fauji-wallpaper-2.jpg",
    "images/fauji-wallpaper-3.jpg",
    "images/fauji-wallpaper-4.jpg",
    "images/fauji-wallpaper-5.jpg",
    "images/fauji-wallpaper-6.jpg",
    "images/fauji-wallpaper-7.jpg",
    "images/fauji-wallpaper-8.jpg",
    "images/fauji-wallpaper-9.jpg",
    "images/fauji-wallpaper-10.jpg",
    "images/fauji-wallpaper-11.jpg"

];


/* =========================================================
   3. GET HTML ELEMENTS
   ========================================================= */

const audio = document.getElementById("audioPlayer");

const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const progressBar =
    document.getElementById("progressBar");

const currentTimeElement =
    document.getElementById("currentTime");

const totalTimeElement =
    document.getElementById("totalTime");

const songTitle =
    document.getElementById("songTitle");

const songQuote =
    document.getElementById("songQuote");

const statusText =
    document.getElementById("statusText");

const visualizer =
    document.getElementById("visualizer");

const backgroundLayer1 =
    document.getElementById("backgroundLayer1");

const backgroundLayer2 =
    document.getElementById("backgroundLayer2");


/* =========================================================
   4. VARIABLES
   ========================================================= */

let currentSongIndex = 0;

let currentWallpaperIndex = 0;

let activeBackground = 1;

/*
   Wallpaper changes every 120 seconds.
*/
const WALLPAPER_INTERVAL = 120000;

let wallpaperTimer;


/* =========================================================
   5. FORMAT TIME
   ========================================================= */

function formatTime(seconds) {

    if (!isFinite(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60);

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}


/* =========================================================
   6. SAFE FILE PATH
   =========================================================

   This helps with spaces and special characters
   in your MP3 filenames.
*/

function getMusicPath(filename) {

    return "music/" + encodeURIComponent(filename)
        .replace(/%2F/g, "/");

}


/* =========================================================
   7. LOAD SONG
   ========================================================= */

function loadSong(index, autoplay = false) {

    if (!songs.length) {

        console.error("No songs found in songs array.");

        return;

    }

    currentSongIndex = index;

    const song = songs[currentSongIndex];

    console.log("Loading song:");
    console.log(song.file);

    /*
       Stop current audio
    */

    audio.pause();

    /*
       Change audio source
    */

    audio.src = getMusicPath(song.file);

    audio.load();

    /*
       Update text
    */

    if (songTitle) {

        songTitle.textContent =
            song.title;

    }

    if (songQuote) {

        songQuote.textContent =
            `"${song.quote}"`;

    }

    /*
       Reset progress
    */

    if (progressBar) {

        progressBar.value = 0;

    }

    if (currentTimeElement) {

        currentTimeElement.textContent =
            "00:00";

    }

    if (totalTimeElement) {

        totalTimeElement.textContent =
            "00:00";

    }

    /*
       Change wallpaper immediately
       whenever song changes.
    */

    changeWallpaper();

    /*
       Restart 120 second timer.
    */

    restartWallpaperTimer();

    /*
       Reset UI
    */

    setPlayingUI(false);

    /*
       Play automatically only when requested.
    */

    if (autoplay) {

        playCurrentSong();

    }

}


/* =========================================================
   8. PLAY CURRENT SONG
   ========================================================= */

function playCurrentSong() {

    if (!audio.src) {

        loadSong(currentSongIndex, false);

    }

    const playPromise =
        audio.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                setPlayingUI(true);

            })
            .catch(error => {

                console.error(
                    "Audio playback error:",
                    error
                );

                setPlayingUI(false);

                if (statusText) {

                    statusText.textContent =
                        "गीत चल नहीं पाया";

                }

                /*
                   Check browser console if this happens.
                */

            });

    }

}


/* =========================================================
   9. PAUSE SONG
   ========================================================= */

function pauseCurrentSong() {

    audio.pause();

    setPlayingUI(false);

}


/* =========================================================
   10. PLAY / PAUSE BUTTON
   ========================================================= */

if (playButton) {

    playButton.addEventListener(
        "click",
        function () {

            if (audio.paused) {

                playCurrentSong();

            } else {

                pauseCurrentSong();

            }

        }
    );

}


/* =========================================================
   11. PLAYING UI
   ========================================================= */

function setPlayingUI(isPlaying) {

    if (isPlaying) {

        if (playIcon) {

            playIcon.textContent = "⏸";

        }

        if (statusText) {

            statusText.textContent =
                "चल रहा है";

        }

        if (visualizer) {

            visualizer.classList.add("active");

        }

    } else {

        if (playIcon) {

            playIcon.textContent = "▶";

        }

        if (statusText) {

            statusText.textContent =
                "रुका हुआ है";

        }

        if (visualizer) {

            visualizer.classList.remove("active");

        }

    }

}


/* =========================================================
   12. NEXT SONG
   ========================================================= */

function nextSong() {

    currentSongIndex++;

    if (
        currentSongIndex >=
        songs.length
    ) {

        currentSongIndex = 0;

    }

    loadSong(
        currentSongIndex,
        true
    );

}


/* =========================================================
   13. PREVIOUS SONG
   ========================================================= */

function previousSong() {

    currentSongIndex--;

    if (
        currentSongIndex < 0
    ) {

        currentSongIndex =
            songs.length - 1;

    }

    loadSong(
        currentSongIndex,
        true
    );

}


/* =========================================================
   14. NEXT BUTTON
   ========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextSong
    );

}


/* =========================================================
   15. PREVIOUS BUTTON
   ========================================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        previousSong
    );

}


/* =========================================================
   16. SONG ENDED
   =========================================================

   When one song finishes,
   automatically play the next song.
*/

audio.addEventListener(
    "ended",
    function () {

        nextSong();

    }
);


/* =========================================================
   17. AUDIO LOADED
   ========================================================= */

audio.addEventListener(
    "loadedmetadata",
    function () {

        if (totalTimeElement) {

            totalTimeElement.textContent =
                formatTime(audio.duration);

        }

    }
);


/* =========================================================
   18. AUDIO TIME UPDATE
   ========================================================= */

audio.addEventListener(
    "timeupdate",
    function () {

        if (!audio.duration) {
            return;
        }

        const percentage =
            (
                audio.currentTime /
                audio.duration
            ) * 100;

        if (progressBar) {

            progressBar.value =
                percentage;

        }

        if (currentTimeElement) {

            currentTimeElement.textContent =
                formatTime(audio.currentTime);

        }

        if (totalTimeElement) {

            totalTimeElement.textContent =
                formatTime(audio.duration);

        }

    }
);


/* =========================================================
   19. PROGRESS BAR
   ========================================================= */

if (progressBar) {

    progressBar.addEventListener(
        "input",
        function () {

            if (!audio.duration) {
                return;
            }

            const time =
                (
                    progressBar.value /
                    100
                ) * audio.duration;

            audio.currentTime = time;

        }
    );

}


/* =========================================================
   20. AUDIO PLAY EVENT
   ========================================================= */

audio.addEventListener(
    "play",
    function () {

        setPlayingUI(true);

    }
);


/* =========================================================
   21. AUDIO PAUSE EVENT
   ========================================================= */

audio.addEventListener(
    "pause",
    function () {

        setPlayingUI(false);

    }
);


/* =========================================================
   22. AUDIO ERROR
   =========================================================

   This is VERY useful if filename is wrong.
*/

audio.addEventListener(
    "error",
    function () {

        console.error(
            "❌ SONG FILE ERROR"
        );

        console.error(
            "Current song:",
            songs[currentSongIndex]
        );

        if (statusText) {

            statusText.textContent =
                "Song file नहीं मिला";

        }

    }
);


/* =========================================================
   23. CHANGE WALLPAPER
   ========================================================= */

function changeWallpaper() {

    if (!wallpapers.length) {

        console.error(
            "No wallpapers found."
        );

        return;

    }

    const wallpaper =
        wallpapers[currentWallpaperIndex];

    console.log(
        "Wallpaper:",
        wallpaper
    );

    /*
       Alternate between the two background layers.
       This creates a crossfade.
    */

    if (activeBackground === 1) {

        if (backgroundLayer2) {

            backgroundLayer2.style.backgroundImage =
                `url("${wallpaper}")`;

            backgroundLayer2.classList.add(
                "visible"
            );

        }

        if (backgroundLayer1) {

            backgroundLayer1.classList.remove(
                "visible"
            );

        }

        activeBackground = 2;

    } else {

        if (backgroundLayer1) {

            backgroundLayer1.style.backgroundImage =
                `url("${wallpaper}")`;

            backgroundLayer1.classList.add(
                "visible"
            );

        }

        if (backgroundLayer2) {

            backgroundLayer2.classList.remove(
                "visible"
            );

        }

        activeBackground = 1;

    }

    /*
       Move to next wallpaper.
    */

    currentWallpaperIndex++;

    if (
        currentWallpaperIndex >=
        wallpapers.length
    ) {

        currentWallpaperIndex = 0;

    }

}


/* =========================================================
   24. START / RESTART 120 SECOND TIMER
   ========================================================= */

function restartWallpaperTimer() {

    /*
       Clear previous timer first.
       This is important.

       Otherwise multiple timers could run together.
    */

    clearInterval(
        wallpaperTimer
    );

    /*
       Change wallpaper every 120 seconds.
    */

    wallpaperTimer =
        setInterval(
            function () {

                changeWallpaper();

            },
            WALLPAPER_INTERVAL
        );

}


/* =========================================================
   25. INITIAL WALLPAPER
   ========================================================= */

function initializeWallpaper() {

    /*
       Start with first wallpaper.
    */

    currentWallpaperIndex = 0;

    activeBackground = 1;

    if (backgroundLayer1) {

        backgroundLayer1.style.backgroundImage =
            `url("${wallpapers[0]}")`;

        backgroundLayer1.classList.add(
            "visible"
        );

    }

    /*
       Next wallpaper should be number 2.
    */

    currentWallpaperIndex = 1;

    /*
       Start 120 second timer.
    */

    restartWallpaperTimer();

}


/* =========================================================
   26. INITIAL SONG
   ========================================================= */

function initializeSong() {

    /*
       Load first song but DON'T autoplay.

       Browser normally blocks autoplay.
       User must click Play.
    */

    loadSong(
        0,
        false
    );

}


/* =========================================================
   27. INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🇮🇳 Fauji Deshbhakti Geet started."
        );

        console.log(
            "Total songs:",
            songs.length
        );

        console.log(
            "Total wallpapers:",
            wallpapers.length
        );

        initializeWallpaper();

        initializeSong();

    }
);
