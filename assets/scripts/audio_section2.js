/* let playing = false;
let audio = new Audio();

const slider = document.querySelector('.layer');

slider.addEventListener('click', () => {
    const h3 = slider.querySelector('h3');
    const musicFile = `./assets/music/${h3.textContent.substring(0, 3)}.mp3`;
    audio.src = musicFile;
    if (!playing) {
        audio.play();
        playing = true;
    } else {
        audio.pause();
        playing = false;
    }
});
 */

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


/* let currentAudio;
const slider = document.querySelector('.layer');
slider.addEventListener('click', () => {
    const h3 = slider.querySelector('h3');
    const musicFile = `./assets/music/${h3.textContent.substring(0, 3)}.mp3`;
    const audio = new Audio(musicFile);
    if (currentAudio) {
        currentAudio.pause();
    }
    audio.play();
    currentAudio = audio;
}); */