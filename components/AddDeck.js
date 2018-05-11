import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Button from './Button';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';
import { NavigationActions, StackActions } from 'react-navigation';
import CustomTextInput from './CustomTextInput';
import Header from './Header';


class AddDeck extends Component {
	state = {
		title: '',
		error: false
	}

	onSubmit = async () => {
		this.setState({error: false});
		const { title } = this.state;
		if(title.length > 0) {
			await this.props.addDeck({ key: title })
			const params = { key: title, title, questions: [] }
			this.props.navigation.navigate('IndividualDeckView', params);
		} else {
			this.setState({ error: 'You need to input some text!'});
		}
	}

	render() {
		const { title, error } = this.state;
		return (
			<View>
				<Header />
				<CustomTextInput placeholder="What's the title of the deck?" onChangeText={title => this.setState({ title })} value={title} error={error} maxLength={50} vstyle={{ marginTop: 20 }}/>
				<Button style={{margin: 20, backgroundColor: '#6c5ce7'}}onPress={this.onSubmit}>Add Deck</Button>
			</View>
		);
	}
}

export default connect(null, { addDeck })(AddDeck);