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
	
];

// add card menu
const containerCardMenu = document...(".container-cardmenu");
let card = ``;

menu...((data) => {
	card += kartu(data.name, data.desc, data.price, data.id);
	containerCardMenu... = card;
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
menu...((data) => {
	const pesan = document...(`pesan${data.id}`);
	pesan...("click", function (event) {
		event.preventDefault();
		const jumlahPesanan = ...("Masukan jumlah pesanan:");
		if (jumlahPesanan ... null) {
			if (jumlahPesanan ... "" || jumlahPesanan ... 0) {
				...("Jumlah tidak boleh kosong!");
			} else {
				// console.log(jumlahPesanan);
				const total = data.price * jumlahPesanan; // Hitung subtotal hanya untuk item saat ini
				// console.log(total);
				localStorage...("total", total);
				localStorage...("jumlah", jumlahPesanan);
				localStorage...("nama", data.name);
				localStorage...("deskripsi", data.desc);
				window.location.href = "order.html";
			}
		}
	});
});
