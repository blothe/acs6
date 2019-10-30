import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Welcome from '../Components/Welcome'
import Structure from '../Components/Structure'
import Handicap from '../Components/Handicap'

const MainNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {header: null, }
  },
  Structure: {
    screen: Structure,
    navigationOptions: {header: null, }
  },
  Handicap: {
    screen: Handicap,
    navigationOptions: {header: null, }
  },
});

export default createAppContainer(MainNavigator)
