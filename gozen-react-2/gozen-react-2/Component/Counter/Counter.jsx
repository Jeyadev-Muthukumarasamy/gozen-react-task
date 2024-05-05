import React, { useContext } from 'react';
import { CounterContext } from '../../Context/Countercontext';
import "./Counter.css"

const Counter = () => {
    const { counterValue,incrementValue, decrementValue } = useContext(CounterContext);
    console.log(counterValue)

    return (
        <div>
            <h1>Counter Value: {counterValue}</h1>
            <button onClick={incrementValue} className = "increment-button">Increment</button>
            <button onClick={decrementValue} className="decrement-button">Decrement</button>
        </div>
    );
};

export default Counter;
