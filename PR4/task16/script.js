const form = document.getElementById("shopForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    const delivery = document.querySelector(
        'input[name="delivery"]:checked'
    );

    const payment = document.querySelector(
        'input[name="payment"]:checked'
    );

    const services = document.querySelectorAll(
        'input[name="services"]:checked'
    );

    const agreement = document.getElementById("agreement").checked;

    // Получаем элементы сообщений об ошибках
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const addressError = document.getElementById("addressError");
    const deliveryError = document.getElementById("deliveryError");
    const paymentError = document.getElementById("paymentError");
    const agreementError = document.getElementById("agreementError");

    // Очищаем старые сообщения
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";
    deliveryError.textContent = "";
    paymentError.textContent = "";
    agreementError.textContent = "";

    document.getElementById("result").innerHTML = "";

    let valid = true;

    // Проверка ФИО
    if (name === "") {
        nameError.textContent = "Введите ФИО.";
        valid = false;
    }

    // Проверка e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Введите e-mail.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Введите корректный e-mail.";
        valid = false;
    }

    // Проверка телефона
    if (phone === "") {
        phoneError.textContent = "Введите номер телефона.";
        valid = false;
    }

    // Проверка адреса
    if (address === "") {
        addressError.textContent = "Введите адрес доставки.";
        valid = false;
    }

    // Проверка способа доставки
    if (!delivery) {
        deliveryError.textContent =
            "Выберите способ доставки.";
        valid = false;
    }

    // Проверка способа оплаты
    if (!payment) {
        paymentError.textContent =
            "Выберите способ оплаты.";
        valid = false;
    }

    // Проверка согласия
    if (!agreement) {
        agreementError.textContent =
            "Необходимо согласиться с условиями.";
        valid = false;
    }

    // Если есть ошибки — прекращаем выполнение
    if (!valid) {
        return;
    }

    // Получаем дополнительные услуги
    let selectedServices = "Нет";

    if (services.length > 0) {
        selectedServices = Array.from(services)
            .map(service => service.value)
            .join(", ");
    }

    // Вывод результата
    document.getElementById("result").innerHTML = `
        <div class="success">
            <h2>Заказ успешно оформлен!</h2>

            <strong>Контактные данные:</strong><br>
            ФИО: ${name}<br>
            E-mail: ${email}<br>
            Телефон: ${phone}<br>

            <br>

            <strong>Доставка:</strong><br>
            Адрес: ${address}<br>
            Способ доставки: ${delivery.value}<br>

            <br>

            <strong>Оплата:</strong><br>
            Способ оплаты: ${payment.value}<br>

            <br>

            <strong>Дополнительные услуги:</strong><br>
            ${selectedServices}
        </div>
    `;
});
