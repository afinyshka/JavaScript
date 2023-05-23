/*Урок 2. Семинар
Задание 1
Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту. 
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах.*/

const tCelcius = 24.2
const tFaringeit = (9 / 5) * tCelcius + 32
console.log(`Temperature: ${tCelcius}°C or ${tFaringeit}F`)

/*Задание 2
Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.*/

const myName = 'Maria'
const admin = myName
console.log(admin)



/*Урок 4. Семинар. Основы JavaScript
Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.*/

const num1 = Number(prompt('Enter first number: '))
const num2 = Number(prompt('Enter second number: '))
// if (num1 <= 1 && num2 >= 3) {
//     console.log('Numbers are valid!')
// } else {
//     console.log('Numbers are invalid!')
// }
console.log(num1 <= 1 && num2 >= 3 ? 'Numbers are valid!' : 'Numbers are invalid!')

/*Задание 2
Перепишите код к тернарному оператору*/

let test = true;
// if (test === true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }
console.log(test === true ? '+++' : '---')

/*Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/

let day = 13
if (day >= 1 && day <= 10) {
    console.log(`The ${day} is in the 1-st decade`)
} else if (day <= 20) {
    console.log(`The ${day} is in the 2-nd decade`)
} else if (day >= 21 && day <= 31) {
    console.log(`The ${day} is in the 3-rd decade`)
}

/*Задание 4
Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
(Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)*/

/*Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.*/

let myNumy = Number(prompt('Give me a number'))
console.log(`Состав числа ${myNumy}: `)
myNumy = Math.abs(myNumy)
let counter = 1
while (myNumy >= 1) {
    console.log(`${myNumy % 10} x ${counter}`)
    myNumy = Math.floor(myNumy / 10)
    counter = counter * 10
}

/*Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"*/

/*Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"*/

/*Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"*/

let myNum = Number(prompt('Give me a number'))
let myHunderts = Math.floor(Math.abs(myNum) / 100) % 10
let myTens = Math.floor(Math.abs(myNum) / 10) % 10
let myOnes = Math.abs(myNum) % 10
console.log(`В числе ${myNum} количество сотен: ${myHunderts}, десятков: ${myTens}, единиц: ${myOnes}`)

