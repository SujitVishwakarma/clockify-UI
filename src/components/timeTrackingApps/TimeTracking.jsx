import React from 'react';
import dekstopImg from '../assests/dekstopApp.png';
import webImg from '../assests/webApp.png';
import mobileApp from '../assests/mobileApp.png'
import kisko from '../assests/kiskoApp.png'
const TimeTracking = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold">Time tracking apps</h1>
        <p className="mt-4">Clockify works across devices. Track time from anywhere — <br />
          all data is synced online.</p>
      </div>

      {/* App Sections */}
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Desktop App Section */}
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/2">
          <img src={dekstopImg} alt="Desktop App" className="w-full lg:w-3/4 p-2" />
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">DESKTOP APP</h2>
            <div className="flex justify-center">
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">Windows</button>
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">Mac</button>
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">Linux</button>
            </div>
          </div>
        </div>

        {/* Web App Section */}
        <div className="flex flex-col items-center lg:w-1/2 py-3">
          <img src={webImg} alt="Web App" className="w-full lg:w-3/4 p-4" />
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">WEB APP</h2>
            <div className="flex justify-center">
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">Edge</button>
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">Chrome</button>
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">Firefox</button>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Section  */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-11">
        {/* Android Section */}
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/2">
          <img src={mobileApp} alt="Desktop App" className="w-full lg:w-3/4 p-4" />
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">MOBILE APP</h2>
            <div className="flex justify-center">
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">Android</button>
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">iOS</button>
            </div>
          </div>
        </div>
        {/* Kisko Section  */}
        <div className="flex flex-col items-center lg:w-1/2 py-3">
          <img src={kisko} alt="Web App" className="w-full lg:w-3/4 p-4" />
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">KIOSK APP</h2>
            <div className="flex justify-center">
              <button className="bg-white-200 text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded m-2">Any Device</button>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default TimeTracking;
