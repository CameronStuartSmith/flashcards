import * as API from '../utils/api';
import * as HelperAPI from '../utils/helperAPI';

export const GET_DECKS = 'GET_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_DECK = 'ADD_DECK';

export const GET_HELPERS = 'GET_HELPERS';
export const CHANGE_HOME_HELPER = 'CHANGE_HOME_HELPER';
export const CHANGE_QUIZ_HELPER = 'CHANGE_QUIZ_HELPER';

export const getDecks = () => (dispatch) => {

	API.fetchDecks().then(data => {
		dispatch({
			type: GET_DECKS,
			payload: data
		});
	});

};

export const getHelpers = () => (dispatch) => {
	HelperAPI.fetchHelpers().then(data => {
		dispatch({
			type: GET_HELPERS,
			payload: data
		});
	});
};

export const addCardToDeck = ({key, question, answer}) => (dispatch) => {

	dispatch({
		type: ADD_CARD,
		payload: {
			key,
			question,
			answer
		}
	});
	return API.addCard({
		key,
		question,
		answer
	});
};

export const deleteDeck = ({ key }) => (dispatch) => {

	dispatch({
		type: DELETE_DECK,
		payload: {
			key
		}
	});
	return API.removeDeck({ key });
};

export const addDeck = ({ key }) => (dispatch) => {

	dispatch({
		type: ADD_DECK,
		payload: {
			key
		}
	});
	return API.addDeck({ key });
};

export const changeHomeHelper = (value) => (dispatch) => {
	dispatch({
		type: CHANGE_HOME_HELPER,
		payload: {
			value
		}
	});
	return HelperAPI.setHomeHelper(value);
};

export const changeQuizHelper = (value) => (dispatch) => {
	dispatch({
		type: CHANGE_QUIZ_HELPER,
		payload: {
			value
		}
	});
	return HelperAPI.setQuizHelper(value);
};