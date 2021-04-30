import React, { useMemo, useState } from 'react'

import {useCounter} from '../../hooks/useCounter';
import { procesoPesado } from '../helpers/procesoPesado';

export const MemoHook = () => {

    const [value, increment] = useCounter(100);

    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(value), [value]);

    return (
        <>
            <h3>Counter Memo: { value }</h3>
            <hr />

            <p> {memoProcesoPesado} </p>

            <button className="btn btn-primary" onClick={() => {
                increment();
            }}>+1</button>

            <button className="btn btn-outline-primary ml-2" onClick={() => {
                setShow(!show);
            }} >Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
