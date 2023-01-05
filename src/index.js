import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);