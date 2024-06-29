import React from 'react';
import downloadimg from '../../assests/downloadNew.jpg'
const DownloadSection = () => {
    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    {/* Platforms Section */}
                    <div className="flex-1">
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-blue-600 mb-2">DESKTOP</h3>
                                <ul>
                                    <li className="flex items-center mb-2">
                                        <img src="windows-icon.svg" alt="Windows" className="h-6 w-6 mr-2" /> Windows
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <img src="mac-icon.svg" alt="Mac" className="h-6 w-6 mr-2" /> Mac
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <img src="linux-icon.svg" alt="Linux" className="h-6 w-6 mr-2" /> Linux
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-blue-600 mb-2">WEB</h3>
                                <ul>
                                    <li className="flex items-center mb-2">
                                        <img src="chrome-icon.svg" alt="Chrome" className="h-6 w-6 mr-2" /> Chrome
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <img src="firefox-icon.svg" alt="Firefox" className="h-6 w-6 mr-2" /> Firefox
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <img src="edge-icon.svg" alt="Edge" className="h-6 w-6 mr-2" /> Edge
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-blue-600 mb-2">MOBILE</h3>
                                <ul>
                                    <li className="flex items-center mb-2">
                                        <img src="android-icon.svg" alt="Android" className="h-6 w-6 mr-2" /> Android
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <img src="ios-icon.svg" alt="iOS" className="h-6 w-6 mr-2" /> iOS
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-blue-600 mb-2">OUR OTHER PRODUCTS</h3>
                            <ul>
                                <li className="flex items-center mb-2">
                                    <img src="plaky-icon.svg" alt="Plaky" className="h-6 w-6 mr-2" /> Plaky - Project Management
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="pumble-icon.svg" alt="Pumble" className="h-6 w-6 mr-2" /> Pumble - Team Communication
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Watch Tutorial Section */}
                    <div className="flex-1 ml-10">
                        <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                            <h3 className="text-blue-600 mb-2">WATCH TUTORIAL</h3>
                            <img src={downloadimg} alt="Time Tracking Apps" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-between items-center border-t border-gray-200 pt-4 bg-slate-600 text-white">
                    <div className="flex space-x-4">
                        <button className="text-gray-700">Contact Us</button>
                        <button className="text-gray-700">Tutorials</button>
                        <button className="text-gray-700">Knowledge Hub</button>
                        <button className="text-gray-700">Blog</button>
                        <button className="text-gray-700">Help</button>
                    </div>
                    <div className="flex items-center">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="ml-2 text-gray-700">4,000+ Reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
