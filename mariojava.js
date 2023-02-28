const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const fan = document.querySelector('.fan');
const score = document.querySelector('.score');
let count = 0;



const pula = () => {
	mario.classList.add('pula');

	setTimeout(() =>{
		mario.classList.remove('pula');
	}, 500);


}

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
const fanPosition = fan.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 || fanPosition <= 120 && fanPosition > 0 && marioPosition < 80) {

	pipe.style.animation = 'none';
	pipe.style.left =`${pipePosition}px`;
	fan.style.left =`${fanPosition}px`;
	fan.style.animation = 'none';
	

	mario.style.animation = 'none';
	mario.style.bottom = `${marioPosition}px`;
	window.location.replace("fimdejogo.html");





 
	clearInterval(loop);


}
count++;
score.innerHTML = `SCORE: ${count}`; 





}, 10);









document.addEventListener('keydown', pula);
 