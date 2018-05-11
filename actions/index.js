import * as API from '../utils/api';

export const GET_DECKS = 'GET_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_DECK = 'ADD_DECK';

export const getDecks = () => (dispatch) => {

	API.fetchDecks().then(data => {
		dispatch({
			type: GET_DECKS,
			payload: data
		});
	});

}

export const addCardToDeck = ({key, question, answer}) => (dispatch) => {

	API.addCard({
		key, question, answer
	}).then(() => {

		dispatch({
			type: ADD_CARD,
			payload: {
				key, question, answer
			}
		})

	});

}

export const deleteDeck = ({ key }) => (dispatch) => {

	API.removeDeck({ key }).then(() => {
		dispatch({
			type: DELETE_DECK,
			payload: {
				key
			}
		})
	});

}

export const addDeck = ({ key }) => (dispatch) => {

	return API.addDeck({ key }).then(() => {

		dispatch({
			type: ADD_DECK,
			payload: {
				key
			}
		})

	});
}