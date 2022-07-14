import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { newActive, } from '../api/firebase';

import submitBtn from '../assets/check.svg';

export default function Active() {
    const [title, setTitle] = useState('');
    const active = useSelector(state => state.data.active);

    const handleChange = event => {
        setTitle(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        newActive(title);
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='inputroot'>
                <input type='text' value={title} placeholder='New Todo ...' onChange={handleChange} className='inputbox' />
                <button type='submit' className='inputbtn'>
                    <img src={submitBtn} alt='submit' width={30} />
                </button>
            </form>
            {Object.entries(active || {}).map(([timeID, title]) => {
                return <div>
                    <p>{title}</p>
                </div>
            })}
        </div>
    )
}
