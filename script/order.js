// tunjuk element info
let info = document.getElementById("info");

// set style mata uang (optional)
const formatUang = (rupiah) => {
	return rupiah.toLocaleString("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	});
};

// set nilai awal user saldo
localStorage.setItem("userSaldo", 50000);
let userSaldo = parseInt(localStorage.getItem("userSaldo"));
document.getElementById("saldo").innerHTML = formatUang(userSaldo);

let desc = localStorage.getItem("deskripsi");
let name = localStorage.getItem("nama");
info.innerHTML = `<p>Anda telah memesan <span>${name}</span>:</p>
<p>${desc}</p>`;
let total = parseInt(localStorage.getItem("total"));
document.getElementById("total").innerHTML = formatUang(total);

// cek pembayaran
const bayar = () => {
	// tunjuk elemen metode pembayaran yang dipilih
	let restoPay = document.getElementById("restopay").checked;
	let cash = document.getElementById("cash").checked;

	// cek metode pembayaran
	if (!restoPay && !cash) {
		alert("Plih metode pembayaran terlebih dahulu !");
	} else {
		if (restoPay) {
			if (userSaldo < total) {
				const lowBalance = confirm(
					"Saldo Resto Pay anda kurang, apakah anda ingin topup ?"
				);
				if (lowBalance) {
					const topUp = prompt("Masukan nominal pecahan Rp.10000 !");
					if (topUp % 10000 != 0 || topUp == 0) {
						alert("Pecahan yang anda masukan salah !");
					} else {
						userSaldo += parseInt(topUp);
						localStorage.setItem("userSaldo", userSaldo);
						document.getElementById("saldo").innerHTML = formatUang(userSaldo);
						alert(`Topup Rp.${topUp} berhasil`);
					}
				}
			} else {
				userSaldo -= total;
				localStorage.setItem("userSaldo", userSaldo);
				window.location.href = "succes.restopay.html";
			}
		}
	}
};
