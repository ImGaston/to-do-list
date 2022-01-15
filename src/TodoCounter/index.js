import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className='header__subtitle'>You've completed {completedTodos} out of {totalTodos} tasks</h2>
    )
}

export { TodoCounter };
