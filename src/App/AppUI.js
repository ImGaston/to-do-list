import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoTitle } from '../TodoTitle';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const { 
        error, 
        loading, 
        searchedTodos, 
        toggleCompleteTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoTitle />
            <TodoCounter />
            <TodoSearch />
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
            {openModal && (
                <Modal>
                    <TodoForm /> 
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>    
    );
}

export { AppUI };