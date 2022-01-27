import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image';

const clockIcon = <FontAwesomeIcon icon={faClock}  size='lg' color="#64748b" />
const gbFlag =  <Image src='/gb-flag.png' alt="gb flag" width='26' height='14' objectFit='contain'/> 



const MainFilter = () => {
    return (
        <div className='flex w-full bg-gray-100 h-10 z-1 flex-row px-5 items-center text-xs font-semibold text-gray-500 uppercase'>
            <div className='basis-16  px-1 flex shrink-0 justify-start border-r border-gray-400'>sport</div>
            <div className='basis-32  px-1 flex  shrink-0 justify-center border-r border-gray-400 items-center'>{clockIcon}<span className='text-[9px] pl-1 text-gray-500 flex font-bold items-center'>GMT</span></div>
            <div className='basis-80  flex-grow px1 flex  justify-center border-r border-gray-400 '>Event</div>
            <div className='basis-64  px-1 flex  justify-center border-r border-gray-400 '>comp</div>
            <div className='basis-80 shrink-0 px-1 flex justify-end items-center '>Watching in<button className='h-6 w-10 ml-2 bg-gray-200 hover:bg-gray-300 rounded shadow flex items-center justify-center'>{gbFlag}</button></div>
        </div>
    );
};

export default MainFilter;