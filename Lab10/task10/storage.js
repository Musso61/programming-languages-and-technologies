
// Сохранение студентов
export function saveStudents(students) {
    localStorage.setItem(
        "analyticsStudents",
        JSON.stringify(students)
    );
}

// Загрузка студентов
export function loadStudents() {
    try {
        const data = localStorage.getItem("analyticsStudents");

        if (!data) {
            return [];
        }

        const students = JSON.parse(data);

        if (!Array.isArray(students)) {
            return [];
        }

        return students;
    } catch (error) {
        console.error("Ошибка загрузки:", error);
        return [];
    }
}

// Очистка хранилища
export function clearStorage() {
    localStorage.removeItem("analyticsStudents");
}
