import React, {useState} from 'react';
import {connect} from 'react-redux';

import {startStream, stopStream} from '../lib/api';

import styled from 'styled-components';

import {actions} from './../modules/reducers';

import Header from './../components/Header/Header';
import TweetCard from './../components/TweetCard/TweetCard';

const ListContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const SentimentContainer = styled.div`
  width: 40%;
`;

const TweetList = ({dispatch, tweetlist}) => {
  const [options, setOptions] = useState({
    searchTerm: "",
    showRetweets: false
  });

  const tweets = tweetlist.tweets;

  const setSearchTerm = e => {
    setOptions({ ...options, searchTerm: e.target.value });
  };

  const onStartStream = () => {
    dispatch(actions.startStream());
    
    startStream({
      search: options.searchTerm,
      retweets: false
    });
  };

  const onStopStream = () => {
    dispatch(actions.stopStream());
    stopStream();
  };

  const startDisabled = options.searchTerm.length === 0;

  const sentimentScore = tweetlist.sentimentScore;
  const positiveWords = tweetlist.positiveWords;
  const negativeWords = tweetlist.negativeWords;

  const resetSentimentStats = () => {
    dispatch(actions.resetSentimentStats());
  };

  return (
    <>
      <Header
        onChange={setSearchTerm}
        startStream={onStartStream}
        stopStream={onStopStream}
        startDisabled={startDisabled}
      />
      <SentimentContainer>
        <p>Sentiment Score: {sentimentScore}</p>
        <p>Positive Words: {positiveWords}</p>
        <p>NegativeWords: {negativeWords}</p>
        <button onClick={resetSentimentStats}>Reset stats</button>
      </SentimentContainer>
      <ListContainer style>
        {tweets.map((tweet, idx) => (
          <TweetCard key={`tweet-${idx}`} tweet={tweet} />
        ))}
      </ListContainer>
    </>
  );
};

const mapStateToProps = state => ({
  tweetlist: state.tweetlist,
});

export default connect(
  mapStateToProps,
)(TweetList);