import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.scss';
// import './assets/scss/normalize.scss'
// import './assets/scss/style.scss'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
