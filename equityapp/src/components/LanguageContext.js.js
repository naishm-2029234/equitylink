// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [selectedLanguage, setSelectedLanguage] = useState('en');
//   const [supportedLanguages, setSupportedLanguages] = useState([]);

//   useEffect(() => {
//     fetchSupportedLanguages();
//   }, []);

//   const fetchSupportedLanguages = async () => {
//     try {
//       const response = await axios.get(
//         `https://translation.googleapis.com/language/translate/v2/languages?key=YOUR_API_KEY`
//       );
//       setSupportedLanguages(response.data.data.languages);
//     } catch (error) {
//       console.error('Error fetching supported languages:', error);
//     }
//   };
  

//   const changeLanguage = (language) => {
//     setSelectedLanguage(language);
//   };

//   return (
//     <LanguageContext.Provider
//       value={{ selectedLanguage, supportedLanguages, changeLanguage }}
//     >
//       {children}
//     </LanguageContext.Provider>
//   );
// };
