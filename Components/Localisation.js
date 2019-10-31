import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

class Filter3 extends React.Component {
constructor(props){
  super(props)
  this.typestructure = this.props.navigation.state.params
}
  state = {dpt: ''}
  updateDpt = (dpt) => {
    this.setState({ dpt: dpt })
  }

  displayFilterMap(){
    this.props.navigation.navigate('FilterMap', {structures:this.typestructure, typeLocalisation:1})

  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={styles.appli}>&lt; HANDY' APP &gt;</Text>
          <Text style={styles.pages}>LOCALISATION</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <View style={styles.cat}>
              <Text style={styles.cat_txt}>AUTOUR DE MOI</Text>
              <TouchableOpacity style={[styles.cat_btn, styles.geoloc]} onPress={()=>this.displayFilterMap()}>
                <Icon name='street-view' style={styles.cat_btn_ico}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.row, styles.select]}>
            <View style={styles.cat}>
              <TextInput style={styles.field1} placeholder='Recherche par ville...'/>
            </View>
            <View style={styles.cat}>
              <Picker style={styles.field2} selectedValue = {this.state.dpt} onValueChange = {this.updateDpt}>
                <Picker.Item label = "Recherche par département..." value = "Recherche par département..."/>
                <Picker.Item label = "01 &ndash; AIN" value = "01 &ndash; AIN"/>
                <Picker.Item label = "02 &ndash; AISNE" value = "02 &ndash; AISNE"/>
                <Picker.Item label = "03 &ndash; ALLIER" value = "03 &ndash; ALLIER"/>
                <Picker.Item label = "04 &ndash; ALPES-DE-HAUTE-PROVENCE" value = "04 &ndash; ALPES-DE-HAUTE-PROVENCE"/>
                <Picker.Item label = "05 &ndash; HAUTES-ALPES" value = "05 &ndash; HAUTES-ALPES"/>
                <Picker.Item label = "06 &ndash; ALPES-MARITIMES" value = "06 &ndash; ALPES-MARITIMES"/>
                <Picker.Item label = "07 &ndash; ARDÈCHE" value = "07 &ndash; ARDÈCHE"/>
                <Picker.Item label = "08 &ndash; ARDENNES" value = "08 &ndash; ARDENNES"/>
                <Picker.Item label = "09 &ndash; ARIÈGE" value = "09 &ndash; ARIÈGE"/>
                <Picker.Item label = "10 &ndash; AUBE" value = "10 &ndash; AUBE"/>
                <Picker.Item label = "11 &ndash; AUDE" value = "11 &ndash; AUDE"/>
                <Picker.Item label = "12 &ndash; AVEYRON" value = "12 &ndash; AVEYRON"/>
                <Picker.Item label = "13 &ndash; BOUCHES-DU-RHÔNE" value = "13 &ndash; BOUCHES-DU-RHÔNE"/>
                <Picker.Item label = "14 &ndash; CALVADOS" value = "14 &ndash; CALVADOS"/>
                <Picker.Item label = "15 &ndash; CANTAL" value = "15 &ndash; CANTAL"/>
                <Picker.Item label = "16 &ndash; CHARENTE" value = "16 &ndash; CHARENTE"/>
                <Picker.Item label = "17 &ndash; CHARENTE-MARITIME" value = "17 &ndash; CHARENTE-MARITIME"/>
                <Picker.Item label = "18 &ndash; CHER" value = "18 &ndash; CHER"/>
                <Picker.Item label = "19 &ndash; CORRÈZE" value = "19 &ndash; CORRÈZE"/>
                <Picker.Item label = "2a &ndash; CORSE-DU-SUD" value = "2a &ndash; CORSE-DU-SUD"/>
                <Picker.Item label = "2b &ndash; HAUTE-CORSE" value = "2b &ndash; HAUTE-CORSE"/>
                <Picker.Item label = "21 &ndash; CÔTE-D'OR" value = "21 &ndash; CÔTE-D'OR"/>
                <Picker.Item label = "22 &ndash; CÔTES-D'ARMOR" value = "22 &ndash; CÔTES-D'ARMOR"/>
                <Picker.Item label = "23 &ndash; CREUSE" value = "23 &ndash; CREUSE"/>
                <Picker.Item label = "24 &ndash; DORDOGNE" value = "24 &ndash; DORDOGNE"/>
                <Picker.Item label = "25 &ndash; DOUBS" value = "25 &ndash; DOUBS"/>
                <Picker.Item label = "26 &ndash; DRÔME" value = "26 &ndash; DRÔME"/>
                <Picker.Item label = "27 &ndash; EURE" value = "27 &ndash; EURE"/>
                <Picker.Item label = "28 &ndash; EURE-ET-LOIR" value = "28 &ndash; EURE-ET-LOIR"/>
                <Picker.Item label = "29 &ndash; FINISTÈRE" value = "29 &ndash; FINISTÈRE"/>
                <Picker.Item label = "30 &ndash; GARD" value = "30 &ndash; GARD"/>
                <Picker.Item label = "31 &ndash; HAUTE-GARONNE" value = "31 &ndash; HAUTE-GARONNE"/>
                <Picker.Item label = "32 &ndash; GERS" value = "32 &ndash; GERS"/>
                <Picker.Item label = "33 &ndash; GIRONDE" value = "33 &ndash; GIRONDE"/>
                <Picker.Item label = "34 &ndash; HÉRAULT" value = "34 &ndash; HÉRAULT"/>
                <Picker.Item label = "35 &ndash; ILLE-ET-VILAINE" value = "35 &ndash; ILLE-ET-VILAINE"/>
                <Picker.Item label = "36 &ndash; INDRE" value = "36 &ndash; INDRE"/>
                <Picker.Item label = "37 &ndash; INDRE-ET-LOIRE" value = "37 &ndash; INDRE-ET-LOIRE"/>
                <Picker.Item label = "38 &ndash; ISÈRE" value = "38 &ndash; ISÈRE"/>
                <Picker.Item label = "39 &ndash; JURA" value = "39 &ndash; JURA"/>
                <Picker.Item label = "40 &ndash; LANDES" value = "40 &ndash; LANDES"/>
                <Picker.Item label = "41 &ndash; LOIR-ET-CHER" value = "41 &ndash; LOIR-ET-CHER"/>
                <Picker.Item label = "42 &ndash; LOIRE" value = "42 &ndash; LOIRE"/>
                <Picker.Item label = "43 &ndash; HAUTE-LOIRE" value = "43 &ndash; HAUTE-LOIRE"/>
                <Picker.Item label = "44 &ndash; LOIRE-ATLANTIQUE" value = "44 &ndash; LOIRE-ATLANTIQUE"/>
                <Picker.Item label = "45 &ndash; LOIRET" value = "45 &ndash; LOIRET"/>
                <Picker.Item label = "46 &ndash; LOT" value = "46 &ndash; LOT"/>
                <Picker.Item label = "47 &ndash; LOT-ET-GARONNE" value = "47 &ndash; LOT-ET-GARONNE"/>
                <Picker.Item label = "48 &ndash; LOZÈRE" value = "48 &ndash; LOZÈRE"/>
                <Picker.Item label = "49 &ndash; MAINE-ET-LOIRE" value = "49 &ndash; MAINE-ET-LOIRE"/>
                <Picker.Item label = "50 &ndash; MANCHE" value = "50 &ndash; MANCHE"/>
                <Picker.Item label = "51 &ndash; MARNE" value = "51 &ndash; MARNE"/>
                <Picker.Item label = "52 &ndash; HAUTE-MARNE" value = "52 &ndash; HAUTE-MARNE"/>
                <Picker.Item label = "53 &ndash; MAYENNE" value = "53 &ndash; MAYENNE"/>
                <Picker.Item label = "54 &ndash; MEURTHE-ET-MOSELLE" value = "54 &ndash; MEURTHE-ET-MOSELLE"/>
                <Picker.Item label = "55 &ndash; MEUSE" value = "55 &ndash; MEUSE"/>
                <Picker.Item label = "56 &ndash; MORBIHAN" value = "56 &ndash; MORBIHAN"/>
                <Picker.Item label = "57 &ndash; MOSELLE" value = "57 &ndash; MOSELLE"/>
                <Picker.Item label = "58 &ndash; NIÈVRE" value = "58 &ndash; NIÈVRE"/>
                <Picker.Item label = "59 &ndash; NORD" value = "59 &ndash; NORD"/>
                <Picker.Item label = "60 &ndash; OISE" value = "60 &ndash; OISE"/>
                <Picker.Item label = "61 &ndash; ORNE" value = "61 &ndash; ORNE"/>
                <Picker.Item label = "62 &ndash; PAS-DE-CALAIS" value = "62 &ndash; PAS-DE-CALAIS"/>
                <Picker.Item label = "63 &ndash; PUY-DE-DÔME" value = "63 &ndash; PUY-DE-DÔME"/>
                <Picker.Item label = "64 &ndash; PYRÉNÉES-ATLANTIQUES" value = "64 &ndash; PYRÉNÉES-ATLANTIQUES"/>
                <Picker.Item label = "65 &ndash; HAUTES-PYRÉNÉES" value = "65 &ndash; HAUTES-PYRÉNÉES"/>
                <Picker.Item label = "66 &ndash; PYRÉNÉES-ORIENTALES" value = "66 &ndash; PYRÉNÉES-ORIENTALES"/>
                <Picker.Item label = "67 &ndash; BAS-RHIN" value = "67 &ndash; BAS-RHIN"/>
                <Picker.Item label = "68 &ndash; HAUT-RHIN" value = "68 &ndash; HAUT-RHIN"/>
                <Picker.Item label = "69 &ndash; RHÔNE" value = "69 &ndash; RHÔNE"/>
                <Picker.Item label = "70 &ndash; HAUTE-SAÔNE" value = "70 &ndash; HAUTE-SAÔNE"/>
                <Picker.Item label = "71 &ndash; SAÔNE-ET-LOIRE" value = "71 &ndash; SAÔNE-ET-LOIRE"/>
                <Picker.Item label = "72 &ndash; SARTHE" value = "72 &ndash; SARTHE"/>
                <Picker.Item label = "73 &ndash; SAVOIE" value = "73 &ndash; SAVOIE"/>
                <Picker.Item label = "74 &ndash; HAUTE-SAVOIE" value = "74 &ndash; HAUTE-SAVOIE"/>
                <Picker.Item label = "75 &ndash; PARIS" value = "75 &ndash; PARIS"/>
                <Picker.Item label = "76 &ndash; SEINE-MARITIME" value = "76 &ndash; SEINE-MARITIME"/>
                <Picker.Item label = "77 &ndash; SEINE-ET-MARNE" value = "77 &ndash; SEINE-ET-MARNE"/>
                <Picker.Item label = "78 &ndash; YVELINES" value = "78 &ndash; YVELINES"/>
                <Picker.Item label = "79 &ndash; DEUX-SÈVRES" value = "79 &ndash; DEUX-SÈVRES"/>
                <Picker.Item label = "80 &ndash; SOMME" value = "80 &ndash; SOMME"/>
                <Picker.Item label = "81 &ndash; TARN" value = "81 &ndash; TARN"/>
                <Picker.Item label = "82 &ndash; TARN-ET-GARONNE" value = "82 &ndash; TARN-ET-GARONNE"/>
                <Picker.Item label = "83 &ndash; VAR" value = "83 &ndash; VAR"/>
                <Picker.Item label = "84 &ndash; VAUCLUSE" value = "84 &ndash; VAUCLUSE"/>
                <Picker.Item label = "85 &ndash; VENDÉE" value = "85 &ndash; VENDÉE"/>
                <Picker.Item label = "86 &ndash; VIENNE" value = "86 &ndash; VIENNE"/>
                <Picker.Item label = "87 &ndash; HAUTE-VIENNE" value = "87 &ndash; HAUTE-VIENNE"/>
                <Picker.Item label = "88 &ndash; VOSGES" value = "88 &ndash; VOSGES"/>
                <Picker.Item label = "89 &ndash; YONNE" value = "89 &ndash; YONNE"/>
                <Picker.Item label = "90 &ndash; TERRITOIRE DE BELFORT" value = "90 &ndash; TERRITOIRE DE BELFORT"/>
                <Picker.Item label = "91 &ndash; ESSONE" value = "91 &ndash; ESSONE"/>
                <Picker.Item label = "92 &ndash; HAUTS-DE-SEINE" value = "92 &ndash; HAUTS-DE-SEINE"/>
                <Picker.Item label = "93 &ndash; SEINE-SAINT-DENIS" value = "93 &ndash; SEINE-SAINT-DENIS"/>
                <Picker.Item label = "94 &ndash; VAL-DE-MARNE" value = "94 &ndash; VAL-DE-MARNE"/>
                <Picker.Item label = "95 &ndash; VAL-D'OISE" value = "95 &ndash; VAL-D'OISE"/>
                <Picker.Item label = "971 &ndash; GUADELOUPE" value = "971 &ndash; GUADELOUPE"/>
                <Picker.Item label = "972 &ndash; MARTINIQUE" value = "972 &ndash; MARTINIQUE"/>
                <Picker.Item label = "973 &ndash; GUYANE" value = "973 &ndash; GUYANE"/>
                <Picker.Item label = "974 &ndash; LA RÉUNION" value = "974 &ndash; LA RÉUNION"/>
                <Picker.Item label = "976 &ndash; MAYOTTE" value = "976 &ndash; MAYOTTE"/>
              </Picker>
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
              <TouchableOpacity style={styles.cat_btn} onPress={()=>this.displayFilterMap()}>
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
  //   borderRadius: 50,
  //   backgroundColor: '#e0f5f5',
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
  },
  geoloc: {
    width: '96%',
  },
  select: {
    width: '100%',
    flexDirection: 'column',
    margin: 5,
  },
  field1: {
    width: '96%',
    flex: 2,
    margin: 5,
    paddingLeft: 25,
    borderRadius: 25,
    backgroundColor: '#e0f5f5',
    textAlignVertical: 'center',
    fontSize: 24,
    color: '#00858e',
  },
  field2: {
    width: '96%',
    flex: 2,
    margin: 5,
    paddingLeft: 25, // Android
    borderRadius: 25, // Android
    backgroundColor: '#e0f5f5',
    textAlignVertical: 'center', // Android
    fontSize: 24, // Android
    color: '#00858e',
  }
});

export default Filter3
