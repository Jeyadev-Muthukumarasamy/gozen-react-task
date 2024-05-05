import React from 'react';
import { useTheme } from '../../context/Themecontext';
import { useState } from 'react';
import "./Counter.css"

const Counter = () => {
  const { isLightMode, toggleTheme } = useTheme();
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className={isLightMode ? 'light' : 'dark'}>
      <h2>Counter</h2>
      <div>
        Count: {count}
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Counter; 
