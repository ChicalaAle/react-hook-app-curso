import React, { useEffect, useState } from 'react'

export const Message = () => {


    const [state, setState] = useState({x:0, y:0});
    const {x, y} = state; 

    const mouseEvent = (e) => {
        const coords = {
            x: e.x,
            y: e.y
        }
        setState(coords);
    }

    useEffect(() => {

        window.addEventListener('mousemove',  mouseEvent);

        return () => {
           window.removeEventListener('mousemove', mouseEvent);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}
