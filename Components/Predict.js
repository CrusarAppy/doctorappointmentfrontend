import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  SafeAreaView,
  Picker,
  Image,
  TouchableOpacity
} from 'react-native';

// @ts-ignore
import Modal from 'react-native-modal';

import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class Predict extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: null,
      scrollOffset: null,
      symptom1:"cramps",    
      symptom2:"diarrhoea",
      symptom3:"constipation",
      symptom4:"mild_fever",    
      symptom5:"abdominal_pain",  
      data : [] 
    };
    
  }
  static navigationOptions = {
    title: ' Disease Prediction',
    //header:null
  };
  
  componentDidMount(){    
   
   
   
  }
  handlePredict = () => {
    console.log(1);
    const url =`http://192.168.1.77:5000/?symptoms=${this.state.symptom1},${this.state.symptom2},${this.state.symptom3},${this.state.symptom4},${this.state.symptom5}`
    console.log(url)
    try{
      fetch(url)
      .then((response => response.text()))
      .then((responsejson) => {
        this.setState({loading:false,
            data:responsejson
        })
         // this.onSuccessSignIn(responsejson                       )
          console.log(responsejson)          

      })
      .catch(err => {
        //this.onFailSignIn()
        console.log(err)
      })
      
  }catch(err){          
      
      console.log(err);
  }
  }

  render() {
    

    return (
      <ScrollView style={{backgroundColor: '#6c83ab'}}>
      <View style={[styles.container]}>
        <Text style={[styles.text1]}>Choose sypmtoms here:</Text>
            <Picker selectedValue={this.state.sypmtom1}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({sypmtom1: itemValue})}> 
               <Picker.Item label = "abdominal_pain" value = "abdominal_pain" />
               <Picker.Item label = "stomach_bleeding" value = "stomach_bleeding" />
               <Picker.Item label = "distention_of_abdomen" value = "distention_of_abdomen" />
               <Picker.Item label = "history_of_alcohol_consumption" value = "history_of_alcohol_consumption" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "blood_in_sputum" value = "blood_in_sputum" />
               <Picker.Item label = "prominent_veins_on_calf" value = "prominent_veins_on_calf" />
               <Picker.Item label = "palpitations" value = "palpitations" />
               <Picker.Item label = "painful_walking" value = "painful_walking" />
               <Picker.Item label = "pus_filled_pimples" value = "pus_filled_pimples" />
               <Picker.Item label = "blackheads" value = "blackheads" />
               <Picker.Item label = "scurring" value = "scurring" />
               <Picker.Item label = "skin_peeling" value = "skin_peeling" />
               <Picker.Item label = "silver_like_dusting" value = "silver_like_dusting" />
               <Picker.Item label = "small_dents_in_nails" value = "small_dents_in_nails" />
               <Picker.Item label = "inflammatory_nails" value = "inflammatory_nails" />
               <Picker.Item label = "blister" value = "blister" />
               <Picker.Item label = "red_sore_around_nose" value = "red_sore_around_nose" />
               <Picker.Item label = "yellow_crust_ooze" value = "yellow_crust_ooze" />
               <Picker.Item label = "toxic_look_(typhos)" value = "toxic_look_(typhos)" />
               <Picker.Item label = "depression" value = "depression" />
               <Picker.Item label = "irritability" value = "irritability" />
               <Picker.Item label = "muscle_pain" value = "muscle_pain" />
               <Picker.Item label = "altered_sensorism" value = "altered_sensorism" />
               <Picker.Item label = "red_spots_over_body" value = "red_spots_over_body" />
               <Picker.Item label = "belly_pain" value = "belly_pain" />
               <Picker.Item label = "abnormal_mensturation" value = "abnormal_mensturation" />
               <Picker.Item label = "dischromic_patches" value = "dischromic_patches" />
               <Picker.Item label = "watering_from_eyes" value = "watering_from_eyes" />
               <Picker.Item label = "increased_appetite" value = "increased_appetite" />
               <Picker.Item label = "polyuria" value = "polyuria" />
               <Picker.Item label = "family_history" value = "family_history" />
               <Picker.Item label = "mucoid_sputum" value = "mucoid_sputum" />
               <Picker.Item label = "rusty_sputum" value = "rusty_sputum" />
               <Picker.Item label = "lack_of_comcentration" value = "lack_of_concentration" />
               <Picker.Item label = "visual_disturbances" value = "visual_disturbances" />
               <Picker.Item label = "receiving_blood_transfusion" value = "receiving_blood_transfusion" />
               <Picker.Item label = "receiving_unsterile_injection" value = "receiving_unsterile_injection" />
               <Picker.Item label = "coma" value = "coma" />
               <Picker.Item label = "phlegm" value = "phlegm" />
               <Picker.Item label = "swollen_extrimities" value = "swollen_extrimities" />
               <Picker.Item label = "excessive_hunger" value = "excessive_hunger" />
               <Picker.Item label = "extra_marital_contacts" value = "extra_marital_contacts" />
               <Picker.Item label = "drying_and_tingling_lips" value = "drying_and_tingling_lips" />
               <Picker.Item label = "slurred_speech" value = "slurred_speech" />
               <Picker.Item label = "knee_pain" value = "knee_pain" />
               <Picker.Item label = "hip_joint_pain" value = "hip_joint_pain" />
               <Picker.Item label = "muscle_weakness" value = "muscle_weakness" />
               <Picker.Item label = "stiff_neck" value = "stiff_neck" />
               <Picker.Item label = "swelling_joints" value = "swelling_joints" />
               <Picker.Item label = "movement_stiffness" value = "movement_stiffness" />
               <Picker.Item label = "spinning_movements" value = "spinning_movements" />
               <Picker.Item label = "loss_of_balance" value = "loss_of_balance" />
               <Picker.Item label = "unsteadiness" value = "unsteadiness" />
               <Picker.Item label = "loss_of_smell" value = "loss_of_smell" />
               <Picker.Item label = "bladder_discomfort" value = "bladder_discomfort" />
               <Picker.Item label = "foul_smell_of_urine" value = "foul_smell_of_urine" />
               <Picker.Item label = "continuous_feel_of_urine" value = "continuous_feel_of_urine" />
               <Picker.Item label = "passage_of_gases" value = "passage_of_gases" />
               <Picker.Item label = "internal_itching" value = "inernal_itching" />
               <Picker.Item label = "weakness_of_one_body_side" value = "weakness_of_one_body_side" />
               <Picker.Item label = "pain_during_bowel_movements" value = "pain_during_bowel_movements" />
               <Picker.Item label = "pain_in_anal_region" value = "pain_in_anal_region" />
               <Picker.Item label = "bloody_stool" value = "bloody_stool" />
               <Picker.Item label = "irritation_in_anus" value = "irritation_in_anus" />
               <Picker.Item label = "neck_pain" value = "neck_pain" />
               <Picker.Item label = "bruising" value = "brusing" />
               <Picker.Item label = "obesity" value = "obesity" />
               <Picker.Item label = "puffy_face_and_eyes" value = "puffy_face_and_eyes" />
               <Picker.Item label = "enlarged_thyroid" value = "enlarged_thyroid" />
               <Picker.Item label = "brittle_nails" value = "brittle_nails" />
               <Picker.Item label = "swollen_blood_vessels" value = "swollen_blood_vessels" />    
               <Picker.Item label = "swollen_legs" value = "swollen_legs" />
               <Picker.Item label = "fast_heart_rate" value = "fast_heart_rate" />
               <Picker.Item label = "throat_irritation" value = "throat_irritation" />
               <Picker.Item label = "redness_of_eyes" value = "redness_of_eyes" />
               <Picker.Item label = "sinus_pressure" value = "sinus_pressure" />
               <Picker.Item label = "runny_nose" value = "runny_nose" />
               <Picker.Item label = "congestion" value = "congestion" />
               <Picker.Item label = "weakness_in_limbs" value = "weakness_in_limbs" />
               <Picker.Item label = "mild_fever" value = "mild_fever" />
               <Picker.Item label = "yellow_urine" value = "yellow_urine" />
               <Picker.Item label = "yellowing_of_eyes" value = "yellowing_of_eyes" />
               <Picker.Item label = "acute_liver_failure" value = "acute_liver_failure" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "swelling_of_stomach" value = "swelling_of_stomach" />
               <Picker.Item label = "swelled_lymph_nodes" value = "swelled_lymph_nodes" />
               <Picker.Item label = "malaise" value = "malaise" />
               <Picker.Item label = "blurred_and_distorted_vision" value = "blurred_and_distorted_vision" />
               <Picker.Item label = "Diarrhoea" value = "diarrhoea" />
               <Picker.Item label = "Back pain" value = "back_pain" />
               <Picker.Item label = "constipation" value = "constipation" />
               <Picker.Item label = "Chest Pain" value = "chest_pain" />
               <Picker.Item label = "Knee Pain" value = "knee_pain" />
               <Picker.Item label = "Yellow Urine" value = "yellow_urine" />
               <Picker.Item label = "Cramps" value = "cramps" />              
               <Picker.Item label = "Diziness" value = "dizziness" />
               <Picker.Item label = "mild fever" value = "mild_fever" />
               
            </Picker>
            <Picker selectedValue={this.state.sypmtom2}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({sypmtom2: itemValue})}>
               
               <Picker.Item label = "abdominal_pain" value = "abdominal_pain" />
               <Picker.Item label = "stomach_bleeding" value = "stomach_bleeding" />
               <Picker.Item label = "distention_of_abdomen" value = "distention_of_abdomen" />
               <Picker.Item label = "history_of_alcohol_consumption" value = "history_of_alcohol_consumption" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "blood_in_sputum" value = "blood_in_sputum" />
               <Picker.Item label = "prominent_veins_on_calf" value = "prominent_veins_on_calf" />
               <Picker.Item label = "palpitations" value = "palpitations" />
               <Picker.Item label = "painful_walking" value = "painful_walking" />
               <Picker.Item label = "pus_filled_pimples" value = "pus_filled_pimples" />
               <Picker.Item label = "blackheads" value = "blackheads" />
               <Picker.Item label = "scurring" value = "scurring" />
               <Picker.Item label = "skin_peeling" value = "skin_peeling" />
               <Picker.Item label = "silver_like_dusting" value = "silver_like_dusting" />
               <Picker.Item label = "small_dents_in_nails" value = "small_dents_in_nails" />
               <Picker.Item label = "inflammatory_nails" value = "inflammatory_nails" />
               <Picker.Item label = "blister" value = "blister" />
               <Picker.Item label = "red_sore_around_nose" value = "red_sore_around_nose" />
               <Picker.Item label = "yellow_crust_ooze" value = "yellow_crust_ooze" />
               <Picker.Item label = "toxic_look_(typhos)" value = "toxic_look_(typhos)" />
               <Picker.Item label = "depression" value = "depression" />
               <Picker.Item label = "irritability" value = "irritability" />
               <Picker.Item label = "muscle_pain" value = "muscle_pain" />
               <Picker.Item label = "altered_sensorism" value = "altered_sensorism" />
               <Picker.Item label = "red_spots_over_body" value = "red_spots_over_body" />
               <Picker.Item label = "belly_pain" value = "belly_pain" />
               <Picker.Item label = "abnormal_mensturation" value = "abnormal_mensturation" />
               <Picker.Item label = "dischromic_patches" value = "dischromic_patches" />
               <Picker.Item label = "watering_from_eyes" value = "watering_from_eyes" />
               <Picker.Item label = "increased_appetite" value = "increased_appetite" />
               <Picker.Item label = "polyuria" value = "polyuria" />
               <Picker.Item label = "family_history" value = "family_history" />
               <Picker.Item label = "mucoid_sputum" value = "mucoid_sputum" />
               <Picker.Item label = "rusty_sputum" value = "rusty_sputum" />
               <Picker.Item label = "lack_of_comcentration" value = "lack_of_concentration" />
               <Picker.Item label = "visual_disturbances" value = "visual_disturbances" />
               <Picker.Item label = "receiving_blood_transfusion" value = "receiving_blood_transfusion" />
               <Picker.Item label = "receiving_unsterile_injection" value = "receiving_unsterile_injection" />
               <Picker.Item label = "coma" value = "coma" />
               <Picker.Item label = "phlegm" value = "phlegm" />
               <Picker.Item label = "swollen_extrimities" value = "swollen_extrimities" />
               <Picker.Item label = "excessive_hunger" value = "excessive_hunger" />
               <Picker.Item label = "extra_marital_contacts" value = "extra_marital_contacts" />
               <Picker.Item label = "drying_and_tingling_lips" value = "drying_and_tingling_lips" />
               <Picker.Item label = "slurred_speech" value = "slurred_speech" />
               <Picker.Item label = "knee_pain" value = "knee_pain" />
               <Picker.Item label = "hip_joint_pain" value = "hip_joint_pain" />
               <Picker.Item label = "muscle_weakness" value = "muscle_weakness" />
               <Picker.Item label = "stiff_neck" value = "stiff_neck" />
               <Picker.Item label = "swelling_joints" value = "swelling_joints" />
               <Picker.Item label = "movement_stiffness" value = "movement_stiffness" />
               <Picker.Item label = "spinning_movements" value = "spinning_movements" />
               <Picker.Item label = "loss_of_balance" value = "loss_of_balance" />
               <Picker.Item label = "unsteadiness" value = "unsteadiness" />
               <Picker.Item label = "loss_of_smell" value = "loss_of_smell" />
               <Picker.Item label = "bladder_discomfort" value = "bladder_discomfort" />
               <Picker.Item label = "foul_smell_of_urine" value = "foul_smell_of_urine" />
               <Picker.Item label = "continuous_feel_of_urine" value = "continuous_feel_of_urine" />
               <Picker.Item label = "passage_of_gases" value = "passage_of_gases" />
               <Picker.Item label = "internal_itching" value = "inernal_itching" />
               <Picker.Item label = "weakness_of_one_body_side" value = "weakness_of_one_body_side" />
               <Picker.Item label = "pain_during_bowel_movements" value = "pain_during_bowel_movements" />
               <Picker.Item label = "pain_in_anal_region" value = "pain_in_anal_region" />
               <Picker.Item label = "bloody_stool" value = "bloody_stool" />
               <Picker.Item label = "irritation_in_anus" value = "irritation_in_anus" />
               <Picker.Item label = "neck_pain" value = "neck_pain" />
               <Picker.Item label = "bruising" value = "brusing" />
               <Picker.Item label = "obesity" value = "obesity" />
               <Picker.Item label = "puffy_face_and_eyes" value = "puffy_face_and_eyes" />
               <Picker.Item label = "enlarged_thyroid" value = "enlarged_thyroid" />
               <Picker.Item label = "brittle_nails" value = "brittle_nails" />
               <Picker.Item label = "swollen_blood_vessels" value = "swollen_blood_vessels" />    
               <Picker.Item label = "swollen_legs" value = "swollen_legs" />
               <Picker.Item label = "fast_heart_rate" value = "fast_heart_rate" />
               <Picker.Item label = "throat_irritation" value = "throat_irritation" />
               <Picker.Item label = "redness_of_eyes" value = "redness_of_eyes" />
               <Picker.Item label = "sinus_pressure" value = "sinus_pressure" />
               <Picker.Item label = "runny_nose" value = "runny_nose" />
               <Picker.Item label = "congestion" value = "congestion" />
               <Picker.Item label = "weakness_in_limbs" value = "weakness_in_limbs" />
               <Picker.Item label = "mild_fever" value = "mild_fever" />
               <Picker.Item label = "yellow_urine" value = "yellow_urine" />
               <Picker.Item label = "yellowing_of_eyes" value = "yellowing_of_eyes" />
               <Picker.Item label = "acute_liver_failure" value = "acute_liver_failure" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "swelling_of_stomach" value = "swelling_of_stomach" />
               <Picker.Item label = "swelled_lymph_nodes" value = "swelled_lymph_nodes" />
               <Picker.Item label = "malaise" value = "malaise" />
               <Picker.Item label = "blurred_and_distorted_vision" value = "blurred_and_distorted_vision" />
               <Picker.Item label = "Diarrhoea" value = "diarrhoea" />
               <Picker.Item label = "Back pain" value = "back_pain" />
               <Picker.Item label = "constipation" value = "constipation" />
               <Picker.Item label = "Chest Pain" value = "chest_pain" />
               <Picker.Item label = "Knee Pain" value = "knee_pain" />
               <Picker.Item label = "Yellow Urine" value = "yellow_urine" />
               <Picker.Item label = "Cramps" value = "cramps" />              
               <Picker.Item label = "Diziness" value = "dizziness" />
               <Picker.Item label = "mild fever" value = "mild_fever" />
               </Picker>
            <Picker selectedValue={this.state.sypmtom3}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({sypmtom3: itemValue})}>              
               
               <Picker.Item label = "abdominal_pain" value = "abdominal_pain" />
               <Picker.Item label = "stomach_bleeding" value = "stomach_bleeding" />
               <Picker.Item label = "distention_of_abdomen" value = "distention_of_abdomen" />
               <Picker.Item label = "history_of_alcohol_consumption" value = "history_of_alcohol_consumption" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "blood_in_sputum" value = "blood_in_sputum" />
               <Picker.Item label = "prominent_veins_on_calf" value = "prominent_veins_on_calf" />
               <Picker.Item label = "palpitations" value = "palpitations" />
               <Picker.Item label = "painful_walking" value = "painful_walking" />
               <Picker.Item label = "pus_filled_pimples" value = "pus_filled_pimples" />
               <Picker.Item label = "blackheads" value = "blackheads" />
               <Picker.Item label = "scurring" value = "scurring" />
               <Picker.Item label = "skin_peeling" value = "skin_peeling" />
               <Picker.Item label = "silver_like_dusting" value = "silver_like_dusting" />
               <Picker.Item label = "small_dents_in_nails" value = "small_dents_in_nails" />
               <Picker.Item label = "inflammatory_nails" value = "inflammatory_nails" />
               <Picker.Item label = "blister" value = "blister" />
               <Picker.Item label = "red_sore_around_nose" value = "red_sore_around_nose" />
               <Picker.Item label = "yellow_crust_ooze" value = "yellow_crust_ooze" />
               <Picker.Item label = "toxic_look_(typhos)" value = "toxic_look_(typhos)" />
               <Picker.Item label = "depression" value = "depression" />
               <Picker.Item label = "irritability" value = "irritability" />
               <Picker.Item label = "muscle_pain" value = "muscle_pain" />
               <Picker.Item label = "altered_sensorism" value = "altered_sensorism" />
               <Picker.Item label = "red_spots_over_body" value = "red_spots_over_body" />
               <Picker.Item label = "belly_pain" value = "belly_pain" />
               <Picker.Item label = "abnormal_mensturation" value = "abnormal_mensturation" />
               <Picker.Item label = "dischromic_patches" value = "dischromic_patches" />
               <Picker.Item label = "watering_from_eyes" value = "watering_from_eyes" />
               <Picker.Item label = "increased_appetite" value = "increased_appetite" />
               <Picker.Item label = "polyuria" value = "polyuria" />
               <Picker.Item label = "family_history" value = "family_history" />
               <Picker.Item label = "mucoid_sputum" value = "mucoid_sputum" />
               <Picker.Item label = "rusty_sputum" value = "rusty_sputum" />
               <Picker.Item label = "lack_of_comcentration" value = "lack_of_concentration" />
               <Picker.Item label = "visual_disturbances" value = "visual_disturbances" />
               <Picker.Item label = "receiving_blood_transfusion" value = "receiving_blood_transfusion" />
               <Picker.Item label = "receiving_unsterile_injection" value = "receiving_unsterile_injection" />
               <Picker.Item label = "coma" value = "coma" />
               <Picker.Item label = "phlegm" value = "phlegm" />
               <Picker.Item label = "swollen_extrimities" value = "swollen_extrimities" />
               <Picker.Item label = "excessive_hunger" value = "excessive_hunger" />
               <Picker.Item label = "extra_marital_contacts" value = "extra_marital_contacts" />
               <Picker.Item label = "drying_and_tingling_lips" value = "drying_and_tingling_lips" />
               <Picker.Item label = "slurred_speech" value = "slurred_speech" />
               <Picker.Item label = "knee_pain" value = "knee_pain" />
               <Picker.Item label = "hip_joint_pain" value = "hip_joint_pain" />
               <Picker.Item label = "muscle_weakness" value = "muscle_weakness" />
               <Picker.Item label = "stiff_neck" value = "stiff_neck" />
               <Picker.Item label = "swelling_joints" value = "swelling_joints" />
               <Picker.Item label = "movement_stiffness" value = "movement_stiffness" />
               <Picker.Item label = "spinning_movements" value = "spinning_movements" />
               <Picker.Item label = "loss_of_balance" value = "loss_of_balance" />
               <Picker.Item label = "unsteadiness" value = "unsteadiness" />
               <Picker.Item label = "loss_of_smell" value = "loss_of_smell" />
               <Picker.Item label = "bladder_discomfort" value = "bladder_discomfort" />
               <Picker.Item label = "foul_smell_of_urine" value = "foul_smell_of_urine" />
               <Picker.Item label = "continuous_feel_of_urine" value = "continuous_feel_of_urine" />
               <Picker.Item label = "passage_of_gases" value = "passage_of_gases" />
               <Picker.Item label = "internal_itching" value = "inernal_itching" />
               <Picker.Item label = "weakness_of_one_body_side" value = "weakness_of_one_body_side" />
               <Picker.Item label = "pain_during_bowel_movements" value = "pain_during_bowel_movements" />
               <Picker.Item label = "pain_in_anal_region" value = "pain_in_anal_region" />
               <Picker.Item label = "bloody_stool" value = "bloody_stool" />
               <Picker.Item label = "irritation_in_anus" value = "irritation_in_anus" />
               <Picker.Item label = "neck_pain" value = "neck_pain" />
               <Picker.Item label = "bruising" value = "brusing" />
               <Picker.Item label = "obesity" value = "obesity" />
               <Picker.Item label = "puffy_face_and_eyes" value = "puffy_face_and_eyes" />
               <Picker.Item label = "enlarged_thyroid" value = "enlarged_thyroid" />
               <Picker.Item label = "brittle_nails" value = "brittle_nails" />
               <Picker.Item label = "swollen_blood_vessels" value = "swollen_blood_vessels" />    
               <Picker.Item label = "swollen_legs" value = "swollen_legs" />
               <Picker.Item label = "fast_heart_rate" value = "fast_heart_rate" />
               <Picker.Item label = "throat_irritation" value = "throat_irritation" />
               <Picker.Item label = "redness_of_eyes" value = "redness_of_eyes" />
               <Picker.Item label = "sinus_pressure" value = "sinus_pressure" />
               <Picker.Item label = "runny_nose" value = "runny_nose" />
               <Picker.Item label = "congestion" value = "congestion" />
               <Picker.Item label = "weakness_in_limbs" value = "weakness_in_limbs" />
               <Picker.Item label = "mild_fever" value = "mild_fever" />
               <Picker.Item label = "yellow_urine" value = "yellow_urine" />
               <Picker.Item label = "yellowing_of_eyes" value = "yellowing_of_eyes" />
               <Picker.Item label = "acute_liver_failure" value = "acute_liver_failure" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "swelling_of_stomach" value = "swelling_of_stomach" />
               <Picker.Item label = "swelled_lymph_nodes" value = "swelled_lymph_nodes" />
               <Picker.Item label = "malaise" value = "malaise" />
               <Picker.Item label = "blurred_and_distorted_vision" value = "blurred_and_distorted_vision" />
               <Picker.Item label = "Diarrhoea" value = "diarrhoea" />
               <Picker.Item label = "Back pain" value = "back_pain" />
               <Picker.Item label = "constipation" value = "constipation" />
               <Picker.Item label = "Chest Pain" value = "chest_pain" />
               <Picker.Item label = "Knee Pain" value = "knee_pain" />
               <Picker.Item label = "Yellow Urine" value = "yellow_urine" />
               <Picker.Item label = "Cramps" value = "cramps" />              
               <Picker.Item label = "Diziness" value = "dizziness" />
               <Picker.Item label = "mild fever" value = "mild_fever" />
            </Picker>
            <Picker selectedValue={this.state.sypmtom4}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({sypmtom4: itemValue})}>
                
               <Picker.Item label = "abdominal_pain" value = "abdominal_pain" />
               <Picker.Item label = "stomach_bleeding" value = "stomach_bleeding" />
               <Picker.Item label = "distention_of_abdomen" value = "distention_of_abdomen" />
               <Picker.Item label = "history_of_alcohol_consumption" value = "history_of_alcohol_consumption" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "blood_in_sputum" value = "blood_in_sputum" />
               <Picker.Item label = "prominent_veins_on_calf" value = "prominent_veins_on_calf" />
               <Picker.Item label = "palpitations" value = "palpitations" />
               <Picker.Item label = "painful_walking" value = "painful_walking" />
               <Picker.Item label = "pus_filled_pimples" value = "pus_filled_pimples" />
               <Picker.Item label = "blackheads" value = "blackheads" />
               <Picker.Item label = "scurring" value = "scurring" />
               <Picker.Item label = "skin_peeling" value = "skin_peeling" />
               <Picker.Item label = "silver_like_dusting" value = "silver_like_dusting" />
               <Picker.Item label = "small_dents_in_nails" value = "small_dents_in_nails" />
               <Picker.Item label = "inflammatory_nails" value = "inflammatory_nails" />
               <Picker.Item label = "blister" value = "blister" />
               <Picker.Item label = "red_sore_around_nose" value = "red_sore_around_nose" />
               <Picker.Item label = "yellow_crust_ooze" value = "yellow_crust_ooze" />
               <Picker.Item label = "toxic_look_(typhos)" value = "toxic_look_(typhos)" />
               <Picker.Item label = "depression" value = "depression" />
               <Picker.Item label = "irritability" value = "irritability" />
               <Picker.Item label = "muscle_pain" value = "muscle_pain" />
               <Picker.Item label = "altered_sensorism" value = "altered_sensorism" />
               <Picker.Item label = "red_spots_over_body" value = "red_spots_over_body" />
               <Picker.Item label = "belly_pain" value = "belly_pain" />
               <Picker.Item label = "abnormal_mensturation" value = "abnormal_mensturation" />
               <Picker.Item label = "dischromic_patches" value = "dischromic_patches" />
               <Picker.Item label = "watering_from_eyes" value = "watering_from_eyes" />
               <Picker.Item label = "increased_appetite" value = "increased_appetite" />
               <Picker.Item label = "polyuria" value = "polyuria" />
               <Picker.Item label = "family_history" value = "family_history" />
               <Picker.Item label = "mucoid_sputum" value = "mucoid_sputum" />
               <Picker.Item label = "rusty_sputum" value = "rusty_sputum" />
               <Picker.Item label = "lack_of_comcentration" value = "lack_of_concentration" />
               <Picker.Item label = "visual_disturbances" value = "visual_disturbances" />
               <Picker.Item label = "receiving_blood_transfusion" value = "receiving_blood_transfusion" />
               <Picker.Item label = "receiving_unsterile_injection" value = "receiving_unsterile_injection" />
               <Picker.Item label = "coma" value = "coma" />
               <Picker.Item label = "phlegm" value = "phlegm" />
               <Picker.Item label = "swollen_extrimities" value = "swollen_extrimities" />
               <Picker.Item label = "excessive_hunger" value = "excessive_hunger" />
               <Picker.Item label = "extra_marital_contacts" value = "extra_marital_contacts" />
               <Picker.Item label = "drying_and_tingling_lips" value = "drying_and_tingling_lips" />
               <Picker.Item label = "slurred_speech" value = "slurred_speech" />
               <Picker.Item label = "knee_pain" value = "knee_pain" />
               <Picker.Item label = "hip_joint_pain" value = "hip_joint_pain" />
               <Picker.Item label = "muscle_weakness" value = "muscle_weakness" />
               <Picker.Item label = "stiff_neck" value = "stiff_neck" />
               <Picker.Item label = "swelling_joints" value = "swelling_joints" />
               <Picker.Item label = "movement_stiffness" value = "movement_stiffness" />
               <Picker.Item label = "spinning_movements" value = "spinning_movements" />
               <Picker.Item label = "loss_of_balance" value = "loss_of_balance" />
               <Picker.Item label = "unsteadiness" value = "unsteadiness" />
               <Picker.Item label = "loss_of_smell" value = "loss_of_smell" />
               <Picker.Item label = "bladder_discomfort" value = "bladder_discomfort" />
               <Picker.Item label = "foul_smell_of_urine" value = "foul_smell_of_urine" />
               <Picker.Item label = "continuous_feel_of_urine" value = "continuous_feel_of_urine" />
               <Picker.Item label = "passage_of_gases" value = "passage_of_gases" />
               <Picker.Item label = "internal_itching" value = "inernal_itching" />
               <Picker.Item label = "weakness_of_one_body_side" value = "weakness_of_one_body_side" />
               <Picker.Item label = "pain_during_bowel_movements" value = "pain_during_bowel_movements" />
               <Picker.Item label = "pain_in_anal_region" value = "pain_in_anal_region" />
               <Picker.Item label = "bloody_stool" value = "bloody_stool" />
               <Picker.Item label = "irritation_in_anus" value = "irritation_in_anus" />
               <Picker.Item label = "neck_pain" value = "neck_pain" />
               <Picker.Item label = "bruising" value = "brusing" />
               <Picker.Item label = "obesity" value = "obesity" />
               <Picker.Item label = "puffy_face_and_eyes" value = "puffy_face_and_eyes" />
               <Picker.Item label = "enlarged_thyroid" value = "enlarged_thyroid" />
               <Picker.Item label = "brittle_nails" value = "brittle_nails" />
               <Picker.Item label = "swollen_blood_vessels" value = "swollen_blood_vessels" />    
               <Picker.Item label = "swollen_legs" value = "swollen_legs" />
               <Picker.Item label = "fast_heart_rate" value = "fast_heart_rate" />
               <Picker.Item label = "throat_irritation" value = "throat_irritation" />
               <Picker.Item label = "redness_of_eyes" value = "redness_of_eyes" />
               <Picker.Item label = "sinus_pressure" value = "sinus_pressure" />
               <Picker.Item label = "runny_nose" value = "runny_nose" />
               <Picker.Item label = "congestion" value = "congestion" />
               <Picker.Item label = "weakness_in_limbs" value = "weakness_in_limbs" />
               <Picker.Item label = "mild_fever" value = "mild_fever" />
               <Picker.Item label = "yellow_urine" value = "yellow_urine" />
               <Picker.Item label = "yellowing_of_eyes" value = "yellowing_of_eyes" />
               <Picker.Item label = "acute_liver_failure" value = "acute_liver_failure" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "swelling_of_stomach" value = "swelling_of_stomach" />
               <Picker.Item label = "swelled_lymph_nodes" value = "swelled_lymph_nodes" />
               <Picker.Item label = "malaise" value = "malaise" />
               <Picker.Item label = "blurred_and_distorted_vision" value = "blurred_and_distorted_vision" />
               <Picker.Item label = "Diarrhoea" value = "diarrhoea" />
               <Picker.Item label = "Back pain" value = "back_pain" />
               <Picker.Item label = "constipation" value = "constipation" />
               <Picker.Item label = "Chest Pain" value = "chest_pain" />
               <Picker.Item label = "Knee Pain" value = "knee_pain" />
               <Picker.Item label = "Yellow Urine" value = "yellow_urine" />
               <Picker.Item label = "Cramps" value = "cramps" />              
               <Picker.Item label = "Diziness" value = "dizziness" />
               <Picker.Item label = "mild fever" value = "mild_fever" />
            </Picker>
            <Picker selectedValue={this.state.sypmtom5}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({sypmtom5: itemValue})}>
                 
               <Picker.Item label = "abdominal_pain" value = "abdominal_pain" />
               <Picker.Item label = "stomach_bleeding" value = "stomach_bleeding" />
               <Picker.Item label = "distention_of_abdomen" value = "distention_of_abdomen" />
               <Picker.Item label = "history_of_alcohol_consumption" value = "history_of_alcohol_consumption" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "blood_in_sputum" value = "blood_in_sputum" />
               <Picker.Item label = "prominent_veins_on_calf" value = "prominent_veins_on_calf" />
               <Picker.Item label = "palpitations" value = "palpitations" />
               <Picker.Item label = "painful_walking" value = "painful_walking" />
               <Picker.Item label = "pus_filled_pimples" value = "pus_filled_pimples" />
               <Picker.Item label = "blackheads" value = "blackheads" />
               <Picker.Item label = "scurring" value = "scurring" />
               <Picker.Item label = "skin_peeling" value = "skin_peeling" />
               <Picker.Item label = "silver_like_dusting" value = "silver_like_dusting" />
               <Picker.Item label = "small_dents_in_nails" value = "small_dents_in_nails" />
               <Picker.Item label = "inflammatory_nails" value = "inflammatory_nails" />
               <Picker.Item label = "blister" value = "blister" />
               <Picker.Item label = "red_sore_around_nose" value = "red_sore_around_nose" />
               <Picker.Item label = "yellow_crust_ooze" value = "yellow_crust_ooze" />
               <Picker.Item label = "toxic_look_(typhos)" value = "toxic_look_(typhos)" />
               <Picker.Item label = "depression" value = "depression" />
               <Picker.Item label = "irritability" value = "irritability" />
               <Picker.Item label = "muscle_pain" value = "muscle_pain" />
               <Picker.Item label = "altered_sensorism" value = "altered_sensorism" />
               <Picker.Item label = "red_spots_over_body" value = "red_spots_over_body" />
               <Picker.Item label = "belly_pain" value = "belly_pain" />
               <Picker.Item label = "abnormal_mensturation" value = "abnormal_mensturation" />
               <Picker.Item label = "dischromic_patches" value = "dischromic_patches" />
               <Picker.Item label = "watering_from_eyes" value = "watering_from_eyes" />
               <Picker.Item label = "increased_appetite" value = "increased_appetite" />
               <Picker.Item label = "polyuria" value = "polyuria" />
               <Picker.Item label = "family_history" value = "family_history" />
               <Picker.Item label = "mucoid_sputum" value = "mucoid_sputum" />
               <Picker.Item label = "rusty_sputum" value = "rusty_sputum" />
               <Picker.Item label = "lack_of_comcentration" value = "lack_of_concentration" />
               <Picker.Item label = "visual_disturbances" value = "visual_disturbances" />
               <Picker.Item label = "receiving_blood_transfusion" value = "receiving_blood_transfusion" />
               <Picker.Item label = "receiving_unsterile_injection" value = "receiving_unsterile_injection" />
               <Picker.Item label = "coma" value = "coma" />
               <Picker.Item label = "phlegm" value = "phlegm" />
               <Picker.Item label = "swollen_extrimities" value = "swollen_extrimities" />
               <Picker.Item label = "excessive_hunger" value = "excessive_hunger" />
               <Picker.Item label = "extra_marital_contacts" value = "extra_marital_contacts" />
               <Picker.Item label = "drying_and_tingling_lips" value = "drying_and_tingling_lips" />
               <Picker.Item label = "slurred_speech" value = "slurred_speech" />
               <Picker.Item label = "knee_pain" value = "knee_pain" />
               <Picker.Item label = "hip_joint_pain" value = "hip_joint_pain" />
               <Picker.Item label = "muscle_weakness" value = "muscle_weakness" />
               <Picker.Item label = "stiff_neck" value = "stiff_neck" />
               <Picker.Item label = "swelling_joints" value = "swelling_joints" />
               <Picker.Item label = "movement_stiffness" value = "movement_stiffness" />
               <Picker.Item label = "spinning_movements" value = "spinning_movements" />
               <Picker.Item label = "loss_of_balance" value = "loss_of_balance" />
               <Picker.Item label = "unsteadiness" value = "unsteadiness" />
               <Picker.Item label = "loss_of_smell" value = "loss_of_smell" />
               <Picker.Item label = "bladder_discomfort" value = "bladder_discomfort" />
               <Picker.Item label = "foul_smell_of_urine" value = "foul_smell_of_urine" />
               <Picker.Item label = "continuous_feel_of_urine" value = "continuous_feel_of_urine" />
               <Picker.Item label = "passage_of_gases" value = "passage_of_gases" />
               <Picker.Item label = "internal_itching" value = "inernal_itching" />
               <Picker.Item label = "weakness_of_one_body_side" value = "weakness_of_one_body_side" />
               <Picker.Item label = "pain_during_bowel_movements" value = "pain_during_bowel_movements" />
               <Picker.Item label = "pain_in_anal_region" value = "pain_in_anal_region" />
               <Picker.Item label = "bloody_stool" value = "bloody_stool" />
               <Picker.Item label = "irritation_in_anus" value = "irritation_in_anus" />
               <Picker.Item label = "neck_pain" value = "neck_pain" />
               <Picker.Item label = "bruising" value = "brusing" />
               <Picker.Item label = "obesity" value = "obesity" />
               <Picker.Item label = "puffy_face_and_eyes" value = "puffy_face_and_eyes" />
               <Picker.Item label = "enlarged_thyroid" value = "enlarged_thyroid" />
               <Picker.Item label = "brittle_nails" value = "brittle_nails" />
               <Picker.Item label = "swollen_blood_vessels" value = "swollen_blood_vessels" />    
               <Picker.Item label = "swollen_legs" value = "swollen_legs" />
               <Picker.Item label = "fast_heart_rate" value = "fast_heart_rate" />
               <Picker.Item label = "throat_irritation" value = "throat_irritation" />
               <Picker.Item label = "redness_of_eyes" value = "redness_of_eyes" />
               <Picker.Item label = "sinus_pressure" value = "sinus_pressure" />
               <Picker.Item label = "runny_nose" value = "runny_nose" />
               <Picker.Item label = "congestion" value = "congestion" />
               <Picker.Item label = "weakness_in_limbs" value = "weakness_in_limbs" />
               <Picker.Item label = "mild_fever" value = "mild_fever" />
               <Picker.Item label = "yellow_urine" value = "yellow_urine" />
               <Picker.Item label = "yellowing_of_eyes" value = "yellowing_of_eyes" />
               <Picker.Item label = "acute_liver_failure" value = "acute_liver_failure" />
               <Picker.Item label = "fluid_overload" value = "fluid_overload" />
               <Picker.Item label = "swelling_of_stomach" value = "swelling_of_stomach" />
               <Picker.Item label = "swelled_lymph_nodes" value = "swelled_lymph_nodes" />
               <Picker.Item label = "malaise" value = "malaise" />
               <Picker.Item label = "blurred_and_distorted_vision" value = "blurred_and_distorted_vision" />
               <Picker.Item label = "Diarrhoea" value = "diarrhoea" />
               <Picker.Item label = "Back pain" value = "back_pain" />
               <Picker.Item label = "constipation" value = "constipation" />
               <Picker.Item label = "Chest Pain" value = "chest_pain" />
               <Picker.Item label = "Knee Pain" value = "knee_pain" />
               <Picker.Item label = "Yellow Urine" value = "yellow_urine" />
               <Picker.Item label = "Cramps" value = "cramps" />              
               <Picker.Item label = "Diziness" value = "dizziness" />
               <Picker.Item label = "mild fever" value = "mild_fever" />
            </Picker> 
            <TouchableOpacity style={[styles.loginButton]} onPress={this.handlePredict}>
                        <Text style={[styles.text1]}>Predict</Text>
            </TouchableOpacity>

            <View style={{marginBottom:20,marginTop:13}}>
              <Text>Predicted disease : {this.state.data}</Text>
            </View>

