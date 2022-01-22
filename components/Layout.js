import Head from 'next/head';
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
           <main className='flex justify-center'>{children}</main>
        </>
    );
};

export default Layout;