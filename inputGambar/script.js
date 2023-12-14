const box = document.getElementById('box')
const userInput = document.getElementById('userInput')
const img = document.querySelector('img')

userInput.addEventListener('change', ()=>{
	img.src = userInput.src.value
})