import React from 'react';
import featurImg from '../../assests/feature.jpg'

const Features = () => {
    return (
        <div className='w-full mr-3 '>
        <div className="flex justify-center bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex-1 grid grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-blue-600 mb-2">TIMEKEEPING</h3>
                            <ul>
                                <li className="flex items-center mb-2"><span className="mr-2">🕑</span>Timer</li>
                                <li className="flex items-center mb-2"><span className="mr-2">📅</span>Timesheet</li>
                                <li className="flex items-center mb-2"><span className="mr-2">🖥</span>Kiosk</li>
                                <li className="flex items-center mb-2"><span className="mr-2">📆</span>Calendar</li>
                                <li className="flex items-center mb-2"><span className="mr-2">🔍</span>Auto tracker</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-blue-600 mb-2">REPORTING</h3>
                            <ul>
                                <li className="flex items-center mb-2"><span className="mr-2">📊</span>Reports</li>
                                <li className="flex items-center mb-2"><span className="mr-2">💵</span>Rates</li>
                                <li className="flex items-center mb-2"><span className="mr-2">📈</span>Projects</li>
                                <li className="flex items-center mb-2"><span className="mr-2">📊</span>Activity</li>
                                <li className="flex items-center mb-2"><span className="mr-2">📍</span>Location</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-blue-600 mb-2">MANAGEMENT</h3>
                            <ul>
                                <li className="flex items-center mb-2"><span className="mr-2">📅</span>Scheduling</li>
                                <li className="flex items-center mb-2"><span className="mr-2">🏖</span>Time off</li>
                                <li className="flex items-center mb-2"><span className="mr-2">✔</span>Approval</li>
                                <li className="flex items-center mb-2"><span className="mr-2">💰</span>Expenses</li>
                                <li className="flex items-center mb-2"><span className="mr-2">📄</span>Invoicing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 ml-10">
                        <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                            <h3 className="text-blue-600 mb-2">WATCH DEMO</h3>
                            <img src={featurImg} alt="Feature Img" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="text-blue-600 underline">See all features →</button>
                </div>
            </div>
        </div>
        <div className="mt-8 flex justify-between items-center text-m bg-gray-900 text-white h-8 w-full">
          <div className="flex space-x-4 ml-3 mr-3">
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Tutorials</a>
            <a href="#" className="hover:underline">Knowledge Hub</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Help</a>
          </div>
          <div className="flex items-center space-x-1">
            <span>⭐</span>
            <span>4,000+ Reviews</span>
          </div>
        </div>
        </div>
    );
};

export default Features;
