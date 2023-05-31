// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const evenOddPrinter = (maxValue) => {
    const strZero = 'это ноль'
    const strEven = 'четное число'
    const strOdd = 'нечетное число'
    for (let i = 0; i < maxValue; i++) {
        if (i === 0) {
            console.log(i + ' - ' + strZero)
        } else if (i % 2 !== 0) {
            console.log(i + ' - ' + strOdd)
        } else {
            console.log(i + ' - ' + strEven)
        }
    }
}

evenOddPrinter(11)


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arraySplicer = (array, index, length) => {
    array.splice(index, length)
    return array
}

console.log(('Spliced aray is: ' + arraySplicer([1, 2, 3, 4, 5, 6, 7], 3, 2)))


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const randomizer = (min, max) => Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min))

const arrayCreater = (length, min, max) => {
    const array = []
    for (let i = 0; i < length; i++) {
        array[i] = randomizer(min, max)
    }
    return array
}


const sumElemArray = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i])
    }
    return sum
}

const minNumberArray = (array) => {
    let min = Number(array[0])
    for (let i = 1; i < array.length; i++) {
        if (Number(array[i]) < min) {
            min = Number(array[i])
        }
    }
    return min
}

const isNumberThreeArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) === 3) {
            return true
        }
    }
    return false
}

const newArr = arrayCreater(5, 0, 10)
console.log('New array: ' + newArr)
const sumArray = sumElemArray(newArr)
const minNum = minNumberArray(newArr)
const isNumberThree = isNumberThreeArray(newArr)
console.log(`Summa of array elements: ${sumArray};
Min element is: ${minNum};
Is there number 3: ${isNumberThree}`)


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

const starTrianglePrinter = (number) => {
    const array = []
    for (let i = 0; i < number; i++) {
        array[i] = '*'.repeat(i + 1)
    }
    return array
}

const arrayStar = starTrianglePrinter(20)
arrayStar.forEach(element => {
    console.log(element)
})