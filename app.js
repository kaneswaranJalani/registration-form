document.getElementById("registrationform").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = parseInt(document.getElementById("age").value, 10);
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let message = document.getElementById("message");

    // Check if all fields are filled
    if (!name || !age || !gender || !email || !password || !confirmpassword) {
        message.innerText = "All fields are required!";
        message.style.color = "red";
        return;
    }

    // Validate age
    if (isNaN(age) || age <= 0) {
        message.innerText = "Please enter a valid age!";
        message.style.color = "red";
        return;
    }

    // Validate password match
    if (password !== confirmpassword) {
        message.innerText = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    let userData = {
        name,
        age,
        gender,
        email,
        password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    message.innerText = "Your registration was successful!";
    message.style.color = "green";

    setTimeout(() => {
        message.innerText = "";
        document.getElementById("registrationform").reset();
    }, 4000);
});

// Password Strength Indicator
document.getElementById('password').addEventListener('input', function () {
    let strengthMeter = document.getElementById('strengthMeter');
    let password = this.value;
    strengthMeter.className = 'strength-meter';

    if (password.length < 8) {
        strengthMeter.classList.add('weak');
    } else if (/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(password)) {
        strengthMeter.classList.add('strong');
    } else {
        strengthMeter.classList.add('medium');
    }
});

// Toggle Password Visibility
function togglePassword(fieldId) {
    let field = document.getElementById(fieldId);
    field.type = (field.type === 'password') ? 'text' : 'password';
}
