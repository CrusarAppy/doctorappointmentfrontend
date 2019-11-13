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
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default  class Login extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
      header:null
    };
    state = {
      //   user:'',
         username: '',
         password: '',
      //   isLoggingIn: false,
      //   message: ''
       };
  
    render() {
      return (
        <ScrollView>
        <View style={styles.container}>          
            <View style={[styles.container2]}>
              <TextInput style={[styles.inputbox,{marginTop:30}]}
                placeholder="Enter your Name"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
                  onChangeText={(username) => this.setState({ username })}
                />
                <TextInput style={[styles.inputbox,{marginTop:15}]}
                placeholder="Enter your password"
                secureTextEntry={true}
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  onChangeText={(password) => this.setState({ password })}
                />
             
              <TouchableOpacity style={styles.loginButton} onPress={this._homePage}>
                          
                            <Text >login</Text>
                           
              </TouchableOpacity>
              
          </View>
        </View>
        </ScrollView>
      );
    }
  
    _homePage = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
    _registerPage = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Register');
    };
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#60a370',
     //// height:'100%',
      width:'100%'
    },
    verticalFlex:{
      //    flex:1,
          display:'flex',
          flexDirection:"column",
      //    height:20
      },    
  
    text: {
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 25
     
     },
    container1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     // height:230,
      width:'100%',
    //  borderBottomColor:'#079126',
      backgroundColor:'#819986'
    },   
    inputbox:{
      width:250,
      height:40,
      backgroundColor:'#ffffff' ,
      borderRadius:20,
      textDecorationLine:'underline' ,          
    },
    loginButton:{         
      marginTop:60,
      width:300,
      height:45,
      borderRadius:20,
      marginLeft:0,
      backgroundColor:'#7d8077',
      justifyContent:'center',
      alignItems:'center'
  }
 
  
  });
  Login.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon          
            name='home'  
            color={tintColor}  
            size={25}  
        />  
    )  
}  