import React from 'react';
import Image from 'next/image';


const MainSportLi = ({name, icon}) => {

    return (
        <li className='hover:bg-gray-100 flex hover:text-gray-900 cursor-pointer p-1 rounded-xl px-2 text-base align-middle items-center'><span className='mr-2 align-middle items-center flex'>{icon}</span>{name}</li>
    );
};

export default MainSportLi;