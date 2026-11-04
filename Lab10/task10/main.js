
// Импортируем функции работы с данными
import {
    addStudent,
    deleteStudent
} from "./modules/data.js";

// Импортируем статистику
import {
    getStudentAverage
} from "./modules/stats.js";

// Импортируем поиск и сортировку
import {
    filterStudents,
    sortStudents
} from "./modules/filters.js";

// Импортируем сохранение
import {
    saveStudents,
    loadStudents,
    clearStorage
} from "./modules/storage.js";

// Импортируем интерфейс
import {
    renderStudents,
    showMessage
} from "./modules/ui.js";

// Загружаем сохраненные данные
let students = loadStudents();

// Элементы страницы
const form = document.querySelector("#studentForm");
const nameInput = document.querySelector("#studentName");
const groupInput = document.querySelector("#studentGroup");

const grade1 = document.querySelector("#grade1");
const grade2 = document.querySelector("#grade2");
const grade3 = document.querySelector("#grade3");

const searchInput = document.querySelector("#searchInput");
const groupFilter = document.querySelector("#groupFilter");
const sortSelect = document.querySelector("#sortSelect");

const studentList = document.querySelector("#studentList");
const clearButton = document.querySelector("#clearButton");

// Обновление отображения
function updateDisplay() {

    let result = filterStudents(
        students,
        searchInput.value,
        groupFilter.value
    );

    result = sortStudents(
        result,
        sortSelect.value,
        getStudentAverage
    );

    renderStudents(result);
}

// Первоначальное отображение
updateDisplay();

// Добавление студента
form.addEventListener("submit", function(event) {

    event.preventDefault();

    try {

        const grades = [
            Number(grade1.value),
            Number(grade2.value),
            Number(grade3.value)
        ];

        if (
            grade1.value.trim() === "" ||
            grade2.value.trim() === "" ||
            grade3.value.trim() === ""
        ) {
            throw new Error("Введите все три оценки!");
        }

        students = addStudent(
            students,
            nameInput.value,
            groupInput.value,
            grades
        );

        saveStudents(students);

        form.reset();

        updateDisplay();

        showMessage("Студент успешно добавлен!", false);

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

    students = deleteStudent(
        students,
        Number(button.dataset.id)
    );

    saveStudents(students);

    updateDisplay();

    showMessage("Студент удален!", false);
});

// Поиск
searchInput.addEventListener("input", updateDisplay);

// Фильтрация по группе
groupFilter.addEventListener("input", updateDisplay);

// Сортировка
sortSelect.addEventListener("change", updateDisplay);

// Очистка списка
clearButton.addEventListener("click", function() {

    students = [];

    clearStorage();

    updateDisplay();

    showMessage("Список студентов очищен!", false);
});
