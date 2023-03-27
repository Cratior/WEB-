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
					$("#message").html("Welcome, " + username + "!");
					$("#login-container").addClass("active");
				} else {
					$("#message").html("Invalid username or password.");
					$("#login-form").addClass("shake");
					setTimeout(function() {
						$("#login-form").removeClass("shake");
					}, 500);
				}
			} catch (e) {
				console.log("Error parsing JSON data.");
			}
		},
		error: function() {
			console.log("Error loading JSON data.");
		}
	});
}

function showSignup() {
	$("#login-container").fadeOut(500, function() {
		$("#signup-container").fadeIn(500);
	});
}

function signup() {
	var newUsername = $("#new-username").val();
	var newPassword = $("#new-password").val();
	
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/posts",
		method: "POST",
		data: {
			title: newUsername,
			body: newPassword,
			userId: 1
		},
		success: function(data) {
			$("#signup-message").html("Sign up successful!");
		},
		error: function() {
			$("#signup-message").html("Error signing up.");
		}
	});
}