import { GET_DECKS } from '../actions/index';

export default function decks (state = null, action) {
	switch(action.type) {
		case GET_DECKS:
			return action.payload;
		default:
			return state;
	}
}
