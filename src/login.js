import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { username, password });
            const receivedToken = response.data.token;
            localStorage.setItem('token', receivedToken); // Save token to local storage
            setToken(response.data.token);
        } catch (error) {
            console.log(error);
            alert('Login failed');
        }
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    );
}
