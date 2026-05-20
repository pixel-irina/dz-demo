// Создать базовый класс Персонажа с параметрами:
//  раса, имя, язык и метод - говорить (выводит язык и имя в консоль).

// Создать класс Орка, который наследуется от Персонажа,
//  у которого есть оружие и который имеет метод - удара.

// Создать класс Эльфа, который наследуется от Персонажа, 
// у которого есть типа заклинаний и метод – создать заклинание.

// Использовать прототипное наследование. 
// Все методы просто выводят что-то в консоль.

function Character(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function() {
   console.log(`${this.name} говорит на языке: ${this.language}.`);
};

function Orc(name, language, weapon) {
    Character.call(this, 'Орк', name, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.strike = function(){
    console.log(`${this.name} наносит удар своим ${this.weapon}.`);
}
function Elf(name, language, spellType) {
    Character.call(this, 'Эльф', name, language);
    this.spellType = spellType;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.castSpell = function(){
    console.log(`${this.name} создает заклинание типа: ${this.spellType}.`);
}

const thrall = new Orc('Тралл', 'Оркский', 'Молот Рока');
const legolas = new Elf('Леголас', 'Эльфийский', 'Магия природы');   

thrall.speak();
thrall.strike();

console.log('---');

legolas.speak();
legolas.castSpell();