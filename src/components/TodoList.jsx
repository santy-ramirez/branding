
import React from 'react';
import './TodoList.css'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
     

        {this.props.items.map(item => (
        
          <li key={item.id}>{item.text}</li>
        ))}
         <li>primera tarea</li>
         <li>segunda tarea</li>
         <li>tercera tarea</li>
         <li>cuarta tarea</li>


      </ul>
    );
  }
}

export default TodoList;