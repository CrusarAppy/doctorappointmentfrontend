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
//import LoaderBtn from './LoaderBtn';

export default  class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
      header:null
    };
    state = {
      loading:false,
      loginMsg:'',
      email:'',
      password:''
       };
       componentWillMount(){
        this.check_logged_in()
      }
      renderButton(){
          
          return ( <TouchableOpacity
            style={styles.loginButton}
            onPress={this.onLoginReq} >
    
            <Text  style = {{fontSize:20, fontWeight:'bold',color:'white'}}>Login</Text>
          </TouchableOpacity>
          )
      };
      
      check_logged_in = async() => {
        let UserID = await AsyncStorage.getItem('userID');
        (UserID ) ? this.props.navigation.navigate('Home') : console.log("Not loggeed in")
      }
          
      
      onSuccessSignIn = async(res) => {
          const{email} = this.state;
          
          await AsyncStorage.setItem('userID',res._id);
        
          await AsyncStorage.setItem('type',res.Type);
          this.setState({loadingLogin:false,loginMsg:'sUCESS'});
          this.props.navigation.navigate('Home')
      }
    
      onFailSignIn(){
          this.setState({loading:false,loginMsg:'Failed to Login'})
      }
    
      onLoginReq = () =>{  
          this.setState({loading:true});
          const Email = this.state.email;
          const Password = this.state.password;

          // const {email, password} = this.state;
          // const user = {
          //     Email:email,
          //     Password:password
          // };

          const user = {
            'Email' : Email,
            'Password' : Password
          };

          console.log(JSON.stringify(user))
          try{
            fetch("http://192.168.1.100:3005/api/user/login",
            {
              method:'POST',
              headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then((response => response.json()))
            .then((responsejson) => {
                this.onSuccessSignIn(responsejson                       )
                console.log(responsejson)            


            })
            .catch(err => {
              this.onFailSignIn()
              console.log(err)
            })
            
        }catch(err){          
            
            console.log(err);
        }
      }
          
      // onEmailChanged(text){
      //     this.props.emailChanged(text);
      // }
        
      // onPasswordChanged(text){
      //     this.props.passwordChanged(text);
      // }
      _registerPage = async () => {
        // await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Register');
      };
    render() {
      return (

        <ScrollView style={[styles.backgroundColor]}>
          <View style={[styles.container]}>
            <View style={{marginTop:17}}>
           <Icon name="stethoscope" size={130} color="#4d5454" /> 
           
           </View>         
            <View style={[styles.container2]}>
                
                  <View style={[styles.hflex]}> 
                    <Icon name="user-ninja" size={30} color="#4d5454" />               
                    <TextInput style={[styles.inputbox]}
                        placeholder="Enter email"
                       placeholderTextColor="#4d5454"
                        underlineColorAndroid="transparent"                        
                        numberOfLines = {1}
                        borderBottomColor='#3e3a42'
                        onChangeText={(email) => this.setState({ email })}
                      />
                    </View>
                <View style={[styles.hflex]}>
                  <TouchableOpacity> 
                  <Icon name="key" size={30} color="#4d5454" />
                  </TouchableOpacity> 
                    <TextInput style={[styles.inputbox,{marginTop:15}]}
                      placeholder="Enter your password"
                      placeholderTextColor="#4d5454"                   
                      underlineColorAndroid="transparent"                        
                      numberOfLines = {1}
                      secureTextEntry={true}
                      autoCorrect={true} 
                      onChangeText={(password) => this.setState({ password})}
                    />
                 </View>
             </View>

             {this.state.loading && <ActivityIndicator />}

             <TouchableOpacity>
                {this.renderButton()}     
            </TouchableOpacity>

            <View style={[styles.container3]}>

            <Text style={{paddingBottom:0,color:'red',alignItems:'center',marginTop: 10,marginBottom: 0,}}>       
              {this.state.loginMsg}  </Text>

              <View style={[styles.horizontalFlex]}>
                <Text>Havent registered yet?</Text>
                <TouchableOpacity onPress={this._registerPage}>
                            <View >
                              <Text style={[styles.text1,{marginLeft:15}]}>Sign Up</Text>
                              </View>
                </TouchableOpacity>
              </View>
          </View>
        {/* </ImageBackground> */}
          </View>        
       </ScrollView>
      );
    }
    _homePage = async () => {
       await AsyncStorage.setItem('user_id', response._id);
      this.props.navigation.navigate('Home');
    };
    _registerPage = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Register');
    };
  }          
               
  
          
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    //  justifyContent: 'center',
    //  backgroundColor:'',
      height:'100%',
      width:'100%'
    },
    backgroundColor:{
      backgroundColor:'#d1e6d7'

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
      height:60,
      width:'100%',
      marginTop:60,
      justifyContent:'center',
      alignItems:'baseline'          
          },
    hflex:{
      flexDirection:"row",
      height:60,
      alignItems:'baseline',
      justifyContent:'center',
      width:280,
      borderBottomWidth:2
    },
    image:{
      width:130,
      height:125,
      marginTop:30,
    //  justifyContent:'center',
    //  alignItems:'center'
      marginLeft:100
    },
    img:{
      width:'100%',
      height:'100%'
    },
    text: {
      color: '#d1e6d7',
      fontWeight: 'bold',
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
     
     },
     text1: {
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'     
     },
    
    container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height:300,
      width:'100%',      
    //  borderBottomColor:'#079126',
    //  backgroundColor:'70#60a370'
    },    
    container3: {
      flex: 1,
      alignItems: 'center',
    //  justifyContent: 'center',
      height:170,
      width:'100%',
      marginTop:30
    //  borderBottomColor:'#079126',
    //  backgroundColor:'70#60a370'
    },    
    inputbox:{
      width:250,
      height:40,     
      marginTop:10,
      marginLeft:15             
    },
    loginButton:{         
      marginTop:0,
      width:280,
      height:45,
      borderRadius:20,
      marginLeft:0,
      backgroundColor:'#4d5454',
      justifyContent:'center',
      alignItems:'center'
  },
  position2: {
    marginLeft:0,
    fontSize:20

  }
  
  });