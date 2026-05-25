//Сделайте функцию получения координат пользователя,
//  использую Geolocation API, но преобразовав его в Promise.

function getUserLocation() {
    return new Promise((resolve, reject) => {
        if(!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by your browser'));
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position.coords);
        },
        (error) => {
            reject(error);
         },
         {enableHighAccuracy: true,
          timeout: 5000}
        );
    });
}
getUserLocation()
.then(coords => {
    console.log(`Ваши координаты: Широта ${coords.latitude}, Долгота ${coords.longitude}`);
})
.catch(error => {
    console.error('Ошибка при получении координат:', error);
})
.finally(()=> {
    console.log('Попытка получения координат завершена.');
})
