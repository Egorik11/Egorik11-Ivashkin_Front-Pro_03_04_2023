let currentYear = 2023;
const yearOfBirth = +prompt('Введите год рождения');
const city = prompt('В каком городе живёте?');
const favoriteSport = prompt('Какой любимый вид спорта?');
const age = currentYear - yearOfBirth;

const sportSelebrity = {
  football: 'Cristiano Ronaldo',
  box: 'Vitaliy Klichko',
  basketball: 'Michael Jordan',
};

let showAnswer1 = `Тобі ${age} років; `;

switch (city) {
  case 'Київ':
    showAnswer1 += 'Ти живеш у столиці України;';
    break;
  case 'Вашингтон':
    showAnswer1 += 'Ти живеш у столиці Споучених Штатах Америки;';
    break;
  case 'Лондон':
    showAnswer1 += 'Ти живеш у столиці Англії;';
    break;

  default:
    showAnswer1 += `Ти живеш у місті ${city};`;
    break;
}

let showAnswer2 = ``;

if (sportSelebrity[favoriteSport]) {
  showAnswer2 += `Круто! Хочеш стати ${sportSelebrity[favoriteSport]}?; `;
}

if (!yearOfBirth) {
  showAnswer2 += ` Шкода, що Ви не захотіли ввести свій рік народження;`;
} else if (!city) {
  showAnswer2 += ` Шкода, що Ви не захотіли ввести своє місто;`;
} else if (!favoriteSport) {
  showAnswer2 += ` Шкода, що Ви не захотіли ввести улюблений вид спорту;`;
}

alert(showAnswer1);
alert(showAnswer2);
