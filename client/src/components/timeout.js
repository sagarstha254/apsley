import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Messages = ({ variant, children, redirectTo }) => {
  const [timeOut, setTimeOut] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeOut(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timeOut && redirectTo) {
      history.push(redirectTo);
    }
  }, [timeOut, redirectTo, history]);

  return (
    !timeOut && <div className={`alert alert-${variant}`}>{children}</div>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Messages;
