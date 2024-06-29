import React from 'react'
const ClockiFyCard = () => {
    const cards = [
        {
          title: 'Boost productivity',
          description: 'Track time you spend on activities, see where your time goes, and improve your time management skills.',
          icon: '🎯', 
        },
        {
          title: 'Bill clients',
          description: 'Track billable time and expenses, show clients how much you\'ve worked, see how much you\'ve earned, and create invoices.',
          icon: '💵', 
        },
        {
          title: 'Manage team',
          description: 'Track attendance for payroll and accounting, see who works on what, and manage workload among teams.',
          icon: '👥', 
        },
        {
          title: 'Streamline processes',
          description: 'Track time and analyze your company\'s efficiency across projects, clients, departments, and employees.',
          icon: '⏱️',
        },
      ];
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div className="grid gap-12 max-w-5xl mx-auto md:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 neumorphism"
        >
          <div className="text-blue-500 mb-4">{card.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-700 mb-4">{card.description}</p>
          <a href="#" className="text-blue-500 hover:underline">Learn more →</a>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ClockiFyCard
