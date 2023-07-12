import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import profile from './components/profile/profile.css';
import friends from './components/friendslist/friends.css';
import statics from './components/Statistics/statics.css';
import transaction from './components/transactionhistory/transaction.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
