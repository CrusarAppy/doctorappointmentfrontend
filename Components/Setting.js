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


export default class Setting extends React.Component {
    static navigationOptions = {
        title: 'Your Account Setting',
       
       //header:null
      };
      state = {
        //   user:'',
           username: '',
           password: '',
           Name:''
        //   isLoggingIn: false,
        //   message: ''
         };

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
            
                 <View style={[styles.container1]}>
                    <Image
                        style={[styles.image]}
                        source={require('./walll.jpg')}
                        /> 
                 <TouchableOpacity style={[{marginLeft:0}]}>                 
                     <Text style={[styles.edit]}>Edit Profile Picture</Text> 
                 </TouchableOpacity>                  
                </View>
                <View style={[styles.container2]}>
                    <Text style={[styles.text]}>Change Account Setting</Text>                
                    <View style={[styles.container3]}>
                        <Text style={[styles.text2]}>Username:</Text>                                                
                        <TextInput 
                                    placeholder="Apar Bhandari"
                                    placeholderTextColor="#9a73ef"                                                       
                                    underlineColorAndroid="transparent"                        
                                    numberOfLines = {1}
                                //    secureTextEntry={true}
                                    onChangeText={(username) => this.setState({ Name })}
                        />                        
                        <Icon name="pen" size={30} color="#4d5454" marginLeft={50} />
                        </View>
                        <View style={[styles.container3]}>
                        <Text style={[styles.text2]}>E-mail:</Text>                                                
                        <TextInput 
                                    placeholder="apar95@gmail.com"
                                    placeholderTextColor="#9a73ef"                                                       
                                    underlineColorAndroid="transparent"                        
                                    numberOfLines = {1}
                                //    secureTextEntry={true}
                                    onChangeText={(username) => this.setState({ Name })}
                        />                        
                        <Icon name="pen" size={30} color="#4d5454" marginLeft={50} />                  

                </View>
                <View style={[styles.container3]}>
                        <Text style={[styles.text2]}>Phn no.:</Text>                                                
                        <TextInput 
                                    placeholder="9814169416"
                                    placeholderTextColor="#9a73ef"                                                       
                                    underlineColorAndroid="transparent"                        
                                    numberOfLines = {1}
                                //    secureTextEntry={true}
                                    onChangeText={(username) => this.setState({ Name })}
                        />                        
                        <Icon name="pen" size={30} color="#4d5454" marginLeft={50} />                  

                </View>
                <View style={[styles.container3]}>
                        <Text style={[styles.text2]}>Address:</Text>                                                
                        <TextInput 
                                    placeholder="Lahachowk"
                                    placeholderTextColor="#9a73ef"                                                       
                                    underlineColorAndroid="transparent"                        
                                    numberOfLines = {1}
                                //    secureTextEntry={true}
                                    onChangeText={(username) => this.setState({ Name })}
                        />                        
                        <Icon name="pen" size={30} color="#4d5454" marginLeft={50} />                  

                </View>
                <View style={[styles.container3]}>
                        <Text style={[styles.text2]}> Current Password:</Text>                                                
                        <TextInput 
                                    placeholder="********"
                                    placeholderTextColor="#9a73ef"                                                       
                                    underlineColorAndroid="transparent"                        
                                    numberOfLines = {1}
                                    secureTextEntry={true}
                                    onChangeText={(username) => this.setState({ Name })}
                        />                        
                        <Icon name="pen" size={30} color="#4d5454" marginLeft={50} />                  

                </View>               

            
            </View>
            </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    edit:{
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 20,      
    },    
    text:{
        color: '#4d5454',
        fontWeight: 'bold',
        fontSize: 25,
       // marginLeft:15,
        marginBottom:10      
      }, 
      text2:{
        color: '#4d5454',
        fontWeight: 'bold',
        fontSize: 15,
        marginRight:35,
        marginBottom:10      
      }, 
         
         
    container: {
        flex: 1,
     //   justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:150,
        width:250,
        marginTop:20,
        marginBottom:25,
      //  borderBottomColor:'#079126',
      //  backgroundColor:'#91dbb0',
        flexDirection:'column',
        borderRadius:100
    },
    container2: {
        flex: 1,
     //   alignItems: 'center',
     //   justifyContent: 'center',
        height:350,
        width:'100%',
      //  borderBottomColor:'#079126',
      //  backgroundColor:'#91dbb0',
        flexDirection:'column',
        borderRadius:100,
        marginLeft:25
    },
    container3: {
        flex: 1,
        alignItems: 'center',
       justifyContent: 'center',
        height:80,
        width:300,
      //  borderBottomColor:'#079126',
      //  backgroundColor:'#91dbb0',
        flexDirection:'row',
        borderRadius:100,
        marginLeft:25
    },
    image:{
        height:140,
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        borderRadius:200

    }
});