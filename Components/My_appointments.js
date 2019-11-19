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
import { array } from "prop-types";

export default class Myappointments extends React.Component {
  static navigationOptions = {
    title: "My Appointments"
    //   backgroundColor:'#91dbb0',
    //  headerRight: <Icon name="map-marker-alt" size={30} color="#4d5454" />
    //header:null
  };
  constructor(props) {
    super(props);
    this.state = {
    data: [],
    data2: [],
    data3: "",
    data4: "",
    isLoading: "true"
  };
}

  componentDidMount = () => {
    var user_id = null;
    AsyncStorage.getItem("userID").then(result => {
      // this.setState({ user_id: result });
      // console.log(this.state.user_id);
      user_id = result;
      const url = ip_path + "/api/appointments/user/" + user_id;
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson.doctorNameValue[0]);
         
          // .appointments[0].time_slot);
          // console.log(responseJson.doctorNameValue[0].Fullname);

          this.setState({
            isLoading: false,
            data: responseJson.doctorNameValue
           
          });
        })
        .catch(error => {
          console.error(error);
        });
    });
  };
  _renderItem = ({ item  }) => (
   
    
     
      <View style={[styles.container]}>
        <View style={[styles.container2]}>
         
          <View style={[styles.verflex]}>
            <Text style={[styles.text]}></Text>
            <Text>Doctor name: {item[0]}</Text> 
            <Text>Doctor address:{item[1]}</Text>
            <Text>Appointmented Time Slot:{item[2]}</Text>
            <Text>Appointed Date:{ new Date(item[3]).toDateString()} </Text>
            
          </View>
        </View>
      </View>
    
    
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={"large"} />
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View>
          <FlatList data={this.state.data} renderItem={this._renderItem} />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  text: {
    color: "#4d5454",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 5,
    marginTop: 15
  },
  text2: {
    color: "#1038b0",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 189,
    marginTop: -22,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    //justifyContent: "center",

    borderColor: "red"
  },
  container2: {
    flex: 1,
    borderColor: "black",
    backgroundColor: "#91dbb0",
    width: "85%",
    //alignItems:'center',
    marginLeft: 35,
    marginTop: 20,
    //marginBottom: 330,
    borderRadius: 10
    // justifyContent:"center"
  }
});
