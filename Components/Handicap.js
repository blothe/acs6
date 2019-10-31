import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

class Handicap extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      audiColor: "white",
      mentalColor: "white",
      moteurColor: "white",
      visuelColor: "white"
    };
    this.onPressAudi = 0;
    this.onPressMental = 0;
    this.onPressMoteur = 0;
    this.onPressVisuel = 0;
  }
  _onPressAudi(){
    if (this.onPressAudi) {
      this.onPressAudi = 0;
      this.setState({audiColor: "white"});
    } else {
      this.onPressAudi = 1;
      this.setState({audiColor: "#b7ecec"});
    }
  }
  _onPressMental(){
    if (this.onPressMental) {
      this.onPressMental = 0;
      this.setState({mentalColor: "white"});
    } else {
      this.onPressMental = 1;
      this.setState({mentalColor: "#b7ecec"});
    }
  }
  _onPressMoteur(){
    if (this.onPressMoteur) {
      this.onPressMoteur = 0;
      this.setState({moteurColor: "white"});
    } else {
      this.onPressMoteur = 1;
      this.setState({moteurColor: "#b7ecec"});
    }
  }
  _onPressVisuel(){
    if (this.onPressVisuel) {
      this.onPressVisuel = 0;
      this.setState({visuelColor: "white"});
    } else {
      this.onPressVisuel = 1;
      this.setState({visuelColor: "#b7ecec"});
    }
  }

  displayLocalisation(){
    this.props.navigation.navigate('Localisation',
    {auditif: this.onPressAudi,
    mental: this.onPressMental,
    moteur: this.onPressMoteur,
    visuel: this.onPressVisuel})
  }

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
              <TouchableHighlight style={{
                width: '65%',
                height: '65%',
                borderRadius: 25,
                backgroundColor: this.state.audiColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}  onPress={()=> this._onPressAudi()}>
                <Icon name='deaf' style={styles.cat_btn_ico}/>
              </TouchableHighlight>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>MENTAL</Text>
              <TouchableHighlight style={{
                width: '65%',
                height: '65%',
                borderRadius: 25,
                backgroundColor: this.state.mentalColor,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=> this._onPressMental()}>
                <Icon name='puzzle-piece' style={styles.cat_btn_ico}/>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>MOTEUR</Text>
              <TouchableOpacity style={{
                width: '65%',
                height: '65%',
                borderRadius: 25,
                backgroundColor: this.state.moteurColor,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=> this._onPressMoteur()}>
                <Icon name='wheelchair' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>VISUEL</Text>
              <TouchableOpacity style={{
                width: '65%',
                height: '65%',
                borderRadius: 25,
                backgroundColor: this.state.visuelColor,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=> this._onPressVisuel()}>
                <Icon name='blind' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>RETOUR</Text>
              <TouchableOpacity style={styles.cat_btn} onPress={()=> this.props.navigation.goBack()}>
                <Icon name='arrow-left' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>VALIDER</Text>
              <TouchableOpacity style={styles.cat_btn} onPress={()=>this.displayLocalisation()}>
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
    width: '75%',
    height: '75%',
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

export default Handicap
