"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/imges/logoo.png";

const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Contact Us', href: '#' }
];

const servicesDropdown = [
    { name: 'IT Solutions Outsourcing', href: '#' },
    { name: 'Vulnerability Assessment', href: '#' },
    { name: 'Penetration Testing', href: '#' },
    { name: 'Data Center Services', href: '#' },
    { name: 'Cyber Security Services', href: '#' },
    { name: 'SOC Services', href: '#' },
    { name: 'IT Support Services', href: '#' },
];

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <>
            <nav className=''>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className=''>
                                    <img src={logo.src} alt="" className='w-44'/>
                                </a>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                {menuItems.map((item, index) => (
                                    item.name === 'Services' ? (
                                        <div key={index} className='relative'>
                                            <button onClick={toggleServices} className='p-2'>
                                                {item.name}
                                            </button>
                                            {isServicesOpen && (
                                                <div className='absolute mt-2 bg-white border-b-2 rounded shadow-lg'>
                                                    {servicesDropdown.map((service, sIndex) => (
                                                        <a key={sIndex} href={service.href} className='block p-2'>
                                                            {service.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a key={index} href={item.href} className='p-2'>
                                            {item.name}
                                        </a>
                                    )
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
                        <button className='hidden md:block bg-[#00BB99] w-28 h-9 rounded-full text-white'>Get Started</button>
                    </div>
                </div>
            </nav>
            {isClick && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1  sm:px-3'>
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                {item.name === 'Services' ? (
                                    <div className='border-b-2'>
                                        <button onClick={toggleServices} className='block p-2'>
                                            {item.name}
                                        </button>
                                        {isServicesOpen && (
                                            <div className='ml-5'>
                                                {servicesDropdown.map((service, sIndex) => (
                                                    <a key={sIndex} href={service.href} className='block p-2'>
                                                        {service.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a href={item.href} className='block border-b-2 p-2'>
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center bg-[#00BB99] p-2 text-white rounded-full mt-3 ml-5 mr-5">
                        <button className=''>Get Started</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
