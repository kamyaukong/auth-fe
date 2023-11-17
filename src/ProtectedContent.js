import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProtectedContent({ token }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/content', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setContent(response.data.content);
            } catch (error) {
                setContent('Unauthorized Access');
            }
        };

        fetchData();
    }, [token]);

    return <div>{content}</div>;
}
