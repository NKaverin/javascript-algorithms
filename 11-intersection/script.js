/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    let hash = {};
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = 1;
    }
    for (i = 0; i < arr2.length; i++) {
        if (hash.hasOwnProperty(arr2[i]) ===  true && hash[arr2[i]] === 1) {
            result.push(arr2[i]);
            hash[arr2[i]] = 2;
        }
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []