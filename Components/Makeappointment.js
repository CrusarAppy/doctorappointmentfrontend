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
  Modal,Alert
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ip_path from './ip_path'

export default class FindnBook extends React.Component {
    static navigationOptions = {
        title: '',
        backgroundColor:'#91dbb0',
    //    headerRight: <Icon name="map-marker-alt" size={30} color="#4d5454" />        
       //header:null
      };
      constructor(props){
        super(props)
        //set value in state for initial date
        this.state = {date:"15-05-2018"}

        console.log(this.props)
      }
      state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      makeAppointment = () =>{
        try{
          fetch(ip_path+"/api/user/register",
          {
            method:'POST',
            headers:{
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            },
            body: params
          })
          .then((response => response.json()))
          .then((responsejson) => {
              console.log(responsejson)

              this.setState({loading:false, signUpMsg:'Account created successfully! and Navigate to Login'});
              this.props.navigation.navigate('SignIn')

          })
          .catch(err => {
            this.onFail()
            console.log(err)
          })

          
      }catch(err){
          console.log(err);
          
      }
      }
      render() {
        return (
            <ScrollView style={[styles.backgroundColor]}>
            <View style={[styles.container]}>
                                
                <View style={[styles.profilecard]}>
                 <View style={[styles.container1]}>
                    <View style={[styles.container2]}>
                    <Icon name="user-md" size={120} color="#4d5454" /> 
                        <View style={[styles.verflex]}>
        <Text style={[styles.text]}>{this.props.data.name}</Text>
                            <Text>Miracle dental care</Text>
                            <Text>{this.props.data.address}</Text>
                            <Text>9846801108</Text>
                        </View>
                        </View>
                                                
                        </View>
                        </View>
                </View>                
            
                <View style={[styles.container3]}>          
                <View style={[styles.daterow]}>
                    <Text style={[styles.text]}>Choose date:</Text>
               <DatePicker
                        style={{width: 200}}
                        date={this.state.date} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2019"
                        maxDate="01-01-2025"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                            },
                            dateInput: {
                            marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                        />
                        </View>
                        <Text style={[styles.text]}> Availabl time(9:30am-4:30pm):</Text>                        
                        <View style={[styles.timebox]}>
                            <View style={[styles.horflex]}>
                                <TouchableOpacity style={styles.timekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>9:30-10:00</Text>                           
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.timekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>10:00-10:30</Text>                           
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.timekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>10:30-11:00</Text>                           
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.horflex]}>
                                <View style={styles.bookedtimekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>12:00-12:30</Text>                           
                                </View>
                                <TouchableOpacity style={styles.timekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>12:30-01:00</Text>                           
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.timekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>01:00-01:30</Text>                           
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.horflex]}>
                                <TouchableOpacity style={styles.timekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>01:30-02:00</Text>                           
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.timekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>03:30-04:00</Text>                           
                                </TouchableOpacity>
                                <View style={styles.bookedtimekey} onPress={this._homePage}>                          
                                    <Text style={[styles.text1]}>04:00-04:30</Text>                           
                                </View>
                            </View>                           
                        </View>                        
                         <Modal
                         transparent={true}
                      // backgroundColor="transparent"
                            animationType="slide"
                           // transparent={false}
                            visible={this.state.modalVisible}
                         //   onRequestClose={() => {
                          //      Alert.alert('Modal has been closed.');
                          //  }}
                            >
                        
                          {/* <View style={{backgroundColor:'#b4f768'}}> */}
                            <View style={{
                                flex: 1,
                                flex:1,
                                height:150,
                                width:350,
                                flexDirection:'column',
                                borderRadius:10,
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'#b4d490', 
                                marginTop:400,marginBottom:80   }}>
                                {/* <View style={{marginTop: 22},styles.modal_container}> */}
                                <Text style={{color: '#000000',
                                              fontWeight: 'bold',
                                              fontSize: 20,
                                              justifyContent:'center',
                                              alignItems:'baseline',
                                              marginLeft:10,
                                              marginTop:20}}>Confirm booking?</Text>
                                <View style={{flex:1,
                                              height:50,
                                              width:300,
                                              flexDirection:'row',
                                              borderRadius:10,
                                              justifyContent:'center',
                                              alignItems:'baseline',
                                              backgroundColor:'#b4d490',
                                              marginTop:30,  
                                              justifyContent:'space-between'}}>
                                <TouchableOpacity
                                    onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={{color: '#55594f',
                                            fontWeight: 'bold',
                                            fontSize: 12,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            marginLeft:20}}>Cancel</Text>
                                    </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={{color: '#55594f',
                                          fontWeight: 'bold',
                                          fontSize: 12,
                                          justifyContent:'center',
                                          alignItems:'center',
                                          marginRight:20}}>Ok</Text>
                                </TouchableOpacity>
                                </View>
                                </View>                           
                            </Modal >                            
                            <View style={[styles.confirmline]}>                                
                            <TouchableOpacity style={styles.makeapointment} onPress={() => {
                                                                            this.setModalVisible(true);
                                                                        }}>
                                <Icon name="check" size={20} color="#ffffff" />                        
                                <Text style={[styles.text1]}>Confirm appointment</Text>                         
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.call} onPress={this._homePage}>  
                                <Icon name="phone" size={20} color="#ffffff" marginRight={10}/>                        
                                <Text style={[styles.text1]}>Call</Text>                         
                                </TouchableOpacity>
                            </View>                          
                                              
                 </View>                 
           
        </ScrollView>
            )};
        }
        const styles = StyleSheet.create({ 
            backgroundColor:{
                backgroundColor:'#ebf2ee', 
            },
            horflex:{
                flexDirection:'row'
            },
            verflex:{
              flexDirection:'column',
              marginLeft:60,
              width:150
          },
          profilecard:{
            flex:1,
            height:210,
            width:'100%',
            backgroundColor:'#000000',             
            marginBottom:10   
          }, 
          container:{
            flex:1,
            height:'100%',
            width:'100%',            
            flexDirection:'column'     
          }, 
          container1:{
            flex:1,
            height:200,
            width:'100%',
            flexDirection:'column',
            backgroundColor:'#ebf2ee',      
          }, 
          container2:{
            flex:1,
            height:120,
            width:'100%',
            flexDirection:'column',
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center',
                      //  backgroundColor:'#ebf2ee',      
          },
          container3:{
            flex:1,
            height:380,
            width:'100%',
            flexDirection:'column',
            borderRadius:10,
            marginTop:0,            
            justifyContent:'flex-start',
         //   alignItems:'center',
             backgroundColor:'#f0f7f6',      
          },
          modal_container:{
            flex:1,
            height:300,
            width:300,
            flexDirection:'column',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
             backgroundColor:'#b4f768', 
             marginTop:1000     
          },
          confirmline:{
            flex:1,
            height:80,
            width:'100%',
            flexDirection:'row',
            borderRadius:10,
            justifyContent:'space-between',
            marginTop:35,
            backgroundColor:'#d1e6d7',      
          },   
          timebox:{
            flex:1,
            height:230,
            width:300,
            borderColor:'#ffffff',
            borderWidth:2,
            marginLeft:50,
            flexDirection:'column',
            borderRadius:10,
            marginTop:25,            
            justifyContent:'center',
             alignItems:'center',
             backgroundColor:'#f0f7f6',      
          },
          daterow:{
            flex:1,
            height:50,
            width:'100%',
            flexDirection:'row',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'baseline',
            //backgroundColor:'#f0f7f6',      
          },
          modalrow:{
            flex:1,
            height:50,
            width:350,
            flexDirection:'row',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'baseline',
            backgroundColor:'#f0f7f6',  
            justifyContent:'space-between'    
          },
          text: {
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 12,
            justifyContent:'center',
            alignItems:'baseline',
            marginLeft:10
           
           },
           text1: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 12,
            justifyContent:'center',
            alignItems:'baseline',
            marginLeft:0
           
           },
           modaltext: {
            color: '#55594f',
            fontWeight: 'bold',
            fontSize: 12,
            justifyContent:'center',
            alignItems:'center',
            marginLeft:10
           
           },
           timekey:{         
            marginTop:5,
            width:80,
            height:35,
            borderRadius:10,
            marginLeft:0,
            marginRight:5,
            backgroundColor:'#1db6d1',
            justifyContent:'center',
            alignItems:'center'
        },
        bookedtimekey:{         
            marginTop:5,
            width:80,
            height:35,
            borderRadius:10,
            marginLeft:0,
            marginRight:5,
            backgroundColor:'#9c524e',
            justifyContent:'center',
            alignItems:'center'
        },
        confirmbookline:{
            flex:1,
            height:100,
            width:'100%',
            flexDirection:'row',
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center',
              backgroundColor:'#000000',      
          },
         
        call:{         
          marginTop:0,
          width:170,
          height:45,
          borderRadius:5,
          marginLeft:10,
          backgroundColor:'#0d8c31',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row'
      },
      makeapointment:{         
        marginTop:0,
        width:170,
        height:45,
        borderRadius:5,
        marginLeft:10,
        backgroundColor:'#3254a8',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },

           
        })