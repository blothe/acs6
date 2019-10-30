import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

class Welcome extends React.Component {

  displayFormStructure(){
    this.props.navigation.navigate('Structure')
  }
  displayFormHandicap(){
    this.props.navigation.navigate('Handicap')
  }


  render() {
    return (
      <View style={styles.main}>
        <View style={styles.content}>
          <View style={styles.content_txt}>
            <Text style={styles.welcome}>BIENVENUE SUR</Text>
            <Text style={styles.appname}>&lt; GUIDE HANDICAP &gt;</Text>
            <Text style={styles.appdesc}>LOREM IPSUM NEQUE PORRO ET CAETERA</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>STRUCTURE</Text>
              <TouchableOpacity style={styles.cat_btn} onPress={()=>this.displayFormStructure()}>
                <Icon name='home' color="#00858e" style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>HANDICAP</Text>
              <TouchableOpacity style={styles.cat_btn} onPress={()=>this.displayFormHandicap()} title="typeHandicap">
                <Icon name='wheelchair'color="#00858e" style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#284B63',
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
    fontSize: 32,
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
    borderRadius: 17,
    // backgroundColor: '#7D9D7F',
    backgroundColor: '#b7ecec',
  },
  content_btn_txt: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  row: {
    flex: 3,
    marginTop: 40,
    flexDirection: 'row',
  },
  cat: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  cat_txt: {
    fontSize: 24,
    color: 'white',
    margin: 2,
  },
  cat_btn: {
    width: '60%',
    height: '60%',
    borderRadius: 25,
    // backgroundColor: 'white',
    backgroundColor: '#e0f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cat_btn_ico: {
    fontSize: 96,

  }
});

export default Welcome
