import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DeckListItem from './DeckListItem';

class DeckListView extends Component {

	renderItem = ({ item }) => {
		return <DeckListItem data={item} navigation={this.props.navigation} />;
	}

	render() {
		const { decks } = this.props;

		if(!decks) {
			return null;
		}

		var arr = Object.keys(decks).map(key => {
			return {
				key,
				...decks[key]
			};
		}).reverse();

		if(arr.length <= 0) {
			return(
				<View style={styles.helperView}>
					<Text style={styles.helperText}>Click on Add Deck below to get started</Text>
				</View>
			);
		}

		return (
			<View style={{flex: 1}}>
				<FlatList data={arr} renderItem={this.renderItem} />
			</View>
		);
	}
}


const styles = StyleSheet.create({
	helperView: {
		alignItems: 'center',
		marginTop: 100,
		marginRight: 18,
		marginLeft: 18,
		flex: 1,
	},
	helperText: {
		fontSize: 40,
		textAlign: 'center',
		color: 'rgba(0,0,0,0.3)',
	}
});

function mapStateToProps({ decks }) {
	return {
		decks
	};
}

export default connect(mapStateToProps)(DeckListView);