
const loadBtn = document.querySelector("#loadBtn");
const status = document.querySelector("#status");
const usersList = document.querySelector("#usersList");

async function loadUsers() {
    loadBtn.disabled = true;
    status.textContent = "Загрузка пользователей...";
    usersList.replaceChildren();

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const users = await response.json();

        if (users.length === 0) {
            status.textContent = "Пользователи не найдены.";
            return;
        }

        for (const user of users) {
            const li = document.createElement("li");

            const name = document.createElement("div");
            name.className = "user-name";
            name.textContent = `${user.id}. ${user.name}`;

            const email = document.createElement("div");
            email.className = "user-email";
            email.textContent = `Email: ${user.email}`;

            li.append(name, email);
            usersList.appendChild(li);
        }

        status.textContent =
            `Успешно загружено пользователей: ${users.length}`;
    } catch (error) {
        status.textContent =
            `Ошибка загрузки: ${error.message}. Нажмите кнопку повторно.`;
    } finally {
        loadBtn.disabled = false;
    }
}

loadBtn.addEventListener("click", loadUsers);
