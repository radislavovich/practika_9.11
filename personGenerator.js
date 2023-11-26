const personGenerator = {
    surnameJson: {
        count: 16,
        list: {
            id_1: 'Поздняков',
            id_2: 'Смирнов',
            id_3: 'Кузнецов',
            id_4: 'Потапов',
            id_5: 'Петров',
            id_6: 'Гребеников',
            id_7: 'Пудовиков',
            id_8: 'Федоров',
            id_9: 'Кадышев',
            id_10: 'Костов',
            id_11: 'Семёнов',
            id_12: 'Пикеев',
            id_13: 'Степанов',
            id_14: 'Павлов',
            id_15: 'Шмелёв',
            id_16: 'Горбачёв'
        }
    },
    firstNameMaleJson: {
        count: 10,
        list: {
            id_1: 'Александр',
            id_2: 'Максим',
            id_3: 'Иван',
            id_4: 'Артем',
            id_5: 'Дмитрий',
            id_6: 'Никита',
            id_7: 'Михаил',
            id_8: 'Вячеслав',
            id_9: 'Егор',
            id_10: 'Андрей'
        }
    },
    firstNameFemaleJson: {
        count: 10,
        list: {
            id_1: 'Виктория',
            id_2: 'Юлия',
            id_3: 'Елизавета',
            id_4: 'Вероника',
            id_5: 'Дарья',
            id_6: 'Наталья',
            id_7: 'Елена',
            id_8: 'Анна',
            id_9: 'Екатерина',
            id_10: 'Ольга'
        }
    },
    patronymicMaleJson: {
        count: 10,
        list: {
            id_1: 'Александрович',
            id_2: 'Олегович',
            id_3: 'Иванович',
            id_4: 'Артемович',
            id_5: 'Дмитриевич',
            id_6: 'Никитович',
            id_7: 'Михайлович',
            id_8: 'Даниилович',
            id_9: 'Егорович',
            id_10: 'Андреевич'
        }
    },

    patronymicFemaleJson: {
        count: 10,
        list: {
            id_1: 'Александровна',
            id_2: 'Максимовна',
            id_3: 'Ивановна',
            id_4: 'Артемовна',
            id_5: 'Дмитриевна',
            id_6: 'Никитовна',
            id_7: 'Михайловна',
            id_8: 'Данииловна',
            id_9: 'Егоровна',
            id_10: 'Андреевна'
        }
    },

    professionsJson: {
        count: 5,
        list: {
            id_1: 'Врач',
            id_2: 'Учитель',
            id_3: 'Инженер',
            id_4: 'Юрист',
            id_5: 'Программист'
        }
    },
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = 'id_' + this.randomIntNumber(1, obj.count);
        return obj.list[prop];
    },

    randomFirstName: function () {
        if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(JSON.stringify(this.firstNameFemaleJson));
        } else {
            return this.randomValue(JSON.stringify(this.firstNameMaleJson));
        }
    },

    randomSurname: function () {
        if (this.person.gender === this.GENDER_FEMALE) {
            const femaleSurname = this.randomValue(JSON.stringify(this.surnameJson));
            return femaleSurname.endsWith('в') ? femaleSurname.slice(0, -1) + 'ва' : femaleSurname;
        } else {
            return this.randomValue(JSON.stringify(this.surnameJson));
        }
    },

    randomPatronymic: function () {
        if (this.person.gender === this.GENDER_FEMALE) {
            const femalePatronymic = this.randomValue(JSON.stringify(this.patronymicFemaleJson));
            return femalePatronymic;
        } else {
            const malePatronymic = this.randomValue(JSON.stringify(this.patronymicMaleJson));
            return malePatronymic;
        }
    },

    randomProfession: function () {
        let profession = this.randomValue(JSON.stringify(this.professionsJson));

        if (this.person.gender === this.GENDER_FEMALE) {
            while (['Слесарь', 'Солдат', 'Шахтёр'].includes(profession)) {
                profession = this.randomValue(JSON.stringify(this.professionsJson));
            }
        }

        return profession;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomIntNumber(1985, 2003);
        this.person.profession = this.randomProfession();
        return this.person;
    }
}