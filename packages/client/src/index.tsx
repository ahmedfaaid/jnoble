import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'urql';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/GlobalStyles';
import { client } from './graphql/urql';

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
