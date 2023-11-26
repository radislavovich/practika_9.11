window.onload = function () {
    const generateButton = document.getElementById('generateButton');
    const resetButton = document.getElementById('resetButton');

    generateButton.addEventListener('click', function () {
        const initPerson = personGenerator.getPerson();
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('surnameOutput').innerText = initPerson.surname;
        document.getElementById('genderOutput').innerText = initPerson.gender;
        document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
        document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
        document.getElementById('professionOutput').innerText = initPerson.profession;
    });

    resetButton.addEventListener('click', function () {
        document.getElementById('firstNameOutput').innerText = 'Генерация фамилии:';
        document.getElementById('surnameOutput').innerText = '';
        document.getElementById('genderOutput').innerText = 'Генерация пола';
        document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
        document.getElementById('patronymicOutput').innerText = 'Генерация отчества';
        document.getElementById('professionOutput').innerText = 'Генерация профессии';
    });
};
