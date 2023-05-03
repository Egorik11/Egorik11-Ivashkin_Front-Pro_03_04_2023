class Person {
  constructor(name, gender) {
    (this.name = name), (this.gender = gender);
  }
}

class Apartment {
  constructor() {
    this.habitant = [];
  }
  addHabitant(person) {
    this.habitant.push(person);
  }
}

class House {
  constructor(maxApartment) {
    this.apartment = [];
    this.maxApartment = maxApartment;
  }
  addApartment(apartment) {
    this.apartment.length < this.maxApartment
      ? this.apartment.push(apartment)
      : console.log('Невозможно добавить больше квартир');
  }
}

const person1 = new Person('Yehor', 'Male');
const person2 = new Person('Anna', 'female');

const apartment1 = new Apartment();
const apartment2 = new Apartment();

const house = new House(2);

apartment1.addHabitant(person1);
apartment2.addHabitant(person2);
house.addApartment(apartment1);
house.addApartment(apartment2);
