// Car constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Car prototype method
  Car.prototype.getDescription = function() {
    return `${this.make} ${this.model} (${this.year})`;
  };
  
  // ElectricCar subclass
  function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
  }
  
  // Inherit from Car prototype
  ElectricCar.prototype = Object.create(Car.prototype);
  
  // ElectricCar prototype method override
  ElectricCar.prototype.getDescription = function() {
    return `${this.make} ${this.model} (${this.year}) - Range: ${this.range} miles`;
  };
  
  // Create an instance of ElectricCar
  const myCar = new ElectricCar("Tesla", "Model S", 2019, 300);
  
  // Call the getDescription method on the instance
  console.log(myCar.getDescription());