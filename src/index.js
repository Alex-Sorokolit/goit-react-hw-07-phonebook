// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// Component
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
