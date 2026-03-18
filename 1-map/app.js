'use strict'
/*Сделать с помощью Set уникализацию массива объектов:

[
{ id: 1, name: “Вася” },
{ id: 2, name: “Петя” },
{ id: 1, name: “Вася” },
]
Подсказка: вам может понадобиться map и find*/

const users = [
{ id: 1, name: 'Вася' },
{ id: 2, name: 'Петя' },
{ id: 1, name: 'Вася' },
];
const uniqueId = [... new Set(users.map(obj => obj.id)) ];
const result = uniqueId.map(id => users.find(obj => obj.id === id));
console.log(result);