import React from 'react';
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
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground } from 'react-native'

export default class Underconstruction extends React.Component {
    static navigationOptions = {
        title: 'Go Back',
     //   backgroundColor:'#91dbb0',
      //  headerRight: <Icon name="map-marker-alt" size={30} color="#4d5454" />        
       //header:null
      };
      render() {
        return (
            <View style={[styles.container]}>                
                <Text style={[styles.text]}>Appointment history:</Text>
            </View>

            )};
        }
const styles = StyleSheet.create({    
        text: {
            color: '#4d5454',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop:15,
           
           },
           container:{
               flex:1,
               justifyContent:'flex-start',
             //  alignItems:'center'
           }
    }
)