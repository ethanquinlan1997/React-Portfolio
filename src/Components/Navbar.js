import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { useTransition, animated } from "react-spring";


export default function Navbar() {
//     const [showMenu, setShowMenu] = useState(false);

// const masktransitions = useTransition(showMenu, null, {
//     from: { position: 'absolute', opacity: 0},
//     enter: { opacity: 1 },
//     leave: { opacity: 0},
// })

// const menutransitions = useTransition(showMenu, null, {
//     from: { opacity: 0, transform: 'translateX(-100)'},
//     enter: { opacity: 1, transform: 'translateX(0%)'},
//     leave: { opacity: 0, transform: 'translateX(-100)'},
// })
  return (

  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
 <a className="title-font font-lg  mb-4 md:mb-0">
          <a href="/" className="ml-3  mr-5  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white">
            Home
          </a>
        </a>
<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
<a className="title-font font-lg  mb-4 md:mb-0">
          <a href="/projects" className="ml-3  mr-5  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white">
            Projects
          </a>
        </a>
</nav>
<a className="title-font font-lg  mb-4 md:mb-0">
          <a href="/contact" className="ml-3  mr-5  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white">
            Contact Me
          </a>
        </a>
</div> 
  )
}


// export default function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);

// const masktransitions = useTransition(showMenu, null, {
//     from: { position: 'absolute', opacity: 0},
//     enter: { opacity: 1 },
//     leave: { opacity: 0},
// })

// const menutransitions = useTransition(showMenu, null, {
//     from: { opacity: 0, transform: 'translateX(-100)'},
//     enter: { opacity: 1, transform: 'translateX(0%)'},
//     leave: { opacity: 0, transform: 'translateX(-100)'},
// })
//   return (
//     <nav>
//       <span className="text-xl">
//         <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
//       </span>

//       {
//         masktransitions.map(({ item, key, props }) =>
//         item && <animated.div
//          key={key}
//          style={props}
//          className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
//          onClick={() => setShowMenu(false)}
//          >
//         </animated.div>)
//       }
     

//       {
//         menutransitions.map(({ item, key, props }) =>
//         item && <animated.div
//          key={key}
//          style={props}
//          className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
//          >
//           <NavbarMenu 
//             closeMenu={() => setShowMenu(false)}
//           />
          
//         </animated.div>)
//       }
     
//     </nav>
//   );
// }

{
  /* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<a className="title-font font-medium text-white mb-4 md:mb-0">
  <a href="#about" className="ml-3 text-xl">
    About Me
  </a>
</a>
<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
  <a href="#projects" className="mr-5 hover:text-white">
    Projects
  </a>
  <a href="#skills" className="mr-5 hover:text-white">
    Skills
  </a>
</nav>
<a
  href="#contact"
  className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
  Contact Me

</a>
</div>  */
}
