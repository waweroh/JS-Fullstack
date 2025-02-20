// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

function createVehicle (type,brand,model,year ) {
  return {type, brand, model, year, intro () {
    return `The ${this.type} ${this.brand} ${this.model} ${this.year} is among our premium cars`
  },};
};

const vehicle1 = createVehicle('Car', 'Honda','civic','2015')
const vehicle2 = createVehicle('bike', 'kawasaki','rh5054','2014')

console.log(vehicle1) // return the object
console.log(vehicle2) // return the object
console.log (vehicle1.intro()) //The Car Honda civic 2015 is among our premium cars
console.log (vehicle2.intro()) //The bike kawasaki rh5054 2014 is among our premium cars