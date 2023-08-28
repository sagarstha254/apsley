import React, { useState, useEffect } from 'react';
import './Notification.css'; // You can define your own styles in this CSS file

const Notification = ({ message, image, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000); // Close the notification after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${visible ? 'show' : ''}`}>
      <div className="notification-content">
        <img src={image} alt="Notification" className="notification-image" />
        <p className="notification-message">{message}</p>
      </div>
    </div>
  );
};

export default Notification;