import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState(''); 
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const  onChange = (event) => {
        setNewTodoValue(event.target.value); 
    };

    const  onCancel = () => {
        setOpenModal(false);
    };
    
    const  onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };

    return (
        <form
            onSubmit={onSubmit}>
            <label>
            </label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Tu tarea para hacer en el día" />
            <div>
                <button
                    type='button'
                    onClick={onCancel}
                >cancelar</button>
                <button
                    type='submit'
                >crear</button>
            </div>
        </form>
    );
}

export { TodoForm };