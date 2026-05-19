// Сделать приложение, которое в браузере выводит
//  таймер реального времени, который показывает
//  сколько осталось до нового года в формате:
// 10 месяцев, 5 дней, 10 часов, 6 минут, 5 секунд

function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
        (number % 100 > 4 && number % 100 < 20) 
            ? 2 
            : cases[(number % 10 < 5) ? number % 10 : 5]
    ];
}

function updateTimer() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextNewYear = new Date(currentYear + 1, 0, 1, 0, 0, 0, 0);
    
    let months = nextNewYear.getMonth() - now.getMonth() + (12 * (nextNewYear.getFullYear() - now.getFullYear()));
    let days = nextNewYear.getDate() - now.getDate();
    
    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        days += previousMonth.getDate();
    }

    let hours = 23 - now.getHours();
    let minutes = 59 - now.getMinutes();
    let seconds = 59 - now.getSeconds();

    const mStr = months > 0 ? `${months} ${declOfNum(months, ['месяц', 'месяца', 'месяцев'])}, ` : '';
    const dStr = `${days} ${declOfNum(days, ['день', 'дня', 'дней'])}, `;
    const hStr = `${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])}, `;
    const minStr = `${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])}, `;
    const sStr = `${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}`;

    const element = document.getElementById('countdown');
    if (element) {
        element.innerHTML = mStr + dStr + hStr + minStr + sStr;
    }
}


updateTimer();
setInterval(updateTimer, 1000);