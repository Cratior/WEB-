$(document).ready(function() {
	$("#signIn").click(function() {
		$(".container").removeClass("right-panel-active");
	});
	
	$("#signUp").click(function() {
		$(".container").addClass("right-panel-active");
	});
});

function login() {
	var username = $("#username").val();
	var password = $("#password").val();
	
	$("#message").html("Signing in...");
	
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
					$("#login-form").addClass("valid");
					setTimeout(function() {
						$("#login-form").removeClass("valid");
					}, 1000);
				} else {
					$("#message").html("Invalid username or password.");
					$("#login-form").addClass("invalid");
					setTimeout(function() {
						$("#login-form").removeClass("invalid");
					}, 1000);
				}
			} catch (e) {
				console.log("Error parsing JSON data.");
				$("#message").html("Error signing in.");
			}
		},
		error: function() {
			console.log("Error loading JSON data.");
			$("#message").html("Error signing in.");
		},
		complete: function() {
			$("#username").val("");
			$("#password").val("");
		}
	});
}

function signup() {
	var newUsername = $("#new-username").val();
	var newPassword = $("#new-password").val();
	
	$("#signup-message").html("Signing up...");
	
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
			$("#signup-form").addClass("valid");
			setTimeout(function() {
				$("#signup-form").removeClass("valid");
			}, 1000);
		},
		error: function() {
			$("#signup-message").html("Error signing up.");
			$("#signup-form").addClass("invalid");
			setTimeout(function() {
				$("#signup-form").removeClass("invalid");
			}, 1000);
		},
		complete: function() {
			$("#new-username").val("");
			$("#new-password").val("");
		}
	});
}