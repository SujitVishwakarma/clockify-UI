import React, { useState } from 'react';
import logo from '../assests/clockify.svg'; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Product from './viewport/Product';
import Features from './viewport/Features';
import DownloadSection from './viewport/DownloadSection';

const Navbar = () => {
    const [productMenuOpen, setProductMenuOpen] = useState(false);
    const [featureMenuOpen, setFeatureMenuOpen] = useState(false);
    const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);

    const toggleProductMenu = () => {
        setProductMenuOpen(!productMenuOpen);
    };
    const closeProductMenu = () => {
        setProductMenuOpen(false);
    };
    const toggleFeatureMenu = () => {
        setFeatureMenuOpen(!featureMenuOpen);
    };
    const closeFeatureMenu = () => {
        setFeatureMenuOpen(false);
    };
    const toggleDownloadMenu = () => {
        setDownloadMenuOpen(!downloadMenuOpen);
    };
    const closeDownloadMenu = () => {
        setDownloadMenuOpen(false);
    };

    return (
        <div className="fixed w-full flex items-center justify-between p-4 bg-blue-100 shadow-md">
            <div className="ml-11">
                <img src={logo} alt="Clockify Logo" className="h-15 w-20" />
            </div>
            <div className="flex justify-between items-center space-x-4">
                <div className="relative group hidden lg:block" onClick={toggleProductMenu}>
                    <button className="flex items-center hover:text-blue-700" onMouseEnter={toggleProductMenu} onMouseLeave={closeProductMenu}>
                        Product <KeyboardArrowDownIcon />
                    </button>
                    <div className={`flex justify-between w-full absolute mt-2 bg-white border border-gray-200 rounded-md shadow-lg transition-opacity duration-200 ${productMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="block px-2 py-2 text-gray-700 hover:bg-gray-100 w-58" style={{width: '58rem'}}>
                            <Product className='w-58' />
                        </div>
                    </div>
                </div>
                <div className="relative group hidden lg:block" onClick={toggleFeatureMenu}>
                    <button className="flex items-center hover:text-blue-700" onMouseEnter={toggleFeatureMenu} onMouseLeave={closeFeatureMenu}>
                        Features <KeyboardArrowDownIcon />
                    </button>
                    <div className={`flex justify-between w-full absolute mt-2 bg-white border border-gray-200 rounded-md shadow-lg transition-opacity duration-200 ${featureMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="block px-2 py-2 text-gray-700 hover:bg-gray-100 w-58" style={{ width: "58rem" }}>
                            <Features />
                        </div>
                    </div>
                </div>
                <div className="relative group hidden lg:block" onClick={toggleDownloadMenu}>
                    <button className="flex items-center hover:text-blue-700" onMouseEnter={toggleDownloadMenu} onMouseLeave={closeDownloadMenu}>
                        Download <KeyboardArrowDownIcon />
                    </button>
                    <div className={`flex justify-between w-full absolute mt-2 bg-white border border-gray-200 rounded-md shadow-lg transition-opacity duration-200 ${downloadMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="block px-2 py-2 text-gray-700 hover:bg-gray-100 w-58" style={{ width: "52rem" }}>
                            <DownloadSection className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mr-10 gap-4'>
                <button className="text-gray-700">Log in</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Sign up free</button>
            </div>
        </div>
    );
};

export default Navbar;
