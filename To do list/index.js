const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = taskText;

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});