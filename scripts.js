function stupid() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	if (username == "" && password == "") {
		alert("Please enter your information below");
		return false;
	}
	else if (username == "") {
		alert("Please enter a username");
		return false;
	}
	else if (password == "") {
		alert("Please enter a password");
		return false;
	}
	return true;
	}