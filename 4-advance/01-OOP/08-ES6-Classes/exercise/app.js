// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class

class Hero{
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet () {
    return `hi there ${this.name} of level ${this.level}, of the autobots`
  }
}
const transformer = new Hero('Optimus','')
console.log(transformer)
console.log(transformer.greet())

class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}
const decepticons = new Mega("Megatron", "predacons", "Peace through tyranny.");
console.log(decepticons)
console.log(decepticons.greet())