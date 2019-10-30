import React from 'react'
import MapView from 'react-native-maps';
import { View, StatusBar, Text, StyleSheet, Dimensions, Platform} from 'react-native'

class FilterMap extends React.Component {
//recuperer la hauteur du statusbar*/
  constructor(props) {
    super(props)
    this.state= {
      statusBarHeight : StatusBar.currentHeight,
    }
  }
  //position initial sur la carte
  render() {
    return (
      <View style={styles.container}>
      {/*permet d'ajouter la hauteur du statusbar*/}
      <View style={{height: this.state.statusBarHeight}} ></View>
      <View style={styles.content_btn}>
      <Text> Nouvelle recherche</Text>
      </View>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
          latitude: 46.9861191,
          longitude: 3.1422382,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
     />
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
    height: Dimensions.get('window').height
  }
})

export default FilterMap
