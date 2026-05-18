//Сделать функцию для настольных игр. 
// Она которая принимает тип dice,
//  который надо бросить: d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число
//  на этом интервале с включёнными границами:
//d6 - возможные значения - 1, 2, 3, 4, 5, 6

function dice(type) {
    const match = type.trim().match(/^[dD](\d+)$/);
    if (!match) {
        throw new Error(`Неверный формат кубика: "${type}". Используйте формат 'd6', 'd20' и т.д.`);
    }
    let sides = parseInt(match[1], 10 );
    return Math.floor(Math.random() * sides) + 1;
}
console.log(dice('d6'));   
console.log(dice('D20')); 
console.log(dice('d2'));
