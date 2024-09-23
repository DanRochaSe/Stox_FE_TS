import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main/App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
axios.defaults.withCredentials = true;
const queryClient = new QueryClient();

root.render(
    <Auth0Provider
        domain="danielrochamz.eu.auth0.com"
        clientId="MYgcUoUdIaTEr1fPD0uLHxzGbgcoaCuZ"
        authorizationParams={{
            redirect_uri: window.location.origin,
            audience: "https://stox_live",
            scope: "openid profile email"
        }}
    >
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
