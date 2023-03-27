function login() {
	var username = $("#username").val();
	var password = $("#password").val();
	
	$.ajax({
		url: "https://raw.githubusercontent.com/cratior/login-data/main/data.json",
		success: function(data) {
			try {
				var accounts = JSON.parse(data).accounts;
				var found = false;
				for (var i = 0; i < accounts.length; i++) {
					if (accounts[i].username == username && accounts[i].password == password) {
						found = true;
						break;
					}
				}
				if (found) {
					$("#message").html("Login successful!");
				} else {
					$("#message").html("Invalid username or password.");
				}
			} catch (e) {
				$("#message").html("Error loading accounts.");
			}
		},
		error: function() {
			$("#message").html("Error loading accounts.");
		}
	});
}