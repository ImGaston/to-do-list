import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButon = () => {
        alert('que tarea quieres agregar?')
    }
    
    return (
        <button 
        className='button'
        onClick={onClickButon}
        >
        +
        </button>
    )
}

export { CreateTodoButton };