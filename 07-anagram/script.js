/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    str1 = '' || str1.toLowerCase();
    str2 = '' || str2.toLowerCase();
    let hash = {};
    if (str1 === str2) { // если строки равны - возвращается ложь
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        hash[str1[i]] = true;
    }
    for (i = 0; i < str1.length; i++) {
        if (hash.hasOwnProperty(str2[i]) ===  false) {
            return false;
        }
    }
    return true; // если все буквы есть возвращаем true
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram("up", "UP"));