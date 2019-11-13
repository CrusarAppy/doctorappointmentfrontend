import React from 'react';
import {
  ScrollView,
  Text,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import DropdownMenu from 'react-native-dropdown-menu';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import ip_path from './ip_path';
//import LoaderBtn from './LoaderBtn';


export default class Register extends React.Component {
  
    static navigationOptions = {
      title: 'Lots of features here',
      header:null
    };
    state={
      Fullname:'',
      Username:'',
      Email:'',
      Password:'',
      ConfirmPassword:'',
      Address:'',
      PhoneNumber:'',        
      error:'', 
      signUpMsg:'',
      loading:false,
      token:''
     
  }
   
  renderButton(){
      // if(this.state.loading){
      //     return(<LoaderBtn size = 'small' />);
          
      // }
      return ( <TouchableOpacity
        style={{ marginLeft : 35 , width:300,
          height:45,
          borderRadius:20,
          marginTop:15,
          backgroundColor:'#7d8077',
          justifyContent:'center',
          alignItems:'center' }}
        onPress={this.onSubmit}>
        <Text  style = {{ fontSize:20, fontWeight:'bold',color:'white'}}>Submit</Text>
      </TouchableOpacity>)
      };
  

  onFail = (err) => {console.log(err)
    this.setState({loading:false, signUpMsg:'Failed to create your account'});}

  // onSuccess=(response)=>{
  //     this.setState({loading:false, signUpMsg:'Account created successfully! and Navigate to Login'});
  //     this.setState({token:response});
  //     this.props.navigation.navigate('SignIn')
  // }
  
  onSubmit = () => {
      this.setState({loading:true});

      const Fullname = this.state.fullname;
      const Username =this.state.username;
      const Address = this.state.address;
      const PhoneNumber = this.state.phoneNumber;
      const Email = this.state.email;
      const Password= this.state.password;
      const ConfirmPassword = this.state.confirmPassword;
    

      const newUser = {
          'Fullname' : Fullname ,
          'Username' : Username,
          'Address' : Address,
          'PhoneNumber' :PhoneNumber,
          'Email' : Email,
          'Password' : Password,
          'ConfirmPassword' : ConfirmPassword,
          'Type': 'User'
      };
      console.log(newUser);
          
          const params = JSON.stringify(newUser);

          console.log(params);
         // const config = {headers:{'Content-Type':'application/json'}};
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
     // var data = [["User","Doctor", "Clinic"]]
      
      return (
        <ScrollView style={[{backgroundColor:'#d1e6d7'}]}>
        <View style={styles.container}>  
          <View style={[styles.container1]}>
             <Image
                style={[styles.image]}
                source={require('./createacc.png')}
                />
                <Text style={[styles.text]}> Create your account</Text>
            </View>
            <View style={[styles.container2]}>
              <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter your Full Name"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  
                  onChangeText={(fullname) => this.setState({ fullname })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter username"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  
                  onChangeText={(username) => this.setState({ username})}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter Address"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
                  onChangeText={(address) => this.setState({address })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter contact no."
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
                  onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter E-mail"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  
                  onChangeText={(email) => this.setState({email})}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter  password"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Confirm password"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  secureTextEntry={true}
                  onChangeText={(confirmPasswor) => this.setState({confirmPasswor})}
                />
                
                </View>
                </View>
                
                {this.state.loading && <ActivityIndicator />}

                <TouchableOpacity >
                {this.renderButton()}     
                </TouchableOpacity>    

                <Text style={{paddingBottom:0,color:'red',alignItems:'center',marginTop: 10,marginBottom: 0,marginLeft: 120}}>       
              {this.state.signUpMsg}  </Text> 

              <View style={[styles.horizontalFlex]}>
                <Text>Already have an account??</Text>
                <TouchableOpacity onPress={this._loginPage}>
                            <View >                           
                              <Text style={[styles.text,{marginLeft:15}]}>Sign In</Text>
                              </View>
                </TouchableOpacity>             
              
              </View>
          
        
      </ScrollView>
      );
    }
  
    // _homePage = async () => {
    //   // await AsyncStorage.setItem('userToken', 'abc');
    //   this.props.navigation.navigate('Home');
    // };
  
   _loginPage = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('SignIn');
  };
}
 

  const styles = StyleSheet.create({
    text: {
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 20
     
     },
    container: {      
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',    
      
      
    },
    horizontalFlex:{
      //    flex:1,
          display:'flex',
          flexDirection:"row",
          height:40,
          width:'100%',
          marginTop:23,
          justifyContent:'center',
          alignItems:'baseline'          
              },
              hflex:{
                flexDirection:"row",
                height:60
              },
    container1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height:120,
      width:'100%',
    //  borderBottomColor:'#079126',
    //  backgroundColor:'#819986'
    },
    dropwowncontainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height:350,
     // width:'60%',
    //  borderBottomColor:'#079126',
      backgroundColor:'#ffffff'
    },
    image:{
      width:90,
      height:90
    }, 
      loginButton:{         
        marginTop:50,
        width:300,
        height:45,
        borderRadius:20,
        marginLeft:0,
        backgroundColor:'#7d8077',
        justifyContent:'center',
        alignItems:'center'
    },
    container2: {      
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // height:300,
      width:'100%',
    //  borderBottomColor:'#079126',
    //  backgroundColor:'70#60a370'
    },  
    container3: {
      backgroundColor:'#60a370',
      flex: 1,
    //  alignItems: 'center',
    //  justiyContent: 'center',
      height:280,
      marginTop:5,
      width:'70%',
    //  borderBottomColor:'#079126',
    //  backgroundColor:'#60a370'
    },    
    inputbox:{
      width:250,
      height:40,     
      marginTop:10,
      marginLeft:15,
      borderBottomWidth:2             
    },
  });