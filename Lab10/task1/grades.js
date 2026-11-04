
// Добавление студента
export function addStudent(students, name, grade) {
    const studentName = name.trim();
    const studentGrade = Number(grade);

    if (!studentName) {
        throw new Error("Введите имя студента!");
    }

    if (!Number.isFinite(studentGrade) ||
        studentGrade < 1 ||
        studentGrade > 100) {
        throw new Error("Оценка должна быть от 1 до 100!");
    }

    const newStudent = {
        id: Date.now(),
        name: studentName,
        grade: studentGrade
    };

    return [...students, newStudent];
}

// Вычисление среднего балла
export function calculateAverage(students) {
    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + student.grade,
        0
    );

    return total / students.length;
}

// Удаление студента
export function removeStudent(students, id) {
    return students.filter(student => student.id !== id);
}
