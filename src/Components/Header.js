import React from 'react'
import Navbar from './Navbar'
import Home from '../Views/Home'
import About from '../Views/Projects'
import Contact from '../Views/Contact'

function Header(){
    return (
        <header className='bg-gray-700 p-2 flex justify-between items-center'>
        <Navbar />
        </header>
    )
}

export default Header