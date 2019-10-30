import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getStructureApi } from '../API/DBApi'

class Filter2 extends React.Component {
<<<<<<< HEAD:Components/Filter2.js
  constructor(props){
    super(props)
    this.state = {
      // info : []
      // "asso" : [1],
      // "structure" : [3],
      // "scolarite" : [5]
    }
  }
  _loadStructure(){
    getStructureApi("{4}").then(data => this.setState({info: data.results}))
  }
  changeColor(){
    cat_btn: 
  }

=======

  displayFilterMap(){
    this.props.navigation.navigate('FilterMap')
  }
  
>>>>>>> c91ef2127a0f7963a23492240ead1d34cd3f121c:Components/Structure.js
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={styles.appli}>&lt; nom de l'appli &gt;</Text>
          <TextInput style={styles.pages}>RECHERCHE</TextInput>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>INFO</Text>
              <TouchableOpacity style={styles.cat_btn} onPress={() => this.state.info}>
                <Icon name='info' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>ASSO</Text>
              <TouchableOpacity style={styles.cat_btn} onPress={() => {}}>
                <Icon name='users' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>STRUCTURE</Text>
              <TouchableOpacity style={styles.cat_btn} onPress={() => {}}>
                <Icon name='home' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>SCOLARITÉ</Text>
              <TouchableOpacity style={styles.cat_btn} onPress={() => {}}>
                <Icon name='graduation-cap' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>RETOUR</Text>
<<<<<<< HEAD:Components/Filter2.js
              <TouchableOpacity style={styles.cat_btn} onPress={() => {}}>
=======
              <TouchableOpacity style={styles.cat_btn} onPress= {()=> this.props.navigation.goBack()}>
>>>>>>> c91ef2127a0f7963a23492240ead1d34cd3f121c:Components/Structure.js
                <Icon name='arrow-left' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>VALIDER</Text>
<<<<<<< HEAD:Components/Filter2.js
              <TouchableOpacity style={styles.cat_btn} onPress={() => {}}>
=======
              <TouchableOpacity style={styles.cat_btn} onPress={()=>this.displayFilterMap()}>
>>>>>>> c91ef2127a0f7963a23492240ead1d34cd3f121c:Components/Structure.js
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

export default Filter2
