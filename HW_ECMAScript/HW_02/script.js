// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title(название) - строка, название книги.
// Свойство author(автор) - строка, имя автора книги.
// Свойство pages(количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге(название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }

    displayInfo() {
        console.log(`Название книги: ${this.title}, автор: ${this.author}, количество страниц: ${this.pages}.`)
    }
}

// Создание экземпляра класса
const book1 = new Book('Великий Гетсби', 'Фрэнсис Скотт Фицджеральд', '357')

// Доступ к свойствам объекта
console.log(book1.title) // Вывод: Великий Гетсби
console.log(book1.author) // Вывод: Фрэнсис Скотт Фицджеральд
console.log(book1.pages) // Вывод: 357

// Вызов методов объекта
book1.displayInfo() // Вывод: Название книги: Великий Гетсби, автор: Фрэнсис Скотт Фицджеральд, количесвто страниц: 357.



//     Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name(имя) - строка, имя студента.
// Свойство age(возраст) - число, возраст студента.
// Свойство grade(класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте(имя, возраст и класс).
//     javascript

class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
    }

    displayInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`)
    }
}

// Создание экземпляра класса
const student1 = new Student('John Smith', 16, '10th grade')
const student2 = new Student('Jane Doe', 17, '11th grade')

// Доступ к свойствам объекта
console.log(student1.name)
console.log(student1.age)
console.log(student1.grade)

console.log(student2.name)
console.log(student2.age)
console.log(student2.grade)

// Вызов методов объекта
student1.displayInfo()
student2.displayInfo()


// ****** Задача необязательная для выполнения:
// Это расширенная версия задачи с банком, которую мы решлали на семинаре:
// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов.Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.
// Пример работы:
// const bank = new Bank("Мой Банк")
// const client1 = new Client("Иван", 25)
// const client2 = new Client("Мария", 30)
// bank.addClient(client1)
// bank.addClient(client2)
// bank.openAccount(client1, 1000)
// bank.openAccount(client2, 500)
// bank.deposit(123456789, 200)
// bank.withdraw(987654321, 100)
// bank.checkBalance(123456789)
// bank.checkBalance(987654321)

class Client {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Bank {
    // static bankName = "Sber" // Статическое свойство bankName
    static listOfClients = []

    constructor(bankName) {
        this.bankName = bankName
        this.clients = []
        this.accounts = []
    }

    addClient(client) {
        this.clients.push(client)
    }

    openAccount(client, initialBalance = 0) {
        if (this.clients.includes(client)) {
            const account = new Account(client, initialBalance)
            this.accounts.push(account)
        } else {
            console.log("Client not found")
        }
    }

    deposit(accountNumber, amount) {
        const account = this.findAccount(accountNumber)
        if (account) {
            account.deposit(amount)
        } else {
            console.log("Account not found")
        }
    }

    withdraw(accountNumber, amount) {
        const account = this.findAccount(accountNumber)
        if (account) {
            account.withdraw(amount)
        } else {
            console.log("Account not found")
        }
    }

    checkBalance(accountNumber) {
        const account = this.findAccount(accountNumber)
        if (account) {
            console.log(account.balance)
        } else {
            console.log("Счет не найден.")
        }
    }

    findAccount(accountNumber) {
        return this.accounts.find(account => account.accountNumber === accountNumber)
    }
}

class Account {
    static accountCounter = 0

    constructor(client, initialBalance) {
        this.client = client
        this.balance = initialBalance
        this.accountNumber = Account.generateAccountNumber()
    }

    static generateAccountNumber() {
        return ++Account.accountCounter
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
        } else {
            console.log("Недостаточно средств на счете.")
        }
    }
}

const bank = new Bank("Мой Банк")
const client1 = new Client("Иван", 25)
const client2 = new Client("Мария", 30)
bank.addClient(client1)
bank.addClient(client2)
bank.openAccount(client1, 1000)
bank.openAccount(client2, 500)
bank.deposit(123456789, 200)
bank.withdraw(987654321, 100)
bank.checkBalance(123456789)
bank.checkBalance(987654321)