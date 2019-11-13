import React from 'react';  
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';  
import Login from "./Login";  
import Register from "./Register";
import Icon from 'react-native-vector-icons/FontAwesome5';


  
const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Login1: Login,  
        Register1: Register,          
    },  
    {  
        tabBarOptions: {  
            
            activeTintColor: 'white',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'red'          
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);