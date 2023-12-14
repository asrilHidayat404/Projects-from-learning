let jam = document.getElementById('jam')
let menit = document.getElementById('menit')
let detik = document.getElementById('detik')
let miliDetik = document.getElementById('miliDetik')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const clear = document.getElementById('clear')

jam.textContent = 0
menit.textContent = 0
detik.textContent = 0
miliDetik.textContent = 0

let cDetik = 0
let cMenit = 0
let cJam = 0
let cmiliDetik = 0


start.addEventListener('click',()=>{
	let x = setInterval(()=>{
		cmiliDetik++
		miliDetik.textContent = cmiliDetik
		if(cmiliDetik == 100){
		   cmiliDetik = 0
		   miliDetik.textContent = cmiliDetik
		   cDetik++
			 detik.textContent = cDetik
			 if(cDetik == 60){
			 	cDetik = 0
			 	detik.textContent = cDetik
			 	cMenit++
			 	menit.textContent = cMenit
			 	if(cMenit == 60){
			 		cMenit = 0
			 		menit.textContent = cMenit
			 		cJam++
			 		jam.textContent = cJam
			 		if(cJam == 24){
			 			cJam = 0
			 			jam.textContent = cJam
			 		}
			 	}
			}		
		}
		stop.addEventListener('click', ()=>{
			clearInterval(x)
		})	 
		clear.addEventListener('click', ()=>{
			c(clearInterval(x))
		})
	},10)
	console.log(x)
})

function c() {
	cmiliDetik = 0
	cDetik = 0
	cMenit = 0
	cJam = 0
	miliDetik.textContent = cmiliDetik
	detik.textContent = cDetik
	menit.textContent = cMenit
	jam.textContent = cJam
}