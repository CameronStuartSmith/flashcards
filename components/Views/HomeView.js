import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDecks, getHelpers } from '../../actions/index';
import DeckListView from './DeckList/DeckListView';
import Header from '../Misc/Header';
import HomeModal from '../Modals/HomeModal';

class HomeView extends Component {

	componentDidMount() {
		this.props.getDecks();
		this.props.getHelpers();
	}

	render() {
		return (
			<View style={styles.container}>
				<HomeModal helper={this.props.helper ? this.props.helper.Home.popup : false} />
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
});

function mapStateToProps({ helper }) {
	return {
		helper
	};
}

export default connect(mapStateToProps, { getDecks, getHelpers })(HomeView);