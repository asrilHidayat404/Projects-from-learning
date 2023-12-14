const menu = document.querySelector('.container nav ul')
const hamburger = document.querySelector('.container nav .hamburger')

hamburger.addEventListener('click', () => {
	menu.classList.toggle('on')
})