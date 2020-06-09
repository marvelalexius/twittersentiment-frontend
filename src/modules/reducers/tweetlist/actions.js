import * as constant from './constants';

export const addTweet = (tweet) => {
    return dispatch => {
        dispatch({
            type: constant.ADD_TWEET,
            tweet: tweet,
        });
    };
};

export const addSentiment = (sentiment) => {
    return dispatch => {
        dispatch({
            type: constant.ADD_SENTIMENT,
            sentimentScore: sentiment.score,
            positiveWords: sentiment.positive.length,
            negativeWords: sentiment.negative.length
        });
    };
};

export const startStream = () => {
    return dispatch => {
        dispatch({
            type: constant.START_STREAM
        });
    };
};

export const stopStream = () => {
    return dispatch => {
        dispatch({
            type: constant.STOP_STREAM
        });
    };
};

export const resetSentimentStats = () => {
    return dispatch => {
        dispatch({
            type: constant.RESET_SENTIMENT_STATS
        });
    };
};