import { GET_DECKS, ADD_CARD, DELETE_DECK, ADD_DECK } from '../actions/index';

export default function decks (state = null, action) {
	switch(action.type) {
	case GET_DECKS:
		return action.payload;
	case ADD_CARD:
		let { key, question, answer } = action.payload;
		return {
			...state,
			[key] : {
				...state[key],
				questions: [
					...state[key].questions,
					...[{ question, answer }]
				]
			}
		};
	case DELETE_DECK:
		let newState = { ...state };
		delete newState[action.payload.key];
		return newState;
	case ADD_DECK:
		return {
			...state,
			[action.payload.key] : {
				title: action.payload.key,
				questions: []
			}
		};
	default:
		return state;
	}
}
