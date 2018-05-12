import { AsyncStorage } from 'react-native';

export const HELPER_KEY = 'FlashCards:help';

const helper_default_data = {
	Home: {
		popup: true
	},
	Quiz: {
		popup: true
	}
};

function setDefaultData() {
	AsyncStorage.setItem(HELPER_KEY, JSON.stringify(helper_default_data));
	return helper_default_data;
}

export function formatResults(results) {
	return results === null ? setDefaultData() : JSON.parse(results);
}

export default helper_default_data;