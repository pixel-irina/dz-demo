// Создайте класс Car у которого есть марка, модель и пробег (все свойства приватные, задаются в конструкторе). 

// Сделайте для него возможность менять пробег через get и set.
// Добавьте метод info, который выводит в консоль марку, модели и пробег.

class Car {
    #brand;;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }
    get mileage() {
        return this.#mileage;
    }
    set mileage(newMileage) {
        if (newMileage >= this.#mileage) {
            this.#mileage = newMileage;
        } else {
            console.log('Пробег не может быть меньше текущего!');
        }   
    }
    info() {
        return (`Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage} км.`);
    }    
}

const myCar = new Car('Lexus','RX h550', 50000);
console. log(myCar.info());
myCar.mileage = 55000;
console.log(myCar.info());
  const element = document.getElementById('countdown');
if (element) {
    element.innerHTML = myCar.info(); 
}
   