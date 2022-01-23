import React from 'react';

const Day = ({day, date, index, activeDay, handleFunction}) => {

    const normal = 'flex-col p-1 px-2 rounded items-middle justify-center hover:bg-gray-700 hover:p-1 hover:text-white hover:px-2 hover:bold text-gray-600';
    const active = 'bg-gray-700 p-1 shadow-md text-white px-2 bold bg-gray-700 '
    return (
        
            <button onClick={() => handleFunction(index)} className={activeDay==index ? normal + active : normal}><div className='flex justify-center font-medium  uppercase'>{day}</div><div className='text-xs flex justify-center'>{date}</div></button>
        
    );
};

export default Day;