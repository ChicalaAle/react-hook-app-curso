import React, { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

import './styles.css';

const init = () => ( JSON.parse(localStorage.getItem('todos')) || [] );

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = todoId => dispatch({type: 'delete',payload: todoId});   

    const handleAddTodo = todo => dispatch({type: 'add', payload: todo});

    const handleDone = todoId => dispatch({type: 'toggle',payload: todoId});   

    return (
        <div>
            <h1>Todo App ( {todos.length} ) </h1>
            <hr/>

            <div className="row">

                {/* TodoList */}
                <TodoList todos={todos} handleDone={handleDone} handleDelete={handleDelete} />

                <div className="col">
                    <AddTodo handleAddTodo={handleAddTodo} />
                </div>

            </div>

        </div>
    )
}
