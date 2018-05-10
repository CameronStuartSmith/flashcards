import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

class DeckListItem extends Component {
	render() {
		const { title, questions } = this.props.data;
		return (
			<View style={styles.containerStyle}>
				<Text style={styles.titleStyle}>{title}</Text>
				<Text style={styles.lengthStyle}>{questions.length} { questions.length > 1 ? 'Questions' : 'Question' }</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'white',
		borderRadius: Platform.OS === 'ios' ? 4 : 2,
		padding: 20,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.8,
		shadowColor: 'rgba(0, 0, 0, 0.24)',
		shadowOffset: {
			width: 0,
			height: 3
		   },
		alignItems: 'center'
	},
	titleStyle: {
		fontSize: 40
	},
	lengthStyle: {
		fontSize: 30
	}
})

export default DeckListItem;