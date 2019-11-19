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
  FlatList
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground } from 'react-native'
import MakeApointment from './Makeappointment'
import ip_path from './ip_path'


export default class Cardiologist extends React.Component {
  static navigationOptions = {
    title: 'Cardiologists',
 //   backgroundColor:'#91dbb0',
  //  headerRight: <Icon name="map-marker-alt" size={30} color="#4d5454" />        
   //header:null
  };

  constructor(props){
    super(props)
    this.state={
      data:[],
      loading:true,
      clickedElement:{
        flag:false,
        name:"aasis",
        address:"bagar",
        email:"sddf",
        user_id:'',
        doctor_id:""
      }
    }

    
  }

  componentDidMount(){
    

    AsyncStorage.getItem("userID").then((result)=>{
        this.setState({user_id:result})
    })
      // console.log(JSON.stringify(user))
      try{
        fetch(ip_path+"/api/doctors/doctorSpeciality/cardiologist",
        {
          method:'GET',
          headers:{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          //body: JSON.stringify(user)
        })
        .then((response => response.json()))
        .then((responsejson) => {
          this.setState({loading:false})
           // this.onSuccessSignIn(responsejson                       )
            console.log(responsejson.doctor) 
           this.setState({data:responsejson.doctor})          
    
    
        })
        .catch(err => {
          //this.onFailSignIn()
          console.log(err)
        })
        
    }catch(err){          
        
        console.log(err);
    }
  }
    

      
      _dentist =(item) => {


        this.setState({clickedElement:{flag:true,name:item.Fullname,address:item.Address,email:item.Email,user_id:this.state.clickedElement.user_id,doctor_id:item._id}})

        //await AsyncStorage.setItem('userToken', 'abc');    
        
       
      };
      
      _renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this._onPress(item)}>
          <View style={[styles.container]}>
                <View style={[styles.container2]}>
                    <Icon name="user-md" size={80} color="#4d5454" /> 
                        <View style={[styles.verflex]}>
                            <Text style={[styles.text]}></Text>
                            <Text>{item.Fullname}</Text>
                            <Text>{item.Address}</Text>
                            <Text>{item.Email}</Text>
                            <Text></Text>
                        </View>
                 </View>
                 <View style={[styles.container3]}>
                          <TouchableOpacity style={styles.viewprofile} onPress={this._homePage}>                          
                                <Text style={[styles.text]}>View Profile</Text>                         
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.makeappointment} onPress={()=>this._dentist(item)}>                          
                                <Text style={[styles.text1]}>Make Appointment</Text>                         
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.call} onPress={this._homePage}>  
                                                
                            <Text style={[styles.text1]}>Call</Text>  
                          <Icon name="phone" size={15}  color="#ffffff" />                        
                     </TouchableOpacity>
                    </View>  
                </View>
        </TouchableOpacity>
     );


    render() {

      if(!this.state.clickedElement.flag)
      {
        if(this.state.loading){
          return <View style={{flex:1, alignItems:'center',justifyContent:'center'}}><ActivityIndicator size={"large"} /><Text>Loading...</Text></View>
        }
        else{
        return (


          <View>
            <FlatList data={this.state.data}
            renderItem = {this._renderItem}
            
            /> 
          </View>       
 
        );
        }
      }
      else{
        return(
          <MakeApointment data={this.state.clickedElement} />
        )
      }
    }
    // _makeappointment = async () => {
    //   // await AsyncStorage.setItem('userToken', 'abc');
    //   this.props.navigation.navigate('MakeApointment');
    // };
}

const styles = StyleSheet.create({    
      horflex:{
          flexDirection:'row'
      },
      verflex:{
        flexDirection:'column',
        marginLeft:20
    },
    hflex:{
      flexDirection:"row",
      flex:1,
      justifyContent:'center',
      alignItems:'baseline' ,
      marginLeft:10
    },
    vflex:{
      flexDirection:"column",
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginLeft:15,
     justifyContent:'center'
    },
      container:{
        flex:1,
        height:'100%',
        width:'100%',
              //  backgroundColor:'#ebf2ee',      
      }, 
      profilecard:{
        flex:1,
        height:155,
        width:'100%',
        backgroundColor:'#000000',  
        marginBottom:10   
      }, 
      container1:{
        flex:1,
        height:130,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#ebf2ee',      
      }, 
      doctorcontainer:{
        flex:1,
      //  height:110,
        width:'100%',
        flexDirection:'column',
        marginTop:40,
        backgroundColor:'#d1e6d7',
      //  justifyContent:'flex-start'      
      }, 
      text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent:'center',
        alignItems:'center'
       
       },
       avai: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
       
       },
       text1: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:4,
        marginRight:4
       
       },
       
       
      container2:{
        flex:1,
        height:120,
        width:130,
        flexDirection:'row',
        borderRadius:100
      //  backgroundColor:'#ebf2ee',      
      }, 
      container3:{
        flex:1,
        height:80,
        width:'100%',
        flexDirection:'row',
        borderRadius:10,
        justifyContent:'space-between',
        marginTop:3,
        backgroundColor:'#d1e6d7',      
      },     
      
      viewprofile:{         
        marginTop:0,
        width:100,
        height:35,
        borderRadius:5,
        marginLeft:10,
        backgroundColor:'#e9f5f3',
        justifyContent:'center',
        alignItems:'center'
    },
    makeappointment:{         
      marginTop:0,
      width:140,
      height:35,
      borderRadius:5,
      marginLeft:5,
      backgroundColor:'#11cad4',
      justifyContent:'center',
      alignItems:'center'
  },
  call:{         
    marginTop:0,
    width:80,
    height:35,
    borderRadius:5,
    marginLeft:10,
    backgroundColor:'#0d8c31',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
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
  marginTop:30,
  marginLeft:40,
  
},
backgroundColor:{
  backgroundColor:'#91dbb0'
} , 
           
})