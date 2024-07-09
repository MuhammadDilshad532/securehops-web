"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <>
            <nav className='bg-black'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className='text-white'>Logo</a>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <a href="#" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
                                <a href="#" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>About</a>
                                <a href="#" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Services</a>
                                <a href="#" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Blogs</a>
                                <a href="#" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Contact Us</a>
                            </div>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <button
                                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                onClick={toggleNavbar}
                            >
                                {isClick ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {isClick && (
                <div className='md:hidden bg-black'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <a href="#" className='text-white hover:bg-white hover:text-black block rounded-lg p-2'>Home</a>
                        <a href="#" className='text-white hover:bg-white hover:text-black block rounded-lg p-2'>About</a>
                        <a href="#" className='text-white hover:bg-white hover:text-black block rounded-lg p-2'>Services</a>
                        <a href="#" className='text-white hover:bg-white hover:text-black block rounded-lg p-2'>Blogs</a>
                        <a href="#" className='text-white hover:bg-white hover:text-black block rounded-lg p-2'>Contact Us</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
