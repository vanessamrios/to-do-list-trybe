function createTask() {
    const buttonCreateTask = document.getElementById('criar-tarefa');
    buttonCreateTask.addEventListener('click', NewTask);
    function NewTask() {
        const inputValue = document.getElementById('texto-tarefa').value;
        const list = document.getElementById('lista-tarefas');
        let input = document.getElementById('texto-tarefa');
        const task = document.createElement('li');
        list.appendChild(task);
        task.innerText = inputValue;
        input.value = '';
        }
    }
createTask()