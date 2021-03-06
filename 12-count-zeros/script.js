/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(n) {
    let count = 0;
    let str = '';
    //наверняка должно быть какое-то алгоритмическое решение, это кажется совсем некрасивым
    for (let i = 9; i <= n; i++) {
        str = i.toString();
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '0') {
                count++;
            }
        }
    }
    return count;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(342)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100