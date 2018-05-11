import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fetchDecks } from '../utils/api';
import { connect } from 'react-redux';
import { getDecks } from '../actions/index';
import DeckListView from './DeckListView';
import Header from './Header';

class Home extends Component {

	componentDidMount() {
		this.props.getDecks();
	}

	render() {
		return (
			<View style={styles.container}>
				<Header />
				<DeckListView navigation={this.props.navigation} />
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		alignItems: 'stretch',
		flex: 1
	},
	headerContainer: {
		backgroundColor: '#74b9ff',
		height: 70,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#dfe6e9'
	}
})

export default connect(null, { getDecks })(Home);