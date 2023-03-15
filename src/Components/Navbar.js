import React from "react";



export default function Navbar() {

  return (

  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
 <div className="title-font font-lg  mb-4 md:mb-0">
          <a href="/" className="ml-3  mr-5  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white">
            Home
          </a>
        </div>
<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
<div className="title-font font-lg  mb-4 md:mb-0">
          <a href="/projects" className="ml-3  mr-5  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white">
            Projects
          </a>
        </div>
</nav>
<div className="title-font font-lg  mb-4 md:mb-0">
          <a href="/contact" className="ml-3  mr-5  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white">
            Contact Me
          </a>
        </div>
</div> 
  )
}

