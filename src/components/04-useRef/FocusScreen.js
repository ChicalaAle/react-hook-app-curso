import React, { use, useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input 
                ref = {inputRef}
                className = "form-control"
                placeholder = "Your name..."
            />

            <button onClick = {handleClick} className="btn btn-primary mt-3" >Save</button>
        </>
    )
}
