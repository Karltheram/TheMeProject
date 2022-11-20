import {Link} from 'react-router-dom';
import {useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

function ClientNav() {

    const [togglerNav, setTogglerNav] = useState(false);
    const clickHandler = () => {
        setTogglerNav(!togglerNav)
    };
    const links = [
        {
            id: 1,
            link: "/",
            name: "Welcome"
        },
        {
            id: 2,
            link: "/Home",
            name: "Home"
        },
        {
            id: 3,
            link: '/calendar',
            name: "New Entry"
        },
        {
            id: 4,
            link: '/WhatIsMe',
            name: "About"
        },
        {
            id: 5,
            link: 'Settings',
            name: "Settings"
        },
        {

            id: 6,
            link: 'Log Out',
            name: "Log Out"
        },

    ];
    
    
    return (
    <div className="flex justify-between items-center w-full h-20 bg-sky-500 px-4 text-white fixed font-bold">
        <Link to='/'>

        <h1 className="text-5xl ml-2"> ME.</h1>
        </Link>

        <ul className="hidden md:flex">
            {links.map(({ id, link, name}) => (
             <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
                <Link to={link}>{name}</Link>
             </li>
            ))}
        </ul>
        <div onClick={()=> clickHandler()} className="cursor-pointer pr-4 z-10 text-sky-400 md:hidden">
            {togglerNav ? <FaTimes className="text-white" size={30} /> : <FaBars className="text-white" size={30} />}
        </div>
        {togglerNav &&(

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen fill-sky-500 bg-sky-500 bg-gradient-to-b from-sky-500 to-sky-200 text-white">
        {links.map(({ id, link, name}) => (
             <li 
                key={id} 
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
             >
                <Link 
                    onClick={() => clickHandler()} 
                    to={link} 
                    smooth 
                    duration={500}
                >
                    {name}
                </Link>
             </li>
            ))}
        </ul>
        )}
    </div>
    );
};

export default ClientNav;