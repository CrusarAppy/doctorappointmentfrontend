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
import Dermatologist from './Components/Doctorlist';
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
                                Myappointment:Myappointments,Dermato:Dermatologist});
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
