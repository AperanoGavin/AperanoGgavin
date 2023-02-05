const cube = document.querySelector('.cube');
let x = 0;
let y = 0;

document.addEventListener('mousemove', e => {
    x = -(window.innerWidth / 2 - e.pageX) / 20;
    y = (window.innerHeight / 2 - e.pageY) / 20;
    cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});