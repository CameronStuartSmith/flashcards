import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DeckListItem from './DeckListItem';

class DeckListView extends Component {

	renderItem = ({ item }) => {
		return <DeckListItem data={item} navigation={this.props.navigation} />
	}

	render() {
		const { decks } = this.props;

		if(!decks) {
			return null
		}

		var arr = Object.keys(decks).map(key => {
			return {
				key,
				...decks[key]
			}
		}).reverse();

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

function mapStateToProps({ decks }) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(DeckListView);