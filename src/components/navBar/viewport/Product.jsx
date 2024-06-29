
import React from 'react';
const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Use Cases Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">USE CASES</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-xl">⏳</span>
                <div>
                  <h3 className="font-semibold">Timekeeping</h3>
                  <p>Track time using a timer, timesheet, or kiosk.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">📈</span>
                <div>
                  <h3 className="font-semibold">Reporting</h3>
                  <p>See where time goes and analyze costs.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">📋</span>
                <div>
                  <h3 className="font-semibold">Planning</h3>
                  <p>Manage resources, capacity, and utilization.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">💼</span>
                <div>
                  <h3 className="font-semibold">Budgeting</h3>
                  <p>Set client budgets and track project status.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">💰</span>
                <div>
                  <h3 className="font-semibold">Payroll</h3>
                  <p>Calculate payroll and employee costs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">INDUSTRIES</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-xl">💼</span>
                <div>
                  <h3 className="font-semibold">Freelancers</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">💻</span>
                <div>
                  <h3 className="font-semibold">Developers</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">🏢</span>
                <div>
                  <h3 className="font-semibold">Agencies</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">💼</span>
                <div>
                  <h3 className="font-semibold">Consultants</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">⚖️</span>
                <div>
                  <h3 className="font-semibold">Lawyers</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">📊</span>
                <div>
                  <h3 className="font-semibold">Accountants</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">🚀</span>
                <div>
                  <h3 className="font-semibold">Startups</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">🏗️</span>
                <div>
                  <h3 className="font-semibold">Construction</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Plans Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">PLANS</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white shadow rounded-md">
                <h3 className="font-semibold">FREE</h3>
                <p>Time Tracking</p>
              </div>
              <div className="p-4 bg-white shadow rounded-md">
                <h3 className="font-semibold">PRO</h3>
                <p>Profit & Productivity</p>
              </div>
              <div className="p-4 bg-white shadow rounded-md">
                <h3 className="font-semibold">ENTERPRISE</h3>
                <p>Security & Privacy</p>
              </div>
              <button className="mt-4 text-blue-500 hover:underline">See pricing</button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
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
    </div>
  );
};

export default Product;
