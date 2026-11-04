
// Импортируем функции из других модулей
import {
    addStudent,
    removeStudent
} from "./modules/grades.js";

import {
    saveStudents,
    loadStudents,
    clearStorage
} from "./modules/storage.js";

import {
    renderStudents,
    showMessage
} from "./modules/ui.js";

// Загружаем сохраненных студентов
let students = loadStudents();

// Показываем студентов при открытии страницы
renderStudents(students);

// Получаем элементы HTML
const gradeForm = document.querySelector("#gradeForm");
const studentName = document.querySelector("#studentName");
const studentGrade = document.querySelector("#studentGrade");
const studentList = document.querySelector("#studentList");
const clearButton = document.querySelector("#clearButton");

// Добавление нового студента
gradeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    try {
        students = addStudent(
            students,
            studentName.value,
            studentGrade.value
        );

        saveStudents(students);
        renderStudents(students);

        showMessage("Студент успешно добавлен!", false);

        gradeForm.reset();

    } catch (error) {
        showMessage(error.message);
    }
});

// Удаление студента
studentList.addEventListener("click", function(event) {
    const button = event.target.closest(".delete-button");

    if (!button) {
        return;
    }

    const id = Number(button.dataset.id);

    students = removeStudent(students, id);

    saveStudents(students);
    renderStudents(students);

    showMessage("Студент удален!", false);
});

// Очистка всего журнала
clearButton.addEventListener("click", function() {
    students = [];

    clearStorage();
    renderStudents(students);

    showMessage("Журнал успешно очищен!", false);
});
