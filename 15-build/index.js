import Task from './task';
import User from './user';

const myTask = new Task ('Задача успешно выполнена!');

const myUser = new User(myTask);

myUser.do();