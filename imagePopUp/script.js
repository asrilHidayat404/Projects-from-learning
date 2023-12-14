const images = document.querySelectorAll('img')
let popup = document.querySelector('.popup')
const close = document.querySelector('span')
const div = document.querySelector('.div')

images.forEach(function (img) {
	img.addEventListener('click', ()=>{
	console.log(img.src)
	popUp(img.src)
	div.style.display = 'flex'
	close.style.display = 'flex'
	close.addEventListener('click',()=>{
		div.style.display = 'none'
	})
	// 	const div = document.createElement('div')
	// div.classList.add('div')

	// const close = document.createElement('span')
	// close.textContent = 'X'
	// close.classList.add('span')
	// div.append(close)

	// const image = document.createElement('img')
	// image.setAttribute('src', img.src)

	// div.append(image)

	// document.body.append(div)
	})
})

function popUp(img){
	// const div = document.createElement('div')
	// div.classList.add('div')

	// const close = document.createElement('span')
	// close.textContent = 'X'

	// close.classList.add('span')
	// div.append(close)

	// const image = document.createElement('img')
	popup.setAttribute('src', img)
	popup.classList.add('img')

	// div.append(image)

	// document.body.append(div)


}