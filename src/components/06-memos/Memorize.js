import React, { useState } from 'react'


import {Small} from './Small';
import {useCounter} from '../../hooks/useCounter';

export const Memorize = () => {

    const [value, increment] = useCounter(10);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter Memo: <Small value={value}/> </h1>
            <hr />

            <button className="btn btn-primary" onClick={() => {
                increment();
            }}>+1</button>

            <button className="btn btn-outline-primary ml-2" onClick={() => {
                setShow(!show);
            }} >Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
