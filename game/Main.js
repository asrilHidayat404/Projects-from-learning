const button = document.getElementById('button')
button.addEventListener('click', () => {
	document.body.classList.toggle('mode-gelap')
	button.innerText == 'Mode Gelap'?
	button.innerText = 'Matikan Mode Gelap':
	button.innerText = 'Mode Gelap'
})

const btnRandom = document.createElement('button')
const texsBtn = document.createTextNode('Acak Warna')
btnRandom.appendChild(texsBtn)
btnRandom.setAttribute('type', 'button')
button.after(btnRandom)

btnRandom.addEventListener('click', () => {
	const red = Math.round(Math.random()*255 +1)
	const green = Math.round(Math.random()*255 +1)
	const blue = Math.round(Math.random()*255 +1)
	document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')'
	console.log(red)
	console.log(green)
	console.log(blue)
})

const sMerah = document.querySelector('input[name=sMerah ]')
const sHijau = document.querySelector('input[name=sHijau ]')
const sBiru = document.querySelector('input[name=sBiru ]')

sMerah.addEventListener('input', () =>{
	const red = sMerah.value
	const green = sHijau.value
	const blue = sBiru.value
	document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')'
})
sHijau.addEventListener('input', () =>{
	const red = sMerah.value
	const green = sHijau.value
	const blue = sBiru.value
	document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')'
})
sBiru.addEventListener('input', () =>{
	const red = sMerah.value
	const green = sHijau.value
	const blue = sBiru.value
	document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')'
})


document.body.addEventListener('mousemove', (event) =>{
	// console.log(event.clientX)
	// console.log(window.innerWidth)
	const xPos = Math.round((event.clientX / window.innerWidth) * 255)
	const yPos = Math.round((event.clientY / window.innerHeight) * 255)
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100 )'
})