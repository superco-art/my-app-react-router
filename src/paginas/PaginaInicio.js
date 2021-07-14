import React from 'react';
import { Link } from 'react-router-dom';

export default function PaginaInicio() {
    return (
        <div className="container">
            <h1>Welcome to my page</h1>
            <p>
                <Link to="/superco-art">Practice link</Link>
            </p>
        </div>
    );
}