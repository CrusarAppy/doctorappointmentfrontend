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
  Picker,
  View,  
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground } from 'react-native';
import AppNavigator from './Router';

// const AppIndex = createAppContainer(AppNavigator)

export default class Prediction extends React.Component {
  static navigationOptions = {
      title: 'Diet and Exercise',     
     header:null
    };
    state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
    
    render() {
      return (
        <View style={{flex:1}} >  
        <StatusBar  
            backgroundColor='#4d5454'  
            barStyle='light-content'  
        />  
        <View style={styles.header}> 
        <TouchableOpacity> 
            <Icon name='cog' size={28} color='white'/>  
            </TouchableOpacity>
            <Picker
                selectedValue={this.state.language}
                style={{height: 80, width: 80,color:'#ffffff'}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>   
           <Picker.Item label="more" value="js" />       
          <Picker.Item label="Log out" value="js" />
        </Picker>              
        </View>  
        <AppNavigator/>  
    </View>    
      )};      
}
const styles = StyleSheet.create({  
  wrapper: {  
      flex: 1,  
  },  
  header:{  
      flexDirection: 'row',  
      alignItems: 'center',  
      justifyContent: 'space-between',  
      backgroundColor: '#91dbb0',  
      paddingHorizontal: 18,  
      paddingTop: 5, 
      height:50 
  }  
});  