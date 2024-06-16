import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Function to add the Google Translate script to the header
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    // Initialize the Google Translate element
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
