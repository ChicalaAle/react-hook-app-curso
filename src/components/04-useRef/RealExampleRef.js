import React, { useState } from 'react';

import { FetchWithCustomHooks } from '../03-useFetch/FetchWithCustomHooks';

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);
    
    return (
        <div>
            <h1>Real example for Ref Hooks</h1>
            { show && <FetchWithCustomHooks/> }
            <button className="btn btn-primary mt-3" onClick={ () => {
                setShow(!show);
            }}>
                Show/Hide
            </button>
        </div>
    )
}
