/* eslint-disable */
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import HomeView from '../Views/HomeView';
import AddDeckView from '../Views/AddDeckView';

export default createBottomTabNavigator(
	{
		Home: HomeView,
		Add: AddDeckView,
	},
	{
		initialRouteName: 'Home',
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = 'ios-home';
				} else if (routeName === 'Add') {
					iconName = 'md-add';
				}
				return <Ionicons name={iconName} size={35} color={tintColor} />;
			},
			header: null
		}),
		tabBarOptions: {
			activeTintColor: '#6c5ce7',
			inactiveTintColor: '#2d3436',
		},
	}
);