/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    str = str || '';
    let arrayOfWords = str.split(/ {1,}/);
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1].match(/[^а-яА-Яa-zA-Zеё]{1}/)) { //не знаю работает ли матч быстро
            result+= str[i].toUpperCase();
        } else {
            result+= str[i];
        }
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"