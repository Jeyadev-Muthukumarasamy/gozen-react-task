import React, { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type ="submit">submit</button>
            </form>
        </div>
    );
}

export default Form;
