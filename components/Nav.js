import React from 'react';
import Live from './Live';

const Nav = () => {
    return (
        <nav className='flex'>
           <ul className='flex space-x-4 text-base items-center'>
               <li >Sports</li>
               <li>Comps</li>
               <li>Teams</li>
               <li>Channels</li>
               <li><Live /></li>

           </ul>
        </nav>
    );
};

export default Nav;