import React from 'react';
import statics from './data/statics.json';
import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Statics from 'components/Statistics/statics';
import FriendList from 'components/friendslist/friends';

import Profile from 'components/profile/profile';
import TransactionHistory from 'components/transactionhistory/transaction';

export const App = () => {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          background: 'radial-gradient(black, transparent)',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statics title="Upload stats" stats={statics} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
