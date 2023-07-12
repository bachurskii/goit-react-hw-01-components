import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './components/profile/profile.css';
import './components/friendslist/friends.css';
import './components/Statistics/statics.css';
import './components/transactionhistory/transaction.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
