
// Импортируем функции из greetings.js
import {
    simpleGreeting,
    friendlyGreeting,
    officialGreeting
} from "./modules/greetings.js";

// Импортируем функции из ui.js
import {
    showGreeting,
    showMessage,
    clearGreeting
} from "./modules/ui.js";

// Получаем элементы страницы
const userName = document.querySelector("#userName");
const greetingType = document.querySelector("#greetingType");

const generateButton = document.querySelector("#generateButton");
const clearButton = document.querySelector("#clearButton");
const copyButton = document.querySelector("#copyButton");

// Создание приветствия
generateButton.addEventListener("click", function() {

    const name = userName.value.trim();

    // Проверка имени
    if (!name) {
        showMessage("Введите имя человека!", true);
        userName.focus();
        return;
    }

    // Проверка длины имени
    if (name.length > 50) {
        showMessage("Имя слишком длинное!", true);
        return;
    }

    let greeting;

    // Выбор приветствия
    switch (greetingType.value) {

        case "simple":
            greeting = simpleGreeting(name);
            break;

        case "friendly":
            greeting = friendlyGreeting(name);
            break;

        case "official":
            greeting = officialGreeting(name);
            break;

        default:
            showMessage("Выберите стиль приветствия!", true);
            return;
    }

    // Показываем результат
    showGreeting(greeting);

    showMessage("Приветствие успешно создано!", false);
});

// Очистка полей
clearButton.addEventListener("click", function() {

    userName.value = "";
    greetingType.value = "simple";

    clearGreeting();

    userName.focus();
});

// Копирование приветствия
copyButton.addEventListener("click", async function() {

    const greeting = document.querySelector("#result").textContent;

    if (greeting === "Здесь появится ваше приветствие...") {
        showMessage("Сначала создайте приветствие!", true);
        return;
    }

    try {

        await navigator.clipboard.writeText(greeting);

        showMessage("Приветствие скопировано!", false);

    } catch (error) {

        showMessage("Не удалось скопировать текст.", true);

    }
});
