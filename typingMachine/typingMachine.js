const submit = document.querySelector('#submit')
const copy = document.getElementById('copy')

copy.addEventListener('click',()=>{
	navigator.clipboard.writeText(copy.previousElementSibling.textContent)
})

submit.addEventListener('click',()=>{
	createP('p')
	submit.previousElementSibling.value = ''
})

function createP(pTag){
	const pS = []
	for(let i = 0; i < 1; i++){
		const p = document.createElement(pTag)
		p.classList.add('p')
		p.textContent = submit.previousElementSibling.value+'\n'

		pS.push(p)

		submit.parentElement.previousElementSibling.previousElementSibling.append(p)
	}
}

