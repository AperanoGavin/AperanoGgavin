const sections = document.querySelectorAll('.layer');

for (const section of sections) {
    section.addEventListener('mouseenter', () => {
        const h3 = section.querySelector('h3');
        const musicFile = `./assets/music/${h3.textContent.substring(0, 3)}.mp3`;
        const audio = new Audio(musicFile);
        audio.autoplay = true;
        audio.muted = "muted";
        audio.play();
    });

    section.addEventListener('mouseleave', () => {
        const h3 = section.querySelector('h3');
        const musicFile = `./assets/music/${h3.textContent.substring(0, 3)}.mp3`;
        const audio = new Audio(musicFile);
        audio.muted = false;
    });
}