import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Misc/Button';

const StartQuizModal = ({ visible, onClose, onAddQuestion }) => {
	return (
		<Modal isVisible={visible} onBackdropPress={onClose}>
			<View style={styles.modalContent}>
				<Text style={styles.modalHeader}>No Questions!</Text>
				<Text style={{textAlign: 'center', fontSize: 18, marginTop: 10}}>This quiz doesn't have any questions yet! To get started, click on the add question button below.</Text>
				<View style={styles.hr}></View>
				<View style={styles.modalConfirm}>
					<Button style={{ backgroundColor: '#00b894', paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }} textStyle={styles.modalButtonText} onPress={onClose}>OK</Button>
					<Button style={{ backgroundColor: '#0984e3', paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }} textStyle={styles.modalButtonText} onPress={onAddQuestion}>Add Question</Button>
				</View>
			</View>
		</Modal>
	);
};

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
		fontSize: 35,
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
		fontSize: 20
	}
});

export default StartQuizModal;