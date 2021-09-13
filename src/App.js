import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';
// import './App.css';

const todos = [
  { text: 'Compras de ferreteria', completed: false },
  { text: 'Tomar el curso de webcomponents', completed: false },
  { text: 'Buscar departamento', completed: false },
  { text: 'Compras del supermercado', completed: false },
  { text: 'Reservar clase tenis', completed: false },
  { text: 'Pagar servicios', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoTitle />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>    
  );
}

export default App;
