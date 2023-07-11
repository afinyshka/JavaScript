// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9]
const minNum = Math.min(...arr)
console.log(minNum)

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0
    return {
        increment: function () {
            ++count
        },
        decrement: function () {
            --count
        },
        getCount: function () {
            return count
        }
    }
}

const counter1 = createCounter()
counter1.increment()
counter1.increment()
counter1.increment()
console.log('increment: ' + counter1.getCount()) // 3
counter1.decrement()
console.log('decrement: ' + counter1.getCount()) // 2


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


function findElementByClass(rootElem, className) {
    if (rootElem.classList.contains(className)) {
        return rootElem
    }
    for (let i = 0; i < rootElem.children.length; i++) {
        const rootElemChild = findElementByClass(rootElem.children[i], className)
        if (rootElemChild) {
            return rootElemChild
        }
    }
    return null
}

const rootElement = document.querySelector('.content-box')
const targetElement = findElementByClass(rootElement, 'shipping__form')
console.log(targetElement)