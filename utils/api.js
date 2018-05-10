import { AsyncStorage } from 'react-native'
import { formatResults, DATA_STORAGE_KEY } from './_cards';

export function fetchDecks() {
	// return new Promise(async (resolve, reject) => {

	// 	const results = await AsyncStorage.getItem(DATA_STORAGE_KEY);
	// 	console.log("Hey");
	// 	console.log(formatResults(results));
	// })
	return AsyncStorage.getItem(DATA_STORAGE_KEY)
		.then(formatResults);
}

export function addDeck({ key }) {
	return AsyncStorage.mergeItem(DATA_STORAGE_KEY, JSON.stringify({
		[key] : {
			title: key,
			questions: []
		}
	}));
}

export function addCard({ key, question, answer }, prev) {
	return AsyncStorage.mergeItem(DATA_STORAGE_KEY, JSON.stringify({
		[key]: {
			...prev[key],
			questions: [
				...prev[key].questions,
				{
					question,
					answer
				}
			]
		}
	}));
}

export function removeCard({ key, index }, prev) {
	return AsyncStorage.mergeItem(DATA_STORAGE_KEY, JSON.stringify({
		[key]: {
			...prev[key],
			questions: [
				...prev[key].questions.splice(index, 1),
			]
		}
	}));
}

export function removeDeck({ key }) {
	return AsyncStorage.getItem(DATA_STORAGE_KEY)
    	.then((results) => {
      		const data = JSON.parse(results)
      		data[key] = undefined
      		delete data[key]
      		AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data))
   		})
}