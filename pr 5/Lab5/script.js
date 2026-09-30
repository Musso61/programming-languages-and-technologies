const nameInput = document.querySelector("#name");
const groupInput = document.querySelector("#group");
const courseInput = document.querySelector("#course");

const createButton = document.querySelector("#createButton");

const studentCard = document.querySelector("#studentCard");
const cardName = document.querySelector("#cardName");
const cardGroup = document.querySelector("#cardGroup");
const cardCourse = document.querySelector("#cardCourse");

const message = document.querySelector("#message");


// Пользовательская функция создания карточки
function createStudentCard(name, group, course) {
    cardName.textContent = name;
    cardGroup.textContent = group;
    cardCourse.textContent = `${course} курс`;

    studentCard.style.display = "block";
}


// Проверка введённых данных
function checkData(name, group, course) {

    if (name === "") {
        message.textContent = "Введите имя и фамилию";
        return false;
    }

    if (group === "") {
        message.textContent = "Введите название группы";
        return false;
    }

    if (course === "" || course < 1 || course > 6) {
        message.textContent = "Введите курс от 1 до 6";
        return false;
    }

    return true;
}


// Обработка нажатия кнопки
createButton.addEventListener("click", function () {

    const name = nameInput.value.trim();
    const group = groupInput.value.trim();
    const course = courseInput.value;

    if (checkData(name, group, course)) {

        createStudentCard(name, group, course);

        message.textContent = "";

        nameInput.value = "";
        groupInput.value = "";
        courseInput.value = "";
    }
});


// Дополнительное событие input
nameInput.addEventListener("input", function () {

    if (nameInput.value.length > 0) {
        message.textContent = "";
    }
});