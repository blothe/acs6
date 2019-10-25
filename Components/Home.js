import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

class Home extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.content}>
          <View style={styles.content_txt}>
            <Text style={styles.welcome}>BIENVENUE SUR</Text>
            <Text style={styles.appname}>&lt; nom de l'appli &gt;</Text>
            <Text style={styles.appdesc}>LOREM IPSUM NEQUE PORRO ET CAETERA</Text>
          </View>
          <TouchableOpacity style={styles.content_btn}>
            <Text style={styles.content_btn_txt}>ENTRER</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#404958',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content_txt: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcome: {
    color: 'white',
    fontSize: 24,
    margin: 2,
  },
  appname: {
    color: 'white',
    fontSize: 48,
    margin: 2,
  },
  appdesc: {
    color: 'white',
    fontSize: 12,
    margin: 2,
  },
  content_btn: {
    width: '96%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7D9D7F',
    borderRadius: 17,
  },
  content_btn_txt: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Home
