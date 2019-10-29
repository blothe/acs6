import React from 'react'
import Filter from './Components/Filter'
import Home from './Components/Home'
import Main from './Components/Main'
import FilterMap from './Components/FilterMap'

import Welcome from './Components/Welcome'
import Filter1 from './Components/Filter1'
import Filter2 from './Components/Filter2'

import { StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <FilterMap/>
      <Welcome/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
