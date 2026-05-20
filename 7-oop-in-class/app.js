// Научиться преобразовывать прототипы персонажей (Орк и Эльф) в классы
//  с использованием синтаксиса ES6 и освоить принципы преопределения методов.

// Шаги Реализации:
// Создание Базового Класса "Персонаж":
// Параметры класса: Раса, Имя, Язык.
// Метод: Говорить (можно сделать приватным на ваше усмотрение).
// Наследование и Расширение Класса "Персонаж":
// Создание класса "Орк":
// Новый параметр: Оружие.
// Новый метод: Удар.
// Преопределить метод Говорить специфично для Орка.
// Создание класса "Эльф":
// Новый параметр: Заклинание.
// Новый метод: Создать Заклинание.
// Преопределить метод Говорить специфично для Эльфа.
// Применение Синтаксиса ES6:
// Использование классов ES6 для реализации наследования и расширения функциональности базового класса "Персонаж".
class Character {
    constructor(race, name, language){
        this.race = race;
        this.name = name;
        this.language = language;
    }
    speak() {
        console.log(`${this.name} говорит на языке: ${this.language}.`);    }
} 



class Orc extends Character {
    constructor(name, language, weapon) {
        super('Орк', name, language);
        this.weapon = weapon;
    }
    speak() {
        console.log(`[Боевой клич] ${this.name} яростно рычит на языке ${this.language}: "За Орду!"`);
    }
    strike(){
        console.log(`${this.name} наносит удар своим ${this.weapon}.`);
    }
}

 class Elf extends Character {
    constructor(name, language, spellType) {
        super('Эльф', name, language);
        this.spellType = spellType;
    }
    speak() {
        console.log(`[Мелодичное приветствие] ${this.name} плавно произносит на языке ${this.language}: "Приветствую тебя, путник".`);
    }
    castSpell() {
        console.log(`${this.name} создает заклинание типа: ${this.spellType}.`);
    }
}



const thrall = new Orc('Тралл', 'Оркский', 'Молот Рока');
const legolas = new Elf('Леголас', 'Эльфийский', 'Магия природы');   

thrall.speak();
thrall.strike();

console.log('---');

legolas.speak();
legolas.castSpell();