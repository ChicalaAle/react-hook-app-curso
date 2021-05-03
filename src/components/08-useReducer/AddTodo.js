import React from 'react'
import { useForm } from '../../hooks/useForm';

export const AddTodo = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] =  useForm({
        description: ''
    });

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

        handleAddTodo(newTodo);

        reset();

    }

    return (
        <div>
           <h4>Agregar tarea</h4>
            <hr/>

            <form onSubmit={ handleSubmit }>
                <input type="text" className="form-control" name="description" value={description} placeholder="Aprender ..." autoComplete="off"  onChange={handleInputChange} />
                <button type="submit" className="btn btn-outline-primary mt-3 float-right">Agregar</button>
            </form> 
        </div>
    )
}
