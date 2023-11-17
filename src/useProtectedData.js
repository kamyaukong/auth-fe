import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useProtectedData(url, token) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setData(response.data);
            } catch (error) {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    localStorage.removeItem('token');
                    setError('Unauthorized Access - Please Login');
                } else {
                    setError('Error fetching content');
                }
            }
        };

        if (token) {
            fetchData();
        }
    }, [url, token]);

    return { data, error };
}
