document.body.addEventListener('mousemove',()=> {
	let r = Math.floor(Math.random()*255+1)
	let g = Math.floor(Math.random()*255+1)
	let b = Math.floor(Math.random()*255+1)
	console.log(r,g,b)
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})