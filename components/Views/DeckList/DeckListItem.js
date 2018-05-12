import React, { Component } from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity as Touchable } from 'react-native';
import * as Animatable from 'react-native-animatable';

function waitPromise(value) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, value);
	});
}

class DeckListItem extends Component {

	handlePress = async () => {
		this.view.lightSpeedOut(300);
		await waitPromise(350);
		this.props.navigation.navigate('IndividualDeckView', this.props.data);
		this.view.slideInRight(800);
	}

	handleViewRef = ref => this.view = ref;

	render() {
		const { title, questions } = this.props.data;
		return (
			<Touchable onPress={this.handlePress}>
				<Animatable.View style={styles.containerStyle} ref={this.handleViewRef}>
					<Text style={styles.titleStyle}>{title}</Text>
					<Text style={styles.lengthStyle}>{questions.length} { questions.length !== 1 ? 'Questions' : 'Question' }</Text>
				</Animatable.View>
			</Touchable>
		);
	}
}


const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: '#a29bfe',
		borderRadius: Platform.OS === 'ios' ? 4 : 2,
		padding: 20,
		margin: 10,
		borderColor: '#f2f2f2',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.8,
		shadowColor: 'rgba(0, 0, 0, 0.24)',
		shadowOffset: {
			width: 0,
			height: 4
		},
		alignItems: 'center'
	},
	titleStyle: {
		fontSize: 40,
		color: 'white',
		textAlign: 'center'
	},
	lengthStyle: {
		fontSize: 30,
		color: 'white'
	}
});

export default DeckListItem;