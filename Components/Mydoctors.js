import React from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';


export default class Mydoctors extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerTitleStyle: {

            flexGrow: 1,
            textAlign: 'center',
            alignSelf: "center"
        },
        headerTintColor: 'white',
        headerStyle: {


            backgroundColor: '#00806b',
        },
    };
    render() {
        return (
            <View style={styles.container}>                
                <Text>my doctors here.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    verticalFlex:{
        //    flex:1,
            display:'flex',
            flexDirection:"column",
        //    height:20
        }, 
        horizontalFlex:{
            //    flex:1,
                display:'flex',
                flexDirection:"row",
            //    height:20
            }, 
    searchBox:{
        justifyContent:"center",
        width:'75%',
        height:65
    },
    
});