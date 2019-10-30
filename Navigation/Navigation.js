import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Welcome from '../Components/Welcome'
import Structure from '../Components/Structure'
import Handicap from '../Components/Handicap'
import FilterMap from '../Components/FilterMap'

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
  FilterMap: {
    screen: FilterMap,
    navigationOptions: {header: null, }
  },
});

export default createAppContainer(MainNavigator)
