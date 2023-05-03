class Human {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  showInfo() {
    return `Name: ${this.name}, age: ${this.age}`;
  }
}

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.carOwner = null;
  }

  addOwner(owner) {
    owner.age >= 18 ? (this.carOwner = owner) : console.log('Возраст менее 18');
  }

  showInfo() {
    console.log(
      `Марка ${this.brand}, модель ${this.model}, год выпуска ${this.year}, владельцев авто ${this.carOwner}`
    );

    this.carOwner
      ? `Owner ${this.carOwner}`
      : console.log('На данный момент нет владельца');
  }
}

const person1 = new Human('Yehor', 30);
const person2 = new Human('Alina', 22);

const car1 = new Car('Mazda', '6', 2006, 'BE1498EP');
const car2 = new Car('Honda', 'Accord', 2020, 'AX0000ВМ');
const car3 = new Car('Honda', 'CX9', 2020, 'ВВ1414ВА');

car1.addOwner(person1);
car2.addOwner(person2);
car3.addOwner(new Human('Maks', 17));

car1.showInfo();
