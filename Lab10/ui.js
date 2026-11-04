
// Показ приветствия
export function showGreeting(text) {
    const result = document.querySelector("#result");

    result.textContent = text;
}

// Показ сообщения
export function showMessage(text, isError = true) {
    const message = document.querySelector("#message");

    message.textContent = text;

    message.style.color = isError
        ? "#d63031"
        : "#16803c";
}

// Очистка результата
export function clearGreeting() {
    document.querySelector("#result").textContent =
        "Здесь появится приветствие...";

    document.querySelector("#message").textContent = "";
}
