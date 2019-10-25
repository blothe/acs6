import React from 'react'
import Main from './Components/Main'
import { StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <Main/>
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
