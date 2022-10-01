//усложненное задание
let number = 266219; //создать переменную

let array = ("" + number).split("").map(Number); //получить массив
console.log(array);

const res = array.reduce((acc, rec) => acc * rec); //перемножить цифры в массиве
console.log(res);

let q = res ** 3; //возвести в степень
console.log(q);

let w = String(q).slice(0, 2); //вывести первые 2 цифры
console.log(w);