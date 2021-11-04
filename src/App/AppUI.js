import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoTitle } from '../TodoTitle';

function AppUI() {
    return (
        <React.Fragment>
            <TodoTitle />
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {/* Render prop */}
                {({ 
                    error, 
                    loading, 
                    searchedTodos, 
                    toggleCompleteTodo, 
                    deleteTodo,
                }) => (
                    <TodoList>
                        {error && <p>Oh por Dios!...</p>}
                        {loading && <p>Se esta cargando...</p>}
                        {(!loading && !searchedTodos.length) && <p>Crea tu primer tarea del día</p>}
                        {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>    
    );
}

export { AppUI };