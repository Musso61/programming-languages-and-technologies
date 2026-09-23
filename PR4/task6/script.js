const form = document.getElementById("subscriptionForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const topics = document.querySelectorAll(
        'input[name="topics"]:checked'
    );

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const topicsError = document.getElementById("topicsError");
    const message = document.getElementById("message");

    nameError.textContent = "";
    emailError.textContent = "";
    topicsError.textContent = "";
    message.innerHTML = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Введите имя.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Введите e-mail.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Введите корректный e-mail.";
        valid = false;
    }

    if (topics.length === 0) {
        topicsError.textContent = "Выберите хотя бы одну тему.";
        valid = false;
    }

    if (!valid) {
        return;
    }

    const selectedTopics = Array.from(topics)
        .map(topic => topic.value)
        .join(", ");

    message.innerHTML = `
        <div class="success">
            <strong>Подписка оформлена успешно!</strong><br>
            Имя: ${name}<br>
            E-mail: ${email}<br>
            Темы: ${selectedTopics}
        </div>
    `;
});
