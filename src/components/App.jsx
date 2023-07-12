import React from 'react';
import statics from './statics.json';
import user from './user.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Statics from 'profile/Statistics/statics';
import FriendList from 'profile/friendslist/friends';
import Profile from 'profile/profile';
import TransactionHistory from 'transactionhistory/transaction';

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
