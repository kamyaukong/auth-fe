import React from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you are using react-router for navigation

function LogoutPage({ setToken }) {
    const history = useHistory();

    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');

        // Update the token state in the App component
        setToken('');

        // Redirect to the login page or home page after logout
        history.push('/login'); // or wherever you wish to redirect after logout
    };

    return (
        <div>
            <h1>Logout</h1>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default LogoutPage;
