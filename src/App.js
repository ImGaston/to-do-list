// * TODO: Agregar un componente para que desaparezcan los ya completados
// * TODO: cuando marquemos completado o eliminado se cambie el estado
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';
// import './App.css';

const defaultTodos = [
  { text: 'Compras de ferreteria', completed: false },
  { text: 'Tomar el curso de webcomponents', completed: false },
  { text: 'Buscar departamento', completed: false },
  { text: 'Compras del supermercado', completed: false },
  { text: 'Reservar clase tenis', completed: false },
  { text: 'Pagar servicios', completed: true },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [ searchValue, setSearchValue ] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  const toggleCompleteTodos = (text) => {
	const todoIndex = todos.findIndex(todo => todo.text === text);
	const newTodos = [...todos];
	newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
	setTodos(newTodos);
}

  return (
    <React.Fragment>
      <TodoTitle />
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>    
  );
}

export default App;
