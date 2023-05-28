// Урок 6. Семинар. Знакомство с функциями в JavaScript
// Задание 1 
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const numToCube = (param) => param * param * param
const numSum = (param1, param2) => param1 + param2

console.log(numSum(numToCube(2), numToCube(3)))


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const getSalaryAmount = () => {
    let salary = Number(prompt('Введите вашу зарплату'))
    if (isNaN(salary)) {
        console.log('значение задано неверно')
        return
    }
    const tax = 0.13
    let salaryFree = salary * (1 - tax)
    console.log(`Размер заработной платы за вычетом налогов равен: ${salaryFree}р`)
}

getSalaryAmount()


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const maxOfThreeNums = (num1, num2, num3) => {
    let maxi = num1
    if (num2 > maxi) {
        maxi = num2
    }
    if (num3 > maxi) {
        maxi = num3
    }
    return maxi
}

let num1 = Number(prompt('Enter first number'))
let num2 = Number(prompt('Enter second number'))
let num3 = Number(prompt('Enter third number'))
console.log('Maximum number is ' + maxOfThreeNums(num1, num2, num3))


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sumOfTwoNum = (a, b) => Number(a) + Number(b)
const diffOfTwoNum = (a, b) => {
    return (Number(a) > Number(b) ? Number(a) - Number(b) : Number(b) - Number(a))
}
const multOfTwoNum = (a, b) => Number(a) * Number(b)
const divOfTwoNum = (a, b) => Number(a) / Number(b)

console.log('Sum is ' + sumOfTwoNum(2, 6))
console.log('Difference is ' + diffOfTwoNum(2, 6))
console.log('Multiplication is ' + multOfTwoNum(2, 6))
console.log('Division is ' + divOfTwoNum(2, 6))