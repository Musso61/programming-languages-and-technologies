const pages = {
    about: "Привет! Я студент направления «Технология программирования». Увлекаюсь веб-разработкой, созданием интерактивных интерфейсов и алгоритмами.",
    skills: "Мои навыки: HTML5, CSS3, JavaScript (ES6+), Git, основы работы с DOM и асинхронными запросами.",
    contacts: "Связаться со мной можно по Email: student@university.kz или через Telegram: @student_dev."
};

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("[data-page]");

function switchPage(pageKey) {
    content.textContent = pages[pageKey] || "Страница не найдена";
    
    buttons.forEach(btn => {
        if (btn.dataset.page === pageKey) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const page = btn.dataset.page;
        switchPage(page);
    });
});

// Инициализация стартовой вкладки
switchPage("about");