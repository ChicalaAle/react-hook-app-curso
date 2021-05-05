import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);


    const handleLogin = () => {

        const user = {
            id: 123,
            name: 'Ale',
            email: 'ale@ale.com'
        }

        setUser(user);

    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button className="btn btn-primary" onClick={ handleLogin }>Loguear</button>
        </div>
    )
}
