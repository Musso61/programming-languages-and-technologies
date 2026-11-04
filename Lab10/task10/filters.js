
// Поиск и фильтрация студентов
export function filterStudents(students, search, group) {

    return students.filter(student => {

        const matchesName = student.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesGroup = student.group
            .toLowerCase()
            .includes(group.toLowerCase());

        return matchesName && matchesGroup;
    });
}

// Сортировка студентов по среднему баллу
export function sortStudents(students, order, getAverage) {

    const result = [...students];

    if (order === "asc") {
        result.sort((a, b) =>
            getAverage(a) - getAverage(b)
        );
    }

    if (order === "desc") {
        result.sort((a, b) =>
            getAverage(b) - getAverage(a)
        );
    }

    return result;
}
