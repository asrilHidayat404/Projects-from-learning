const button = document.getElementById('button')

button.addEventListener('click', () => {
	let red = Math.floor(Math.random()*255+1)
	let green = Math.floor(Math.random()*255+1)
	let blue = Math.floor(Math.random()*255+1)
	document.body.style.backgroundColor = 'rgb('+ red +', '+ green +', '+ blue +')'
})

let Sred = document.getElementById('red')
let Sgreen = document.getElementById('green')
let Sblue = document.getElementById('blue')

Sred.addEventListener('input', () => {
	document.body.style.backgroundColor = 'rgb('+ Sred.value +', '+ Sgreen.value +', '+ Sblue.value +')'
	console.log(Sred.value)
})


Sgreen.addEventListener('input', () => {
	let Sgreen = document.getElementById('green')
	document.body.style.backgroundColor = 'rgb('+ Sred.value +', '+ Sgreen.value +', '+ Sblue.value +')'
	console.log(Sgreen.value)
})


Sblue.addEventListener('input', () => {
	let Sgreen = document.getElementById('green')
	document.body.style.backgroundColor = 'rgb('+ Sred.value +', '+ Sgreen.value +', '+ Sblue.value +')'
	console.log(Sblue.value)
})
