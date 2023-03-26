export default class Todo {
  constructor() {
    this.todos = [];
  }

  add(data) {
    this.todos.push(data);
  }

  remove(index) {
    this.todos.splice(index, 1);
  }

  get() {
    return this.todos;
  }
}
