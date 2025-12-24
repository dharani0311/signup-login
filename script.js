const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const signupMessage = document.getElementById('signupMessage');
const loginMessage = document.getElementById('loginMessage');
const signupContainer = document.getElementById('signupContainer');
const loginContainer = document.getElementById('loginContainer');

let userData = {};


signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    signupMessage.textContent = "";

    if (!email || !password || !confirmPassword) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Please fill all fields!";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Invalid email format!";
        return;
    }

    if (password !== confirmPassword) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Passwords do not match!";
        return;
    }

    
    userData.email = email;
    userData.password = password;

    signupMessage.style.color = "green";
    signupMessage.textContent = "Signup successful! Redirecting to login...";

    setTimeout(() => {
        signupContainer.classList.add("hidden");
        loginContainer.classList.remove("hidden");
    }, 1000);
});


loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (email === userData.email && password === userData.password) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful!";
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid email or password!";
    }
});
