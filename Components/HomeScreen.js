import React from 'react';
import { Button,Image,ImageBackround,TextInput,ScrollView, AsyncStorage } from 'react-native';
import {
    View,
    StyleSheet,
    Dimensions,   
    TouchableOpacity,
    Platform,
    Text,
    Alert,
    Picker,
    BackHandler
  } from 'react-native';
  
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends React.Component {   
  static navigationOptions = {
    title: 'Please sign in',
    header:null
  };
  
  state = {    
       searchengine: '' ,
       language:'' ,
       selectedValue:'' ,
     };
      //logout
    logout =()=> {
      Alert.alert(
        'LOGOUT',
        'Are you sure you want to logout?',
        [
         
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress:() =>{
            this.isNotiActive= true;
            AsyncStorage.setItem('userID',null)
            this.props.navigation.navigate('SignIn')
            // (async () => {
            //   let cleanStorage = await AsyncStorage.clear();
            //   this.props.navigation.navigate('SignIn');
            //   this.setState({UserID: null});
            // })()
          }  },
        ],
    )
    
  }

  onAndroidBackPress = () => {
   
    this.exitApp();
    return true;
  
};
  exitApp() {
    Alert.alert(
      'Exit App',
      'Exiting the application?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  }



  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.onAndroidBackPress,
      );
      
    }
    
   
  }
  componentWillUnmount(){
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }
    
    render() {
        return (
          <ScrollView style={[{backgroundColor:'#91dbb0'}]}>
            {/* <View style={[styles.container0]}>

            </View> */}
           <View style={[styles.wholecontainer]}>
           <View style={styles.header}>                         
                <TouchableOpacity onPress = {this.logout}>
                      <Icon name="sign-out-alt" size={30} color="#4d5454" style={[styles.image], {marginLeft:300}} /> 
                </TouchableOpacity>
          </View>  
          <View style={[styles.searchengineContainer]}>
             <View style={[styles.hflex]}> 
                <Icon name="search" size={30} color="#4d5454" />               
                <TextInput style={[styles.inputbox]}
                           placeholder="Search for doctor,clinic or diseases"
                           placeholderTextColor="#4d5454"
                           //  underlineColorAndroid="transparent"                        
                            //  numberOfLines = {1}
                             borderBottomColor='#3e3a42'
                            onChangeText={(search) => this.setState({ search })}
                />
               </View> 
          </View> 
                
              <View style={[styles.container1]}>
              <Text style={[styles.text]}>What you looking for?</Text>                
                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]} onPress={this._findNbook}>
                  <Icon name="calendar-check" size={30} color="#4d5454" style={[styles.image]} /> 
                  <Text> Make Appointment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.vflex]} onPress={this._predict}>
                  <Icon name="frown" size={30} color="#4d5454" style={[styles.image]}/>
                  <Text> Go for disease prediction</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]} onPress={this._myappoimts}>
                  <Icon name="history" size={30} color="#4d5454" style={[styles.image]}/>
                  <Text>My appointment history</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.vflex]}>
                  <Icon name="tablets" size={30} color="#4d5454" style={[styles.image]} onPress={this._undercons}/> 
                  <Text>Medicines and heallth</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]} onPress={this._prediction}>
                  <Icon name="cloud-meatball" size={30} color="#4d5454" style={[styles.image]}/> 
                  <Text>Diet and Exerciser</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.vflex]} 
                  onPress={this._setting}
                  >
                  <Icon name="user-cog" size={30} color="#4d5454" style={[styles.image]}/> 
                  <Text>Account setting</Text>
                  </TouchableOpacity>
                </View>
              </View> 
              <Text style={[styles.text1]}>Find doctors in top specialist</Text>
              <ScrollView
               horizontal={true}>  
              <View style={[styles.container2]}>

                <TouchableOpacity style={[styles.vflex]} onPress={this._dentist}>
                <Icon name="tooth" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Dentists</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]} onPress={this._undercons}>
                <Icon name="allergies" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Dermatologist</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]} onPress={this._neuro}>
                <Icon name="brain" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Neurologist</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]} onPress={this._cardio}>
                <Icon name="heartbeat" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Cardiologist</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]} onPress={this._undercons}>
                <Icon name="cannabis" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Medicine</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]} onPress={this._dentist}>
                <Icon name="bone" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Orthopedic</Text> 
                </TouchableOpacity>
                
              </View>
             </ScrollView>
             <View style={[styles.container3]}>
               <Text>Help</Text>
               <Text>policy</Text>

             </View>
           </View> 
        </ScrollView>
           );
          }
          _setting = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Setting');
          };
          _findNbook = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('FindandBook');
          };
          _prediction = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Prediction');
          };
          _dentist = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Dentist');
          };
          _undercons = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Underconstruction');
          };
          _myappoimts = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Myappointment');
          };
          _neuro = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Neurologist');
          };
          _cardio = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Cardiologist');
          };
          _predict = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Predict');
          };
  
      } 
      const styles = StyleSheet.create({
        hflex:{
          flexDirection:"row",
          flex:1,
          justifyContent:'center',
          alignItems:'baseline' ,
          marginLeft:10
        },
        backgroundColor:{
          backgroundColor:'#91dbb0'
    
        },
        text: {
          color: '#4d5454',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop:10,
         
         },
         text1: {
          color: '#4d5454',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop:10,
         
         },
        vflex:{
          flexDirection:"column",
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          marginLeft:15,
         justifyContent:'center'
        },
        wholecontainer:{
          backgroundColor:'#91dbb0',
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        },
        inputbox:{
          width:230,
          height:40,     
          marginTop:10,
          marginLeft:15,
          backgroundColor:'#ebf2ee'            
        },
        searchengineContainer:{
          width:295,
          height:60,
          alignItems:'baseline',
          justifyContent:'center',          
          borderRadius:20,
          backgroundColor:'#ebf2ee' ,
          marginTop:80,
          marginLeft:2,
          
        },
        container0: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          height:60,
          width:'100%',
          marginTop:40,
          flexDirection:'row',
        //  borderBottomColor:'#079126',
          backgroundColor:'#d1e6d7'
        }, 
        container1: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height:250,
          width:'100%',
          marginTop:40,
        //  borderBottomColor:'#079126',
          backgroundColor:'#d1e6d7'
        }, 
        container2: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height:70,
          width:'100%',
          marginTop:10,
        //  borderBottomColor:'#079126',
          backgroundColor:'#d1e6d7',
          flexDirection:'row'
        }, 
        container3: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height:150,
          width:'100%',
          marginTop:10,
        //  borderBottomColor:'#079126',
          backgroundColor:'#95a198'
        }, 
        image:{
          width:40,
          height:40,
          marginLeft:20,
          marginTop:10
          
        } ,
        header:{  
          flexDirection: 'row',  
          alignItems: 'center',  
          justifyContent: 'space-between',  
          backgroundColor: '#91dbb0',  
          paddingHorizontal: 18,  
          paddingTop: 5, 
          height:50 ,
          width:380
      }    
    });
        

          
      

 
