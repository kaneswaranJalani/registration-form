document.getElementById("registrationform").addEventListener("submit",function(event){
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

    if (!name || !age || !gender || !email || !password || !confirmpassword) {
        message.innerText = "All fields are required!";
        message.style.color = "red";
        return;
    }

    if (isNaN(age) || age <= 0) {
        message.innerText = "Please enter a valid age!";
        message.style.color = "red";
        return;
    }

    if (password !== confirmpassword) {
        message.innerText = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    let userData = {
        name: name,
        age: age,
        gender: gender,
        email: email,
        password: password,
        confirmpassword: confirmpassword
    };

    localStorage.setItem("user",JSON.stringify(userData));

    document.getElementById("message").innerText="your Registration successful !";
    setTimeout(() => {
        document.getElementById("message").innerText ="";
        document.getElementById("registrationform").reset();
    },4000);
});