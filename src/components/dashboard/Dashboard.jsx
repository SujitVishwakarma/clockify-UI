import React, { useState } from 'react';
import dashboardImg from '../assests/dashboard.jpg';
import VideoModal from './VideoModal';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
    console.log("vdo call function triggered");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center py-2 px-4 md:px-14 cursor-pointer">
      <img
        className="w-full md:w-auto hero__img mobile-full shadow cursor-pointer"
        src={dashboardImg}
        alt="Free time tracking software and time tracker app screenshot"
        onClick={handleImageClick}
      />
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Dashboard;
