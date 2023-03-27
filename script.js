$(document).ready(function() {
	$('#signUp').click(function() {
		$('.container').addClass("right-panel-active");
	});

	$('#signIn').click(function() {
		$('.container').removeClass("right-panel-active");
	});

	function login() {
		var username = $('#username').val();
		var password = $('#password').val();

		if (username == "" || password == "") {
			$('#message').html("Please enter a username and password.");
			return;
		}

		$.ajax({
			type: "POST",
			url: "login.php",
			data: {username: username, password: password},
			success: function(response) {
				if (response == "success") {
					$('#message').html("Login successful.");
					$('#login-form').addClass("valid");
					$('#login-form').removeClass("invalid");
				} else {
					$('#message').html("Invalid username or password.");
					$('#login-form').addClass("invalid");
					$('#login-form').removeClass("valid");
				}
			}
		});
	}

	function signup() {
		var username = $('#new-username').val();
		var email = $('#new-email').val();
		var password = $('#new-password').val();

		if (username == "" || email == "" || password == "") {
			$('#signup-message').html("Please enter a username, email, and password.");
			return;
		}

		$.ajax({
			type: "POST",
			url: "signup.php",
			data: {username: username, email: email, password: password},
			success: function(response) {
				if (response == "success") {
					$('#signup-message').html("Account created successfully.");
					$('#signup-form').addClass("valid");
					$('#signup-form').removeClass("invalid");
				} else {
					$('#signup-message').html("Error creating account.");
					$('#signup-form').addClass("invalid");
					$('#signup-form').removeClass("valid");
				}
			}
		});
	}

	$('#login-form').submit(function(event) {
		event.preventDefault();
		login();
	});

	$('#signup-form').submit(function(event) {
		event.preventDefault();
		signup();
	});
});