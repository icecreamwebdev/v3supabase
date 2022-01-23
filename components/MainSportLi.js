import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const MainSportLi = ({name, icon, url}) => {

    return (
        <Link href='#'>
        <li className='hover:bg-gray-100 flex hover:text-gray-900 cursor-pointer p-1 rounded-lg px-3 text-base align-middle items-center'><span className='mr-2 align-middle items-center flex'>{icon}</span>{name}</li>
        </Link>
    );
};

export default MainSportLi;