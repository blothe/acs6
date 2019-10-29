import React from 'react'
import MapView from 'react-native-maps';
import { View, StyleSheet, Dimensions} from 'react-native'

class FilterMap extends React.Component {
  //position initial sur la carte
  render() {
    return (
      <View style={styles.container}>
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

export default FilterMap
