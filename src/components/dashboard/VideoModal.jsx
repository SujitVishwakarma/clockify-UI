import React from 'react';
import ReactDOM from 'react-dom';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg">
        <div className="p-4">
          <button onClick={onClose} className="text-red-500">Close</button>
          <div className="mt-2">
            {/* Embed your video here */}
            <iframe
              width="100%"
              height="315"
              src="https://youtu.be/DKzKNsERINg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal-root') 
  );
};

export default VideoModal;
