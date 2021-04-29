import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
    }, []);
    
    useEffect( () => {
    }, [formState]);

    useEffect( () => {
    }, [email]);

    const handleInputChange = ({target}) => { 
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    } 

    return (
        <>

        <h1>UseEffect</h1>
        <hr/>

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

        { (name === '123') && <Message /> }

        </>
    )
}
