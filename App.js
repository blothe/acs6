import React from 'react'
import Home from './Components/Home'
import { StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <Home/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
