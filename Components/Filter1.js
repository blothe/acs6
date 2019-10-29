import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

class Filter1 extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={styles.appli}>&lt; nom de l'appli &gt;</Text>
          <Text style={styles.pages}>HANDICAP</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>AUDITIF</Text>
              <TouchableHighlight style={styles.cat_btn}>
                <Icon name='deaf' style={styles.cat_btn_ico}/>
              </TouchableHighlight>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>MENTAL</Text>
              <TouchableHighlight style={styles.cat_btn}>
                <Icon name='puzzle-piece' style={styles.cat_btn_ico}/>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>MOTEUR</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='wheelchair' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>VISUEL</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='blind' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>RETOUR</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='arrow-left' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>VALIDER</Text>
              <TouchableOpacity style={styles.cat_btn}>
                <Icon name='check' style={styles.cat_btn_ico}/>
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
  appli: {
    fontSize: 48,
    color: 'white',
    margin: 2,
  },
  pages: {
    width: '96%',
    height: 48,
    borderRadius: 50,
    backgroundColor: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
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
    fontSize: 24,
    color: 'white',
    margin: 2,
  },
  cat_btn: {
    width: '75%',
    height: '75%',
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cat_btn_ico: {
    fontSize: 96,
  }
});

export default Filter1
