const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function displayTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
  });
}

function addTask(description) {
  tasks.push({ description, completed: false });
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
  }
}

function processCommand(command) {
  const parts = command.split(' ');
  const action = parts[0].toLowerCase();

  if (action === 'add') {
    const description = parts.slice(1).join(' ');
    addTask(description);
  } else if (action === 'remove') {
    const index = parseInt(parts[1]) - 1;
    removeTask(index);
  } else if (action === 'complete') {
    const index = parseInt(parts[1]) - 1;
    completeTask(index);
  }

  displayTasks();
}

console.log('¡Bienvenido a la Lista de Tareas!');

rl.on('line', (input) => {
  processCommand(input);
  rl.prompt();
});

rl.prompt();

