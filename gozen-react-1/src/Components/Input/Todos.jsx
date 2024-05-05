
import React from 'react';

const Input = ({ todos }) => {
  console.log(todos);
  return (
    <>
      
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </>
  );
}

export default Input;
