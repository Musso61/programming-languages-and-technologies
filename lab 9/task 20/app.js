
const loadBtn = document.querySelector("#loadBtn");
const status = document.querySelector("#status");
const todosList = document.querySelector("#todosList");

async function loadTodos() {
    loadBtn.disabled = true;
    status.textContent = "Загрузка задач...";
    todosList.replaceChildren();

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const todos = await response.json();

        if (todos.length === 0) {
            status.textContent = "Задачи не найдены.";
            return;
        }

        let completedCount = 0;

        for (const todo of todos) {
            const li = document.createElement("li");

            if (todo.completed) {
                li.classList.add("completed");
                completedCount++;
            }

            const title = document.createElement("div");
            title.className = "todo-title";
            title.textContent = `${todo.id}. ${todo.title}`;

            const todoStatus = document.createElement("div");
            todoStatus.className = "todo-status";
            todoStatus.textContent = todo.completed
                ? "Статус: Выполнено"
                : "Статус: Не выполнено";

            li.append(title, todoStatus);
            todosList.appendChild(li);
        }

        status.textContent =
            `Загружено задач: ${todos.length}. ` +
            `Выполнено: ${completedCount}. ` +
            `Не выполнено: ${todos.length - completedCount}.`;
    } catch (error) {
        status.textContent =
            `Ошибка загрузки: ${error.message}. Попробуйте ещё раз.`;
    } finally {
        loadBtn.disabled = false;
    }
}

loadBtn.addEventListener("click", loadTodos);
