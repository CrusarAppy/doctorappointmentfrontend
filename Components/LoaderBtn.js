import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';

const LoaderBtn = ({size}) =>
{
    const {ViewStyle} = styles;
    return(
    <View style={ViewStyle}>
          <ActivityIndicator color="red" size={45} />
    </View>
      );
}

const styles = {
    ViewStyle:{
        backgroundColor:"#7d8077",
        flex:1,
        width:20,
        height:4,
        marginBottom:0,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    }
}
export default LoaderBtn;