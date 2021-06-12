function createTask() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  buttonCreateTask.addEventListener('click', NewTask);
}

function NewTask() {
  const inputValue = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  let task = document.createElement('li');
  list.appendChild(task);
  task.innerText = inputValue;
  input.value = '';
  task.addEventListener('click', mudaCor);
  task.addEventListener('dblclick', riscaTask);
}

function mudaCor(event) {
  const tasks = document.getElementsByTagName('li');
  for (let task of tasks) {
    task.style.backgroundColor = null;
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

createTask();

function riscaTask(event){
    if (event.target.classList.contains('completed')){
        event.target.classList.remove('completed');
        event.target.style.textDecoration= null;
    } else {
        event.target.classList.add('completed');
        event.target.style.textDecoration='line-through';
    }
}