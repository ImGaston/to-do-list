import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
import { MdAddTask }from 'react-icons/md'

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
        <MdAddTask />
        </button>
    )
}

export { CreateTodoButton };

