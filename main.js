class Student {
  constructor(name, lastName, year) {
    (this.name = name),
      (this.lastName = lastName),
      (this.year = year),
      (this.grades = []),
      (this.attendance = new Array(25).fill(null));
  }

  present() {
    const lastIndex = this.attendance.lastIndexOf(null);
    if (lastIndex !== -1) {
      this.attendance[lastIndex] = true;
    }
  }

  absent() {
    const lastIndex = this.attendance.lastIndexOf(null);
    if (lastIndex !== -1) {
      this.attendance[lastIndex] = false;
    }
  }

  getAge() {
    const today = new Date();
    const birthDate = new Date(this.birthYear, 0, 1);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  summary() {
    const sumAvarage =
      this.grades.reduce((acc, curr) => acc + curr, 0) / this.grades.length;

    const count =
      this.attendance.filter((status) => status === true).length /
      this.attendance.length;

    if (sumAvarage >= 90 && count >= 0.9) {
      return 'Молодець!';
    } else if (sumAvarage >= 90 || count >= 0.9) {
      return 'Добре, але можна краще';
    } else {
      return 'Редиска!';
    }
  }
}

const student = new Student('Yehor', 'Ivashkin', 1998);
const student2 = new Student('Dima', 'Crish', 2008);

student.present();
student.present();
student.absent();

student2.present();
student2.absent();
student2.absent();

student.grades.push(60, 74, 45);
student2.grades.push(100, 95, 80);
