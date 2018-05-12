import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Misc/Button';
import { deleteDeck } from '../../actions/index';
import StartQuizModal from '../Modals/StartQuizModal';
import DeleteDeckModal from '../Modals/DeleteDeckModal';

class IndividualDeckView extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params;
		return {
			title
		};
	}

	state = {
		deleteDeckModal: false,
		startQuizModal: false
	}

	addQuestion = () => {
		this.props.navigation.navigate('AddQuestion', {
			...this.props.navigation.state.params
		});
	}

	deleteDeck = () => {
		this.setState({ deleteDeckModal: false });
		const { key } = this.props.navigation.state.params;
		this.props.deleteDeck({ key });
		this.props.navigation.goBack();
	}

	startQuiz = () => {
		const { deck } = this.props;
		if(deck.questions.length > 0) {
			this.props.navigation.navigate('Quiz', { deck } );
		} else {
			this.setState({
				startQuizModal: true
			});
		}
	}

	deleteDeckModalToggle = () => {
		this.setState({ deleteDeckModal: !this.state.deleteDeckModal });
	}

	startQuizModalClose = () => {
		this.setState({
			startQuizModal: false
		});
	}

	onModalAddQuestion = () => {
		this.startQuizModalClose();
		this.addQuestion();
	}

	render() {
		if(!this.props.deck) {
			return null;
		}

		const { title, questions: { length } } = this.props.deck;
		const { startQuizModal, deleteDeckModal } = this.state;

		return (
			<View style={styles.container}>
				{ deleteDeckModal && <DeleteDeckModal visible={deleteDeckModal} onClose={this.deleteDeckModalToggle} deleteDeck={this.deleteDeck} /> }
				<StartQuizModal visible={startQuizModal} onClose={this.startQuizModalClose} onAddQuestion={this.onModalAddQuestion} />
				<View style={styles.headerContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							{title}
						</Text>
						<Text style={styles.length}>
							{length} {length === 1 ? 'Question' : 'Questions'}
						</Text>
					</View>
				</View>

				<Button style={[styles.btn, { backgroundColor: '#00b894' }]} onPress={this.addQuestion}>Add Question</Button>
				<Button style={[styles.btn, { backgroundColor: '#6c5ce7' }]} onPress={this.startQuiz}>Start Quiz</Button>
				<Button style={styles.btn} onPress={this.deleteDeckModalToggle}>Delete Deck</Button>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
	},
	headerContainer: {
		marginTop: 20,
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20,
		paddingBottom: 40
	},
	title: {
		fontSize: 60,
		color: '#2d3436',
		textAlign: 'center'
	},
	length: {
		fontSize: 40,
		color: '#2d3436'
	},
	btn: {
		marginBottom: 20
	},
	modalContent: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'stretch',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
	modalHeader: {
		fontSize: 25,
		textAlign: 'center',
		fontWeight: '700'
	},
	hr: {
		marginTop: 30,
		marginBottom: 10,
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
	modalConfirm: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	modalButtonText: {
		fontSize: 17
	}
});

function mapStateToProps({ decks }, { navigation }) {
	const { key } = navigation.state.params;
	return {
		deck: decks[key]
	};
}

export default connect(mapStateToProps, { deleteDeck })(IndividualDeckView);
