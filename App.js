import React from 'react'
import Welcome from './Components/Welcome'
import Filter1 from './Components/Filter1'
import Filter2 from './Components/Filter2'
import Filter3 from './Components/Filter3'
import { StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
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
