import React from 'react';

const Reports = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-white px-4 md:px-6 py-6 mx-4 md:mx-52'>
      <div className='flex justify-center mb-6 md:mb-0'>
        <img src='https://clockify.me/assets/images/feature-time-reporting-activity.svg' alt='graph' className='w-full md:w-auto' />
      </div>
      <div className='flex flex-col items-center md:items-start'>
        <h4 className="text-lg font-semibold mb-4 md:mb-6">REPORTS</h4>
        <div className="p-2 hover:text-blue-600 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Reports</h2>
          <p>Analyze and export tracked time.</p>
        </div>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Activity</h2>
          <p>See who works on what.</p>
        </div>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Rates</h2>
          <p>See earnings, cost, and profit.</p>
        </div>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <p>Track project estimates and budget.</p>
        </div>
        <div className="p-2 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Location</h2>
          <p>See visited sites and routes.</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
