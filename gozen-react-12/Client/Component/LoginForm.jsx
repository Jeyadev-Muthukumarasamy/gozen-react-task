import React, { useContext, useState } from 'react';
import "./LoginForm.css";
import { AuthContext } from '../Context/Authcontext';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        
        login(username, password);
    };

    return (
        <div className="login-container">
            <input type="text" value={username} placeholder='Enter the username' onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} placeholder='Enter the Password' onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;
