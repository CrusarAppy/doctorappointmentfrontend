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


export default class FindnBook extends React.Component {
    static navigationOptions = {
        title: 'Find and Book',
        backgroundColor:'#91dbb0',
        headerRight: <Icon name="map-marker-alt" size={30} color="#4d5454" onPress={this._undercons}/>        
       //header:null
      };
      onDentist = () =>{  
        
        console.log(JSON.stringify(user))
        try{
          fetch("http://localhost:3005/api/doctors/doctorSpeciality/",
          {
            method:'GET',
            headers:{
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            },
            //body: JSON.stringify(user)
          })
          .then((response => response.json()))
          .then((responsejson) => {
             // this.onSuccessSignIn(responsejson                       )
              console.log(responsejson)            
      
      
          })
          .catch(err => {
            //this.onFailSignIn()
            console.log(err)
          })
          
      }catch(err){          
          
          console.log(err);
      }}
      render() {
        return (
          
          <ScrollView style={[styles.backgroundColor]}>
          <View style={[styles.container]}>
          <View style={[styles.searchengineContainer]}>
              <View style={[styles.hflex]}> 
                    <Icon name="search" size={30} color="#4d5454" />               
                    <TextInput style={[styles.inputbox]}
                      placeholder="Search Doctors,Specialist or diseases"
                      placeholderTextColor="#4d5454"
                      //  underlineColorAndroid="transparent"                        
                      //  numberOfLines = {1}
                        borderBottomColor='#3e3a42'
                        onChangeText={(search) => this.setState({ search})}
                      />
                    </View> 
                </View>
              <View style={[styles.container1]}> 
              <Text style={[styles.text1]}>Search by Health concern</Text>    

                <View style={[styles.hflex]}>
                  <TouchableOpacity id={1} style={[styles.vflex]} onPress={this._dentist}>
                  <Icon name="tooth" size={30} color="#4d5454" style={[styles.image]}/> 
                  <Text>Dentists</Text> 
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.vflex]} onPress={this._doclist}>
                  <Icon name="allergies" size={30} color="#4d5454" style={[styles.image]}/> 
                  <Text>Dermatologist</Text> 
                  </TouchableOpacity>
                </View>

                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]}  onPress={this._neuro}>
                  <Icon name="brain" size={30} color="#4d5454" style={[styles.image]}/> 
                  <Text>Neurologist</Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.vflex]} onPress={this._cardio}>
                  <Icon name="heartbeat" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Cardiologist</Text>  
                  </TouchableOpacity>
                </View>
                <View style={[styles.hflex]} >
                  <TouchableOpacity style={[styles.vflex]} onPress={this._neuro}>
                    <Icon name="cannabis" size={30} color="#4d5454" style={[styles.image]}/> 
                    <Text>Medicine</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.vflex]} onPress={this._undercons}>
                    <Icon name="bone" size={30} color="#4d5454" style={[styles.image]}/> 
                    <Text>Orthopedic</Text>
                  </TouchableOpacity>                
                </View>
                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]} onPress={this._cardio}>
                    <Icon name="eye" size={30} color="#4d5454" style={[styles.image]}/> 
                    <Text>Eye Specialist</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.vflex]} onPress={this._undercons}>
                    <Icon name="female" size={30} color="#4d5454" style={[styles.image]}/> 
                    <Text>Women's Health</Text>
                  </TouchableOpacity>                
                </View>
                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]} onPress={this._undercons}>
                    <Icon name="meh-rolling-eyes" size={30} color="#4d5454" style={[styles.image]}/> 
                    <Text>Mental Health</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.vflex]} onPress={this._undercons}> 
                    <Icon name="syringe" size={30} color="#4d5454" style={[styles.image]}/> 
                    <Text>General Surgery</Text>
                  </TouchableOpacity>                
                </View>
              </View>      


          </View>
        </ScrollView>         
          
        )};
        _dentist = async () => {
          // await AsyncStorage.setItem('userToken', 'abc');
          this.props.navigation.navigate('Dentist');
        };
        _doclist = async () => {
          // await AsyncStorage.setItem('userToken', 'abc');
          this.props.navigation.navigate('Doclist');
        };
        _undercons = async () => {
          // await AsyncStorage.setItem('userToken', 'abc');
          this.props.navigation.navigate('Underconstruction');
        };
        _neuro = async () => {
          // await AsyncStorage.setItem('userToken', 'abc');
          this.props.navigation.navigate('Neurologist');
        };
        _cardio = async () => {
          // await AsyncStorage.setItem('userToken', 'abc');
          this.props.navigation.navigate('Cardiologist');
        };

    }
    const styles = StyleSheet.create({
      container:{
        flex:1,
        height:'100%',
        width:'100%',
      //  backgroundColor:'#ebf2ee',      
      }, 
      backgroundColor:{
        backgroundColor:'#91dbb0'
      } , 
      searchengineContainer:{
        width:295,
        height:60,
        alignItems:'baseline',
        justifyContent:'center',          
        borderRadius:20,        
        marginTop:40,
        marginLeft:40,
        backgroundColor:'#ffffff'
        
      },
      hflex:{
        flexDirection:"row",
        flex:1,
        justifyContent:'center',
        alignItems:'baseline' ,
        marginLeft:10,
        height:100
      },
      vflex:{
        flexDirection:"column",
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        height:80,
        width:60,
        borderRadius:25,
       justifyContent:'center',
       backgroundColor:'#91dbb0'
      },
      hflex:{
        flexDirection:"row",
        flex:1,
        justifyContent:'center',
        alignItems:'baseline' ,
        marginLeft:10,
        marginTop:10,        
        
      },
      container1: {
        flex: 1,
      //  alignItems: 'center',
        justifyContent: 'center',
        height:600,
        width:'100%',
        marginTop:50,
      //  borderBottomColor:'#079126',
          backgroundColor:'#ffffff', 
      }, 
      text1: {
        color: '#4d5454',
        fontWeight: 'bold',
        fontSize: 15,
      //  justifyContent:'center',
        //alignItems:'center',
        marginBottom:15
       
       },
       inputbox:{
        width:250,
        height:40,     
        marginTop:10,
        marginLeft:10             
      },
    });