import React from 'react';
import TodoList from './TodoList'
import './TodoApp.css'



class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Tareas pendientes</h3>
      
        <form onSubmit={this.handleSubmit}>
          <div><label htmlFor="new-todo">
            ¿Qué se necesita hacer?
          </label>
          </div>
          <input
          placeholder="intruduce tu tarea"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Añadir #{this.state.items.length + 1}
          </button>
        </form>
          <TodoList items={this.state.items} />

      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}
export default TodoApp;

