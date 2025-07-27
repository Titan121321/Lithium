const avatar = document.getElementById('avatar');
const taskModal = document.getElementById('taskModal');
const taskList = document.getElementById('taskList');
const enemyImagesContainer = document.getElementById('enemyImages');
const taskSystem = document.getElementById('taskSystem');

const checkpointPositions = ['90%', '75%', '60%', '45%', '30%', '15%'];
const maxTasks = 6;

let tasks = [];
let currentTaskIndex = 0;

// ⬇️ Get previous score from localStorage or start from 0
let points = parseInt(localStorage.getItem('userScore')) || 0;

const enemies = {
  light: 'Assets/goblin.jpg',
  medium: 'Assets/great enemy.jpg',
  heavy: 'Assets/legend.jpg'
};

const fellImageMap = {
  light: document.getElementById('enemyFellLight'),
  medium: document.getElementById('enemyFellMedium'),
  heavy: document.getElementById('enemyFellHeavy')
};

window.onload = () => {
  avatar.style.top = '90%';
  avatar.style.left = '50%';
  taskModal.style.display = 'flex';
};

function addTask() {
  const name = document.getElementById('taskName').value.trim();
  const priority = document.getElementById('taskPriority').value;

  if (tasks.length >= maxTasks) return;

  tasks.push({ name: name || `Task ${tasks.length + 1}`, priority, completed: false });
  document.getElementById('taskName').value = '';
}

function finishTasks() {
  if (tasks.length === 0) return;

  taskModal.style.display = 'none';
  taskSystem.style.display = 'block';

  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = () => completeTask(index);

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(` ${task.name} (${task.priority})`));
    taskList.appendChild(li);

    const img = document.createElement('img');
    img.src = enemies[task.priority];
    img.className = 'enemy';
    img.style.position = 'absolute';
    img.style.top = checkpointPositions[index];
    img.style.left = (index % 2 === 0) ? '30%' : '70%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.zIndex = 1;
    enemyImagesContainer.appendChild(img);
  });

  // Start 1-minute countdown
  setTimeout(() => {
    tasks.forEach(task => {
      if (!task.completed) {
        if (task.priority === 'light') points -= 2;
        else if (task.priority === 'medium') points -= 3;
        else if (task.priority === 'heavy') points -= 5;
      }
    });
    localStorage.setItem('userScore', points);
    window.location.href = 'score.html';
  }, 60000);
}

function completeTask(index) {
  if (index !== currentTaskIndex) return;

  const task = tasks[index];
  const cpTop = checkpointPositions[currentTaskIndex];
  avatar.style.top = cpTop;

  const imageToShow = fellImageMap[task.priority];
  if (!imageToShow) return;

  imageToShow.style.display = 'block';
  setTimeout(() => {
    imageToShow.style.display = 'none';
    currentTaskIndex++;
    task.completed = true;

    // Add points
    if (task.priority === 'light') points += 2;
    else if (task.priority === 'medium') points += 3;
    else if (task.priority === 'heavy') points += 5;

    if (currentTaskIndex >= tasks.length) {
      localStorage.setItem('userScore', points);
      window.location.href = "score.html";
    }
  }, 1000);
}
