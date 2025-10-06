 //Simulated usert database
        const users = {
            alex: "secure123",
            sam: "pass456",
            sveta: "hello789"
        };

        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            if (users[username] && users[username] === password) {
                sessionStorage.setItem("loggedInUser", username);
                window.location.href = "profile.html";
            } else {
                alert("Invalid username or password.");
            }
        });