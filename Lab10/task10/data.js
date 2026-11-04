
// Добавление студента
export function addStudent(students, name, group, grades) {

    const studentName = name.trim();
    const studentGroup = group.trim();

    if (!studentName) {
        throw new Error("Введите имя студента!");
    }

    if (!studentGroup) {
        throw new Error("Введите группу студента!");
    }

    if (grades.length !== 3 ||
        !grades.every(grade =>
            Number.isFinite(grade) &&
            grade >= 1 &&
            grade <= 100
        )) {
        throw new Error("Все оценки должны быть от 1 до 100!");
    }

    const student = {
        id: Date.now() + Math.random(),
        name: studentName,
        group: studentGroup,
        grades: grades
    };

    return [...students, student];
}

// Удаление студента
export function deleteStudent(students, id) {
    return students.filter(student => student.id !== id);
}
