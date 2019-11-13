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

export default class Doctorlist extends React.Component {
    render() {
        return (
            <ScrollView style={[styles.backgroundColor]}>
                <View style={[styles.container]}>
                <View style={[styles.container2]}>
                    <Icon name="user-md" size={80} color="#4d5454" /> 
                        <View style={[styles.verflex]}>
                            <Text style={[styles.text]}></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                        </View>
                 </View>
                 <View style={[styles.container3]}>
                          <TouchableOpacity style={styles.viewprofile} onPress={this._homePage}>                          
                                <Text style={[styles.text]}>View Profile</Text>                         
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.makeappointment} onPress={this._homePage}>                          
                                <Text style={[styles.text1]}>Make Appointment</Text>                         
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.call} onPress={this._homePage}>  
                          <Icon name="phone" size={15} color="#ffffff" />                        
                          <Text style={[styles.text1]}>Call</Text>                         
                     </TouchableOpacity>
                    </View>     


                </View>

            </ScrollView>
        )};
}
const styles = StyleSheet.create({  
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'center'
              //  backgroundColor:'#ebf2ee',      
      }, 
      horflex:{
        flexDirection:'row'
    },
    verflex:{
      flexDirection:'column',
      marginLeft:20
  },
  container2:{
    flex:1,
    height:120,
    width:130,
    flexDirection:'row',
    borderRadius:100
  //  backgroundColor:'#ebf2ee',      
  }, 
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    justifyContent:'center',
    alignItems:'center'
   
   },
   container3:{
    flex:1,
    height:40,
    width:'100%',
    flexDirection:'row',
    borderRadius:10,
    justifyContent:'space-between',
    marginTop:3,
    backgroundColor:'#d1e6d7',      
  },     
  
  viewprofile:{         
    marginTop:0,
    width:100,
    height:35,
    borderRadius:5,
    marginLeft:10,
    backgroundColor:'#e9f5f3',
    justifyContent:'center',
    alignItems:'center'
},
makeappointment:{         
  marginTop:0,
  width:140,
  height:35,
  borderRadius:5,
  marginLeft:5,
  backgroundColor:'#11cad4',
  justifyContent:'center',
  alignItems:'center'
},
call:{         
marginTop:0,
width:80,
height:35,
borderRadius:5,
marginLeft:10,
backgroundColor:'#0d8c31',
justifyContent:'center',
alignItems:'center',
flexDirection:'row'
},                 
})