import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getStructureApi } from '../API/DBApi'

class Filter2 extends React.Component {
//INFO: structure 4 et 2
  constructor(props){
  super(props)
  this.state ={
    assoColor: 'white',
    structColor: 'white',
    scolColor: 'white'
    };
  this.onPressedAss = 0;
  this.onPressedStruct = 0;
  this.onPressedScol = 0;
  }
  displayLocalisation(){
    this.props.navigation.navigate('Localisation', {association:this.onPressedAss, structure:this.onPressedStruct, school:this.onPressedScol} )
  }
  _onPressedAss(){
    if (this.onPressedAss) {
      this.onPressedAss = 0;
      this.setState({assoColor: 'white'});
    } else {
      this.onPressedAss = 1;
      this.setState({assoColor: '#f4c095'});
    }
  console.log(this.onPressedAss)
  }
  _onPressedStruct(){
    if (this.onPressedStruct) {
      this.onPressedStruct = 0;
      this.setState({structColor: 'white'});
    } else {
      this.onPressedStruct = 1;
      this.setState({structColor: '#f4c095'});
    }
    console.log(this.onPressedStruct)
  }
  _onPressedScol(){
    if (this.onPressedScol) {
      this.onPressedScol = 0;
      this.setState({scolColor: 'white'});
    } else {
      this.onPressedScol = 1;
      this.setState({scolColor: '#f4c095'});
    }
    console.log(this.onPressedScol)
  }

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
                <Icon name='info' color="#00858e" style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>ASSO</Text>
              <TouchableOpacity style={{
                width: '65%',
                height: '65%',
                borderRadius: 25,
                backgroundColor: this.state.assoColor,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=> this._onPressedAss()}>
                <Icon name='users'color="#00858e" style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>STRUCTURE</Text>
              <TouchableOpacity style={
                styles.cat_btn,
              {backgroundColor: this.state.structColor,
              borderRadius: 25,
              width: '65%',
              height: '65%',}} onPress={()=> this._onPressedStruct()}>
                <Icon name='home' color="#00858e" style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>SCOLARITÉ</Text>
              <TouchableOpacity style={{
              width: '65%',
              height: '65%',
              borderRadius: 25,
              backgroundColor: this.state.scolColor,
              alignItems: 'center',
              justifyContent: 'center',
            }} onPress={()=> this._onPressedScol()}>
                <Icon name='graduation-cap' color="#00858e" style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>RETOUR</Text>
              <TouchableOpacity style={styles.cat_btn} onPress= {()=> this.props.navigation.goBack()}>
                <Icon name='arrow-left' color="#00858e" style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>VALIDER</Text>
              <TouchableHighlight style={styles.cat_btn} onPress={()=>this.displayLocalisation()}>
                <Icon name='check' color="#00858e" style={styles.cat_btn_ico}/>
              </TouchableHighlight>
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
    backgroundColor: '#e0f5f5',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    color: '#00858e',
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
    width: '65%',
    height: '65%',
    borderRadius: 25,
    backgroundColor: '#e0f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cat_btn_ico: {
    fontSize: 96,
    color: '#00858e',
  }
});

export default Filter2
