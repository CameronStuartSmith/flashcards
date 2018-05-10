import { fetchDecks } from '../utils/api';

export const GET_DECKS = 'GET_DECKS';

export const getDecks = () => (dispatch) => {

	fetchDecks().then(data => {
		dispatch({
			type: GET_DECKS,
			payload: data
		});
	});

}