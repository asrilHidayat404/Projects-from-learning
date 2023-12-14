// {} []
const darkMode = {
	link : document.querySelectorAll('nav ul li a'),
	button : document.querySelector('.button'),
	menu : document.querySelectorAll('.hamburger span')
}
darkMode.button.addEventListener("click", () => {
	document.body.children[0].classList.toggle('darkMode');
	darkMode.link.forEach((l) => {
		l.classList.toggle('darkModeLink')
	})
	darkMode.button.parentElement.parentElement.classList.toggle('darkModeNav')
	darkMode.button.classList.toggle('darkModeButton')
	darkMode.menu.forEach((m)=>{m.classList.toggle('darkMode')})
})

const menu = document.querySelector('.container nav .hamburger')
menu.addEventListener("click", () => {
	menu.previousElementSibling.classList.toggle('on')
})