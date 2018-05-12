import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Confetti from 'react-native-confetti';
import Button from '../../Misc/Button';
import { clearLocalNotification, setLocalNotification } from '../../../utils/notifications';

class QuizCompleted extends Component {

handleCompletedRef = ref => this.completed = ref;
handleScoreRef     = ref => this.score = ref;
handleCorrectRef   = ref => this.correct = ref;

componentDidMount() {
	if(this._confettiView) {
		this._confettiView.startConfetti();
	}

	clearLocalNotification().then(setLocalNotification);
}

componentWillUnmount () {
	if (this._confettiView) {
		this._confettiView.stopConfetti();
	}
}

startOver = () => {
	this.props.onStartOver();
}

goToDeck = () => {
	this.props.onGoToDeck();
}

render() {
	const { length, wrong } = this.props;
	const correct = length - wrong;
	const percentage = (correct / length * 100).toFixed(0);
	return (
		<View style={styles.container}>
			<Confetti ref={(node) => this._confettiView = node} confettiCount={25} />
			<Animatable.Text animation="fadeInDown" style={styles.textCompleted} ref={this.handleCompletedRef}>
				Quiz Completed!
			</Animatable.Text>
			<Animatable.Text animation="flipInX" delay={1000} style={styles.textScore} ref={this.handleScoreRef}>
				{percentage}%
			</Animatable.Text>
			<Animatable.Text animation="slideInLeft" delay={1600} style={styles.textCorrect} ref={this.handleCorrectRef}>
				You got {correct} right out of {length}
			</Animatable.Text>
			<Animatable.View animation="fadeIn" delay={2000}>
				<Button style={[styles.btn, {backgroundColor: '#fdcb6e'}]} onPress={this.startOver}>Start Over</Button>
				<Button style={[styles.btn, {backgroundColor: '#0984e3'}]} onPress={this.goToDeck}>Go to Deck</Button>
			</Animatable.View>
		</View>
	);
}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		marginBottom: 100
	},
	textCompleted: {
		textAlign: 'center',
		fontSize: 50,
		fontWeight: '600'
	},
	textScore: {
		textAlign: 'center',
		fontSize: 100,
		fontWeight: '800'
	},
	textCorrect: {
		textAlign: 'center',
		fontSize: 35,
		fontWeight: '400'
	},
	btn: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 20
	}
});

export default QuizCompleted;