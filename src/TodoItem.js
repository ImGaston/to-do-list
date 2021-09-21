import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('completaste ' + props.text);
    //     console.log(props.completed);
    //     const doneTodo = !props.completed;
    //     console.log(doneTodo);
    // };
    const onDelete = () => {
        alert('eliminaste ' + props.text);
    };
    
    return (
        <li className="TodoItem">
        <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
        >
            C
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={onDelete}
        >
            X
        </span>
        </li>
    )
}

export { TodoItem };
