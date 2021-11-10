import React from "react";
import './TodoError.css';

function TodoError({ error }) {
    return <div className='img-error-todo'>
                <img src="https://i.ibb.co/hBY1bhv/error-404.png" alt="error to do app"/>
            </div>
}

export { TodoError };