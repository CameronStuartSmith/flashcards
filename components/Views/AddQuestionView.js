import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../Misc/Button';
import { connect } from 'react-redux';
import { addCardToDeck } from '../../actions/index';
import CustomTextInput from '../Misc/CustomTextInput';

class AddQuestionView extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params;
		return {
			title: `Adding Question to ${title}`
		};
	}

	state = {
		question: '',
		answer: '',
		errorQuestion: false,
		errorAnswer: false
	}

	onSubmit = () => {
		this.setState({errorQuestion: false, errorAnswer: false});
		const { title } = this.props.navigation.state.params;
		const { question, answer } = this.state;
		if(question && answer) {
			this.props.addCardToDeck({
				question,
				answer,
				key: title,
			});
			this.props.navigation.goBack();
		} else {
			const errors = {};
			if(!question) {
				errors.errorQuestion = 'You must input some text!';
			}
			if(!answer) {
				errors.errorAnswer = 'You must input some text!';
			}
			this.setState(errors);
		}
	}

	render() {
		const { question, answer, errorQuestion, errorAnswer } = this.state;
		return (
			<View>
				<CustomTextInput
					placeholder="What's your question?"
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={question => this.setState({ question })}
					value={question}
					error={errorQuestion}
					vstyle={{marginTop: 20}}
				/>
				<CustomTextInput
					placeholder="What's the answer?"
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={answer => this.setState({ answer })}
					value={answer}
					error={errorAnswer}
					vstyle={{marginTop: 20}}
				/>
				<Button onPress={this.onSubmit} style={{margin: 20, backgroundColor: '#0984e3'}}>Add Question</Button>
			</View>
		);
	}
}

export default connect(null, { addCardToDeck })(AddQuestionView);