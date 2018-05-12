import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import StatusBar from './components/Misc/StatusBar';
import Tabs from './components/Navigators/FlashStackNativagtor';
import middleware from './middleware';
import { setLocalNotification } from './utils/notifications';

const store = createStore(reducer, middleware);

export default class App extends React.Component {
	componentDidMount() {
		setLocalNotification();
	}
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