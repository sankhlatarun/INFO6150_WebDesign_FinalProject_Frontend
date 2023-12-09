import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
import { Auth0Provider } from '@auth0/auth0-react';
root.render(
  <React.StrictMode>
      <Auth0Provider
    domain="dev-0wltcjxkb0fyu8k8.us.auth0.com"
    clientId="yPrQdU2tkRMfb0xHhLv3czJ5YLIadsD2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

    </Auth0Provider>
  </React.StrictMode>
 





   
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
