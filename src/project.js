class Project{
  constructor(name) {
    this.name = name;
  }
}

class Todo{
  constructor(title, description, priority = 'Low'){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.time = new Date().toLocaleString();
  }
  renderTodo() {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-item');

    const title = document.createElement('h2');
    title.textContent = this.title;

    const description = document.createElement('p');
    description.textContent = this.description;

    const priority = document.createElement('span');
    priority.textContent = `Priority : ${this.priority}`;

    const date = document.createElement('span');
    date.textContent = `  | Added on: ${this.time}`;

    todoContainer.appendChild(title, description, priority, date)
  }
}

export { Todo, Project };
