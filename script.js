function createTask() {
    const buttonCreateTask = document.getElementById('criar-tarefa');
    buttonCreateTask.addEventListener('click', NewTask);
    function NewTask() {
        const inputValue = document.getElementById('texto-tarefa').value;
        const list = document.getElementById('lista-tarefas');
        let input = document.getElementById('texto-tarefa');
        let tasks = document.createElement('li');
        list.appendChild(tasks);
        tasks.innerText = inputValue;
        input.value = '';
        tasks.addEventListener('click', mudaCor)
        function mudaCor () {
            tasks=document.getElementsByTagName('li');
            for (let task of tasks){
                task.style.backgroundColor="rgb(128, 128, 128)"
            }
        }
}
}
createTask();       