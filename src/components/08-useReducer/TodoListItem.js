import React from 'react'

export const TodoListItem = ({todo, index, handleDone, handleDelete}) => {
    return (
        <li key={todo.id} className="list-group-item"> <p className={ todo.done && 'complete' } onClick={() => handleDone(todo.id)}>{index+1}. {todo.desc} </p>
            <button onClick={ () => handleDelete(todo.id) } className="btn btn-danger">
                Borrar
            </button>
        </li>
    )
}
