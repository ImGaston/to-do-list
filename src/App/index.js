// * TODO: Agregar un componente para que desaparezcan los ya completados
// * TODO: cuando marquemos completado o eliminado se cambie el estado
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI
      />
    </TodoProvider>
  );
}

export default App;
