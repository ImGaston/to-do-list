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
            <label>Write a new To Do</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Your task" />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >cancel</button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type='submit'
                >add</button>
            </div>
        </form>
    );
}

export { TodoForm };