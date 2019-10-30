import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
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
        <View>
          <View style={styles.content_categories}>
            <TouchableOpacity style={styles.btn}>
              <Icon name="info" size={30} color="#900" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Icon name="home" size={30} color="#900" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Icon name="blind" size={30} color="#900" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Icon name="graduation-cap" size={30} color="#900" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Icon name="swimmer" size={30} color="#900" />
            </TouchableOpacity>
          </View>
          <View style={styles.categories_filter}>

          </View>
        </View>


        <View style={styles.list}>
          <Text>Affichage de mes résultats sous forme de boutons liste</Text>
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
    marginTop: 40,
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
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,

  },
  content_categories: {
    marginTop: 60,
    marginLeft: 30,
    height: 70,
    width: 350,
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btn: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "#EFDCE0"
  },
  categories_filter: {
    height: 70,
    width: 350,
    backgroundColor: "white",
  },
  list: {
    height: 400,
    width: 350,
    backgroundColor: "white",
    marginTop: 80,
    marginLeft: 30,
    justifyContent: "center"
  }

});
export default Filter
