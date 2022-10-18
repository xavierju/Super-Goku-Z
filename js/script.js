const goku = document.querySelector('.goku');
const pipe = document.querySelector('.pipe');

const jump = () => {
    goku.classList.add('jump');

    setTimeout( ()=>{
        goku.classList.remove('jump');

    }, 500);
}

const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const gokuPosition = +window.getComputedStyle(goku).bottom.replace('px', ''); 

    
    if (pipePosition <=	 100 && pipePosition > 0 && gokuPosition <80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        goku.style.animation = 'none';
        goku.style.bottom = `${gokuPosition}px`;

        goku.src = './images/goku-dead.png';
        goku.style.width = '160px';
        
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown',jump);