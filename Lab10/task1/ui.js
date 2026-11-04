
import { calculateAverage } from "./grades.js";

// Отображение списка студентов
export function renderStudents(students) {
    const studentList = document.querySelector("#studentList");
    const studentCount = document.querySelector("#studentCount");
    const averageGrade = document.querySelector("#averageGrade");

    studentList.replaceChildren();

    students.forEach(student => {
        const item = document.createElement("div");
        item.className = "student-item";

        const info = document.createElement("span");
        info.className = "student-info";
        info.textContent = student.name;

        const grade = document.createElement("span");
        grade.className = "student-grade";
        grade.textContent = `${student.grade} баллов`;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Удалить";
        deleteButton.dataset.id = student.id;

        item.append(info, grade, deleteButton);
        studentList.append(item);
    });

    studentCount.textContent = students.length;

    averageGrade.textContent =
        calculateAverage(students).toFixed(2);
}

// Вывод сообщения пользователю
export function showMessage(message, isError = true) {
    const messageElement = document.querySelector("#message");

    messageElement.textContent = message;
    messageElement.style.color = isError ? "#d63031" : "#16803c";
}
