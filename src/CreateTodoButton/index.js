import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
    setOpenModal,
    openModal,
    } = React.useContext(TodoContext);
    const onClickButon = () => {
        setOpenModal(!openModal);
    };
    
    
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

