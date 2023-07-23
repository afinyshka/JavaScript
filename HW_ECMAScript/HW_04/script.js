// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

document.addEventListener('DOMContentLoaded', function () {
    const app = document.querySelector('#app')
    const userList = document.createElement('ul')

    app.appendChild(userList)

    // Получение списка пользователей с API и добавление их на страницу
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const users = data
            users.forEach(user => {
                const userListItem = document.createElement('li')
                userListItem.textContent = `${user.name} (${user.email})`

                const deleteButton = document.createElement('button')
                deleteButton.textContent = 'Удалить'
                deleteButton.addEventListener('click', function () {
                    deleteUser(user.id)
                })

                userListItem.appendChild(deleteButton)
                userList.appendChild(userListItem)
            })

            // Сохраняем список пользователей в локальное хранилище
            localStorage.setItem('users', JSON.stringify(users))
        })
        .catch(error => console.error('Ошибка получения пользователей:', error))

    function deleteUser(userId) {
        // Удаляем пользователя из списка
        const users = JSON.parse(localStorage.getItem('users'))
        const updatedUsers = users.filter(user => user.id !== userId)
        localStorage.setItem('users', JSON.stringify(updatedUsers))

        // Обновляем список пользователей на странице
        while (userList.firstChild) {
            userList.removeChild(userList.firstChild)
        }

        updatedUsers.forEach(user => {
            const userListItem = document.createElement('li')
            userListItem.textContent = `${user.name} (${user.email})`

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Удалить'
            deleteButton.addEventListener('click', function () {
                deleteUser(user.id)
            })

            userListItem.appendChild(deleteButton)
            userList.appendChild(userListItem)
        })
    }
})
