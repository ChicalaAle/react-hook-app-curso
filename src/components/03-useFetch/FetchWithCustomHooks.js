import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';

import {useCounter} from '../../hooks/useCounter';

import '../01-useState/counter.css';

export const FetchWithCustomHooks = () => {
    
    const [counter, increment, decrement, reset] = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = !!data && data[0];

    if(counter < 1){
        reset()
    }

    return (
        <>
         <h1>Custom hooks!</h1>           

         {
            loading
            ? 
                (
                    <p className="text-center alert alert-info">
                        Loading...
                    </p>
                )
            :
                (

                    <div>
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>

                        <button className="btn btn-primary" onClick={decrement}>
                            Previous quote
                        </button>

                        <button className="btn btn-primary float-right" onClick={increment}>
                            Next quote
                        </button>
                    </div>
                    
                )
        } 

        </>
    )
}
