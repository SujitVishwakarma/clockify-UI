import React from 'react';

const Management = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between bg-white px-4 md:px-6 py-6 mx-4 md:mx-52'>
            <div className='flex justify-center mb-6 md:mb-0'>
                <img src='https://clockify.me/assets/images/feature-team-scheduling.svg' alt='graph' className='w-full md:w-auto' />
            </div>
            <div className='flex flex-col items-center md:items-start'>
                <h4 className="text-lg font-semibold mb-4 md:mb-6">Management</h4>
                <div className="p-2 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Scheduling</h2>
                    <p>Schedule work, assignments, and shifts.</p>
                </div>
                <div className="p-2 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Time off</h2>
                    <p>Manage leaves and holidays.</p>
                </div>
                <div className="p-2 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Approval</h2>
                    <p>Submit and approve timesheets.</p>
                </div>
                <div className="p-2 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Invoicing</h2>
                    <p>Create invoices from billable time.</p>
                </div>
                <div className="p-2 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Expenses</h2>
                    <p>Record project expenses and fees.</p>
                </div>
                <div className="p-2 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Team</h2>
                    <p>Manage team members and roles.</p>
                </div>
            </div>
        </div>
    );
}

export default Management;