{/*             
            <Button>
             {this.state.data}
            </Button>                  
          */}
        
        
        <Text style={[styles.text1]}>Doctor you are prefered</Text>
        <ScrollView horizontal={true}>                
              <View style={[styles.container1]}>
                <TouchableOpacity style={[styles.vflex]} onPress={this._dentist}> 
                <Image
                        style={[styles.image]}
                        source={require('./amrit.jpg')}
                        />                
                <Text>cardilogist</Text>  
                <Text>Hemja,pokhara</Text>                          
                </TouchableOpacity>
                  
                <TouchableOpacity style={[styles.vflex]} onPress={this._undercons}>
                <Image
                        style={[styles.image]}
                        source={require('./kabil.jpg')}
                        />
                <Text>Dermatologist</Text> 
                <Text>Parsyang,Pokhara</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]} onPress={this._dentist}> 
                <Image
                        style={[styles.image]}
                        source={require('./roshan.jpg')}
                        />                
                <Text>Dentists</Text>   
                <Text>Gharmi,Pokhara</Text>             
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]} onPress={this._undercons}>
                <Image
                        style={[styles.image]}
                        source={require('./kabil.jpg')}
                        />
                <Text>Dermatologist</Text> 
                <Text>Malepatan,Pokhara</Text>
                </TouchableOpacity>
                </View>                
             </ScrollView>
             </View>
      </ScrollView>
        )}
        }
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',            
          },
          container1: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height:180,
            width:'100%',
            marginTop:10,
          //  borderBottomColor:'#079126',
            backgroundColor:'#d1e6d7',
            flexDirection:'row'
          },
          vflex:{
            flexDirection:"column",
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            marginLeft:15,
           justifyContent:'center',
          }, 
          gap: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#c5dbcc',
            height:10
          },
          content: {
            backgroundColor: 'white',
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
          loginButton:{         
            marginTop:90,
            width:230,
            height:45,
            borderRadius:10,
            marginLeft:0,
            backgroundColor:'#5a8ad6',
            marginBottom:15,
            justifyContent:'center',
            alignItems:'center'
        }, 
        text: {
          color: '#4d5454',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop:18,
          marginBottom:25,          
         
         },
         text1: {
          color: '#4d5454',
          fontWeight: 'bold',
          fontSize: 18,
          marginTop:0,
          marginBottom:15
         
         },  
         inputbox:{
          width:250,
          height:40,     
          marginTop:20,
          marginLeft:15 ,
          backgroundColor:'#d8dce3' ,
          borderRadius:20,
          marginBottom:15          
        },
        image:{
          height:100,
          justifyContent: 'center',
          alignItems: 'center',
          width:120,
          borderRadius:200
  
      } ,
      text1: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:4
       
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
        });