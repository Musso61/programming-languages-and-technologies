const form = document.getElementById("registrationForm");

const login = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const passwordStatus = document.getElementById("passwordStatus");

password.addEventListener("input", function() {
    if (password.value.length >= 8) {
        passwordStatus.textContent = "Пароль корректный";
        passwordStatus.style.color = "green";
        password.classList.add("valid");
        password.classList.remove("invalid");
    } else {
        passwordStatus.textContent =
            "Пароль должен содержать минимум 8 символов";
        passwordStatus.style.color = "red";
        password.classList.add("invalid");
        password.classList.remove("valid");
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const loginError = document.getElementById("loginError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    const message = document.getElementById("message");

    loginError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    message.innerHTML = "";

    let valid = true;

    if (login.value.trim() === "") {
        loginError.textContent = "Введите логин.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Введите e-mail.";
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Введите корректный e-mail.";
        valid = false;
    }

    if (password.value.length < 8) {
        passwordError.textContent =
            "Пароль должен содержать минимум 8 символов.";
        valid = false;
    }

    if (confirmPassword.value !== password.value) {
        confirmError.textContent = "Пароли не совпадают.";
        valid = false;
    }

    if (!valid) {
        return;
    }

    message.innerHTML = `
        <div class="success">
            <strong>Регистрация прошла успешно!</strong><br>
            Логин: ${login.value}<br>
            E-mail: ${email.value}
        </div>
    `;
});
