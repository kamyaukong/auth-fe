import React from 'react';
import useProtectedData from './useProtectedData';

export default function ProtectedContent({ token }) {
    const { data, error } = useProtectedData('http://localhost:8080/content', token);

    if (error) {
        return <div>{error}</div>;
    }

    return <div>{data ? data.content : 'Loading...'}</div>;
}
