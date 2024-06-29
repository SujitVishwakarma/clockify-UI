import React from 'react';

const TimeManage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white mt-20 mb-20 px-4 md:px-0">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">Time management features</h2>
      <p className="text-center text-gray-600 mt-2 md:text-lg">
        Track productivity, attendance, and billable hours with a <br className="hidden md:inline"/>
        simple time tracker and timesheet.
      </p>
    </div>
  );
};

export default TimeManage;
