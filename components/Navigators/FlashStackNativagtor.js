import { createStackNavigator } from 'react-navigation';
import FlashTabNavigator from './FlashTabNavigator';
import IndividualDeckView from '../IndividualDeckView';
import AddQuestion from '../AddQuestion';
import QuizView from '../QuizView';

const FlashStackNavigator = createStackNavigator({
	Tabs: {
	  screen: FlashTabNavigator,
	  navigationOptions: {
		  header: null
	  }
	},
	IndividualDeckView: {
		screen: IndividualDeckView,
		navigationOptions: {
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: '#74b9ff',
			}
		}
	},
	AddQuestion: {
		screen: AddQuestion,
		navigationOptions: {
			headerTintColor: 'white',
			headerStyle: {
			  backgroundColor: '#74b9ff',
			}
		}
	},
	Quiz: {
		screen: QuizView,
		navigationOptions: {
			headerTintColor: 'white',
			headerStyle: {
			  backgroundColor: '#74b9ff',
			}
		}
	}
  })

export default FlashStackNavigator;