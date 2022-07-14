import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { newActive, newArchive, deleteActive } from '../api/firebase';

import submitBtn from '../assets/check.svg';
import binBtn from '../assets/bin.svg';

export default function Active() {
    const [title, setTitle] = useState('');
    const active = useSelector(state => state.data.active);

    const handleChange = event => {
        setTitle(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (title) {
            newActive(title);
            setTitle('');
        }
    }

    const handleArchive = (timeID, title) => {
        newArchive(title);
        deleteActive(timeID);
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
                return (
                    <div>
                        <p>{title}</p>
                        <button className='inputbtn' onClick={() => handleArchive(timeID, title)}>
                            <img src={submitBtn} alt='archive' width={30} />
                        </button>
                        <button className='inputbtn' onClick={() => handleArchive(timeID, title)}>
                            <img src={binBtn} alt='delete' width={30} />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
