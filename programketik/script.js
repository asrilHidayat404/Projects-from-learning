const board = document.querySelector('.board');
const jBenar = document.querySelector('.benar');
const jSalah = document.querySelector('.salah');
const start = document.querySelector('.start');
const getDuration = document.querySelector('.getDuration');

start.addEventListener("click", ()=> {
	getDuration.value == '' ? alert("masukkan durasi untuk setiap huruf baru yang akan keluar, contoh '1000' untuk 1 detik")
	: startNow();
});

function startNow () {
	const game = new Main(getDuration.value);
	game.alphabet();
	game.setTime();
	game.mainFunction();
	game.colorPretty();
	start.parentElement.style.display = 'none';
	jBenar.parentElement.parentElement.style.display = 'flex';
	const bs = new Audio('audio/backsound.wav');
	bs.classList.add('bs');
	bs.loop = true;
	bs.play();
	document.body.appendChild(bs);
};

class Main {
	constructor(getDuration){
		this.getDuration = getDuration;
		this.skorBenar = 1;
		this.skorSalah = 1;
	};
	alphabet(index){
		const huruf = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		return huruf[index];
	};
	setTime(){
		setInterval(()=>{
			let setRandomHuruf = Math.floor(Math.random()*25+0);
			board.textContent = this.alphabet(setRandomHuruf);
		},this.getDuration);
	};
	mainFunction(){
		document.addEventListener("keydown", e => {
			let huruf2 = String.fromCharCode(e.keyCode).toLowerCase();
			if (huruf2 == board.textContent) {
				jBenar.textContent = this.skorBenar++;
				const audio = new Audio('audio/click.mp3');
				audio.play();
			} else {
				jSalah.textContent = this.skorSalah++;
				const audio2 = new Audio('audio/fart1.mp3');
				audio2.play();
				if (this.skorSalah == 12) {
					this.gameOver();
				}
			}
		});
	};
	colorPretty(){
		setInterval(()=>{
			let r = Math.floor(Math.random()*255+0);
			let g = Math.floor(Math.random()*255+0);
			let b = Math.floor(Math.random()*255+0);

			board.style.color = `rgb(${r}, ${g}, ${b})`;
		},this.getDuration);
	};

	gameOver(){
		alert("game over");
		this.skorBenar = 0;
		this.skorSalah = 0;
		jBenar.textContent = this.skorBenar;
		jSalah.textContent = this.skorSalah;
		board.textContent = 'A-A';
		start.parentElement.style.display = 'block';
		jBenar.parentElement.parentElement.style.display = 'none';
		const b = document.querySelector('.bs');
		b.remove();
	};
};