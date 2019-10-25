import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
// import InfoIcon from '@material-ui/icons/Info';

class Filter extends React.Component {
  render (){
    return (
      <View style={styles.main_filter}>
        <View style={styles.content_title}>
          <Text style={styles.text}>J'affine ma recherche</Text>
        </View>
        <View style={styles.content_searchb}>
          <TextInput style={styles.searchb} placeholder="recherche"/>
        </View>
        <View style={styles.content_categories}>
          <TouchableOpacity style={styles.btn}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_filter: {
    backgroundColor: "#0a2342",
    flex: 1
  },
  content_title: {
    color: 'white',
    justifyContent: "center"
  },
  text: {
    color: "white",
    marginTop: 30,
    fontSize: 24,
    textAlign: "center"

  },
  content_searchb: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  searchb: {
    height: 45,
    width: 300,
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 20,

  },
  content_categories: {
    marginTop: 40,
    height: 70,
    width: 350,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btn: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "pink"
  }
});
export default Filter
