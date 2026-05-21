// Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto

// Задание:
// Изучив принцип работы с промисами, ваша задача — улучшить код из предыдущего домашнего задания.
// В предыдущем задании вы получали информацию о покемоне, затем получали данные о его первом умении (нулевая обилика)
//  и, наконец, по ссылке из этой информации извлекали описание умения на английском языке.
// В отличие от предыдущего подхода, где использовались колбэки, сейчас необходимо реализовать этот же функционал,
//  используя цепочки промисов.
// Обратите особое внимание на обработку возможных ошибок, например, если сервер не ответит.
//  Улучшенный подход должен предусматривать корректную обработку исключительных ситуаций.

function getDittoAbilityDescriptionPromiseChain() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(pokemonResponse => {
            if (!pokemonResponse.ok) {
                throw new Error(`Ошибка при запросе покемона: ${pokemonResponse.status}`);
            }
            return pokemonResponse.json();
        })
        .then(pokemonData => {
            const firstAbilityUrl = pokemonData.abilities[0].ability.url;
            const abilityName = pokemonData.abilities[0].ability.name;
            console.log(`Первая способность Ditto: "${abilityName}". Запрашиваем детали...`);
            
           
            return fetch(firstAbilityUrl);
        })
        .then(abilityResponse => {
            if (!abilityResponse.ok) {
                throw new Error(`Ошибка при запросе способности: ${abilityResponse.status}`);
            }
            return abilityResponse.json();
        })
        .then(abilityData => {
            
            const entries = abilityData.effect_entries || [];
            const englishEntry = entries.find(entry => entry.language.name === 'en');

            if (englishEntry) {
                console.log('\n--- Описание на английском ---');
                console.log(englishEntry.effect);
            } else {
                console.log('Описание на английском языке не найдено.');
            }
        })
        .catch(error => {
         
            console.error('Произошла ошибка во время выполнения запросов:', error.message);
        });
}