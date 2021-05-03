import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDone, handleDelete}) => {
    return (
        <>
            <div className="col-7">
                    <ul className="list-group list-group-flush">
                        { todos.map( (todo, i) => (
                            
                            <TodoListItem todo={todo} index={i}  handleDone={handleDone} handleDelete={handleDelete} />
                            
                        ))}                        
                    </ul>
            </div>
        </>
    )
}
