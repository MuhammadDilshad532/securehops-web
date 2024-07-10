"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Contact Us', href: '#' }
];

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <>
            <nav className=''>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className=''>Securehops</a>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                {menuItems.map((item, index) => (
                                    <a key={index} href={item.href} className='p-2'>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <button
                                className='inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                onClick={toggleNavbar}
                            >
                                {isClick ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {isClick && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {menuItems.map((item, index) => (
                            <a key={index} href={item.href} className='block border-b-2 p-2'>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
