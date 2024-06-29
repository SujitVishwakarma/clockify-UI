import React from 'react';

const Statics = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-white px-4 md:px-6 py-6 mx-4 md:mx-52'>
      <div className='flex flex-col items-center md:items-start'>
        <h4 className="text-lg font-semibold mb-4 md:mb-6">TIMEKEEPING</h4>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Timer</h2>
          <p>Track work hours in real time.</p>
        </div>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Timesheet</h2>
          <p>Enter time in a weekly timesheet.</p>
        </div>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Calendar</h2>
          <p>Visually block out and manage time.</p>
        </div>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Auto tracker</h2>
          <p>Track apps and websites you use.</p>
        </div>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Kiosk</h2>
          <p>Clock in from a shared device.</p>
        </div>
      </div>
      <div className='flex justify-center mt-6 md:mt-0'>
        <img src='https://clockify.me/assets/images/feature-time-tracker-methods.svg' alt='graph' className='w-full md:w-auto'/>
      </div>
    </div>
  );
}

export default Statics;
