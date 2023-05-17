class Hamburger {
  constructor(size, staffing){
    this.size = size,
    this.staffing = staffing,
    this.topping = [];
  }

  addTopping(topping){
    this.topping.push(topping)
  }
}