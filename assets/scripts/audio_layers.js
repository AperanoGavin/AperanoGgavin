const h3s = document.querySelectorAll('h3');
let currentAudio;

for (const h3 of h3s) {
    //let playing = false;
    h3.addEventListener('click', () => {
        const musicFile = `./assets/music/${h3.textContent.substring(0, 3)}.mp3`;
        const audio = new Audio(musicFile);
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

        currentAudio = audio;
    });
}