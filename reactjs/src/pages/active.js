import React from 'react';
import { Link } from 'react-router-dom';

export default function Active() {
    return (
        <div>
            <Link to='/archive'>Archived</Link>
            <p>active</p>
        </div>
    )
}
