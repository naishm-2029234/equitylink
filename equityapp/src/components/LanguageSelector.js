// import React from 'react';


// const LanguageSelector = () => {
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="language-selector">
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('es')}>Spanish</button>
//     </div>
//   );
// };

// export default LanguageSelector;


import React from 'react';

const LanguageSelector = ({ isSpanish, toggleLanguage }) => {
    return (
        <button onClick={toggleLanguage}>
            {isSpanish ? "English" : "Spanish"}
        </button>
    );
}

export default LanguageSelector;
