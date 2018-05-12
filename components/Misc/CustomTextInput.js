import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

class CustomTextInput extends Component {

	renderError = (error) => {
		if(error) {
			return(
				<Text style={styles.error}>{error}</Text>
			);
		}
	}

	render() {
		const { placeholder, value, onChangeText, error, style, vstyle, ...props } = this.props;
		const textInputStyles = [styles.textInput, style];

		if(error) {
			textInputStyles.push(styles.inputError);
		}

		return (
			<View style={[{ marginLeft: 20, marginRight: 20 }, vstyle]}>
				<TextInput
					placeholder={placeholder}
					style={textInputStyles}
					onChangeText={onChangeText}
					value={value}
					{...props}
				/>
				{this.renderError(error)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textInput: {
		height: 50,
		borderColor: '#b2bec3',
		borderWidth: 2,
		borderRadius: 3,
		fontSize: 20
	},
	error: {
		color: '#d63031',
		textAlign: 'right',
		marginTop: 3,
		fontSize: 20
	},
	inputError: {
		borderColor: '#ff7675'
	}
});

export default CustomTextInput;