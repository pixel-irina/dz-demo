//Сделать функцию валидации возраста. 
// На вход передаётся строка даты рождения пользователя вида “2022-01-01”.

//Необходимо вывести true, если ему больше 14 лет и false, если меньше

function validateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    if (isNaN(birthDate.getTime())) {
        throw new Error("Некорректный формат даты. Используйте ГГГГ-ММ-ДД.");
    }

    if (birthDate > today) {
        throw new Error("Дата рождения не может быть в будущем.");
    }
    const maxAge = 120;
    if (today.getFullYear() - birthDate.getFullYear() > maxAge) {
        throw new Error(`Возраст не может превышать ${maxAge} лет.`);
    } else{
        let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 14;    
    }
    
}
console.log(validateAge("2000-01-01")); 
console.log(validateAge("2010-01-01")); 