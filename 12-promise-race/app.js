//Создать функцию race(), которая будет принимать массив Promise,
//  и возвращать первый успешно выполненный или отклоненный.

function race (promises) {
    return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Аргумент должен быть массивом'));
    }

    promises.forEach((p) => {
     
      Promise.resolve(p).then(
        (value) => {
        
          resolve(value);
        },
        (error) => {
         
          reject(error);
        }
      );
    });
  });
}