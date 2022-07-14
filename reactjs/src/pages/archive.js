import React from 'react';
import { useSelector } from 'react-redux';

import { newActive, deleteArchive } from '../api/firebase';

import undoBtn from '../assets/undo.svg';
import deleteBtn from '../assets/delete.svg';

export default function Archive() {
    const archive = useSelector(state => state.data.archive);

    const handleActivate = (timeID, title) => {
        newActive(title);
        deleteArchive(timeID);
    }

    return (
        <>
            {Object.entries(archive || {}).map(([timeID, title]) => {
                return (
                    <div className='todoentry'>
                        <p>{title}</p>
                        <div className='todobtn'>
                            <button className='inputbtn' onClick={() => handleActivate(timeID, title)}>
                                <img src={undoBtn} alt='archive' width={30} />
                            </button>
                            <button className='inputbtn' onClick={() => deleteArchive(timeID)}>
                                <img src={deleteBtn} alt='delete' width={30} />
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
