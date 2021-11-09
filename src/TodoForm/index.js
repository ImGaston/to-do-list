import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

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
        if(newTodoValue.length <= 0)
            return alert('no  escribiste nada amigo');
        addTodo(newTodoValue)
        setOpenModal(false);
    };

    return (
        <form
            onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Tu tarea para hacer en el día" />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type='submit'
                >crear</button>
            </div>
        </form>
    );
}

export { TodoForm };