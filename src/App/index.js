// * TODO: Agregar un componente para que desaparezcan los ya completados
// * TODO: cuando marquemos completado o eliminado se cambie el estado
import React from 'react';
import { AppUI } from './AppUI';

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

  const toggleCompleteTodo = (text) => {
	const todoIndex = todos.findIndex(todo => todo.text === text);
	const newTodos = [...todos];
	newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
	setTodos(newTodos);
}

  const deleteTodo = (text) => {
	const todoIndex = todos.findIndex(todo => todo.text === text);
	const newTodos = [...todos];
	newTodos.splice(todoIndex, 1);
	setTodos(newTodos);
}

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
