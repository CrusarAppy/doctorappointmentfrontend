import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './Components/HomeScreen';
import SignInScreen from './Components/SignInScreen';
import Register from './Components/Register';
import Dietnex from './Components/Dietandexercise';
import Settings from './Components/Setting';
import AuthLoadingScreen from './Components/AuthLoadingScreen';
import FindandBooks from './Components/FindnBook';
import Predictions from './Components/Prediction';
import Predicts from './Components/Predict';
import Dentists from './Components/Dentist';
import Makeapointments from './Components/Makeappointment';
import Undercons from './Components/Underconstruction';
import Myappointments from './Components/My_appointments';
import Neuro from './Components/Neurologist';
import Cardio from './Components/Cardiologist';
import Medicines from './Components/Medicine';
import Orthopedics from './Components/Orthopedic';
import Eye_specialists from './Components/Eye_specialist';
import Womenhealths from './Components/Womenhealth';
import Mentalhealths from './Components/Mentalhealth';
import Generalsurgerys from './Components/Generalsurgery';
import Gass from './Components/Gas';
import Radiologists from './Components/Radiologist';
import Allergiologists from './Components/Allergiologist';
import Ents from './Components/Ent';
import GeneralCarePhysician from './Components/GeneralCarePhysician';
import Anesthesiologists from './Components/Anesthesiologists';
import InfectiousDisease from './Components/InfectiousDisease';
import Dermatologist from './Components/Doctorlist'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ Home: HomeScreen, Dietnexercise:Dietnex,Setting:Settings,
                                        FindandBook:FindandBooks,Prediction:Predictions,
                                      Dentist:Dentists,MakeApointment:Makeapointments,
                                    Underconstruction:Undercons,Neurologist:Neuro,
                                  Cardiologist:Cardio,Predict:Predicts,
                                  Medicine:Medicines,Orthopedic:Orthopedics,
                                  Ent:Ents,Eye_specialist:Eye_specialists,
                                  Radiologist:Radiologists,Gas:Gass,
                                  Allergiologist:Allergiologists,
                                  Generalsurgery:Generalsurgerys,Mentalhealth:Mentalhealths,
                                  Womenhealth:Womenhealths,
                                Myappointment:Myappointments,Dermato:Dermatologist,
                              Anesthesiologist : Anesthesiologists ,
                              InfectiousDiseases :InfectiousDisease,
                              GeneralCarePhysicians : GeneralCarePhysician

                            
                            });
const AuthStack = createStackNavigator({ SignIn: SignInScreen, Register: Register , Home :HomeScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
