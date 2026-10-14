let students = ["Алексей Смирнов", "Елена Ким", "Диас Серик"];
let grades = [
    { student: "Алексей Смирнов", score: 90 },
    { student: "Елена Ким", score: 95 },
    { student: "Диас Серик", score: 85 }
];

let currentPage = "students";
const content = document.querySelector("#content");
const buttons = document.querySelectorAll("[data-page]");

function render() {
    content.innerHTML = "";

    if (currentPage === "students") {
        const h3 = document.createElement("h3");
        h3.textContent = "Список студентов";
        content.appendChild(h3);

        const ul = document.createElement("ul");
        students.forEach(s => {
            const li = document.createElement("li");
            li.textContent = s;
            ul.appendChild(li);
        });
        content.appendChild(ul);

        // Форма добавления студента
        const formDiv = document.createElement("div");
        formDiv.className = "form-group";
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "ФИО нового студента";
        
        const btn = document.createElement("button");
        btn.textContent = "Добавить";
        btn.addEventListener("click", () => {
            if (input.value.trim() !== "") {
                students.push(input.value.trim());
                grades.push({ student: input.value.trim(), score: 75 }); // базовая оценка по умолчанию
                render();
            }
        });

        formDiv.appendChild(input);
        formDiv.appendChild(btn);
        content.appendChild(formDiv);

    } else if (currentPage === "grades") {
        const h3 = document.createElement("h3");
        h3.textContent = "Оценки студентов";
        content.appendChild(h3);

        const ul = document.createElement("ul");
        grades.forEach(g => {
            const li = document.createElement("li");
            li.textContent = `${g.student}: `;
            
            const span = document.createElement("span");
            span.textContent = `${g.score} баллов`;
            li.appendChild(span);
            ul.appendChild(li);
        });
        content.appendChild(ul);

    } else if (currentPage === "stats") {
        const h3 = document.createElement("h3");
        h3.textContent = "Статистика";
        content.appendChild(h3);

        let avg = 0;
        if (grades.length > 0) {
            const sum = grades.reduce((acc, curr) => acc + curr.score, 0);
            avg = (sum / grades.length).toFixed(1);
        }

        const p = document.createElement("p");
        p.textContent = `Общее количество студентов: ${students.length}`;
        
        const p2 = document.createElement("p");
        p2.textContent = `Средний балл по группе: ${avg}`;
        p2.style.fontWeight = "bold";
        p2.style.marginTop = "10px";

        content.appendChild(p);
        content.appendChild(p2);
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentPage = btn.dataset.page;
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        render();
    });
});

render();