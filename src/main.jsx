// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// //import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'; // Import your Redux store
import App from './App'; // Adjust the import as per your project structure
import { ToastContainer } from 'react-toastify';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
