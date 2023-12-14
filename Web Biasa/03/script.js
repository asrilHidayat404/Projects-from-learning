const menu = document.querySelector('.container nav ul')
const btnMenu = document.querySelector('.container nav .hamburger')
const container = document.querySelector('.container')
btnMenu.addEventListener('click', ()=>{
	menu.classList.toggle('active')
})

const h1 = document.querySelector('.container .hero .left .h1')

const myArr = ['S', 'Sm', 'Sma', 'Smar', 'Smart', 'Smart s', 'Smart sh', 'Smart shi', 'Smart ship', 'Smart shipp', 'Smart shippi', 'Smart shippin', 'Smart shipping ', 'Smart shipping so', 'Smart shipping so ', 'Smart shipping so t', 'Smart shipping so th', 'Smart shipping so tha', 'Smart shipping so that', 'Smart shipping so that', 'Smart shipping so that g', 'Smart shipping so that gr', 'Smart shipping so that grow', 'Smart shipping so that grows ', 'Smart shipping so that grows y', 'Smart shipping so that grows yo', 'Smart shipping so that grows you', 'Smart shipping so that grows your', 'Smart shipping so that grows your b', 'Smart shipping so that grows your bu', 'Smart shipping so that grows your bus', 'Smart shipping so that grows your busi', 'Smart shipping so that grows your busin', 'Smart shipping so that grows your busine', 'Smart shipping so that grows your busines', 'Smart shipping so that grows your business' ]
let i = 0
// let c = 0

// setInterval(()=>{
// 	c++
// 	if (c == 1){
// 		container.style.backgroundColor = 'black'
// 	} 
// 	if (c == 2){
// 		container.style.backgroundColor = 'white'
// 		c = 0
// 	}
// }, 2000)
setInterval(()=>{
	h1.textContent = myArr[i++]
	if (i == myArr.length) i=0
}, 200)