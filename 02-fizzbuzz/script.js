/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    num = num || 0;
    let threeCount = 0;
    let fiveCount = 0;
    for (let i = 1; i <= num; i++) {
        threeCount += 1;        
        fiveCount += 1;
        if ((threeCount === 3) && (fiveCount === 5)) {
            console.log('fizzbuzz');
            threeCount = 0;
            fiveCount = 0;
        } else if (threeCount === 3) {
            console.log('fizz');
            threeCount = 0;
        } else if (fiveCount === 5) {
            console.log('buzz');
            fiveCount = 0;
        } else {
            console.log(i);
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(30));