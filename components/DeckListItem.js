import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity as Touchable } from 'react-native';

class DeckListItem extends Component {

	handlePress = () => {
		this.props.navigation.navigate('IndividualDeckView', this.props.data);
	}

	render() {
		const { title, questions } = this.props.data;
		return (
			<Touchable onPress={this.handlePress}>
				<View style={styles.containerStyle}>
					<Text style={styles.titleStyle}>{title}</Text>
					<Text style={styles.lengthStyle}>{questions.length} { questions.length !== 1 ? 'Questions' : 'Question' }</Text>
				</View>
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
})

export default DeckListItem;