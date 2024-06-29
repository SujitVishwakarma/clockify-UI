import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import lv from '../assests/lv.svg';

const HeroSection = () => {
    return (
        <div className="bg-blue-50 py-20 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-16 md:mt-32">
                The most popular free <span className="text-blue-600">time tracker</span> for teams
            </h1>
            <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
                Time tracking software used by millions. Clockify is a time tracker
                and timesheet app that lets you track work hours across projects.
                Unlimited users, free forever.
            </p>
            <div className="flex justify-center items-center mb-4">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarBorderIcon className="text-yellow-500" />
                <span className="ml-2 text-gray-600 text-sm sm:text-base md:text-lg">4.7 (4,492 reviews)</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-lg">
                START TRACKING TIME — IT'S FREE!
            </button>
            <p className="text-gray-600 mt-4 text-xs sm:text-sm md:text-base">
                <span className="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
                    </svg>
                    115,720 people signed up last month
                </span>
            </p>
            <div className='flex justify-center items-center mt-8 md:mt-14 py-2'>
                <img src={lv} alt='sponserImg' className='h-8 sm:h-10 md:h-12 lg:h-14' />
            </div>
        </div>
    );
};

export default HeroSection;
