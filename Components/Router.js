import React from 'react';  
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';  
import Diets from './Diet';
import Exercises from './Exercise';  
  
const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Diet: Diets,  
        Exercise: Exercises,          
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'white',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'#91dbb0',
                height:50  
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);