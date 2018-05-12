import { combineReducers } from 'redux';
import decks from './decks';
import helper from './helper';

export default combineReducers({
	decks,
	helper
});