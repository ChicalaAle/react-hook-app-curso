import React from 'react'
import {useCouter} from '../../hooks/useCouter';


export const CounterWithCustomHooks = () => {
    
    const {state, increment, decrement, reset} = useCouter(2);
    
    return (
        <>
                <h1>Counter with hook: { state }</h1>

                <button onClick={ () => increment(2) } className="btn">+1</button>
                <button onClick={ reset } className="btn">RESET</button>
                <button onClick={ () => decrement(2) } className="btn">-1</button>
        </>
    )
}
