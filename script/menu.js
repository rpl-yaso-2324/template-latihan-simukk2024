/**
 * menu page
 */
let menu = [
	{
		id: 0,
		name: "Paket 1",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 1,
		name: "Paket 2",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 2,
		name: "Paket 3",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 3,
		name: "Paket 4",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 4,
		name: "Paket 5",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
];

// add card menu
const containerCardMenu = document.querySelector(".container-cardmenu");
let card = ``;

menu.map((data) => {
	card += kartu(data.name, data.desc, data.price, data.id);
	containerCardMenu.innerHTML = card;
});

function kartu(name, desc, price, id) {
	return `<div class="card">
	<img src="./images/example-product/indomie.jpg" alt="" class="" />
	<div class="content">
		<p class="menu-name">${name}</p>
		<p class="menu-desc">${desc}</p>
		<div class="card-order">
			<p>Rp.${price}</p>
			<button class="tambah" id="pesan${id}">pesan</button>
		</div>
	</div>
</div>`;
}

// order
menu.map((data) => {
	const order = document.getElementById(`order${data.id}`);
	order.addEventListener("click", function (event) {
		event.preventDefault();
		const amount = prompt("Masukan jumlah pesanan:");
		if (amount != null) {
			if (amount == "" || amount == 0) {
				alert("Jumlah tidak boleh kosong!");
			} else {
				console.log(amount);
				const total = data.price * amount; // Hitung subtotal hanya untuk item saat ini
				localStorage.setItem("total", total);
				localStorage.setItem("jumlah", amount);
				localStorage.setItem("nama", data.name);
				localStorage.setItem("deskripsi", data.desc);
				window.location.href = "order.html";
			}
		}
	});
});
