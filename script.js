// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task">Excluir</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function deleteTask(event) {
        if (event.target.classList.contains('delete-task')) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    }

    function toggleTheme() {
        body.classList.toggle('dark-mode');
    }

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);
    themeToggleButton.addEventListener('click', toggleTheme);
});
