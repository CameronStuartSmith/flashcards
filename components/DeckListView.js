import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DeckListItem from './DeckListItem';

class DeckListView extends Component {

	renderItem = ({ item }) => {
		return <DeckListItem data={item} />
	}

	render() {
		const { decks } = this.props;

		var arr = Object.keys(decks).map(key => {
			return {
				key,
				...decks[key]
			}
		});

		return (
			<View style={{flex: 1}}>
				<FlatList data={arr} renderItem={this.renderItem} style={styles.list} />
			</View>
		);
	}
}


const styles = StyleSheet.create({
	list: {
		
	}
});

export default DeckListView;