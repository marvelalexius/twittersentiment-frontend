import {combineReducers} from 'redux';
import tweetlist from './tweetlist';

const rootReducer = combineReducers({
    tweetlist: tweetlist.reducer,
});

export const actions = {
    ...tweetlist.actions,
}

export default rootReducer;