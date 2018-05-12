import { AsyncStorage } from 'react-native';

export const DATA_STORAGE_KEY = 'FlashCards:data';

const fake_data = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces'
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event'
			}
		]
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer: 'The combination of a function and the lexical environment within which that function was declared.'
			}
		]
	}
};

function setDummyData() {
	AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(fake_data));
	return fake_data;
}

export function formatResults(results) {
	return results === null ? setDummyData() : JSON.parse(results);
}

export default fake_data;