// Parent Class: Car
class Car {
    constructor(name, brand, model, type, color, weight, age) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
    }

    displayInfo() {
        console.log(`Car Info: ${this.name} - ${this.color} ${this.brand} ${this.model}`);
        document.write(`<p>Car Info: ${this.name} - ${this.color} ${this.brand} ${this.model}</p>`);
    }
}

// Child Class: Motorbike
class Motorbike extends Car {
    constructor(name, brand, model, type, color, weight, age, numberOfWheels) {
        super(name, brand, model, type, color, weight, age);
        this.numberOfWheels = numberOfWheels;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Motorbike Info: ${this.name} has ${this.numberOfWheels} wheels.`);
        document.write(`<p>Motorbike Info: ${this.name} has ${this.numberOfWheels} wheels.</p>`);
    }
}

// Parent Class: Animal
class Animal {
    constructor(name, type, color, weight, age) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
    }

    makeSound() {
        console.log(`Animal Sound: Roar! ${this.name} is a ${this.color} ${this.type}.`);
        document.write(`<p>Animal Sound: Roar! ${this.name} is a ${this.color} ${this.type}.</p>`);
    }
}

// Child Class: Fish
class Fish extends Animal {
    constructor(name, type, color, weight, age, waterType) {
        super(name, type, color, weight, age);
        this.waterType = waterType;
    }

    makeSound() {
        super.makeSound();
        console.log(`Fish Info: ${this.name} inhabits ${this.waterType} water.`);
        document.write(`<p>Fish Info: ${this.name} inhabits ${this.waterType} water.</p>`);
    }
}

// Parent Class: Person
class Person {
    constructor(name, type, age, gender) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`Person Introduction: Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}.`);
        document.write(`<p>Person Introduction: Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}.</p>`);
    }
}

// Child Class: Profession
class Profession extends Person {
    constructor(name, type, age, gender, jobPosition) {
        super(name, type, age, gender);
        this.jobPosition = jobPosition;
    }

    introduce() {
        super.introduce();
        console.log(`Profession Info: I work as a ${this.jobPosition}.`);
        document.write(`<p>Profession Info: I work as a ${this.jobPosition}.</p>`);
    }
}

// Create Motorbike objects
const motorbike1 = new Motorbike("Motorbike1", "Harley Davidson", "Street 750", "Cruiser", "Black", 300, 2, 2);
const motorbike2 = new Motorbike("Motorbike2", "Honda", "CBR600RR", "Sportbike", "Red", 200, 1, 2);
const motorbike3 = new Motorbike("Motorbike3", "Yamaha", "MT-09", "Naked Bike", "Blue", 250, 3, 2);

// Create Fish objects
const goldfish = new Fish("Goldfish1", "Goldfish", "Orange", 0.1, 1, "Freshwater");
const clownfish = new Fish("Clownfish1", "Clownfish", "Orange", 0.2, 2, "Saltwater");
const bettaFish = new Fish("BettaFish1", "Betta Fish", "Blue", 0.15, 1, "Freshwater");

// Create Profession objects
const professional1 = new Profession("John", "Human", 28, "Male", "Software Engineer");
const professional2 = new Profession("Anna", "Human", 35, "Female", "Marketing Manager");
const professional3 = new Profession("Darel", "Human", 22, "Male", "Graphic Designer");

// Call methods to display information
motorbike1.displayInfo();
motorbike2.displayInfo();
motorbike3.displayInfo();

goldfish.makeSound();
clownfish.makeSound();
bettaFish.makeSound();

professional1.introduce();
professional2.introduce();
professional3.introduce();