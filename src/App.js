import React, { useState } from 'react';
import Login from './login';
import ProtectedContent from './ProtectedContent';

function App() {
    const [token, setToken] = useState('');

    return (
        <div className="App">
            {!token ? <Login setToken={setToken} /> : <ProtectedContent token={token} />}
        </div>
    );
}

export default App;
