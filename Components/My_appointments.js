import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  FlatList
} from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ImageBackground } from "react-native";

export default class Myappointments extends React.Component {
  static navigationOptions = {
    title: ""
    //   backgroundColor:'#91dbb0',
    //  headerRight: <Icon name="map-marker-alt" size={30} color="#4d5454" />
    //header:null
  };
  state={
    data: []
  }

  componentDidMount = () => {
    var user_id = null
    AsyncStorage.getItem("userID").then(result => {
      // this.setState({ user_id: result });
      // console.log(this.state.user_id);
      user_id = result
      const url = ip_path + "/api/appointments/user/" +user_id
      console.log(url)
      fetch(url)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson)
            this.setState(
              {
                data: responseJson.appointment
              
              })
            
          })      
          .catch(error => {
            console.error(error);
          });
    });
   
  };

  render() {
        return (
      <View style={{ flex: 1, paddingTop: 20 }}>
       <Text>Appointment time - slot: {this.state.data.time_slot}</Text>
       <Text>Appointment Date : {new Date(this.state.data.date).toDateString()}</Text>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#4d5454",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 15
  },
  container: {
    flex: 1,
    justifyContent: "flex-start"
    //  alignItems:'center'
  }
});
