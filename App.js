import React from 'react'
import Filter from './Components/Filter'
import { StyleSheet } from 'react-native'


export default class App extends React.Component {
  render() {
    return (
      <Filter/>
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
