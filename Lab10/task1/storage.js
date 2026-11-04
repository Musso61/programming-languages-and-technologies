
const STORAGE_KEY = "studentGrades";

// Сохранение данных
export function saveStudents(students) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(students)
    );
}

// Загрузка данных
export function loadStudents() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);

        if (!data) {
            return [];
        }

        const students = JSON.parse(data);

        if (!Array.isArray(students)) {
            return [];
        }

        return students;
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
        return [];
    }
}

// Удаление всех сохраненных данных
export function clearStorage() {
    localStorage.removeItem(STORAGE_KEY);
}
