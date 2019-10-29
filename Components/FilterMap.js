import React from 'react'
import MapView from 'react-native-maps';
import { View, StyleSheet, Dimensions} from 'react-native'

class FilterMap extends React.Component {
  getInitialState() {
    return {
      region: {
        latitude: 46.9861191,
        longitude: 3.1422382,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} region={this.setState} onRegionChange={this.onRgionChange}/>
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
