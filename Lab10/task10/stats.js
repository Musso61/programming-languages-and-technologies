
// Средний балл одного студента
export function getStudentAverage(student) {
    const total = student.grades.reduce(
        (sum, grade) => sum + grade, 0
    );

    return total / student.grades.length;
}

// Общий средний балл всех студентов
export function getOverallAverage(students) {
    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + getStudentAverage(student),
        0
    );

    return total / students.length;
}
