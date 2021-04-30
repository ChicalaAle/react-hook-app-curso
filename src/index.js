import React from 'react';
import ReactDOM from 'react-dom';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { FetchWithCustomHooks } from './components/03-useFetch/FetchWithCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { HookApp } from './HookApp';

import './components/01-useState/counter.css';
//import { CallbackHook } from './components/06-memos/CallbackHook';
import { Padre } from './components/07-tarea-memo/Padre';
//import { MemoHook } from './components/06-memos/MemoHook';
//import { Memorize } from './components/06-memos/Memorize';

ReactDOM.render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>,
  document.getElementById('root')
);
