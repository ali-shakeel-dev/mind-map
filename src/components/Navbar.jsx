import React, { useState } from 'react';
import '../components/Navbar.css'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleNav = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <i id='burgerIcon' className='bx bx-down-arrow-alt' onClick={handleNav}></i>
            <nav className={`px-20 m-auto bg-black py-2 drop-shadow-md flex justify-between items-center ${isActive ? 'active' : ''}`}>
                <div className="text-white text-xl font-bold flex items-center gap-2 cursor-pointer">
                    <img src="/MindFlow Logo.png" width='50px' /> MindFlow
                </div >
                <div className="navButtons flex gap-2">
                    <button className="bg-gray-100 px-5 py-2 hover:bg-gray-200">
                        <a href="https://protective-emu-5d6.notion.site/How-to-use-MindFlow-1ac30bbf7b434300a9ff17b6802bfa89?pvs=25" target="_blank">Usage</a>
                    </button>
                    <button className="bg-gray-100 px-5 py-2 hover:bg-gray-200">
                        <a href="https://github.com/ali-shakeel-dev" target="_blank">Contact Me</a>
                    </button>
                </div>
            </nav >
        </>
    );
};

export default Navbar;
