const akun = {
	username: "admin",
	password: "admin123",
};
const inputUsername = document...("...");
const inputPassword = document...("...");

function ...() {
	if (inputUsername... == "" || inputPassword... == "") {
		...("Username & Password tidak boleh kosong!");
	} else if (
		inputUsername... ... akun... ||
		inputPassword... ... akun...
	) {
		...("Username atau Pssword salah!");
	} else {
		window.location... = "menu.html";
	}
}
