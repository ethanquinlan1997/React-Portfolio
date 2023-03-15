import React from 'react'
import Navbar from './Navbar'


function Header(){
    return (
        <header className='bg-gray-700 p-2 flex justify-between items-center'>
        <Navbar />
        </header>
    )
}

export default Header