//Сделать 5 кнопок с текстом “Нажми меня” и div, 
// где отображается число нажатий (по умолчанию 0).
// При нажатии кнопки, текст на ней меняется на “Нажата!”. У всех остальных – “Нажми меня”
// С нажатием любой кнопки счётчик увеличивается на 1.

const buttons = document.querySelectorAll('.action-btn');
        const display = document.getElementById('counter-display');
        let count = 0;

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. Увеличиваем общий счетчик
                count++;
                display.textContent = `Нажатий: ${count}`;

                // 2. Сбрасываем текст и стили у всех кнопок
                buttons.forEach(btn => {
                    btn.textContent = 'Нажми меня';
                    btn.classList.remove('active');
                });

                // 3. Выделяем только текущую кнопку
                button.textContent = 'Нажата!';
                button.classList.add('active');
            });
        });