import { GET_HELPERS, CHANGE_HOME_HELPER, CHANGE_QUIZ_HELPER } from '../actions/index';

export default function decks (state = null, action) {
	switch(action.type) {
	case GET_HELPERS:
		return action.payload;
	case CHANGE_HOME_HELPER:
		return {
			...state,
			Home: {
				popup: action.payload.value
			}
		};
	case CHANGE_QUIZ_HELPER:
		return {
			...state,
			Quiz: {
				popup: action.payload.value
			}
		};
	default:
		return state;
	}
}