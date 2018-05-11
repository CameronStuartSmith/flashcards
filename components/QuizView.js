import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Button from './Button';
import * as Animatable from 'react-native-animatable';
import QuizCompleted from './QuizCompleted';

class QuizView extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params.deck
		return {
			title: `Quiz - ${title}`
		}
	}

	state = {
		currentQuestion: 1,
		wrong: 0,
		showAnswer: false,
		complete: false
	}

	handleQuestionViewRef = ref => this.questionView = ref;

	changeHeader = async () => {
		await this.questionView.flipOutX(200);
		await this.setState({ showAnswer: !this.state.showAnswer })
		await this.questionView.flipInX(200);
	}

	renderQuestion = () => {
		const { currentQuestion, showAnswer } = this.state;
		const { deck } = this.props.navigation.state.params;
		const question = deck.questions[currentQuestion-1];
		const show = !showAnswer ? question.question : question.answer;

		return (
			<Animatable.View ref={this.handleQuestionViewRef} style={styles.questionContainer}>
				<TouchableWithoutFeedback onPress={this.changeHeader}>
					<View>
						<Text style={styles.questionHeader}>{!showAnswer ? 'Question' : 'Answer'}</Text>
						<View style={styles.hr}></View>
					</View>
				</TouchableWithoutFeedback>
				<ScrollView>
					<TouchableWithoutFeedback onPress={this.changeHeader}>
						<View>
							<Text style={styles.questionText}>{show}</Text>
						</View>
					</TouchableWithoutFeedback>
				</ScrollView>
			</Animatable.View>

		);
	}

	nextQuestion = (incorrect = false) => {
		const { length } = this.props.navigation.state.params.deck.questions;
		const { currentQuestion, wrong } = this.state;
		
		if(currentQuestion < length) {
			this.setState({
				showAnswer: false,
				currentQuestion: currentQuestion + 1,
				wrong: incorrect ? wrong + 1 : wrong
			})
		} else {
			this.setState({
				completed: true,
				wrong: incorrect ? wrong + 1 : wrong
			})
		}

	}


	render() {
		if(this.state.completed) {
			const { length } = this.props.navigation.state.params.deck.questions;
			const { wrong } = this.state;
			return <QuizCompleted length={length} wrong={wrong} />;
		}

		const { currentQuestion } = this.state;
		const { deck } = this.props.navigation.state.params;

		return (
			<View style={{flex: 1, justifyContent: 'space-between'}}>
				<View style={{ flex: 1 }}>
					<Text style={styles.ofText}>Question {currentQuestion} of {deck.questions.length}</Text>
					{this.renderQuestion()}
				</View>
				<View style={{ flex: 1, justifyContent: 'flex-end' }}>
					<Button style={[styles.btn, {backgroundColor: '#00b894'}]} onPress={() => this.nextQuestion(false)}>Correct</Button>
					<Button style={styles.btn} onPress={() => this.nextQuestion(true)}>Incorrect</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	questionContainer: {
		backgroundColor: 'white',
		borderRadius: 2,
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
	},
	hr: {
		borderBottomWidth: 1,
		borderColor: "rgba(0,0,0,0.05)",
		borderRadius: 1,
		marginTop: 10,
		marginBottom: 10,
	},
	ofText: {
		margin: 10,
		fontSize: 14,
		fontWeight: '600'
	},
	questionHeader: {
		fontSize: 20
	},
	questionText: {
		fontSize: 30,
		fontWeight: '600',
		textAlign: 'center'
	},
	btn: {
		marginBottom: 20,
		marginLeft: 20,
		marginRight: 20
	}
});

export default QuizView;