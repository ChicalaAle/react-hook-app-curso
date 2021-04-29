import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';

import '../01-useState/counter.css';

export const FormWithCustomHook = () => {
    const [form, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = form;

    /*useEffect(() => {
        console.log('password cambio')
    }, [password])*/

    return (
        <>

        <h1>Form with custom hook</h1>
        <hr/>

        <form>

            <div className="form-group">
                <input 
                
                type="text"
                name="name"
                className="form-control"
                placeholder= "Tu nombre"
                value={name}
                onChange={handleInputChange}
                />
            </div>


            <div className="form-group">
                <input 
                
                type="text"
                name="email"
                className="form-control"
                placeholder= "example@gmail.com"
                value={email}
                onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                
                type="password"
                name="password"
                className="form-control"
                placeholder= "******"
                value={password}
                onChange={handleInputChange}
                />
            </div>

            <button className="btn btn-primary">
                Guardar
            </button>
        
        </form>

        </>
    )
}
