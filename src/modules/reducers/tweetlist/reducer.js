import * as constant from "./constants";

export const initialState = {
  streamActive: false,
  tweets: [],
  searchTerm: "",
  showRetweets: false,
  sentimentScore: 0,
  positiveWords: 0,
  negativeWords: 0
};

const tweetListReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.ADD_TWEET:
      return {
        ...state,
        tweets: [action.tweet, ...state.tweets]
      };
    case constant.START_STREAM:
      return {
        ...state,
        streamActive: true
      };
    case constant.STOP_STREAM:
      return {
        ...state,
        streamActive: false
      };
    case constant.ADD_SENTIMENT:
      return {
        ...state,
        sentimentScore: state.sentimentScore + action.sentimentScore,
        positiveWords: state.positiveWords + action.positiveWords,
        negativeWords: state.negativeWords + action.negativeWords
      };
    case constant.RESET_SENTIMENT_STATS:
      return {
        ...state,
        sentimentScore: 0,
        positiveWords: 0,
        negativeWords: 0
      };
    default:
      return state;
  }
};

export default tweetListReducer;
