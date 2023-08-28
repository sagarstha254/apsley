import React, { useEffect } from 'react';

const RevueInlineWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://widgets.revue.us/2.0/rw-widget-inline.js';

    // Append the script to the head of the document
    document.head.appendChild(script);

    // Clean up function
    return () => {
      // Remove the script from the head when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // The empty dependency array means this effect runs only once after initial render

  // Return the widget container element
  return <div data-rw-inline="37112"></div>;
};

export default RevueInlineWidget;
