import { AsyncStorage } from 'react-native';
import { formatResults, HELPER_KEY } from './_helper';

export function fetchHelpers() {
	return AsyncStorage.getItem(HELPER_KEY)
		.then(formatResults);
}

export function setHomeHelper(value) {
	return AsyncStorage.mergeItem(HELPER_KEY, JSON.stringify({
		Home: {
			popup: value
		}
	}));
}

export function setQuizHelper(value) {
	return AsyncStorage.mergeItem(HELPER_KEY, JSON.stringify({
		Quiz: {
			popup: value
		}
	}));
}