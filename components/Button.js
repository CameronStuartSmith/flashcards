import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

class Button extends Component {
	render() {
		const { onPress, style, children, textStyle } = this.props;
		return (
			<TouchableOpacity onPress={onPress}>
				<View style={[styles.buttonContainer, style]}>
					<Text style={[styles.text, textStyle]}>{children}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#dc3545',
		padding: 15,
		borderRadius: 4,
		borderColor: '#dc3545',

	},
	text: {
		fontSize: 25,
		color: 'white',
		textAlign: 'center',
		fontWeight: '800'
	}
});

export default Button;