const hamburger = document.querySelector('.container nav .hamburger');
const menu = document.querySelector('.container nav ul')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('on')
	menu.classList.toggle('on')
})

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener('click', ()=>{
	hamburger.classList.remove('on')
	menu.classList.remove('on')
}))

window.addEventListener('scroll', () => {
	hamburger.classList.remove('on')
	menu.classList.remove('on')
})