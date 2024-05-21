import React from 'react';
import { useSelector } from 'react-redux';

function Todos() {
  const todos = useSelector(state => state.todos);
  //console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
