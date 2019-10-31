import React from 'react'
import MapView, {Marker, Callout} from 'react-native-maps'
import { View, StatusBar, Text, StyleSheet, Dimensions, Platform, Button, FlatList} from 'react-native'
import { StackActions, NavigationActions, Const } from 'react-navigation';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
// import markers from '../Tmp/data'
import { getCityApi, getLocationApi, getDepartementApi } from '../API/DBApi'


class FilterMap extends React.Component {
//recuperer la hauteur du statusbar*/
  constructor(props) {
    super(props)
    this.state= {
      statusBarHeight : StatusBar.currentHeight,
      ville: "",
      department: "",
      markers: "",
      region: {
	      latitude: 46.990896,
	      longitude: 3.162845,
	      latitudeDelta: 0.0922,
	      longitudeDelta: 0.0421,
	    },
      structure:this._defineInitialStructure(),
      handicap:this._defineInitialHandicap()
    }

    this._defineInitialRegion()
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    const { latitude, longitude } = location.coords;

    this.setState({
      region:{
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  };

  _defineInitialStructure(){
    let tmp = "";

    if(this.props.navigation.state.params.structures != undefined){
      if(this.props.navigation.state.params.structures.association != 0) tmp += "-1"
      if(this.props.navigation.state.params.structures.school != 0) tmp += "-5"
      if(this.props.navigation.state.params.structures.structure != 0) tmp += "-3"

      tmp = tmp.substring(1)
    }
    else
      tmp = 0

    return tmp
  }

  _defineInitialHandicap(){
    let tmp = "";

    if(this.props.navigation.state.params.handicaps != undefined){
      if(this.props.navigation.state.params.handicaps.association != 0) tmp += "-1"
      if(this.props.navigation.state.params.handicaps.school != 0) tmp += "-5"
      if(this.props.navigation.state.params.handicaps.structure != 0) tmp += "-3"

      tmp = tmp.substring(1)
    }
    else
      tmp = 0

    return tmp
  }

  _defineInitialRegion(){
    if(this.props.navigation.state.params.typeLocalisation == 1)
      this._getLocationAsync()
  }

// Affiche le type de structure en fonction de son numéro
  _getTypeStructure(type){
    if(type == 1) return 'Association'
    else if(type == 1) return 'Centre Ressources Handicap'
    else if(type == 3) return 'Service Médico-social'
    else if(type == 4) return 'MDPH'
    else if(type == 5) return 'Etablissement scolaire'
    else return '';
  }

  // est appelé après la fonction render et permet donc d'exécuter du code après que la page se soit affichée
  componentDidMount() {
    // Get structures with city localisation
    if(this.state.ville != ""){
      getCityApi(this.state.ville, this.state.structure, this.state.handicap).then(data => {
        this.setState({
          markers: data,
          region:{
            longitude: Number(data[0].longitude),
            latitude: Number(data[0].latitude),
            latitudeDelta: 0.0922,
    	      longitudeDelta: 0.0421
          }
        })
      })
    }

    // Get structures with department location
    else if(this.state.department != ""){
      getDepartementApi(this.state.department, this.state.structure, this.state.handicap).then(data => {
        this.setState({
          markers: data,
          region:{
            longitude: Number(data[0].longitude),
            latitude: Number(data[0].latitude),
            latitudeDelta: 0.0922,
    	      longitudeDelta: 0.0421
          }
        })
      })
    }

    // Get structures with geolocation
    else if(this.state.region.longitude != "" && this.state.region.latitude != ""){
      getLocationApi(this.state.region.longitude, this.state.region.latitude, this.state.structure, this.state.handicap).then(data => {
        this.setState({
          markers: data
        })
      })
    }
  }

  _displayMarkers() {
    if (this.state.markers != "") {
      return this.state.markers.map(marker => {
        return (<Marker key={marker.id} coordinate={{ latitude: Number(marker.latitude), longitude: Number(marker.longitude) }} pinColor="blue">
          <Callout style={styles.marker_container}>
            <Text style={styles.marker_nom}>{marker.nom}</Text>
            <Text><Text style={styles.marker_bold}>Adresse : </Text>{marker.adresse}</Text>
            <Text><Text style={styles.marker_bold}>Type : </Text>{this._getTypeStructure(marker.type_structure)}</Text>
            <Text><Text style={styles.marker_bold}>Handicap : </Text>{marker.types_handicap}</Text>
            <Text><Text style={styles.marker_bold}>Site Web : </Text>{marker.lien}</Text>
          </Callout>
        </Marker>)
       })
    }
  }

  //position initial sur la carte
  render() {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
      NavigationActions.navigate({ routeName: 'Welcome' })
      ],
    });

    return (
      <View style={styles.container}>
        <View style={{height: this.state.statusBarHeight}} ></View>
        <View >
          <Button style={styles.content_btn}
          title="Nouvelle recherche" onPress={()=>this.props.navigation.dispatch(resetAction)}
          />
        </View>

        <MapView
          style={styles.mapStyle}
          region={this.state.region}
        >

        {this._displayMarkers()}

        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff"
  },
  content_btn: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 22,
      // backgroundColor: '#7D9D7F',
    backgroundColor: '#b7ecec',
    flexDirection:'row',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex:-1
  },
  marker_container:{
    width:Dimensions.get('window').width,
    borderColor:'black'
  },
  marker_nom:{
    fontWeight:'bold',
    textAlign:'center',
    width:Dimensions.get('window').width
  },
  marker_bold:{
    fontWeight:'bold'
  }
})

export default FilterMap
