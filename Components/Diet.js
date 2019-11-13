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


export default class Diet extends React.Component {
    // static navigationOptions = {
    //    title: 'Your Account Setting',       
    //    header:null
    //   };    
      render() {
        return (
            <ScrollView>
            <View style={styles.container}>                
                <Text style={[styles.text]}>Diet</Text>
                <Text>A ocate or just now committing to taking the first steps in becoming more healthy, share your progress and inspire your friends and family to do the same. While you are here, take a minute to sign up to our weekly updates and we'll be in touch with more health advice and latest findings to improve your health and wellbeing.</Text>
            </View>
            </ScrollView>
        );
    }
}
Diet.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon name="pizza-slice" size={30} color="#ffffff" /> 
)  
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },    
    text: {
        color: '#177812',
        fontWeight: 'bold',
        fontSize: 50,
        justifyContent:'center',
        alignItems:'center' ,
        marginBottom:20       
        },
     
    
    });