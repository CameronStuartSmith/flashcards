import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fetchDecks } from '../utils/api';
import { connect } from 'react-redux';
import { getDecks } from '../actions/index';
import DeckListView from './DeckListView';



class Home extends Component {

	componentDidMount() {
		this.props.getDecks();
	}

	renderState = () => {
		console.log(this.props.decks);
		if(!this.props.decks) {
			return(
				<Text>Loading...</Text>
			)
		} else {
			return(
				<DeckListView decks={this.props.decks} />
			)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>Flash Cards</Text>
				</View>
				{this.renderState()}
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

function mapStateToProps({ decks }) {
	return {
		decks
	}
}

export default connect(mapStateToProps, { getDecks })(Home);