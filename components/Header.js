import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
	render() {
		return (
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Flash Cards</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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


export default Header;