import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Misc/Button';
import { changeQuizHelper } from '../../actions/index';

class QuizModal extends Component {
	state = {
		visible: true
	}

	closeModal = () => {
		this.setState({ visible: false });
	}

	disableModal = () => {
		this.setState({ visible: false });
		this.props.changeQuizHelper(false);
	}

	render() {
		const { visible } = this.state;
		const helper = this.props.helper ? this.props.helper.Quiz.popup : false;
		const final = visible && helper;
		return (
			<Modal isVisible={final} onBackdropPress={this.closeModal}>
				<View style={styles.modalContent}>
					<Text style={styles.modalHeader}>Some Tips and Tricks to help you out</Text>
					<Text style={{textAlign: 'center', fontSize: 16, marginTop: 10}}>
						Welcome to the quiz! Read the question and when you are ready, click on the card to view the answer.
						To continue to the next question, mark the answer as correct or incorrect.
					</Text>
					<View style={styles.hr}></View>
					<View style={styles.modalConfirm}>
						<Button style={{ backgroundColor: '#00b894', paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }} textStyle={styles.modalButtonText} onPress={this.closeModal}>OK</Button>
						<Button style={{ backgroundColor: '#0984e3', paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }} textStyle={styles.modalButtonText} onPress={this.disableModal}>Disable Popup</Button>
					</View>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	modalContent: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'stretch',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
	modalHeader: {
		fontSize: 28,
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
		fontSize: 18
	}
});

function mapStateToProps({ helper }) {
	return {
		helper
	};
}

export default connect(mapStateToProps, { changeQuizHelper })(QuizModal);