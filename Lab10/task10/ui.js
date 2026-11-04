
import {
    getStudentAverage,
    getOverallAverage
} from "./stats.js";

// Отображение студентов
export function renderStudents(students) {

    const list = document.querySelector("#studentList");

    list.replaceChildren();

    students.forEach(student => {

        const item = document.createElement("div");
        item.className = "student-item";

        const info = document.createElement("div");
        info.className = "student-info";

        const name = document.createElement("strong");
        name.textContent = student.name;

        const group = document.createElement("div");
        group.textContent = "Группа: " + student.group;

        const grades = document.createElement("div");
        grades.textContent =
            "Оценки: " + student.grades.join(", ");

        info.append(name, group, grades);

        const average = document.createElement("span");
        average.className = "student-average";
        average.textContent =
            getStudentAverage(student).toFixed(2);

        const button = document.createElement("button");
        button.className = "delete-button";
        button.textContent = "Удалить";
        button.dataset.id = student.id;

        item.append(info, average, button);

        list.append(item);
    });

    document.querySelector("#totalStudents").textContent =
        students.length;

    document.querySelector("#overallAverage").textContent =
        getOverallAverage(students).toFixed(2);
}

// Сообщение пользователю
export function showMessage(message, isError = true) {

    const element = document.querySelector("#message");

    element.textContent = message;

    element.style.color = isError
        ? "#d63031"
        : "#16803c";
}
