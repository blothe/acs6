import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'
// import InfoIcon from '@material-ui/icons/Info';

class Filter extends React.Component {
  render (){
    return (
      <View style={styles.main_filter}>
        <View style={styles.content_title}>
          <Text>J'affine ma recherche</Text>
        </View>
        <View>
          <TextInput placeholder="recherche"/>
        </View>
        <View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_filter: {
    backgroundColor: "#0a2342"
  },
  content_title: {

  }
})
export default Filter
