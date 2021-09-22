import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className='header__subtitle'>Has completado {completed} de {total} tareas</h2>
    )
}

export { TodoCounter };
