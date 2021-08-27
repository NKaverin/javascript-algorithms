/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    num = num || 0;
    result = [];
    if (num <= 1) {
        return [];
    }
    if (num >= 2) {
        result.push(2);
    }
    let isPrime = true;
    for (let i = 3; i <= num; i++) {
        isPrime = true;
        for (let j = 2; j <= Math.floor(i / 2); j++) {
            if (i % j == 0)  {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(i);
        }
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]