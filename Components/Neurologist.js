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

export default class Neurologist extends React.Component {
    static navigationOptions = {
        title: 'Find your Dentist',
        header:null
      };      
    render() {
        return (
    <ScrollView style={[styles.backgroundColor]}>
      <View>
        <View style={[styles.container]}> 
        <View style={[styles.searchengineContainer]}>
              <View style={[styles.hflex]}> 
                    <Icon name="search" size={30} color="#4d5454" />               
                    <TextInput style={[styles.inputbox]}
                      placeholder="Search for Neurologist"
                      placeholderTextColor="#4d5454"
                      //  underlineColorAndroid="transparent"                        
                      //  numberOfLines = {1}
                        borderBottomColor='#3e3a42'
                        onChangeText={(username) => this.setState({ username })}
                      />
                    </View> 
                </View>
               <View style={[styles.doctorcontainer]}> 
               <Text style={[styles.avai]}>Available Neurologists</Text>           
                <View style={[styles.profilecard]}>
                 <View style={[styles.container1]}>
                    <View style={[styles.container2]}>
                    <Icon name="user-md" size={80} color="#4d5454" /> 
                        <View style={[styles.verflex]}>
                            <Text style={[styles.text]}>Dr.Amrit Tripathi</Text>
                            <Text>Neuro care</Text>
                            <Text>Prithvichowkh,Pokhara</Text>
                            <Text>9846800008</Text>
                        </View>
                        </View>
                                                
                        </View>
                        <View style={[styles.container3]}>
                          <TouchableOpacity style={styles.viewprofile} onPress={this._homePage}>                          
                                <Text style={[styles.text]}>View Profile</Text>                         
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.makeappointment} onPress={this._makeappointment}>                          
                                <Text style={[styles.text1]}>Make Appointment</Text>                         
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.call} onPress={this._homePage}>  
                          <Icon name="phone" size={15} color="#ffffff" />                        
                          <Text style={[styles.text1]}>Call</Text>                         
                          </TouchableOpacity>
                    </View>                    
                  </View>      
                  <View style={[styles.profilecard]}>
                 <View style={[styles.container1]}>
                    <View style={[styles.container2]}>
                    <Icon name="user-md" size={80} color="#4d5454" /> 
                        <View style={[styles.verflex]}>
                            <Text style={[styles.text]}>Dr.Aashirbad Timilsina </Text>
                            <Text>Miracle dental care</Text>
                            <Text>Parsyang,Pokhara</Text>
                            <Text>9846801108</Text>
                        </View>
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
                  <View style={[styles.profilecard]}>
                 <View style={[styles.container1]}>
                    <View style={[styles.container2]}>
                    <Icon name="user-md" size={80} color="#4d5454" /> 
                        <View style={[styles.verflex]}>
                            <Text style={[styles.text]}>Dr.Subham bhandari</Text>
                            <Text>Bhandari dental care</Text>
                            <Text>lamachour,Pokhara</Text>
                            <Text>9846800008</Text>
                        </View>
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
                  <View style={[styles.profilecard]}>
                 <View style={[styles.container1]}>
                    <View style={[styles.container2]}>
                    <Icon name="user-md" size={80} color="#4d5454" /> 
                        <View style={[styles.verflex]}>
                            <Text style={[styles.text]}>Dr.Sugam Pradhan</Text>
                            <Text>Gandaki dental care</Text>
                            <Text>Prithvichowkh,Pokhara</Text>
                            <Text>9846914455</Text>
                        </View>
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
                  
                </View>                                   
             </View> 
          </View>
     </ScrollView>  
                
        
        );
    }
    _makeappointment = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('MakeApointment');
    };
}

const styles = StyleSheet.create({    
      horflex:{
          flexDirection:'row'
      },
      verflex:{
        flexDirection:'column',
        marginLeft:20
    },
    hflex:{
      flexDirection:"row",
      flex:1,
      justifyContent:'center',
      alignItems:'baseline' ,
      marginLeft:10
    },
    vflex:{
      flexDirection:"column",
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginLeft:15,
     justifyContent:'center'
    },
      container:{
        flex:1,
        height:'100%',
        width:'100%',
              //  backgroundColor:'#ebf2ee',      
      }, 
      profilecard:{
        flex:1,
        height:155,
        width:'100%',
        backgroundColor:'#000000',  
        marginBottom:10   
      }, 
      container1:{
        flex:1,
        height:130,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#ebf2ee',      
      }, 
      doctorcontainer:{
        flex:1,
      //  height:110,
        width:'100%',
        flexDirection:'column',
        marginTop:40,
        backgroundColor:'#d1e6d7',
      //  justifyContent:'flex-start'      
      }, 
      text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent:'center',
        alignItems:'center'
       
       },
       avai: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
       
       },
       text1: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:4
       
       },
       
       
      container2:{
        flex:1,
        height:120,
        width:130,
        flexDirection:'row',
        borderRadius:100
      //  backgroundColor:'#ebf2ee',      
      }, 
      container3:{
        flex:1,
        height:80,
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
inputbox:{
  width:230,
  height:40,     
  marginTop:10,
  marginLeft:15,
  backgroundColor:'#ebf2ee'            
},
searchengineContainer:{
  width:295,
  height:60,
  alignItems:'baseline',
  justifyContent:'center',          
  borderRadius:20,
  backgroundColor:'#ebf2ee' ,
  marginTop:30,
  marginLeft:40,
  
},
backgroundColor:{
  backgroundColor:'#91dbb0'
} , 
           
})