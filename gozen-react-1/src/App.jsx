
import React, { useState } from 'react';
import Input from './Components/Input/Todos';
import './App.css'
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange= (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    
      setTodos([...todos, inputValue]);
      setInputValue('');
    
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter todo item..."
        className='input'
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <Input todos = {todos} />

      
    </div>
  );
}

export default App;
