function createTask() {
    const buttonCreateTask = document.getElementById('criar-tarefa');
    buttonCreateTask.addEventListener('click', NewTask);
    function NewTask() {
        const inputValue = document.getElementById('texto-tarefa').value;
        const list = document.getElementById('lista-tarefas');
        let input = document.getElementById('texto-tarefa');
        let task = document.createElement('li');
        list.appendChild(task);
        task.innerText = inputValue;
        input.value = '';
        task.addEventListener('click', mudaCor)
        function mudaCor(event) {
            const tasks = document.getElementsByTagName('li');
            for(let task of tasks){
                task.style.backgroundColor=null;
            }
            event.target.style.backgroundColor='rgb(128, 128, 128)';
        }
    }
}

createTask();       