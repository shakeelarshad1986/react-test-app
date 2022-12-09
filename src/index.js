import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist'
import store from './store/store';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const persistor = getPersistor();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
            <ToastContainer position='top-right' autoClose={3000} hideProgressBar pauseOnHover />
        </PersistGate>
    </Provider>
);
