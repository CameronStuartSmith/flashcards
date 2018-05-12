import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Misc/Button';

const DeleteDeckModal = ({ visible, onClose, deleteDeck }) => {
	return (
		<Modal isVisible={visible} onBackdropPress={onClose}>
			<View style={styles.modalContent}>
				<Text style={styles.modalHeader}>Are you sure you want to delete this deck?</Text>
				<Text style={{textAlign: 'center', fontSize: 15, marginTop: 10}}>You will not be able to reverse this action. Your deck will be lost forver!</Text>
				<View style={styles.hr}></View>
				<View style={styles.modalConfirm}>
					<Button style={{ backgroundColor: '#00b894' }} textStyle={styles.modalButtonText} onPress={onClose}>NO</Button>
					<Button textStyle={styles.modalButtonText} onPress={deleteDeck}>YES, DELETE IT</Button>
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

export default DeleteDeckModal;