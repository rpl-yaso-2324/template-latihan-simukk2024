const akun = {
	username: "admin",
	password: "admin123",
};
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");

function login() {
	if (inputUsername.value == "" || inputPassword.value == "") {
		alert("Username & Password tidak boleh kosong!");
	} else if (
		inputUsername.value != akun.username ||
		inputPassword.value != akun.password
	) {
		alert("Username atau Pssword salah!");
	} else {
		window.location.href = "menu.html";
	}
}
