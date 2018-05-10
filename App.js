import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Home from './components/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import StatusBar from './components/StatusBar';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Tabs from './components/BottomTabNavigator';
import middleware from './middleware';

const store = createStore(reducer, middleware);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<StatusBar backgroundColor={'#0984e3'} barStyle='light-content' />
					<Tabs />
				</View>
			</Provider>
		);
	}
}