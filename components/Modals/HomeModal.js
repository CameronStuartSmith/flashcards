import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Misc/Button';
import { changeHomeHelper } from '../../actions/index';

class HomeModal extends Component {
	state = {
		visible: true
	}

	closeModal = () => {
		this.setState({ visible: false });
		this.props.changeHomeHelper(false);
	}

	render() {
		const { visible } = this.state;
		return (
			<Modal isVisible={visible && this.props.helper} onBackdropPress={this.closeModal}>
				<View style={styles.modalContent}>
					<Text style={styles.modalHeader}>Welcome to Flash Cards!</Text>
					<Text style={{textAlign: 'center', fontSize: 18, marginTop: 10}}>To get started, add a deck from the options below or try out one of our premade decks by clicking on the corresponding card!</Text>
					<View style={styles.hr}></View>
					<View style={styles.modalConfirm}>
						<Button style={{ backgroundColor: '#00b894', paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }} textStyle={styles.modalButtonText} onPress={this.closeModal}>OK</Button>
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
		justifyContent: 'flex-end'
	},
	modalButtonText: {
		fontSize: 20
	}
});

export default connect(null, { changeHomeHelper })(HomeModal);