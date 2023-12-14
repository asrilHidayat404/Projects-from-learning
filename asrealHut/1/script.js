const navLink = document.querySelectorAll(".nav-item");
const navUl = document.querySelector(".nav-ul");
const header = document.querySelector(".header");
const listMenu = document.querySelector(".listMenu");
const menuToggle = document.querySelector(".hamburger")

menuToggle.addEventListener("click", () => navUl.classList.toggle("on"))

navLink.forEach( menu => {
	menu.addEventListener("click", function (e) {
		navTaik(e)
		listChoice(e.target.textContent)
		if (e.target.textContent == "All Menu") {
			getData()
		}
	})
});

function navTaik (e) {
	navLink.forEach(e => e.style.color = 'silver')
	e.target.style.color = "white"
	header.textContent = e.target.textContent
}

function listChoice (kategori) {
	kategori = kategori.toLowerCase()
	return fetch("pizza.json")
			.then(result => result.json())
			.then(datas => updateContentLagiEmotBatu(datas.menu, kategori))
}

function showCardLagiEmotBatu ({nama, deskripsi, harga, gambar}) {
	return `
		<div class="card">
				<img src="img/pizza/${gambar}" alt="" class="gambar">
				<div class="info">
					<div class="nama">${nama}</div>
					<div class="deskripsi">${deskripsi ? deskripsi : "-"}</div>
					<div class="harga">Rp. <span>${harga}</span></div>
					<button class="pesan">Pesan Sekarang</button>
				</div>
			</div>
			`
}

function updateContentLagiEmotBatu (data, kategori) {
	let content = ''
	data.forEach(data => {
		if (data.kategori == kategori){
			return content += showCardLagiEmotBatu(data) 
		}
	}) 
	return listMenu.innerHTML = content
}

function getData () {
	return fetch("pizza.json")
			.then(result => result.json())
			.then(datas => updateContent(datas))
}

getData()

function updateContent({menu}){
	let card = ''
	menu.forEach(menu => card += showCard(menu))
	return listMenu.innerHTML = card
}


function showCard ({nama, deskripsi, harga, gambar}) {
	return `
		<div class="card">
			<img src="img/pizza/${gambar}" alt="" class="gambar">
			<div class="info">
				<div class="nama">${nama}</div>
				<div class="deskripsi">${deskripsi ? deskripsi : "-"}</div>
				<div class="harga">Rp. <span>${harga}</span></div>
				<button class="pesan">Pesan Sekarang</button>
			</div>
		</div>
	`
}
