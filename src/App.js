import React from 'react';
import {connect} from 'react-redux';

import TweetList from './pages/TweetList';
import StreamNotification from './components/StreamNotifications/StreamNotifications';

import Socket from './lib/sockets';

const io = new Socket();

const App = () => {
  return (
    <>
      <TweetList />
      <StreamNotification io={io} />
    </>
  )
};

export default connect()(App);