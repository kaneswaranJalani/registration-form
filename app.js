document.getElementById("registrationform").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = parseInt(document.getElementById("age").value, 10);
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let message = document.getElementById("message");
    let strengthBar = document.getElementById('strengthBar');
    let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;


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

document.getElementById('password').addEventListener('input',function() {

    const value = password.value;
    let strength = 0;

    if (value.length >= 8) strength += 25;
    if (/[A-Z]/.test(value)) strength += 25;
    if (/[0-9]/.test(value)) strength += 25;
    if (/[!@#$%^&*]/.test(value)) strength += 25;

    strengthBar.style.width = `${Math.min(strength, 100)}%`;
    if (strength < 30) {
        strengthBar.style.background = 'red'; 
    } else if (strength < 70) {
        strengthBar.style.background = 'orange';
    } else {
        strengthBar.style.background = 'green';
    }

})

// Toggle Password Visibility
function togglePassword(fieldId) {
    let field = document.getElementById(fieldId);
    field.type = (field.type === 'password') ? 'text' : 'password';
}
