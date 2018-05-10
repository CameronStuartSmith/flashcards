import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DeckListItem from './DeckListItem';

class DeckListView extends Component {
	render() {
		const { decks } = this.props;

		return (
			<View>
				{
					Object.keys(decks).map(key => {
						return <DeckListItem data={decks[key]} />
					})
				}
			</View>
		);
	}
}

export default DeckListView;