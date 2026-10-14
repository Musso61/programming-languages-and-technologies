const data = {
    news: [
        { title: "Успешное завершение хакатона", text: "Студенты нашего факультета заняли первое место на республиканском соревновании по программированию." },
        { title: "Новая лаборатория", text: "Открылась обновленная лаборатория робототехники и искусственного интеллекта." }
    ],
    events: [
        { title: "День открытых дверей", text: "Приглашаем будущих абитуриентов посетить наш университет в эту субботу." },
        { title: "Мастер-класс по React", text: "Практическое занятие по современным фронтенд-фреймворкам от ведущих экспертов." }
    ],
    announcements: [
        { title: "Сроки сдачи проектов", text: "Напоминаем о необходимости загрузить лабораторные работы до конца текущей недели." },
        { title: "Изменение расписания", text: "Лекции по понедельникам переносятся в аудиторию 405." }
    ]
};

let currentPage = "news";
let searchQuery = "";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("[data-page]");
const searchInput = document.querySelector("#search-input");

function render() {
    content.innerHTML = "";
    const items = data[currentPage] || [];
    
    // Фильтрация по ключевому слову
    const filtered = items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filtered.length === 0) {
        const p = document.createElement("p");
        p.textContent = "Ничего не найдено.";
        content.appendChild(p);
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        
        const h3 = document.createElement("h3");
        h3.textContent = item.title;
        
        const p = document.createElement("p");
        p.textContent = item.text;
        
        card.appendChild(h3);
        card.appendChild(p);
        content.appendChild(card);
    });
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentPage = btn.dataset.page;
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        render();
    });
});

searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    render();
});

render();