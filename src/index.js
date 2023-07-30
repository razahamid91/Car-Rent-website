import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Add import for the Provider component
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap the App component with the Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
