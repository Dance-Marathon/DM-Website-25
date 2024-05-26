import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Donate = () => {
  const hasRedirected = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasRedirected.current) {
      const newWindow = window.open('https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&eventID=5803', '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
      hasRedirected.current = true;
      navigate('/');
    }
  }, [navigate]);

  return <p>Redirecting to donate page...</p>;
};

export default Donate;
