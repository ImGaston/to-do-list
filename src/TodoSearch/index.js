import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <div className='search'>
            <input 
                className='search__input' 
                placeholder="Busca tu tarea..." 
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export { TodoSearch };
