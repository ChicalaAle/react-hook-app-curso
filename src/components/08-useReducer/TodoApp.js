import React, { useEffect, useReducer } from 'react';

import {todoReducer} from './todoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';


const init = () => ( JSON.parse(localStorage.getItem('todos')) || [] );


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] =  useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) => {

        //console.log(todoId);
        console.log(todos)
        //Action

        const action = {
            type: 'delete',
            payload: todoId
        }

        //Dispatch

        dispatch(action);

    }

    const handleDone = () => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );

        reset();

    }

    return (
        <div>
            <h1>Todo App ( {todos.length} ) </h1>
            <hr/>

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        { todos.map( (todo, i) => (
                            <li key={todo.id} className="list-group-item"> <p className="text-center" onClick={handleDone}>{i+1}. {todo.desc} </p>
                            <button onClick={ () => handleDelete(todo.id) } className="btn btn-danger">
                                Borrar
                            </button>
                            </li>
                            
                        ))}

                        
                    </ul>
                </div>

                <div className="col">
                    <h4>Agregar tarea</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit }>
                        <input type="text" className="form-control" name="description" value={description} placeholder="Aprender ..." autoComplete="off" onChange={handleInputChange} />
                        <button type="submit" className="btn btn-outline-primary mt-3 float-right">Agregar</button>
                    </form>
                </div>

            </div>

        </div>
    )
}