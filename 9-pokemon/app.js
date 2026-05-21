// Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto

// После получения, получите информацию о первой его ablility по ссылке,
//  которая приходит при первом запросе. Там найдите описание на английском
//   и выведите в консоль:

async function getDittoAbilityDescription() {
    try {
        
        const pokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        
        if (!pokemonResponse.ok) {
            throw new Error(`Ошибка при запросе покемона: ${pokemonResponse.status}`);
        }
        
        const pokemonData = await pokemonResponse.json();

       
        const firstAbilityUrl = pokemonData.abilities[0].ability.url;
        const abilityName = pokemonData.abilities[0].ability.name;
        
        console.log(`Первая способность Ditto: "${abilityName}". Запрашиваем детали...`);

      
        const abilityResponse = await fetch(firstAbilityUrl);
        
        if (!abilityResponse.ok) {
            throw new Error(`Ошибка при запросе способности: ${abilityResponse.status}`);
        }
        
        const abilityData = await abilityResponse.json();

      
        const englishEntry = abilityData.effect_entries.find(
            entry => entry.language.name === 'en'
        );

       
        if (englishEntry) {
            console.log('\n--- Описание на английском ---');
            console.log(englishEntry.effect);
        } else {
            console.log('Описание на английском языке не найдено.');
        }

    } catch (error) {
        console.error('Произошла ошибка во время выполнения запросов:', error.message);
    }
}


getDittoAbilityDescription();
