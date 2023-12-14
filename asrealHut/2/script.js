const navLink = document.querySelectorAll(".nav-item");
const navUl = document.querySelector(".nav-ul");
const header = document.querySelector(".header");
const listMenu = document.querySelector(".listMenu");
const menuToggle = document.querySelector(".hamburger")

menuToggle.addEventListener("click", () => navUl.classList.toggle("on"));

function navTaik (e) {
	navLink.forEach(e => e.style.color = 'silver');
	e.target.style.color = "white";
	header.textContent = e.target.textContent;
}

navLink.forEach( menu => {
	menu.addEventListener("click", function (e) {
		navTaik(e);
		if (e.target.textContent == "All Menu") {
			const app = new App();
			app.getData();
		} else {
			const kategoriMenu = new KategoriMenu();
			kategoriMenu.listChoice(e.target.textContent);
		}
	})
});

class App{
	constructor(){
		this.datas = "pizza.json";
	}
	getData() {
		return fetch(this.datas)
			.then(result => result.json())
			.then(datas => this.updateContent(datas));
	}
	updateContent({menu}){
		let card = '';
		menu.forEach(menu => card += this.showCard(menu));
		return listMenu.innerHTML = card;
	}
	showCard ({nama, deskripsi, harga, gambar}) {
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
		`;
	}
}
const app = new App();
app.getData();

class KategoriMenu {
	constructor(){
		this.datas = "pizza.json";
	}
	listChoice (kategori) {
		kategori = kategori.toLowerCase();
		return fetch(this.datas)
				.then(result => result.json())
				.then(datas => this.updateContentLagiEmotBatu(datas.menu, kategori));
	}
	updateContentLagiEmotBatu (data, kategori) {
		let content = '';
		data.forEach(data => {
			if (data.kategori == kategori){
				return content += this.showCardLagiEmotBatu(data);
			}
		});
		return listMenu.innerHTML = content;
	}
	showCardLagiEmotBatu ({nama, deskripsi, harga, gambar}) {
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
			`;
	}
}





