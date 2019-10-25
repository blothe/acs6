import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class Main extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={styles.title}>&lt; nom de l'appli &gt;</Text>
          <TextInput style={styles.search} placeholder='Recherche...'></TextInput>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>info</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='info' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>asso</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='users' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>structure</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='home' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>scolarité</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='graduation-cap' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>loisir</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='futbol-o' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>à propos</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='question' style={styles.cat_btn_ico}/>
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
    backgroundColor: '#404958',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 25,
  },
  title: {
    color: 'white',
    fontSize: 48,
    margin: 2,
  },
  search: {
    width: '96%',
    height: 48,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'white',
    fontSize: 24,
    borderRadius: 50,
  },
  row: {
    flex: 3,
    flexDirection: 'row',
  },
  cat: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cat_txt: {
    color: 'white',
    fontSize: 24,
    margin: 2,
  },
  cat_btn: {
    width: '75%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  cat_btn_ico: {
    fontSize: 96,
  }
});

export default Main
