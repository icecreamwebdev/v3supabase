import Nav from './Nav';
import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-center shadow bg-white sticky'>
            <div className='flex justify-between max-w-screen-2xl w-full m-10 my-8'>
            <div className='font-black text-2xl'>WHERETOWATCH</div>
            <div className='flex w-80 bg-white-100 h-9 shadow rounded-2xl border border-gray-300'></div>
            <Nav />
            </div>
        </header>
    );
};

export default Header;